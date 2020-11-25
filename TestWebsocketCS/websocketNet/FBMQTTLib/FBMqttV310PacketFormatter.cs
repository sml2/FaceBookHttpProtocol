using MQTTnet.Exceptions;
using MQTTnet.Formatter;
using MQTTnet.Formatter.V3;
using MQTTnet.Packets;
using MQTTnet.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FBMQTTLib
{
    class FBMqttV310PacketFormatter : MqttV310PacketFormatter
    {
        readonly IMqttPacketWriter _packetWriter;
        public FBMqttV310PacketFormatter(IMqttPacketWriter packetWriter) : base(packetWriter)
        {
            _packetWriter = packetWriter;
        }

        protected override byte EncodeConnectPacket(MqttConnectPacket packet, IMqttPacketWriter packetWriter)
        {
            ValidateConnectPacket(packet);

            packetWriter.WriteWithLengthPrefix("MQIsdp");
            packetWriter.Write(3); // Protocol Level 3

            byte connectFlags = 0x0;
            if (packet.CleanSession)
            {
                connectFlags |= 0x2;
            }

            if (packet.WillMessage != null)
            {
                connectFlags |= 0x4;
                connectFlags |= (byte)((byte)packet.WillMessage.QualityOfServiceLevel << 3);

                if (packet.WillMessage.Retain)
                {
                    connectFlags |= 0x20;
                }
            }

            if (packet.Password != null && packet.Username == null)
            {
                throw new MqttProtocolViolationException("If the User Name Flag is set to 0, the Password Flag MUST be set to 0 [MQTT-3.1.2-22].");
            }

            if (packet.Password != null)
            {
                connectFlags |= 0x40;
            }

            if (packet.Username != null)
            {
                connectFlags |= 0x80;
            }
            //connectFlags = 0x82;
            packetWriter.Write(connectFlags);
            packetWriter.Write(packet.KeepAlivePeriod);
            packetWriter.WriteWithLengthPrefix(packet.ClientId);

            if (packet.WillMessage != null)
            {
                packetWriter.WriteWithLengthPrefix(packet.WillMessage.Topic);
                packetWriter.WriteWithLengthPrefix(packet.WillMessage.Payload);
            }

            if (packet.Username != null)
            {
                packetWriter.WriteWithLengthPrefix(packet.Username);
            }

            if (packet.Password != null)
            {
                packetWriter.WriteWithLengthPrefix(packet.Password);
            }

            return MqttPacketWriter.BuildFixedHeader(MqttControlPacketType.Connect);
        }
    }
}
