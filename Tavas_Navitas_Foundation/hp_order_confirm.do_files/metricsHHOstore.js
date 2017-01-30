// HP Common Metrics Architecture 20051223a
// BEGIN Clickstream:
var s_hp_optOut = false // WARNING: IF SET TO TRUE, PAGE WILL NOT BE TRACKED
var s_hp_enableTimeParting= true;
// Common Dynamic Account structure - please do not use unless authorized by CKM&A Ops
//var s_account = "hphqqatestshop"
//var s_account = "hphqqatestshopdev" // commnted this line by Pradeep SV 20070418//
var s_account = "hphqglobal,hphqna,hphqhhorollup,hphqnahpshopping"; // edited by Pradeep SV 20070418//
var s_dynamicAccountSelection=true;
//var s_dynamicAccountList="hphqglobal,hphqna,hphqhhorollup,hphqnahpshopping=hp.com,hpshopping.com,hpshopping.speedera.net,ssl1.speedera.net,compaq.com"
var s_dynamicAccountList="hphqqatestshopdev=atlanta.hp.com,austin.hp.com,16.228.40.193,hpsh100.corp.hp.com,16.94.4.100";
var s_dynamicAccountMatch=window.location.hostname; 

var s_trackDownloadLinks=false;
var s_trackExternalLinks=false;
var s_trackInlineStats=true;
var s_linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
var s_linkInternalFilters="javascript:,hp,compaq,cpqcorp";
var s_linkLeaveQueryString=false;
var s_linkTrackVars="None";
var s_linkTrackEvents="None";

//To store legacy eVar4 implementation 
var s_eVar9;

//Request by Michal Mgebroff //
var s_prop3;
if(window.s_pageName) {
	s_pageName = s_pageName.toLowerCase();
	if (window.tName) {
		s_prop3 = s_pageName + ':' + tName;
	}
	if (window.omnTab) {
		s_prop3 = s_pageName + ':' + omnTab;
	}
}

s_hp_ua = navigator.userAgent.toLowerCase();
if(s_hp_ua.indexOf('keynote-perspective') != -1 || s_hp_ua.indexOf('ktxn') != -1) {
	s_hp_optOut=true;
}	
var s_prop7="us"
var s_prop8="en"
var s_prop9="hho"
var s_prop25;
var s_channel;
if(!(window.s_channel && s_channel.length>0)) {
	s_channel="none";
}
if(!(window.s_prop25 && s_prop25.length>0)) {
	s_prop25="none:none";
}

if(s_channel.indexOf("printer")!= -1) {
	s_channel="printers";
	t=s_prop25.split(":");
	s_prop25 = s_channel + ":" + t[t.length-1]
}


var s_events;
var s_hpwlh=window.location.href.toLowerCase();
if(s_hpwlh.indexOf('bvloadcart=1') != -1) {  
    if(!(window.s_events && s_events.length>0)) {s_events=""} else {s_events+=","} 
		if(s_hpwlh.indexOf('action=update') != -1) {
			s_events+= "scRemove"; 		
		}
		else {
			if(! (window.s_hp_hho_pageRefresh && s_hp_hho_pageRefresh == 'true')) {
				// Avoid adding duplicate scAdd to s_events
				if(s_events.indexOf('scAdd') < 0) {  
					s_events+= "scAdd";
				}
			}
		}
		//To remove extra comma at the end s_events if it is present
		var len = s_events.length;
		if(s_events.charAt(len - 1) == ',') {
			 s_events = s_events.slice(0, -1);
		}
		//Reset the value of s_hp_hho_pageRefresh variable after it is being used.
        if(window.s_hp_hho_pageRefresh) {
            s_hp_hho_pageRefresh = '';
        }
}

if(s_prop25.indexOf(":accessor") != -1) {
	s_a = s_prop25.split(":");
	s_channel="accessories"
	s_prop25="accessories:" + s_a[0];
}

s_channel = s_channel.toLowerCase();
s_prop25 = s_prop25.toLowerCase();

// This part of code is to trigger event8 when user subscribe for the newsletter: Requested By Kay Fairweather //

if(window.s_pageName) {
	s_pn1=window.s_pageName.toLowerCase();
	if (s_pn1.indexOf('hho:gs:newsletter:status:subscription pending')>-1) {
		if(!(window.s_events && s_events.length>0)) {s_events="event8"} 
		else {			
			if (s_events.indexOf("event8")==-1) {
				s_events+=",event8";
			}
		}
	}
}
function s_hp_doHHOSReferrerGrouping() {
	if(RegExp!=null) {
		wlh = window.location.hostname.toLowerCase();
		if(wlh.indexOf("shopping.hp.com")!=-1) {
			window.s_eVar11="";
			dr = document.referrer!=null?document.referrer.toLowerCase():"";
			r1=/^http[s]?\:\/\/([^\/]+\.hp\.com)[\:\d]*([^\?\;]*)/;
			x=r1.exec(dr);
			if(x && (dr.indexOf("shopping.hp.com")==-1)) {
				rhost = x[1];
				rpath = x.length>2?x[2]:"";
				window.s_eVar11=rhost + rpath;
			}
		}
	}
}
function s_hp_doMetricsPlugins() {
	em1=s.getQueryParam('email');
	em2=s.getQueryParam('aoid');
	if(window.em1 && em1.length>0 && em1.indexOf("@")==-1) {
		//Comment out eVar4 legacy implementation and use eVar9 instead
		//s_eVar4 = em2 + "|" + em1;
		s_eVar9 = em2 + "|" + em1;
	}
	/* if(window.s_prop21 && window.s_prop21.length>0) { // Add segment-specific namespace to s_prop18-22
		s_prop21 = "HHO: " + s_prop21;
	} */
	var fp = "HHOS|NOREGEXP";
	if(typeof RegExp != "undefined") {
		uid=document.cookie.match(/user_id=(\d+)/);
		if(uid!=null && uid.length==2) fp="HHOS|"+uid[1];
		else fp="HHOS|0";
	}
	if(fp!= null && fp.length>1) {
		s_prop23 = fp + "|"+s_pageName
		s_eVar8=fp;
		lcurl = window.location.href.toLowerCase();
		if(lcurl.indexOf('accessories')!= -1 || lcurl.indexOf('suppl')!= -1) {
			s_prop23+=":suppl";
		}
	}
	s.eVar1=s.getValOnce(s.eVar20,'s_var_20',0);

	/* DynamicObjectIDs config */
function s_getObjectID(o) {

        /* TODO: Add code to identify whether an objectID should be created,
         *       parse the URLs and return objectID. If no objectID should
         *       be created, return ''.
         */

        var ID=o.href;
		var id_arr = ID.split('.com')
		if (id_arr[1]==""){
			ID = id_arr[0]+".com";
		}
		else {
			ID = id_arr[1];
		}
		if (ID != null){
			ID=ID.replace("?","_");
		}
		return ID;
}
s.getObjectID=s_getObjectID

/*
 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
 */

	s.setupDynamicObjectIDs=new Function(""
	+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
	+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
	+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
	+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
	+"re=1}");
	s.setOIDs=new Function("e",""
	+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
	+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
	+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
	+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
	+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
	+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
	+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
	+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
	+"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
	+"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");
	 
/*********************************************************************

 * Supporting functions that may be shared between plug-ins *

 *******************************************************************/

/*
 * Plugin Utility: Replace v1.0
 */

	s.repl=new Function("x","o","n",""
	+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
	+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

	/* To setup Dynamic Object IDs */
	s.setupDynamicObjectIDs();
	
	/* Set home page cookie on all pages */
	s_vp_setPersistentCookieExact("hp_cust_seg_sel","HHO",90);

	/* This JavaScript part will determine if one of two events (event1 or prodView) is included on the image request.  If either event is fired off on the image request, then your global JavaScript file will increment a new custom event called “Product View Visits” (which will be serialized to the visit on Omniture’s end so it can only occur once per visit).  This will help you know what % of your total visits go on to see a product/series page.  The calculated metric will be Product View Visits/Visits in your SiteCatalyst reporting.
	*/
	//if(s.events && (s.inList("prodView",s.events) || s.inList("event1",s.events))) // this change was requested by Allo, Mathius Girik on Thu 9/2/2010 12:22 PM - edited by Pradeep SV//
	if(s.events && (s.inList("prodView",s.events)))
	{
		s_events += ",event6";
	}

	if (window.s_hp_hho_serNo){
		if (s.inList("scAdd",s_events))
		{
			var tempEvents = window.s_events.split(",");
			for (i=0;i<tempEvents.length ;i++ ){
			   if (tempEvents[i]=="scAdd"){
				   tempEvents[i] = tempEvents[i] + ":" + window.s_hp_hho_serNo;
			   }
		   }
		   window.s_events = tempEvents;
	   }
	  //Reset the value of s_hp_hho_serNo variable after it is being used.
	   window.s_hp_hho_serNo = '';
	}

	/* Set Time Parting Variables */
	if (window.s_hp_enableTimeParting)
	{
		var s_hour=s.getTimeParting('h','-8');
		var s_day=s.getTimeParting('d','-8');
		var s_timepart=s_day+"|"+s_hour;
		s_prop39=s_timepart.toLowerCase();
		s_eVar39 = s_prop39;
	}
  
	//new search implementation
	var prevPageName = s.getPreviousValue(s.pageName,'gpv_pN');  
	if(s.events && (s.inList("event65",s.events)))
	{
		s.prop38 = prevPageName;
		s.eVar38 = s.prop38;
	}

  	//campaign stacking
	if(typeof s.events != "undefined" && s.events.indexOf('purchase') > -1){
		s.eVar4 = s.crossVisitParticipation(':','aoidstack','90','41',':','purchase',1);
		s.eVar5 = s.crossVisitParticipation(':','jumpstack','90','6',':','purchase',0);    
	} else {
		s.crossVisitParticipation(s.campaign,'aoidstack','90','41',':','purchase',1);
		s.crossVisitParticipation(s.eVar20,'jumpstack','90','6',':','purchase',0);
	}

	s_eVar23 = window.s_channel; // requested by Bakonyi, Andrew | edited by Pradeep SV 20100621 //
} // end function ()

function s_hp_doPostMetaTagFunction(){
	// Verzion plug-in, to swtich reportsuite to Verizon if its verizon visitors//
	h_url = window.location.href!=null?window.location.href.toLowerCase():"";
	var h_verizonCookie=s_vp_readCookie("hpVerizon")!=null?s_vp_readCookie("hpVerizon").toLowerCase():"";

	if (h_url.indexOf("aoid=45442")>-1 || h_url.indexOf("aoid=45462")>-1 || h_url.indexOf("aoid=53487")>-1) {
		window.s_account = "hphqglobal,hphqna,hphqhhoverizon";
		s_vp_setPersistentCookieExact("hpVerizon","hp_verizon",90);
	}
	if (h_verizonCookie!="" && h_verizonCookie.indexOf("hp_verizon")>-1) {
		window.s_account = "hphqglobal,hphqna,hphqhhoverizon";
	}
}

/*** DO NOT MODIFY THIS SECTION ***/
/* Under no circumstances should you modify this code */
s_hp_includeJavaScriptFile("www.hp.com","/cma/region/na/nacma.js");
s_hp_includeJavaScriptFile("www.hp.com","/cma/metrics/sc/s_code_remote.js");


function s_hp_includeJavaScriptFile(hp_hostname,hp_path) {
	if(!(window.s_hp_optOut && window.s_hp_optOut == true)) {
		var hp_ssl=(window.location.protocol.toLowerCase().indexOf('https')!=-1)
		if(hp_hostname && hp_hostname.length>0) {
			if(hp_ssl == true && hp_hostname.toLowerCase().indexOf("welcome.") != -1) { hp_hostname = "secure.hp-ww.com"; }
			var fullURL = "http" + (hp_ssl?"s":"") + "://" + hp_hostname + hp_path
		}
		else
			var fullURL=hp_path;
		document.write("<sc" + "ript language=\"JavaScript\" src=\""+fullURL+"\"></sc" + "ript>");
	}
}

s_hp_includeConditional("/webapp/shopping/saveCatalogRequest.do,/webapp/shopping/newsletter.do,/webapp/shopping/mpss_portal.do,/webapp/shopping/order_confirm.do," +
	"/holiday/gaming.html,/holiday/gaming2.html,/holiday/photo.html,/holiday/photo2.html,/holiday/photo_drtv.html,/holiday/media.html,/holiday/media2.html,/holiday/media_drtv.html,/holiday/parents.html,/holiday/parents2.html,/webapp/shopping/order_confirm.do",
	window.location.pathname+window.location.search,
	"www.hp.com","/cma/metrics/dc/dc.js");
/* s_hp_includeConditional("/holiday/gaming.html,/holiday/gaming2.html,/holiday/photo.html,/holiday/photo2.html,/holiday/photo_drtv.html,/holiday/media.html,/holiday/media2.html,/holiday/media_drtv.html,/holiday/parents.html,/holiday/parents2.html,/webapp/shopping/order_confirm.do",
	window.location.pathname+window.location.search,
	"www.hp.com","/cma/metrics/dc/dc.js"); */

/* s_hp_includeConditional("product/C8721WN,product/C8771WN",
	window.location.pathname+window.location.search,
	"www.hp.com","/cma/metrics/abmvt/optimost.js"); */

function s_hp_includeConditional(whenCondition,matchStr,destServer,destFile) {
	if(whenCondition!=null && matchStr!=null) {
		v=whenCondition.split(",");h_u = matchStr;
		for(i=0;i<v.length;i++) {if(h_u.indexOf(v[i]) != -1) {
			s_hp_includeJavaScriptFile(destServer,destFile);
		} }
	}
}