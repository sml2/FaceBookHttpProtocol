using MQTTnet.Adapter;
using MQTTnet.Formatter;
using MQTTnet.Packets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace FBMQTTLib
{
    class FBPacketFormatterAdapter : MqttPacketFormatterAdapter
    {

        public FBPacketFormatterAdapter(MqttProtocolVersion protocolVersion)
            : this(protocolVersion, new MqttPacketWriter())
        {
        }

        public FBPacketFormatterAdapter(MqttProtocolVersion protocolVersion, IMqttPacketWriter writer)
            : this(writer)
        {
            UseProtocolVersion(protocolVersion);
        }

        public FBPacketFormatterAdapter(IMqttPacketWriter writer) : base(writer)
        { 
            Writer = writer;
        }
        public IMqttDataConverter DataConverter
        {
            get
            {
                ThrowIfFormatterNotSet();

                return _formatter.DataConverter;
            }
        }

        public IMqttPacketWriter Writer { get; }

  
        public MqttProtocolVersion ProtocolVersion { get; private set; } = MqttProtocolVersion.Unknown;


        private void UseProtocolVersion(MqttProtocolVersion protocolVersion)
        {
            if (protocolVersion == MqttProtocolVersion.Unknown)
            {
                throw new InvalidOperationException("MQTT protocol version is invalid.");
            }

            ProtocolVersion = protocolVersion;
            _formatter = GetMqttPacketFormatter(protocolVersion, Writer);
        }

        public static new IMqttPacketFormatter GetMqttPacketFormatter(MqttProtocolVersion protocolVersion, IMqttPacketWriter writer)
        {
            if (protocolVersion == MqttProtocolVersion.Unknown)
            {
                throw new InvalidOperationException("MQTT protocol version is invalid.");
            }

            return new FBMqttV310PacketFormatter(writer);

        }


    }
}
