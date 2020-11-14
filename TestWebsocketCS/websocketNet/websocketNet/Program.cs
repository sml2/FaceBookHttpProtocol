using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using uPLibrary.Networking.M2Mqtt;
using WebSocketSharp;

namespace websocketNet
{
    class Program
    {
        static void Main(string[] args)
        {
            string ipAddress = "ws://127.0.0.1:10000";
            using (var ws = new WebSocket("ws://127.0.0.1:10000"))
            {
                MqttClient client = new MqttClient(ipAddress);
                ws.OnMessage += (sender, e) =>
                    Console.WriteLine("[" + DateTime.Now.ToString() + "] 接收: " + e.Data);

                ws.Connect();
                Console.WriteLine("请输入需要发送的消息(q结束):");

                string input;
                while((input = Console.ReadLine()) != "q")
                {
                    ws.Send(Encoding.UTF8.GetBytes(input));
                    Console.WriteLine("[" + DateTime.Now.ToString() + "] 发送: " + input);
                    Console.WriteLine("请输入需要发送的消息(q结束):");

                }
            }
        }
    }
}
