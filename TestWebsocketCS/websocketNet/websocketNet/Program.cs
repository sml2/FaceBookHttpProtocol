using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using MQTTnet.Diagnostics;
using MQTTnet.Extensions.WebSocket4Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
//using uPLibrary.Networking.M2Mqtt;
//using WebSocketSharp;

namespace websocketNet
{
    class Program
    {
        static void Main(string[] args)
        {
            string ipAddress = "127.0.0.1";
            var logger = new MqttNetLogger();
            var factory = new MqttFactory(logger);
            var wsFactory = MqttFactoryExtensions.UseWebSocket4Net(factory);
            var client = wsFactory.CreateMqttClient();
            var options = new MqttClientOptionsBuilder()
                .WithProtocolVersion(MQTTnet.Formatter.MqttProtocolVersion.V310)
                .WithClientId("mqttjs_0f66d648")
                .WithWebSocketServer((MqttClientWebSocketOptions o) =>
                {
                    //o.Uri = "broker.emqx.io:8083/mqtt";
                    o.Uri = "wss://edge-chat.facebook.com/chat?region=odn&sid=8658167447683072";
                    o.RequestHeaders = new Dictionary<string, string>
                    {
                        { "Accept-Encoding", "gzip, deflate, br" },
                        { "Accept-Language", "zh-CN,zh;q=0.9" },
                        { "Cache-Control", "no-cache" },
                        { "Connection", "Upgrade" },
                        { "Host", "edge-chat.facebook.com" },
                        { "Origin", "https://www.facebook.com" },
                        { "Pragma", "no-cache" },
                        { "Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits" },
                        //{ "Sec-WebSocket-Version", "13" },
                    };
                    
                })
                .WithProxy("http://127.0.0.1:1081")
                .WithCleanSession()
                .WithCommunicationTimeout(TimeSpan.FromMinutes(5))
                .WithTls()
                .Build();
            var topic = "/send_message2";
            client.UseConnectedHandler(e =>
            {
                Console.WriteLine("### CONNECTED WITH SERVER ###");

                // Subscribe to a topic
                client.SubscribeAsync(new MqttTopicFilterBuilder().WithTopic(topic).Build()).Wait();
                //var message = new MqttApplicationMessageBuilder()
                //        .WithPayload("hello/world")
                //        .Build();
                //client.SendAsync(message, CancellationToken.None).Wait();


                Console.WriteLine("### SUBSCRIBED ###");
            });
            client.UseApplicationMessageReceivedHandler(e =>
            {
                Console.WriteLine("### RECEIVED APPLICATION MESSAGE ###");
                Console.WriteLine($"+ Topic = {e.ApplicationMessage.Topic}");
                Console.WriteLine($"+ Payload = {Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
                Console.WriteLine($"+ QoS = {e.ApplicationMessage.QualityOfServiceLevel}");
                Console.WriteLine($"+ Retain = {e.ApplicationMessage.Retain}");
                Console.WriteLine();
            });
            
            client.ConnectAsync(options).Wait();
            Console.WriteLine();
            //using (client.ConnectAsync(options))
            {

                //MqttClient client = new MqttClient(ipAddress);

                //ws.OnMessage += (sender, e) =>
                //    Console.WriteLine("[" + DateTime.Now.ToString() + "] 接收: " + e.Data);

                //ws.Connect();
                Console.WriteLine("请输入需要发送的消息(q结束):");

                string input;
                while((input = Console.ReadLine()) != "q")
                {
                    var dic = new FBMQTTLib.SendMessageData()
                    {
                        body = input,
                        sender_fbid = "100057141668433",
                        to = "100057307621405",
                        msgid = "6735459219448217170",
                        client_tags = new FBMQTTLib.SendMessageData.ClientTags()
                        {
                            tracePolicy = "comet.home",
                            web_source = "source:chat:web",
                            web_trigger = "unknown"
                        }
                    };
                    var a = dic.ToJson().Replace("\r", "");
                    //Console.WriteLine();
                    var message = new MqttApplicationMessageBuilder()
                        .WithTopic(topic)
                        .WithPayload(a)
                        .WithAtLeastOnceQoS()
                        .Build();

                    client.PublishAsync(message, CancellationToken.None).Wait();
                    Console.WriteLine("[" + DateTime.Now.ToString() + "] 发送: " + input);
                    Console.WriteLine("请输入需要发送的消息(q结束):");

                }
            }
        }
    }
}
