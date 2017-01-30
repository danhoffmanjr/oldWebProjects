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
                                <p>Help us achieve this mission by donating your time, knowledge or funds. If you have the will, we have the way!</p>   
                            </div>
                        </div>
                        <div class="pnlHowWeWork">
                            <img src="../images/txt_HowWork.png" alt="How We Work" />
                            <p>We work with individuals, organizations and communities to support installations of renewable energy sources to meet their energy needs.Our organization is largely supported by:</p>
                            <ul>
                                <li>Government Grants</li>
                                <li>Government Subsidies</li>
                                <li>Volunteer Donations</li>
                            </ul>
                        </div>
                        <div class="pnlHowItsPossible">
                            <img src="../images/txt_HowPossible.png" alt="How It's Possible" />
                            <p><strong>Identify</strong><br />We approach non-profit organizations that are actively engaged in community service and work with them to reduce their energy dependence through renewable energy installations.</p>
                            <p>We identify underutilized land and work with communities and local government to convert these lands into renewable energy installations to help sustain communities with energy alternatives.</p>
                            <p><strong>Fund</strong><br />Navitas Foundation utilizes the funds secured via government grants and volunteer donations to drive renewable energy installation projects.</p>
                            <asp:ImageButton ID="ImageButton1" runat="server" CssClass="readMore" ImageUrl="../images/btn_readMore.png" PostBackUrl="~/About.aspx" />
                            <%--<p><strong>Co-ordinate</strong><br />We work with the best solution provider to help facilitate our installations. We collaborate with manufacturers to secure best materials at a reasonable cost. We partner with Government, city councils and energy providers to negotiate cost effective solutions.</p>--%>
                        </div>
                        <div class="pnlOurImpact">
                            <img src="../images/txt_OurImpact.png" alt="Our Impact" />
                            <p>Increase renewable energy use and build a greener future for the next generation.</p>
                            <p>Help our community reduce their energy cost and carbon footprint.</p>
                            <p>Make our world a better living place for future generation.</p>
                        </div>
                    </contenttemplate>
        </asp:TabPanel>
        <asp:TabPanel HeaderText="Meet The Team" TabIndex="1" ID="tab2" runat="server">
            <contenttemplate>
                        <div class="pnlMember">
                            <img class="imgMemberPhoto" src="../images/FPO_memberPhoto.jpg" alt="Placeholder Photo image" />
                            <div class="txtMemberBio">
                                <h3>Noel</h3>
                                <h4>Co-Founder</h4>
                                <p>Noel's passion is to conserve the planet for his children and grand children. The Tavas is the creation that allows Noel to funnel his own energy into changing how we power the planet,greener and cleaner.Noel has degree in Civil Engineering and Information Systems and has a sucessful corporate career.</p>   
                            </div>
                        </div>
                        <div class="pnlMember">
                            <img class="imgMemberPhoto" src="../images/FPO_memberPhoto.jpg" alt="Placeholder Photo image" />
                            <div class="txtMemberBio">
                                <h3>Venky Hebbar</h3>
                                <h4>Co-Founder</h4>
                                <p>Venky Hebbar is a firm believer that the courage to dissolve a crisis situation lies in every individual.Increasing dependency on foreign oil and subsequent devastaion that resulted in during the gulf oil crisis strengthened his belief in alternative energy sources as an absolute solution.This belief led him to co-found Tavas.</p>   
                                <p>Venky holds MS in Computer Science and has a successful corporate career.</p>
                            </div>
                        </div>
                        <div class="pnlMember">
                            <img class="imgMemberPhoto" src="../images/FPO_memberPhoto.jpg" alt="Placeholder Photo image" />
                            <div class="txtMemberBio">
                                <h3>Bob DeCrescente</h3>
                                <h4>Director</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>   
                            </div>
                        </div>
                        <div class="pnlMember">
                            <img class="imgMemberPhoto" src="../images/FPO_memberPhoto.jpg" alt="Placeholder Photo image" />
                            <div class="txtMemberBio">
                                <h3>Ashish Parbhakar</h3>
                                <h4>Pro Bono-Web Developer</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>   
                            </div>
                        </div>
                        <div class="pnlMember">
                            <img class="imgMemberPhoto" src="../images/FPO_memberPhoto.jpg" alt="Placeholder Photo image" />
                            <div class="txtMemberBio">
                                <h3>Dan Hoffman</h3>
                                <h4>Pro Bono-Web Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>   
                            </div>
                        </div>
                    </contenttemplate>
        </asp:TabPanel>
    </asp:tabcontainer>
</asp:Content>

