<!-- 
//=============================================================================================//
// --> 	NAME			: 	Number of Clicks (North America)
// -->	VERSION			:	1.0
// -->	FILE NAME		:	na_num_clicks.js
// --> 	AUTHOR			: 	Jonathan Brumley (jonathan.brumley@hp.com)
// --> 	LAST MODIFIED	: 	3/26/2008
// --> 	COPYRIGHT		: 	? 2006 Hewlett-Packard Development Company, L.P. All rights reserved.
//=============================================================================================//
/*	====================================================
	GLOBAL VARIABLES DECLARATION
	____________________________________________________
	WARNING: Please do not modify these variables
	because they are important for the script.
	____________________________________________________ */
	if(!s_prop1)var s_prop1="";		if(!s_prop2)var s_prop2="";
	if(!s_prop3)var s_prop3="";		if(!s_prop4)var s_prop4="";
	if(!s_prop7)var s_prop7="";		if(!s_prop8)var s_prop8="";
	if(!s_prop13)var s_prop13="";	if(!s_pageName)var s_pageName="";
	if(!s_hp_region)var s_hp_region="";
/*  ====================================================
	svVal - CONTAINS ALL ARGUMENTS
	____________________________________________________*/
var svVal = {
	aquarius_exep :	new Array("cceaacspro01", "cceaacspro02"),// This is only for the error that is produced in Aquarius	
	exep : new Array("https://","www.shopping.hp.com","h10025.www1.hp.com","h20264.www2.hp.com/ediags/","h20139.www2.hp.com", "ipgweb.cce.hp.com", "dcart", "/hpweb", "hp.tradeups.com","/tradein/","http://www.hp.com/cpso-support-new/SDD/", "http://h30216.www3.hp.com/", "wc/softwareDownloadIndex","wc/documentIndex","wc/siteHome","wc/contacthp","wc/genericSoftwareDownloadIndex ","wc/setupCategory","wc/prodinfoCategory","wc/solveCategory","wc/manualCategory","wc/documentSubCategory","wc/product","wc/softwareCategory","wc/document","wc/softwareList ", "http://wwemail.support.hp.com/fd2/EmailForm","http://wwemail.support.hp.com/fd2/EmailSend","http://wwemail.support.hp.com/fd2/EmailValidate","/cache/305765", "/cache/307800", "/cache/307885", "/cache/307891", "/cache/307915", "/cache/384863", "/cache/416458", "/cache/424811", "/cache/424812", "/cache/427068", "/cache/443347", "/cache/444746", "/cache/445480", "/cache/454779", "/cache/454897", "/cache/456746", "h30434.www3.hp.com", "h30467.www3.hp.com", "/portal/site/"),
/*__________________________________________________
	~ cname  = country name, ccode = country code or country
	~ pratio = popratio, clk = number of clicks 
	____________________________________________________ */
	inf	: 	[{ //Main Information Variables
				index : 1 //position 0 is reserved
			},{ //Default Country   .005
				cname: undefined, ccode: undefined, pratio: 0.005, clicks: 4, flag: "n"
			},{ //USA
				cname: "us", ccode: "64", pratio: 0.005, clicks: 4, flag:	"n"
			},{ //Canada
				cname: "ca", ccode: "9", pratio: 0.005, clicks: 4, flag: "n"
		}],
	inv : 	{ //General Variables
				zIndex		: 1000,
				top			: "25px",
				left 		: "40px"				
		},		
	gen : 	{ //General Variables
				svID			: "3BC1E4C177E4634B",
				sv_ebus_sitecode: "",
				sv_ebus_jscript : "na_num_clicks2.js",
				sv_ebus_tce 	: "y",
				sv_ebus_domain 	: ".hp.com",
				cdomain 		: "HP",
				ref 			: self.location.href,				
				myurl 			: location.href,
				title 			: document.title,
				reg 			: new RegExp("(google.com)", "i"),
				sv_logo			: "sv_logo.gif",
				files_root		: "http://www.hp.com/cma/metrics/survey/"
		},
	js	: 	{	dir : 	"lib/", files: new Array("svDrag1","naLang") },
	css	:	{	dir	:	"css/", files: new Array("num"), csspfx: '' },
	img	:	{	dir	:	"img/"	},		
	bwr : 	{	ie4 : document.all, ns6 : document.getElementById && !document.all },		
	td : 	{ // Time and Date Variables
				sv_ebus_yr 					: new Date().getFullYear(),							
				sv_ebus_clicks_expires 		: new Date(),
				sv_ebus_expires 			: new Date(),
				sv_ebus_cookielife 			: 180, //in days
				sv_ebusclicks_cookielife 	: 30, //in minutes
				sv_ebus_random 				: Math.random()
		},
	https:	{ 	files_root	: 	"https://secure.hp-ww.com/cma/metrics/survey/",
				allowed	:	new Array("https://h30046.www3.hp.com", "https://h10078.www1.hp.com/")
		},
	test : 	{ // Test Variables				
				svLaunched 		: 	"no",
				invLaunched 	: 	"no",
				domain_url		:	"http://webmetrics1.americas.hpqcorp.net",
				files_root		: 	"http://webmetrics1.americas.hpqcorp.net/survey/source/",
				url_values		: 	new Array("sv_lang","sv_popratio")				
		},		
	varMap : { // Variable Maps for Scrape Meta Function
				target_country : "sv_ebus_country", segment : "sv_ebus_segment", hp_design_version : "sv_ebus_design_version", generator : "sv_ebus_generator", page_content : "sv_ebus_page_content", 
				lifecycle : "sv_ebus_lifecycle", product_service_name : "sv_ebus_product_service_name", web_section_id : "sv_ebus_web_section_id", ReversableHTMLId : "sv_ebus_reversablehtmlid"
		},		
	allMetas : document.getElementsByTagName("META"), // Asigning HTML meta tags to allMetas	
	prop : { // prop Variables
				n1 : s_prop1.replace(/(\s|\/)/g,"_").toLowerCase(),
				n2 : s_prop2.replace(/(\s|\/)/g,"_").toLowerCase(),
				n3 : s_prop3.replace(/(\s|\/)/g,"_").toLowerCase(),
				n4 : s_prop4.replace(/(\s|\/)/g,"_").toLowerCase(),
				n7 : "",
				n8 : "",
				n9 : "",
				n13: s_prop13.toLowerCase()
		}
}//End of svVal
/*  ====================================================
	hpSV - CONTAINS ALL FUNCTIONS
	____________________________________________________*/
var hpSV = { 
// ==================== Function to initialize functions ===============================
	init : function(){
		var tv = location.search.indexOf("l_numclicks");
		if (((document.cookie.indexOf("HP_EBUS=true")==-1)&&(document.cookie.indexOf("TakenTheSurvey=true")==-1)) ||(tv>-1)){
			td = svVal.td; gen = svVal.gen; iv = svVal.inv; test = svVal.test; img = svVal.img; 
			prop = svVal.prop; inf = svVal.inf; bwr = svVal.bwr; js = svVal.js; css = svVal.css; https = svVal.https;
			hpSV.setDomain(); hpSV.initVars(); hpSV.scrapeMeta(); hpSV.getCountry(); hpSV.setCookiesExp();				
			if ((hpSV.checkClicks()== true)||(tv>-1)){ var idx = inf[0].index; 
				inf[idx].pratio = hpSV.getURLValue(test.url_values[1], inf[idx].pratio);
				if((svVal.https.allowed.length > 0) && (hpSV.setExep(svVal.https.allowed) == true)){ svVal.exep[0] = "$@#)_?'";} 
				if (((!window.s_pageName) || (s_pageName.indexOf("gw:") == -1)) && (td.sv_ebus_random<inf[idx].pratio) && (gen.reg.test(document.referrer) == false) && (hpSV.setExep(svVal.exep)== false) || (tv>-1)){					
					hpSV.run();
				}				
			}
		}else{return}
	}, 
// ==================== Function run (starts the script after init)=======================
	run: function(){
		/***************Determine Language*******************/	
		if ((sv_ebus_lang == "")&&(s_prop8 != ""))sv_ebus_lang = s_prop8;		
		var lp8=sv_ebus_lang;		
		if (lp8!=""){ l = "0";//Null
			if (((lp8.toLowerCase().indexOf("en")>-1)  && (s_prop8.toLowerCase().indexOf("fr") >=-1)) || (lp8.toLowerCase().indexOf("en")>-1)){
				l = "9";//English
			}else if((lp8.toLowerCase().indexOf("fr")>-1) && (s_prop8.toLowerCase().indexOf("fr") >=-1)){
				l = "3084";//French
			}
			l = hpSV.getURLValue(test.url_values[0], l);
			if((location.search.indexOf("l_numclicks")>-1) && (l == "0" )){l="9";}else if(l == "0"){return;}			
			hpSV.loadTags(); hpSV.showOverlay();
		}else{return;}
	},
// ==================== Function initialize variables ======================================
	initVars: function(){
		css.csspfx=css.files[0];
		sv_ebus_country="";
		sv_ebus_segment="";
		sv_ebus_design_version=""; 
		sv_ebus_generator="";
		sv_ebus_page_content=""; 
		sv_ebus_lifecycle="";
		sv_ebus_product_service_name="";
		sv_ebus_web_section_id="";
		sv_ebus_reversablehtmlid="";
		sv_ebus_lang ="";
		target_country_value ="";
		root_folder = gen.files_root;
		if(svVal.gen.myurl.indexOf("https://")!=-1) {root_folder = https.files_root;}
		else if(svVal.gen.myurl.indexOf(test.domain_url)!=-1) {root_folder = test.files_root;}
	},
// ==================== Function set domain for cookies =====================================	
	setDomain: function(){
		if (location.host.indexOf("webmetrics1")!=-1){
			gen.sv_ebus_domain = ".hpqcorp.net"; gen.cdomain = "HPQCORP";
		}//End if statement
	},
// ====================	Function loadTags for overlay ====================================
	loadTags: function(){
		var head = document.getElementsByTagName("HEAD")[0];
			var lk = document.createElement('link');
			lk.setAttribute("type", "text/css");
			lk.setAttribute("rel", "stylesheet");
			lk.setAttribute("href", root_folder+css.dir+css.files[0]+"_inv.css");
			head.appendChild(lk);
		for (i=0;i <= js.files.length-1;i++){
			var element = document.createElement("script");
			element.setAttribute("type", "text/javascript");
			element.setAttribute("src", root_folder+js.dir+js.files[i]+".js");
			head.appendChild(element);
		}		
	},
// ==================== Function find country ===============================================
	getCountry: function(){	target_country_value = sv_ebus_country;
		if (((sv_ebus_country == "")||(sv_ebus_country.length > 2))&&(s_prop7 != "")) sv_ebus_country = s_prop7; target_country_value = "undefined";
		if ((sv_ebus_country == "")&&(s_prop7 == "")) sv_ebus_country = "undefined";
		for (i=2; i<(inf.length); i++){
			if(inf[i].cname == sv_ebus_country.toLowerCase()){
				inf[i].flag = "y"; inf[0].index = i; return inf[i];
			}			
		}return	inf[1];
	},
// ==================== Cookies Expire Time Set Up ===========================================
	setCookiesExp: function(){
		td.sv_ebus_clicks_expires.setTime(td.sv_ebus_clicks_expires.getTime()+(td.sv_ebusclicks_cookielife*60*1000));
		td.sv_ebus_expires.setTime(td.sv_ebus_expires.getTime()+(td.sv_ebus_cookielife*24*60*60*1000));		
	},
// ==================== Function check domains exeptions in URL ==============================
	setExep: function(exep_array){
		for (i=0; i <= exep_array.length-1; i++) {				
			var result = svVal.gen.myurl.indexOf(exep_array[i]); if ((result !=-1) && (exep_array[i] != "")){ return true; }}
		return false;
	},
// ==================== Function getcookie ===================================================
	getCookie: function(name){
		var dc = document.cookie; var prefix = name + "="; var begin = dc.indexOf("; " + prefix); 
		if (begin == -1) { begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		}else{ begin += 2; }
		var end = document.cookie.indexOf(";", begin);
		if (end == -1) { end = dc.length; }
		return unescape(dc.substring(begin + prefix.length, end));
	},
// ==================== Function updatecookie ==================================================
	checkClicks: function(){		
		if (document.cookie.indexOf("HP_EBUS_"+gen.cdomain+"_CLICKS")>-1){
		setTimeout("hpSV.setTimer()", 1000);
			var idx = inf[0].index;	
			var clk = hpSV.getCookieClicks();
			if ((clk[0]*1) == inf[idx].clicks){
				hpSV.addClick();
				if ((clk[0]*1) >= inf[idx].clicks){ return true; }
			}else{ hpSV.addClick(); return false; }
		}else{
			document.cookie = "HP_EBUS_"+gen.cdomain+"_CLICKS=1x1x1;path=/;Expires="+td.sv_ebus_clicks_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
			setTimeout("hpSV.setTimer()", 1000);
		}		
	},
	getCookieClicks: function(){ return (document.cookie.indexOf("HP_EBUS_"+gen.cdomain+"_CLICKS")>-1) ? hpSV.getCookie('HP_EBUS_'+gen.cdomain+'_CLICKS').split("x") : [null,null,null]; },
// ==================== Function addLoadEvent =================================================	
	getReady: function(f, a){ var n = 0; var t = setInterval(function(){ var c = true; n++; 	
		if(typeof document.getElementsByTagName != 'undefined' && (document.getElementsByTagName('body')[0] != null || document.body != null)) { c = false; if(typeof a == 'object'){
		for(var i in a)	{ if ( (a[i] == 'id' && document.getElementById(i) == null) || (a[i] == 'tag' && document.getElementsByTagName(i).length < 1) ) { c = true; break; }}} if(!c) { f(); clearInterval(t); } }		
		if(n >= 60) { clearInterval(t); } }, 250);
	},
// ==================== Function increaseNumClicks ==============================================
	addClick: function(){
		var clk = hpSV.getCookieClicks();
		sv_clk = clk[1]*1; var sv_stopclick = clk[0]*1;		
		if (clk[0]*1 >= inf[inf[0].index].clicks){ sv_stopclick = inf[inf[0].index].clicks;	
		}else{sv_stopclick++;}
		document.cookie = "HP_EBUS_"+gen.cdomain+"_CLICKS="+sv_stopclick+"x"+(sv_clk+1)+"x"+(clk[2])+";path=/;Expires="+td.sv_ebus_clicks_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
	},
// ==================== Function increaseCounter ================================================
	setTimer: function(){
		if (hpSV.getCookie('HP_EBUS_'+gen.cdomain+'_CLICKS')){
		var clk = hpSV.getCookieClicks();
		var sv_ebus_time = clk[2]*1;
		document.cookie = "HP_EBUS_"+gen.cdomain+"_CLICKS="+(clk[0])+"x"+clk[1]+"x"+(sv_ebus_time+1)+";path=/;Expires="+td.sv_ebus_clicks_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
		setTimeout("hpSV.setTimer()", 1000);	
		}			
	},	
// ==================== Function generate global unique id ======================================
	genGUID: function(){		
		var TempDate = new Date();
		var guid = (TempDate.getMonth()+1) + "-" + TempDate.getDate() + "-" + TempDate.getYear() + "_" + TempDate.getHours() + "-" + TempDate.getMinutes() + "-" + TempDate.getSeconds() + "-" + TempDate.getMilliseconds() + "_" + TempDate.getTimezoneOffset() + "_V";
		for (var i = 1; i <= 32; i++){ var n = Math.floor(Math.random() *16.0).toString(16); guid += n; if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid += "-"; }
		return guid;
	},
// ==================== Function return URL value ===============================================
	getURLValue: function(url_val, output){
	if(svVal.gen.myurl.indexOf("&"+url_val+"=")>-1){	
		var regExp = new RegExp("[\\?&]"+url_val+"=([^&?#]*)"); var result = regExp.exec( svVal.gen.myurl ); 
		output = result[1];
	}return output;},
// ==================== Function show overlay ===================================================
	showOverlay: function(){
		if((window.Drag)&&(window.langLib)){ test.invLaunched = "yes";
		document.cookie = "HP_EBUS=true;path=/;Expires="+td.sv_ebus_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
			if ((bwr.ns6) || (bwr.ie4)){
				var LCOD = 'L'+l; var langResult = langLib.selectLang(LCOD);					
				/*****************************Begin overlay HTML code****************************************/				
				var str='	<div id="'+css.csspfx+'_titlebar">';
					str+='		<a href="javascript:hpSV.toggleBox(\''+css.csspfx+'_main\',0);"><img border="0" src="'+root_folder+img.dir+'close.gif" alt="close button"></a>';
					str+='		<span>'+langResult.title+'<\/span>';
					str+='	<\/div><!-- end titlebar \/\/-->';
					str+='	<div id="'+css.csspfx+'_header"><img src="'+root_folder+img.dir+'sv_logo.gif" alt="hp logo"><span>'+langResult.title+ '<\/span>';					
					str+='	<\/div><!-- end header \/\/-->';
					str+='	<div id="'+css.csspfx+'_body" dir='+langResult.dir+'> ';
					str+=	langResult.text;
					str+='		<form dir='+langResult.dir+' class="'+css.csspfx+'_form" action="" name="sv_ebus_form">';
					str+='			<input class="'+css.csspfx+'_radio" type="radio" name="sv_ebus_invitation" value="yes" checked="true"><span>' + langResult.yes + '<\/span>';
					str+='			<br \/><input class="'+css.csspfx+'_radio" type="radio" name="sv_ebus_invitation" value="no"><span>' + langResult.no + '<\/span><br \/>';
					str+='			<input class="'+css.csspfx+'_button" type="button" onClick="hpSV.sv_ebus_verify();" value='+ langResult.button+' >';
					str+='		<\/form>';
					str+='	<\/div><!-- end body \/\/-->';
					str+='	<div id="'+css.csspfx+'_footer"> &copy; ' + td.sv_ebus_yr + ' Hewlett-Packard Development Company, L.P.';
					str+='	<\/div><!-- end footer \/\/-->';
					str+='<!-- END FLOATING LAYER CODE \/\/--> ';
				hpSV.dv = document.createElement('div'); 
				hpSV.dv.setAttribute('id', css.csspfx+'_main');	
				hpSV.dv.style.left = iv.left;
				hpSV.dv.style.top = iv.top;
				hpSV.dv.style.zIndex = iv.zIndex;				
				hpSV.dv.onmousemove=function(){Drag.startDrag();}
				document.body.appendChild(hpSV.dv);
				hpSV.ov = document.getElementById(css.csspfx+'_main');
				hpSV.ov.innerHTML=str;
				csspfx = css.csspfx;
				Drag.startDrag();		
				hpSV.toggleBox(css.csspfx+'_main',1);
			}
		}else{ window.setTimeout("hpSV.showOverlay()", 150); }
	},
// ==================== Function ebus verify ===========================================
	sv_ebus_verify: function(){
		if (document.sv_ebus_form.sv_ebus_invitation[1].checked == true){
			hpSV.launchSurvey(2);
			td.sv_ebus_expires.setTime(td.sv_ebus_expires.getTime()+(td.sv_ebus_cookielife*24*60*60*1000));
			//document.cookie = "HP_EBUS=true;path=/;Expires="+td.sv_ebus_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
			hpSV.toggleBox(css.csspfx+'_main',0);
		}else{  hpSV.launchSurvey(1); hpSV.toggleBox(css.csspfx+'_main',0); }
	},
// ==================== Function launch survey =========================================
	launchSurvey: function(invitation){ var clk = hpSV.getCookieClicks();
		test.svLaunched = "yes";
		var tab_segment = hpSV.getCookie('hp_cust_seg_sel');
		var ABCHomePageCookie = hpSV.getCookie('OV2_ABC_2007_12_05');
		var url1 = "http://g1w2399g.austin.hp.com/Community/se.ashx?s="+gen.svID+"&c="+sv_ebus_lang+"&tce="+gen.sv_ebus_tce.toLowerCase()+"&tab_segment="+tab_segment+"&ABCHomePageCookie="+ABCHomePageCookie+"&svLaunched="+test.svLaunched+"&invLaunched="+test.invLaunched+"&stop_click="+clk[0]+"&total_clicks="+clk[1]+"&seconds_to_launch="+clk[2]+"&jscript="+gen.sv_ebus_jscript+"&reference="+escape(gen.ref)+"&title="+escape(gen.title)+"&code="+gen.sv_ebus_sitecode+"&country="+inf[inf[0].index].ccode+"&prop7="+escape(sv_ebus_country.toLowerCase())+"&s_hp_region="+escape(s_hp_region.toLowerCase())+"&prop8="+escape(sv_ebus_lang.toLowerCase())+"&prop9="+escape(prop.n9)+"&prop13="+escape(prop.n13)+"&prop1="+escape(prop.n1)+"&prop2="+escape(prop.n2)+"&prop3="+escape(prop.n3.toLowerCase())+"&prop4="+escape(prop.n4)+"&hp_design_version="+escape(sv_ebus_design_version.toLowerCase())+"&generator="+escape(sv_ebus_generator.toLowerCase())+"&page_content="+escape(sv_ebus_page_content.toLowerCase())+"&lifecycle="+escape(sv_ebus_lifecycle.toLowerCase())+"&guid="+escape(hpSV.genGUID())+"&target_country="+escape(target_country_value.toLowerCase())+"&product_service_name="+escape(sv_ebus_product_service_name.toLowerCase())+"&web_section_id="+escape(sv_ebus_web_section_id.toLowerCase())+"&bus_prod_type="+sv_ebus_reversablehtmlid_arr[1]+"&bus_prod_cat="+sv_ebus_reversablehtmlid_arr[2]+"&bus_prod_class="+sv_ebus_reversablehtmlid_arr[0];
		url1 += "&invitation="+invitation;
		window.open(url1, "","height=800,width=750,scrollbars=yes,resizable=yes");	
	},
// ==================== Function toggle box ============================================
	toggleBox: function(szDivID, iState){
	   var obj = document.layers ? document.layers[szDivID] : document.getElementById ?  document.getElementById(szDivID).style : document.all[szDivID].style;
	   obj.visibility = document.layers ? (iState ? "show" : "hide") : (iState ? "visible" : "hidden");	   
	   if (bwr.ie4){ var fr = document.getElementById("dummyFRM"); fr.style.visibility = obj.visibility; }
	   if (iState == 0){ document.cookie = "HP_EBUS=true;path=/;Expires="+td.sv_ebus_expires.toGMTString()+";domain="+gen.sv_ebus_domain;
		this.rmEle.All();
		}
	},	
// ==================== Function scrape meta tags ======================================
	scrapeMeta: function(){
		if (document.getElementsByTagName){	var myMeta;	sv_ebus_lang = window.document.documentElement.lang;
			for (var i=0; i<svVal.allMetas.length; i++){ myMeta = svVal.allMetas[i];
				if (svVal.varMap[myMeta.name] != null){ eval(svVal.varMap[myMeta.name]+ " ='"+ myMeta.content.replace(/(\\|\/)/g,"_").toLowerCase().split("'").join("") +"'"); }
		}}
		prop.n9 = sv_ebus_segment.toLowerCase(); sv_ebus_reversablehtmlid_arr=sv_ebus_reversablehtmlid.split("-")
	},
	rmEle: {
		All: function(){ this.Div(css.csspfx+'_main'); 
			this.Tgs(css.files[0]+'_inv', 'LINK', 'css');
			for(i=0;i< js.files.length;i++){  this.Tgs(js.files[i], 'SCRIPT', 'js'); }
			this.Tgs(gen.sv_ebus_jscript, 'SCRIPT', '');
		},
		Tgs: function(list, tag, ext){
			if(list.indexOf('.')==-1){list+='.';} {var source = 'href';}
			for (var i=0;i < document.getElementsByTagName(tag).length;i++) {
				var tg = document.getElementsByTagName(tag)[i];
				if (tag.toLowerCase() == 'script') {source = 'src';}
				if (tg[source].indexOf('/'+list+ext) != -1 ){ var deleted = tg.parentNode.removeChild(tg); }			
			}
		},
		Div: function(id){
			var div = document.getElementById(id); while (div.firstChild) { div.removeChild(div.firstChild)}
		}
	}	
}//End of hpSV
if(hpSV.setExep(svVal.aquarius_exep)== false) {
	hpSV.getReady(hpSV.init);
}
-->