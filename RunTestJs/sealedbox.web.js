!function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n(require("nacl"), require("Object")) : "function" == typeof define && define.amd ? define(["nacl", "Object"], n) : "object" == typeof exports ? exports.sealedBox = n(require("nacl"), require("Object")) : e.sealedBox = n(e.nacl, e.Object)
}(window, function (e, n) {
    return function (e) {
        var n = {};

        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
        }, t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, t.t = function (e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function (n) {
                return e[n]
            }.bind(null, o));
            return r
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = 3)
    }([function (n, t) {
        n.exports = e
    }, function (e, n, t) {
        var r = t(2);

        function o(e, n, t) {
            var r = e[n] + e[t], o = e[n + 1] + e[t + 1];
            r >= 4294967296 && o++, e[n] = r, e[n + 1] = o
        }

        function a(e, n, t, r) {
            var o = e[n] + t;
            t < 0 && (o += 4294967296);
            var a = e[n + 1] + r;
            o >= 4294967296 && a++, e[n] = o, e[n + 1] = a
        }

        function u(e, n) {
            return e[n] ^ e[n + 1] << 8 ^ e[n + 2] << 16 ^ e[n + 3] << 24
        }

        function i(e, n, t, r, u, i) {
            var c = b[u], l = b[u + 1], p = b[i], y = b[i + 1];
            o(f, e, n), a(f, e, c, l);
            var d = f[r] ^ f[e], s = f[r + 1] ^ f[e + 1];
            f[r] = s, f[r + 1] = d, o(f, t, r), d = f[n] ^ f[t], s = f[n + 1] ^ f[t + 1], f[n] = d >>> 24 ^ s << 8, f[n + 1] = s >>> 24 ^ d << 8, o(f, e, n), a(f, e, p, y), d = f[r] ^ f[e], s = f[r + 1] ^ f[e + 1], f[r] = d >>> 16 ^ s << 16, f[r + 1] = s >>> 16 ^ d << 16, o(f, t, r), d = f[n] ^ f[t], s = f[n + 1] ^ f[t + 1], f[n] = s >>> 31 ^ d << 1, f[n + 1] = d >>> 31 ^ s << 1
        }

        var c = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
            l = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map(function (e) {
                return 2 * e
            })), f = new Uint32Array(32), b = new Uint32Array(32);

        function p(e, n) {
            var t = 0;
            for (t = 0; t < 16; t++) f[t] = e.h[t], f[t + 16] = c[t];
            for (f[24] = f[24] ^ e.t, f[25] = f[25] ^ e.t / 4294967296, n && (f[28] = ~f[28], f[29] = ~f[29]), t = 0; t < 32; t++) b[t] = u(e.b, 4 * t);
            for (t = 0; t < 12; t++) i(0, 8, 16, 24, l[16 * t + 0], l[16 * t + 1]), i(2, 10, 18, 26, l[16 * t + 2], l[16 * t + 3]), i(4, 12, 20, 28, l[16 * t + 4], l[16 * t + 5]), i(6, 14, 22, 30, l[16 * t + 6], l[16 * t + 7]), i(0, 10, 20, 30, l[16 * t + 8], l[16 * t + 9]), i(2, 12, 22, 24, l[16 * t + 10], l[16 * t + 11]), i(4, 14, 16, 26, l[16 * t + 12], l[16 * t + 13]), i(6, 8, 18, 28, l[16 * t + 14], l[16 * t + 15]);
            for (t = 0; t < 16; t++) e.h[t] = e.h[t] ^ f[t] ^ f[t + 16]
        }

        function y(e, n) {
            if (0 === e || e > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
            if (n && n.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
            for (var t = {
                b: new Uint8Array(128),
                h: new Uint32Array(16),
                t: 0,
                c: 0,
                outlen: e
            }, r = 0; r < 16; r++) t.h[r] = c[r];
            var o = n ? n.length : 0;
            return t.h[0] ^= 16842752 ^ o << 8 ^ e, n && (d(t, n), t.c = 128), t
        }

        function d(e, n) {
            for (var t = 0; t < n.length; t++) 128 === e.c && (e.t += e.c, p(e, !1), e.c = 0), e.b[e.c++] = n[t]
        }

        function s(e) {
            for (e.t += e.c; e.c < 128;) e.b[e.c++] = 0;
            p(e, !0);
            for (var n = new Uint8Array(e.outlen), t = 0; t < e.outlen; t++) n[t] = e.h[t >> 2] >> 8 * (3 & t);
            return n
        }

        function v(e, n, t) {
            t = t || 64, e = r.normalizeInput(e);
            var o = y(t, n);
            return d(o, e), s(o)
        }

        e.exports = {
            blake2b: v, blake2bHex: function (e, n, t) {
                var o = v(e, n, t);
                return r.toHex(o)
            }, blake2bInit: y, blake2bUpdate: d, blake2bFinal: s
        }
    }, function (e, t) {
        e.exports = n
    }, function (e, n, t) {
        "use strict";
        t.r(n);
        var r = t(0), o = t.n(r);
        const a = o.a.box.publicKeyLength + o.a.box.overheadLength;
        var u = t(1), i = t.n(u);

        function c(e, n) {
            var t = i.a.blake2bInit(o.a.box.nonceLength, null);
            return i.a.blake2bUpdate(t, e), i.a.blake2bUpdate(t, n), i.a.blake2bFinal(t)
        }

        function l(e, n) {
            var t = new Uint8Array(a + e.length), r = o.a.box.keyPair();
            t.set(r.publicKey);
            var u = c(r.publicKey, n), i = o.a.box(e, u, n, r.secretKey);
            return t.set(i, r.publicKey.length), function (e) {
                for (var n = 0; n < e.length; n++) e[n] = 0
            }(r.secretKey), t
        }

        function f(e, n, t) {
            var r = e.subarray(0, o.a.box.publicKeyLength), a = c(r, n), u = e.subarray(o.a.box.publicKeyLength);
            return o.a.box.open(u, a, r, t)
        }

        t.d(n, "overheadLength", function () {
            return a
        }), t.d(n, "seal", function () {
            return l
        }), t.d(n, "open", function () {
            return f
        });
        n.default = {seal: l, open: f}
    }])
});
