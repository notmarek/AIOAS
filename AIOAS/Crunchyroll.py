import requests
import re
import json
import cloudscraper
import string
import random

class Crunchyroll:
    class Web:
        def __init__(self):
            self.cf = cloudscraper.create_scraper()

        def get_sources_from_ep_url(self, url):
            with self.cf.get(url) as r:
                sources = re.search('vilos.config.media = (.*)vilos.config.analytics =', r.text.replace('\n','')).group(1).replace(';','')
                return json.loads(sources)['streams']

    class API:
        def __init__(self, account):
            self.account = account
            self.session = self.__get_session()
            if account is not None:
                self.__login(account)

        def __get_session(self):
            letters = string.ascii_lowercase
            device_id = ''.join(random.choice(letters) for i in range(15))
            with requests.get(
                    f'https://api.crunchyroll.com/start_session.1.json?locale=enUS&device_id={device_id}&device_type=com.crunchyroll.crunchyroid&version=457&access_token=WveH9VkPLrXvuNm') as url:
                data = json.loads(url.text)['data']['session_id']
            return data

        def __login(self, account):
            user, password = account.split(':')
            data = {'account': user, 'password': password, 'session_id': self.session}
            with requests.post(
                    f'https://api.crunchyroll.com/login.0.json', data=data) as url:
                return True

        def __get_series_id(self, query):
            with requests.get(
                    f'https://api.crunchyroll.com/autocomplete.0.json?q={query}&session_id={self.session}&media_types=anime%7Cdrama') as url:
                if query == 'naruto':
                    data = json.loads(url.text)['data'][1]
                else:
                    data = json.loads(url.text)['data'][0]
                return data['series_id']

        def __get_collection_id(self, series_id, season, only_season):
            fields = 'collections.collection_id%2Ccollections.series_id%2Ccollections.name%2Ccollections.series_name%2Ccollections.description%2Ccollections.media_type%2Ccollections.season%2Ccollections.complete%2Ccollections.landscape_image%2Ccollections.portrait_image%2Ccollections.availability_notes%2Ccollections.media_count%2Ccollections.premium_only%2Ccollections.created%2Ccollections.mature'
            with requests.get(
                    f'https://api.crunchyroll.com/list_collections.0.json?fields={fields}&series_id={series_id}&sort=desc&session_id={self.session}') as url:
                data = json.loads(url.text)['data']
                returned = []
                if len(data) > 1:
                    for x in data:
                        if 'dub' not in x['name'].lower() and 'oad' not in x['name'].lower():
                            if not only_season:
                                returned.append(x['collection_id'])
                            else:
                                if x['season'] == season:
                                    returned.append(x['collection_id'])
                else:
                    return [data[0]['collection_id']]
                return returned

        def __get_episodes(self, collection_id):
            fields = 'media.screenshot_image%2Cmedia.available%2Cmedia.premium_only%2Cmedia.media_id%2Cmedia.episode_number%2Cmedia.name%2Cmedia.collection_id%2Cmedia.collection_name%2Cmedia.playhead%2Cmedia.available_time%2Cmedia.duration%2Cmedia.url%2Cmedia.series_name%2Cmedia.series_id%2Cimage.wide_url%2Cimage.fwide_url%2Cimage.widestar_url%2Cimage.fwidestar_url%2Cimage.full_url%2Cmedia.etp_guid%2Cmedia.collection_etp_guid'
            with requests.get(
                    f'https://api.crunchyroll.com/list_media.0.json?fields={fields}&collection_id={collection_id}&sort=asc&session_id={self.session}&limit=5000') as url:
                if json.loads(url.text)['error'] is not True:
                    return json.loads(url.text)['data']
                else:
                    return None

        def __get_hls_url(self, episode_id):
            stuff = f'%5B%7B%22method%22%3A%22POST%22%2C%22api_method%22%3A%22info%22%2C%22method_version%22%3A0%2C%22params%22%3A%7B%22media_id%22%3A%22{episode_id}%22%2C%22locale%22%3A%22enUS%22%7D%7D%2C%7B%22method%22%3A%22GET%22%2C%22api_method%22%3A%22list_ads%22%2C%22method_version%22%3A2%2C%22params%22%3A%7B%22media_id%22%3A%22{episode_id}%22%2C%22device_idfa%22%3A%2298d280c1-7990-4b51-dsas-d221f6f3b895%22%2C%22locale%22%3A%22enUS%22%7D%7D%5D'
            with requests.get(
                    f'https://api.crunchyroll.com/batch.0.json?fields=media.collection_id%2Cmedia.media_id%2Cmedia.description%2Cmedia.collection_name%2Cmedia.series_id%2Cmedia.url%2Cmedia.stream_data%2Cmedia.duration%2Cmedia.playhead%2Cmedia.available%2Cmedia.series_etp_guid%2Cmedia.episode_number%2Cmedia.fwide_url%2Cmedia.screenshot_image%2Cmedia.etp_guid%2Cmedia.collection_etp_guid%2Cmedia.bif_url%2Cmedia.media_type%2C+media.series_name%2Cmedia.premium_only%2Cmedia.name&requests={stuff}&session_id={self.session}') as url:
                data = json.loads(url.text)
                print(data)
                for x in data['data'][0]['body']['data']['stream_data']['streams']:
                    if x['quality'] == 'adaptive':
                        return x['url'],x['expires']

        def search(self, query):
            with requests.get(
                    f'https://api.crunchyroll.com/autocomplete.0.json?q={query}&session_id={self.session}&media_types=anime%7Cdrama') as url:
                return json.loads(url.text)

        def get_anime(self, anime, episode, season=1, only_season=False):
            series_id = self.__get_series_id(anime)
            collection_id = self.__get_collection_id(series_id, season, only_season)
            episodes = []
            for x in collection_id:
                episodes.append(self.__get_episodes(x))
            for epp in episodes:
                for ep in epp:
                    if not ep['premium_only'] or self.account is not None:
                        if (ep['episode_number'] == str(episode)):
                            media = self.__get_hls_url(ep['media_id'])
                            return media
