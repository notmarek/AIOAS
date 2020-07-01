import string
import re
import base64
from hashlib import md5
from Crypto.Cipher import AES


class Utils:
    digs = string.digits + string.ascii_letters
    BLOCK_SIZE = 16
    KEY = b"LXgIVP&PorO68Rq7dTx8N^lP!Fa5sGJ^*XK"

    def int2base(self, x, base):
        if x < 0:
            sign = -1
        elif x == 0:
            return self.digs[0]
        else:
            sign = 1
        x *= sign
        digits = []
        while x:
            digits.append(self.digs[int(x % base)])
            x = int(x / base)
        if sign < 0:
            digits.append("-")
        digits.reverse()
        return "".join(digits)

    def js_unpack(self, p, k):
        k = k.split("|")
        d = {}
        a = len(k)
        c = len(k)
        while c > 0:
            c -= 1
            try:
                d[int(self.int2base(c, a))] = k[c]
            except:
                d[self.int2base(c, a)] = k[c]
        for x in d:
            if d[x] == "":
                d[x] = x
            p = re.sub(f"\\b{x}\\b", d[x], p)
        return p

    def better_unpack(self, input):
        lol = (
            re.search(r"return p}\((.*).split\('\|'\)", input)
            .group(1)
            .replace("'", "")
            .split(",")
        )
        return self.js_unpack(lol[0], lol[3])

    def pad(self, data):
        length = self.BLOCK_SIZE - (len(data) % self.BLOCK_SIZE)
        return data + (chr(length) * length).encode()

    def unpad(self, data):
        return data[: -(data[-1] if type(data[-1]) == int else ord(data[-1]))]

    def bytes_to_key(self, data, salt, output=48):
        assert len(salt) == 8, len(salt)
        data += salt
        key = md5(data).digest()
        final_key = key
        while len(final_key) < output:
            key = md5(key + data).digest()
            final_key += key
        return final_key[:output]

    def decrypt(self, encrypted, passphrase):
        encrypted = base64.b64decode(encrypted)
        assert encrypted[0:8] == b"Salted__"
        salt = encrypted[8:16]
        key_iv = self.bytes_to_key(passphrase, salt, 32 + 16)
        key = key_iv[:32]
        iv = key_iv[32:]
        aes = AES.new(key, AES.MODE_CBC, iv)
        return self.unpad(aes.decrypt(encrypted[16:]))
