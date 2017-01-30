<%@ Page Language="C#" MasterPageFile="~/ASPX/Tavas.master" AutoEventWireup="true" CodeFile="JoinUs.aspx.cs" Inherits="ASPX_JoinUs" Title="Join Tavas" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <script type="text/javascript" language="javascript">
function CountryCheck(source, args)
{
    var ddlCountry = document.getElementById("<%=ddlCountry.ClientID%>");
    var country = ddlCountry.options[ddlCountry.selectedIndex].text;
    var zipCode = document.getElementById("<%=txtZipCode.ClientID%>").value;
    if (country == "United States")
    {
        if(zipCode=='')
        {
            args.IsValid = false;
        }
        else
        {
            if(zipCode.length!=5)
            {
                args.IsValid = false;
            }
            else
            {
                args.IsValid = true;
            }
        }
        
    }
    else
    {
        args.IsValid = true;
    }
}
</script>
    <div class="page">
        <div class="content">
            <ul class="breadcrumbs">
                <li><a href="Default.aspx">Back to Home</a></li>
                <li><span>&raquo;</span></li>
                <li>Join The Team</li>
            </ul>
             <div id="divMsg" class="joinForm" >
                <label id="lblMsg" runat="server" visible="false" ></label>
            </div>
            <div class="joinForm" runat="server" id="divJoin">
                <h2>Join The Team</h2>
                <p>
                    Be a green advocate and volunteer your skills at Tavas. If you have the will, we have the way! Join our hands and together we can make a
                    difference.
                </p>
             
                <table>
                    <tr>
                        <td>
                            <label id="lblFname" runat="server">First Name<em>*</em></label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtFirstName" runat="server" MaxLength="50" TabIndex="1"></asp:TextBox>
                            <label>
                                <asp:RequiredFieldValidator ID="rfvFname" runat="server" Display="Dynamic" ErrorMessage="Please Enter First Name" ValidationGroup="save" ControlToValidate="txtFirstName">
                                </asp:RequiredFieldValidator>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label1" runat="server">
                                Last Name<em>*</em></label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtLastName" runat="server" TabIndex="2" MaxLength="50"></asp:TextBox>
                            <label>
                                <asp:RequiredFieldValidator ID="rfvLname" runat="server" Display="Dynamic" ErrorMessage="Please Enter Last Name" ValidationGroup="save" ControlToValidate="txtLastName">
                                </asp:RequiredFieldValidator>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label2" runat="server">Email<em>*</em></label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtEmail" runat="server" TabIndex="3" MaxLength="100"></asp:TextBox><label><asp:RequiredFieldValidator
                                ID="rfvEmail" runat="server" Display="Dynamic" ErrorMessage="Please Enter Email"
                                ValidationGroup="save" ControlToValidate="txtEmail">
                            </asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="revEmail" runat="server" ErrorMessage="Please Enter valid Email address"
                                    ControlToValidate="txtEmail" ValidationGroup="save" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label3" runat="server">Phone</label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtPhone" runat="server" TabIndex="4"></asp:TextBox>
                            <asp:MaskedEditExtender id="mskEdit1" runat="server"
                            TargetControlID="txtPhone" Mask="(999) 999-9999" 
                            MaskType="Number" ErrorTooltipEnabled="true" ></asp:MaskedEditExtender>                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label4" runat="server">Address 1<em>*</em></label>
                        </td>

                        <td>
                            <asp:TextBox ID="txtAddress1" runat="server" MaxLength="50" TabIndex="5"></asp:TextBox><label>
                                <asp:RequiredFieldValidator ID="rfvAddress1" runat="server" Display="Dynamic" ErrorMessage="Please Enter Address line 1"
                                    ValidationGroup="save" ControlToValidate="txtAddress1">
                            </asp:RequiredFieldValidator></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label5" runat="server">Address 2</label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtAddress2" runat="server" MaxLength="50" TabIndex="6"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label6" runat="server">Address 3</label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtAddress3" runat="server" TabIndex="7"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label7" runat="server">City<em>*</em></label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtCity" runat="server" MaxLength="50" TabIndex="8"></asp:TextBox><label>
                                <asp:RequiredFieldValidator ID="rfvCity" runat="server" Display="Dynamic" ErrorMessage="Please Enter City Name"
                                    ValidationGroup="save" ControlToValidate="txtCity">
                                                </asp:RequiredFieldValidator></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label8" runat="server">
                                State<em>*</em></label>
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlState" runat="server" TabIndex="9">
                                <asp:ListItem></asp:ListItem>
                            </asp:DropDownList>
                            
                            <label>
                                <asp:RequiredFieldValidator ID="rfvState" runat="server" Display="Dynamic" ErrorMessage="Please Select State"
                                    ValidationGroup="save" ControlToValidate="ddlState">
                                </asp:RequiredFieldValidator></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="lblZip" runat="server">ZIP<em>*</em></label>
                        </td>
                        <td>
                            <asp:TextBox ID="txtZipCode" runat="server" MaxLength="5" TabIndex="10"></asp:TextBox>
                            <label>
                                <asp:CustomValidator ID="cvZipcode" runat="server"
                                ControlToValidate="ddlCountry" Display="Dynamic" ValidationGroup="save"
                                 ErrorMessage="Please Enter valid ZIP code"  ClientValidationFunction="CountryCheck" ></asp:CustomValidator>
                                </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="Label9" runat="server">Country<em>*</em></label>
                        </td>
                        <td>
                            <asp:DropDownList ID="ddlCountry" runat="server" AutoPostBack="true" 
                                OnSelectedIndexChanged="ddlCountry_SelectedIndexChanged" TabIndex="11">
                            </asp:DropDownList>
                            <label>
                                <asp:RequiredFieldValidator ID="rfvCountry" runat="server" Display="Dynamic" ErrorMessage="Please Select Country"
                                    ValidationGroup="save" ControlToValidate="ddlCountry">
                <img src="" alt="Please Select Country" />
                                </asp:RequiredFieldValidator></label>
                        </td>
                    </tr>
                    <tr>
                    <td></td>
                        <td>
                        <asp:ImageButton CssClass="formBtns" ID="btnSubmit" runat="server" 
                                ImageUrl="../images/btn_submit.png" OnClick="btnSubmit_Click" 
                                ValidationGroup="save" TabIndex="12"/>
                        <asp:ImageButton CssClass="formBtns" ID="btnClear" runat="server"  
                                ImageUrl="../images/btn_clear.png" OnClick="btnClear_Click" TabIndex="13" />
                        </td>
                        
                    </tr>
                </table>
            </div>

        </div>
    </div>
</asp:Content>

