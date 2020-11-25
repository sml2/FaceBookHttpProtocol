using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FBMQTTLib
{
    public class AuthenticateData
    {
        // userId
        public string u { get; set; }
        // sid
        public long s { get; set; }
        // MqttWebConfig.clientCapabilities 
        public short cp { get; set; }
        // MqttWebConfig.capabilities
        public short ecp { get; set; }
        // MqttWebConfig.chatVisibility
        public bool chat_on { get; set; }
        // gkx?
        public bool fg { get; set; }
        // uuid
        //"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) { 
        //        var b = Math.random() * 16 | 0; 
        //        a = a == "x" ? b : b & 3 | 8; 
        //        return a.toString(16) 
        //    })
        public string d { get; set; }
        // fixed
        public string ct = "websocket";
        // fixed
        public string mqtt_sid = "";
        // MqttWebConfig.appId
        public long aid { get; set; }
        // MqttWebConfig.subscribedTopics
        public List<string> st { get; set; }
        // extraConnectMessageProvider
        public List<string> pm { get; set; }
        // fixed
        public string dc = "";
        public bool no_auto_fg { get; set; }
        // guestAuthString
        public string gas { get; set; }
        public List<string> pack { get; set; }


        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
