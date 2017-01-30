function test()
{
    alert('x');
}
function SendAmount()
{

    var txtamt = document.getElementById('txtAmount');
    var amt1 = document.getElementById('hdnAmt');
    var rdolist_4 = document.getElementById("rdlAmount_4");
    var rdlChoice_0 = document.getElementById("rdlChoice_0");
    var retUrl = 'http://tavas.org/aspx/donate.aspx?type=s';
    //retUrl= 'http://localhost:50347/Tavas/ASPX/Donate.aspx?type=s&ch=1';
    var retName = document.getElementById('hdnUrl');
    if (rdolist_4.checked)
    {
	    amt1.value=txtamt.value;
	}
	if (rdlChoice_0.checked)
    {
	    retUrl= 'http://tavas.org/aspx/donate.aspx?type=s&ch=0';
	    retName.value=retUrl;
	}
	else
	{
	    retUrl= 'http://tavas.org/aspx/donate.aspx?type=s&ch=1';
	    retName.value=retUrl;
	}
//	<INPUT TYPE="hidden" NAME="return" value="http://tavas.org/aspx/donate.aspx?type=s">
    //amt1.value=amt.value;
}
function setAmount(src)
{
    var txt = document.getElementById('txtAmount');
    var hdnAmtValue = document.getElementById('hdnAmt');
    txt.disabled=true;
    if(src=='0')
    {
        txt.disabled=false;
        txt.value='0';
    }
    else
    {
        txt.value='';
        hdnAmtValue.value=src;
    }
}