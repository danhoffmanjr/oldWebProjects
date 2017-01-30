using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Net.Mail;
namespace Tavas
{

    /// <summary>
    /// Summary description for EmailHandler
    /// </summary>
    public static class EmailHandler
    {
        public static void SendEmail(MailMessage argEmail)
        {
            try
            {
                SmtpClient MailObj1 = new SmtpClient();
                SmtpClient MailObj = new SmtpClient("relay-hosting.secureserver.net", 25);
                MailObj.DeliveryMethod = SmtpDeliveryMethod.Network;
                argEmail.IsBodyHtml = true;
                MailObj.Send(argEmail);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

