import requests
from bs4 import BeautifulSoup
from AIOAS.utils import Utils
import re


class FourAnime:
    util = Utils()

    def get_anime(self, url):
        result = []
        try:
            with requests.get(url) as r:
                soup = BeautifulSoup(r.text, "html.parser")
                animes = soup.find_all(id="headerDIV_3")
                for anime in animes:
                    aninfo = anime.find(id="headerA_5")
                    result.append(
                        {
                            aninfo.find(id="headerIMG_6").attrs["alt"]: aninfo.attrs[
                                "href"
                            ]
                        }
                    )
        except:
            result = self.get_anime(url)
        return result

    def get_all_anime(self):
        result = []
        page = None
        while page is None or page > 0:
            page = self.get_anime(
                f"https://4anime.to/browse?sort_order=title+asc&sf_paged={x}"
            )
            result += page
        return result

    def get_episodes_from_slug(self, slug):
        result = {"episodes": [], "amount": 0}
        with requests.get(f"https://4anime.to/anime/{slug}") as r:
            soup = BeautifulSoup(r.text, "html.parser")
            episodes = soup.find("ul", {"class": "episodes range active"}).find_all(
                "li"
            )
            result["amount"] = len(episodes)
            for x in episodes:
                result["episodes"].append(str(x.find("a").attrs["href"]))
        return result

    def get_source_from_ep_url(self, url):
        with requests.get(url) as r:
            soup = BeautifulSoup(r.text, "html.parser")
            script = soup.find("div", {"class": "mirror-footer cl"}).find("script")
            try:
                unpacked = self.util.better_unpack(str(script)).replace("\\\\", "")
            except AttributeError:
                unpacked = str(script).replace("\\", "")
            result = re.search(
                '<a class="mirror_dl" href="(.*)"><i class=', unpacked
            ).group(1)
        return result
