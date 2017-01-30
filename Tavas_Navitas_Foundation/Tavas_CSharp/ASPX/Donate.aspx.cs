using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Net.Mail;
using System.Text;
using Tavas;
public partial class ASPX_Donate : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string returnType =string.Empty;
        pnlMsg.Visible=false;
        pnlShow.Visible = true;
        string msg = string.Empty;
        try
        {
            if (Request.QueryString["type"]!= null)
            {
                returnType=Request.QueryString["type"].ToString();
               
                if (returnType == "s")
                {
                    msg = ConfigurationManager.AppSettings["donationThnx"].ToString();
                    pnlShow.Visible = false;
                    pnlMsg.Visible = true;
                    lblMsg.Text = msg;
                    if(Request.QueryString["choice"]!=null)
                    {
                        sendEmail("10", Request.QueryString["choice"].ToString());
                    }
                }
                if (returnType == "F")
                {
                    pnlShow.Visible = false;
                    pnlMsg.Visible = true;
                    lblMsg.Text = "Your donation was not recevied.";
                }
            }

        }
        catch (Exception ex )
        {
            pnlMsg.Visible = true;
            lblMsg.Text="We applogize for the incovinence, but there has been some problem with the page. Please try again";
        }
    }

    private void sendEmail(string argAmt,string argChoice)
    {
        try
        {
            MailMessage email = new MailMessage();
            StringBuilder emailMsg = new StringBuilder();
            string toEmailId = string.Empty;
            string sentMsg = string.Empty;
            try
            {
                toEmailId = ConfigurationManager.AppSettings["donationPass"].ToString();
                email.To.Add(toEmailId);
                email.From = new MailAddress(ConfigurationManager.AppSettings["tavasAdmin"].ToString());
                email.Subject = "Donation received";
                emailMsg.Append("Donation of $"+ argAmt + " has been received.<br/>");
                if (argChoice == "0")
                {
                    emailMsg.Append("Donar has opted for  - Where ever the Tavas Project Need is Greatest.");
                }
                else
                {
                    emailMsg.Append("Donar has opted for  - Where ever the Tavas Project Need is Greatest.");
                }
                
                email.Body = emailMsg.ToString();
                EmailHandler.SendEmail(email);    
            }
            catch (Exception ex)
            {

                lblMsg.Text = ex.Message.ToString();
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
}
