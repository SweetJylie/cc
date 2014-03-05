

function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++)
	{
		var pair = vars[i].split("=");
		if (pair[0] == variable)
		{
			return pair[1];
		}
	}
	return "";
}

if(getQueryVariable('CCSS')!='')
{
	document.writeln("<link rel=stylesheet type=\"text/css\" href=\""+getQueryVariable('CCSS')+"\">");
}
else
{
	document.writeln("<link rel=stylesheet type=\"text/css\" href=\"/style/chat_inner.css\">");
}


function openWindow(url,name,width,height,scroll)
{
	var window_width = width;
	var window_height = height;
	displayWindow = window.open(''+ url + '',''+ name+'','resizable=yes,menubar=no,scrollbars=' + scroll +',status=no,directories=no,width=' + window_width + ',height=' +window_height);
	displayWindow.focus();
}

function openWindow_owh(url,name,scroll)
{
	displayWindow = window.open(''+ url + '',''+ name+'','resizable=yes,menubar=no,scrollbars=' + scroll +',status=no,directories=no');
	displayWindow.focus();
}

function setfin()
{
	top.chat_in.document.hold.OUT1.focus();
	return false;
}

function rli()
{
	window.setTimeout("top.ulist.reload_list();", 3000);
}

function set_creq1(name)
{
	cobj=top.chantop.document.fo.OUT;
	for(i=0;i<cobj.length;i++)
	{
		if(cobj[i].value.substring(3, 9999).toLowerCase()==name.toLowerCase())
		{
			cobj[i].selected=true;
			break;
		}
	}
}

function set_creq(name)
{
	if(top.chantop.document.fo.OUT)
	{
		set_creq1(name);
	}
	else
	{
		window.setTimeout("set_creq1(name)", 3000);
	}
}

function oid(name)
{
//	openWindow('http://www.chatcity.de/cgi-bin/cc2005/wwb/wwb.cgi?_CID=idcard/index&NAME='+name,'ID','820','700','yes');
	openWindow_owh('http://home.chatcity.de/chattergalerie/index.php?nickname='+name,'ID','yes');
}

function setbg(name)
{
//	for (g=0;g<ccc.length;g+=4)
//	{
//		if(ccc[g].toLowerCase() == name.toLowerCase())
//		{
//			document.writeln("<br><img src=\"/"+ccc[g+3]+"\"><br>");
//			set_creq(name);
//			break;
//		}
//	}
	parent.chat_channel=name;
	clearTimeout(parent.info_timer);
	parent.get_info();
}

function setbgcol(bgc,foc)
{
	if(getQueryVariable('SBG')=='0')
	{
		document.body.style.backgroundColor=bgc;
		document.body.style.color=foc;
	}
}

function moves()
{
	if (scrolling) window.scroll(1,500000);
	window.setTimeout("moves()", 100);
}
var scrolling = true;
moves();
