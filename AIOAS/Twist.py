from AIOAS.utils import Utils
from requests.utils import quote
import requests
import json


class Twist:
    util = Utils()
    headers = {"x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"}

    def __untwist(self, url):
        decrypted = (
            self.util.decrypt((url).encode("utf-8"), self.util.KEY)
            .decode("utf-8")
            .lstrip(" ")
        )
        escaped = quote(decrypted, safe="~@#$&()*!+=:;,.?/'")
        return "https://turbulance.animex.tech" + escaped

    def get_all_anime(self):
        with requests.get("https://twist.moe/api/anime", headers=self.headers) as r:
            return json.loads(r.text)

    def get_info_from_slug(self, slug):
        with requests.get(
            f"https://twist.moe/api/anime/{slug}", headers=self.headers
        ) as r:
            return json.loads(r.text)

    def get_sources_from_slug(self, slug):
        with requests.get(
            f"https://twist.moe/api/anime/{slug}/sources", headers=self.headers
        ) as r:
            sources = json.loads(r.text)
            for source in sources:
                source["source"] = self.__untwist(source["source"])
        return sources
