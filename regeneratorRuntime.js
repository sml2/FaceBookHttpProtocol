__d("FBBrowserPasswordEncryption", ["regeneratorRuntime", "EnvelopeEncryption", "tweetnacl-util"], (function (a, b, c, d, e, f) {
		"use strict";
		f.encryptPassword = a;
		function a(keyId, publicKey, PassWord, Time) {
			var f,
			g,
			DecodePassWord,
			DecodeTime,
			j;
			return b("regeneratorRuntime").async(function (k) {
				while (1)
					switch (k.prev = k.next) {
					case 0:
						f = "#PWD_BROWSER";
						g = 5;
						DecodePassWord = b("tweetnacl-util").decodeUTF8(PassWord);
						DecodeTime = b("tweetnacl-util").decodeUTF8(Time);
						k.next = 6;
						return b("regeneratorRuntime").awrap(b("EnvelopeEncryption").encrypt(keyId, publicKey, DecodePassWord, DecodeTime));
					case 6:
						j = k.sent;
						return k.abrupt("return", [f, g, Time, b("tweetnacl-util").encodeBase64(j)].join(":"));
					case 8:
					case "end":
						return k.stop()
					}
			}, null, this)
		}
	}), null);
