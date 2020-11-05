function fbEncrypt() {
    let publicKey, prefix, g, DecodePassWord, DecodeTime, Time, keyId;
    publicKey = '78323b4132672c71b4f79ae32341f0979b9bbcbf6def1852447a6b07d9645835';
    prefix = "#PWD_BROWSER";
    g = 5;
    keyId = 201;
    DecodePassWord = decodeUTF8('Fb0000');
    // Time = parseInt((new Date()).getTime() / 1e3).toString()
    Time = '1604552956'
    DecodeTime = decodeUTF8(Time);
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
    let str = cry.subtle.generateKey(AesGcmConfig8, true, ["encrypt", "decrypt"]).then(function (a) {
        var c = cry.subtle.exportKey("raw", a);
        a = cry.subtle.encrypt(AesGcmConfig12, a, DecodePassWord.buffer);
        return Promise.all([c, a])
    }).then(function (a) {
        let b = new Uint8Array(a[0]);
        let s = r(publicKey)
        b = sealedBox.seal(b, s)
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
        b = new Uint8Array(a[1]);
        a = b.slice(-o);
        b = b.slice(0, -o);
        t.set(a, u);
        u += o;
        t.set(b, u);

        v = [prefix, g, Time, encodeBase64(t)].join(":")
        console.log(v);
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
