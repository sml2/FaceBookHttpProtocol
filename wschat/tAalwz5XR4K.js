if (self.CavalryLogger) {
    CavalryLogger.start_js(["ffEez"]);
}

__d("FleetBeaconSubscriptionNetwork_LogMutation.graphql", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
                , b = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconLogResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_log",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: a,
                    kind: "Fragment",
                    metadata: null,
                    name: "FleetBeaconSubscriptionNetwork_LogMutation",
                    selections: b,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: a,
                    kind: "Operation",
                    name: "FleetBeaconSubscriptionNetwork_LogMutation",
                    selections: b
                },
                params: {
                    id: "3531482613593478",
                    metadata: {},
                    name: "FleetBeaconSubscriptionNetwork_LogMutation",
                    operationKind: "mutation",
                    text: null
                }
            }
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconSubscriptionNetwork_PublishMutation.graphql", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
                , b = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "FleetBeaconPublishResponsePayload",
                kind: "LinkedField",
                name: "fleet_beacon_publish",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "success",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: a,
                    kind: "Fragment",
                    metadata: null,
                    name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                    selections: b,
                    type: "Mutation",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: a,
                    kind: "Operation",
                    name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                    selections: b
                },
                params: {
                    id: "3253299374687488",
                    metadata: {},
                    name: "FleetBeaconSubscriptionNetwork_PublishMutation",
                    operationKind: "mutation",
                    text: null
                }
            }
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconSubscriptionNetwork_Subscription.graphql", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }]
                , b = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "TestFleetBeaconSubscribeResponsePayload",
                kind: "LinkedField",
                name: "test_fleet_beacon_subscribe",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "client_subscription_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "test_id",
                    storageKey: null
                }],
                storageKey: null
            }];
            return {
                fragment: {
                    argumentDefinitions: a,
                    kind: "Fragment",
                    metadata: null,
                    name: "FleetBeaconSubscriptionNetwork_Subscription",
                    selections: b,
                    type: "Subscription",
                    abstractKey: null
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: a,
                    kind: "Operation",
                    name: "FleetBeaconSubscriptionNetwork_Subscription",
                    selections: b
                },
                params: {
                    id: "3194829573871785",
                    metadata: {
                        subscriptionName: "test_fleet_beacon_subscribe"
                    },
                    name: "FleetBeaconSubscriptionNetwork_Subscription",
                    operationKind: "subscription",
                    text: null
                }
            }
        }();
        e.exports = a
    }
), null);
__d("CometAlertDialogImpl.react", ["fbt", "CometCardedDialog.react", "CometRow.react", "CometRowItem.react", "React", "TetraButton.react", "TetraText.react", "stylex"], (function (a, b, c, d, e, f, g) {
        "use strict";
        e.exports = a;
        var h = b("React");

        function a(a) {
            var c = a.body
                , d = a.close
                , e = a.onClose;
            a = a.title;
            return h.jsxs(b("CometCardedDialog.react"), {
                onClose: e,
                withCloseButton: !0,
                children: [h.jsx("div", {
                    className: "bjjx79mm dati1w0a clqubjjj jbae33se",
                    children: h.jsx(b("TetraText.react"), {
                        numberOfLines: 1,
                        type: "headlineEmphasized2",
                        children: a
                    })
                }), h.jsx("div", {
                    className: "l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",
                    children: h.jsx(b("TetraText.react"), {
                        type: "body3",
                        children: c
                    })
                }), h.jsx("div", {
                    className: "a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys",
                    children: h.jsx(b("CometRow.react"), {
                        align: "end",
                        children: h.jsx(b("CometRowItem.react"), {
                            children: h.jsx(b("TetraButton.react"), {
                                label: (a = d) != null ? a : g._("\u5173\u95ed"),
                                onPress: e,
                                testid: void 0,
                                type: "primary"
                            })
                        })
                    })
                })]
            })
        }
    }
), null);
__d("CometRelayEF", ["Bootloader", "ClientConsistencyEventEmitter", "CometSSREntrypoint", "cometAsyncFetch", "gkx", "promiseDone"], (function (a, b, c, d, e, f) {
        "use strict";
        f.fetchPredictions = h;
        f.fetchPredictedResources = a;
        var g = new Map();

        function h(a, c) {
            if (!b("gkx")("1334580"))
                return;
            a = b("CometSSREntrypoint").processRootEntryPoint(a, c);
            var d = [];
            a.forEach(function (a) {
                g.has(a.name) || d.push(a.name)
            });
            if (d.length === 0)
                return;
            var e = b("cometAsyncFetch")("/ajax/relay-ef/", {
                data: {
                    queries: d
                },
                method: "POST"
            });
            d.forEach(function (a) {
                g.set(a, e)
            })
        }

        function a(a, c) {
            if (!b("gkx")("1334580"))
                return;
            h(a, c);
            a = b("CometSSREntrypoint").processRootEntryPoint(a, c);
            a.forEach(function (a) {
                var c = a.name
                    , d = g.get(c);
                d && d !== !0 && b("promiseDone")(d, function (a) {
                    if (a != null && typeof a === "object") {
                        var d;
                        a = "consistency" in a ? a : {
                            consistency: null,
                            predictions: a
                        };
                        b("Bootloader").loadPredictedResourceMap(a.predictions[c], null, (d = a.consistency) == null ? void 0 : d.rev);
                        a.consistency != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
                    }
                });
                g.set(a.name, !0)
            })
        }
    }
), null);
__d("BladeRunnerConfig", ["RTISubscriptionManagerConfig", "WebDriverConfig", "err"], (function (a, b, c, d, e, f) {
        var g = "javascript-sandbox"
            , h = "OverrideServer";

        function i() {
            var a = b("WebDriverConfig").auxiliaryServiceInfo.BladeRunner;
            if (a != null && typeof a.ip_address === "string")
                return a.ip_address;
            throw b("err")("No BladeRunner connectivity information specified")
        }

        a = function () {
            function a() {
            }

            var c = a.prototype;
            c.patchRequestHeaders = function (a) {
                var c, d = {}, e = b("RTISubscriptionManagerConfig").bladerunner_www_sandbox;
                if (((c = b("WebDriverConfig").auxiliaryServiceInfo) == null ? void 0 : c.BladeRunner) != null) {
                    c = i();
                    c != null && (d[h] = c + ":18293")
                } else
                    e != null && (d[g] = e);
                for (var f in a)
                    d[f] = a[f];
                return d
            }
            ;
            return a
        }();
        c = new a();
        d = c;
        e.exports = d
    }
), null);
__d("MqttPublishListener", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = Object.freeze({
            NOT_CONNECTED: "NOT_CONNECTED",
            PUBLISH_ERROR: "PUBLISH_ERROR",
            QUEUED: "QUEUED",
            SENT: "SENT",
            ACKED: "ACKED",
            NOT_ACKED: "NOT_ACKED"
        });
        f.MqttPublishEvent = a
    }
), null);
__d("RealtimeRequestStreamWebClientTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a() {
                this.$1 = {}
            }

            var c = a.prototype;
            c.log = function (a) {
                b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig", this.$1, b("Banzai").BASIC, a)
            }
            ;
            c.logVital = function (a) {
                b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig", this.$1, b("Banzai").VITAL, a)
            }
            ;
            c.logImmediately = function (a) {
                b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig", this.$1, {
                    signal: !0
                }, a)
            }
            ;
            c.clear = function () {
                this.$1 = {};
                return this
            }
            ;
            c.getData = function () {
                return babelHelpers["extends"]({}, this.$1)
            }
            ;
            c.updateData = function (a) {
                this.$1 = babelHelpers["extends"]({}, this.$1, a);
                return this
            }
            ;
            c.setClientSessionID = function (a) {
                this.$1.client_session_id = a;
                return this
            }
            ;
            c.setClientTimeMs = function (a) {
                this.$1.client_time_ms = a;
                return this
            }
            ;
            c.setMessage = function (a) {
                this.$1.message = a;
                return this
            }
            ;
            c.setSeverity = function (a) {
                this.$1.severity = a;
                return this
            }
            ;
            c.setUserFbid = function (a) {
                this.$1.user_fbid = a;
                return this
            }
            ;
            return a
        }();
        c = {
            client_session_id: !0,
            client_time_ms: !0,
            message: !0,
            severity: !0,
            user_fbid: !0
        };
        e.exports = a
    }
), null);
__d("RequestStreamE2EClientLoggerEvent", [], (function (a, b, c, d, e, f) {
        a = Object.freeze({
            RECEIVED: "received",
            SENT: "sent",
            FAILURE: "failure",
            PUBACK: "puback"
        });
        e.exports = a
    }
), null);
__d("RequestStreamE2EClientLoggerMessageType", [], (function (a, b, c, d, e, f) {
        a = Object.freeze({
            REQUEST_STREAM: "request_stream",
            AMENDMENT: "amendment",
            AMENDMENT_ACK: "amendment_ack",
            CANCEL: "cancel",
            RESPONSE: "response",
            RESPONSE_ACK: "response_ack",
            TIMED_REQUEST: "timed_request",
            INTERRUPT: "interrupt"
        });
        e.exports = a
    }
), null);
__d("BladeRunnerLogger", ["BanzaiLogger", "BanzaiODS", "BladeRunnerTypes", "CurrentUser", "FBLogger", "MqttPublishListener", "Random", "RealtimeRequestStreamWebClientTypedLogger", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "RequestStreamE2EClientSamplingConfig", "gkx"], (function (a, b, c, d, e, f) {
        var g = b("MqttPublishListener").MqttPublishEvent
            , h = "bladerunner_js_client"
            , i = {
            info: "info",
            warning: "warning",
            exception: "exception"
        };
        a = function () {
            "use strict";

            function a() {
                this.$1 = this.$4(),
                    this.setFBLoggerLevel(1)
            }

            var c = a.prototype;
            c.info = function (a) {
                this.$3 >= 2 && b("FBLogger")(h).info("BladeRunner info: %s", a),
                    this.$5(i.info, a)
            }
            ;
            c.warn = function (a) {
                this.$3 >= 1 && b("FBLogger")(h).warn("BladeRunner warn: %s", a),
                    this.$5(i.warning, a)
            }
            ;
            c.exception = function (a, c) {
                c === void 0 && (c = "");
                var d = c + " " + a.toString();
                this.$3 >= 0 && b("FBLogger")(h).warn("BladeRunner exception: %s, %s", c, a.toString());
                this.$5(i.exception, d)
            }
            ;
            c.trimForLogging = function (a) {
                var b = 1024;
                return typeof a === "string" && a.length > b ? "[trimmed]:" + a.substring(0, b) + "..." : a
            }
            ;
            c.bumpCounter = function (a, c) {
                c === void 0 && (c = 1),
                    b("BanzaiODS").bumpEntityKey(2966, "BladeRunnerClient", a, c)
            }
            ;
            c.setClientSessionId = function (a) {
                this.$2 = a
            }
            ;
            c.setFBLoggerLevel = function (a) {
                this.$3 = a
            }
            ;
            c.$5 = function (a, c) {
                if (this.$1) {
                    a = new (b("RealtimeRequestStreamWebClientTypedLogger"))().setClientTimeMs(Date.now()).setSeverity(a).setMessage(this.trimForLogging(c)).setClientSessionID(this.$2).setUserFbid(b("CurrentUser").getID());
                    a.log()
                }
            }
            ;
            c.$4 = function () {
                return b("gkx")("676834")
            }
            ;
            c.shouldLogE2E = function (a) {
                var c = b("RequestStreamE2EClientSamplingConfig").sampleRate;
                if (c > 1 && a != null) {
                    a = b("RequestStreamE2EClientSamplingConfig").methodToSamplingMultiplier[a];
                    a === 0 ? c = 0 : a != null && (c /= a)
                }
                return b("Random").coinflip(c)
            }
            ;
            c.logE2EEvent = function (a, c, d, e, f) {
                c === void 0 && (c = b("RequestStreamE2EClientLoggerEvent").RECEIVED);
                d === void 0 && (d = null);
                e === void 0 && (e = null);
                f === void 0 && (f = null);
                if (d == null)
                    return;
                a = {
                    request_id: d.requestId,
                    message_type: a,
                    event: c,
                    method: e,
                    timestamp: Date.now() / 1e3
                };
                d.auxId && (a.aux_id = d.auxId);
                f != null && (a.additional_data = f);
                b("BanzaiLogger").log("RequestStreamE2EClientLoggerConfig", a)
            }
            ;
            c.logFrameWithMQTTEvent = function (a, c, d) {
                switch (c) {
                    case g.SENT:
                        this.logFrame(a, b("RequestStreamE2EClientLoggerEvent").SENT, d);
                        break;
                    case g.ACKED:
                        this.logFrame(a, b("RequestStreamE2EClientLoggerEvent").PUBACK, d);
                        break;
                    case g.NOT_ACKED:
                    case g.NOT_CONNECTED:
                    case g.PUBLISH_ERROR:
                        this.logFrameFailure(a, c, d)
                }
            }
            ;
            c.logFrameFailure = function (a, c, d) {
                this.logFrame(a, b("RequestStreamE2EClientLoggerEvent").FAILURE, babelHelpers["extends"]({}, d, {
                    reason: c
                }))
            }
            ;
            c.logFrame = function (a, c, d) {
                d === void 0 && (d = null);
                var e = null
                    , f = null
                    , g = null;
                switch (a.type) {
                    case b("BladeRunnerTypes").StreamFrameType.REQUEST:
                        e = b("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM;
                        var h = a.getRequest();
                        f = h.getHeaders().method;
                        g = h.getInstrumentationData();
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.DATA:
                        e = b("RequestStreamE2EClientLoggerMessageType").AMENDMENT;
                        g = a.getData().getInstrumentationData();
                        break
                }
                g != null && e != null && this.logE2EEvent(e, c, g, f, d)
            }
            ;
            return a
        }();
        c = new a();
        e.exports = c
    }
), null);
__d("BladeRunnerTypesInternal", ["Base64", "BladeRunnerLogger", "BladeRunnerTypes"], (function (a, b, c, d, e, f) {
        var g = function () {
            function a() {
            }

            var b = a.prototype;
            b.getHeaders = function () {
                if (this.headers != null)
                    return this.headers;
                throw new Error("Expected headers")
            }
            ;
            b.getInstrumentationData = function () {
                if (this.instrumentationData != null)
                    try {
                        return JSON.parse(this.instrumentationData)
                    } catch (a) {
                        return null
                    }
                else
                    return null
            }
            ;
            a.readObject = function (b) {
                var c = new a();
                c.streamId = n(b.streamId);
                c.requestType = n(b.requestType);
                c.payload = q(b.payload);
                c.headers = t(b.headers);
                c.extraHeader = q(b.extraHeader);
                c.requestTarget = q(b.requestTarget);
                c.instrumentationData = q(b.instrumentationData);
                return c
            }
            ;
            return a
        }();
        f.GatewayStreamRequest = g;
        var h = function () {
            function a() {
            }

            a.readObject = function (b) {
                var c = new a();
                c.streamId = n(b.streamId);
                c.dataId = o(b.dataId);
                c.data = q(b.data);
                c.shouldAck = v(b.shouldAck);
                return c
            }
            ;
            var c = a.prototype;
            c.rawData = function () {
                if (this.data == null)
                    throw new Error("Expected data");
                return this.data
            }
            ;
            c.decodeData = function () {
                if (this.data == null)
                    throw new Error("Expected data");
                return b("Base64").decode(this.data)
            }
            ;
            c.setData = function (a) {
                this.data = b("Base64").encode(a)
            }
            ;
            c.getInstrumentationData = function () {
                if (this.instrumentationData != null)
                    return JSON.parse(this.instrumentationData);
                else
                    return null
            }
            ;
            return a
        }();
        f.GatewayStreamData = h;
        var i = function () {
            function a() {
            }

            a.readObject = function (b) {
                var c = new a();
                c.streamId = n(b.streamId);
                c.dataId = n(b.dataId);
                c.success = u(b.success);
                c.message = q(b.message);
                c.code = o(b.code);
                return c
            }
            ;
            return a
        }();
        f.GatewayStreamDataAck = i;
        i.ACK_CODE_LANDED_AND_ACCEPTED = 20;
        i.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21;
        i.ACK_CODE_FAILED_TO_LAND = 50;
        var j = function () {
            function a() {
            }

            a.readObject = function (b) {
                var c = new a();
                c.streamId = o(b.streamId);
                c.message = q(b.message);
                return c
            }
            ;
            return a
        }();
        f.GatewayStreamLog = j;
        var k = function () {
            function a() {
            }

            a.readObject = function (b) {
                var c = new a();
                c.streamId = n(b.streamId);
                c.status = n(b.status);
                c.message = q(b.message);
                c.code = o(b.code);
                c.shouldRetry = v(b.shouldRetry);
                c.retryDelayMs = o(b.retryDelayMs);
                return c
            }
            ;
            return a
        }();
        f.GatewayStreamStatusUpdate = k;
        var l = function () {
            function a() {
            }

            a.readObject = function (b) {
                var c = new a();
                c.streamId = n(b.streamId);
                c.newBody = q(b.newBody);
                c.newExtraHeader = q(b.newExtraHeader);
                c.patchExtraHeader = q(b.patchExtraHeader);
                c.killBody = v(b.killBody);
                c.temporary = v(b.temporary);
                return c
            }
            ;
            return a
        }();
        f.GatewayStreamRewriteRequest = l;
        var m = function () {
            function a() {
            }

            var c = a.prototype;
            c.getRequest = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null)
                    return this.request;
                throw new Error("Expected request")
            }
            ;
            c.getData = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.DATA && this.data != null)
                    return this.data;
                throw new Error("Expected data")
            }
            ;
            c.getDataAck = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null)
                    return this.dataAck;
                throw new Error("Expected dataAck")
            }
            ;
            c.getStatusUpdate = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null)
                    return this.statusUpdate;
                throw new Error("Expected status update")
            }
            ;
            c.getLog = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.LOG && this.log != null)
                    return this.log;
                throw new Error("Expected log")
            }
            ;
            c.getRewriteRequest = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null)
                    return this.rewriteRequest;
                throw new Error("Expected rewrite request")
            }
            ;
            c.getStreamId = function () {
                if (this.type == b("BladeRunnerTypes").StreamFrameType.REQUEST && this.request != null)
                    return this.request.streamId;
                if (this.type == b("BladeRunnerTypes").StreamFrameType.DATA && this.data != null)
                    return this.data.streamId;
                if (this.type == b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE && this.statusUpdate != null)
                    return this.statusUpdate.streamId;
                if (this.type == b("BladeRunnerTypes").StreamFrameType.LOG && this.log != null)
                    return this.log.streamId;
                if (this.type == b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST && this.rewriteRequest != null)
                    return this.rewriteRequest.streamId;
                if (this.type == b("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.dataAck != null)
                    return this.dataAck.streamId;
                throw new Error("Frame with unexpected type")
            }
            ;
            c.isInstrumented = function () {
                if (this.type === b("BladeRunnerTypes").StreamFrameType.REQUEST)
                    return this.getRequest().instrumentationData != null;
                else if (this.type === b("BladeRunnerTypes").StreamFrameType.DATA)
                    return this.getData().instrumentationData != null;
                else
                    return !1
            }
            ;
            a.readObject = function (c) {
                var d = new a();
                d.type = n(c.type);
                switch (d.type) {
                    case b("BladeRunnerTypes").StreamFrameType.REQUEST:
                        d.request = g.readObject(r(c.request));
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.DATA:
                        d.data = h.readObject(r(c.data));
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                        d.dataAck = i.readObject(r(c.dataAck));
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                        d.statusUpdate = k.readObject(r(c.statusUpdate));
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.LOG:
                        d.log = j.readObject(r(c.log));
                        break;
                    case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                        d.rewriteRequest = l.readObject(r(c.rewriteRequest));
                        break;
                    default:
                        b("BladeRunnerLogger").warn("Frame with unexpected type: " + d.type);
                        return null
                }
                return d
            }
            ;
            a.newRequestFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.REQUEST;
                d.request = c;
                return d
            }
            ;
            a.newDataFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.DATA;
                d.data = c;
                return d
            }
            ;
            a.newDataAckFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.DATA_ACK;
                d.dataAck = c;
                return d
            }
            ;
            a.newStatusUpdateFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;
                d.statusUpdate = c;
                return d
            }
            ;
            a.newLogFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.LOG;
                d.log = c;
                return d
            }
            ;
            a.newRewriteRequestFrame = function (c) {
                var d = new a();
                d.type = b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;
                d.rewriteRequest = c;
                return d
            }
            ;
            return a
        }();
        f.GatewayStreamFrame = m;
        a = function () {
            function a(a, b, c) {
                this.batchId = a,
                    this.frames = b,
                    this.instrumentationData = c
            }

            var b = a.prototype;
            b.getFrames = function () {
                if (this.frames != null)
                    return this.frames;
                throw new Error("Expected frames")
            }
            ;
            b.getInstrumentationData = function () {
                if (this.instrumentationData != null)
                    try {
                        return JSON.parse(this.instrumentationData)
                    } catch (a) {
                        return null
                    }
                else
                    return null
            }
            ;
            b.write = function () {
                return JSON.stringify(this)
            }
            ;
            b.isInstrumented = function () {
                return this.getFrames().some(function (a) {
                    return a.isInstrumented()
                })
            }
            ;
            a.read = function (b) {
                b = JSON.parse(b);
                var c = b.batchId || 0
                    , d = [];
                for (var e = b.frames, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var h;
                    if (f) {
                        if (g >= e.length)
                            break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done)
                            break;
                        h = g.value
                    }
                    h = h;
                    h = m.readObject(h);
                    h != null && d.push(h)
                }
                h = b.instrumentationData || null;
                return new a(c, d, h)
            }
            ;
            return a
        }();
        f.GatewayStreamBatch = a;

        function n(a) {
            if (typeof a === "number")
                return a;
            throw new Error("Expected number")
        }

        function o(a) {
            return a == null ? null : n(a)
        }

        function p(a) {
            if (typeof a === "string")
                return a;
            throw new Error("Expected string")
        }

        function q(a) {
            return a == null ? null : p(a)
        }

        function r(a) {
            if (typeof a === "object" && a != null)
                return a;
            throw new Error("Expected object")
        }

        function s(a) {
            if (typeof a === "object" && a != null) {
                var b = a
                    , c = {};
                Object.keys(b).forEach(function (a) {
                    var d = b[a];
                    typeof d === "string" && d != null && (c[a] = d)
                });
                return c
            }
            throw new Error("Expected string map")
        }

        function t(a) {
            return a == null ? null : s(a)
        }

        function u(a) {
            if (typeof a === "boolean" && a != null)
                return a;
            throw new Error("Expected boolean")
        }

        function v(a) {
            return a == null ? null : u(a)
        }
    }
), null);
__d("BladeRunnerEventHandler", ["BladeRunnerLogger", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f) {
        var g = 1e3;
        a = function () {
            function a(a, b, c) {
                this.$2 = a,
                    this.$1 = b,
                    this.$3 = c
            }

            var c = a.prototype;
            c.onProxyResponse = function (a) {
                this.$4(a);
                var c = [];
                for (var d = a.getFrames(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var g;
                    if (e) {
                        if (f >= d.length)
                            break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done)
                            break;
                        g = f.value
                    }
                    g = g;
                    this.$2.witnessFrame(g) && c.push(g)
                }
                b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").RESPONSE, b("RequestStreamE2EClientLoggerEvent").SENT, a.getInstrumentationData());
                c.length > 0 && this.$5(new (b("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId, c, a.instrumentationData))
            }
            ;
            c.onDisconnect = function () {
                this.$2.resetErrors();
                var a = new (b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
                a.streamId = this.$2.getRequest().streamId;
                a.status = b("BladeRunnerTypes").StreamStatus.CLOSED;
                a.shouldRetry = !0;
                a.retryDelayMs = 0;
                a = new (b("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);
                this.onProxyResponse(a)
            }
            ;
            c.$4 = function (a) {
                var c = this;
                a = a.getFrames().filter(function (a) {
                    return a.type == b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
                });
                for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var f;
                    if (d) {
                        if (e >= a.length)
                            break;
                        f = a[e++]
                    } else {
                        e = a.next();
                        if (e.done)
                            break;
                        f = e.value
                    }
                    f = f;
                    f = f.getStatusUpdate();
                    if (f.status == b("BladeRunnerTypes").StreamStatus.CLOSED || f.status == b("BladeRunnerTypes").StreamStatus.REJECTED) {
                        this.$2.onError();
                        var h = f.shouldRetry != null && f.shouldRetry
                            , i = f.message != null ? f.message : "null";
                        if (h && this.$2.getErrorCount() <= this.$2.getRetriesAllowed()) {
                            f.status = b("BladeRunnerTypes").StreamStatus.PAUSED;
                            var j = g;
                            f.retryDelayMs != null && (j = f.retryDelayMs);
                            b("BladeRunnerLogger").info("Can retry: stream " + f.streamId + " closed with status " + f.status + ", message " + i + ". Error count: " + this.$2.getErrorCount() + ", retryDelay " + j + "ms. Already retrying: " + this.$2.getRetryRequestScheduled().toString());
                            this.$2.getRetryRequestScheduled() ? b("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying") : (b("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"),
                                this.$2.setRetryRequestScheduled(!0),
                                j > 0 ? b("setTimeoutAcrossTransitions")(function () {
                                    return c.$6()
                                }, j) : this.$6())
                        } else
                            b("BladeRunnerLogger").info("Will not retry: stream " + f.streamId + " closed with status " + f.status + ", message " + i + ". Error count: " + this.$2.getErrorCount() + ", shouldRetry " + h.toString() + ". Already retrying: " + this.$2.getRetryRequestScheduled().toString()),
                                h ? b("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded") : b("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"),
                                this.$3.removeStream(f.streamId)
                    }
                }
            }
            ;
            c.$6 = function () {
                this.$2.setRetryRequestScheduled(!1),
                this.$2.isAlive() && this.$3.sendRetryStreamRequest(this.$2)
            }
            ;
            c.$5 = function (a) {
                b("BladeRunnerLogger").bumpCounter("send_to_handler");
                var c = [];
                this.$1.onBatch(a);
                for (var a = a.getFrames(), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var f;
                    if (d) {
                        if (e >= a.length)
                            break;
                        f = a[e++]
                    } else {
                        e = a.next();
                        if (e.done)
                            break;
                        f = e.value
                    }
                    f = f;
                    try {
                        switch (f.type) {
                            case b("BladeRunnerTypes").StreamFrameType.DATA:
                                this.$1.onData(f.getData());
                                c.push(f.getData());
                                break;
                            case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                                this.$1.onStatusUpdate(f.getStatusUpdate().status);
                                break;
                            case b("BladeRunnerTypes").StreamFrameType.LOG:
                                f = f.getLog().message;
                                f != null && this.$1.onLog(f);
                                break;
                            case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                                break;
                            default:
                                throw new Error("Frame with unexpected type")
                        }
                    } catch (a) {
                        b("BladeRunnerLogger").bumpCounter("send_to_handler_error"),
                            b("BladeRunnerLogger").exception(a, "Failed sending frame to stream handler")
                    }
                }
                this.$7(c)
            }
            ;
            c.$7 = function (a) {
                var c = [];
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    if (e.shouldAck === !0 && e.dataId != null) {
                        var f = new (b("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                        f.streamId = e.streamId;
                        f.dataId = e.dataId;
                        f.success = !0;
                        c.push(f)
                    }
                }
                this.$3.sendDataAcks(c)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttEnv", ["killswitch"], (function (a, b, c, d, e, f) {
        "use strict";
        a = Object.freeze({
            mqtt_waterfall_log_client_sampling: 1,
            mqtt_ws_polling_enabled: 3,
            mqtt_lp_use_fetch: 9,
            mqtt_fast_lp: 11,
            mqtt_lp_no_delay: 12,
            mqtt_enable_publish_over_polling: 13
        });
        f.MqttGkNames = a;
        c = function () {
            var a = c.prototype;
            a.random = function () {
                return this.$1 != null ? this.$1() : Math.random()
            }
            ;
            a.isUserLoggedInNow = function () {
                return this.$2 != null ? this.$2() : !0
            }
            ;
            a.clearTimeout = function (a) {
                function b(b) {
                    return a.apply(this, arguments)
                }

                b.toString = function () {
                    return a.toString()
                }
                ;
                return b
            }(function (a) {
                if (this.$3 != null) {
                    this.$3(a);
                    return
                }
                clearTimeout(a)
            });
            a.setTimeout = function (a) {
                function b(b, c) {
                    return a.apply(this, arguments)
                }

                b.toString = function () {
                    return a.toString()
                }
                ;
                return b
            }(function (a, b) {
                for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++)
                    d[e - 2] = arguments[e];
                return this.$4 != null ? this.$4.apply(null, arguments) : setTimeout.apply(null, arguments)
            });
            a.getLoggerInstance = function () {
                return this.$5 != null ? this.$5() : g.getInstance()
            }
            ;
            a.genGk = function (a) {
                return this.$6 != null ? this.$6(a) : !1
            }
            ;
            a.killswitch = function (a) {
                return this.$7 != null ? this.$7(a) : b("killswitch")(a)
            }
            ;
            a.createSocket = function (a, b) {
                return this.$8 != null ? this.$8(a, b) : new WebSocket(a)
            }
            ;
            a.scheduleCallback = function (a) {
                return this.$9 != null ? this.$9(a) : a()
            }
            ;
            a.scheduleLoggingCallback = function (a) {
                return this.$10 != null ? this.$10(a) : a()
            }
            ;
            a.configRead = function (a, b) {
                return this.$11 != null ? this.$11(a, b) : b
            }
            ;
            a.configWrite = function (a, b) {
                this.$12 != null && this.$12(a, b)
            }
            ;

            function c() {
                this.$1 = null,
                    this.$2 = null,
                    this.$3 = null,
                    this.$4 = null,
                    this.$5 = null,
                    this.$6 = null,
                    this.$7 = null,
                    this.$8 = null,
                    this.$9 = null,
                    this.$10 = null,
                    this.$11 = null,
                    this.$12 = null
            }

            a.initialize = function (a, b, c, d, e, f, g, h, i, j, k, l) {
                this.$1 = a,
                    this.$2 = b,
                    this.$3 = c,
                    this.$4 = d,
                    this.$5 = e,
                    this.$6 = f,
                    this.$7 = l,
                    this.$8 = g,
                    this.$9 = h,
                    this.$10 = i,
                    this.$11 = j,
                    this.$12 = k
            }
            ;
            return c
        }();
        var g = function () {
            function a() {
            }

            a.getInstance = function () {
                return new a()
            }
            ;
            var b = a.prototype;
            b.setAppId = function (a) {
            }
            ;
            b.eventLogConnect = function (a) {
            }
            ;
            b.eventLogPull = function (a) {
            }
            ;
            b.eventLogPullFinish = function (a) {
            }
            ;
            b.eventLogDisconnect = function (a) {
            }
            ;
            b.eventLogOutgoingPublish = function (a) {
            }
            ;
            b.eventLogIncomingPublish = function (a) {
            }
            ;
            b.eventLogPublishTimeout = function (a) {
            }
            ;
            b.eventLogMiscellaneousError = function (a) {
            }
            ;
            b.logIfLoggedOut = function () {
            }
            ;
            b.logError = function (a) {
            }
            ;
            b.logErrorWarn = function (a) {
            }
            ;
            b.logWarn = function (a) {
            }
            ;
            b.debugTrace = function (a) {
            }
            ;
            b.bumpCounter = function (a) {
            }
            ;
            return a
        }();
        d = new c();
        f.Env = d
    }
), null);
__d("IrisSubscribeChecker", ["MqttEnv"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env;
        a = function () {
            function a(a) {
                this.$1 = g.getLoggerInstance();
                this.$2 = null;
                this.$3 = !1;
                this.$4 = !1;
                this.$5 = !1;
                this.$6 = !0;
                this.$7 = 0;
                this.$8 = a;
                if (typeof window !== "undefined") {
                    a = window.location.hostname;
                    (a === "m.facebook.com" || a === "mobile.facebook.com" || a === "mtouch.facebook.com") && (this.$6 = !1)
                }
            }

            var b = a.prototype;
            b.start = function () {
                this.$6 = !0
            }
            ;
            b.stop = function () {
                this.$6 = !1,
                    this.$9()
            }
            ;
            b.onConnectAttempt = function () {
            }
            ;
            b.onConnectFailure = function () {
                this.$9()
            }
            ;
            b.onConnected = function () {
                var a = this;
                this.$7++;
                this.$9();
                this.$3 = !1;
                this.$4 = !1;
                this.$5 = !1;
                this.$6 && (this.$2 = g.setTimeout(function () {
                    a.$10()
                }, 8e3))
            }
            ;
            b.onConnectSuccess = function () {
            }
            ;
            b.onConnectionLost = function () {
                this.$9()
            }
            ;
            b.onSubscribe = function (a) {
                a === "/t_ms" && (this.$3 = !0)
            }
            ;
            b.onUnsubscribe = function (a) {
            }
            ;
            b.onPublish = function (a) {
                (a === "/messenger_sync_get_diffs" || a === "/messenger_sync_create_queue") && (this.$4 = !0,
                this.$3 && (this.$5 = !0,
                    this.$9()))
            }
            ;
            b.onMessage = function (a) {
            }
            ;
            b.onWSFatal = function () {
            }
            ;
            b.$9 = function () {
                this.$2 && (g.clearTimeout(this.$2),
                    this.$2 = null)
            }
            ;
            b.$10 = function () {
                if (this.$4 === !1) {
                    var a = this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
                    this.$1.bumpCounter(a);
                    this.$1.eventLogMiscellaneousError({
                        errorMessage: a
                    });
                    this.$8() ? this.$1.bumpCounter(a + ".withProvider") : this.$1.bumpCounter(a + ".withoutProvider");
                    this.$3 === !0 ? this.$1.bumpCounter(a + ".withTopicSubscribe") : this.$1.bumpCounter(a + ".withoutTopicSubscribe")
                }
                this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
                this.$3 === !0 && this.$4 === !0 && this.$5 === !1 && this.$1.bumpCounter("session_before_topic_subscribe")
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttAnalyticsHook", ["MqttEnv"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env;
        a = function () {
            function a() {
                this.$1 = g.getLoggerInstance(),
                    this.$2 = 0,
                    this.$3 = 0,
                    this.$4 = 0,
                    this.$5 = 0,
                    this.$1.bumpCounter("session_start"),
                g.isUserLoggedInNow() || this.$1.bumpCounter("session_start.logout")
            }

            var b = a.prototype;
            b.onConnectAttempt = function () {
                this.$1.bumpCounter("ws_connect_attempt")
            }
            ;
            b.onConnectFailure = function () {
                this.$3++,
                    this.$1.bumpCounter("ws_connect_failure")
            }
            ;
            b.onConnected = function () {
                this.$1.bumpCounter("ws_connect_connected")
            }
            ;
            b.onConnectSuccess = function () {
                this.$2 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
                    this.$2++,
                    this.$1.bumpCounter("ws_connect_success")
            }
            ;
            b.onConnectionLost = function () {
                this.$1.bumpCounter("ws_disconnect")
            }
            ;
            b.onSubscribe = function (a) {
            }
            ;
            b.onUnsubscribe = function (a) {
            }
            ;
            b.onPublish = function (a) {
                this.$1.bumpCounter("ws_publish." + a)
            }
            ;
            b.onMessage = function (a) {
                this.$1.bumpCounter("message_arrived." + a)
            }
            ;
            b.onWSFatal = function () {
                this.$1.bumpCounter("ws_fatal")
            }
            ;
            b.onPollRequestSent = function () {
                this.$1.bumpCounter("polling_request_send")
            }
            ;
            b.onPollRequestSuccess = function () {
                this.$1.bumpCounter("polling_request_succeed"),
                this.$4 === 0 && this.$1.bumpCounter("polling_first_success"),
                    this.$4++
            }
            ;
            b.onPollResponse = function (a) {
                this.$1.bumpCounter("lp.message_arrived." + a)
            }
            ;
            b.onPollFinish = function () {
                this.$1.bumpCounter("polling_request_finish")
            }
            ;
            b.onPollRequestFailed = function (a) {
                this.$1.bumpCounter("polling_request_failed"),
                    this.$1.bumpCounter("polling_request_failed_" + a),
                    this.$5++
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttConnectionHookCollection", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a() {
                this.$1 = new Set()
            }

            var b = a.prototype;
            b.addHook = function (a) {
                this.$1.add(a)
            }
            ;
            b.removeHook = function (a) {
                this.$1["delete"](a)
            }
            ;
            b.onConnectAttempt = function () {
                this.$1.forEach(function (a) {
                    a.onConnectAttempt()
                })
            }
            ;
            b.onConnectFailure = function () {
                this.$1.forEach(function (a) {
                    a.onConnectFailure()
                })
            }
            ;
            b.onConnected = function () {
                this.$1.forEach(function (a) {
                    a.onConnected()
                })
            }
            ;
            b.onConnectSuccess = function () {
                this.$1.forEach(function (a) {
                    a.onConnectSuccess()
                })
            }
            ;
            b.onConnectionLost = function () {
                this.$1.forEach(function (a) {
                    a.onConnectionLost()
                })
            }
            ;
            b.onSubscribe = function (a) {
                this.$1.forEach(function (b) {
                    b.onSubscribe(a)
                })
            }
            ;
            b.onUnsubscribe = function (a) {
                this.$1.forEach(function (b) {
                    b.onUnsubscribe(a)
                })
            }
            ;
            b.onPublish = function (a) {
                this.$1.forEach(function (b) {
                    b.onPublish(a)
                })
            }
            ;
            b.onMessage = function (a) {
                this.$1.forEach(function (b) {
                    b.onMessage(a)
                })
            }
            ;
            b.onWSFatal = function () {
                this.$1.forEach(function (a) {
                    a.onWSFatal()
                })
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttProtocolUtils", ["MqttEnv"], (function (a, b, c, d, e, f) {
        var g = b("MqttEnv").Env;

        function a(a, b) {
            if (a == null)
                return b;
            var c = new Uint8Array(a.length + b.length);
            c.set(a);
            c.set(b, a.length);
            return c
        }

        function c(a, b) {
            b = b;
            var c = 0, d = 1, e;
            do {
                if (b === a.length)
                    return null;
                e = a[b++];
                c += (e & 127) * d;
                d *= 128
            } while ((e & 128) !== 0);
            return {
                value: c,
                offset: b
            }
        }

        function d(a) {
            a = a;
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
            c = c;
            b[c++] = a >> 8;
            b[c++] = a % 256;
            return c
        }

        function f(a, b) {
            return 256 * a[b] + a[b + 1]
        }

        function i(a) {
            var b = 0;
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a.charCodeAt(c);
                e < 128 ? b += 1 : e < 2048 ? b += 2 : e >= 55296 && e <= 56319 ? (b += 4,
                    c++) : b += 3
            }
            return b
        }

        function j(a, b, c, d) {
            d = h(b, c, d);
            k(a, c, d);
            return d + b
        }

        function k(a, b, c) {
            c = c;
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

        function l(a, b, c) {
            var d = []
                , e = b
                , f = 0;
            while (e < b + c) {
                var g = a[e++];
                if (g < 128)
                    d[f++] = String.fromCharCode(g);
                else if (g > 191 && g < 224) {
                    var h = a[e++];
                    d[f++] = String.fromCharCode((g & 31) << 6 | h & 63)
                } else if (g > 239 && g < 365) {
                    h = a[e++];
                    var i = a[e++]
                        , j = a[e++];
                    h = ((g & 7) << 18 | (h & 63) << 12 | (i & 63) << 6 | j & 63) - 65536;
                    d[f++] = String.fromCharCode(55296 + (h >> 10));
                    d[f++] = String.fromCharCode(56320 + (h & 1023))
                } else {
                    i = a[e++];
                    j = a[e++];
                    d[f++] = String.fromCharCode((g & 15) << 12 | (i & 63) << 6 | j & 63)
                }
            }
            return d.join("")
        }

        b = function () {
            "use strict";

            function a(a, b, c) {
                this.$1 = a * 1e3,
                    this.$4 = b,
                    this.$5 = c,
                    this.$3 = !1
            }

            var b = a.prototype;
            b.$6 = function () {
                var a = this;
                this.$3 ? (this.$3 = !1,
                    this.$4(),
                    this.$2 = g.setTimeout(function () {
                        a.$6()
                    }, this.$1)) : this.$5()
            }
            ;
            b.reset = function () {
                var a = this;
                this.$3 = !0;
                this.$2 && (g.clearTimeout(this.$2),
                    this.$2 = null);
                this.$1 > 0 && (this.$2 = g.setTimeout(function () {
                    a.$6()
                }, this.$1))
            }
            ;
            b.cancel = function () {
                this.$2 && (g.clearTimeout(this.$2),
                    this.$2 = null)
            }
            ;
            return a
        }();
        e.exports = {
            UTF8Length: i,
            convertStringToUTF8: k,
            concatBuffers: a,
            decodeMultiByteInt: c,
            convertUTF8ToString: l,
            encodeMultiByteInt: d,
            writeUInt16BE: h,
            readUInt16BE: f,
            writeString: j,
            Pinger: b
        }
    }
), null);
__d("MqttUtils", ["MqttEnv"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = {
            endpointWithSessionId: function (a, b) {
                return this.endpointWithExtraParameter(a, "sid", b.toString())
            },
            endpointWithExtraParameters: function (a, b) {
                var c = this
                    , d = a;
                b.forEach(function (a, b, e) {
                    d = c.endpointWithExtraParameter(d, b, a)
                });
                return d
            },
            endpointWithExtraParameter: function (a, b, c) {
                if (a.indexOf("?") > 0)
                    return a + "&" + b + "=" + c;
                else
                    return a + "?" + b + "=" + c
            },
            generateSessionId: function () {
                return Math.floor(g.random() * Number.MAX_SAFE_INTEGER)
            },
            promiseDone: function (a, b, c) {
                var d = arguments.length > 1 ? a.then(b, c) : a;
                d.then(null, function (a) {
                    g.setTimeout(function () {
                        if (a instanceof Error)
                            throw a;
                        else
                            throw new Error("promiseDone")
                    }, 0)
                })
            },
            promiseDoneWithTimeout: function (a, b, c, d) {
                var e = !1;
                g.setTimeout(function () {
                    e || (e = !0,
                        c(new Error("promise timeout")))
                }, d);
                h.promiseDone(a, function (a) {
                    e || (e = !0,
                        b(a))
                }, function (a) {
                    e || (e = !0,
                        c(a))
                })
            },
            sprintf: function (a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function () {
                    return String(c[e++])
                })
            },
            hasWSSupport: function () {
                return "WebSocket" in a && a.WebSocket != null && "CLOSING" in a.WebSocket.prototype
            },
            getWSAvailability: function () {
                var b = "";
                if ("WebSocket" in a && a.WebSocket !== null)
                    b += "W";
                else
                    return "none";
                "CLOSING" in a.WebSocket.prototype && (b += "C");
                return b
            }
        };
        e.exports = h
    }
), null);
__d("MqttProtocolCodec", ["MqttProtocolUtils", "MqttUtils"], (function (a, b, c, d, e, f) {
        var g = (c = b("MqttProtocolUtils")).UTF8Length
            , h = c.convertStringToUTF8
            , i = c.convertUTF8ToString
            , j = c.decodeMultiByteInt
            , k = c.encodeMultiByteInt
            , l = c.readUInt16BE
            , m = c.writeString
            , n = c.writeUInt16BE
            , o = b("MqttUtils").sprintf
            // @todo enum
            , p = Object.freeze({
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
            , q = [0, 6, 77, 81, 73, 115, 100, 112, 3];

        function r(a, b) {
            b = b;
            var c = b
                , d = a[b]
                , e = d >> 4;
            b += 1;
            var f = j(a, b);
            if (f == null)
                return {
                    wireMessage: null,
                    position: c
                };
            b = f.offset;
            f = b + f.value;
            if (f > a.length)
                return {
                    wireMessage: null,
                    position: c
                };
            var g;
            switch (e) {
                case p.CONNACK:
                    c = a[b++];
                    c = !!(c & 1);
                    var h = a[b++];
                    g = new u(c, h);
                    break;
                case p.PUBLISH:
                    c = d & 15;
                    h = c >> 1 & 3;
                    d = l(a, b);
                    b += 2;
                    var k = i(a, b, d);
                    b += d;
                    d = null;
                    h === 1 && (d = l(a, b),
                        b += 2);
                    var m = w.createWithBytes(a.subarray(b, f))
                        , n = (c & 1) === 1;
                    c = (c & 8) === 8;
                    g = new x(k, m, h, d, n, c);
                    break;
                case p.PINGREQ:
                    g = new s("PINGREQ");
                    break;
                case p.PINGRESP:
                    g = new s("PINGRESP");
                    break;
                case p.PUBACK:
                case p.UNSUBACK:
                    k = l(a, b);
                    g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK", k);
                    break;
                case p.SUBACK:
                    m = l(a, b);
                    b += 2;
                    h = a.subarray(b, f);
                    g = new t(m, h);
                    break;
                default:
                    throw new Error(o("Invalid MQTT message type %s.", e))
            }
            return {
                wireMessage: g,
                position: f
            }
        }

        function a(a) {
            var b = []
                , c = 0;
            while (c < a.length) {
                var d = r(a, c)
                    , e = d.wireMessage;
                c = d.position;
                if (e)
                    b.push(e);
                else
                    break
            }
            d = null;
            c < a.length && (d = a.subarray(c));
            return {
                messages: b,
                remaining: d
            }
        }

        d = function () {
            "use strict";

            function a(a) {
                this.messageType = p[a]
            }

            var b = a.prototype;
            b.encode = function () {
                throw new TypeError("Cannot abstract class WireMessage")
            }
            ;
            return a
        }();
        var s = function (b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a) {
                return b.call(this, a) || this
            }

            var c = a.prototype;
            c.encode = function () {
                var a = new ArrayBuffer(2)
                    , b = new Uint8Array(a);
                b[0] = (this.messageType & 15) << 4;
                return a
            }
            ;
            return a
        }(d);
        f = function (a) {
            "use strict";
            babelHelpers.inheritsLoose(b, a);

            function b() {
                return a.call(this, "DISCONNECT") || this
            }

            var c = b.prototype;
            c.encode = function () {
                var a = (this.messageType & 15) << 4
                    , b = new ArrayBuffer(2)
                    , c = new Uint8Array(b);
                c[0] = a;
                c.set(k(0), 1);
                return b
            }
            ;
            return b
        }(d);
        var t = function (b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                var d;
                d = b.call(this, "SUBACK") || this;
                d.messageIdentifier = a;
                d.returnCode = c;
                return d
            }

            return a
        }(d)
            , u = function (b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                var d;
                d = b.call(this, "CONNACK") || this;
                d.sessionPresent = a;
                d.returnCode = c;
                return d
            }

            return a
        }(d)
            , v = function (b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c) {
                a = b.call(this, a) || this;
                a.messageIdentifier = c;
                return a
            }

            var c = a.prototype;
            c.encode = function () {
                var a = (this.messageType & 15) << 4
                    , b = 2
                    , c = k(b)
                    , d = c.length + 1;
                b = new ArrayBuffer(b + d);
                var e = new Uint8Array(b);
                e[0] = a;
                e.set(c, 1);
                d = n(this.messageIdentifier, e, d);
                return b
            }
            ;
            return a
        }(d);
        c = function (a) {
            "use strict";
            babelHelpers.inheritsLoose(b, a);

            function b(b, c) {
                var d;
                d = a.call(this, "CONNECT") || this;
                d.clientId = b;
                d.connectOptions = c;
                return d
            }

            var c = b.prototype;
            c.encode = function () {
                var a = (this.messageType & 15) << 4
                    , b = q.length + 3;
                b += g(this.clientId) + 2;
                b += g(this.connectOptions.userName) + 2;
                var c = k(b);
                b = new ArrayBuffer(1 + c.length + b);
                var d = new Uint8Array(b);
                d[0] = a;
                a = 1;
                d.set(c, 1);
                a += c.length;
                d.set(q, a);
                a += q.length;
                c = 2 | 128;
                d[a++] = c;
                a = n(this.connectOptions.keepAliveInterval, d, a);
                a = m(this.clientId, g(this.clientId), d, a);
                a = m(this.connectOptions.userName, g(this.connectOptions.userName), d, a);
                return b
            }
            ;
            return b
        }(d);
        b = function (a) {
            "use strict";
            babelHelpers.inheritsLoose(b, a);

            function b(b, c, d, e) {
                var f;
                f = a.call(this, b) || this;
                f.topic = c;
                if (d < 0 && d > 1 || d === 1 && e == null)
                    throw new TypeError(o("Argument Invalid. qos: %s messageType: %s.", d, b));
                f.qos = d;
                f.messageIdentifier = e;
                return f
            }

            var c = b.prototype;
            c.encode = function () {
                var a = (this.messageType & 15) << 4;
                a |= 2;
                var b = g(this.topic)
                    , c = 2 + b + 2;
                this.messageType === p.SUBSCRIBE && (c += 1);
                var d = k(c);
                c = new ArrayBuffer(1 + d.length + c);
                var e = new Uint8Array(c);
                e[0] = a;
                a = 1;
                e.set(d, 1);
                a += d.length;
                this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
                a = m(this.topic, b, e, a);
                this.messageType === p.SUBSCRIBE && this.qos != null && (e[a++] = this.qos);
                return c
            }
            ;
            return b
        }(d);
        var w = function () {
            "use strict";

            function a(a, b) {
                this.payloadString = a,
                    this.payloadBytes = b
            }

            a.createWithString = function (b) {
                var c = new Uint8Array(new ArrayBuffer(g(b)));
                h(b, c, 0);
                return new a(b, c)
            }
            ;
            a.createWithBytes = function (b) {
                var c = i(b, 0, b.length);
                return new a(c, b)
            }
            ;
            var b = a.prototype;
            b.string = function () {
                return this.payloadString
            }
            ;
            b.bytes = function () {
                return this.payloadBytes
            }
            ;
            return a
        }()
            , x = function (b) {
            "use strict";
            babelHelpers.inheritsLoose(a, b);

            function a(a, c, d, e, f, g) {
                var h;
                h = b.call(this, "PUBLISH") || this;
                h.topic = a;
                h.payloadMessage = c;
                h.qos = d;
                h.messageIdentifier = e;
                h.retained = f != null ? f : !1;
                h.duplicate = g != null ? g : !1;
                if (h.qos === 1 && h.messageIdentifier == null)
                    throw new TypeError("Argument Invalid. messageIdentifier: null and qos: 1");
                return h
            }

            var c = a.prototype;
            // @todo: here is encode
            c.encode = function () {
                var a = (this.messageType & 15) << 4;
                this.duplicate && (a |= 8);
                a = a |= this.qos << 1;
                this.retained && a != 1;
                var b = g(this.topic) // topic /send_message2
                    , c = b + 2
                    , d = this.qos === 0 ? 0 : 2;
                c += d;
                d = this.payloadMessage.bytes();
                c += d.byteLength;
                var e = k(c);
                c = new ArrayBuffer(1 + e.length + c);
                var f = new Uint8Array(c);
                f[0] = a;
                f.set(e, 1);
                a = 1 + e.length;
                a = m(this.topic, b, f, a);
                this.qos !== 0 && this.messageIdentifier != null && (a = n(this.messageIdentifier, f, a));
                f.set(d, a);
                return c
            }
            ;
            return a
        }(d);
        e.exports = {
            MESSAGE_TYPE: p,
            WireMessage: {
                Base: d,
                PubAckUnsubAck: v,
                Ping: s,
                ConnAck: u,
                Connect: c,
                Disconnect: f,
                Subscription: b,
                Publish: x
            },
            createMessageWithString: w.createWithString,
            decodeMessage: r,
            decodeByteMessages: a
        }
    }
), null);
__d("MqttTypes", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function (a, b) {
            this.errorCode = a,
                this.errorMessage = b
        }
        ;
        f.MqttError = a;
        b = function (a, b) {
            this.mqttError = a,
                this.connAck = b
        }
        ;
        f.ConnectFailure = b;
        c = function (a) {
            babelHelpers.inheritsLoose(b, a);

            function b(b, c, d) {
                d === void 0 && (d = null);
                c = a.call(this, c) || this;
                c.isRecoverable = b;
                c.originalError = d;
                return c
            }

            return b
        }(babelHelpers.wrapNativeSuper(Error));
        f.MqttChannelError = c
    }
), null);
__d("MqttProtocolClient", ["MqttEnv", "MqttProtocolCodec", "MqttTypes", "MqttProtocolUtils"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = 30
            , h = 6e4
            , i = b("MqttEnv").Env
            , j = (a = b("MqttProtocolCodec")).MESSAGE_TYPE
            , k = a.WireMessage
            , l = a.createMessageWithString
            , m = a.decodeByteMessages;
        c = b("MqttTypes").MqttError;
        var n = b("MqttTypes").ConnectFailure
            , o = b("MqttProtocolUtils").concatBuffers
            , p = b("MqttProtocolUtils").Pinger
            , q = {
            SOCKET_ERROR: new c(1, "Socket error"),
            SOCKET_MESSAGE: new c(2, "Unable to parse invalid socket message"),
            INVALID_DATA_TYPE: new c(3, "Received non-arraybuffer from socket."),
            CONNECT_TIMEOUT: new c(4, "Connect timed out"),
            CONNACK_FAILURE: new c(5, "Connection failure due to connack"),
            PING_TIMEOUT: new c(6, "Ping timeout"),
            APP_DISCONNECT: new c(7, "Disconnect initiated by app"),
            SERVER_DISCONNECT: new c(8, "Disconnect message sent my server"),
            SOCKET_CLOSE: new c(9, "Socket connection closed")
        };
        d = function () {
            function a(a) {
                this.$3 = a,
                    this.$2 = {
                        userName: "",
                        mqttVersion: 3,
                        keepAliveInterval: 10,
                        ignoreSubProtocol: !1,
                        onConnectSuccess: function () {
                        },
                        onConnectFailure: function (a) {
                        },
                        onConnection: function () {
                        },
                        onConnectionError: function (a) {
                        },
                        onConnectionLost: function (a) {
                        },
                        onMessageArrived: function (a, b, c) {
                        },
                        onMessageDelivered: function (a, b) {
                        }
                    },
                    this.$1 = "mqttwsclient",
                    this.$4 = 0,
                    this.$5 = !1,
                    this.$9 = i.getLoggerInstance()
            }

            var b = a.prototype;
            b.connect = function (a) {
                var b = this;
                if (this.$5)
                    throw new Error("Invalid state: connect - already connected");
                this.$2 = a;
                this.setConnected(!1);
                this.$7 != null && (i.clearTimeout(this.$7),
                    this.$7 = null);
                this.$7 = i.setTimeout(function () {
                    b.$9.bumpCounter("protocol.error.connect.timeout"),
                        b.$11(q.CONNECT_TIMEOUT)
                }, g * 1e3);
                this.$6 = i.createSocket(this.$3);
                this.$6.binaryType = "arraybuffer";
                this.$6.onopen = function () {
                    b.setConnected(!0),
                        b.$12(new k.Connect(b.$1, a)),
                        a.onConnection()
                }
                ;
                this.$6.onmessage = function (a) {
                    a = a.data;
                    if (!(a instanceof ArrayBuffer)) {
                        b.$9.bumpCounter("protocol.error.onmessage.type");
                        b.$11(q.INVALID_DATA_TYPE);
                        return
                    }
                    try {
                        a = new Uint8Array(a);
                        b.$10 != null && (a = o(b.$10, a),
                            b.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
                            delete b.$10,
                            b.$10 = null);
                        a = m(a);
                        var c = a.messages;
                        b.$10 = a.remaining;
                        for (var a = 0; a < c.length; a++)
                            b.handleMessage(c[a])
                    } catch (a) {
                        b.$10 = null,
                            b.$9.logError(a, q.SOCKET_MESSAGE.errorMessage),
                            b.$9.bumpCounter("protocol.error.onmessage.parse"),
                            b.$11(q.SOCKET_MESSAGE)
                    }
                }
                ;
                this.$6.onerror = function (a) {
                    b.$9.bumpCounter("protocol.error.socket"),
                        b.$11(q.SOCKET_ERROR)
                }
                ;
                this.$6.onclose = function (a) {
                    b.$9.bumpCounter("protocol.socket.close"),
                        b.$11(q.SOCKET_CLOSE)
                }
                ;
                this.$8 != null && this.$8.cancel();
                this.$8 = new p(a.keepAliveInterval, this.$12.bind(this, new k.Ping("PINGREQ")), this.$11.bind(this, q.PING_TIMEOUT))
            }
            ;
            b.$13 = function () {
                this.setConnected(!1),
                this.$8 != null && this.$8.cancel(),
                this.$7 != null && (i.clearTimeout(this.$7),
                    this.$7 = null),
                this.$6 != null && (this.$6.onopen = function (a) {
                }
                    ,
                    this.$6.onmessage = function (a) {
                    }
                    ,
                    this.$6.onerror = function (a) {
                    }
                    ,
                    this.$6.onclose = function (a) {
                    }
                    ,
                this.$6.readyState === this.$6.OPEN && this.$6.close(),
                    delete this.$6,
                    this.$6 = null),
                    this.$2.onConnectSuccess = function () {
                    }
                    ,
                    this.$2.onConnectFailure = function (a) {
                    }
                    ,
                    this.$2.onConnection = function () {
                    }
                    ,
                    this.$2.onConnectionError = function (a) {
                    }
                    ,
                    this.$2.onConnectionLost = function (a) {
                    }
                    ,
                    this.$2.onMessageArrived = function (a, b, c) {
                    }
                    ,
                    this.$2.onMessageDelivered = function (a, b) {
                    }
            }
            ;
            b.disconnect = function () {
                if (this.$6 == null || this.$6.readyState !== this.$6.OPEN || !this.$5) {
                    this.$13();
                    return
                }
                this.$12(new k.Disconnect());
                this.$9.bumpCounter("protocol.debug.disconnect");
                this.$11(q.APP_DISCONNECT)
            }
            ;
            b.isConnected = function () {
                return this.$5
            }
            ;
            b.setConnected = function (a) {
                this.$5 = a
            }
            ;
            b.subscribe = function (a) {
                if (!this.$5) {
                    this.$9.bumpCounter("protocol.error.subscribe.notconnected");
                    throw new Error("Invalid state: subscribe - not connected")
                }
                this.$9.bumpCounter("protocol.subscribe." + a);
                a = new k.Subscription("SUBSCRIBE", a, 0, this.$14());
                this.$12(a)
            }
            ;
            b.unsubscribe = function (a) {
                if (!this.$5) {
                    this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
                    throw new Error("Invalid state: unsubscribe - not connected")
                }
                this.$9.bumpCounter("protocol.unsubscribe." + a);
                a = new k.Subscription("UNSUBSCRIBE", a, 0, this.$14());
                this.$12(a)
            }
            ;
            b.publish = function (a, b, c) {
                this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
                this.$9.bumpCounter("protocol.publish." + a);
                var d = this.$14();
                a = new k.Publish(a, l(b), c, d);
                this.$12(a);
                return d
            }
            ;
            b.$14 = function () {
                ++this.$4 === h && (this.$4 = 1);
                return this.$4
            }
            ;
            b.$11 = function (a, b) {
                this.$9.bumpCounter("protocol.debug.disconnect.internal");
                var c = this.$5
                    , d = this.$2
                    , e = d.onConnectionLost
                    , f = d.onConnectFailure;
                this.setConnected(!1);
                this.$13();
                c ? i.scheduleCallback(function () {
                    e(a)
                }) : i.scheduleCallback(function () {
                    f(new n(a, b != null ? b : -1))
                })
            }
            ;
            b.$12 = function (a) {
                var b = this.$6;
                if (b == null)
                    return;
                if (b.readyState != b.OPEN)
                    return;
                // todo: send
                b.send(a.encode())
            }
            ;
            b.handleMessage = function (a) {
                var b = this;
                switch (a.messageType) {
                    case j.CONNACK:
                        this.$7 != null && (i.clearTimeout(this.$7),
                            this.$7 = null);
                        if (a instanceof k.ConnAck) {
                            var c = a;
                            if (c.returnCode !== 0) {
                                this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                                this.setConnected(!1);
                                this.$11(q.CONNACK_FAILURE, c.returnCode);
                                return
                            }
                            i.scheduleCallback(function () {
                                b.$2.onConnectSuccess()
                            });
                            this.$8 != null && this.$8.reset()
                        }
                        break;
                    case j.PUBLISH:
                        if (a instanceof k.Publish) {
                            var d = a;
                            i.scheduleCallback(function () {
                                b.$2.onMessageArrived(d.topic, d.payloadMessage.payloadString, d.qos)
                            });
                            c = d.messageIdentifier;
                            this.$9.bumpCounter("protocol.publish.received");
                            if (d.qos === 1 && c != null) {
                                c = new k.PubAckUnsubAck("PUBACK", c);
                                this.$12(c)
                            }
                        }
                        break;
                    case j.PUBACK:
                        if (a instanceof k.PubAckUnsubAck) {
                            c = a;
                            var e = c.messageIdentifier;
                            this.$9.bumpCounter("protocol.puback.received");
                            i.scheduleCallback(function () {
                                b.$2.onMessageDelivered("", e)
                            })
                        }
                        break;
                    case j.PINGRESP:
                        this.$8 != null && this.$8.reset();
                        break;
                    case j.DISCONNECT:
                        this.$11(q.SERVER_DISCONNECT);
                        break;
                    case j.SUBACK:
                        this.$9.bumpCounter("protocol.suback.received");
                        break;
                    case j.UNSUBACK:
                        this.$9.bumpCounter("protocol.unsuback.received");
                        break;
                    default:
                        this.$9.logError(new Error("MqttProtocolClient: Received unhandled message type: " + a.messageType), "Received unhandled message type");
                        this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
                        break
                }
            }
            ;
            return a
        }();
        e.exports = d
    }
), null);
__d("MqttUserName", ["gkx"], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a(a, c, d, e, f, g, h) {
                h === void 0 && (h = null),
                    this.$1 = a,
                    this.$2 = c,
                    this.$3 = d,
                    this.$4 = e,
                    this.$5 = f,
                    this.$6 = g,
                    this.$7 = b("gkx")("1166607") ? !1 : typeof document === "object" && document && document.hasFocus && document.hasFocus(),
                    this.$8 = h
            }

            var c = a.prototype;
            c.gen = function (a, c, d, e) {
                e === void 0 && (e = []);
                var f = b("gkx")("1166607") ? !1 : this.$7;
                a = {
                    u: this.$1,
                    s: a,
                    cp: this.$3,
                    ecp: this.$2,
                    chat_on: this.$6,
                    fg: f,
                    d: this.$4,
                    ct: "websocket",
                    mqtt_sid: "",
                    aid: this.$5,
                    st: c,
                    pm: d,
                    dc: "",
                    no_auto_fg: !0,
                    gas: this.$8,
                    pack: e
                };
                return JSON.stringify(a)
            }
            ;
            c.setForegroundState = function (a) {
                this.$7 = a
            }
            ;
            c.setChatVisibility = function (a) {
                this.$6 = a
            }
            ;
            c.getEndpointCapabilities = function () {
                return this.$2
            }
            ;
            c.setEndpointCapabilities = function (a) {
                this.$2 = a
            }
            ;
            c.getIsGuestAuthStringPresent = function () {
                return this.$8 !== null
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttConnection", ["Promise", "MqttConnectionHookCollection", "MqttEnv", "MqttProtocolClient", "MqttPublishListener", "MqttTypes", "MqttUserName", "MqttUtils"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env;
        b("MqttEnv").MqttGkNames;
        var h = b("MqttPublishListener").MqttPublishEvent;
        b("MqttTypes").ConnectFailure;
        var i = b("MqttTypes").MqttChannelError;
        b("MqttTypes").MqttError;
        var j = 10
            , k = "publish"
            , l = "subscribe"
            , m = "unsubscribe"
            , n = function (a) {
        }
            , o = 18e4
            , p = 5 * 1e3
            , q = 15
            , r = 21;
        a = function () {
            function a() {
                this.$8 = !1;
                this.$10 = g.getLoggerInstance();
                this.$11 = "Disconnected";
                this.$14 = new Set();
                this.$15 = new Map();
                this.$18 = 0;
                this.$19 = 0;
                this.$12 = 0;
                this.$13 = 0;
                this.$8 = !1;
                this.$5 = "";
                this.$6 = new (b("MqttUserName"))("", 0, 1, "", 0, !0);
                this.$9 = 0;
                this.$7 = null;
                var a = function () {
                };
                this.$1 = a;
                this.$2 = a;
                this.$3 = a;
                this.$16 = !1;
                this.$17 = !1;
                this.$20 = new (b("MqttConnectionHookCollection"))();
                this.$4 = function () {
                    return []
                }
            }

            var c = a.prototype;
            c.run = function (a) {
                var b = this
                    , c = a.onStateChange
                    , d = a.onJSError
                    , e = a.onMessageReceived
                    , f = a.endpoint
                    , g = a.mqttUserName
                    , h = a.subscribedTopics;
                a = a.extraConnectMessageProvider;
                if (this.$8) {
                    this.$10.debugTrace("run", "Run called while in running state.");
                    return
                }
                this.$1 = c;
                this.$3 = e;
                this.$5 = f;
                this.$6 = g;
                this.$8 = !0;
                this.$12 = 0;
                this.$2 = d || n;
                h && h.forEach(function (a) {
                    return b.$14.add(a)
                });
                this.$4 = a;
                this.$21();
                this.$22()
            }
            ;
            c.shutdown = function () {
                this.$23(),
                    this.$24("shutdown"),
                    this.$8 = !1,
                    this.$10.debugTrace("shutdown", "Shutdown")
            }
            ;
            c.subscribe = function (a) {
                this.$14.add(a);
                this.ensureConnected(l) && this.$25(a);
                return !0
            }
            ;
            c.publish = function (a, c, d, e) {
                var f = {
                    resolve: function () {
                    },
                    reject: function (a) {
                    }
                };
                e != null && (f.listener = e);
                var g = new (b("Promise"))(function (a, b) {
                        f.resolve = a,
                            f.reject = b
                    }
                )
                    , i = this.ensureConnected(k);
                !i ? (e == null ? void 0 : e.onEvent(h.NOT_CONNECTED),
                    f.reject(new Error("Client disconnected"))) : this.$26(a, c, d, f);
                return g
            }
            ;
            c.unsubscribe = function (a) {
                this.$14["delete"](a);
                this.ensureConnected(m) && this.$27(a);
                return !0
            }
            ;
            c.addHook = function (a) {
                this.$20.addHook(a)
            }
            ;
            c.removeHook = function (a) {
                this.$20.removeHook(a)
            }
            ;
            c.isRunning = function () {
                return this.$8
            }
            ;
            c.getSessionId = function () {
                return this.$9
            }
            ;
            c.hasFatal = function () {
                return this.$16
            }
            ;
            c.hasConnectSuccess = function () {
                return this.$17
            }
            ;
            c.canPublish = function () {
                return this.ensureConnected("canPublish")
            }
            ;
            c.ensureConnected = function (a) {
                return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0
            }
            ;
            c.connectionState = function () {
                return this.$11
            }
            ;
            c.mqttStateFromConnectionState = function (a) {
                switch (a) {
                    case "Connecting":
                    case "TransportConnected":
                        return "Connecting";
                    case "Connected":
                        return "Connected";
                    case "Disconnected":
                        return "Disconnected"
                }
                throw new Error("Unknown state " + a)
            }
            ;
            c.testOnlyGetSubscribedTopics = function () {
                return this.$14
            }
            ;
            c.$21 = function () {
                var a = this;
                typeof window !== "undefined" && window.addEventListener("unload", function (b) {
                    return a.$28(b)
                })
            }
            ;
            c.$28 = function (a) {
                this.publish("/browser_close", "{}", 0)
            }
            ;
            c.$23 = function () {
                this.$8 && this.$7 != null && (this.$29("Disconnected"),
                this.$7 != null && this.$7.disconnect(),
                    this.$7 = null)
            }
            ;
            c.$29 = function (a) {
                a !== this.$11 && (this.$11 = a,
                    this.$1(a))
            }
            ;
            c.$22 = function () {
                var a = this;
                if (!this.$8)
                    return;
                this.$29("Connecting");
                var c = Date.now();
                this.$9 = b("MqttUtils").generateSessionId();
                var d = Array.from(this.$14)
                    , e = b("MqttUtils").endpointWithSessionId(this.$5, this.$9);
                try {
                    this.$7 = new (b("MqttProtocolClient"))(e);
                    var f = this.$30()
                        , g = f.map(function (a) {
                        return a.topic
                    });
                    e = this.$6.gen(this.$9, d, f);
                    this.$7 != null && (this.$7.connect({
                        userName: e,
                        mqttVersion: 3,
                        keepAliveInterval: j,
                        ignoreSubProtocol: !0,
                        onConnectFailure: function (b) {
                            return a.$31(b, c, d, g)
                        },
                        onConnectSuccess: function () {
                            return a.$32(c, d, g)
                        },
                        onConnection: function () {
                            return a.$33(f, d)
                        },
                        onConnectionError: function (b) {
                            return a.$34(b)
                        },
                        onConnectionLost: function (b) {
                            return a.$35(b)
                        },
                        onMessageArrived: function (b, c, d) {
                            return a.$36(b, c, d)
                        },
                        onMessageDelivered: function (b, c) {
                            return a.$37(b, c)
                        }
                    }),
                        this.$10.bumpCounter("protocol.connectattempt"),
                        this.$20.onConnectAttempt(),
                    this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.connectattempt"))
                } catch (a) {
                    this.$10.bumpCounter("js_error_in_init_exception"),
                        this.$29("Disconnected"),
                        this.$38(!1, !1, c, d, [], 14, a.message),
                    a && this.$10.logErrorWarn(a, "ws_js_error"),
                        this.$20.onWSFatal(),
                        this.$39(new i(!1, "ws_js_error", a), "client_init")
                }
            }
            ;
            c.$30 = function () {
                var a = this.$4()
                    , b = 65536;
                a = a.map(function (a) {
                    a.messageId = b--;
                    return a
                });
                return a
            }
            ;
            c.$25 = function (a) {
                try {
                    if (this.$7 != null) {
                        this.$7.subscribe(a);
                        this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
                        this.$20.onSubscribe(a);
                        this.$10.bumpCounter("protocol.subscribe");
                        return !0
                    }
                } catch (b) {
                    this.$10.logError(b, "Exception subscribing"),
                        this.$10.bumpCounter("subscribe_exception." + a),
                        this.$10.bumpCounter("protocol.subscribe.error")
                }
                return !1
            }
            ;
            c.$27 = function (a) {
                try {
                    if (this.$7 != null) {
                        this.$7.unsubscribe(a);
                        this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
                        this.$20.onUnsubscribe(a);
                        this.$10.bumpCounter("protocol.unsubscribe");
                        return !0
                    }
                } catch (b) {
                    this.$10.logError(b, "Exception unsubscribing"),
                        this.$10.bumpCounter("unsubscribe_exception." + a),
                        this.$10.bumpCounter("protocol.unsubscribe.error")
                }
                return !1
            }
            ;
            c.$26 = function (a, b, c, d) {
                if (this.$7 != null)
                    try {
                        b = this.$7.publish(a, b, c);
                        this.$10.bumpCounter("protocol.publish");
                        var e = b != null ? b : "null";
                        this.$10.debugTrace("_doPublish", "publish " + a + " with messageId:" + e + " qos:" + c);
                        this.$20.onPublish(a);
                        (e = d.listener) == null ? void 0 : e.onEvent(h.SENT);
                        b != null ? this.$15.set(b, d) : d.resolve();
                        return !0
                    } catch (b) {
                        this.$10.logError(b, "Exception publishing");
                        this.$10.bumpCounter("publish_exception." + a);
                        d.reject(b);
                        this.$10.bumpCounter("protocol.publish.error");
                        return !1
                    }
                else
                    return !1
            }
            ;
            c.$40 = function (a) {
                var b = this;
                a === void 0 && (a = null);
                if (!this.$8)
                    return;
                this.$23();
                this.$24("reconnect");
                this.$41();
                this.$9 = -1;
                this.$13 = 0;
                a = a != null ? a : Math.pow(2, Math.min(this.$12, 6)) * (1e3 + g.random() * 200);
                this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
                g.setTimeout(function () {
                    b.$22()
                }, a);
                this.$12 += 1
            }
            ;
            c.$41 = function () {
                var a = Date.now() - this.$13
                    , b = this.$13 !== 0 && a > p
                    , c = this.$12 > q;
                (b || c) && (this.$12 = 0);
                this.$13 !== 0 && a <= p && this.$10.bumpCounter("short_lived_session");
                c && this.$10.bumpCounter("connection_attempt_limit")
            }
            ;
            c.$38 = function (a, b, c, d, e, f, g) {
                a === !0 ? this.$19++ : this.$18++,
                    this.$10.eventLogConnect({
                        sessionID: this.$9,
                        connectionStatus: a,
                        connectionState: this.mqttStateFromConnectionState(this.$11),
                        ackReceived: b,
                        duration: Date.now() - c,
                        hostname: this.$5,
                        attemptNumber: this.$12,
                        failTotal: this.$18,
                        successTotal: this.$19,
                        subscribedTopics: d,
                        publishes: e,
                        errorCode: f,
                        errorMessage: g
                    })
            }
            ;
            c.$31 = function (a, b, c, d) {
                var e = a.mqttError
                    , f = e.errorMessage;
                this.$10.debugTrace("connect", "Connect failed " + f);
                this.$10.bumpCounter("protocol.onconnectfailure");
                this.$20.onConnectFailure();
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectfailure");
                this.$38(!1, a.connAck != null, b, c, d, e.errorCode, f);
                if (a.connAck != null) {
                    this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
                    if (a.connAck === r) {
                        this.$40(o);
                        return
                    }
                }
                this.$40()
            }
            ;
            c.$33 = function (a, b) {
                var c = this;
                this.$10.bumpCounter("protocol.onconnection");
                this.$10.debugTrace("Connect", "Socket established");
                this.$20.onConnected();
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnection");
                b.forEach(function (a) {
                    c.$20.onSubscribe(a)
                });
                a.forEach(function (a) {
                    c.$20.onPublish(a.topic)
                });
                this.$29("TransportConnected")
            }
            ;
            c.$32 = function (a, b, c) {
                this.$10.bumpCounter("protocol.onconnectsuccess"),
                    this.$10.debugTrace("connect", "Connect success"),
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
                    this.$20.onConnectSuccess(),
                    this.$17 = !0,
                    this.$38(!0, !0, a, b, c),
                    this.$29("Connected"),
                    this.$42(b),
                    this.$13 = Date.now()
            }
            ;
            c.$35 = function (a) {
                this.$10.bumpCounter("protocol.onconnectionlost"),
                a.errorCode && this.$10.eventLogDisconnect({
                    sessionID: this.$9,
                    errorCode: a.errorCode,
                    errorMessage: a.errorMessage,
                    duration: Date.now() - this.$13
                }),
                    this.$10.debugTrace("connect", "connection lost"),
                    this.$20.onConnectionLost(),
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectionlost"),
                    this.$40()
            }
            ;
            c.$34 = function (a) {
            }
            ;
            c.$36 = function (a, b, c) {
                this.$10.bumpCounter("protocol.onmessagearrived");
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onmessagearrived");
                this.$10.debugTrace("onMessageArrived", "Message received on " + a);
                this.$20.onMessage(a);
                try {
                    this.$3(a, b, c)
                } catch (b) {
                    this.$10.logError(b, "Listener threw error"),
                        this.$10.bumpCounter("listener_error." + a)
                }
            }
            ;
            c.$37 = function (a, b) {
                this.$10.bumpCounter("protocol.onmessagedelivered");
                a = b != null ? b : "null";
                this.$10.debugTrace("onMessageDelivered", "Delivered Message {ID: " + a + "}");
                if (b == null)
                    return;
                a = this.$15.get(b);
                if (a == null) {
                    this.$10.bumpCounter("protocol.message_with_unknown_id");
                    return
                }
                this.$15["delete"](b);
                (b = a.listener) == null ? void 0 : b.onEvent(h.ACKED);
                a.resolve()
            }
            ;
            c.$24 = function (a) {
                this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a),
                    this.$15.forEach(function (b, c, d) {
                        (c = b.listener) == null ? void 0 : c.onEvent(h.NOT_ACKED);
                        b.reject(new Error(a))
                    }),
                    this.$15.clear()
            }
            ;
            c.$42 = function (a) {
                var b = this
                    , c = new Set(a);
                c.forEach(function (a) {
                    b.$14.has(a) || b.unsubscribe(a)
                });
                a = new Set(this.$14);
                a.forEach(function (a) {
                    c.has(a) || b.subscribe(a)
                })
            }
            ;
            c.$39 = function (a, b) {
                try {
                    this.$10.bumpCounter("js_error_in_init");
                    this.$10.bumpCounter(b + ".error");
                    this.$16 = !0;
                    var c = a ? a.message : "error";
                    this.$10.debugTrace("onError", b + ": " + c);
                    this.$2(a)
                } catch (a) {
                    this.$10.bumpCounter("js_error_in_error_logging"),
                        this.$10.logError(a, "JS error while trying to log previous error")
                }
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("isFastRefreshEnabledForCurrentDomain", [], (function (a, b, c, d, e, f) {
        "use strict";
        e.exports = a;

        function a() {
            return !1
        }
    }
), null);
__d("MqttChannel", ["Promise", "requireDeferred", "ChannelClientID", "IrisSubscribeChecker", "MqttAnalyticsHook", "MqttConnection", "MqttEnv", "MqttPublishListener", "MqttPublishTimeoutConfig", "MqttUserName", "MqttUtils", "isFastRefreshEnabledForCurrentDomain", "promiseDone"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = b("MqttEnv").MqttGkNames
            , i = b("MqttPublishListener").MqttPublishEvent
            , j = b("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
        a = function () {
            function a(a) {
                var c = this
                    , d = a.endpoint
                    , e = a.pollingEndpoint
                    , f = a.userFbid
                    , h = a.appId
                    , i = a.initialSubscribedTopics
                    , j = a.capabilities
                    , k = a.clientCapabilities
                    , l = a.chatVisibility;
                l = l === void 0 ? !0 : l;
                a = a.guestAuthString;
                a = a === void 0 ? null : a;
                this.$10 = g.getLoggerInstance();
                this.$10.setAppId(h);
                this.$11 = new (b("MqttUserName"))(f, j, k, b("ChannelClientID").getID(), h, l, a);
                this.$1 = d;
                this.$2 = e;
                this.$5 = "Disconnected";
                this.$7 = "LPInactive";
                this.$6 = "Disconnected";
                this.$3 = [];
                this.$4 = new Set();
                this.$8 = new Map();
                this.$9 = new (b("MqttConnection"))();
                this.$12 = null;
                this.$15 = new (b("MqttAnalyticsHook"))();
                this.$14 = new Map();
                this.$13 = [];
                if (!g.isUserLoggedInNow() && !b("isFastRefreshEnabledForCurrentDomain")() && (a == null || a == "")) {
                    this.$10.bumpCounter("logged_out_init");
                    return
                }
                this.$9.addHook(this.$15);
                this.$9.addHook(new (b("IrisSubscribeChecker"))(function () {
                        return c.$4.size > 0
                    }
                ));
                this.$16(i);
                this.$17();
                this.$10.logIfLoggedOut()
            }

            var c = a.prototype;
            c.$16 = function (a) {
                var c = this;
                if (this.$9.isRunning()) {
                    this.$18("run", "Connection started calling run again");
                    return
                }
                if (g.genGk(h.mqtt_ws_polling_enabled)) {
                    var d = g.killswitch("MQTT_WS_FORCE_LONG_POLLING");
                    if (d) {
                        this.$18("MqttChannel", "Websocket disabled, will do long polling only");
                        return
                    } else if (!b("MqttUtils").hasWSSupport()) {
                        this.$18("MqttChannel", "Websocket Unavailable, will do long polling only");
                        this.$10.bumpCounter("ws_unavailable_polling");
                        return
                    }
                }
                this.$9.run({
                    onStateChange: function (a) {
                        c.$19(a)
                    },
                    onJSError: function (a) {
                        c.$20(a)
                    },
                    onMessageReceived: function (a, b, d) {
                        c.$21(a, b, d)
                    },
                    endpoint: this.$1,
                    mqttUserName: this.$11,
                    subscribedTopics: a,
                    extraConnectMessageProvider: function () {
                        return c.$22()
                    }
                })
            }
            ;
            c.shutdown = function () {
                this.$9 && this.$9.shutdown()
            }
            ;
            c.publish = function (a, c, d) {
                d === void 0 && (d = {
                    qos: 1,
                    skipBuffer: !1
                });
                var e;
                d.qos === 0 ? e = this.$23(a, c, d.listener) : e = this.$24(a, c, d);
                b("MqttUtils").promiseDone(e, function () {
                }, function (a) {
                    (a = d.listener) == null ? void 0 : a.onEvent(i.PUBLISH_ERROR)
                });
                return e
            }
            ;
            c.$23 = function (a, b, c) {
                return this.$25(a, b, 0, c)
            }
            ;
            c.$24 = function (a, c, d) {
                var e = {
                    resolve: function () {
                    },
                    reject: function (a) {
                    }
                }
                    , f = new (b("Promise"))(function (a, b) {
                        e.resolve = a,
                            e.reject = b
                    }
                )
                    , h = g.random();
                a = {
                    topic: a,
                    payload: c,
                    options: d,
                    ack: e,
                    publishToken: h,
                    timeoutId: null
                };
                if (d.skipBuffer)
                    if (this.$9.connectionState() === "Connecting") {
                        this.$13.push(a);
                        (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED)
                    } else
                        this.$26(a);
                else {
                    a.timeoutId = this.$27(h);
                    this.$14.set(h, a);
                    (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED);
                    this.$28(a)
                }
                return f
            }
            ;
            c.$26 = function (a) {
                b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function () {
                    a.ack.resolve()
                }, function (b) {
                    a.ack.reject(b)
                })
            }
            ;
            c.$28 = function (a) {
                var c = this;
                b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function () {
                    return c.$29(a)
                }, function (a) {
                })
            }
            ;
            c.$25 = function (a, c, d, e) {
                var f = this, g, h, j = this.getConnectionState(), k = Date.now();
                !this.$9.canPublish() && this.$12 && this.$12.canPublish() ? (g = this.$12.publish(a, c, d),
                    h = "lp",
                e != null && (g = g.then(function () {
                    return e.onEvent(i.SENT)
                })),
                    this.$10.bumpCounter("try_publish_lp")) : (g = this.$9.publish(a, c, d, e),
                    h = "ws",
                    this.$10.bumpCounter("try_publish_ws"));
                b("promiseDone")(g, function () {
                    f.$10.eventLogOutgoingPublish({
                        sessionID: f.$9.getSessionId(),
                        topic: a,
                        qos: d,
                        payloadSizeBytes: c.length * 2,
                        success: !0,
                        protocol: h,
                        errorMessage: null,
                        connectionState: j,
                        startTime: k
                    })
                }, function (b) {
                    f.$10.eventLogOutgoingPublish({
                        sessionID: f.$9.getSessionId(),
                        topic: a,
                        qos: d,
                        payloadSizeBytes: c.length * 2,
                        success: !1,
                        protocol: h,
                        errorMessage: b.toString(),
                        connectionState: j,
                        startTime: k
                    })
                });
                return g
            }
            ;
            c.subscribe = function (a, b) {
                var c = this;
                this.$9.subscribe(a);
                var d = this.$8.get(a);
                !d ? (d = [b],
                    this.$8.set(a, d)) : d.push(b);
                return function () {
                    var d = c.$8.get(a) || [];
                    d = d.filter(function (a) {
                        return a !== b
                    });
                    c.$8.set(a, d);
                    d.length === 0 && c.unsubscribeAll(a)
                }
            }
            ;
            c.subscribeChannelEvents = function (a) {
                this.$3.push(a)
            }
            ;
            c.unsubscribeChannelEvents = function (a) {
                a = this.$3.indexOf(a);
                a > -1 && this.$3.splice(a, 1)
            }
            ;
            c.registerExtraConnectPayloadProvider = function (a) {
                var b = this;
                this.$18("MqttChannel", "registerExtraConnectPayloadProvider called");
                this.$4.add(a);
                if (this.$9.isRunning()) {
                    a = a.getPublishMessages();
                    a.forEach(function (a) {
                        b.publish(a.topic, a.payload, {
                            qos: a.qos,
                            skipBuffer: !0
                        })
                    })
                }
            }
            ;
            c.unregisterExtraConnectPayloadProvider = function (a) {
                this.$4["delete"](a)
            }
            ;
            c.unsubscribeAll = function (a) {
                this.$9.unsubscribe(a),
                    this.$8["delete"](a)
            }
            ;
            c.getConnectionState = function () {
                return this.$5
            }
            ;
            c.getLongPollingStatus = function () {
                return this.$7
            }
            ;
            c.getEndpoint = function () {
                return this.$1
            }
            ;
            c.addHook = function (a) {
                this.$9.addHook(a)
            }
            ;
            c.removeHook = function (a) {
                this.$9.removeHook(a)
            }
            ;
            c.testOnlyMessageReceived = function (a, b) {
                this.$21(a, b, -1)
            }
            ;
            c.$30 = function (a) {
                var b = this.$14.get(a);
                b != null && b.timeoutId != null && g.clearTimeout(b.timeoutId);
                this.$14["delete"](a)
            }
            ;
            c.$27 = function (a) {
                var b = this;
                a = g.setTimeout(function (a) {
                    var c = b.$14.get(a);
                    if (!c)
                        return;
                    var d = c.topic;
                    b.$10.bumpCounter("publish_timeout." + d);
                    b.$10.debugTrace("publish_timeout", "Timeout publishing topic: " + d + " publishToken: " + a);
                    b.$10.eventLogPublishTimeout({
                        topic: d
                    });
                    b.$30(a);
                    c.ack.reject(new Error("Publish Timed Out"))
                }, j, a);
                return a
            }
            ;
            c.$29 = function (a) {
                var b = a.publishToken
                    , c = this.$14.get(b);
                if (!c)
                    return;
                this.$30(b);
                a.ack.resolve();
                this.$10.debugTrace("publish_success", "Topic: " + a.topic + " publishToken: " + a.publishToken);
                this.$10.bumpCounter("publish_success." + a.topic)
            }
            ;
            c.$21 = function (a, b, c) {
                var d = this.$8.get(a);
                this.$10.eventLogIncomingPublish({
                    sessionID: this.$9.getSessionId(),
                    topic: a,
                    connectionState: this.getConnectionState(),
                    qos: c,
                    payloadSizeBytes: b.length * 2
                });
                if (!d)
                    this.$10.debugTrace("_onMessageReceived", a + " being dropped, no listeners");
                else
                    for (var c = d, a = Array.isArray(c), d = 0, c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                        var e;
                        if (a) {
                            if (d >= c.length)
                                break;
                            e = c[d++]
                        } else {
                            d = c.next();
                            if (d.done)
                                break;
                            e = d.value
                        }
                        e = e;
                        try {
                            e(b)
                        } catch (a) {
                            this.$10.logError(a, "Listener exception"),
                                this.$10.bumpCounter("listener_error")
                        }
                    }
            }
            ;
            c.$20 = function (a) {
                if (g.genGk(h.mqtt_ws_polling_enabled)) {
                    a.isRecoverable ? this.$10.bumpCounter("recoverable_error_skipped") : this.$10.bumpCounter("unrecoverable_error_skipped");
                    return
                }
                a.isRecoverable ? this.$10.bumpCounter("recoverable_error_not_skipped") : this.$10.bumpCounter("unrecoverable_error_not_skipped");
                this.$31(a)
            }
            ;
            c.$32 = function (a) {
                this.$31(a)
            }
            ;
            c.$31 = function (a) {
                for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var e;
                    if (c) {
                        if (d >= b.length)
                            break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    e.onJSError && e.onJSError(a)
                }
            }
            ;
            c.$33 = function () {
                var a = this;
                this.$13.forEach(function (b) {
                    a.$26(b)
                });
                this.$13 = [];
                this.$14.forEach(function (b, c, d) {
                    a.$28(b)
                })
            }
            ;
            c.$19 = function (a) {
                a === "Connecting" ? (this.$13.forEach(function (a) {
                    a.ack.reject(new Error("Client Reconnecting"))
                }),
                    this.$13 = []) : a === "TransportConnected" && this.$33(),
                    this.$18("_changeState", "Connection state = " + a),
                    this.$34(a, this.$7)
            }
            ;
            c.$35 = function (a, b) {
                this.$12 && this.$12.canPublish() && this.$33(),
                    this.$18("_changeLPStatus", "LP status = " + a + ", LP Request status = " + b),
                    this.$34(this.$6, a)
            }
            ;
            c.$34 = function (a, b) {
                var c = this.$9.mqttStateFromConnectionState(a);
                this.$12 && this.$12.canPublish() && (c = "Connected");
                this.$6 = a;
                (c !== this.$5 || b != this.$7) && (this.$5 = c,
                    this.$7 = b,
                    this.$36(c))
            }
            ;
            c.$36 = function (a) {
                for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var e;
                    if (c) {
                        if (d >= b.length)
                            break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    e.onMQTTStateChanged(a)
                }
            }
            ;
            c.$22 = function () {
                var a = this
                    , b = [];
                this.$4.forEach(function (c) {
                    try {
                        c = c.getPublishMessages();
                        Array.prototype.push.apply(b, c)
                    } catch (b) {
                        a.$10.logError(b, "ConnectPayload provider exception"),
                            a.$10.bumpCounter("connectPayloadProvider_error")
                    }
                });
                return b
            }
            ;
            c.$17 = function () {
                var a = this;
                g.genGk(h.mqtt_ws_polling_enabled) && this.$2 && this.$2 != "" && b("requireDeferred")("MqttLongPollingRunner").onReady(function (b) {
                    b = new b(a.$2, a.$11, a.$9.hasFatal(), a.$9.hasConnectSuccess(), function (b, c, d) {
                            return a.$21(b, c, d)
                        }
                        , function () {
                            return Array.from(a.$8.keys())
                        }
                        , function () {
                            return a.$22()
                        }
                        , function (b) {
                            a.$32(b)
                        }
                        , function (b, c) {
                            a.$35(b, c)
                        }
                    );
                    b.start();
                    a.$9.addHook(b);
                    b.addHook(a.$15);
                    a.$12 = b;
                    a.$10.debugTrace("MqttChannel", "longPollingRunner loaded")
                })
            }
            ;
            c.$18 = function (a, b) {
                this.$10.debugTrace(a, "Mqtt channel: " + b)
            }
            ;
            c.setForegroundState = function (a) {
                this.$11 && this.$11.setForegroundState(a)
            }
            ;
            c.setChatVisibility = function (a) {
                this.$11 && this.$11.setChatVisibility(a)
            }
            ;
            c.getEndpointCapabilities = function () {
                return this.$11.getEndpointCapabilities()
            }
            ;
            c.setEndpointCapabilities = function (a) {
                this.$11.setEndpointCapabilities(a)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("FantailLogger", ["FantailConfig"], (function (a, b, c, d, e, f) {
        var g = b("FantailConfig").FantailLogQueue;
        a = {
            debug: function (a, b) {
                var c;
                for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                    e[f - 2] = arguments[f];
                g && (c = g.get(a)).debug.apply(c, [b].concat(e))
            },
            info: function (a, b) {
                var c;
                for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                    e[f - 2] = arguments[f];
                g && (c = g.get(a)).info.apply(c, [b].concat(e))
            },
            warn: function (a, b) {
                var c;
                for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                    e[f - 2] = arguments[f];
                g && (c = g.get(a)).warn.apply(c, [b].concat(e))
            },
            error: function (a, b) {
                var c;
                for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                    e[f - 2] = arguments[f];
                g && (c = g.get(a)).error.apply(c, [b].concat(e))
            }
        };
        e.exports = a
    }
), null);
__d("MqttUnifiedClientConnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f) {
        "use strict";
        a = b("getFalcoLogPolicy_DO_NOT_USE")("1744057");
        c = b("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
        e.exports = c
    }
), null);
__d("MqttUnifiedClientDisconnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f) {
        "use strict";
        a = b("getFalcoLogPolicy_DO_NOT_USE")("1744058");
        c = b("FalcoLoggerInternal").create("mqtt_unified_client_disconnect", a);
        e.exports = c
    }
), null);
__d("MqttUnifiedClientIncomingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f) {
        "use strict";
        a = b("getFalcoLogPolicy_DO_NOT_USE")("1744059");
        c = b("FalcoLoggerInternal").create("mqtt_unified_client_incoming_publish", a);
        e.exports = c
    }
), null);
__d("MqttUnifiedClientOutgoingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f) {
        "use strict";
        a = b("getFalcoLogPolicy_DO_NOT_USE")("1744060");
        c = b("FalcoLoggerInternal").create("mqtt_unified_client_outgoing_publish", a);
        e.exports = c
    }
), null);
__d("MqttWsClientTypedLoggerLite", ["generateLiteTypedLogger"], (function (a, b, c, d, e, f) {
        "use strict";
        e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig")
    }
), null);
__d("MqttLogger", ["BanzaiODS", "ChannelClientID", "FantailLogger", "FBLogger", "Log", "LogHistory", "MqttEnv", "MqttUnifiedClientConnectFalcoEvent", "MqttUnifiedClientDisconnectFalcoEvent", "MqttUnifiedClientIncomingPublishFalcoEvent", "MqttUnifiedClientOutgoingPublishFalcoEvent", "MqttUtils", "MqttWsClientTypedLoggerLite", "Random", "gkx"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = b("MqttWsClientTypedLoggerLite").log
            , i = b("Random").coinflip
            , j = "mqtt_client"
            , k = 100
            , l = 5e3
            , m = null
            , n = {
            CONNECT: "mqtt_client_connect",
            DISCONNECT: "mqtt_client_disconnect",
            PUBLISH: "mqtt_client_publish",
            CLIENT_ERROR: "mqtt_client_error",
            PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
            SOCKET_DISCONNECT: "mqtt_protocol_error"
        }
            , o = {
            CONNECT: "connect",
            DISCONNECT: "disconnect",
            OUTGOING_PUBLISH: "outgoing_publish",
            INCOMING_PUBLISH: "incoming_publish"
        };
        a = function () {
            a.getInstance = function () {
                m || (m = new a());
                return m
            }
            ;

            function a() {
                this.$1 = b("LogHistory").getInstance(j),
                    this.$2 = 0,
                    this.$3 = b("gkx")("778292"),
                    this.$4 = Date.now(),
                    this.$5 = b("ChannelClientID").getID()
            }

            var c = a.prototype;
            c.setAppId = function (a) {
                this.$2 === 0 && (this.$2 = a)
            }
            ;
            c.eventLogConnect = function (a) {
                var c = a.sessionID
                    , d = a.connectionStatus
                    , e = a.connectionState
                    , f = a.ackReceived
                    , h = a.duration
                    , i = a.hostname
                    , j = a.attemptNumber;
                a.failTotal;
                a.successTotal;
                var k = a.subscribedTopics
                    , l = a.publishes
                    , m = a.errorCode;
                a = a.errorMessage;
                var p = d ? "success" : "failed";
                this.bumpCounter(n.CONNECT + "." + p);
                p = {
                    device_id: this.$5,
                    session_id: c,
                    logged_in: g.isUserLoggedInNow(),
                    href: window.location.hostname,
                    connection_status: d,
                    duration: h,
                    hostname: i,
                    feature_availability: b("MqttUtils").getWSAvailability(),
                    attempt_number: j,
                    subscribed_topics: k,
                    publishes: l,
                    error_code: m,
                    error_message: a
                };
                var q = {
                    event_type: o.CONNECT,
                    acked: f,
                    connection_state: e,
                    client_type: "WEBSOCKET",
                    duration: h,
                    error: a,
                    session_id: c
                };
                this.$6(n.CONNECT, p);
                this.$7(function () {
                    b("MqttUnifiedClientConnectFalcoEvent").log(function () {
                        return q
                    })
                })
            }
            ;
            c.eventLogPull = function (a) {
                var b = a.pullEventName
                    , c = a.sessionID
                    , d = a.status
                    , e = a.duration
                    , f = a.hostname;
                a = a.errorMessage;
                c = {
                    device_id: this.$5,
                    session_id: c,
                    logged_in: g.isUserLoggedInNow(),
                    href: window.location.hostname,
                    connection_status: d,
                    duration: e,
                    hostname: f,
                    error_message: a
                };
                this.$6(b, c)
            }
            ;
            c.eventLogPullFinish = function (a) {
                var b = a.pullEventName
                    , c = a.sessionID
                    , d = a.duration
                    , e = a.errorMessage
                    , f = a.publishReceived;
                a = a.publishSent;
                c = {
                    device_id: this.$5,
                    session_id: c,
                    logged_in: g.isUserLoggedInNow(),
                    href: window.location.hostname,
                    duration: d,
                    error_message: e,
                    publish_received: f,
                    publish_sent: a
                };
                this.$6(b, c)
            }
            ;
            c.eventLogDisconnect = function (a) {
                var c = a.sessionID
                    , d = a.errorCode
                    , e = a.errorMessage;
                a = a.duration;
                this.bumpCounter(n.DISCONNECT);
                d = {
                    device_id: this.$5,
                    session_id: c,
                    href: window.location.hostname,
                    duration: a,
                    error_code: d,
                    error_message: e
                };
                var f = {
                    event_type: o.DISCONNECT,
                    connection_state: "Disconnected",
                    client_type: "WEBSOCKET",
                    duration: a,
                    error: e,
                    session_id: c
                };
                this.$6(n.DISCONNECT, d);
                this.$7(function () {
                    b("MqttUnifiedClientDisconnectFalcoEvent").log(function () {
                        return f
                    })
                })
            }
            ;
            c.eventLogOutgoingPublish = function (a) {
                var c = a.sessionID
                    , d = a.topic
                    , e = a.qos
                    , f = a.payloadSizeBytes
                    , g = a.success
                    , h = a.protocol
                    , j = a.errorMessage
                    , k = a.connectionState;
                a = a.startTime;
                this.bumpCounter(n.PUBLISH + "." + d);
                h = {
                    device_id: this.$5,
                    href: window.location.hostname,
                    topic: d,
                    qos: e,
                    payload_size_bytes: f,
                    success: g ? 1 : 0,
                    protocol: h,
                    error_message: j
                };
                var m = {
                    event_type: o.OUTGOING_PUBLISH,
                    session_id: c,
                    topic: d,
                    client_type: "WEBSOCKET",
                    connection_state: k,
                    qos: e,
                    acked: e == 1 ? g : null,
                    duration: Date.now() - a,
                    error: j,
                    payload_size: f
                };
                i(l) && this.$6(n.PUBLISH, h, l);
                this.$7(function () {
                    b("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function () {
                        return m
                    })
                })
            }
            ;
            c.eventLogIncomingPublish = function (a) {
                var c = a.sessionID
                    , d = a.topic
                    , e = a.connectionState
                    , f = a.qos;
                a = a.payloadSizeBytes;
                var g = {
                    event_type: o.INCOMING_PUBLISH,
                    session_id: c,
                    topic: d,
                    client_type: "WEBSOCKET",
                    connection_state: e,
                    qos: f,
                    payload_size: a
                };
                c = d == "/webrtc" || d == "/rtc_multi";
                this.$8(function () {
                    b("MqttUnifiedClientIncomingPublishFalcoEvent").log(function () {
                        return g
                    })
                }, 20, c)
            }
            ;
            c.logError = function (a, c) {
                var d = this;
                g.scheduleLoggingCallback(function () {
                    try {
                        b("FBLogger")(j).catching(a).mustfix(c),
                            d.$9(b("FantailLogger").error, c)
                    } catch (a) {
                    }
                })
            }
            ;
            c.eventLogPublishTimeout = function (a) {
                a = a.topic;
                a = {
                    device_id: this.$5,
                    href: window.location.hostname,
                    topic: a
                };
                this.$6(n.PUBLISH_TIMEOUT, a)
            }
            ;
            c.eventLogMiscellaneousError = function (a) {
                a = a.errorMessage;
                a = {
                    device_id: this.$5,
                    logged_in: g.isUserLoggedInNow(),
                    href: window.location.hostname,
                    error_message: a,
                    time_passed: Date.now() - this.$4
                };
                this.$6(n.CLIENT_ERROR, a)
            }
            ;
            c.logIfLoggedOut = function () {
                if (!b("gkx")("1186990") || g.isUserLoggedInNow())
                    return;
                var a = {
                    logged_in: g.isUserLoggedInNow(),
                    href: window.location.href,
                    error_message: "Not logged in",
                    time_passed: Date.now() - this.$4
                };
                this.$6(n.CLIENT_ERROR, a)
            }
            ;
            c.logErrorWarn = function (a, c) {
                var d = this;
                g.scheduleLoggingCallback(function () {
                    try {
                        b("FBLogger")(j).catching(a).warn(c),
                            d.$9(b("FantailLogger").warn, c)
                    } catch (a) {
                    }
                })
            }
            ;
            c.logWarn = function (a, c) {
                var d = this;
                g.scheduleLoggingCallback(function () {
                    try {
                        d.$1.warn(a, c),
                            d.$9(b("FantailLogger").warn, c)
                    } catch (a) {
                    }
                })
            }
            ;
            c.debugTrace = function (a, c) {
                var d = this;
                g.scheduleLoggingCallback(function () {
                    try {
                        d.$1.debug(a, c),
                            d.$9(b("FantailLogger").debug, c)
                    } catch (a) {
                    }
                })
            }
            ;
            c.bumpCounter = function (a) {
                var c = this;
                if (!i(k))
                    return;
                g.scheduleLoggingCallback(function () {
                    c.$2 !== 0 && b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", c.$2 + "." + a, k),
                        b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", a, k)
                })
            }
            ;
            c.$6 = function (a, c, d) {
                var e = this;
                g.scheduleLoggingCallback(function () {
                    c.event_type = a;
                    c.app_id = e.$2;
                    c.online = e.$10();
                    var f = JSON.stringify(c);
                    e.$1.log(a, f, {
                        weight: d
                    });
                    a !== n.DISCONNECT && h(c);
                    e.$9(b("FantailLogger").info, f)
                })
            }
            ;
            c.$8 = function (a, c, d) {
                c !== 0 ? d = b("gkx")("1272991") && (d == !0 || i(c)) : d = b("gkx")("1272991");
                d && g.scheduleCallback(a)
            }
            ;
            c.$7 = function (a) {
                this.$8(a, 0, !1)
            }
            ;
            c.$9 = function (a, b) {
                g.scheduleLoggingCallback(function () {
                })
            }
            ;
            c.$10 = function () {
                return window.navigator && window.navigator.onLine !== void 0 ? window.navigator.onLine : !1
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttEnvInitializer", ["CurrentUser", "JSScheduler", "MqttEnv", "MqttLogger", "Random", "WebStorage", "clearTimeout", "gkx", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f) {
        "use strict";
        var g, h = b("MqttEnv").MqttGkNames, i = b("MqttEnv").Env, j = "mqtt:", k = {
            genGk: function (a) {
                switch (a) {
                    case h.mqtt_waterfall_log_client_sampling:
                        return b("gkx")("832242");
                    case h.mqtt_ws_polling_enabled:
                        return !0;
                    case h.mqtt_lp_use_fetch:
                        return b("gkx")("945829");
                    case h.mqtt_fast_lp:
                        return b("gkx")("1001007");
                    case h.mqtt_lp_no_delay:
                        return b("gkx")("1066746");
                    case h.mqtt_enable_publish_over_polling:
                        return b("gkx")("968609");
                    default:
                        b("MqttLogger").getInstance().logError(new Error("unknown gk"), "Unknown GK value " + a);
                        return !1
                }
            },
            useJSScheduler: function (a) {
                return b("gkx")("987139") ? a : null
            },
            initialize: function () {
                i.initialize(b("Random").random, b("CurrentUser").isLoggedInNow, b("clearTimeout"), b("setTimeoutAcrossTransitions"), function () {
                    return b("MqttLogger").getInstance()
                }, k.genGk, null, k.useJSScheduler(b("JSScheduler").scheduleNormalPriCallback), k.useJSScheduler(b("JSScheduler").scheduleLoggingPriCallback), function (a, c) {
                    var d = (g || (g = b("WebStorage"))).getLocalStorage();
                    if (d) {
                        d = d.getItem(j + a);
                        if (d != null)
                            return d
                    }
                    return c
                }, function (a, c) {
                    var d = (g || (g = b("WebStorage"))).getLocalStorage();
                    d && (c == null ? d.removeItem(j + a) : d.setItem(j + a, c))
                })
            }
        };
        e.exports = k
    }
), null);
__d("FBMqttChannel", ["MqttChannel", "MqttEnvInitializer", "MqttWebConfig"], (function (a, b, c, d, e, f) {
        "use strict";
        b("MqttEnvInitializer").initialize();
        e.exports = new (b("MqttChannel"))({
            endpoint: (a = b("MqttWebConfig")).endpoint,
            pollingEndpoint: a.pollingEndpoint,
            userFbid: a.fbid,
            appId: a.appID,
            initialSubscribedTopics: a.subscribedTopics,
            capabilities: a.capabilities,
            clientCapabilities: a.clientCapabilities,
            chatVisibility: a.chatVisibility
        })
    }
), null);
__d("BladeRunnerSocket", ["Promise", "BladeRunnerEventHandler", "BladeRunnerLogger", "BladeRunnerTypes", "BladeRunnerTypesInternal", "CurrentUser", "FBMqttChannel", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "uuid"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = "Connected"
            , h = "Disconnected"
            , i = 511 * 1024
            , j = "/br_sr"
            , k = "/sr_res"
            , l = null;
        a = function () {
            function a(a) {
                this.$1 = [],
                    this.$2 = 0,
                    this.$3 = 0,
                    this.$4 = null,
                    this.$5 = 0,
                    this.$6 = new Map(),
                    this.$7 = a != null ? a : b("FBMqttChannel"),
                    this.$8 = new Map(),
                    b("BladeRunnerLogger").setClientSessionId(b("uuid")()),
                    this.$9()
            }

            a.get = function () {
                l == null && (l = new a(b("FBMqttChannel")));
                return l
            }
            ;
            var c = a.prototype;
            c.sendNewStreamRequest = function (c, d) {
                d = new (b("BladeRunnerEventHandler"))(c, d, this);
                var e = c.getRequest();
                this.$6.set(e.streamId, d);
                if (!this.$10()) {
                    this.$11(d, e.streamId);
                    return
                }
                this.getStreamCount() <= a.maxStreamCount ? this.$12(e) : (b("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"),
                    b("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: " + JSON.stringify(c.getRequest().getHeaders())),
                    this.$11(d, e.streamId))
            }
            ;
            c.sendRetryStreamRequest = function (a) {
                this.$12(a.getRequest())
            }
            ;
            c.sendCancel = function (a) {
                b("BladeRunnerLogger").bumpCounter("socket_send_cancel");
                var c = new (b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
                c.streamId = a;
                c.status = b("BladeRunnerTypes").StreamStatus.CLOSED;
                this.$13(c);
                this.removeStream(a)
            }
            ;
            c.sendAmendment = function (a, c, d) {
                b("BladeRunnerLogger").bumpCounter("socket_send_amendment");
                var e = new (b("BladeRunnerTypesInternal").GatewayStreamData)();
                e.streamId = a;
                e.setData(c);
                d != null && (e.instrumentationData = d);
                this.$14(e)
            }
            ;
            c.sendAmendmentWithAck = function (a, c, d) {
                var e = this;
                b("BladeRunnerLogger").bumpCounter("socket_send_amendment");
                var f = this.$15()
                    , g = new (b("BladeRunnerTypesInternal").GatewayStreamData)();
                g.streamId = a;
                g.setData(c);
                g.shouldAck = !0;
                g.dataId = f;
                d != null && (g.instrumentationData = d);
                a = new (b("Promise"))(function (a, b) {
                        e.$8.set(f, {
                            resolve: a,
                            reject: b
                        })
                    }
                );
                this.$14(g);
                return a
            }
            ;
            c.$14 = function (a) {
                this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)),
                    this.$16()
            }
            ;
            c.sendDataAcks = function (a) {
                b("BladeRunnerLogger").bumpCounter("socket_send_data_ack", a.length),
                    this.$17(a)
            }
            ;
            c.removeStream = function (a) {
                this.$6["delete"](a)
            }
            ;
            c.getStreamCount = function () {
                return this.$6.size
            }
            ;
            c.getNextStreamId = function () {
                this.$5++;
                return this.$5
            }
            ;
            c.onMQTTStateChanged = function (a) {
                this.$16();
                if (a != h && a != g || this.$4 == a)
                    return;
                this.$4 = a;
                b("BladeRunnerLogger").info("MQTTStateChanged: " + a);
                a == h ? (b("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),
                    this.$18()) : a == g && b("BladeRunnerLogger").bumpCounter("mqtt_state_connected")
            }
            ;
            c.$12 = function (a) {
                b("BladeRunnerLogger").bumpCounter("socket_send_request"),
                    this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)),
                this.$16() || b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, b("RequestStreamE2EClientLoggerEvent").FAILURE, a.getInstrumentationData(), a.getHeaders().method, {
                    reason: "MQTT Not Connected"
                })
            }
            ;
            c.$13 = function (a) {
                this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)),
                    this.$16()
            }
            ;
            c.$17 = function (a) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(d))
                }
                this.$16()
            }
            ;
            c.$19 = function () {
                this.$2++;
                return this.$2
            }
            ;
            c.$15 = function () {
                this.$3++;
                return this.$3
            }
            ;
            c.$16 = function () {
                if (this.$7.getConnectionState() === g && this.$1.length > 0) {
                    try {
                        this.$20(this.$1)
                    } finally {
                        this.$1 = []
                    }
                    return !0
                }
                return !1
            }
            ;
            c.$20 = function (a) {
                var c = this
                    , d = new (b("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$19(), a)
                    , e = d.write();
                if (e.length > i) {
                    var f = Math.floor(a.length / 2);
                    if (f === 0) {
                        var g = new Error("Publish is too long: " + e.length);
                        a.forEach(function (a) {
                            return b("BladeRunnerLogger").logFrameFailure(a, "too long")
                        });
                        this.$21(d, g, "Publish is too long");
                        throw g
                    }
                    this.$20(a.slice(0, f));
                    this.$20(a.slice(f, a.length))
                } else
                    try {
                        b("BladeRunnerLogger").info("send message to " + j + " (" + e.length + " bytes)");
                        g = {
                            qos: 1,
                            skipBuffer: !1
                        };
                        if (d.isInstrumented()) {
                            var h = Date.now();
                            g.listener = {
                                onEvent: function (c) {
                                    var d = (Date.now() - h).toString();
                                    for (var e = 0; e < a.length; e++) {
                                        var f = a[e];
                                        b("BladeRunnerLogger").logFrameWithMQTTEvent(f, c, {
                                            latency: d
                                        })
                                    }
                                }
                            }
                        }
                        this.$7.publish(j, e, g)["catch"](function (a) {
                            c.$21(d, a, "Failed publishing to MQTT")
                        });
                        b("BladeRunnerLogger").bumpCounter("mqtt_publish_success")
                    } catch (a) {
                        this.$21(d, a, "Failed publishing to MQTT");
                        throw a
                    }
            }
            ;
            c.$9 = function () {
                var a = this;
                b("BladeRunnerLogger").info("Starting socket with endpoint " + this.$7.getEndpoint() + " useragent " + navigator.userAgent);
                this.onMQTTStateChanged(this.$7.getConnectionState());
                this.$7.subscribeChannelEvents({
                    onMQTTStateChanged: function (b) {
                        a.onMQTTStateChanged(b)
                    },
                    onJSError: function (a) {
                        var c = a != null && typeof a.isRecoverable === "boolean" ? a.isRecoverable : !1;
                        c ? b("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error") : (b("BladeRunnerLogger").warn("JS error in MQTTChannel: " + (typeof a == "object" && a != null ? a.toString() : "unknown error") + ", " + JSON.stringify(a)),
                            b("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))
                    }
                });
                this.$7.subscribe(j, function (a) {
                    throw new Error("Unexpected response: " + j + " " + a.toString())
                });
                this.$7.subscribe(k, function (b) {
                    a.$22(b)
                })
            }
            ;
            c.$22 = function (a) {
                a = b("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);
                this.processBatch(a)
            }
            ;
            c.$21 = function (a, c, d) {
                for (var a = a.getFrames(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var g;
                    if (e) {
                        if (f >= a.length)
                            break;
                        g = a[f++]
                    } else {
                        f = a.next();
                        if (f.done)
                            break;
                        g = f.value
                    }
                    g = g;
                    if (g.type === b("BladeRunnerTypes").StreamFrameType.REQUEST) {
                        var h = g.getRequest()
                            , i = this.$6.get(h.streamId);
                        i != null && this.$23(i, h.streamId, b("BladeRunnerTypes").StreamStatus.CLOSED, !0, null)
                    } else if (g.type === b("BladeRunnerTypes").StreamFrameType.DATA) {
                        i = g.getData();
                        h = i.dataId;
                        if (i.shouldAck != null && i.shouldAck && h != null) {
                            g = new (b("BladeRunnerTypesInternal").GatewayStreamDataAck)();
                            g.streamId = i.streamId;
                            g.dataId = h;
                            g.success = !1;
                            g.code = b("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;
                            g.message = d;
                            this.$24(g)
                        }
                    }
                }
                b("BladeRunnerLogger").info("Failed publishing to MQTT: " + c.message);
                b("BladeRunnerLogger").bumpCounter("mqtt_publish_error")
            }
            ;
            c.$24 = function (a) {
                var c = this.$8.get(a.dataId);
                c != null && (this.$8["delete"](a.dataId),
                    a.success ? c.resolve(!0) : a.code === b("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_LANDED_BUT_NOT_ACCEPTED ? c.resolve(!1) : c.reject(a.message))
            }
            ;
            c.processBatch = function (a) {
                try {
                    b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").RESPONSE, b("RequestStreamE2EClientLoggerEvent").RECEIVED, a.getInstrumentationData());
                    b("BladeRunnerLogger").bumpCounter("socket_process_batch");
                    var c = JSON.stringify(a);
                    b("BladeRunnerLogger").info("Received batch (" + c.length + " bytes)");
                    c = null;
                    for (var d = a.getFrames(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                        var g;
                        if (e) {
                            if (f >= d.length)
                                break;
                            g = d[f++]
                        } else {
                            f = d.next();
                            if (f.done)
                                break;
                            g = f.value
                        }
                        g = g;
                        var h = g.getStreamId();
                        c == null && (c = h);
                        if (h != null && c != h)
                            throw new Error("Received batch with frames for multiple streams");
                        g.type == b("BladeRunnerTypes").StreamFrameType.DATA_ACK && this.$24(g.getDataAck())
                    }
                    if (c != null) {
                        h = this.$6.get(c);
                        h != null ? h.onProxyResponse(a) : b("BladeRunnerLogger").info("Received batch with frames for unknown stream id: " + c)
                    } else
                        b("BladeRunnerLogger").info("Received batch with no frames")
                } catch (a) {
                    b("BladeRunnerLogger").exception(a, "Failed processing batch from MQTT");
                    b("BladeRunnerLogger").bumpCounter("socket_process_batch_error");
                    throw a
                }
            }
            ;
            c.$18 = function () {
                this.$6.forEach(function (a, b, c) {
                    a.onDisconnect()
                })
            }
            ;
            c.$11 = function (a, c) {
                this.$23(a, c, b("BladeRunnerTypes").StreamStatus.REJECTED, !1, 0)
            }
            ;
            c.$23 = function (a, c, d, e, f) {
                var g = new (b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
                g.streamId = c;
                g.status = d;
                g.shouldRetry = e;
                g.retryDelayMs = f;
                c = new (b("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(g)]);
                a.onProxyResponse(c)
            }
            ;
            c.$10 = function () {
                if (!b("CurrentUser").isLoggedIn()) {
                    b("BladeRunnerLogger").bumpCounter("request_stream_user_logged_out");
                    return !1
                }
                return !0
            }
            ;
            return a
        }();
        e.exports = a;
        a.maxStreamCount = 2e3
    }
), null);
__d("BladeRunnerStream", ["regeneratorRuntime"], (function (a, b, c, d, e, f) {
        a = function () {
            function a(a) {
                this.$1 = a
            }

            var c = a.prototype;
            c.getStreamHandler = function () {
                return this.$1
            }
            ;
            c.cancel = function () {
            }
            ;
            c.amendWithAck = function (a) {
                return b("regeneratorRuntime").async(function (a) {
                    while (1)
                        switch (a.prev = a.next) {
                            case 0:
                                return a.abrupt("return", !1);
                            case 1:
                            case "end":
                                return a.stop()
                        }
                }, null, this)
            }
            ;
            c.amendFireAndForget = function (a) {
            }
            ;
            c.isAlive = function () {
                return !1
            }
            ;
            c.canAmend = function () {
                return !1
            }
            ;
            c.getStatus = function () {
                return null
            }
            ;
            c.getStreamId = function () {
                return 0
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("BladeRunnerStreamState", ["BladeRunnerLogger", "BladeRunnerTypes", "BladeRunnerTypesInternal"], (function (a, b, c, d, e, f) {
        a = function () {
            function a(a) {
                this.$1 = a,
                    this.$2 = null,
                    this.$3 = 0,
                    this.$4 = !1,
                    this.$5 = 0,
                    this.$6 = !1
            }

            var c = a.prototype;
            c.getRequest = function () {
                return this.$1
            }
            ;
            c.isAlive = function () {
                return !(this.$2 == b("BladeRunnerTypes").StreamStatus.CLOSED || this.$2 == b("BladeRunnerTypes").StreamStatus.REJECTED)
            }
            ;
            c.canAmend = function () {
                return this.$2 == b("BladeRunnerTypes").StreamStatus.ACCEPTED || this.$2 == b("BladeRunnerTypes").StreamStatus.STARTED || this.$2 == b("BladeRunnerTypes").StreamStatus.PAUSED
            }
            ;
            c.getLastStatus = function () {
                return this.$2
            }
            ;
            c.setLastStatus = function (a) {
                this.$2 = a
            }
            ;
            c.onError = function () {
                this.$3 += 1
            }
            ;
            c.getErrorCount = function () {
                return this.$3
            }
            ;
            c.resetErrors = function () {
                this.$3 = 0
            }
            ;
            c.getRetryRequestScheduled = function () {
                return this.$6
            }
            ;
            c.setRetryRequestScheduled = function (a) {
                this.$6 = a
            }
            ;
            c.witnessFrame = function (a) {
                switch (a.type) {
                    case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                        var c = a.getStatusUpdate()
                            , d = !0;
                        switch (c.status) {
                            case b("BladeRunnerTypes").StreamStatus.ACCEPTED:
                                d = !this.$4;
                                this.$4 || (this.$4 = !0);
                                break;
                            case b("BladeRunnerTypes").StreamStatus.STARTED:
                                d = this.getLastStatus() != b("BladeRunnerTypes").StreamStatus.STARTED;
                                break;
                            case b("BladeRunnerTypes").StreamStatus.PAUSED:
                                d = this.getLastStatus() == b("BladeRunnerTypes").StreamStatus.STARTED;
                                break;
                            case b("BladeRunnerTypes").StreamStatus.CLOSED:
                            case b("BladeRunnerTypes").StreamStatus.REJECTED:
                            default:
                                d = !0
                        }
                        this.setLastStatus(c.status);
                        return d;
                    case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
                        this.$7(a.getRewriteRequest());
                        return !1;
                    default:
                        return !0
                }
            }
            ;
            c.setRetriesAllowed = function (a) {
                this.$5 = a
            }
            ;
            c.getRetriesAllowed = function () {
                return this.$5
            }
            ;
            c.$7 = function (a) {
                if (!(a.temporary != null || a.temporary == !0)) {
                    a.newBody != null && (this.$1.payload = a.newBody);
                    a.newExtraHeader != null && (this.$1.extraHeader = a.newExtraHeader,
                        this.$1.headers = JSON.parse(a.newExtraHeader));
                    if (a.patchExtraHeader != null)
                        try {
                            var c = JSON.parse(a.patchExtraHeader)
                                , d = this.$1.extraHeader != null ? JSON.parse(this.$1.extraHeader) : {};
                            this.$1.headers == null && (this.$1.headers = {});
                            var e = Object.keys(c);
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f];
                                this.$1.headers[g] = c[g];
                                d[g] = c[g]
                            }
                            this.$1.extraHeader = JSON.stringify(d)
                        } catch (c) {
                            b("BladeRunnerLogger").warn("Failed to patch header: " + a.patchExtraHeader)
                        }
                    a.killBody != null && a.killBody == !0 && (this.$1.payload = null)
                }
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("BladeRunnerSocketStream", ["regeneratorRuntime", "Promise", "BladeRunnerLogger", "BladeRunnerStream", "BladeRunnerStreamState", "BladeRunnerTypes", "BladeRunnerTypesInternal", "RequestStreamE2EClientLoggerEvent", "RequestStreamE2EClientLoggerMessageType", "uuid"], (function (a, b, c, d, e, f) {
        var g = 4
            , h = {
            reason: "stream_dead"
        };
        a = function (a) {
            babelHelpers.inheritsLoose(c, a);

            function c(c, d, e, f) {
                c = a.call(this, c) || this;
                c.$BladeRunnerSocketStream1 = e;
                c.$BladeRunnerSocketStream2 = new (b("BladeRunnerStreamState"))(d);
                c.$BladeRunnerSocketStream2.setRetriesAllowed(g);
                c.$BladeRunnerSocketStream3 = f;
                return c
            }

            var d = c.prototype;
            d.send = function () {
                var a = this.$BladeRunnerSocketStream2.getRequest();
                b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM, b("RequestStreamE2EClientLoggerEvent").RECEIVED, a.getInstrumentationData(), a.getHeaders().method, this.$BladeRunnerSocketStream3 ? {
                    clientForced: "true"
                } : null);
                this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2, this.getStreamHandler())
            }
            ;
            d.amendWithAck = function (a) {
                var c, d;
                return b("regeneratorRuntime").async(function (e) {
                    while (1)
                        switch (e.prev = e.next) {
                            case 0:
                                c = this.$BladeRunnerSocketStream2.getRequest();
                                d = c.getInstrumentationData();
                                d && (d.auxId = b("uuid")(),
                                    b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").AMENDMENT, b("RequestStreamE2EClientLoggerEvent").RECEIVED, d));
                                if (!this.canAmend()) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", this.$BladeRunnerSocketStream1.sendAmendmentWithAck(c.streamId, a, d == null ? null : JSON.stringify(d)));
                            case 5:
                                b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").AMENDMENT, b("RequestStreamE2EClientLoggerEvent").FAILURE, d, null, h);
                                return e.abrupt("return", b("Promise").reject("Stream is closed or not accepted"));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                }, null, this)
            }
            ;
            d.amendFireAndForget = function (a) {
                var c = this.$BladeRunnerSocketStream2.getRequest();
                c = c.getInstrumentationData();
                c && (c.auxId = b("uuid")(),
                    b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").AMENDMENT, b("RequestStreamE2EClientLoggerEvent").RECEIVED, c));
                if (this.canAmend())
                    this.$BladeRunnerSocketStream1.sendAmendment(this.$BladeRunnerSocketStream2.getRequest().streamId, a, c == null ? null : JSON.stringify(c));
                else {
                    b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").AMENDMENT, b("RequestStreamE2EClientLoggerEvent").FAILURE, c, null, h);
                    throw new Error("Stream is closed or not accepted")
                }
            }
            ;
            d.cancel = function () {
                b("BladeRunnerLogger").logE2EEvent(b("RequestStreamE2EClientLoggerMessageType").CANCEL, b("RequestStreamE2EClientLoggerEvent").RECEIVED, this.$BladeRunnerSocketStream2.getRequest().getInstrumentationData()),
                this.isAlive() && (this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest().streamId),
                    this.$BladeRunnerSocketStream2.setLastStatus(b("BladeRunnerTypes").StreamStatus.CLOSED),
                    this.getStreamHandler().onClientCancel())
            }
            ;
            d.isAlive = function () {
                return this.$BladeRunnerSocketStream2.isAlive()
            }
            ;
            d.canAmend = function () {
                return this.$BladeRunnerSocketStream2.canAmend()
            }
            ;
            d.getStatus = function () {
                return this.$BladeRunnerSocketStream2.getLastStatus()
            }
            ;
            d.getStreamId = function () {
                return this.$BladeRunnerSocketStream2.getRequest().streamId
            }
            ;
            return c
        }(b("BladeRunnerStream"));
        e.exports = a
    }
), null);
__d("PulsarClient", ["BladeRunnerDeferredClient", "BladeRunnerLogger", "BladeRunnerStreamHandler", "BladeRunnerTypes", "DGWRequestStreamClient", "Random", "RequestStreamCommonRequestStreamCommonTypes", "RequestStreamHandler", "TestStateMachine", "promiseDone", "qex", "uuid", "$InternalEnum"], (function (a, b, c, d, e, f) {
        var g = b("$InternalEnum").Mirrored(["WEB_BR_MQTT", "WEB_RS_MQTT", "WEB_RS_STARGATE"]);
        a = function () {
            function a() {
                var a;
                this.$1 = (a = b("qex")._("1814429")) != null ? a : "web_pulsar_qe";
                a = (a = b("qex")._("1814371")) != null ? a : "WEB_BR_MQTT";
                this.$2 = [];
                for (var a = a.split(","), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var e;
                    if (c) {
                        if (d >= a.length)
                            break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    switch (e) {
                        case "WEB_BR_MQTT":
                            this.$2.push(g.WEB_BR_MQTT);
                            break;
                        case "WEB_RS_MQTT":
                            this.$2.push(g.WEB_RS_MQTT);
                            break;
                        case "WEB_RS_STARGATE":
                            this.$2.push(g.WEB_RS_STARGATE);
                            break;
                        default:
                            b("BladeRunnerLogger").info("Pulsar test unknown transport");
                            break
                    }
                }
                this.$3 = (e = b("qex")._("1787520")) != null ? e : 0
            }

            var c = a.prototype;
            c.getBodyString = function (a) {
                a = {
                    number_of_payloads: a.numPayloadsExpected,
                    payload_size_in_bytes: a.payloadSize,
                    time_interval_in_seconds: a.payloadIntervalMs / 1e3,
                    test_name: a.testName,
                    time_span_mode: "fixed",
                    publish_mode: "direct"
                };
                return JSON.stringify({
                    input: a
                })
            }
            ;
            c.startSinglePulsarTest = function () {
                if (!b("Random").coinflip(this.$3))
                    return;
                var a = b("uuid")()
                    , c = a;
                for (var d = this.$2, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var h;
                    if (e) {
                        if (f >= d.length)
                            break;
                        h = d[f++]
                    } else {
                        f = d.next();
                        if (f.done)
                            break;
                        h = f.value
                    }
                    h = h;
                    var i = {
                        testName: this.$1,
                        transport: h,
                        numPayloadsExpected: 2,
                        payloadIntervalMs: 1e5,
                        payloadSize: 100,
                        timeoutIntervalMs: 1e4
                    };
                    h === g.WEB_BR_MQTT ? this.runMQTTTest(a, c, i) : this.runRSClientTest(h, a, c, i)
                }
            }
            ;
            c.runMQTTTest = function (a, c, d) {
                b("BladeRunnerLogger").info("Running MQTT pulsar test");
                var e = b("BladeRunnerDeferredClient")
                    , f = new (b("TestStateMachine"))(d, a, c)
                    , g = new (b("BladeRunnerStreamHandler"))(function (a) {
                        f.onPayloadReceived(a)
                    }
                    , null, function (a) {
                        switch (a) {
                            case b("BladeRunnerTypes").StreamStatus.ACCEPTED:
                                f.onFlowStatusAccepted();
                                break;
                            case b("BladeRunnerTypes").StreamStatus.STARTED:
                                f.onFlowStatusStarted();
                                f.onRequestLanded();
                                break;
                            case b("BladeRunnerTypes").StreamStatus.PAUSED:
                                f.onFlowStatusStopped();
                                break;
                            case b("BladeRunnerTypes").StreamStatus.REJECTED:
                                f.onTerminate("StreamUpdate: REJECTED");
                                break;
                            case b("BladeRunnerTypes").StreamStatus.CLOSED:
                                f.onTerminate("StreamUpdate: CLOSED");
                                break;
                            default:
                                b("BladeRunnerLogger").info("Pulsar Received statusUpdate unknown?")
                        }
                    }
                    , function (a) {
                        b("BladeRunnerLogger").info(" Pulsar Received log: " + a)
                    }
                    , function (a) {
                        b("BladeRunnerLogger").info("Pulsar Received batch: " + JSON.stringify(a))
                    }
                );
                f.onStart();
                e.requestStream({
                    method: "Pulsar",
                    test_id: a
                }, this.getBodyString(d), g, {
                    requestId: c,
                    forceLogContext: "pulsar"
                })
            }
            ;
            c.runRSClientTest = function (a, c, d, e) {
                b("BladeRunnerLogger").info("Running SG pulsar test");
                a = new (b("DGWRequestStreamClient").DGWRequestStreamClient)();
                var f = new (b("TestStateMachine"))(e, c, d)
                    , g = new (b("RequestStreamHandler"))(function (a) {
                        f.onPayloadReceived(a)
                    }
                    , function (a) {
                        f.onTerminate(a.message)
                    }
                    , function (a) {
                        b("BladeRunnerLogger").info(" Pulsar Received log: " + a)
                    }
                    , function (a) {
                        switch (a) {
                            case b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted:
                                f.onFlowStatusAccepted();
                                break;
                            case b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started:
                                f.onFlowStatusStarted();
                                f.onRequestLanded();
                                break;
                            case b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped:
                                f.onFlowStatusStopped();
                                break
                        }
                    }
                );
                f.onStart();
                b("promiseDone")(a.requestStream({
                    method: "Pulsar",
                    test_id: c
                }, this.getBodyString(e), g, {
                    requestId: d,
                    forceLogContext: "pulsar"
                }).then(function () {
                    b("BladeRunnerLogger").info("DGW create stream successfully")
                })["catch"](function (a) {
                    b("BladeRunnerLogger").info("DGW failed to create stream, with exception msg: " + a.message)
                }))
            }
            ;
            return a
        }();
        c = new a();
        e.exports = c
    }
), null);
__d("BladeRunnerClient", ["Base64", "BladeRunnerConfig", "BladeRunnerLogger", "BladeRunnerSocket", "BladeRunnerSocketStream", "BladeRunnerTypes", "BladeRunnerTypesInternal", "Random", "requireCond", "uuid", "cr:1817887"], (function (a, b, c, d, e, f) {
        a = function () {
            function a(a) {
                this.$1 = a != null ? a : b("BladeRunnerSocket").get()
            }

            var c = a.prototype;
            c.requestStream = function (a, c, d, e) {
                e === void 0 && (e = {});
                b("cr:1817887") != null && b("cr:1817887").startSinglePulsarTest();
                var f = new (b("BladeRunnerTypesInternal").GatewayStreamRequest)();
                f.streamId = this.$1.getNextStreamId();
                f.requestType = b("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;
                f.headers = b("BladeRunnerConfig").patchRequestHeaders(a);
                f.extraHeader = JSON.stringify(f.headers);
                f.payload = c != null ? b("Base64").encode(c) : null;
                a = e.requestId != null;
                c = !1;
                a || (c = this.$2(f, e));
                (a || c) && (f.instrumentationData = JSON.stringify(e));
                c = new (b("BladeRunnerSocketStream"))(d, f, this.$1, a);
                c.send();
                return c
            }
            ;
            c.logInfo = function (a) {
                b("BladeRunnerLogger").info(a)
            }
            ;
            c.bumpCounter = function (a) {
                b("BladeRunnerLogger").bumpCounter(a)
            }
            ;
            c.$2 = function (a, c) {
                if (c.requestId != null)
                    return !1;
                var d = a.getHeaders().method;
                d = b("BladeRunnerLogger").shouldLogE2E(d);
                a = a.getHeaders().requestId;
                d && (c.requestId = a != null ? a : b("uuid")());
                return d
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("CometFeedStoriesStrategyErrorsTypedLoggerLite", ["generateLiteTypedLogger"], (function (a, b, c, d, e, f) {
        "use strict";
        e.exports = b("generateLiteTypedLogger")("logger:CometFeedStoriesStrategyErrorsLoggerConfig")
    }
), null);
__d("FleetBeaconStates", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a(a) {
                this.$1 = a
            }

            var b = a.prototype;
            b.getName = function () {
                return "initial"
            }
            ;
            b.getFleetBeaconRunner = function () {
                return this.$1
            }
            ;
            b.prepareFleetBeaconSucceed = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.prepareFleetBeaconFailed = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.subscribeIssued = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.subscribeSuccessSignalReceived = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.publishIssued = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.publishFailed = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.payloadReceived = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.waitForPublishTimeout = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.subscribeTimeout = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.payloadTimeout = function () {
                throw new Error("Invalid transition")
            }
            ;
            b.cleanUpFinish = function () {
                throw new Error("Invalid transition")
            }
            ;
            return a
        }();
        f.FleetBeaconState = a;
        b = function (a) {
            babelHelpers.inheritsLoose(b, a);

            function b() {
                return a.apply(this, arguments) || this
            }

            var c = b.prototype;
            c.getName = function () {
                return "preparing"
            }
            ;
            c.prepareFleetBeaconSucceed = function () {
                var b = this;
                return {
                    newState: new g(a.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        a.prototype.getFleetBeaconRunner.call(b).runFleetBeaconTest()
                    }
                }
            }
            ;
            c.prepareFleetBeaconFailed = function () {
                var b = this;
                return {
                    newState: new m(a.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        b.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            }
            ;
            return b
        }(a);
        f.FleetBeaconPreparingState = b;
        var g = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "before_subscribe"
            }
            ;
            c.subscribeIssued = function () {
                var a = this;
                return {
                    newState: new h(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        b.prototype.getFleetBeaconRunner.call(a).startSubscribeTimer()
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconBeforeSubscribeState = g;
        var h = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "subscribe_issued"
            }
            ;
            c.subscribeSuccessSignalReceived = function () {
                var a = this;
                return {
                    newState: new i(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                    }
                }
            }
            ;
            c.subscribeTimeout = function () {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconSubscribedIssuedState = h;
        var i = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "waiting_to_publish"
            }
            ;
            c.waitForPublishTimeout = function () {
                var a = this;
                return {
                    newState: new j(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        b.prototype.getFleetBeaconRunner.call(a).publish(),
                            b.prototype.getFleetBeaconRunner.call(a).startPayloadTimer()
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconWaitingToPublishState = i;
        var j = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "publish_issued"
            }
            ;
            c.publishFailed = function () {
                var a = this;
                return {
                    newState: new m(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            }
            ;
            c.payloadReceived = function () {
                var a = this, c, d;
                (function () {
                    }
                );
                b.prototype.getFleetBeaconRunner.call(this).isLastPayload() ? (c = new l(b.prototype.getFleetBeaconRunner.call(this)),
                        d = function () {
                            a.getFleetBeaconRunner().cleanUpFleetBeacon()
                        }
                ) : (c = new i(b.prototype.getFleetBeaconRunner.call(this)),
                        d = function () {
                            b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish()
                        }
                );
                return {
                    newState: c,
                    action: d
                }
            }
            ;
            c.payloadTimeout = function () {
                var a = this;
                return {
                    newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                        a.getFleetBeaconRunner().cleanUpFleetBeacon()
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconPublishIssuedState = j;
        var k = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "failed"
            }
            ;
            c.cleanUpFinish = function () {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconFailedState = k;
        var l = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "succeed"
            }
            ;
            c.cleanUpFinish = function () {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconSucceedState = l;
        var m = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "aborted"
            }
            ;
            c.cleanUpFinish = function () {
                return {
                    newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
                    action: function () {
                    }
                }
            }
            ;
            return a
        }(a);
        f.FleetBeaconAbortedState = m;
        var n = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                return b.apply(this, arguments) || this
            }

            var c = a.prototype;
            c.getName = function () {
                return "finish"
            }
            ;
            return a
        }(a);
        f.FleetBeaconFinishState = n
    }
), null);
__d("FleetBeaconRunner", ["FleetBeaconStates", "clearTimeout", "setTimeout"], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a(a) {
                this.$1 = a;
                this.$2 = new (b("FleetBeaconStates").FleetBeaconState)(this);
                var c = new (b("FleetBeaconStates").FleetBeaconPreparingState)(this);
                this.$1.cleanPreviousFleetBeaconResult();
                this.$6(function () {
                    return {
                        newState: c,
                        action: function () {
                        }
                    }
                });
                this.$3 = 0;
                this.$1.setFleetBeaconRunner(this)
            }

            var c = a.prototype;
            c.getPublishTimes = function () {
                return this.$3
            }
            ;
            c.prepareFleetBeaconTest = function () {
                this.$1.prepareFleetBeaconTest()
            }
            ;
            c.runFleetBeaconTest = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.subscribeIssued()
                });
                this.$7()
            }
            ;
            c.$7 = function () {
                this.$1.subscribe()
            }
            ;
            c.publish = function () {
                this.$1.publish()
            }
            ;
            c.isLastPayload = function () {
                return this.$3 >= this.$1.publishWaitIntervalsMS().length
            }
            ;
            c.waitForNextPublish = function () {
                var a = this
                    , c = this.$1.publishWaitIntervalsMS()[this.$3];
                this.$3 += 1;
                c === 0 ? this.$8() : b("setTimeout")(function () {
                    a.$8()
                }, c)
            }
            ;
            c.startSubscribeTimer = function () {
                var a = this
                    , c = this.$1.subscribeTimeoutIntervalMS();
                this.$4 = b("setTimeout")(function () {
                    a.$9()
                }, c)
            }
            ;
            c.startPayloadTimer = function () {
                var a = this
                    , c = this.$1.payloadTimeoutIntervalMS();
                this.$5 = b("setTimeout")(function () {
                    a.$10()
                }, c)
            }
            ;
            c.cleanUpFleetBeacon = function () {
                this.$1.cleanUpFleetBeacon()
            }
            ;
            c.onCleanUpFinish = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.cleanUpFinish()
                })
            }
            ;
            c.$8 = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.waitForPublishTimeout()
                })
            }
            ;
            c.$9 = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.subscribeTimeout()
                })
            }
            ;
            c.$10 = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.payloadTimeout()
                })
            }
            ;
            c.onPrepareFleetBeaconSuccess = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.prepareFleetBeaconSucceed()
                })
            }
            ;
            c.onPrepareFleetBeaconFailed = function () {
                var a = this;
                this.$6(function () {
                    return a.$2.prepareFleetBeaconFailed()
                })
            }
            ;
            c.onSubscribe = function () {
                var a = this;
                b("clearTimeout")(this.$4);
                this.$6(function () {
                    return a.$2.subscribeSuccessSignalReceived()
                })
            }
            ;
            c.onPayloadReceived = function () {
                var a = this;
                b("clearTimeout")(this.$5);
                this.$6(function () {
                    return a.$2.payloadReceived()
                })
            }
            ;
            c.onPublishFailed = function () {
                var a = this;
                b("clearTimeout")(this.$5);
                this.$6(function () {
                    return a.$2.publishFailed()
                })
            }
            ;
            c.$6 = function (a) {
                a = a();
                var b = this.$2;
                this.$2 = a.newState;
                var c = this.$2;
                this.$11(b, c);
                a.action()
            }
            ;
            c.$11 = function (a, b) {
                this.$1.onFleetBeaconStateTransition(a, b)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconStateTransitionListener", [], (function (a, b, c, d, e, f) {
        a = function () {
            function a() {
            }

            var b = a.prototype;
            b.onFleetBeaconStateTransition = function (a, b, c, d) {
                throw new Error("Require implementation")
            }
            ;
            b.cleanState = function () {
                throw new Error("Require implementation")
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconTestBase", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a() {
                this.$1 = null,
                    this.$2 = []
            }

            var b = a.prototype;
            b.addStateTransitionListener = function (a) {
                this.$2.push(a)
            }
            ;
            b.cleanPreviousFleetBeaconResult = function () {
                this.$2.forEach(function (a) {
                    a.cleanState()
                })
            }
            ;
            b.getNumberOfPublishers = function () {
                var a;
                return (a = (a = this.$1) == null ? void 0 : a.getPublishTimes()) != null ? a : -1
            }
            ;
            b.getTestID = function () {
                throw new Error("Require implementation")
            }
            ;
            b.setFleetBeaconRunner = function (a) {
                this.$1 = a
            }
            ;
            b.prepareFleetBeaconTest = function () {
                throw new Error("Require implementation")
            }
            ;
            b.onPrepareFleetBeaconSuccess = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconSuccess()
            }
            ;
            b.onPrepareFleetBeaconFailed = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconFailed()
            }
            ;
            b.subscribe = function () {
                throw new Error("Require implementation")
            }
            ;
            b.onSubscribe = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onSubscribe()
            }
            ;
            b.publish = function () {
                throw new Error("Require implementation")
            }
            ;
            b.cleanUpFleetBeacon = function () {
                throw new Error("Require implementation")
            }
            ;
            b.onCleanUpFinish = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onCleanUpFinish()
            }
            ;
            b.onPublishFailed = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onPublishFailed()
            }
            ;
            b.onPayloadReceived = function () {
                var a;
                (a = this.$1) == null ? void 0 : a.onPayloadReceived()
            }
            ;
            b.subscribeTimeoutIntervalMS = function () {
                return 1e4
            }
            ;
            b.payloadTimeoutIntervalMS = function () {
                return 2e4
            }
            ;
            b.publishWaitIntervalsMS = function () {
                return [1e4, 5e3]
            }
            ;
            b.shouldStartTime = function () {
                return !0
            }
            ;
            b.onFleetBeaconStateTransition = function (a, b) {
                var c = this
                    , d = Date.now();
                this.$2.forEach(function (e) {
                    e.onFleetBeaconStateTransition(a, b, d, c)
                })
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconTestUIAnnouncer", ["FleetBeaconStateTransitionListener"], (function (a, b, c, d, e, f) {
        a = function (a) {
            babelHelpers.inheritsLoose(b, a);

            function b() {
                var b;
                b = a.call(this) || this;
                b.$FleetBeaconTestUIAnnouncer1 = [];
                b.$FleetBeaconTestUIAnnouncer3 = !1;
                b.$FleetBeaconTestUIAnnouncer4 = !1;
                b.$FleetBeaconTestUIAnnouncer5 = !1;
                b.$FleetBeaconTestUIAnnouncer6 = !1;
                b.$FleetBeaconTestUIAnnouncer7 = -1;
                b.$FleetBeaconTestUIAnnouncer8 = -1;
                b.$FleetBeaconTestUIAnnouncer9 = 0;
                b.$FleetBeaconTestUIAnnouncer10 = 0;
                b.$FleetBeaconTestUIAnnouncer11 = [];
                b.$FleetBeaconTestUIAnnouncer12 = -1;
                b.$FleetBeaconTestUIAnnouncer13 = -1;
                b.$FleetBeaconTestUIAnnouncer14 = -1;
                return b
            }

            var c = b.prototype;
            c.cleanState = function () {
                this.$FleetBeaconTestUIAnnouncer3 = !1,
                    this.$FleetBeaconTestUIAnnouncer4 = !1,
                    this.$FleetBeaconTestUIAnnouncer5 = !1,
                    this.$FleetBeaconTestUIAnnouncer6 = !1,
                    this.$FleetBeaconTestUIAnnouncer7 = -1,
                    this.$FleetBeaconTestUIAnnouncer8 = -1,
                    this.$FleetBeaconTestUIAnnouncer9 = 0,
                    this.$FleetBeaconTestUIAnnouncer10 = 0,
                    this.$FleetBeaconTestUIAnnouncer11 = [],
                    this.$FleetBeaconTestUIAnnouncer12 = -1,
                    this.$FleetBeaconTestUIAnnouncer13 = -1,
                    this.$FleetBeaconTestUIAnnouncer14 = -1
            }
            ;
            c.addSubscriber = function (a) {
                this.$FleetBeaconTestUIAnnouncer1.push(a)
            }
            ;
            c.onFleetBeaconStateTransition = function (a, b, c, d) {
                var e = d.getTestID()
                    , f = {
                    oldState: a,
                    newState: b,
                    testID: e,
                    timestamp: c,
                    extra: {}
                };
                this.$FleetBeaconTestUIAnnouncer2 == null && (this.$FleetBeaconTestUIAnnouncer2 = d);
                e = "NONE";
                switch (b.getName()) {
                    case "initial":
                        break;
                    case "preparing":
                        this.$FleetBeaconTestUIAnnouncer12 = Date.now();
                        this.$FleetBeaconTestUIAnnouncer3 = !0;
                        f.extra = babelHelpers["extends"]({}, f.extra, {
                            createIssued: !0
                        });
                        break;
                    case "before_subscribe":
                        this.$FleetBeaconTestUIAnnouncer13 = Date.now();
                        this.$FleetBeaconTestUIAnnouncer4 = !0;
                        f.extra = babelHelpers["extends"]({}, f.extra, {
                            createSuccess: !0
                        });
                        break;
                    case "subscribe_issued":
                        this.$FleetBeaconTestUIAnnouncer5 = !0;
                        f.extra = babelHelpers["extends"]({}, f.extra, {
                            subscribeIssued: !0,
                            subscribeTimestamp: this.$FleetBeaconTestUIAnnouncer13,
                            subscribeTimeoutIntervalMS: (d = (c = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : c.subscribeTimeoutIntervalMS()) != null ? d : -1
                        });
                        break;
                    case "waiting_to_publish":
                        a.getName() === "subscribe_issued" && (this.$FleetBeaconTestUIAnnouncer6 = !0,
                            this.$FleetBeaconTestUIAnnouncer7 = Date.now() - this.$FleetBeaconTestUIAnnouncer13,
                            f.extra = babelHelpers["extends"]({}, f.extra, {
                                subscribeSuccess: !0,
                                subscribeLatencyMS: this.$FleetBeaconTestUIAnnouncer7
                            }));
                        a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                        break;
                    case "publish_issued":
                        this.$FleetBeaconTestUIAnnouncer9 += 1;
                        this.$FleetBeaconTestUIAnnouncer14 = Date.now();
                        f.extra = babelHelpers["extends"]({}, f.extra, {
                            publishIssued: !0,
                            payloadTimeoutInterval: (c = (b = this.$FleetBeaconTestUIAnnouncer2) == null ? void 0 : b.payloadTimeoutIntervalMS()) != null ? c : -1
                        });
                        break;
                    case "failed":
                        a.getName() === "subscribe_issued" && (e = "SUBSCRIBE_FAILED");
                        a.getName() === "publish_issued" && (e = "RECEIVE_PUBLISH_FAILED");
                        this.$FleetBeaconTestUIAnnouncer16(f, "FAILURE", e);
                        break;
                    case "succeed":
                        a.getName() === "publish_issued" && this.$FleetBeaconTestUIAnnouncer15(f);
                        this.$FleetBeaconTestUIAnnouncer16(f, "SUCCESS", "NONE");
                        break;
                    case "aborted":
                        a.getName() === "preparing" && (e = "CREATE_TEST_FAILED");
                        a.getName() === "publish_issued" && (e = "MUTATE_FIELD_FAILED");
                        this.$FleetBeaconTestUIAnnouncer16(f, "ABORT", e);
                        break;
                    case "finish":
                        f.extra = babelHelpers["extends"]({}, f.extra, {
                            cleanUpFinish: !0
                        });
                        break;
                    default:
                }
                this.$FleetBeaconTestUIAnnouncer1.forEach(function (a) {
                    a(f)
                })
            }
            ;
            c.$FleetBeaconTestUIAnnouncer15 = function (a) {
                this.$FleetBeaconTestUIAnnouncer10 += 1;
                var b = Date.now() - this.$FleetBeaconTestUIAnnouncer14;
                this.$FleetBeaconTestUIAnnouncer11.push(b);
                a.extra = babelHelpers["extends"]({}, a.extra, {
                    payloadSuccess: !0,
                    payloadSuccessCnt: this.$FleetBeaconTestUIAnnouncer10,
                    payloadLatency: b
                })
            }
            ;
            c.$FleetBeaconTestUIAnnouncer16 = function (a, b, c) {
                a.extra = babelHelpers["extends"]({}, a.extra, {
                    testResult: b,
                    failureReason: c
                })
            }
            ;
            return b
        }(b("FleetBeaconStateTransitionListener"));
        e.exports = a
    }
), null);
__d("FleetBeaconSubscriptionNetwork", ["regeneratorRuntime", "Promise", "CurrentUser", "RelayModern", "uuid", "FleetBeaconSubscriptionNetwork_Subscription.graphql", "FleetBeaconSubscriptionNetwork_PublishMutation.graphql", "FleetBeaconSubscriptionNetwork_LogMutation.graphql"], (function (a, b, c, d, e, f) {
        "use strict";
        var g, h, i;
        a = function () {
            function a(a) {
                this.environment = a
            }

            var c = a.prototype;
            c.subscribe = function (a, c) {
                return b("RelayModern").requestSubscription(this.environment, {
                    subscription: g !== void 0 ? g : g = b("FleetBeaconSubscriptionNetwork_Subscription.graphql"),
                    variables: {
                        input: {
                            test_id: a
                        }
                    },
                    onError: c.onError,
                    onNext: c.onNext
                })
            }
            ;
            c.publish = function (a) {
                var c = this;
                return b("regeneratorRuntime").async(function (d) {
                    while (1)
                        switch (d.prev = d.next) {
                            case 0:
                                return d.abrupt("return", new (b("Promise"))(function (d, e) {
                                        b("RelayModern").commitMutation(c.environment, {
                                            mutation: h !== void 0 ? h : h = b("FleetBeaconSubscriptionNetwork_PublishMutation.graphql"),
                                            variables: {
                                                input: {
                                                    client_mutation_id: b("uuid")(),
                                                    actor_id: b("CurrentUser").getAccountID(),
                                                    test_id: a
                                                }
                                            },
                                            onCompleted: function (a) {
                                                return d()
                                            },
                                            onError: e
                                        })
                                    }
                                ));
                            case 1:
                            case "end":
                                return d.stop()
                        }
                }, null, this)
            }
            ;
            c.log = function (a) {
                var c = this;
                return b("regeneratorRuntime").async(function (d) {
                    while (1)
                        switch (d.prev = d.next) {
                            case 0:
                                return d.abrupt("return", new (b("Promise"))(function (d, e) {
                                        b("RelayModern").commitMutation(c.environment, {
                                            mutation: i !== void 0 ? i : i = b("FleetBeaconSubscriptionNetwork_LogMutation.graphql"),
                                            variables: {
                                                input: a
                                            },
                                            onCompleted: function (a) {
                                                return d()
                                            },
                                            onError: e
                                        })
                                    }
                                ));
                            case 1:
                            case "end":
                                return d.stop()
                        }
                }, null, this)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("FleetBeaconTestSubscriptionLogger", ["CurrentUser", "FleetBeaconStateTransitionListener", "RelayRTIUtils", "uuid"], (function (a, b, c, d, e, f) {
        a = function (a) {
            babelHelpers.inheritsLoose(c, a);

            function c(b, c, d) {
                var e;
                e = a.call(this) || this;
                e.$FleetBeaconTestSubscriptionLogger1 = null;
                e.$FleetBeaconTestSubscriptionLogger2 = b;
                e.$FleetBeaconTestSubscriptionLogger3 = !1;
                e.$FleetBeaconTestSubscriptionLogger4 = !1;
                e.$FleetBeaconTestSubscriptionLogger5 = !1;
                e.$FleetBeaconTestSubscriptionLogger6 = !1;
                e.$FleetBeaconTestSubscriptionLogger7 = -1;
                e.$FleetBeaconTestSubscriptionLogger8 = -1;
                e.$FleetBeaconTestSubscriptionLogger9 = 0;
                e.$FleetBeaconTestSubscriptionLogger10 = 0;
                e.$FleetBeaconTestSubscriptionLogger11 = [];
                e.$FleetBeaconTestSubscriptionLogger12 = -1;
                e.$FleetBeaconTestSubscriptionLogger13 = -1;
                e.$FleetBeaconTestSubscriptionLogger14 = -1;
                e.$FleetBeaconTestSubscriptionLogger15 = c;
                e.$FleetBeaconTestSubscriptionLogger16 = d;
                return e
            }

            var d = c.prototype;
            d.cleanState = function () {
                this.$FleetBeaconTestSubscriptionLogger3 = !1,
                    this.$FleetBeaconTestSubscriptionLogger4 = !1,
                    this.$FleetBeaconTestSubscriptionLogger5 = !1,
                    this.$FleetBeaconTestSubscriptionLogger6 = !1,
                    this.$FleetBeaconTestSubscriptionLogger7 = -1,
                    this.$FleetBeaconTestSubscriptionLogger8 = -1,
                    this.$FleetBeaconTestSubscriptionLogger9 = 0,
                    this.$FleetBeaconTestSubscriptionLogger10 = 0,
                    this.$FleetBeaconTestSubscriptionLogger11 = [],
                    this.$FleetBeaconTestSubscriptionLogger12 = -1,
                    this.$FleetBeaconTestSubscriptionLogger13 = -1,
                    this.$FleetBeaconTestSubscriptionLogger14 = -1
            }
            ;
            d.onFleetBeaconStateTransition = function (a, b, c, d) {
                this.$FleetBeaconTestSubscriptionLogger1 == null && (this.$FleetBeaconTestSubscriptionLogger1 = d);
                c = "NONE";
                switch (b.getName()) {
                    case "initial":
                        break;
                    case "preparing":
                        this.$FleetBeaconTestSubscriptionLogger12 = Date.now();
                        this.$FleetBeaconTestSubscriptionLogger3 = !0;
                        break;
                    case "before_subscribe":
                        this.$FleetBeaconTestSubscriptionLogger13 = Date.now();
                        this.$FleetBeaconTestSubscriptionLogger4 = !0;
                        break;
                    case "subscribe_issued":
                        this.$FleetBeaconTestSubscriptionLogger5 = !0;
                        break;
                    case "waiting_to_publish":
                        a.getName() === "subscribe_issued" && (this.$FleetBeaconTestSubscriptionLogger6 = !0,
                            this.$FleetBeaconTestSubscriptionLogger7 = Date.now() - this.$FleetBeaconTestSubscriptionLogger13);
                        a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                        break;
                    case "publish_issued":
                        this.$FleetBeaconTestSubscriptionLogger9 += 1;
                        this.$FleetBeaconTestSubscriptionLogger14 = Date.now();
                        break;
                    case "failed":
                        a.getName() === "subscribe_issued" && (c = "SUBSCRIBE_FAILED");
                        a.getName() === "publish_issued" && (c = "RECEIVE_PUBLISH_FAILED");
                        this.$FleetBeaconTestSubscriptionLogger18("FAILURE", c);
                        break;
                    case "succeed":
                        a.getName() === "publish_issued" && this.$FleetBeaconTestSubscriptionLogger17();
                        this.$FleetBeaconTestSubscriptionLogger18("SUCCESS", "NONE");
                        break;
                    case "aborted":
                        a.getName() === "preparing" && (c = "CREATE_TEST_FAILED");
                        a.getName() === "publish_issued" && (c = "MUTATE_FIELD_FAILED");
                        this.$FleetBeaconTestSubscriptionLogger18("ABORT", c);
                        break;
                    default:
                }
            }
            ;
            d.$FleetBeaconTestSubscriptionLogger17 = function () {
                this.$FleetBeaconTestSubscriptionLogger10 += 1;
                var a = Date.now() - this.$FleetBeaconTestSubscriptionLogger14;
                this.$FleetBeaconTestSubscriptionLogger11.push(a)
            }
            ;
            d.$FleetBeaconTestSubscriptionLogger18 = function (a, c) {
                var d, e = this,
                    f = this.$FleetBeaconTestSubscriptionLogger12 = Date.now() - this.$FleetBeaconTestSubscriptionLogger12,
                    g = parseInt(this.$FleetBeaconTestSubscriptionLogger11.reduce(function (a, b) {
                        return a + b
                    }, 0) / this.$FleetBeaconTestSubscriptionLogger10, 10);
                d = (d = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : d.getTestID();
                if (d == null)
                    return;
                this.$FleetBeaconTestSubscriptionLogger2.log({
                    client_mutation_id: b("uuid")(),
                    actor_id: b("CurrentUser").getAccountID(),
                    test_id: d,
                    test_name: "Web_Manual",
                    test_result: a,
                    failure_reason: c,
                    subscribe_issued: this.$FleetBeaconTestSubscriptionLogger5,
                    subscribe_success: this.$FleetBeaconTestSubscriptionLogger6,
                    subscribe_latency_ms: this.$FleetBeaconTestSubscriptionLogger7,
                    subscribe_timeout_interval_ms: (d = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : d.subscribeTimeoutIntervalMS(),
                    publish_success: this.$FleetBeaconTestSubscriptionLogger10 > 0,
                    publish_latency_ms: g,
                    publish_timeout_interval_ms: (a = this.$FleetBeaconTestSubscriptionLogger1) == null ? void 0 : a.payloadTimeoutIntervalMS(),
                    test_duration_ms: f,
                    triggering_subscription: (c = this.$FleetBeaconTestSubscriptionLogger15) != null ? c : "manual",
                    app_id: b("RelayRTIUtils").GRAPH_SERVICES_SDK_APP_ID
                }).then(function (a) {
                    e.$FleetBeaconTestSubscriptionLogger16(!0)
                })["catch"](function (a) {
                    e.$FleetBeaconTestSubscriptionLogger16(!1)
                })
            }
            ;
            return c
        }(b("FleetBeaconStateTransitionListener"));
        e.exports = a
    }
), null);
__d("FleetBeaconTestSubscription", ["FleetBeaconTestBase", "FleetBeaconTestSubscriptionLogger", "FleetBeaconTestUIAnnouncer", "uuid"], (function (a, b, c, d, e, f) {
        "use strict";
        a = function (a) {
            babelHelpers.inheritsLoose(c, a);

            function c(c, d, e) {
                var f;
                f = a.call(this) || this;
                f.onCleanUpFleetBeaconFinish = function (a) {
                    f.onCleanUpFinish()
                }
                ;
                f.$FleetBeaconTestSubscription1 = c;
                f.$FleetBeaconTestSubscription3 = null;
                f.$FleetBeaconTestSubscription4 = e;
                f.$FleetBeaconTestSubscription6 = new (b("FleetBeaconTestSubscriptionLogger"))(c, d, f.onCleanUpFleetBeaconFinish);
                f.$FleetBeaconTestSubscription5 = new (b("FleetBeaconTestUIAnnouncer"))();
                a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription6);
                a.prototype.addStateTransitionListener.call(babelHelpers.assertThisInitialized(f), f.$FleetBeaconTestSubscription5);
                f.cleanPreviousFleetBeaconResult();
                return f
            }

            var d = c.prototype;
            d.cleanPreviousFleetBeaconResult = function () {
                a.prototype.cleanPreviousFleetBeaconResult.call(this),
                    this.$FleetBeaconTestSubscription2 = b("uuid")()
            }
            ;
            d.getTestID = function () {
                return this.$FleetBeaconTestSubscription2
            }
            ;
            d.getFleetBeaconUIAnnouncer = function () {
                return this.$FleetBeaconTestSubscription5
            }
            ;
            d.prepareFleetBeaconTest = function () {
                this.onPrepareFleetBeaconSuccess()
            }
            ;
            d.subscribe = function () {
                var a = this
                    , b = this.$FleetBeaconTestSubscription2;
                if (b == null)
                    return;
                this.$FleetBeaconTestSubscription3 = this.$FleetBeaconTestSubscription1.subscribe(b, {
                    onNext: function () {
                        a.onPayloadReceived()
                    },
                    onError: function () {
                    }
                });
                this.onSubscribe()
            }
            ;
            d.publish = function () {
                var b = this
                    , c = this.$FleetBeaconTestSubscription2;
                if (c == null)
                    return;
                this.$FleetBeaconTestSubscription1.publish(c)["catch"](function (c) {
                    a.prototype.onPublishFailed.call(b)
                })
            }
            ;
            d.cleanUpFleetBeacon = function () {
            }
            ;
            d.$FleetBeaconTestSubscription7 = function () {
                var a;
                (a = this.$FleetBeaconTestSubscription3) == null ? void 0 : a.dispose()
            }
            ;
            d.onFleetBeaconStateTransition = function (b, c) {
                a.prototype.onFleetBeaconStateTransition.call(this, b, c);
                b = c.getName();
                b === "finish" && (this.$FleetBeaconTestSubscription4(),
                    this.$FleetBeaconTestSubscription7())
            }
            ;
            return c
        }(b("FleetBeaconTestBase"));
        e.exports = a
    }
), null);
__d("FleetBeaconSubscriptionLauncher", ["FleetBeaconRunner", "FleetBeaconSubscriptionNetwork", "FleetBeaconTestSubscription"], (function (a, b, c, d, e, f) {
        "use strict";
        f.CreateFleetBeaconTestSubscription = a;
        f.LaunchFleetBeaconTestSubscription = c;

        function a(a, c, d) {
            a = new (b("FleetBeaconTestSubscription"))(new (b("FleetBeaconSubscriptionNetwork"))(a), c, d);
            return a
        }

        function c(a) {
            var c = new (b("FleetBeaconRunner"))(a);
            a.setFleetBeaconRunner(c);
            c.prepareFleetBeaconTest()
        }
    }
), null);
__d("SkywalkerUtils", ["CurrentLocale", "RTISubscriptionManagerConfig"], (function (a, b, c, d, e, f) {
        a = {
            patchContext: function (a) {
                a = a || {};
                a.locale = b("CurrentLocale").get();
                if (b("RTISubscriptionManagerConfig").assimilator) {
                    var c = b("RTISubscriptionManagerConfig").assimilator;
                    c.tierType != null && (a.tierType = c.tierType);
                    c.sandboxIP != null && c.sandboxPort != null && c.sandboxHostname != null && (a.sandboxIP = c.sandboxIP,
                        a.sandboxPort = c.sandboxPort,
                        a.sandboxHostname = c.sandboxHostname)
                }
                return a
            }
        };
        e.exports = a
    }
), null);
__d("MqttLongPollingHookCollection", [], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a() {
                this.$1 = new Set()
            }

            var b = a.prototype;
            b.addHook = function (a) {
                this.$1.add(a)
            }
            ;
            b.removeHook = function (a) {
                this.$1["delete"](a)
            }
            ;
            b.onPollRequestSent = function () {
                this.$1.forEach(function (a) {
                    a.onPollRequestSent()
                })
            }
            ;
            b.onPollRequestSuccess = function () {
                this.$1.forEach(function (a) {
                    a.onPollRequestSuccess()
                })
            }
            ;
            b.onPollResponse = function (a) {
                this.$1.forEach(function (b) {
                    b.onPollResponse(a)
                })
            }
            ;
            b.onPollFinish = function () {
                this.$1.forEach(function (a) {
                    a.onPollFinish()
                })
            }
            ;
            b.onPollRequestFailed = function (a) {
                this.$1.forEach(function (b) {
                    b.onPollRequestFailed(a)
                })
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("PromiseResult", ["Promise"], (function (a, b, c, d, e, f) {
        "use strict";
        a = function () {
            function a() {
                var a = this;
                this.promise = new (b("Promise"))(function (b, c) {
                        a.$1 = b,
                            a.$2 = c
                    }
                )
            }

            var c = a.prototype;
            c.resolve = function (a) {
                this.$1(a)
            }
            ;
            c.reject = function (a) {
                this.$2(a)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttFetchClient", ["Promise", "MqttEnv", "MqttProtocolCodec", "MqttUtils", "PromiseResult"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = b("MqttProtocolCodec").WireMessage
            , i = b("MqttProtocolCodec").decodeByteMessages
            , j = b("MqttProtocolCodec").MESSAGE_TYPE
            , k = "fetch_pull"
            , l = "fetch_pull_finish"
            , m = "fetch_"
            , n = 6e4
            , o = "action"
            , p = "chunked"
            , q = "send"
            , r = "true"
            , s = 5
            , t = 20
            , u = 10
            , v = 5e3;
        a = function () {
            function a() {
                this.$1 = "",
                    this.$2 = g.getLoggerInstance(),
                    this.$3 = 0,
                    this.$4 = "",
                    this.$6 = function () {
                    }
                    ,
                    this.$7 = function (a) {
                    }
                    ,
                    this.$8 = function () {
                    }
                    ,
                    this.$9 = function (a) {
                    }
                    ,
                    this.$10 = 0,
                    this.$11 = 0,
                    this.$12 = 0,
                    this.$13 = 0,
                    this.$14 = "Ready",
                    this.$15 = [],
                    this.$16 = [],
                    this.$17 = null,
                    this.$18 = !1,
                    this.$19 = 0
            }

            a.isSupported = function () {
                return typeof fetch === "function"
            }
            ;
            var c = a.prototype;
            c.run = function (a, c, d, e, f, g, h, i) {
                this.$1 = b("MqttUtils").endpointWithSessionId(a, c),
                    this.$3 = c,
                    this.$4 = d,
                    this.$5 = e,
                    this.$6 = f,
                    this.$7 = g,
                    this.$8 = h,
                    this.$9 = i,
                    this.$20()
            }
            ;
            c.isTopicSupported = function (a) {
                return !0
            }
            ;
            c.publish = function (a, c) {
                if (this.$14 !== "ReceivingData") {
                    this.$2.bumpCounter(m + "publish." + a + ".invalidstate");
                    return b("Promise").reject("not connected")
                } else {
                    this.$2.bumpCounter(m + "publish." + a + ".publish");
                    var d = new (b("PromiseResult"))();
                    a = {
                        topic: a,
                        payload: c,
                        promiseResult: d
                    };
                    this.$15.push(a);
                    this.$21();
                    return d.promise
                }
            }
            ;
            c.abort = function () {
                this.$6 = function () {
                }
                    ,
                    this.$7 = function (a) {
                    }
                    ,
                    this.$8 = function () {
                    }
                    ,
                    this.$9 = function (a) {
                    }
            }
            ;
            c.$22 = function (a) {
                var b = this;
                a.forEach(function (a) {
                    b.$2.bumpCounter(m + "publish." + a.topic + ".resolved"),
                        a.promiseResult.resolve()
                });
                this.$12 += a.length
            }
            ;
            c.$23 = function (a, b) {
                var c = this;
                a.forEach(function (a) {
                    c.$2.bumpCounter(m + "publish." + a.topic + ".rejected"),
                        a.promiseResult.reject(b)
                })
            }
            ;
            c.$24 = function (a, b, c, d) {
                var e = a.map(function (a) {
                    return a.topic
                }).join(",");
                this.$2.debugTrace("FetchClient", "Fetch publish request failed. Publishes:" + e + ", retry:" + c);
                this.$2.bumpCounter(m + "publish_request_failed");
                this.$14 != "ReceivingData" || c === s ? (this.$23(a, d),
                    this.$18 = !1,
                    this.$2.bumpCounter(m + "publish_request_failed_final"),
                    this.$21()) : this.$25(a, b, c + 1)
            }
            ;
            c.$26 = function (a, b, c, d) {
                if (!d.ok) {
                    this.$2.bumpCounter(m + "publish_request_failed.http." + d.status);
                    if (d.status === 409) {
                        this.$19++;
                        if (this.$19 >= u) {
                            this.$2.bumpCounter(m + "409_reset");
                            this.$27(new Error("Too many 409 errors"));
                            return
                        }
                    }
                    this.$24(a, b, c, this.$28(d));
                    return
                }
                this.$2.bumpCounter(m + "publish_request_success");
                b = a.map(function (a) {
                    return a.topic
                }).join(",");
                this.$2.debugTrace("FetchClient", "Fetch publish request success. Publishes:" + b + ", retry:" + c);
                this.$22(a);
                this.$18 = !1;
                this.$21()
            }
            ;
            c.$21 = function () {
                if (this.$14 != "ReceivingData")
                    return;
                if (this.$18)
                    return;
                if (this.$15.length == 0 && this.$16.length == 0)
                    return;
                this.$18 = !0;
                var a = this.$15.slice(0, t);
                this.$15 = this.$15.slice(t, this.$15.length);
                clearTimeout(this.$17);
                this.$17 = null;
                var b = this.$16.slice(0, t);
                this.$16 = this.$16.slice(t, this.$16.length);
                this.$25(a, b, 0)
            }
            ;
            c.$25 = function (a, c, d) {
                var e = this
                    , f = a.map(function (a) {
                    return a.topic
                }).join(",");
                this.$2.debugTrace("FetchClient", "Fetch publish request sent. Publishes:" + f + ", retry:" + d);
                f = b("MqttUtils").endpointWithExtraParameter(this.$1, o, q);
                var h = a.map(function (a) {
                    return {
                        topic: a.topic,
                        payload: a.payload,
                        qos: 0,
                        messageId: g.random()
                    }
                });
                h = this.$5.gen(this.$3, [], h, c);
                this.$2.bumpCounter(m + "publish_request");
                b("MqttUtils").promiseDoneWithTimeout(fetch(f, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "include",
                    referrer: "no-referrer",
                    body: h,
                    keepalive: !1
                }), function (b) {
                    return e.$26(a, c, d, b)
                }, function (b) {
                    return e.$24(a, c, d, b)
                }, n)
            }
            ;
            c.$29 = function (a) {
                a = a.message;
                this.$2.debugTrace("FetchClient", "Fetch request failed with error:" + a);
                this.$9(a);
                this.$30(!1, a);
                this.$2.bumpCounter(m + "error");
                this.$14 = "Error"
            }
            ;
            c.$31 = function (a) {
                var b = this;
                this.$2.debugTrace("FetchClient", "Fetch response data received");
                a = i(new Uint8Array(a));
                a = a.messages;
                var c = a.filter(function (a) {
                    return a.messageType === j.PINGREQ
                });
                a = a.filter(function (a) {
                    return a.messageType === j.PUBLISH
                }).map(function (a) {
                    if (!(a instanceof h.Publish))
                        return {};
                    a = a;
                    a.qos === 1 && a.messageIdentifier != null && (b.$16.push(a.messageIdentifier),
                    b.$17 == null && (b.$17 = g.setTimeout(function () {
                        b.$21()
                    }, v)));
                    return {
                        topic: a.topic,
                        payload: a.payloadMessage.payloadString,
                        qos: a.qos
                    }
                });
                for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ;) {
                    var k;
                    if (e) {
                        if (f >= d.length)
                            break;
                        k = d[f++]
                    } else {
                        f = d.next();
                        if (f.done)
                            break;
                        k = f.value
                    }
                    k = k;
                    this.$2.bumpCounter(m + "response_" + k.topic)
                }
                a && a.length > 0 && (this.$13 += a.length,
                    this.$7(a));
                c && c.length > 0 && this.$32()
            }
            ;
            c.$32 = function () {
                this.$2.debugTrace("FetchClient", "Got server ping request"),
                    this.$2.bumpCounter(m + "ping")
            }
            ;
            c.$27 = function (a) {
                this.$2.debugTrace("FetchClient", "Fetch request ended: " + a.toString()),
                    this.$2.bumpCounter(m + "done"),
                    this.$33(a.message),
                    this.$8(),
                    this.$14 = "Done"
            }
            ;
            c.$34 = function (a, c, d) {
                var e = this;
                if (d !== null && d !== void 0)
                    try {
                        this.$31(d)
                    } catch (a) {
                        this.$27(a);
                        this.$2.bumpCounter(m + "dataDecodeException");
                        return
                    }
                if (c) {
                    this.$27(new Error("EOF"));
                    return
                }
                b("MqttUtils").promiseDone(a.read(), function (c) {
                    var b = c.done;
                    c = c.value;
                    return e.$34(a, b, c)
                }, function (a) {
                    return e.$27(a)
                })
            }
            ;
            c.$35 = function (a) {
                if (!a.ok) {
                    this.$2.bumpCounter(m + "error.http." + a.status);
                    this.$29(this.$28(a));
                    return
                }
                a = a.body;
                if (!a) {
                    this.$29(new Error("Empty body"));
                    return
                }
                a = a.getReader();
                this.$6();
                this.$2.bumpCounter(m + "success");
                this.$30(!0, null);
                this.$11 = Date.now();
                this.$14 = "ReceivingData";
                this.$2.debugTrace("FetchClient", "Fetch request success");
                this.$34(a, !1, null)
            }
            ;
            c.$33 = function (a) {
                this.$2.eventLogPullFinish({
                    pullEventName: l,
                    sessionID: this.$3,
                    duration: Date.now() - this.$11,
                    errorMessage: a,
                    publishReceived: this.$13,
                    publishSent: this.$12
                })
            }
            ;
            c.$30 = function (a, b) {
                this.$2.eventLogPull({
                    pullEventName: k,
                    sessionID: this.$3,
                    status: a,
                    duration: Date.now() - this.$10,
                    hostname: this.$1,
                    errorMessage: b
                })
            }
            ;
            c.$20 = function () {
                var a = this;
                if (this.$14 != "Ready")
                    return;
                this.$2.debugTrace("FetchClient", "Sending fetch request");
                this.$2.bumpCounter(m + "request");
                this.$10 = Date.now();
                var c = b("MqttUtils").endpointWithExtraParameter(this.$1, p, r);
                b("MqttUtils").promiseDoneWithTimeout(fetch(c, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "include",
                    referrer: "no-referrer",
                    body: this.$4,
                    keepalive: !1
                }), function (b) {
                    return a.$35(b)
                }, function (b) {
                    return a.$29(b)
                }, n)
            }
            ;
            c.$28 = function (a) {
                return new Error("Http error, status=" + a.status)
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("MqttLongPollingClient", ["Promise", "MqttEnv", "MqttProtocolCodec", "XHRRequest", "getCrossOriginTransport"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = b("MqttProtocolCodec").WireMessage
            , i = b("MqttProtocolCodec").decodeByteMessages
            , j = 120 * 1e3
            , k = "simple_pull";
        a = function () {
            function a() {
                this.$3 = "",
                    this.$4 = 0,
                    this.$2 = g.getLoggerInstance(),
                    this.$1 = "Ready",
                    this.$5 = "",
                    this.$7 = function () {
                    }
                    ,
                    this.$8 = function (a) {
                    }
                    ,
                    this.$9 = function () {
                    }
                    ,
                    this.$10 = function (a) {
                    }
                    ,
                    this.$11 = 0,
                    this.$12 = null,
                    this.$13 = new Set(["/t_ms", "/messenger_sync_get_diffs", "/messenger_sync_create_queue", "/webrtc", "/rtc_multi"])
            }

            var c = a.prototype;
            c.run = function (a, b, c, d, e, f, g, h) {
                this.$3 = a,
                    this.$4 = b,
                    this.$5 = c,
                    this.$6 = d,
                    this.$7 = e,
                    this.$8 = f,
                    this.$9 = g,
                    this.$10 = h,
                    this.$14(this.$5)
            }
            ;
            c.isTopicSupported = function (a) {
                return this.$13.has(a)
            }
            ;
            c.publish = function (a, c) {
                return b("Promise").reject("not supported")
            }
            ;
            c.abort = function () {
                this.$12 != null && this.$12.abort("Disconnected")
            }
            ;
            c.$15 = function (a, b) {
                if (this.$1 === a)
                    return;
                this.$1 = a;
                a == "Error" && b != null && this.$10(b)
            }
            ;
            c.$16 = function (a) {
                if (this.$1 != "RequestSend")
                    return;
                if (!a) {
                    this.$17("EmptyResponse", null);
                    return
                }
                this.$7();
                this.$18(!0, null);
                this.$15("ResponseReceived");
                a = i(new Uint8Array(a));
                a = a.messages.filter(function (a) {
                    return a instanceof h.Publish
                }).map(function (a) {
                    if (a instanceof h.Publish) {
                        a = a;
                        return {
                            topic: a.topic,
                            payload: a.payloadMessage.payloadString,
                            qos: a.qos
                        }
                    } else
                        return {}
                });
                this.$8(a);
                this.$9()
            }
            ;
            c.$17 = function (a, b) {
                b = b != null ? b.message : "null";
                this.$2.debugTrace("LongPollingClient Error", "Poll failed with error:" + a + ", errorMsg:" + b);
                this.$18(!1, a + ":" + b);
                this.$15("Error", a)
            }
            ;
            c.$18 = function (a, b) {
                this.$2.eventLogPull({
                    pullEventName: k,
                    sessionID: this.$4,
                    status: a,
                    duration: Date.now() - this.$11,
                    hostname: this.$3,
                    errorMessage: b
                })
            }
            ;
            c.$14 = function (a) {
                var c = this;
                if (this.$1 != "Ready" || this.$12)
                    return;
                try {
                    this.$11 = Date.now(),
                        this.$12 = new (b("XHRRequest"))(this.$3).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setResponseHandler(function (a) {
                            return c.$16(a)
                        }).setNetworkFailureHandler(function (a) {
                            c.$17("Network", a)
                        }).setErrorHandler(function (a) {
                            c.$17("Error", a)
                        }).setAbortHandler(function (a) {
                            c.$17("Abort", null)
                        }).setTimeoutHandler(function () {
                            c.$17("Timeout", null)
                        }).setTimeout(j).send(),
                        this.$15("RequestSend")
                } catch (a) {
                    this.$17("Error", a)
                }
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
__d("exponentialBackoff", ["MqttEnv"], (function (a, b, c, d, e, f) {
        var g = b("MqttEnv").Env;

        function a(a, b) {
            b === void 0 && (b = null);
            var c = null
                , d = 0;

            function e() {
                for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                    f[h] = arguments[h];
                var i = function () {
                    a.apply(b, f)
                };
                if (c === null) {
                    var j = Math.max(0, Math.pow(2, Math.min(d, 6)) * (1e3 + g.random() * 100) - 2e3);
                    c = g.setTimeout(function () {
                        i(),
                            c = null
                    }, j)
                }
                d++
            }

            e.reset = function () {
                d = 0,
                c != null && (g.clearTimeout(c),
                    c = null)
            }
            ;
            e.isPending = function () {
                return c != null
            }
            ;
            return e
        }

        e.exports = a
    }
), null);
__d("MqttLongPollingRunner", ["Promise", "MqttEnv", "MqttFetchClient", "MqttLongPollingClient", "MqttLongPollingHookCollection", "MqttTypes", "MqttUtils", "exponentialBackoff"], (function (a, b, c, d, e, f) {
        "use strict";
        var g = b("MqttEnv").Env
            , h = b("MqttEnv").MqttGkNames
            , i = b("MqttTypes").MqttChannelError
            , j = 4
            , k = 1e3
            , l = 3e3
            , m = "mqtt_should_longpoll"
            , n = "last_lp"
            , o = "yes"
            , p = "no";
        a = function () {
            function a(a, c, d, e, f, j, k, l, m) {
                var n = this;
                this.$23 = function () {
                    try {
                        if (!n.$29())
                            return;
                        var a = n.$30();
                        n.$14 = a;
                        var c = n.$9()
                            , d = n.$10();
                        c = c.filter(function (b) {
                            return a.isTopicSupported(b)
                        });
                        d = d.filter(function (b) {
                            return a.isTopicSupported(b.topic)
                        });
                        if (c.length == 0 && d.length == 0) {
                            n.$5.debugTrace("LongPollingRunner", "Poll skipped, nothing to do");
                            n.$14 = null;
                            g.setTimeout(function () {
                                n.$23()
                            }, 1e3);
                            return
                        }
                        var e = b("MqttUtils").generateSessionId();
                        a.run(n.$6, e, n.$7.gen(e, c, d), n.$7, function () {
                            return n.$31()
                        }, function (a) {
                            return n.$32(a)
                        }, function () {
                            return n.$33()
                        }, function (a) {
                            return n.$34(a)
                        });
                        n.$19.onPollRequestSent();
                        e = c.join(",");
                        c = d.map(function (a) {
                            return a.topic
                        }).join(",");
                        n.$5.debugTrace("LongPollingRunner", "Making a poll request to " + n.$6 + ". SubscribedTopics:" + e + ". Publishes:" + c)
                    } catch (a) {
                        a && n.$5.logErrorWarn(a, "lp_js_error"),
                            n.$11(new i(!1, "js error lp", a)),
                            n.$34("lp_js_error")
                    }
                }
                ;
                this.$6 = a;
                this.$7 = c;
                this.$1 = e;
                this.$2 = 0;
                this.$3 = d;
                this.$4 = b("MqttUtils").hasWSSupport();
                this.$5 = g.getLoggerInstance();
                this.$8 = f;
                this.$9 = j;
                this.$10 = k;
                this.$11 = l;
                this.$12 = m;
                this.$13 = !1;
                this.$14 = null;
                this.$15 = "LPInactive";
                this.$16 = "NotSent";
                this.$17 = 0;
                this.$19 = new (b("MqttLongPollingHookCollection"))();
                this.$18 = new (b("exponentialBackoff"))(this.$23, this);
                this.$20 = 0;
                this.$21 = p;
                a = g.genGk(h.mqtt_lp_use_fetch);
                c = b("MqttFetchClient").isSupported();
                a ? this.$5.bumpCounter("fetch_gk_pass") : this.$5.bumpCounter("fetch_gk_fail");
                c ? this.$5.bumpCounter("fetch_api_supported") : this.$5.bumpCounter("fetch_api_not_supported");
                this.$22 = a && c
            }

            var c = a.prototype;
            c.addHook = function (a) {
                this.$19.addHook(a)
            }
            ;
            c.start = function () {
                var a = this;
                this.$21 = g.configRead(n, p);
                this.$5.debugTrace("LongPollingRunner", "Runner loaded, last status " + this.$21);
                this.$20 = Date.now();
                this.$23();
                g.setTimeout(function () {
                    a.$23()
                }, k + 100);
                g.setTimeout(function () {
                    a.$23()
                }, l + 100)
            }
            ;
            c.canPublish = function () {
                return this.$15 === "LPActive" && this.$16 === "ReceivingData"
            }
            ;
            c.publish = function (a, c, d) {
                return g.genGk(h.mqtt_enable_publish_over_polling) && (this.$14 && this.$14.isTopicSupported(a)) ? this.$14.publish(a, c) : b("Promise").reject()
            }
            ;
            c.onConnectAttempt = function () {
            }
            ;
            c.onConnectFailure = function () {
                this.$2++,
                    this.$23()
            }
            ;
            c.onConnected = function () {
            }
            ;
            c.onConnectSuccess = function () {
                this.$1 = !0,
                    g.configWrite(n, null)
            }
            ;
            c.onConnectionLost = function () {
            }
            ;
            c.onSubscribe = function (a) {
            }
            ;
            c.onUnsubscribe = function (a) {
            }
            ;
            c.onPublish = function (a) {
            }
            ;
            c.onMessage = function (a) {
            }
            ;
            c.onWSFatal = function () {
                this.$3 = !0,
                    this.$23()
            }
            ;
            c.getStatus = function () {
                return this.$15
            }
            ;
            c.getRequestStatus = function () {
                return this.$16
            }
            ;
            c.$24 = function (a) {
                a != this.$15 && (this.$5.debugTrace("LongPollingRunner", "status changed to " + a + " from " + this.$15),
                    this.$15 = a,
                    this.$12(this.$15, this.$16))
            }
            ;
            c.$25 = function (a) {
                if (!this.$22)
                    return;
                a !== this.$16 && (this.$5.debugTrace("LongPollingRunner", "request status changed to " + a + " from " + this.$16),
                    this.$16 = a,
                    this.$12(this.$15, this.$16))
            }
            ;
            c.$26 = function () {
                this.$17 = 0
            }
            ;
            c.$27 = function () {
                this.$17++,
                this.$17 >= j && this.$24("LPError")
            }
            ;
            c.$28 = function () {
                var a = g.genGk(h.mqtt_lp_no_delay)
                    , b = g.genGk(h.mqtt_ws_polling_enabled)
                    , c = g.genGk(h.mqtt_fast_lp);
                this.$5.debugTrace("LongPollingRunner", "_shouldPoll? pollNow:" + String(a) + " enabled:" + String(b) + " fastPoll:" + String(c) + " hasWSSupport:" + String(this.$4) + " hasSuccess:" + String(this.$1) + " failureCount:" + this.$2 + " wsFatal:" + String(this.$3));
                if (!b)
                    return !1;
                if (a) {
                    this.$5.bumpCounter(m + ".nd");
                    return !0
                }
                if (!this.$4) {
                    this.$5.bumpCounter(m + ".na");
                    return !0
                }
                if (this.$3) {
                    this.$5.bumpCounter(m + ".fatal");
                    return !0
                }
                if (this.$1)
                    return !1;
                if (c) {
                    b = Date.now() - this.$20;
                    if (this.$21 === o) {
                        if (this.$2 >= 1)
                            return !0;
                        if (b > k) {
                            this.$5.bumpCounter(m + ".fastdelay");
                            return !0
                        }
                    } else if (b > l) {
                        this.$5.bumpCounter(m + ".regulardelay");
                        return !0
                    }
                }
                if (this.$2 >= 3) {
                    this.$5.bumpCounter(m + ".failure");
                    return !0
                }
                return !1
            }
            ;
            c.$29 = function () {
                if (this.$14 != null)
                    return !1;
                var a = this.$28();
                !this.$13 && a && (this.$5.bumpCounter("polling_kickin"),
                    this.$13 = !0,
                    this.$24("LPActive"),
                    this.$26());
                this.$13 && !a && (this.$5.bumpCounter("polling_stopped"),
                    this.$13 = !1,
                    this.$24("LPInactive"),
                    this.$26());
                return a
            }
            ;
            c.$30 = function () {
                if (this.$22) {
                    this.$5.debugTrace("LongPollingRunner", "Creating polling client using Fetch API");
                    return new (b("MqttFetchClient"))()
                } else {
                    this.$5.debugTrace("LongPollingRunner", "Creating regular Polling client");
                    return new (b("MqttLongPollingClient"))()
                }
            }
            ;
            c.$31 = function () {
                this.$5.debugTrace("LongPollingRunner", "Poll success"),
                    this.$19.onPollRequestSuccess(),
                    this.$18.reset(),
                    this.$24("LPActive"),
                    this.$26(),
                    g.configWrite(n, o),
                    this.$25("ReceivingData")
            }
            ;
            c.$32 = function (a) {
                var b = a.map(function (a) {
                    return a.topic
                }).join(",");
                this.$5.debugTrace("LongPollingRunner", "Poll response received, message received:" + b);
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.$19.onPollResponse(c.topic);
                    this.$8(c.topic, c.payload, c.qos)
                }
            }
            ;
            c.$33 = function () {
                this.$5.debugTrace("LongPollingRunner", "Poll finish"),
                    this.$19.onPollFinish(),
                this.$14 && this.$14.abort(),
                    this.$14 = null,
                    this.$23(),
                    this.$25("NotSent")
            }
            ;
            c.$34 = function (a) {
                this.$19.onPollRequestFailed(a),
                this.$14 && this.$14.abort(),
                    this.$14 = null,
                    this.$18(),
                    this.$27(),
                    this.$25("NotSent")
            }
            ;
            return a
        }();
        e.exports = a
    }
), null);
