<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Donate.aspx.cs" Inherits="ASPX_Donate" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Welcome to Tavas Home Page</title>
    <link href="../css/reset.css" rel="stylesheet" type="text/css" />
    <link href="../css/tavashome.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="../js/jquery.tinycarousel.min.js"></script>
	<script type="text/javascript" src="../js/JScript.js"></script>
	<script type="text/javascript">
	    $(document).ready(function() {

	        $('.pnlQuote').tinycarousel({ pager: true });

	    });
	    
    </script>	
</head>
<body>
    <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" runat="server">
            <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="venkat_1295133679_biz@hotmail.com">
        <input type="hidden" name="item_name_1" value="Donation to Tavas">
        <input type="hidden" name="amount_1"  id="hdnAmt" >
        <INPUT TYPE="hidden" Name="return" id="hdnUrl" value="http://tavas.org/aspx/donate.aspx?type=s&ch=2" >
        <%--<INPUT TYPE="hidden" NAME="return" value="http://localhost:50347/Tavas/ASPX/Donate.aspx?type=s">--%>
    <asp:ToolkitScriptManager ID="toolkitScriptMaster" runat="server"></asp:ToolkitScriptManager>
    <div class="topWrap">
        <div class="topContent">
            <%--Optional Site Navigation--%>
            <a href="Default.aspx"><img class="logo" src="../images/logo_03.png" alt="Tavas Foundation" /></a>
            <%--<h1>Tavas is a non-profit organization working to enable organizations and individuals to implement their own renewable energy solutions.</h1>--%>
            <asp:ImageButton CssClass="btnJoin" ID="btnJoin" runat="server" ImageUrl="~/images/btn_join.png" PostBackUrl="~/ASPX/JoinUs.aspx" />
            <asp:ImageButton CssClass="btnDonate" ID="btnDonate" runat="server" ImageUrl="~/images/btn_donate.png" PostBackUrl="~/ASPX/Donate.aspx"  />
        </div>
    </div>
    <div class="midWrap">
        <div class="midContent">
            <div class="page">
                <div class="content">
                    <asp:Panel ID="pnlMsg" runat="server">
                    <div  class="divCover">
                        <asp:Label ID="lblMsg" runat="server" Text=""></asp:Label>
                    </div>
                    </asp:Panel>
                    <asp:Panel ID="pnlShow" runat="server">
                    <div  class="divCover">
                    <h3>Donate Now</h3><br />
                    <p> 
                    Please enter the details of your donation below
                    </p>
                    <p>
                    How do you want your donation to help?
                    <asp:RadioButtonList id="rdlChoice" runat="server">
                        <asp:ListItem Selected="True">Where ever the Tavas Project Need is Greatest.</asp:ListItem>
                        <asp:ListItem>Your Local PA/DE Fire Station. </asp:ListItem>
                    </asp:RadioButtonList>
                    </p>
                    <p>
                    <h3>Donation Information</h3><br />
                    Select Gift Amount:<br />
                    <asp:RadioButtonList id="rdlAmount" runat="server" RepeatDirection="Horizontal" RepeatLayout="Flow" >
                        <asp:ListItem  Value="10" onClick="setAmount('10');">$10</asp:ListItem>
                        <asp:ListItem  Value="20" onClick="setAmount('20');">$20</asp:ListItem>
                        <asp:ListItem  Value="50" onClick="setAmount('50');">$50</asp:ListItem>
                        <asp:ListItem  Value="100" onClick="setAmount('100');">$100</asp:ListItem>
                        <asp:ListItem  Value="0" onClick="setAmount('0');">Other</asp:ListItem>
                    </asp:RadioButtonList>
                    <asp:TextBox ID="txtAmount" runat="server" enabled="false"></asp:TextBox>
                    </p>
                    
                    </div>
                     <div class="divCover" >
                      <input type="submit" name="submit" value="Submit" onclick="SendAmount();" >
                     </div>
                    </asp:Panel>
                 
                </div>
                 
            </div>
            <div class="sidebar">
                <div class="pnlQuote">
                    <ul class="pager">
                        <li><a rel="0" class="pagenum" href="#">&#8226;</a></li>
                        <li><a rel="1" class="pagenum" href="#">&#8226;</a></li>
                        <li><a rel="2" class="pagenum" href="#">&#8226;</a></li>
                        <li><a rel="3" class="pagenum" href="#">&#8226;</a></li>
                        <li><a rel="4" class="pagenum" href="#">&#8226;</a></li>
                    </ul>
                    <div class="viewport">
                        <ul class="overview">
                            <li>
                                <p>
                                    I'd put my money on the sun and solar energy. What a source of power! I hope we
                                    don't have to wait 'til oil and coal run out before we tackle that.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Thomas Edison</p>
                            </li>
                            <li>
                                <p>
                                    To waste, to destroy our natural resources, to skin and exhaust the land instead
                                    of using it so as to increase its usefulness, will result in undermining in the
                                    days of our children the very prosperity which we ought by right to hand down to
                                    them amplified and developed.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Theodore Roosevelt</p>
                            </li>
                            <li>
                                <p>
                                    We simply must balance our demand for energy with our rapidly shrinking resources.
                                    By acting now we can control our future instead of letting the future control us.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Jimmy Carter</p>
                            </li>
                            <li>
                                <p>
                                    The answer is to end our reliance on carbon-based fuels... If we succeed, we create
                                    booming new industries, wealth, clean secure energy and maybe we prevent the greatest
                                    disaster so far in human history, saving millions of lives while improving billions
                                    more. If we fail, basically it's business as usual while things slowly get worse
                                    all around us. 
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Al Gore</p>
                            </li>
                            <li>
                                <p>
                                    I urge individuals around the world to stand up, and ask local leaders, if they
                                    haven't already, to pledge to purchase cleaner cars, build green facilities, and
                                    buy green power like wind or solar energy. Our actions may determine if we become
                                    a casualty in the war for a habitable planet for generations to come.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Leonardo DiCaprio</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pnlSidebarTabs">
                    <asp:tabcontainer CssClass="sidetabs" ID="Tabcontainer2" runat="server" EnableTheming="true" ActiveTabIndex="0">
                        <asp:TabPanel HeaderText="Events" TabIndex="0" ID="sidetab1" runat="server">
                            <ContentTemplate>
                                <div class="pnlEvents" >
                                   <h3>Follow us</h3>
                                    <ul>
                                        <li><a href="http://www.facebook.com/pages/Tavas-Its-Your-Power-Own-It/172366689470665" target="_blank">
                                        <img src="../images/facebook - Copy.gif" border=0 width=90 height=20 class=ico></a>
                                        </li>
                                        <li><a href="http://www.twitter.com/vhebbar" target="_blank"><img src="http://twitter-badges.s3.amazonaws.com/
twitter-a.png" alt="Follow vhebbar on Twitter"/></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </ContentTemplate>
                        </asp:TabPanel>
                        <asp:TabPanel HeaderText="Projects" TabIndex="1" ID="sidetab2" runat="server">
                            <ContentTemplate>
                                <div class="pnlNews" >
                                     <h3>Projects</h3>
                                    <ul>
                                        <li>Coming soon..</li>
                                    </ul>
                                </div>
                            </ContentTemplate>
                        </asp:TabPanel>
                        <asp:TabPanel HeaderText="Partners" TabIndex="2" ID="sidetab3" runat="server">
                            <ContentTemplate>
                                <div class="pnlBlog" >
                                    <h3>Partners</h3>
                                    <ul>
                                       <li>Coming soon..</li>
                                    </ul>
                                </div>
                            </ContentTemplate>
                        </asp:TabPanel>
                    </asp:tabcontainer>
                </div>
                <div class="pnlContact">
                    <h3>Get in Touch</h3>
                    <ul>
                        <li><img src="../images/icon_mail.png" alt="email" />ownpower@tavas.org</li>
                        <li><img src="../images/icon_phone.png" alt="phone" />201.294.5040</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footerWrap">
        <p>Tavas &copy; 2010. All rights reserved.</p>
        <p><a href="PrivacyPolicy.aspx">Privacy Policy</a></p>
    </div>
    </form>
</body>
</html>
