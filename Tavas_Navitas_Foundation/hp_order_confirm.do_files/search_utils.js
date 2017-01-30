function validate_search(thisForm,searchOn,cgiRoot)
{
  var search = thisForm;
  var msg="Please type in the product name you would like to search for";
  var searchAll = false;
  if (searchOn == "1")
  {
    var qsQry = document.forms[search].qry.value;
    if (qsQry.substring(0,2).toUpperCase() == "QS")
    {
	qsQry = qsQry.substring(qsQry.length-3,qsQry.length)
        window.document.forms["qsrSearch"].qry2.value = qsQry;
        window.document.forms["qsrSearch"].submit();
        return false;
    }

    if (document.forms[search].qry.value == "")
    {
      alert(msg);
      return false;
    }
    else
    {
      var searchText = document.forms[search].qry.value.toLowerCase();
      var isTopSearch = document.forms[search].top_search.value;
      if (isTopSearch == "true")
      {
	if (document.forms[search].search_option[1].checked == true)
	{
	  document.forms[search].action = "http://search.hp.com/gwuseng/query.html?qt=" + searchText;
	  searchAll = true;
	}
      }

      if (!searchAll)
      {
        switch (searchText)
        {
	  case "computer" :
	  case "computers":
	  case "computer store":
	  case "pc"	:
	  case "pcs"	:    document.forms[search].landing.value = "computers";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_landing_view.jsp";
			     break;

	  case "printer" :
	  case "printer store" :
	  case "printers" :  document.forms[search].landing.value = "printers";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_landing_view.jsp";
			     break;

	  case "scanners" :
	  case "scanner" :
	  case "scanjets" :
	  case "scanjet"  :  document.forms[search].category.value = "scanners";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			     break;

	  case "camera"	:
	  case "digital camera" :
	  case "digital cameras" :
	  case "cameras"  :  document.forms[search].category.value = "digital_cameras";
	 		     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			     break;

	  case "pavilion" :
	  case "desktop"  :
	  case "desktops" :  document.forms[search].landing.value = "desktops";
	                     document.forms[search].action = cgiRoot+"/shopping/scripts/computer_store/computer_landing_view.jsp";
			     break;

	  case "mobile computers":
	  case "notebook" :
	  case "notebooks":
	  case "laptops"  :
	  case "laptop"   :  document.forms[search].landing.value = "notebooks";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/computer_store/computer_landing_view.jsp";
			     break;

	  case "handheld":
	  case "handhelds":
	  case "handheld pc":
	  case "jornadas":
	  case "jornada":
	  case "ipaq":
	  case "pocket pc" : document.forms[search].category.value = "handhelds";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			     break;

	  case "inkjet":
	  case "inkjets":
	  case "deskjet":
	  case "deskjets":
	  case "inkjet printers" : document.forms[search].category.value = "inkjets";
			   	   document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			   	   break;

	  case "laserjets":
	  case "laserjet" : document.forms[search].category.value = "laserjets";
			    document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			    break;

	  case "multifunction":
	  case "all in one":
	  case "all-in-one": document.forms[search].category.value = "all_in_ones";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			     break;

          case "memory":
          case "memory card":
          case "memory cards":
          case "memory upgrade":
          case "memory upgrades":
	  case "ram":
          case "ram memory":
          case "rdram":
          case "sdram":
          case "dimm":
          case "rimm":
	  case "cpu":
          case "jornada memory":
          case "ipaq memory":
          case "printer memory": document.forms[search].action = cgiRoot+"/shopping/scripts/search/memory_search.jsp";
                                 break;

	  case "calculators":
	  case "calculator" : document.forms[search].category.value = "calculators";
			      document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			      break;


	  case "outlet" :
	  case "outlet shopping" :
	  case "refurbished" : document.forms[search].category.value = "outlet_center";
			       document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			       break;

	  case "monitors":
	  case "monitor" : document.forms[search].landing.value = "monitors";
			   document.forms[search].action = cgiRoot+"/shopping/scripts/computer_store/computer_landing_view.jsp";
			   break;

	  case "fax":
	  case "copier" : document.forms[search].category.value = "fax_copiers";
		 	  document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
			  break;

	  case "macintosh":
	  case "mac" : document.forms[search].category.value = "mac_compatible";
		       document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
		       break;

	  case "cd writer":
	  case "cd-writer":
	  case "cd writers":
	  case "dvd writer":
	  case "dvd-writer":
	  case "dvd writers":
	  case "dvd-writers":
          case "cd-rw": 
          case "cdrw":
          case "cd":
          case "cd burner":
	  case "cd-burner":
          case "cd-writers": document.forms[search].category.value = "dvd_writers";
			     document.forms[search].action = cgiRoot+"/shopping/scripts/generic_store/generic_category_view.jsp";
		             break;

	  case "coupons":
	  case "coupon": document.forms[search].action = cgiRoot+"/shopping/scripts/help_center/questions.jsp#q9a";
		         break;

	  case "rebates":
	  case "rebate" : document.forms[search].action = cgiRoot+"/shopping/scripts/rebates/rebate_view.jsp";
		          break;

	  case "jobs" :
	  case "job" : 	document.forms[search].action = cgiRoot+"/shopping/scripts/help_center/jobs.jsp";
		        break;

	  default :  document.forms[search].action = "/cgi-bin/shopping/search.cgi";
        }
      }
      document.forms[search].submit();
    }
  }
  else
  {
    document.forms[search].action = cgiRoot+"/shopping/scripts/search/search_unavailable.jsp";
    document.forms[search].submit();
  }
}
