var ci_windowHost = window.location.host;
if(ci_windowHost.indexOf('atlanta.hp.com',0) === -1) {	
	var ci_imgs=[];
	function ci_FP(ci_pix_url,protocol)
	{var ci_pic=new Image(1,1);ci_pic.src=(protocol!==undefined ? protocol + '://' : (window.location.protocol.toLowerCase() == 'http:' ? 'http://' : 'https://'))+ci_pix_url;ci_imgs[ci_imgs.length]=ci_pic;}
	var ci_referrer = '';
	var ci_referrer_blocked = false;
	try {ci_referrer = escape(document.referrer);}catch (err){ci_referrer_blocked = true;}

	//preventing from running in cart/confirmation (https) until landing.js gets removed from those pages	
	if(window.location.protocol.toLowerCase() == 'http:'){
		var ci_vid= 9919466;
		var ci_cookieDomain=".hp.com";
		var ci_refDomain="shopping.hp.com";

		function ci_FP_FRAME(ci_pix_url, protocol){document.write('<iframe width="0" scrolling="no" height="0" frameborder="0" src="' + (protocol !== undefined ? protocol + '://' : (window.location.protocol.toLowerCase() == 'http:' ? 'http://' : 'https://')) + ci_pix_url + '"></iframe>');}
		function ci_FP_SCRIPT(ci_pix_url, protocol){document.write('<script type="text/javascript" src="' + (protocol !== undefined ? protocol + '://' : (window.location.protocol.toLowerCase() == 'http:' ? 'http://' : 'https://')) + ci_pix_url + '"></script>');}

		function ci_RQV(name,dValue){
		    var qArg=new RegExp('[\\?&]'+name+'=?([^&#]*)','i').exec(window.document.location);
		    if(qArg===null){return dValue===undefined?null:dValue;}else if(qArg.length<2){return '';}else{return qArg[1];}
		}
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
		function ci_UID(value){
			var today=new Date();
			var UID=ci_vid+"-"+value+"-"+Math.floor(Math.random()*9999999999)+today.getFullYear().toString()+today.getMonth().toString()+ today.getDay().toString()+today.getHours().toString()+today.getMinutes().toString()+today.getSeconds().toString()+today.getMilliseconds().toString();
			return UID;
		}
		function ci_PIX(loc,eid,tid,src,sku,tag,cid){
			var url='';
			if (loc===1){url='origin.channelintelligence.com/log.asp?';}
			if (loc===2){url='cts-log.channelintelligence.com?';}
			url+='vid='+ci_vid+'&eid='+eid+'&tid='+tid;
			if(src!==null){url+='&src='+src;}
			if(sku!==null){url+='&sku='+sku;}
			if(tag!==null){url+='&tag='+tag;}
			if(cid!==null){url+='&cid='+cid;}
			url += "&ref="+ci_referrer;
			if(ci_referrer_blocked==true){url+='&refblocked=true';}
			return ci_FP(url, 'http');
		}
		try {
			var ci_cpncode=ci_RQV('cpncode');
			var ci_srccode=ci_RQV('srccode');
			var ci_src=ci_RQV('ci_src');
			var ci_sku=ci_RQV('ci_sku');
			var ci_gpa=ci_RQV('ci_gpa');
			var ci_tag=ci_RQV('ci_tag');
			var ci_aoid=ci_RQV('aoid');
			var ci_tid=ci_RQV('ci_tid', '');
			var ci_source=ci_RQV('source');
			var ci_jumpidemail=ci_RQV('jumpid');
			var ci_cid=ci_RQV('ci_cid');
			var ci_category=ci_RQV('category');
			var ci_landing=ci_RQV('landing');
			var ci_productcode=ci_RQV('product_code');
			var ci_seriesname=ci_RQV('series_name');
			var ci_itemid=null;
			var ci_catid=null;
			var ci_proc=null;
			//NextJump
			var ci_nxjcsid=ci_RQV('u1');
			if(ci_nxjcsid!==null){ci_CC('ci_u1',ci_nxjcsid,30);}
			
			//custom code to dynamically assign ci_src if ci_gpa is found
			if(ci_gpa!==null && ci_sku!==null){
				if(ci_gpa=='pla'){ci_src='64119933';}
				if(ci_gpa=='pe'){ci_src='27500988';}
			}

			if(ci_tid===''){ci_tid=ci_UID(ci_sku);}

			//determine category
			if(ci_category!==null){
				ci_catid=ci_category;
			} else if(ci_category==null && ci_landing!==null){
				ci_catid=ci_landing;
			}
			//determine product
			if(ci_productcode!==null){
				ci_itemid=ci_productcode;
			} else if(ci_productcode==null && ci_seriesname!==null){
				ci_itemid=ci_seriesname;
			} else if(ci_productcode==null && ci_seriesname==null && ci_sku!==null){
				ci_itemid=ci_sku;
			}

			
			if(ci_catid!==null&&ci_catid.toLowerCase().indexOf('desktop')>-1||ci_catid!==null&&ci_catid.toLowerCase().indexOf('notebook')>-1){
				if((ci_seriesname!==null&&ci_seriesname.toLowerCase().indexOf('t_series')>-1)||(location.href.toLowerCase().indexOf('=intel')>-1)){
					//Intel Desktops and Laptops
					var axel = Math.random()+"";
					var a = axel * 10000000000000;
					ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hhola906;ord='+ a + '?');
					ci_proc="Intel";

				}else{
					//Non Intel Desktops and Laptops
					var axel = Math.random()+"";
					var a = axel * 10000000000000;
					ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hhono555;ord=1;num='+ a + '?');

					if((ci_seriesname!==null&&ci_seriesname.toLowerCase().indexOf('z_series')>-1)||(location.href.toLowerCase().indexOf('=amd')>-1)){
						ci_proc="AMD";
					}
				}
			}else{
				//Non Desktops and Laptops
				if(location.href.toLowerCase().indexOf('/bestpc')===-1){
					var axel = Math.random()+"";
					var a = axel * 10000000000000;
					ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hhono781;ord=1;num='+ a + '?');
				}
			}
			
			if(ci_itemid!==null||ci_catid!==null||ci_proc!=null){
				try{
					ci_FP_FRAME(
						'dar.youknowbest.com/Default_v2.htm?vid=' + ci_vid
						+(ci_itemid===null?'':'&lastsku='+ci_itemid)
						+(ci_catid===null?'':'&lastcat='+ci_catid)
						+(ci_proc===null?'':'&lastproc='+ci_proc)
					);

				}catch(err){CI_LogError(err, 'landing_PerformanceMkting');}
			}


			if(ci_aoid!==null&&ci_source==='MSNCashbackDirect'){ci_CC('ci_pixmgr','MSN',90);ci_tag=ci_aoid;}
			if(ci_tag===null&&ci_aoid!==null){if(ci_jumpidemail!=undefined&&ci_jumpidemail.substring(0,3)==='em_'){ci_tag=ci_jumpidemail;}else{ci_tag=ci_aoid;}ci_CC('ci_pixmgr',ci_aoid,90);ci_CC('ci_tag',ci_tag,90);}

			//GoogleProductAds
			if(ci_src!==null&&ci_src=='64119933'){ci_CC('ci_pixmgr','64119933',30);}

			//247 RealMedia
			try{
				ci_FP('network.realmedia.com/RealMedia/ads/adstream_nx.ads/TRACK_Hp/Retarget_Homepage_Nonsecure@Bottom3');
			}catch(err){CI_LogError(err, 'landing_247_RealMedia');}
			
			
			//Floodlight Tags Start			
			try{
				if(location.href.toLowerCase().indexOf('/savecatalogrequest.do')>-1){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hphho421;ord=1;num='+ a + '?');
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2553893;type=leads417;cat=hphho896;ord=1;num='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightCatalog');}
				}
				if(location.href.toLowerCase().indexOf('/mpss_portal.do')>-1){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hphho019;ord=1;num='+ a + '?');
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2553893;type=leads417;cat=hphho283;ord=1;num='+ a + '?');
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=ipggr280;cat=suppl771;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightMPSS');}
				}
				if((location.href.toLowerCase().indexOf('/supplies')>-1)||(location.href.toLowerCase().indexOf('?template_type=all_supplies&category=ink_toner&subcat1=ink&subcat2=ink_cartridges')>-1)||(location.href.toLowerCase().indexOf('?template_type=all_supplies&category=ink_toner&subcat1=toner&subcat2=toner_cartridges')>-1)||(location.href.toLowerCase().indexOf('?template_type=all_supplies&category=paper&subcat1=inkjet and all-in-one paper&subcat2=photo_papers')>-1)||(location.href.toLowerCase().indexOf('?template_type=all_supplies&category=paper')>-1)||(location.href.toLowerCase().indexOf('?landing=supplies&selectmenu=cartridges_paper')>-1)||(location.href.toLowerCase().indexOf('?landing=printer&submenuid=sm60')>-1)||(location.href.toLowerCase().indexOf('/can/printer_networking/printer_networking/2/storefronts')>-1)){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=ipggr280;cat=suppl771;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightCatPrinter');}
				}
				if((location.href.toLowerCase().indexOf('/product_detail/cc604fn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cb323wn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cb336wn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cc640wn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cc654an%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cd975an%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cc659fn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cd947fn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cd994fn%2523140')>-1)||(location.href.toLowerCase().indexOf('/product_detail/cn066fn%2523140')>-1)){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=ipggr280;cat=suppl085;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightTop10Ink');}
				}
				if((location.href.toLowerCase().indexOf('/supmodel/product/cb815a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cb023a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cb867a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/q7311a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cc335a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/q8380a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cb745a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/q8061a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cc210a')>-1)||(location.href.toLowerCase().indexOf('/supmodel/product/cd055a')>-1)){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=ipggr280;cat=suppl636;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightTop10Printers');}
				}
				if(location.href.toLowerCase().indexOf('/biz')>-1){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=micro079;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightBiz');}
				}
				if(location.href.toLowerCase().indexOf('/bestpc')>-1){
					try{
						var axel = Math.random()+"";
						var a = axel * 10000000000000;
						ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=envyl538;ord='+ a + '?');
					}catch(err){CI_LogError(err, 'landing_FloodLightBiz');}
				}
			}catch(err){CI_LogError(err, 'landing_FloodLightBase');}
			//FloodLight Tags End

			if(ci_cpncode!==null){
				ci_CC('ci_cpncode',ci_cpncode,90);
				ci_CC('ci_src',ci_srccode,90);
				ci_CC('ci_tid',"",-1);
			} else if(ci_src!==null && ci_sku!==null) {
				ci_CC('ci_cpncode',"",-1);
				ci_CC('ci_tid',ci_tid,90);
				ci_CC('ci_src',ci_src,90);
				ci_PIX(2,23,ci_tid,ci_src,ci_sku,null,ci_cid);
			} else if(ci_tag!==null) {
				ci_CC('ci_cpncode',"",-1);
				ci_CC('ci_tid',ci_tid,90);
				ci_PIX(2,7,ci_tid,null,null,ci_tag,ci_cid);
			} else if(ci_referrer.toLowerCase().indexOf(ci_refDomain)===-1){
				ci_PIX(2,13,null,null,null,null,ci_cid);
			} 

			//Intrasite
			try{
				ci_PIX(2,49,ci_tid,null,ci_itemid,null,ci_cid);
			}catch(err){CI_LogError(err, 'landing_IntrasiteLogging');}
		}catch(err1){CI_LogError(err1, 'landing1');}
	}
	try {
		//Floodlight Tags
		if(location.href.toLowerCase().indexOf('/newsletter.do')>-1){
			try{
				var axel = Math.random()+"";
				var a = axel * 10000000000000;
				ci_FP_FRAME('fls.doubleclick.net/activityi;src=2305757;type=hhore983;cat=hphho433;ord=1;num='+ a + '?', 'https');
				ci_FP_FRAME('fls.doubleclick.net/activityi;src=2553893;type=leads417;cat=hphho812;ord=1;num='+ a + '?', 'https');
			}catch(err){CI_LogError(err, 'landing_FloodLightNewsletter');}
		}
	}catch(err1){CI_LogError(err1, 'landing2');}
}