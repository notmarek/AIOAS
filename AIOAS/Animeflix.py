import requests
import json


class Animeflix:
    def search(self, query):
        with requests.get(f"https://animeflix.io/api/search?q={query}") as r:
            return json.loads(r.text)

    def get_info_from_slug(self, slug):
        with requests.get(
            f"https://animeflix.io/api/anime/detail?slug={slug}&load=wallpapers,genres"
        ) as r:
            return json.loads(r.text)

    def get_episodes(self, anime_id):
        page = 1
        result = {}
        temp_data = {}
        while result == {} or len(temp_data["data"]) == 30:
            if page == 1:
                url = f"https://animeflix.io/api/episodes?anime_id={anime_id}&limit=30&sort=DESC"
            else:
                url = f"https://animeflix.io/api/episodes?anime_id={anime_id}&limit=30&page={page}&sort=DESC"
            with requests.get(url) as r:
                temp_data = json.loads(r.text)
                if page == 1:
                    result = temp_data
                else:
                    result["data"] += temp_data["data"]
                    result["meta"] = temp_data["meta"]
        return result

    def get_sources_from_ep_id(self, ep_id):
        with requests.get(f"https://animeflix.io/api/videos?episode_id={ep_id}") as r:
            return json.loads(r.text)
