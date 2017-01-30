var s_hp_region = "na"
var s_hp_jumpid_prop = "s_prop2"  // define if you need to capture jumpid in an s_prop variable
var s_hp_jumpid_path_prop = "s_prop4" // define if you need to capture jumpid pathing
if(s_account.indexOf("hphqsmbstore") != -1 || s_account.indexOf("hphqpublicsector") !=-1) {
	s_hp_jumpid_mixedcase=true;
}

var s_hp_emid="dimid";
var s_hp_autoemcid="dicid"
var hp_setEvent8 = false;
if(window.s_pageName && s_pageName.toLowerCase().indexOf("thank") != -1) {
	hp_setEvent8=true;
} else {
	if(window.location.pathname.toLowerCase().indexOf("thank") != -1) { hp_setEvent8=true}
}

if (window.disable_event8 && disable_event8==true){
		hp_setEvent8=false;
}

if(hp_setEvent8) {
	s_hp_addSEvents("event8");
	s_eVar21=window.location.href;
	if(window.s_pageName && s_pageName.length>2) {s_eVar21=s_pageName}
}
// s_hp_addSEvents("event1");

function s_hp_addSEvents(eventName) {
	if(window.s_events && s_events.length>0) {
		s_events+=","+eventName;
	} else {
		s_events=eventName;
	}	
}
// trutag:
var hu_path = window.location.pathname;

if(hu_path.indexOf("/united-states/campaigns/")!=-1 || hu_path.indexOf("/country/us/en/prodserv/notebooks_tabletpcs.html")!=-1 || hu_path.indexOf("/country/us/en/prodserv/desktops.html")!=-1 || hu_path.indexOf("/country/us/en/prodserv/notebooks-small-graphics.html")!=-1) {
	var CI_ItemMfr='HP';
	var CI_PageType='Product Details Page'; 
	s_hp_includeJavaScriptFile("cts.channelintelligence.com","/9919466_landing.js");
}