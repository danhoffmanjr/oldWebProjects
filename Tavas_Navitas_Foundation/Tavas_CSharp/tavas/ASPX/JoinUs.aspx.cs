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

public partial class ASPX_JoinUs : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            lblMsg.Visible = false;
            if (!Page.IsPostBack)
            {
                InitialisePage();
            }
        }
        catch (Exception)
        {

            throw;
        }



    }
    private void InitialisePage()
    {
        try
        {
            ddlState.Items.Clear();
            FillUsaStates();
            FillCountryList();
        }
        catch (Exception)
        {
            throw;
        }
    }

    private void FillCountryList()
    {
        try
        {
            ddlCountry.Items.Clear();
            ddlCountry.Items.Add("");
            ddlCountry.Items.Add("Afghanistan");
            ddlCountry.Items.Add("Albania");
            ddlCountry.Items.Add("Algeria");
            ddlCountry.Items.Add("American Samoa");
            ddlCountry.Items.Add("Andorra");
            ddlCountry.Items.Add("Angola");
            ddlCountry.Items.Add("Anguilla");
            ddlCountry.Items.Add("Antarctica");
            ddlCountry.Items.Add("Antigua and Barbuda");
            ddlCountry.Items.Add("Argentina");
            ddlCountry.Items.Add("Armenia");
            ddlCountry.Items.Add("Aruba");
            ddlCountry.Items.Add("Australia");
            ddlCountry.Items.Add("Austria");
            ddlCountry.Items.Add("Azerbaijan");
            ddlCountry.Items.Add("Bahamas");
            ddlCountry.Items.Add("Bahrain");
            ddlCountry.Items.Add("Bangladesh");
            ddlCountry.Items.Add("Barbados");
            ddlCountry.Items.Add("Belarus");
            ddlCountry.Items.Add("Belgium");
            ddlCountry.Items.Add("Belize");
            ddlCountry.Items.Add("Benin");
            ddlCountry.Items.Add("Bermuda");
            ddlCountry.Items.Add("Bhutan");
            ddlCountry.Items.Add("Bolivia");
            ddlCountry.Items.Add("Bosnia and Herzegovina");
            ddlCountry.Items.Add("Botswana");
            ddlCountry.Items.Add("Brazil");
            ddlCountry.Items.Add("British Indian Ocean Territory");
            ddlCountry.Items.Add("British Virgin Islands");
            ddlCountry.Items.Add("Brunei");
            ddlCountry.Items.Add("Bulgaria");
            ddlCountry.Items.Add("Burkina Faso");
            ddlCountry.Items.Add("Burma (Myanmar)");
            ddlCountry.Items.Add("Burundi");
            ddlCountry.Items.Add("Cambodia");
            ddlCountry.Items.Add("Cameroon");
            ddlCountry.Items.Add("Canada");
            ddlCountry.Items.Add("Cape Verde");
            ddlCountry.Items.Add("Cayman Islands");
            ddlCountry.Items.Add("Central African Republic");
            ddlCountry.Items.Add("Chad");
            ddlCountry.Items.Add("Chile");
            ddlCountry.Items.Add("China");
            ddlCountry.Items.Add("Christmas Island");
            ddlCountry.Items.Add("Cocos (Keeling) Islands");
            ddlCountry.Items.Add("Colombia");
            ddlCountry.Items.Add("Comoros");
            ddlCountry.Items.Add("Cook Islands");
            ddlCountry.Items.Add("Costa Rica");
            ddlCountry.Items.Add("Croatia");
            ddlCountry.Items.Add("Cuba");
            ddlCountry.Items.Add("Cyprus");
            ddlCountry.Items.Add("Czech Republic");
            ddlCountry.Items.Add("Democratic Republic of the Congo");
            ddlCountry.Items.Add("Denmark");
            ddlCountry.Items.Add("Djibouti");
            ddlCountry.Items.Add("Dominica");
            ddlCountry.Items.Add("Dominican Republic");
            ddlCountry.Items.Add("Ecuador");
            ddlCountry.Items.Add("Egypt");
            ddlCountry.Items.Add("El Salvador");
            ddlCountry.Items.Add("Equatorial Guinea");
            ddlCountry.Items.Add("Eritrea");
            ddlCountry.Items.Add("Estonia");
            ddlCountry.Items.Add("Ethiopia");
            ddlCountry.Items.Add("Falkland Islands");
            ddlCountry.Items.Add("Faroe Islands");
            ddlCountry.Items.Add("Fiji");
            ddlCountry.Items.Add("Finland");
            ddlCountry.Items.Add("France");
            ddlCountry.Items.Add("French Polynesia");
            ddlCountry.Items.Add("Gabon");
            ddlCountry.Items.Add("Gambia");
            ddlCountry.Items.Add("Gaza Strip");
            ddlCountry.Items.Add("Georgia");
            ddlCountry.Items.Add("Germany");
            ddlCountry.Items.Add("Ghana");
            ddlCountry.Items.Add("Gibraltar");
            ddlCountry.Items.Add("Greece");
            ddlCountry.Items.Add("Greenland");
            ddlCountry.Items.Add("Grenada");
            ddlCountry.Items.Add("Guam");
            ddlCountry.Items.Add("Guatemala");
            ddlCountry.Items.Add("Guinea");
            ddlCountry.Items.Add("Guinea-Bissau");
            ddlCountry.Items.Add("Guyana");
            ddlCountry.Items.Add("Haiti");
            ddlCountry.Items.Add("Holy See (Vatican City)");
            ddlCountry.Items.Add("Honduras");
            ddlCountry.Items.Add("Hong Kong");
            ddlCountry.Items.Add("Hungary");
            ddlCountry.Items.Add("Iceland");
            ddlCountry.Items.Add("India");
            ddlCountry.Items.Add("Indonesia");
            ddlCountry.Items.Add("Iran");
            ddlCountry.Items.Add("Iraq");
            ddlCountry.Items.Add("Ireland");
            ddlCountry.Items.Add("Isle of Man");
            ddlCountry.Items.Add("Israel");
            ddlCountry.Items.Add("Italy");
            ddlCountry.Items.Add("Ivory Coast");
            ddlCountry.Items.Add("Jamaica");
            ddlCountry.Items.Add("Japan");
            ddlCountry.Items.Add("Jersey");
            ddlCountry.Items.Add("Jordan");
            ddlCountry.Items.Add("Kazakhstan");
            ddlCountry.Items.Add("Kenya");
            ddlCountry.Items.Add("Kiribati");
            ddlCountry.Items.Add("Kosovo");
            ddlCountry.Items.Add("Kuwait");
            ddlCountry.Items.Add("Kyrgyzstan");
            ddlCountry.Items.Add("Laos");
            ddlCountry.Items.Add("Latvia");
            ddlCountry.Items.Add("Lebanon");
            ddlCountry.Items.Add("Lesotho");
            ddlCountry.Items.Add("Liberia");
            ddlCountry.Items.Add("Libya");
            ddlCountry.Items.Add("Liechtenstein");
            ddlCountry.Items.Add("Lithuania");
            ddlCountry.Items.Add("Luxembourg");
            ddlCountry.Items.Add("Macau");
            ddlCountry.Items.Add("Macedonia");
            ddlCountry.Items.Add("Madagascar");
            ddlCountry.Items.Add("Malawi");
            ddlCountry.Items.Add("Malaysia");
            ddlCountry.Items.Add("Maldives");
            ddlCountry.Items.Add("Mali");
            ddlCountry.Items.Add("Malta");
            ddlCountry.Items.Add("Marshall Islands");
            ddlCountry.Items.Add("Mauritania");
            ddlCountry.Items.Add("Mauritius");
            ddlCountry.Items.Add("Mayotte");
            ddlCountry.Items.Add("Mexico");
            ddlCountry.Items.Add("Micronesia");
            ddlCountry.Items.Add("Moldova");
            ddlCountry.Items.Add("Monaco");
            ddlCountry.Items.Add("Mongolia");
            ddlCountry.Items.Add("Montenegro");
            ddlCountry.Items.Add("Montserrat");
            ddlCountry.Items.Add("Morocco");
            ddlCountry.Items.Add("Mozambique");
            ddlCountry.Items.Add("Namibia");
            ddlCountry.Items.Add("Nauru");
            ddlCountry.Items.Add("Nepal");
            ddlCountry.Items.Add("Netherlands");
            ddlCountry.Items.Add("Netherlands Antilles");
            ddlCountry.Items.Add("New Caledonia");
            ddlCountry.Items.Add("New Zealand");
            ddlCountry.Items.Add("Nicaragua");
            ddlCountry.Items.Add("Niger");
            ddlCountry.Items.Add("Nigeria");
            ddlCountry.Items.Add("Niue");
            ddlCountry.Items.Add("Norfolk Island");
            ddlCountry.Items.Add("North Korea");
            ddlCountry.Items.Add("Northern Mariana Islands");
            ddlCountry.Items.Add("Norway");
            ddlCountry.Items.Add("Oman");
            ddlCountry.Items.Add("Pakistan");
            ddlCountry.Items.Add("Palau");
            ddlCountry.Items.Add("Panama");
            ddlCountry.Items.Add("Papua New Guinea");
            ddlCountry.Items.Add("Paraguay");
            ddlCountry.Items.Add("Peru");
            ddlCountry.Items.Add("Philippines");
            ddlCountry.Items.Add("Pitcairn Islands");
            ddlCountry.Items.Add("Poland");
            ddlCountry.Items.Add("Portugal");
            ddlCountry.Items.Add("Puerto Rico");
            ddlCountry.Items.Add("Qatar");
            ddlCountry.Items.Add("Republic of the Congo");
            ddlCountry.Items.Add("Romania");
            ddlCountry.Items.Add("Russia");
            ddlCountry.Items.Add("Rwanda");
            ddlCountry.Items.Add("Saint Barthelemy");
            ddlCountry.Items.Add("Saint Helena");
            ddlCountry.Items.Add("Saint Kitts and Nevis");
            ddlCountry.Items.Add("Saint Lucia");
            ddlCountry.Items.Add("Saint Martin");
            ddlCountry.Items.Add("Saint Pierre and Miquelon");
            ddlCountry.Items.Add("Saint Vincent and the Grenadines");
            ddlCountry.Items.Add("Samoa");
            ddlCountry.Items.Add("San Marino");
            ddlCountry.Items.Add("Sao Tome and Principe");
            ddlCountry.Items.Add("Saudi Arabia");
            ddlCountry.Items.Add("Senegal");
            ddlCountry.Items.Add("Serbia");
            ddlCountry.Items.Add("Seychelles");
            ddlCountry.Items.Add("Sierra Leone");
            ddlCountry.Items.Add("Singapore");
            ddlCountry.Items.Add("Slovakia");
            ddlCountry.Items.Add("Slovenia");
            ddlCountry.Items.Add("Solomon Islands");
            ddlCountry.Items.Add("Somalia");
            ddlCountry.Items.Add("South Africa");
            ddlCountry.Items.Add("South Korea");
            ddlCountry.Items.Add("Spain");
            ddlCountry.Items.Add("Sri Lanka");
            ddlCountry.Items.Add("Sudan");
            ddlCountry.Items.Add("Suriname");
            ddlCountry.Items.Add("Svalbard");
            ddlCountry.Items.Add("Swaziland");
            ddlCountry.Items.Add("Sweden");
            ddlCountry.Items.Add("Switzerland");
            ddlCountry.Items.Add("Syria");
            ddlCountry.Items.Add("Taiwan");
            ddlCountry.Items.Add("Tajikistan");
            ddlCountry.Items.Add("Tanzania");
            ddlCountry.Items.Add("Thailand");
            ddlCountry.Items.Add("Timor-Leste");
            ddlCountry.Items.Add("Togo");
            ddlCountry.Items.Add("Tokelau");
            ddlCountry.Items.Add("Tonga");
            ddlCountry.Items.Add("Trinidad and Tobago");
            ddlCountry.Items.Add("Tunisia");
            ddlCountry.Items.Add("Turkey");
            ddlCountry.Items.Add("Turkmenistan");
            ddlCountry.Items.Add("Turks and Caicos Islands");
            ddlCountry.Items.Add("Tuvalu");
            ddlCountry.Items.Add("Uganda");
            ddlCountry.Items.Add("Ukraine");
            ddlCountry.Items.Add("United Arab Emirates");
            ddlCountry.Items.Add("United Kingdom");
            ddlCountry.Items.Add("United States");
            ddlCountry.Items.Add("Uruguay");
            ddlCountry.Items.Add("US Virgin Islands");
            ddlCountry.Items.Add("Uzbekistan");
            ddlCountry.Items.Add("Vanuatu");
            ddlCountry.Items.Add("Venezuela");
            ddlCountry.Items.Add("Vietnam");
            ddlCountry.Items.Add("Wallis and Futuna");
            ddlCountry.Items.Add("West Bank");
            ddlCountry.Items.Add("Western Sahara");
            ddlCountry.Items.Add("Yemen");
            ddlCountry.Items.Add("Zambia");
            ddlCountry.Items.Add("Zimbabwe");

        }
        catch (Exception)
        {
            throw;
        }
    }
    private void FillUsaStates()
    {
        try
        {
            ddlState.Items.Clear();
            ddlState.Items.Add("");
            ddlState.Items.Add("AL");
            ddlState.Items.Add("AK");
            ddlState.Items.Add("AZ");
            ddlState.Items.Add("AR");
            ddlState.Items.Add("CA");
            ddlState.Items.Add("CO");
            ddlState.Items.Add("CT");
            ddlState.Items.Add("DE");
            ddlState.Items.Add("FL");
            ddlState.Items.Add("GA");
            ddlState.Items.Add("HI");
            ddlState.Items.Add("ID");
            ddlState.Items.Add("IL");
            ddlState.Items.Add("IN");
            ddlState.Items.Add("IA");
            ddlState.Items.Add("KS");
            ddlState.Items.Add("KY");
            ddlState.Items.Add("LA");
            ddlState.Items.Add("ME");
            ddlState.Items.Add("MD");
            ddlState.Items.Add("MA");
            ddlState.Items.Add("MI");
            ddlState.Items.Add("MN");
            ddlState.Items.Add("MS");
            ddlState.Items.Add("MO");
            ddlState.Items.Add("MT");
            ddlState.Items.Add("NE");
            ddlState.Items.Add("NV");
            ddlState.Items.Add("NH");
            ddlState.Items.Add("NJ");
            ddlState.Items.Add("NM");
            ddlState.Items.Add("NY");
            ddlState.Items.Add("NC");
            ddlState.Items.Add("ND");
            ddlState.Items.Add("OH");
            ddlState.Items.Add("OK");
            ddlState.Items.Add("OR");
            ddlState.Items.Add("PA");
            ddlState.Items.Add("RI");
            ddlState.Items.Add("SC");
            ddlState.Items.Add("SD");
            ddlState.Items.Add("TN");
            ddlState.Items.Add("TX");
            ddlState.Items.Add("UT");
            ddlState.Items.Add("VT");
            ddlState.Items.Add("VA");
            ddlState.Items.Add("WA");
            ddlState.Items.Add("WV");
            ddlState.Items.Add("WI");
            ddlState.Items.Add("DC");

        }
        catch (Exception)
        {
            throw;
        }
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        MailMessage email = new MailMessage();
        StringBuilder emailMsg = new StringBuilder();
        SmtpClient MailObj1 = new SmtpClient();
        string toEmailId =string.Empty;
        string sentMsg = string.Empty;
        try
        {
            SmtpClient MailObj = new SmtpClient("relay-hosting.secureserver.net", 25);
            sentMsg = ConfigurationManager.AppSettings["joinUsMsg"].ToString();
            //MailObj.Credentials =   CredentialCache.DefaultNetworkCredentials;
            MailObj.DeliveryMethod = SmtpDeliveryMethod.Network;
            string mailHostId = string.Empty;
            if (Page.IsValid)
            {
                //email.To.Add("ashish.parbhakar@gmail.com");
                toEmailId = ConfigurationManager.AppSettings["joinUsTo"].ToString();
                email.To.Add(toEmailId);
                
                email.From = new MailAddress(txtEmail.Text);
                email.Subject = "Request for joining";
                emailMsg.Append("Test body <br />");
                emailMsg.Append("First Name : " + txtFirstName.Text + "<br/>");
                emailMsg.Append("Last Name : " + txtLastName.Text + "<br/>");
                emailMsg.Append("Phone : " + txtPhone.Text + "<br/>");
                emailMsg.Append("Address : " + txtAddress1.Text);
                if (txtAddress2.Text.Trim().Length > 0)
                {
                    emailMsg.Append("-" + txtAddress2.Text);
                }
                if (txtAddress3.Text.Trim().Length > 0)
                {
                    emailMsg.Append("-" + txtAddress3.Text);
                }
                emailMsg.Append("<br/>");
                emailMsg.Append("City : " + txtCity.Text + "<br/>");
                emailMsg.Append("State : " + ddlState.Text + "<br/>");
                emailMsg.Append("Country : " + ddlCountry.Text  + "<br/>");
                emailMsg.Append("Zip : " + txtZipCode.Text  + "<br/>");

                email.Body=emailMsg.ToString();
                email.IsBodyHtml=true ;
            //    mailHostId = ConfigurationManager.AppSettings["mailHost"].ToString();
                //MailObj.Host = "relay-hosting.secureserver.net";
              //  MailObj.Host = mailHostId; 
                MailObj.Send(email);
                lblMsg.Visible = true;
                lblMsg.Text = sentMsg;
            }
        }
        catch (Exception ex)
        {

            lblMsg.Text = ex.Message.ToString();
        }
        
        
    }
    protected void btnClear_Click(object sender, EventArgs e)
    {

    }
    protected void ddlCountry_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlCountry.SelectedItem != null)
        {
            if (ddlCountry.SelectedItem.Text != "United States")
            {
                ddlState.Items.Clear();
                ddlState.Items.Add("N/A");
            }
            else
            {
                FillUsaStates();
            }
        }
    }
}
