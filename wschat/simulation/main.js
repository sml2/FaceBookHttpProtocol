function startWebSocket(wsUri) {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };
    websocket.onmessage = function (evt) {
        onMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
    return Promise.resolve(websocket)
}

function onOpen(evt) {
    let span = document.createElement('span')
    span.setAttribute('style', 'color:red')
    span.innerHTML = '连接成功，现在你可以发送信息啦！！！'
    writeContent(span);
}

function onClose(evt) {
    let span = document.createElement('span')
    span.setAttribute('style', 'color:red')
    span.innerHTML = 'websocket连接已断开！！！'
    writeContent(span);
    websocket.close();
}

function onMessage(evt) {
    let span = document.createElement('span')
    span.innerHTML = '服务端回应&nbsp;' + new Date().toLocaleTimeString()
    let span1 = document.createElement('span')
    span1.innerHTML = evt.data
    let div = document.createElement('div')
    div.appendChild(span)
    div.appendChild(span1)
    writeContent(div);
}

function onError(evt) {
    let span = document.createElement('span')
    span.setAttribute('style', 'color:red')
    span.innerHTML = '发生错误:' + evt.data
    writeContent(span);
}

function doSend() {
    var message = document.getElementById('message');
    if (message.value == '') {
        alert("请先填写发送信息");
        message.focus();
        return false;
    }
    if (typeof websocket === "undefined") {
        alert("websocket还没有连接，或者连接失败，请检测");
        return false;
    }
    if (websocket.readyState == 3) {
        alert("websocket已经关闭，请重新连接");
        return false;
    }

    let span = document.createElement('span')
    span.setAttribute('style', 'color:green')
    span.innerHTML = '你发送的信息&nbsp;' + (new Date()).toLocaleTimeString()
    let span1 = document.createElement('span')
    span1.innerHTML = message.value
    let div = document.createElement('div')
    div.appendChild(span)
    div.appendChild(document.createElement('br'))
    div.appendChild(span1)
    writeContent(div);
    let data = {
        "body": message.value,
        "sender_fbid": "100057141668433",
        "to": "100057097300050",
        "msgid": rnd(),
        "client_tags": {
            "web_source": "source:chat:web",
            "web:trigger": "cookie",
            "tracePolicy": "comet.profile.collection.about_places"
        }
    }
    websocket.send(publishEncode(JSON.stringify(data, null, 2)));
    message.value = '';
}

function writeContent(content) {
    let area = document.getElementById('content')
    area.appendChild(content)
    area.appendChild(document.createElement('br'))
}


p = Object.freeze({
    CONNECT: 1,
    CONNACK: 2,
    PUBLISH: 3,
    PUBACK: 4,
    SUBSCRIBE: 8,
    SUBACK: 9,
    UNSUBSCRIBE: 10,
    UNSUBACK: 11,
    PINGREQ: 12,
    PINGRESP: 13,
    DISCONNECT: 14
})

// ping
function ping() {
    if (typeof websocket != "undefined") {
        websocket.send(pingEncode())
    } else {
        alert('请先连接ws')
    }
}

function pingEncode() {
    let a = new ArrayBuffer(2)
        , b = new Uint8Array(a);
    b[0] = (p.PINGREQ & 15) << 4;
    return a
}


function g(a) {
    var b = 0;
    for (var c = 0, d = a.length; c < d; c++) {
        var e = a.charCodeAt(c);
        e < 128 ? b += 1 : e < 2048 ? b += 2 : e >= 55296 && e <= 56319 ? (b += 4,
            c++) : b += 3
    }
    return b
}

function k(a) {
    var b = new Array(1);
    for (var c = 0; c < 4; c++) {
        var d = a % 128;
        a >>= 7;
        if (a > 0)
            b[c] = d | 128;
        else {
            b[c] = d;
            break
        }
    }
    return b
}

function h(a, b, c) {
    b[c++] = a >> 8;
    b[c++] = a % 256;
    return c
}

function m(a, b, c, d) {
    d = h(b, c, d);
    k1(a, c, d);
    return d + b
}

function k1(a, b, c) {
    for (var d = 0, e = a.length; d < e; d++) {
        var f = a.charCodeAt(d);
        f < 128 ? b[c++] = f : f < 2048 ? (b[c++] = 192 | f >> 6,
            b[c++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (b[c++] = 224 | f >> 12,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | a.charCodeAt(++d) & 1023),
            b[c++] = 240 | f >> 18,
            b[c++] = 128 | f >> 12 & 63,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63)
    }
}

function publishEncode(message, topic = '/send_message2', qos = 1, messageIdentifier = 1) {
    // mycode
    let newMsg = new Uint8Array(message.length)
    for (let i = 0; i < message.length; i++) {
        newMsg[i] = message.charCodeAt(i)
    }
    message = newMsg
    // original
    var a = (p.PUBLISH & 15) << 4;
    // this.duplicate && (a |= 8);
    a = a |= qos << 1;
    var b = g(topic)
        , c = b + 2
        , d = qos === 0 ? 0 : 2;
    c += d;
    // d = this.payloadMessage.bytes();
    d = message;
    c += d.byteLength;
    var e = k(c);
    c = new ArrayBuffer(1 + e.length + c);
    var f = new Uint8Array(c);
    f[0] = a;
    f.set(e, 1);
    a = 1 + e.length;
    a = m(topic, b, f, a);
    qos !== 0 && messageIdentifier != null && (a = h(this.messageIdentifier, f, a));
    f.set(d, a);
    return c
}


function rnd(a) {
    a = a != null ? a : Date.now();
    var c = Math.floor(Math.random() * 4294967295)
    // var c = b("randomInt")(0, 4294967295);
    c = ("0000000000000000000000" + c.toString(2)).slice(-22);
    a = a.toString(2) + c;
    return rand01(a.slice(-63))
}

function rand01(a) {
    var b = "";
    while (a != "0") {
        var c = 0, d = "";
        for (var e = 0; e < a.length; e++) c = 2 * c + parseInt(a[e], 10), c >= 10 ? (d += "1", c -= 10) : d += "0";
        b = c.toString() + b;
        a = d.slice(d.indexOf("1"))
    }
    return b
}