<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Donate.aspx.cs" Inherits="ASPX_Donate" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Thank You for Donating to Tavas</title>
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
<%--    <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" runat="server">
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="upload" value="1" />
        <input type="hidden" name="business" value="venkat_1295133679_biz@hotmail.com" />
        <input type="hidden" name="item_name_1" value="Donation to Tavas" />
        <input type="hidden" name="amount_1"  id="hdnAmt" />
        <input type="hidden" name="return" id="hdnUrl" value="http://tavas.org/aspx/donate.aspx?type=s&ch=2" />--%>    
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" runat="server">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="ownpower@tavas.org">
        <input type="hidden" name="item_name_1" value="Donation to Tavas">
        <input type="hidden" name="amount_1"   id="hdnAmt" />
        <input type="hidden" name="return" id="hdnUrl" value="http://tavas.org/aspx/donate.aspx?type=s" />
        <%--<input type="submit" name="submit" value="submit">--%>
              
    <asp:ToolkitScriptManager ID="toolkitScriptMaster" runat="server"></asp:ToolkitScriptManager>
    <div class="topWrap">
        <div class="topContent">
            <%--Optional Site Navigation--%>
            <%--<ul class="navMain">
                <li><a class="homeActive" href="default.aspx" title="Home"><span>Home</span></a></li>
                <li><a class="about" href="default.aspx" title="About"><span>About</span></a></li>
                <li><a class="contact" href="default.aspx" title="Contact"><span>Contact</span></a></li>
                <li><a class="events" href="default.aspx" title="Events"><span>Events</span></a></li>
                <li><a class="news" href="default.aspx" title="News"><span>News</span></a></li>
                <li><a class="blog" href="default.aspx" title="Blog"><span>Blog</span></a></li>
            </ul>--%>
            <a href="Default.aspx" class="logo" title="Click to return to Tavas homepage"><img src="../images/logo_02.png" alt="Tavas. It's Your Power. Own it!" /></a>
            <asp:ImageButton CssClass="btnJoin" ID="btnJoin" runat="server" ImageUrl="~/images/btn_join.png" PostBackUrl="~/ASPX/JoinUs.aspx" />
            <asp:ImageButton CssClass="btnDonate" ID="btnDonate" runat="server" ImageUrl="~/images/btn_donate.png" PostBackUrl="~/ASPX/Donate.aspx"  />
        </div>
    </div>
    <div class="midWrap">
        <div class="midContent">
        <%--START: Donate page specific content. All other content should be the same as Tavas.master--%>
            <div class="page">
                <div class="content">
                    <ul class="breadcrumbs">
                        <li><a href="Default.aspx">Back to Home</a></li>
                        <li><span>&raquo;</span></li>
                        <li>Make a Donation</li>
                    </ul>
                    <asp:Panel ID="pnlMsg" runat="server">
                        <div id="divMsg" class="joinForm">
                            <p></p>
                            <asp:Label ID="lblMsg" runat="server" Text=""></asp:Label>
                        </div>
                    </asp:Panel>
                    <asp:Panel ID="pnlShow" runat="server">
                        <div class="joinForm">
                            <h2>We invite you to help us in our efforts to Transform Our Planet.</h2>
                            <p>Embracing renewable energy solutions empower non-profit organizations and communities to work towards a healthy environment, a strong economy and a high quality of life. Your support will enable us to achieve this goal by aiding us in fund raising programs for our green initiatives, educate communities and spread awareness and to fund non-profit organizations in support of their alternate energy installations. Every penny counts!</p>
                            <p>Please Select Gift Amount:<br />
                                <asp:RadioButtonList id="rdlAmount" runat="server" RepeatDirection="Horizontal" CssClass="rdl" RepeatLayout="Flow" >
                                    <asp:ListItem  Value="10" onclick="setAmount('10');">$10</asp:ListItem>
                                    <asp:ListItem  Value="20" onclick="setAmount('20');">$20</asp:ListItem>
                                    <asp:ListItem  Value="50" onclick="setAmount('50');">$50</asp:ListItem>
                                    <asp:ListItem  Value="100" onclick="setAmount('100');">$100</asp:ListItem>
                                    <asp:ListItem  Value="0" onclick="setAmount('0');">Other $</asp:ListItem>
                                </asp:RadioButtonList>
                                <asp:TextBox CssClass="other" ID="txtAmount" runat="server" enabled="false"></asp:TextBox>
                            </p>
                            <asp:ImageButton CssClass="formBtns" ID="submit" runat="server" ImageUrl="../images/btn_submit.png" OnClientClick="SendAmount();" />
                            <%--<input type="submit" name="submit" value="Submit" onclick="SendAmount();" />--%>
                        </div>
                    </asp:Panel>
                </div>
            </div>
        <%--END: Donate page specific content. All other content should be the same as Tavas.master--%>
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
                                    To waste, to destroy our natural resources, to skin and exhaust the land instead
                                    of using it so as to increase its usefulness, will result in undermining in the
                                    days of our children the very prosperity which we ought by right to hand down to
                                    them amplified and developed.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Theodore Roosevelt</p>
                            </li>
                            <li>
                                <p>
                                    I'd put my money on the sun and solar energy. What a source of power! I hope we
                                    don't have to wait 'til oil and coal run out before we tackle that.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Thomas Edison</p>
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
                                    I believe that the U.S. can and should be a global leader in the development of alternative energy sources.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Barack Obama</p>
                            </li>
                            <li>
                                <p>
                                   There are two kinds of solar-heat systems: 'passive' systems collect the sunlight that hits your home, and 'active' systems collect the sunlight that hits your neighbors' homes, too.
                                    <img src="../images/bkgd_rightQuotes.png" alt="end quote" /></p>
                                <p class="author">- Dave Barry - Humour Columnist</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pnlSidebarTabs">
                    <asp:tabcontainer CssClass="sidetabs" ID="Tabcontainer2" runat="server" EnableTheming="true" ActiveTabIndex="0">
                        <asp:TabPanel HeaderText="Follow us" TabIndex="0" ID="sidetab1" runat="server">
                            <ContentTemplate>
                                <div class="pnlEvents" >
                                   <ul>
                                        <li class="icons"><a href="http://www.facebook.com/pages/Tavas-Its-Your-Power-Own-It/172366689470665" target="_blank" title="Facebook"><img src="../images/FaceBook_48x48.png" alt="Facebook" /></a><a href="http://www.twitter.com/TavasPower" target="_blank" title="Twitter"><img src="../images/Twitter_48x48.png" alt="Twitter" /></a></li>
                                        <%--<li class="icons"><a href="http://www.twitter.com/TavasPower" target="_blank" title="Twitter"><img src="../images/Twitter_48x48.png" alt="Twitter" /></a></li>--%>
                                    </ul>
                                </div>
                            </ContentTemplate>
                        </asp:TabPanel>
                        <asp:TabPanel HeaderText="Projects" TabIndex="1" ID="sidetab2" runat="server">
                            <ContentTemplate>
                                <div class="pnlNews" >
                                     <%--<h3>Projects</h3>--%>
                                    <ul>
                                        <li>Coming soon..</li>
                                    </ul>
                                </div>
                            </ContentTemplate>
                        </asp:TabPanel>
                        <asp:TabPanel HeaderText="Partners" TabIndex="2" ID="sidetab3" runat="server">
                            <ContentTemplate>
                                <div class="pnlBlog" >
                                    <%--<h3>Partners</h3>--%>
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
                        <li><img src="../images/icon_mail.png" alt="email" /> <a href="mailto:ownpower@tavas.org">ownpower@tavas.org</a></li>
<%--                        <li><img src="../images/icon_phone.png" alt="phone" /> 201.294.5040</li>--%>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footerWrap">
        <p>Browser Support: Tavas.org is best viewed in modern browsers such as Internet Explorer (version 7+), FireFox (version 3+), Safari (version 2+), and Chrome</p>
        <p>&copy; Tavas 2010. All rights reserved. Please review our <a href="PrivacyPolicy.aspx">Privacy Policy</a></p>
    </div>
    </form>
</body>
</html>
