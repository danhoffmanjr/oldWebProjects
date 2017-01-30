var ci_vid = 9919466;
var ci_cookieDomain=".hp.com";
var ci_imgs=[];
function CI_ReadCookie(ci_cookieName) {
	var ci_cookieParts = document.cookie.split(';');
	ci_cookieName += '=';
	for (var ci_cookiePartIndex=0;ci_cookiePartIndex<ci_cookieParts.length;ci_cookiePartIndex++)
	{
		var ci_cookiePart=ci_cookieParts[ci_cookiePartIndex];
		while (ci_cookiePart.charAt(0)===' '){ci_cookiePart=ci_cookiePart.substring(1,ci_cookiePart.length);}
		if (ci_cookiePart.indexOf(ci_cookieName)===0){return ci_cookiePart.substring(ci_cookieName.length,ci_cookiePart.length);}
	}
	return null;
}
function ci_CC(name,value,daysTillExpire){
	if (daysTillExpire){
		var exDate=new Date();
		exDate.setTime(exDate.getTime()+(daysTillExpire*24*60*60*1000));
		document.cookie=name+'='+value+'; expires='+exDate.toGMTString()+'; domain='+ci_cookieDomain+'; path=/';
	}
}
function CI_LogError(err, customIdentifier) {
	try {
		var oI=new Image();oI.src='https://secure.channelintelligence.com/links/support/js.error.asp?nVID='+ci_vid+'&sCustomerIdentifier='+customIdentifier+'&sMessage='+encodeURIComponent(err.message)+'&sName='+encodeURIComponent(err.name)+'&nNumber='+(err.number&0xFFFF).toString();
	}catch (err1) {}
}
function CI_ExternalJS(link){
  	var script  = document.createElement('script');
  	script.src  = link;
  	script.type = 'text/javascript';
  	script.defer = true;
  	document.getElementsByTagName('head').item(0).appendChild(script);
}
function CI_ExternalCSS(url){
  	var link  = document.createElement('link');
  	link.rel  = 'stylesheet';
  	link.type = 'text/css';
  	link.href = url;
  	document.getElementsByTagName('head').item(0).appendChild(link);
}
function CI_ArrayStartsWith(ci_array, value){
	for (var ci_arrayIndex=0; ci_arrayIndex < ci_array.length; ci_arrayIndex++){
		if (value !== null && value !== undefined) {
			if (ci_array[ci_arrayIndex].toLowerCase() == value.substr(0,ci_array[ci_arrayIndex].length).toLowerCase()) return true
		}
	}
	return false
}
function CI_GetValue(ci_vName,ci_dValue) {
	if (typeof(window[ci_vName])!=="undefined"){return window[ci_vName];}else{return ci_dValue===undefined?null:ci_dValue;}
}
function ci_FP(ci_pix_url){var ci_pic=new Image(1,1);ci_pic.src=ci_pix_url;ci_imgs[ci_imgs.length]=ci_pic;}
function ci_FP_FRAME(ci_pix_url){document.write('<iframe width="0" scrolling="no" height="0" frameborder="0" src="' + ci_pix_url + '"></iframe>');}
function ci_FP_SCRIPT(ci_pix_url){document.write('<script type="text/javascript" src="'+ci_pix_url+'"></script>');}
try {
	var ci_orderid=CI_GetValue('CI_OrderID',null);
	if(ci_orderid!==null) {
		var ci_baseurl="https://ttwbs.channelintelligence.com?eid=1&";
		var ci_url="cts=v28&"+"v="+ci_vid+"&o="+ci_orderid; 
		if (CI_ReadCookie('ci_cpncode')!==null){ci_url+="&cpncode="+CI_ReadCookie('ci_cpncode');}
		if (CI_ReadCookie('ci_tid')!==null){ci_url+="&tid="+CI_ReadCookie('ci_tid');}
		var ci_aoid=CI_ReadCookie('ci_aoid');
		var ci_pixmgr=CI_ReadCookie('ci_pixmgr');
		var ci_src=CI_ReadCookie('ci_src');
		var ci_tag=CI_ReadCookie('ci_tag');
		var ci_yho_vt=CI_ReadCookie('ci_yho_vt');
		var ci_yho_dr=CI_ReadCookie('ci_yho_dr');
		var ci_u1=CI_ReadCookie('ci_u1');
		var ci_shipzip=CI_GetValue('CI_ShipZip',null);
		var ci_shipstate=CI_GetValue('CI_ShipState',null);
		var ci_customerid=CI_GetValue('CI_CustomerID',null);
		var ci_aIDs=CI_GetValue('CI_ItemIDs',null);
		var ci_aItemNames=CI_GetValue('CI_ItemNames',null);
		var ci_aPrices=CI_GetValue('CI_ItemPrices',null);
		var ci_aQtys=CI_GetValue('CI_ItemQtys',null);
		var ci_aMfrNumbers=CI_GetValue('CI_ItemMfrNums',null);
		var ci_transactionValue=0;
		var ci_productids='';
		var ci_cjitems='';
		var ci_itemCount=0;
		var ci_flooditems='';
		var ci_floodqtys='';
		var ci_floodprices='';
		var ci_flooditems2='';
		var ci_floodqtys2='';
		var ci_floodprices2='';
		var ci_nextjumpskus='';
		var ci_nextjumpnames='';
		var ci_nextjumpqtys='';
		var ci_nextjumpprices='';
		var ci_nextjumpnames='';
		
		for (ci_skuIndex = 0;ci_skuIndex<ci_aIDs.length;ci_skuIndex++) {
			ci_url += "&s=" + ci_aIDs[ci_skuIndex] + "|" + ci_aQtys[ci_skuIndex] + "|" + ci_aPrices[ci_skuIndex] + "|";
			if (ci_aMfrNumbers != undefined) {ci_url += ci_aMfrNumbers[ci_skuIndex];}
			ci_aPrices[ci_skuIndex] = String(ci_aPrices[ci_skuIndex]).replace(',','')
			ci_transactionValue = ci_transactionValue + parseFloat(ci_aQtys[ci_skuIndex] * ci_aPrices[ci_skuIndex]);
			ci_cjitems += "&ITEM" + (ci_skuIndex + 1) + "=" + ci_aIDs[ci_skuIndex] + "&QTY" + (ci_skuIndex + 1) + "=" + parseInt(ci_aQtys[ci_skuIndex]) + "&AMT" + (ci_skuIndex + 1) + "=" + ci_aPrices[ci_skuIndex];
			if(ci_productids===''){ci_productids = ci_aIDs[ci_skuIndex];}else{ci_productids = ci_productids + ',' + ci_aIDs[ci_skuIndex];}
			ci_itemCount = ci_itemCount + parseInt(ci_aQtys[ci_skuIndex]);
			if(ci_flooditems===''){ci_flooditems = ci_aIDs[ci_skuIndex];}else{ci_flooditems = ci_flooditems + '!' + ci_aIDs[ci_skuIndex];}
			if(ci_floodqtys===''){ci_floodqtys = ci_aQtys[ci_skuIndex];}else{ci_floodqtys = ci_floodqtys + '!' + ci_aQtys[ci_skuIndex];}
			if(ci_floodprices===''){ci_floodprices = ci_aPrices[ci_skuIndex];}else{ci_floodprices = ci_floodprices + '!' + ci_aPrices[ci_skuIndex];}
			if(ci_flooditems2===''){ci_flooditems2 = ci_aIDs[ci_skuIndex];}else{ci_flooditems2 = ci_flooditems2 + '^' + ci_aIDs[ci_skuIndex];}
			if(ci_floodqtys2===''){ci_floodqtys2 = ci_aQtys[ci_skuIndex];}else{ci_floodqtys2 = ci_floodqtys2 + '^' + ci_aQtys[ci_skuIndex];}
			if(ci_floodprices2===''){ci_floodprices2 = ci_aPrices[ci_skuIndex];}else{ci_floodprices2 = ci_floodprices2 + '^' + ci_aPrices[ci_skuIndex];}
			if(ci_nextjumpskus===''){ci_nextjumpskus = ci_aIDs[ci_skuIndex];}else{ci_nextjumpskus = ci_nextjumpskus + '^' + ci_aIDs[ci_skuIndex];}
			if(ci_nextjumpqtys===''){ci_nextjumpqtys = ci_aQtys[ci_skuIndex];}else{ci_nextjumpqtys = ci_nextjumpqtys + '^' + ci_aQtys[ci_skuIndex];}
			if(ci_nextjumpprices===''){ci_nextjumpprices = ci_aPrices[ci_skuIndex];}else{ci_nextjumpprices = ci_nextjumpprices + '^' + ci_aPrices[ci_skuIndex];}
			if(ci_nextjumpnames===''){ci_nextjumpnames = ci_aItemNames[ci_skuIndex];}else{ci_nextjumpnames = ci_nextjumpnames + '^' + ci_aItemNames[ci_skuIndex];}
		}
		
		var ci_windowHost = window.location.host;
		if(ci_windowHost.indexOf('atlanta.hp.com',0) === -1) {
			try{
				ci_FP(ci_baseurl + ci_url);
			}catch(err){CI_LogError(err, 'confirmation_CI');}
			
			//YesMail
			if (ci_tag!==null&&ci_tag!==''){
				try{
					ci_FP("https://link.p0.com/1x1c.dyn?p=MM4D4A93&d="+ci_transactionValue);
					ci_FP("https://link.p0.com/1x1c.dyn?p=040A1M5&d="+ci_transactionValue);
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=50963218&res="+escape("https://link.p0.com/1x1c.dyn?p=MM4D4A93&d="+ci_transactionValue));
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=50963218&res="+escape("https://link.p0.com/1x1c.dyn?p=040A1M5&d="+ci_transactionValue));
				}catch(err){CI_LogError(err, 'confirmation_YesMail');}
			}

			//Shopping.com Pixel & Survey
			if (ci_src==='cii_13736960'){
				try{
					ci_FP("https://stat.dealtime.com/pixel/"+Math.random()*10000000000000000+"?ROI_EvnTyp=ROI&ROI_SrvPgTyp=ROICHKO&ROI_MrcID=445597&ROI_OrdAmn="+ci_transactionValue+"&ROI_CtgNm=PUT_YOUR_DATA_HERE&ROI_CtgID=PUT_YOUR_DATA_HERE&ROI_PrdID="+ci_productids+"&ROI_PrdNm=PUT_YOUR_DATA_HERE&ROI_OrdID="+ci_orderid+"&ROI_OrgHttpRfr=&ROI_FrgMrcID=&ROI_MrcAggID=&ROI_VOTFUsrID=&ROI_OrdCrr=");
					//Survey
					CI_ExternalJS('https://www.shopping.com/xMSJ?pt=js&mid=445597&lid=1');
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=13736960&bSurvey=true&res="+escape("https://stat.DealTime.com/ROI/ROI.js?mid=445597"));
				}catch(err){CI_LogError(err, 'confirmation_Shopping');}
			}
			//Shopzilla Pixel & Survey
			if (ci_src==='cii_10043468'){
			    try{
				ci_FP("https://www.bizrate.com/roi/index.xpml?cust_type=1&mid=31981&order_id="+ci_orderid+"&order_value="+ci_transactionValue+"&units_ordered="+ci_itemCount);
					//Survey
				CI_ExternalJS('https://eval.bizrate.com/js/pos_31981.js');
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=10043468&bSurvey=true&res="+escape("https://eval.bizrate.com/js/pos_31981.js"));
				}catch(err){CI_LogError(err, 'confirmation_Shopzilla');}
			}
			//Nextag Pixel & Survey
			if (ci_src==='cii_9324560'){
				try{
					ci_FP("https://im1.pv.sv.nextag.com/seller/roitrack.jsp?id=174756&rev="+ci_transactionValue+"&order="+ci_orderid);
					//Survey
					ci_FP_FRAME('https://merchants.nextag.com/seller/review/popup.jsp?id=174756');
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=9324560&bSurvey=true&res="+escape("https://merchants.nextag.com/seller/review/popup.jsp?id=174756")); 
				}catch(err){CI_LogError(err, 'confirmation_Nextag');}
			}
			//PriceGrabber Survey
			if (ci_src==='cii_5784816'){
				try{
					popup_pos_x=50;
					popup_pos_y=50;
					popup_order_number=ci_orderid;
					popup_email = '';
					document.write('<'+ 'script type="text/javascript" src="https://www.pricegrabber.com/rating_merchrevpopjs.php?retid=802"><\/script>'); 
					//CI Logging
					ci_FP("https://ttwbs.channelintelligence.com?eid=33&ci_url="+ci_url+"&d=5784816&bSurvey=true&res="+escape("https://www.pricegrabber.com/rating_merchrevpopjs.php?retid=802"));
				}catch(err){CI_LogError(err, 'confirmation_PriceGrabber');}
			}
			//CJ Pixel
			try{
				var ci_cjurl='';
				ci_cjurl="https://www.emjcd.com/u?CID=1501481&OID="+ci_orderid+"&TYPE=305902"+ci_cjitems+"&CURRENCY=USD&METHOD=IMG";
				ci_FP(ci_cjurl);
				ci_FP('https://ttwbs.channelintelligence.com?eid=33&ci_url='+ci_url+'&d=11138&res='+escape(ci_cjurl));
			}catch(err){CI_LogError(err, 'confirmation_CJ');}
			//Google Conversion Pixel
			try{
				ci_FP('https://www.googleadservices.com/pagead/conversion/989598293/?value='+ci_transactionValue+'&label=xWVgCNO1ogIQ1aTw1wM&guid=ON&oid='+ci_orderid+'&script=0');
				ci_FP('https://ttwbs.channelintelligence.com?eid=33&ci_url='+ci_url+'&d=14110944&ordervalue='+ci_transactionValue+'&res='+escape('https://www.googleadservices.com/pagead/conversion/989598293/?value='+ci_transactionValue+'&label=xWVgCNO1ogIQ1aTw1wM&guid=ON&oid='+ci_orderid+'&script=0'));
			}catch(err){CI_LogError(err, 'confirmation_Google');}
			//Floodlight
			try{
				ci_FP_FRAME("https://fls.doubleclick.net/activityi;src=2305757;type=hhosa606;cat=hphom955;u1="+ci_flooditems+";u3="+ci_floodprices+";u4="+ci_floodqtys+";u6="+ci_shipzip+";u7="+ci_shipstate+";qty=1;cost="+ci_transactionValue+";ord="+ci_orderid+"?");
				ci_FP_FRAME("https://fls.doubleclick.net/activityi;src=2553893;type=sales734;cat=hphom787;u1="+ci_flooditems2+";u3="+ci_floodprices2+";u4="+ci_floodqtys2+";u6="+ci_shipzip+";u7="+ci_shipstate+";qty=1;cost="+ci_transactionValue+";ord="+ci_orderid+"?");
			}catch(err){CI_LogError(err, 'confirmation_FloodLight');}
			//NextJump
			try{
				var ci_nextjumpurl='';
				ci_nextjumpurl="https://visit.nextjump.com/pixel?nxjsid=MER-06R&etp=page&etg=TRXN&num="+ci_orderid+"&amt="+ci_transactionValue+"&zip="+ci_shipzip+"&skus="+ci_nextjumpskus+"&names="+ci_nextjumpnames+"&quantity="+ci_nextjumpqtys+"&price="+ci_nextjumpprices+"&cart="+ci_customerid+"&csid="+ci_u1;
				ci_FP(ci_nextjumpurl);
				ci_FP('https://ttwbs.channelintelligence.com?eid=33&ci_url='+ci_url+'&d=50998322&res='+escape(ci_nextjumpurl));
			
			}catch(err){CI_LogError(err, 'confirmation_NextJump');}
		
		} else {
			try{
				ci_FP(ci_baseurl.replace("eid=1","eid=28") + ci_url);
			}catch(err){CI_LogError(err, 'confirmation_CI');}		
		}
	}  
}catch(err1){CI_LogError(err1, 'confirmation');}
