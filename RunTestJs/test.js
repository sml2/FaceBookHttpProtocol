function fbEncrypt(publicKey, keyId, DecodePassWord, Time) {
    let prefix, g;
    prefix = "#PWD_BROWSER";
    g = 5;
    DecodePassWord = decodeUTF8(DecodePassWord);
    let DecodeTime = decodeUTF8(Time.toString());
    let cry = window.crypto || window.msCrypto,
        AesGcmConfig8,
        AesGcmConfig12,
        h = 64,
        i = 1,
        j = 1,
        l = sealedBox.overheadLength,
        k = 1,
        m = 2,
        n = 32,
        o = 16,
        p = j + k + m + n + l + o,
        f = p + DecodePassWord.length
    let t = new Uint8Array(f);
    let u = 0;
    t[u] = i;
    u += j;
    t[u] = keyId;
    u += k;
    AesGcmConfig8 = {
        name: "AES-GCM",
        length: n * 8
    };
    AesGcmConfig12 = {
        name: "AES-GCM",
        iv: new Uint8Array(12),
        additionalData: DecodeTime,
        tagLen: o
    };
    return cry.subtle.generateKey(AesGcmConfig8, true, ["encrypt", "decrypt"]).then(function (a) {
        var c = cry.subtle.exportKey("raw", a);
        a = cry.subtle.encrypt(AesGcmConfig12, a, DecodePassWord.buffer);
        return Promise.all([c, a])
    }).then(function (a) {
        let AesKey = a[0];
        let AesData = a[1];
        let JS_AesKey = new Uint8Array(AesKey);
        let JS_publicKey = r(publicKey)
        //16 32
        b = sealedBox.seal(JS_AesKey, JS_publicKey)
        console.log(b);
        t[u] = b.length & 255;
        t[u + 1] = b.length >> 8 & 255;
        u += m;
        t.set(b, u);
        u += n;
        u += l;
        if (b.length !== n + l) {
            console.log("encrypted key is the wrong length");
            return false;
        }
        b = new Uint8Array(AesData);
        a = b.slice(-o);
        b = b.slice(0, -o);
        t.set(a, u);
        u += o;
        t.set(b, u);
        v = [prefix, g, Time, encodeBase64(t)].join(":")
        return v
    });
}

function decodeUTF8(a) {
    if (typeof a !== "string")
        throw new TypeError("expected string");
    var b;
    a = unescape(encodeURIComponent(a));
    var c = new Uint8Array(a.length);
    for (b = 0; b < a.length; b++)
        c[b] = a.charCodeAt(b);
    return c
}

function r(a) {
    var b = [];
    for (var c = 0; c < a.length; c += 2)
        b.push(parseInt(a.slice(c, c + 2), 16));
    return new Uint8Array(b)
}

function encodeBase64(a) {
    var b,
        c = [],
        d = a.length;
    for (b = 0; b < d; b++)
        c.push(String.fromCharCode(a[b]));
    return btoa(c.join(""))
}
