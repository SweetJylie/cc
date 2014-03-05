var lastname="";
var last_time=(new Date).getTime();
var chu=new Array();
var chu_name='';
var chu_num=0;
var last_id=0;



function chat_id_obj(transport)
{
    if (return_chat_id_obj._MO_OBJ_STATUS == 'OK')
    {
    	setInnerHTML('tt_error', return_chat_id_obj._MO_OBJ_ETXT);
        el_flush('tt_error', '#23982b');
        window.setTimeout("ToolTip.hide();", 800);
    }

    else
    {
        setInnerHTML('tt_error', return_chat_id_obj._MO_OBJ_ETXT);
        el_flush('tt_error', '#ff0000');
    }

}

function chat_id(tname)
 {

    tl = 'NAME=' + encodeURIComponent(tname);
    new ajax(PAJAX + 'chat_id.html', {
        postBody: tl,
        onComplete: chat_id_obj,
        evalObj: 'return_chat_id_obj'
    });
}





function chat_post_obj(transport)
{
    if (return_chat_post_obj._MO_OBJ_STATUS == 'OK')
    {
    	setInnerHTML('tt_error', return_chat_post_obj._MO_OBJ_ETXT);
        el_flush('tt_error', '#23982b');
        window.setTimeout("ToolTip.hide();", 800);
    }

    else
    {
        setInnerHTML('tt_error', return_chat_post_obj._MO_OBJ_ETXT);
        el_flush('tt_error', '#ff0000');
    }

}

function chat_post(tname,tmsg)
 {

    tl = 'NAME=' + encodeURIComponent(tname);
    tl += '&CONT=' + encodeURIComponent(tmsg);
    new ajax(PAJAX + 'chat_post.html', {
        postBody: tl,
        onComplete: chat_post_obj,
        evalObj: 'return_chat_post_obj'
    });
}

function sort_C_user(a, b)
{
	a = a.toLowerCase();
	a = a.replace(/ä/g,"a");
	a = a.replace(/ö/g,"o");
	a = a.replace(/ü/g,"u");
	a = a.replace(/ß/g,"s");

	b = b.toLowerCase();
	b = b.replace(/ä/g,"a");
	b = b.replace(/ö/g,"o");
	b = b.replace(/ü/g,"u");
	b = b.replace(/ß/g,"s");

	return(a==b)?0:(a>b)?1:-1;
}

function loadjscssfile(filename, filetype)
{
	if (filetype=="js")
	{
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css")
	{
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}

function set_uinfo1()
{
	var g; var gu;
	var num=0;
	chat_channel=cha_channel;
	var uli ="";
	for(g=0; g<cha_my.length; g+=2)
	{
		if(cha_my[g]!="")
		{
			if(cha_my[g]!=chat_nick)
			{
				uli+="<a href=\"javascript://\" onclick=\"open_utn(\'fuu\',this,-25,-50,\'"+cha_my[g]+"\',event,'"+cha_my[g+1]+"');\" target=\"leer\">» "+cha_my[g]+"</a><br>";
			}
			else
			{
				uli+="» "+cha_my[g]+"<br>";
			}
			num++;
		}
	}
	setInnerHTML("ul",uli);
	setInnerHTML("uinfo",num);
}

function set_uinfo()
{
	var g; var gu;
	var num=0;
	for(g=0; g<cha.length; g+=3)
	{
		if(cha[g].toLowerCase() == chat_channel.toLowerCase() )
		{
			setInnerHTML("uinfo",cha[g+1]);
			var ul = cha[g+2].split(" ");
			var uli ="";
			ul.sort(sort_C_user);
			for(gu=0; gu<ul.length; gu++)
			{
				if(ul[gu]!="")
				{
					if(ul[gu]!=chat_nick)
					{
						uli+="<a href=\"javascript://\" onclick=\"open_ut(\'fuu\',this,-25,-50,\'"+ul[gu]+"\',event);\" target=\"leer\">» "+ul[gu]+"</a><br>";
					}
					else
					{
						uli+="» "+ul[gu]+"<br>";
					}
				}
			}
			setInnerHTML("ul",uli);
			break;
		}
	}
}

function set_fu()
{
	if(is_close)
	{
		$('r_off1').style.display='block';
		setSrc('r_off_img','grafiken/basic/chat/divider.gif');
		$('r_off_img').title='';
		is_close=false;
	}
	else
	{
		$('r_off1').style.display='none';
		setSrc('r_off_img','grafiken/basic/chat/divider2.gif');
		$('r_off_img').title='';
		is_close=true;
	}
	if(ww_focus==1)document.hold.OUT1.focus();
}


function openID(name)
{
	window.open(PPATH+'id/'+Encode_Link(name)+'.html','about','resizable=yes,menubar=no,scrollbars=yes,status=no,directories=no,width=800');
}

function sendoc(name)
{
	if(confirm(""))
	{
		com_set('/opcall');
	}
}

function setfw(name)
{
	var text = prompt("","");
	if (text)
	{
		if (text.length > 0) 
		{
			com_set('/f '+name+' '+ text);
		}
	}
}

function setsp(name)
{
	var text = prompt("","");
	if (text)
	{
		if (text.length > 0) 
		{
			com_set('/sn '+name+' '+ text);
			namei=name;
			setTimeout("com_set('/si '+namei)",2000);
		}
	}
}

function setig(name)
{
	if(confirm(""))
	{
//		com_set('/ignore '+name);
	}
}

function setcall(name)
{
        var text = prompt("","");
        if (text)
        {
                if (text.length > 0)
                {
                        com_set('/call '+name+' '+ text);
                }
        }
}

function setkill(name)
{
        if (confirm(""))
        {
                com_set('/kill '+name);
        }
}

function setrip(name)
{
	if (confirm(""))
        {
                com_set('/rip '+name);
        }
}

function cha_whisper()
{
	LayerTip.hide();
	document.hold.OUT1.value="/f "+ last_id +" ";
	document.hold.OUT1.focus();
}

function cha_ignore()
{
	LayerTip.hide();
	document.hold.OUT1.value="/ignore "+ last_id +" ";
	document.hold.OUT1.focus();
}

function cha_kill()
{
	LayerTip.hide();
	if(confirm("Soll "+last_id+" wirklich des Chats verwiesen werden (Kill)?"))
	{
		com_set('/kill '+ last_id);
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha_bann()
{
	LayerTip.hide();
	if(confirm("Soll "+last_id+" wirklich längere zeit des Chats verwiesen werden (Bann)?"))
	{
		com_set('/bann '+ last_id);
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha_rip()
{
	LayerTip.hide();
	if(confirm("Soll für "+last_id+" ein Rip ausgesprochen werden?"))
	{
		com_set('/rip '+ last_id);
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha_call()
{
	LayerTip.hide();
	var text = prompt("Call-Nachricht  an:" + last_id,"");
	if (text)
	{
		if (text.length > 0) 
		{
			com_set('/call '+last_id+' '+ text);
		}
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha1_whisper()
{
	LayerTip.hide();
	if (text)
	{
		if (text.length > 0) 
		{
			com_set('/f '+last_id+' '+ text);
		}
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha1_ignore()
{
	LayerTip.hide();
	if(confirm("Soll "+last_id+" wirklich ignoriert werden?"))
	{
//		com_set('/ignore '+ last_id);
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha1_kill()
{
	LayerTip.hide();
	if(confirm("Soll "+last_id+" wirklich des Chats verwiesen werden (Kill)?"))
	{
		com_set('/kill '+ last_id);
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha1_sep()
{
	LayerTip.hide();
	var text = prompt("Lade " + last_id+ " in das folgende Separee ein","");
	if (text)
	{
		if (text.length > 0) 
		{
			com_set('/sn '+ text);
			namei=last_id;
			setTimeout("com_set('/si '+namei)",2000);
		}
	}
	document.hold.OUT1.focus();
	LayerTip.hide();
}

function cha_id()
{
	LayerTip.hide();
	openID(last_id);
//	opener.location.href=PPATH+'id/'+link_encode(last_id)+'.html';
//	if (window.opener) {				
//		window.opener.location.href=PPATH+'id/'+link_encode(last_id)+'.html';
//	}
//	else 
//	{
//		window.open(PPATH+'id/'+link_encode(last_id)+'.html','');
//	}
}

function link_encode( name )
{
	var SAFEC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var HEX = "0123456789ABCDEF";
	var encoded = "";
	for (var i = 0; i < name.length; i++ )
	{
		var ch = name.charAt(i);
		if (ch == " ")
		{
			encoded += "+";
		}
		else if (SAFEC.indexOf(ch) != -1)
		{
			encoded += ch;
		}
		else
		{
			var charCode = ch.charCodeAt(0);
			if (charCode > 255)
			{
				encoded += "+";
			}
			else
			{
				encoded += ":";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
				encoded += ":";
			}
		}
	}
	return encoded;
}

function sendinf(msg)
{
	document.inf.OUT.value=msg;
	document.inf.submit();
	if(ww_focus==1)document.hold.OUT1.focus();
}

function setmove()
{
	if(document.OF.AS.checked)
	{
		chat_out.scrolling = true;
//		document.inf.OUT.value="/autoscrollon";
//		setTimeout("document.inf.submit()","300");
		if(ww_focus==1)setTimeout("document.hold.OUT1.focus()","300");
	}
	else
	{
		chat_out.scrolling = false;
//		document.inf.OUT.value="/autoscrolloff";
//		setTimeout("document.inf.submit()","300");
		if(ww_focus==1)setTimeout("document.hold.OUT1.focus()","300");
	}
	return false;
}

function bye()
{
	document.inf.OUT.value="/bye";
	document.inf.submit();
	if(ww_focus==1)document.hold.OUT1.focus();
	window.setTimeout("close();", 1000);
}

function delout()
{
	document.inf.x.value=Math.floor(Math.random()*99999999);
	document.inf.OUT.value=document.hold.OUT1.value;
	document.inf.submit();
	if(ww_focus==1)document.hold.OUT1.focus();
	document.hold.reset();
	return false;
}

function com_do(com)
{
	if(com != "none")
	{
		var nval = com.replace(/ /g," ");
		new ajax(PCHAT+'/chatin?SID='+chat_sid+'&ID='+chat_id+'&OUT='+encodeURIComponent(nval)+'&x='+Math.random(), {method:'get'});
		if(ww_focus==1)setTimeout("document.hold.OUT1.focus()","300");
	}
}

function com_set(com)
{
	com_do(com);
}

function color_set(col)
{
//	document.inf.OUT.value='/color '+col;
//	setTimeout("document.inf.submit()","300");
	com_set('/color '+col);
}

function in_set(com)
{
	document.hold.OUT1.value=document.hold.OUT1.value+com;
}

function setti(info,cm)
{
	var text = prompt(info,"");
	if (text)
	{
		if (text.length > 0) 
		{
			com_set(cm+' '+ text);
		}
	}
}

function xfindPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft;
			curleft -= obj.scrollLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
	{
		curtop += obj.x;
	}
	return curleft;
}

function xfindPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop;
			curtop -= obj.scrollTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
	{
		curtop += obj.y;
	}
	return curtop;
}

function open_ut(com,el,x,y,name,ev)
{
	setInnerHTML('cu_n',name);
	last_id=name;
	LayerTip.onClose=function()
	{
		LayerTip.onClose=null;
		document.hold.OUT1.focus();
	};
	LayerTip.of_left=x;
	LayerTip.of_top=y;
	LayerTip.get(com,el,false,ev.clientY,0);
	console.info('t')
	if($('fuu').offsetWidth>90){}else{$('fuu').style.width='90px';}
}

function open_utn(com,el,x,y,name,ev,fu)
{
	setInnerHTML('cu_n',name);
	if(fu.indexOf('R')>=0)
	{
		$('id_click').style.display="block"
	} 
	else
	{
		$('id_click').style.display="none"
	} 

	last_id=name;
	LayerTip.onClose=function()
	{
		LayerTip.onClose=null;
		document.hold.OUT1.focus();
	};
	LayerTip.of_left=x;
	LayerTip.of_top=y;
	LayerTip.get(com,el,false,ev.clientY,0);
}

function jump(obj)
{
	var ch=selectWert(obj);
	com_set('/j '+ch);
}

var LayerTip =
{
	el: '',
	callobj:'',
	ajp:'',
	old_alt: '',
	evmoli: '',
	usemouse: true,
	mx: 0,
	my: 0,
	dx: 0,
	dy: 0,
	dx1: 0,
	dy1: 0,
	px: 0,
	py: 0,
	mpx: 0,
	onClose: '',
	mpy: 0,
	isActive: false,
	of_left: -10,
	of_top: -10,

	// init
	init: function (el,ajp)
	{
		this.el=$(el);
		if(ajp) this.ajp=ajp;
	},

	get: function (el,callobj,usemouse,use_y,use_x)
	{
		var obj=this;
		if(this.isActive==true)
		{
			this.hide();
		}
		this.init(el);
		if(usemouse==false)
		{
			this.usemouse=false;
		}
		else
		{
			this.usemouse=true;
		}
		this.callobj=callobj;
		this.old_alt='';
		if(callobj.alt)
		{
			this.old_alt=callobj.alt;
		}

		if(use_x>0)
		{
			var ix=use_x;
		}
		else
		{
			var ix=xfindPosX(this.callobj);
		}

		if(use_y>0)
		{
			var iy=use_y;
		}
		else
		{
			var iy=xfindPosY(this.callobj);
		}
		this.el.style.display='';
		setTop(this.el,iy+this.of_top);
		setLeft(this.el,ix+this.of_left);
		this.dx=ix+this.of_left,
		this.dy=iy+this.of_top,
		this.dx1=this.dx+getWidth(this.el);
		this.dy1=this.dy+getHeight(this.el);
		this.isActive=true;
		if(this.usemouse==true) addEvent(document,'mousemove',function(ev) { obj.mousetracker(ev)});
	},

	hide: function ()
	{
		if(this.isActive==true)
		{
			if(this.usemouse==true) removeEvent(document,'mousemove',this.evmoli);
		}
		this.isActive=false;
		if(this.old_alt)
		{
			this.callobj.alt=this.old_alt;
		}
		this.el.style.display = "none";
		this.evo='';
		if(this.onClose) this.onClose();
	},

	pagepos: function()
	{
		if(window.pageXOffset)
		{
			this.px=window.pageXOffset;
			this.py=window.pageYOffset;
		}
		else if (document.documentElement)
		{
			this.px=(document.body.scrollLeft + document.documentElement.scrollLeft);
			this.py=(document.body.scrollTop + document.documentElement.scrollTop);
		}
		else if (document.body.scrollLeft >= 0)
		{
			this.px=document.body.scrollLeft;
			this.py=document.body.scrollTop;
		}
	},

	mousetracker: function(ev)
	{
		if (!ev)
		{
			ev = window.event;
		}
		this.mx = ev.clientX;
		this.my = ev.clientY;
		if(this.isActive)
		{
			this.pagepos();
			this.mpx = this.mx+this.px;
			this.mpy = this.my+this.py;
			if(arguments.callee) this.evmoli=arguments.callee;
			if(this.mpx<this.dx || this.mpx>this.dx1 || this.mpy<this.dy || this.mpy>this.dy1)
			{
				this.hide();
			}
			return false;
		}
	}

}

function resize_fix_start()
{
	size_interval = setInterval('resize_fix()',100);
}

function resize_fix()
{
	var height_total = $('r_off1').scrollHeight;
	var height_channel = $('right_channel').scrollHeight;
	var height_uinfo = $('right_uinfo').scrollHeight;
	var height_ad = $('right_ad').scrollHeight;
	height_available = height_total - height_channel - height_uinfo - height_ad;
	height_available = (height_available-16);
	if (height_available < 20) height_available = 20;
	$('ul').style.height = height_available+'px';
}

var size_timeout = setTimeout("resize_fix_start()",1000);
var size_interval = false;

