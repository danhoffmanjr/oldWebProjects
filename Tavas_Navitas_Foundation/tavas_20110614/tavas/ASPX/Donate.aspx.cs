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

public partial class ASPX_Donate : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string returnType =string.Empty;
        pnlMsg.Visible=false;
        try
        {
            if (Request.QueryString["type"]== null)
            {
                showDonation();
            }
            else
            {
                returnType=Request.QueryString["type"].ToString();
                if (returnType == "s")
                {
                    pnlShow.Visible = false;
                    pnlMsg.Visible = true;
                    lblMsg.Text = "Your donation has been received.";
                    sendEmail();
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

    private void sendEmail()
    {
        try
        {
            //set session variables;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private void showDonation()
    {
        try
        {
            //set session variables;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        
    }
}
