using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            EncryptionService encryptionService = new EncryptionService();

            string secretmsg = "Fb0000";
            byte[] nonce = encryptionService.Nonce();
            string key = encryptionService.NewKey();


            string encryptMsg = encryptionService.EncryptWithKey(nonce, secretmsg, key);
            Console.WriteLine(encryptMsg);
            Console.WriteLine(encryptMsg.Length.ToString());

            string plaintext = encryptionService.DecryptWithKey(encryptMsg, key);
            Console.WriteLine(plaintext);

            Console.Read();
        }
      
    }
}
