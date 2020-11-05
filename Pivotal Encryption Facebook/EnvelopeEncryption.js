__d("EnvelopeEncryption", ["regeneratorRuntime", "Promise", "tweetnacl-sealedbox-js"], (function (a, b, c, d, e, f) {
	"use strict";
	f.encrypt = a;
	var g = window.crypto || window.msCrypto,
		h = 64,
		i = 1,
		j = 1,
		k = 1,
		l = b("tweetnacl-sealedbox-js").overheadLength,
		m = 2,
		n = 32,
		o = 16,
		p = j + k + m + n + l + o;
	function q(a, c) {
		return b("tweetnacl-sealedbox-js").seal(a, c)
	}
	function r(a) {
		var b = [];
		for (var c = 0; c < a.length; c += 2)
			b.push(parseInt(a.slice(c, c + 2), 16));
		return new Uint8Array(b)
	}
	function a(keyId, publicKey, DecodePassWord, DecodeTime) {
		var f,
			s,
			t,
			u,
			AESGCM8Config,
			AESGCM12Config,
			x;
		return b("regeneratorRuntime").async(function (y) {
			while (1)
				switch (y.prev = y.next) {
					case 0:
						f = p + DecodePassWord.length;
						if (!(publicKey.length != h)) {
							y.next = 3;
							break
						}
						throw new Error("public key is not a valid hex sting");
					case 3:
						s = r(publicKey);
						if (s) {
							y.next = 6;
							break
						}
						throw new Error("public key is not a valid hex string");
					case 6:
						t = new Uint8Array(f);
						u = 0;
						t[u] = i;
						u += j;
						t[u] = keyId;
						u += k;
						AESGCM8Config = {
							name: "AES-GCM",
							length: n * 8
						};
						AESGCM12Config = {
							name: "AES-GCM",
							iv: new Uint8Array(12),
							additionalData: DecodeTime,
							tagLen: o
						};
						x = g.subtle.generateKey(AESGCM8Config, !0, ["encrypt", "decrypt"]).then(function (a) {
							var c = g.subtle.exportKey("raw", a);
							a = g.subtle.encrypt(AESGCM12Config, a, DecodePassWord.buffer);
							return b("Promise").all([c, a])
						}).then(function (a) {
							var b = new Uint8Array(a[0]);
							b = q(b, s);
							t[u] = b.length & 255;
							t[u + 1] = b.length >> 8 & 255;
							u += m;
							t.set(b, u);
							u += n;
							u += l;
							if (b.length !== n + l)
								throw new Error("encrypted key is the wrong length");
							b = new Uint8Array(a[1]);
							a = b.slice(-o);
							b = b.slice(0, -o);
							t.set(a, u);
							u += o;
							t.set(b, u);
							return t
						})["catch"](function (a) {
							throw a
						});
						return y.abrupt("return", x);
					case 16:
					case "end":
						return y.stop()
				}
		}, null, this)
	}
}), null);
