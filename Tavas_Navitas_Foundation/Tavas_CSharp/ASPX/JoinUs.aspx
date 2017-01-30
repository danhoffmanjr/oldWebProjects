<%@ Page Language="C#" MasterPageFile="~/ASPX/Tavas.master" AutoEventWireup="true" CodeFile="JoinUs.aspx.cs" Inherits="ASPX_JoinUs" Title="Join Tavas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<div class="page">
    <div class="content">
    
            <div id="divMsg">
                    <asp:Label ID="lblMsg" runat="server" Text="" Visible="false"></asp:Label>
            </div>
            <div class="divCover">
            <h3>Join The Team:</h3>
             <p>
            If you have the will, we have the way! Join our hands and together we can make a difference. <br />
            </P>
            <p>
             Be a green advocate and volunteer your skills at Tavas. Together we can create a cleaner and greener earth. Come join us! 
              <br /><br />
              Thank you for deciding to join Tavas Volunteer Team:
             </p>
            <table>
            <tr>
            <td><label ID="lblFname" runat="server">First Name</label></td><td><em>*</em></td>
            <td><asp:TextBox ID="txtFirstName" runat="server" MaxLength="50"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvFname" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter First Name" ValidationGroup="save" ControlToValidate="txtFirstName" >
                <img src="" alt="First name is missing." />
                </asp:RequiredFieldValidator></label></td>
            </tr>
            <tr>
            <td><label ID="Label1" runat="server">Last Name</label></td><td><em>*</em></td>
            <td><asp:TextBox ID="txtLastName" runat="server" TabIndex="1" MaxLength="50"></asp:TextBox>
            <label>                <asp:RequiredFieldValidator ID="rfvLname" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter First Name" ValidationGroup="save" ControlToValidate="txtLastName" >
                <img src="" alt="Last name is missing." />
                </asp:RequiredFieldValidator></label>
            </td>
            </tr>
            
             <tr>
                <td><label ID="Label2" runat="server">Email</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtEmail" runat="server" TabIndex="3" MaxLength="100"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvEmail" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Enail" ValidationGroup="save" ControlToValidate="txtEmail" >
                <img src="" alt="Please Enter Enail." />
                </asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revEmail" runat="server" 
                        ErrorMessage="Please Enter valid email address." ControlToValidate="txtEmail" 
                        ValidationGroup="save" 
                        ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>   
                
                </label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label3" runat="server">Phone</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                <label> 
                <asp:RequiredFieldValidator ID="rfvPhone" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Phone#." ValidationGroup="save" ControlToValidate="txtPhone" >
                <img src="" alt="Please Enter Phone#." />
                </asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revPhone" runat="server" 
                        ErrorMessage="Please Enter valid Phone Number." 
                        ControlToValidate="txtPhone" 
                        ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" 
                        ValidationGroup="save"></asp:RegularExpressionValidator>  
                </label>
                </td>
            </tr>            
            <tr>
                <td><label ID="Label4" runat="server">Address 1</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtAddress1" runat="server" MaxLength="50" TabIndex="4"></asp:TextBox><label> <asp:RequiredFieldValidator ID="rfvAddress1" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Address line 1" ValidationGroup="save" ControlToValidate="txtAddress1" >
                <img src="" alt="Please Enter Address line 1." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label5" runat="server">Address 2</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtAddress2" runat="server" MaxLength="50" TabIndex="5"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvAddress2" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Address line 2" ValidationGroup="save" ControlToValidate="txtAddress2" >
                <img src="" alt="Please Enter Address line 2." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label6" runat="server">Address 3</label>
                </td>
                <td></td>
                <td><asp:TextBox ID="txtAddress3" runat="server" TabIndex="6"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td><label ID="Label7" runat="server">City</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtCity" runat="server" MaxLength="50" TabIndex="8"></asp:TextBox><label>   <asp:RequiredFieldValidator ID="rfvCity" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter City Name" ValidationGroup="save" ControlToValidate="txtCity" >
                <img src="" alt="Please Enter City Name." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label9" runat="server">Country</label></td><td><em>*</em></td>
                <td><asp:DropDownList ID="ddlCountry" runat="server" AutoPostBack="true" 
                        onselectedindexchanged="ddlCountry_SelectedIndexChanged" TabIndex="9"></asp:DropDownList><label> <asp:RequiredFieldValidator ID="rfvCountry" runat="server" Display="Dynamic"
                ErrorMessage="Please select country" ValidationGroup="save" ControlToValidate="ddlCountry" >
                <img src="" alt="Please select country." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label8" runat="server">State</label></td><td><em>*</em></td>
                <td>
                 <asp:DropDownList ID="ddlState" runat="server" TabIndex="10">
            <asp:ListItem></asp:ListItem>
            </asp:DropDownList>
                <label><asp:RequiredFieldValidator ID="rfvState" runat="server" Display="Dynamic"
                ErrorMessage="Please select State" ValidationGroup="save" ControlToValidate="ddlState" >
                <img src="" alt="Please select state." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="lblZip" runat="server">ZIP</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtZipCode" runat="server" Height="22px" MaxLength="11" 
                        TabIndex="10"></asp:TextBox>
            <label><asp:RequiredFieldValidator ID="rfvZIP" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter ZIP code" ValidationGroup="save" ControlToValidate="txtZipCode" >
                <img src="" alt="Please Enter ZIP code." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            
          </table>
     </div>
            <div class="divCover" >
        <div style="float:left;margin-left:50px;margin-right:20px;">
            <asp:Button ID="btnSubmit" runat="server" Text="Submit" ValidationGroup="save"
                onclick="btnSubmit_Click" TabIndex="12" /></div>
        <div> 
            <asp:Button ID="btnClear" runat="server" Text="Clear" 
                onclick="btnClear_Click" TabIndex="13" />
            </div>

    </div>
    

    </div>
</div>
</asp:Content>

