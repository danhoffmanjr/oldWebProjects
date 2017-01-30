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

public partial class ASPX_ReadMore : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        divHowWork.Visible = false;
        divImpact.Visible = false;
        if (Request.QueryString["Type"] != null)
        {
            if (Request.QueryString["Type"].ToString() == "how")
            {
                divHowWork.Visible = true;
            }
            if (Request.QueryString["Type"].ToString() == "Impact")
            {
                divImpact.Visible = true;
            }
        }
    }
}
