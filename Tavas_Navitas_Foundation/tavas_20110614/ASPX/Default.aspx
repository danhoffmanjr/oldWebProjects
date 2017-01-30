<%@ Page Language="C#" MasterPageFile="~/ASPX/Tavas.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="ASPX_Default" title="Welcome to Tavas. It's your power. Own it!" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:tabcontainer CssClass="tabs" ID="Tabcontainer1" runat="server" EnableTheming="true" ActiveTabIndex="0">
        <asp:TabPanel HeaderText="Welcome to Tavas" TabIndex="0" ID="tab1" runat="server">
            <contenttemplate>
                        <div class="pnlAbout">
                            <img src="../images/txt_OurMission.png" alt="Our Mission" />
                            <div class="txtMission">
                                <p>Our mission at Tavas is to empower communities and organizations to embrace cleaner energy alternatives through green energy installations.</p>
                                <%--<p>Help us achieve this mission by donating your time, knowledge or funds. If you have the will, we have the way!</p> --%>  
                            </div>
                        </div>
                        <div class="pnlQuad pnlTopLeftQuad">
                            <h3>Why Green Energy</h3>
                            <p>Green Energy is any energy that is derived from naturally replenished sources and does not negatively impact the environment significantly. The U.S. Environmental Protection Agency defines green power as electricity produced from solar, wind, geothermal, biogas, biomass, and low-impact small hydroelectric sources.</p>
                            <asp:ImageButton ID="imgWhyGreenEnergy" runat="server" CssClass="readMore" ImageUrl="../images/btn_readMore.png"  PostBackUrl="~/ASPX/WhyGreenEnergy.aspx" />
                        </div>
                          <div class="pnlQuad pnlTopRightQuad">
                            <h3>How You Can Help</h3>
                            <p>Thinking of ways to reduce your carbon footprint? Here are some simple green tips, because every single bit counts!</p>
                            <ul>
                                <li>Save electricity</li>
                                <li>Change how you commute</li>
                                <li>Recycle</li>
                                <li>Volunteer with Tavas</li>
                                <li>Donate to our cause</li>
                                <li>Join us on Facebook and Twitter</li>
                            </ul>
                            <asp:ImageButton ID="imgHowYouCanHelp" runat="server" CssClass="readMore" ImageUrl="../images/btn_readMore.png"  PostBackUrl="~/ASPX/HowYouCanHelp.aspx" />
                        </div>
                        <div class="pnlQuad pnlBtmLeftQuad">
                            <h3>How We Make It Possible</h3>
                            <p>Tavas aims at working with non-profit organizations engaged in public and community service, to reduce & offset their carbon footprint through efficient management of their energy usage and emissions by installing self sustaining green energy alternatives.</p>
                             <asp:ImageButton ID="imgHowItsPossible" runat="server" CssClass="readMore" ImageUrl="../images/btn_readMore.png" 
                             PostBackUrl="~/ASPX/HowItsPossible.aspx" />
                        </div>
                        <div class="pnlQuad pnlBtmRightQuad">
                            <h3>Our Impact</h3>
                            <p>Embracing greener energy alternatives helps our communities to reduce their carbon footprint, thus contributing positively to this global issue.</p>
                            <p>Green communities positively impact natural resources conservation through intelligent use of durable and renewable materials.</p>
                             <asp:ImageButton ID="imgImpact" runat="server" CssClass="readMore" ImageUrl="../images/btn_readMore.png" 
                             PostBackUrl="~/ASPX/OurImpact.aspx" />
                        </div>
                    </contenttemplate>
        </asp:TabPanel>
        <asp:TabPanel HeaderText="Meet The Team" TabIndex="1" ID="tab2" runat="server">
            <contenttemplate>
                        <div class="pnlMember">
                            <div class="txtMemberBio">
                                <h3>Noel Smyth</h3>
                                <h4>Co-Founder</h4>
                                <p>Noel's passion is to conserve the planet for his children and grand children. Tavas is the creation that allows Noel to funnel his own energy into changing how we power the planet, greener and cleaner. Noel has degree in Civil Engineering and Information Systems and has a successful corporate career.</p>   
                            </div>
                        </div>
                        <div class="pnlMember">
                            <div class="txtMemberBio">
                                <h3>Venkatesh Hebbar (Venky)</h3>
                                <h4>Co-Founder</h4>
                                <p>Venky is a firm believer that the courage to dissolve a crisis situation lies in every Individual. Increasing dependency on Foreign Oil and the devastation that was witnessed during the Gulf Oil crisis, strengthened his belief in alternative energy sources as an absolute solution. This belief led him to co-found Tavas. Venky is also an active contributor in other green initiative projects. Venky holds a Masters degree in Computer Science and has a successful corporate career. </p>   
                            </div>
                        </div>
                        <div class="pnlMember">
                            <div class="txtMemberBio">
                                <h3>Bob DeCrescente</h3>
                                <h4>Director</h4>
                                <p>Bob brings years of practical field experience in solution selling and servicing the industrial market.  His ability to solve problems for his clients led him to his interest in the solar industry.  His long term goal to make an impact by bringing enough solar solutions to smaller markets therefore impacting the larger picture by reducing the energy demands of the fossil fuel grid.</p>
                            </div>
                        </div>
                        <%--Start Volunteer members--%>
                        <div class="volunteerMembers">
                            <em class="volunteers">Tavas Volunteers</em>
                            <div class="pnlMember">
                                <div class="txtMemberBio">
                                    <h3>Ashish Parbhakar</h3>
                                    <h4>Web Developer</h4>
                                    <p>As members of the world's community, we all have the responsibility to be good stewards of the planet and take suitable steps towards developing avenues of clean energy. Ashish believes in supporting efforts which can help reduce global warming.</P>
                                </div>
                            </div>
                            <div class="pnlMember">
                                <div class="txtMemberBio">
                                    <h3>Dan Hoffman</h3>
                                    <h4>Web Designer/Developer</h4>
                                    <p>Renewable energy resources are clean and have a positive affect on our environment. I believe that supporting and investing in these new technologies will ensure a better future for our children and our children's children.</p>
                                </div>
                            </div>
                        </div>
                    </contenttemplate>
        </asp:TabPanel>
    </asp:tabcontainer>
</asp:Content>