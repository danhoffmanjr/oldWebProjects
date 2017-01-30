<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="ASPX_Default2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
    <script type="text/javascript" src="../Js/JScript.js"></script>
</head>
<body>
       
      <%--<form id="form2" runat="server" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick"/>
      <input type="hidden" name="hosted_button_id" value="PNR3HEW2VHUSU"/>
      <input type="hidden" name="amount" value="25.00"/>
     <input type="image" class="btnDonate" src="http://tavas.org/images/btn_donate.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" 
     onclick="test();">
      </form> --%>
<%--<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="Your PayPal Email Address">
        <input type="hidden" name="item_name_1" value="Post Your Value Here">
        <input type="hidden" name="amount_1" value="x.xx">
        <input type="submit" name="submit" value="submit">
        </form> --%>
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="venkat_1295133679_biz@hotmail.com">
        <input type="hidden" name="item_name_1" value="1.0">
        <input type="hidden" name="amount_1" value="10.00">
        <input type="submit" name="submit" value="submit">
        
        Donate Now
        
        Thank you for considering making a donation to Tavas. We appreciate your generosity, which will help us moe closer to our vision of seeing go Green.
        
        How do you want your donation to Help?
        
        Financial contributions to Tavas are tax deductible 
        
        Radio 1 - Where ever Tavas Project Need is Greatest.
        Radio 2 - Pennslyvania Fire Station. 
        
        Donation Information:
        
        Select Gift Amount:
        
        Radio 1 - 10
        Radio 2 - 20,50,100
        Other
        </form>>
    
</body>
</html>
