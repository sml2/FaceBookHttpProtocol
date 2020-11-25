using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FBMQTTLib
{
//    { 
//    "body":"nice",  // sendMessage
//    "sender_fbid":"100057141668433",  // senderUserId
//    "to":"100057097300050",  // receiverUserId
//    "msgid":"6732125521322630633", // 基于时间的随机数
//    "client_tags":{ 
//        "web_source":"source:chat:web", 
//        // "cookie"|"message_received"
//        "web:trigger":"cookie", 
//        // "comet.profile.collection.about_places"|"comet.home"
//        "tracePolicy":"comet.profile.collection.about_places" 
//    } 
//}
    public class SendMessageData
    {
        public string body { get; set; }
        public string sender_fbid { get; set; }
        public string to { get; set; }
        public string msgid { get; set; }
        public ClientTags client_tags { get; set; }


        public class ClientTags
        {
            public  string web_source { get; set; }
            public string web_trigger { get; set; }
            public string tracePolicy { get; set; }
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }
    }
}
