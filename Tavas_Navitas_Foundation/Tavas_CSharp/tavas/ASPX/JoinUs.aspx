﻿<%@ Page Language="C#" MasterPageFile="~/ASPX/Tavas.master" AutoEventWireup="true" CodeFile="JoinUs.aspx.cs" Inherits="ASPX_JoinUs" Title="Join Tavas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<div class="page">
    <div class="content">
    <asp:UpdatePanel ID="upd1" runat="server">
        <ContentTemplate>
            <div id="divMsg">
                    <asp:Label ID="lblMsg" runat="server" Text="" Visible="false"></asp:Label>
            </div>
            <div class="divCover">
             <p>
             If you like to help us you have come to the right place. We need your help with Fundraising, volunteer or other team activities. 
             <br />
              Please send us your contact details and we will reach out to you. 
              <br /><br />
              Thank you for deciding to join Tavas Volunteer Team:
             </p>
            <table>
            <tr>
            <td><label ID="lblFname" runat="server">First Name</label></td><td><em>*</em></td>
            <td><asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvFname" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter First Name" ValidationGroup="save" ControlToValidate="txtFirstName" >
                <img src="" alt="First name is missing." />
                </asp:RequiredFieldValidator></label></td>
            </tr>
            <tr>
            <td><label ID="Label1" runat="server">Last Name</label></td><td><em>*</em></td>
            <td><asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
            <label>                <asp:RequiredFieldValidator ID="rfvLname" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter First Name" ValidationGroup="save" ControlToValidate="txtLastName" >
                <img src="" alt="Last name is missing." />
                </asp:RequiredFieldValidator></label>
            </td>
            </tr>
            
             <tr>
                <td><label ID="Label2" runat="server">Email</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtEmail" runat="server"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvEmail" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Enail" ValidationGroup="save" ControlToValidate="txtEmail" >
                <img src="" alt="Please Enter Enail." />
                </asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="rfvRgEmail" runat="server" 
                ErrorMessage="Invalid Email Address" ControlToValidate="txtEmail" ValidationExpression="\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b" ></asp:RegularExpressionValidator>
                </label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label3" runat="server">Phone</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtPhone" runat="server"></asp:TextBox><label> <asp:RequiredFieldValidator ID="rfvPhone" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Phone#." ValidationGroup="save" ControlToValidate="txtPhone" >
                <img src="" alt="Please Enter Phone#." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>            
            <tr>
                <td><label ID="Label4" runat="server">Address 1</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtAddress1" runat="server"></asp:TextBox><label> <asp:RequiredFieldValidator ID="rfvAddress1" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Address line 1" ValidationGroup="save" ControlToValidate="txtAddress1" >
                <img src="" alt="Please Enter Address line 1." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label5" runat="server">Address 2</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtAddress2" runat="server"></asp:TextBox><label><asp:RequiredFieldValidator ID="rfvAddress2" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter Address line 2" ValidationGroup="save" ControlToValidate="txtAddress2" >
                <img src="" alt="Please Enter Address line 2." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label6" runat="server">Address 3</label>
                </td>
                <td></td>
                <td><asp:TextBox ID="txtAddress3" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td><label ID="Label7" runat="server">City</label></td><td><em>*</em></td>
                <td><asp:TextBox ID="txtCity" runat="server"></asp:TextBox><label>   <asp:RequiredFieldValidator ID="rfvCity" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter City Name" ValidationGroup="save" ControlToValidate="txtCity" >
                <img src="" alt="Please Enter City Name." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label8" runat="server">State</label></td><td><em>*</em></td>
                <td>
                 <asp:DropDownList ID="ddlState" runat="server">
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
                <td><asp:TextBox ID="txtZipCode" runat="server"></asp:TextBox>
            <label><asp:RequiredFieldValidator ID="rfvZIP" runat="server" Display="Dynamic"
                ErrorMessage="Please Enter ZIP code" ValidationGroup="save" ControlToValidate="txtZipCode" >
                <img src="" alt="Please Enter ZIP code." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
            <tr>
                <td><label ID="Label9" runat="server">Country</label></td><td><em>*</em></td>
                <td><asp:DropDownList ID="ddlCountry" runat="server" AutoPostBack="true" 
                        onselectedindexchanged="ddlCountry_SelectedIndexChanged"></asp:DropDownList><label> <asp:RequiredFieldValidator ID="rfvCountry" runat="server" Display="Dynamic"
                ErrorMessage="Please select country" ValidationGroup="save" ControlToValidate="ddlCountry" >
                <img src="" alt="Please select country." />
                </asp:RequiredFieldValidator></label>
                </td>
            </tr>
          </table>
     </div>
            <div class="divCover" >
        <div style="float:left;margin-left:50px;margin-right:20px;">
            <asp:Button ID="btnSubmit" runat="server" Text="Submit" ValidationGroup="save"
                onclick="btnSubmit_Click" /></div>
        <div> <asp:Button ID="btnClear" runat="server" Text="Clear" 
                onclick="btnClear_Click" />
            </div>

    </div>
        </ContentTemplate>
    </asp:UpdatePanel>

    </div>
</div>
</asp:Content>

