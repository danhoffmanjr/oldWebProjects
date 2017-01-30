// Ecircular
var catalog_name_ecircular = 'fsi2004hola';   //Replace with catalog name1
var client_name_ecircular = 'catalog_hp';     //Replace with client name
var client_name_hp = 'hp'                     //Replace with client name
//var staging = 'testny';                     //Replace with staging server name,file name or IP address
//var staging = null;
var staging = "";
var regEx = /catalog_name_ecircular=([^&=]*)(&|$)?/
var m=regEx.exec(location.search);


// E-Catalog
var catalog_name = 'master';            //Replace with catalog name1
var client_name = 'hp';                 //Replace with client name
//var staging = 'testny';               //Replace with staging server name,file name or IP address
//var staging = null;
var staging = "";
var regEx = /catalog_name=([^&=]*)(&|$)?/
var m=regEx.exec(location.search);
if (m) 
{
  catalog_name = m[1];
}


function openEcircularWin(bvSessionID, bvEngineID)
{
  var passback = 'BV_SessionID='+bvSessionID+'&BV_EngineID='+bvEngineID;
  passback = escape(passback);
  //if (location.hostname.match(/.*\..../) && location.href.indexOf(staging) < 0)
  if (location.href.indexOf(staging) >= 0)
  { // we are on live
    var url = 'http://' + client_name_hp +'.richfx.com.edgesuite.net' + '/' + client_name_ecircular + '/' +  catalog_name_ecircular + '/index.asp?passback=' + passback;
  }
  else
  {
    var url = 'http://testny.richfx.com/catalog_' + client_name + '/' +  catalog_name + '/index.asp?passback=' + passback;
  }
  catalog = window.open(url,'catalog','width=750,height=500,scrollbars=yes,resizable=yes');
  catalog.focus();
}

function openCatalogWin(jSessionId)
{
  var passback = 'JSESSIONID='+jSessionId;
  passback = escape(passback);
 var url = 'http://s7d2.scene7.com/s7ondemand/brochure/flash_brochure.jsp?company=HPShopping&sku=73008HP_INT_807&config=73008HP_INT_807&vc=instanceName%3dHPINT&passback=' + passback;  
  catalog = window.open(url,'catalog','width=750,height=500,scrollbars=yes,resizable=yes');
  catalog.focus();
}

function emailMatch(email)
{
  if (email.match(/\S+\@\S+\.\S+/))
      return true;
  else
  {
    alert("Invalid E-mail ID");
    return false;
  }
}

function echeck(email)
{
  if( email!= "" && emailMatch(email))
  {
    if(email.indexOf('@') > -1 && email.indexOf('.') > -1)
    {
      var emailArr = email.split('@');
      if(emailArr.length > 2)
      {
        alert("Invalid E-mail ID");
        return false;
      }
      else
        return true;
    }
    alert("Invalid E-mail ID");
    return false;
  }
  return false; 
}

function removeInstructionalText()
{
  if (document.getElementById("emailaddress").value == "Enter e-mail address")
  {
    document.getElementById("emailaddress").value = "";
  }
}
