
function URLEncode( plaintext )

{
	var SAFEC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var HEX = "0123456789ABCDEF";
	var encoded = "";
	for (var i = 0; i < plaintext.length; i++ )
	{
		var ch = plaintext.charAt(i);
		if (ch == " ")
		{
			encoded += "%20";
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
//				encoded += "+";
				encoded += escape(String.fromCharCode(charCode));
			}
			else
			{
				encoded += "%";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
			}
		}
	}
	return encoded;
}

function Encode_Link( plaintext )
{
	var SAFEC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var HEX = "0123456789ABCDEF";
	var encoded = "";
	for (var i = 0; i < plaintext.length; i++ )
	{
		var ch = plaintext.charAt(i);
		if (ch == " ")
		{
			encoded += "-";
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
				var ec=escape(String.fromCharCode(charCode));
				encoded += ":"+ec.substr(1,99)+":";
			}
			else
			{
				encoded += ":" + HEX.charAt((charCode >> 4) & 0xF) + HEX.charAt(charCode & 0xF) + ":";
			}
		}
	}
	return encoded;
}

function replaceIt(st,search,repl)
{
	var res = st;
	res = res.split(search);
	res = res.join(repl);
	return res;
}

function lshowhide(layer_ref,state)
{
	if (document.getElementById)
	{ // DOM3 = IE5, NS6 
		document.getElementById(layer_ref).style.visibility = state; 
	} 
	else if (document.layers) 
	{ // Netscape 4 
		document.layer_ref.visibility = state; 
	} 
	else 
	{ // IE 4 
		document.all.layer_ref.style.visibility = state; 
	} 
} 

function lshowhide1(layer_ref,state)
{
	if (document.getElementById)
	{ // DOM3 = IE5, NS6 
		document.getElementById(layer_ref).style.display = state; 
	} 
	else if (document.layers) 
	{ // Netscape 4 
		document.layer_ref.display = state; 
	} 
	else 
	{ // IE 4 
		document.all.layer_ref.style.display = state; 
	} 
} 

function radioWert(rObj)
{
	for (var i=0; i<rObj.length; i++) if (rObj[i].checked) return rObj[i].value;
	return false;
}

function setRadioWert(rObj,val)
{
	for (var i=0; i<rObj.length; i++)
	{
		if (rObj[i].value==val)
		{
			rObj[i].checked=true;
			return;
		}
	}
}

function selectWert(rObj)
{
	for (var i=0; i<rObj.length; i++) if (rObj[i].selected) return rObj[i].value;
	return false;
}

function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
	{
		curtop += obj.x;
	}
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
	{
		curtop += obj.y;
	}
	return curtop;
}

function getWidth(element)
{
	element = $(element);
	return element.offsetWidth; 
}

function getHeight(element)
{
	element = $(element);
	return element.offsetHeight; 
}

function getTop(element)
{
	element = $(element);
	return parseInt(element.style.top); 
}

function getSrc(element)
{
	element = $(element);
	return element.src; 
}

function setWidth(element,w)	
{
	element = $(element);
	if(element) element.style.width = w +"px";
}

function setHeight(element,h) 
{
	element = $(element);
    	if(element) element.style.height = h +"px";
}

function setTop(element,t)
{
	element = $(element);
	if(element) element.style.top = t +"px";
}

function setLeft(element,t)
{
	element = $(element);
	if(element) element.style.left = t +"px";
}

function setSrc(element,src)
{
	element = $(element);
	if(element) element.src = src; 
}

function setClass(element,classn)
{
	element = $(element);
	if(element) element.className = classn; 
}

function setName(element,val)
{
	element = $(element);
	if(element) element.name = val; 
}

function setAlt(element,alt)	
{
	element = $(element);
	if(element) element.alt = alt; 
}

function setVisibility(element,val)
{
	element = $(element);
	if(element) element.style.visibility = val; 
}

function setColor(element,val)
{
	element = $(element);
	if(element) element.style.color = val; 
}

function setOpacity(element,opacity)
{
	element = $(element);
	if(element) element.style.opacity = opacity; 
}

function setHref(element,href)
{
	element = $(element);
	if(element) element.href = href; 
}

function ww_setInnerHTML(element,content)
{
	element = $(element);
	if(element) element.innerHTML = content;
}


function setInnerHTML(element,content)
{
	element = $(element);
	if(element) element.innerHTML = content;
}

function hide(element)
{
	element = $(element);
	if(element) element.style.display = 'none';
}

function show(element)
{
	element = $(element);
	if(element) element.style.display = 'inline';
}

function block(element)
{
	element = $(element);
	if(element) element.style.display = 'block';
}

function setClick(element,val)
{
	element = $(element);
	if(element) element.onclick = val; 
}

function addEvent(element,typ,val)
{
	if(element)
	{
		if (element.addEventListener)
		{
			element.addEventListener(typ, val, false);
		}
//		else if (element.attachEvent)
//		{
//			element.attachEvent('on' + typ, val);
//		}
		else
		{
			eval("element.on"+typ+" = val");
		}
	}
}

function removeEvent(element,typ,val)
{
	if(element)
	{
		if (element.removeEventListener)
		{
			element.removeEventListener(typ, val, false);
		}
//		else if (element.detachEvent)
//		{
//			element.detachEvent('on' + typ, val);
//		}
		else
		{
			eval("element.on"+typ+" = null");
		}
	}
}

function setMouseDown(element,val)
{
	element = $(element);
	addEvent(element,'mousedown',val);
}

function setMouseUp(element,val)
{
	element = $(element);
	addEvent(element,'mouseup',val);
}

function addLoadEvent(func)
{	
	var oldonload = window.onload;
	if (typeof window.onload != 'function')
	{
	    	window.onload = func;
	}
	else
	{
		window.onload = function()
		{
			oldonload();
			func();
		}
	}
}

function addunLoadEvent(func)
{	
	var oldonload = window.onunload;
	if (typeof window.onunload != 'function')
	{
	    	window.onunload = func;
	}
	else
	{
		window.onunload = function()
		{
			oldonload();
			func();
		}
	}
}

//transitions

function ww_trans_sinoidal(pos)
{
	return ((-Math.cos(pos*Math.PI)/2) + 0.5);
}

function ww_trans_linear(pos)
{
	return pos;
}

function ww_trans_cubic(pos)
{
	return Math.pow(pos, 3);
}

function ww_trans_circ(pos)
{
	return Math.sqrt(pos);
}

function ww_set_opacity(el,val)
{

	if(el.style.display=='none') el.style.display = "";
	if (val >= 1 && (/Firefox/.test(navigator.userAgent))) val = 0.9999;
	if (val <= 0 && el.style.visibility != "hidden")
	{
		el.style.visibility = "hidden";
	}
	else if (el.style.visibility != "visible")
	{
		el.style.visibility = "visible";
	}
	if (window.ActiveXObject) el.style.filter = ((val != 1)?"alpha(opacity=" + val*100 + ")":"auto");
	el.style.opacity = val;
}

function ww_timer_height(el,op,seth)
{
	if(el.stTimer)
	{
		var time  = (new Date).getTime();
		var aa=el.stNow;
		if (time >= el.stDuration+el.stTime)
		{
			clearInterval(el.stTimer);
			el.stTimer=null;
			if(op==1)
			{
				if(el.stNow>el.stTo)
				{
					ww_set_opacity(el,0);
				}
				else
				{
					ww_set_opacity(el,1);
				}
			}
			el.stNow=el.stTo;
			if(el.onComplete)
			{
				el.onComplete(el);
			}
		}
		else
		{
			var Tpos = (time - el.stTime) / (el.stDuration);
			el.stNow = el.stTrans(Tpos) * (el.stTo-el.stFrom) + el.stFrom;
			if(op==1)
			{
				if(el.stNow>el.stTo)
				{
					ww_set_opacity(el,1-el.stTrans(Tpos));
				}
				else
				{
					ww_set_opacity(el,el.stTrans(Tpos));
				}
			}
		}
		if(seth)
		{
			el.style.height = el.stNow + "px";
		}
	}
}

function ww_fade(el,hei)
{
	if(el.stTyp==2)
	{
		if(hei!=el.stNow)
		{
			if(el.stTimer)
			{
				clearInterval(el.stTimer);
			}
			el.stTo=hei;
			el.stFrom=el.stNow;
			el.stTimer = setInterval (function(){ww_timer_height(el,1,0);}, 10);
			el.stTime=(new Date).getTime();
		}
	}
}

function ww_set_height(el,hei)
{
	if(el.stTyp==0)
	{
		el.style.height = hei + "px";
		el.stNow=hei;
	}
	else if(el.stTyp==1)
	{
		if(hei!=el.stNow)
		{
			if(el.stTimer)
			{
				clearInterval(el.stTimer);
			}
			el.stTo=hei;
			el.stFrom=el.stNow;
			el.stTimer = setInterval (function(){ww_timer_height(el,0,1);}, 10);
			el.stTime=(new Date).getTime();
		}
		else
		{
			if(el.onComplete)
			{
				el.onComplete(el);
			}
		}
	}
	else if(el.stTyp==2)
	{
		if(hei!=el.stNow)
		{
			if(el.stTimer)
			{
				clearInterval(el.stTimer);
			}
			el.stTo=hei;
			el.stFrom=el.stNow;
			el.stTimer = setInterval (function(){ww_timer_height(el,1,1);}, 10);
			el.stTime=(new Date).getTime();
		}
		else
		{
			if(el.onComplete)
			{
				el.onComplete(el);
			}
		}
	}
}

function clickStretcher()
{
	cdiv = Element.find(this, 'nextSibling');
	ch=cdiv.stNow;
	toggles=document.getElementsByClassName(this.className);
	var obj=this;

	toggles.each(function(el, i)
	{
		div = Element.find(el, 'nextSibling');
		div.onComplete='';
		if(obj.doneClose && div.stNow>0)
		{
			div.onComplete=obj.doneClose;
		}
		ww_set_height(div,0);
	});
	if(ch==0)
	{
		if(this.doneOpen)
		{
			cdiv.onComplete=this.doneOpen;
		}
		setTimeout('ww_set_height(cdiv,cdiv.stHeight)',cdiv.stDelay);
	}
	if(this.clickOpen)
	{
		this.clickOpen();
	}
}

function offStretcher()
{
	if(this.stCname)
	{
		toggles=document.getElementsByClassName(this.stCname);
		toggles.each(function(el, i)
		{
			div = Element.find(el, 'nextSibling');
			ww_set_height(div,0);
		});
	}
	if(this.clickOpen)
	{
		this.clickOpen();
	}
}

function ww_set_par(div,loptions)
{
	options=
	{
		duration: 500,
		transition: ww_trans_sinoidal,
		mtyp: 2,
		onComplete: ''
	};
	for (property in loptions) options[property] = loptions[property];
	div.stTyp = 0; // erst mal wirklich schliessen
	div.style.overflow = "hidden";
	div.stNow = 0;
	div.stTo = 0;
	div.stFrom = 0;
	div.stTime = 0;
	div.stDuration = options.duration;
	div.stTimer=null;
	div.stTrans=options.transition;
	div.stHeight = div.offsetHeight;
	div.stWidth = div.offsetWidth;
	div.onComplete=options.onComplete;
}

function wwStretcher(cname,loptions)
{
	options=
	{
		duration: 500,
		transition: ww_trans_sinoidal,
		to_open: -1,
		class_off: '',
		id_off: '',
		mtyp: 2,
		cursor: '',
		clickOpen: '',
		doneOpen: '',
		doneClose: '',
		delay: 100,
		onComplete: ''
	};
	for (property in loptions) options[property] = loptions[property];
	toggles=document.getElementsByClassName(cname);
	toggles.each(function(el, i)
	{
		var div = Element.find(el, 'nextSibling');
		ww_set_par(div,options);
		if(i==options.to_open)
		{
			div.style.visibility='visible';
			ww_set_height(div,div.stHeight);
		}
		else
		{
			ww_set_height(div,0);
		}
		div.stTyp = options.mtyp;
		if(options.clickOpen)
		{
			el.clickOpen=options.clickOpen;
		}
		if(options.doneOpen)
		{
			el.doneOpen=options.doneOpen;
		}
		if(options.doneClose)
		{
			el.doneClose=options.doneClose;
		}
		el.onclick=clickStretcher;
		el.toggleNum=i;
		el.style.visibility='visible';
		
		if(options.cursor!='')
		{
			el.style.cursor=options.cursor;
		}
	});

	if(options.class_off)
	{
		toggles=document.getElementsByClassName(options.class_off);
		toggles.each(function(el, i)
		{
			el.onclick=offStretcher;
			el.stCname=cname;
			el.toggleNum=-1;
			if(options.clickOpen)
			{
				el.clickOpen=options.clickOpen;
			}
			if(options.cursor!='')
			{
				el.style.cursor=options.cursor;
			}
		});
	}

	if(options.id_off)
	{
		el=$(options.id_off);
		el.onclick=offStretcher;
		el.stCname=cname;
		el.toggleNum=-1;
		if(options.clickOpen)
		{
			el.clickOpen=options.clickOpen;
		}
		if(options.cursor!='')
		{
			el.style.cursor=options.cursor;
		}
	}
}

function wwStretcher_get_open(cname)
{
	var last=-1;
	toggles=document.getElementsByClassName(cname);
	toggles.each(function(el, i)
	{
		var div = Element.find(el, 'nextSibling');
		if(div.stNow!=0)
		{
			last=i;
		}
	});

	return last;
}

function ww_set_click(el,click,cursor)
{
	var toggles=document.getElementsByClassName(el);
	toggles.each(function(el, i)
	{
		el.onclick=click;
		if(cursor)
		{
			el.style.cursor=cursor;
		}
	});
}

function wwHeight(cname,loptions)
{
	options=
	{
		duration: 500,
		transition: ww_trans_sinoidal,
		mtyp: 2,
		onComplete: ''
	};
	for (property in loptions) options[property] = loptions[property];
	var div=$(cname);
	ww_set_par(div,options);
	ww_set_height(div,0);
	div.stTyp = options.mtyp;
	return div;
}

function wwInit_element(cname,loptions)
{
	options=
	{
		duration: 500,
		transition: ww_trans_sinoidal,
		mtyp: 2,
		en_height: false,
		set_height: 0,
		en_opacity: false,
		set_opacity: 0,
		onComplete: ''
	};
	for (property in loptions) options[property] = loptions[property];
	var div=$(cname);
	ww_set_par(div,options);
	if(this.options.en_height)
	{
		ww_set_height(div,this.options.set_height);
	}
	if(this.options.en_opacity)
	{
		div.stNow=this.options.set_opacity;
		ww_set_opacity(div,this.options.set_opacity);
	}
	div.stTyp = options.mtyp;
	return div;
}

function ww_set_open(cname)
{
	el=$(cname);
	if(el)
	{
		el.stNow=0;
		setTimeout('ww_set_height(el,el.stHeight)',el.stDelay);
	}
}

function ww_set_open2(cname)
{
	el=$(cname);
	if(el)
	{
		el.stNow=0;
		ww_set_height(el,el.stHeight);
	}
}


function ww_set_close(cname)
{
	el=$(cname);
	if(el)
	{
		el.stNow=el.stHeight;
		ww_set_height(el,0);
	}
}

function ww_blend_width(div)
{
	if(div.stTimer)
	{
		var time  = (new Date).getTime();
		var aa=div.stNow;
		if (time >= div.stDuration+div.stTime)
		{
			clearInterval(div.stTimer);
			div.stTimer=null;
			div.stNow=div.stTo;
//			div.style.width = div.stNow +"px";
			div.style.marginLeft = div.stNow +"px";
			if(div.onComplete)
			{
				div.onComplete(div);
			}
		}
		else
		{
			var Tpos = (time - div.stTime) / (div.stDuration);
			div.stNow = div.stTrans(Tpos) * (div.stTo-div.stFrom) + div.stFrom;
//			div.style.width = div.stNow +"px";
			div.style.marginLeft = div.stNow +"px";
		}
	}
}

function ww_blend_start(div,from,to)
{
	if(div.hobj)
	{
		div.stTo=to;
		div.stFrom=from;
		div.stTimer = setInterval (function(){ww_blend_width(div);}, 10);
		div.stTime=(new Date).getTime();
	}
}

function ww_blend(cname,hname,loptions)
{
	options=
	{
		duration: 500,
		transition: ww_trans_sinoidal,
		mtyp: 2,
		onComplete: ''
	};
	for (property in loptions) options[property] = loptions[property];
	var div=$(cname);
	ww_set_par(div,options);
	var hdiv=$(hname);
	ww_set_par(hdiv,options);
	div.stTyp = options.mtyp;
	div.hobj=hdiv;
	return div;
}


function evalScript(text)
{
	pos=0;
	while(1)
	{
		if((pos=text.indexOf('<script>', pos))>=0)
		{
			if((pos1=text.indexOf('</script>', pos))>=0)
			{
				aa=text.substring(pos+8,pos1);
				eval(aa);
				pos=pos1;
			}
		}
		else
		{
			break;
		}
	}
}

//based on prototype's ajax class
//to be used with prototype.lite, moofx.mad4milk.net.

ajax = Class.create();
ajax.prototype = 
{
	initialize: function(url, options)
	{
		this.transport = this.getTransport();
		this.postBody = options.postBody || '';
		this.method = options.method || 'post';
		this.onComplete = options.onComplete || null;
		this.update = $(options.update) || null;
		this.evalScript = options.evalScript || false;
		this.evalObj = options.evalObj || '';
		this.request(url);
	},

	request: function(url)
	{
		this.transport.open(this.method, url, true);
		this.transport.onreadystatechange = this.onStateChange.bind(this);
		if (this.method == 'post') 
		{
			this.transport.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');			
			if (this.transport.overrideMimeType) this.transport.setRequestHeader('Connection', 'close');
		}
		this.transport.send(this.postBody);
	},

	onStateChange: function()
	{
		if (this.transport.readyState == 4 && this.transport.status == 200) 
		{
			if (this.onComplete) 
				setTimeout(function(){this.onComplete(this.transport);}.bind(this), 10);
			if (this.update)
				setTimeout(function(){this.update.innerHTML = this.transport.responseText;}.bind(this), 10);
			if (this.evalScript)
				setTimeout(function(){evalScript(this.transport.responseText);}.bind(this), 50);
			if (this.evalObj)
				eval(this.evalObj+"=eval('(' + this.transport.responseText + ')')");
			this.transport.onreadystatechange = function(){};
		}
	},

	getTransport: function()
	{
		if (window.ActiveXObject) return new ActiveXObject('Microsoft.XMLHTTP');
		else if (window.XMLHttpRequest) return new XMLHttpRequest();
		else return false;
	}
};

document.iframeLoaders = {};

iframe = Class.create();
iframe.prototype = 
{
	initialize: function(form, options)
	{
		if (!options) options = {};
		this.form = form;
		this.uniqueId = new Date().getTime();
		document.iframeLoaders[this.uniqueId] = this;
		this.transport = this.getTransport();
		this.onComplete = options.onComplete || null;
		this.update = $(options.update) || null;
		this.updateMultiple = options.multiple || false;
		form.target= 'frame_'+this.uniqueId;
		form.setAttribute("target", 'frame_'+this.uniqueId); // in case the other one fails.
		form.submit();
	},

	onStateChange: function()
	{
		this.transport = $('frame_'+this.uniqueId);
		try
		{
			var doc = this.transport.contentDocument.document.body.innerHTML;
			this.transport.contentDocument.document.close();
		} // For NS6
		catch (e)
		{
			try
			{
				var doc = this.transport.contentWindow.document.body.innerHTML;
				this.transport.contentWindow.document.close();
			} // For IE5.5 and IE6
			catch (e)
			{
				try
				{
					var doc = this.transport.document.body.innerHTML;
					this.transport.document.body.close();
				} // for IE5
				catch (e)
				{
					try
					{
						var doc = window.frames['frame_'+this.uniqueId].document.body.innerText;
					} // for really nasty browsers
					catch (e) { } // forget it.
				}
			}
		}
		this.transport.responseText = doc;
		if (this.onComplete) setTimeout(function(){this.onComplete(this.transport);}.bind(this), 10);
		if (this.update) setTimeout(function(){this.update.innerHTML = this.transport.responseText;}.bind(this), 10);
		if (this.updateMultiple)
		{
			setTimeout(function()
			{ // JSON support!
				try 
				{
					var hasscript = false; eval("var inputObject = "+this.transport.responseText);	// we're expecting a JSON object, eval it to inputObject
					for (var i in inputObject) 
					{
						if (i == 'script')
						{
							hasscript = true;
						} // check if we passed some javascript along too
						else
						{
							if ( elm = $(i))
							{
								elm.innerHTML = inputObject[i];
							}
							else
							{
								alert("element "+i+" not found!");
							}
						} // if it's not script, update the corresponding div
					}
					if (hasscript) eval(inputObject['script']); // some on-the-fly-javascript exchanging support too
				}
				catch (e)
				{
					alert('There was an error processing: '+this.transport.responseText);
				} // in case of an error
			}.bind(this), 10);
		}
	},

	getTransport: function() 
	{
		var divElm = document.createElement('DIV');
		divElm.style.position = "absolute";
		divElm.style.top = "0";
		divElm.style.marginLeft = "-10000px";
		if (navigator.userAgent.indexOf('MSIE') > 0 && navigator.userAgent.indexOf('Opera') == -1)
		{// switch to the crappy solution for IE
			divElm.innerHTML = '<iframe name=\"frame_'+this.uniqueId+'\" id=\"frame_'+this.uniqueId+'\" src=\"about:blank\" onload=\"setTimeout(function(){document.iframeLoaders['+this.uniqueId+'].onStateChange()},20);"></iframe>';
		}
		else
		{
			var frame = document.createElement("iframe");
			frame.setAttribute("name", "frame_"+this.uniqueId);
			frame.setAttribute("id", "frame_"+this.uniqueId);
			frame.addEventListener("load", 	function(){	this.onStateChange(); }.bind(this), false);
			divElm.appendChild(frame);
		}
		document.getElementsByTagName("body").item(0).appendChild(divElm);
	}
};
function ww_taste(e)
{
	if(ww_tool_close==true)
	{
		if (window.event) // für IE
		{ 
			var keynum = window.event.keyCode;
		}
		else if (e.which)
		{
			var keynum = e.which;
		}
		if(keynum == 27)
		{
			ToolTip.hide();
			return true;
		}
	}
}

var ww_tool_close=false;
function ww_close_tool()
{
	if(ww_tool_close==true)
	{
		if (document.attachEvent)
		{
			document.attachEvent("onkeydown", ww_taste);
		}
		else if (document.addEventListener)
		{
			document.addEventListener("keydown", ww_taste, false);
		}
	}
}

function transparency(element,percentage) 
{
	var i, count, objStyle, filterValue, opacityValue;
	if(document.getElementById) 
	{
  		if(typeof(element)=="object" && element) { obj=element; }
  		else if (document.getElementsByName(element) && document.getElementsByName(element)[0]) { obj=document.getElementsByName(element); }
  		else if (document.getElementById(element)) { obj=document.getElementById(element); }
  		else if (document.getElementsByTagName && document.getElementsByTagName(element) && document.getElementsByTagName(element)[0]) { obj=document.getElementsByTagName(element); }
  		else { obj=false; }
  		if(obj) 
		{
   			percentage=(typeof(percentage)=="undefined")?50:100-percentage;
   			filterValue="Alpha(opacity="+percentage+")";
   			opacityValue=""+percentage/100;
   			count=(obj.length)?obj.length:1;
   			for(i=0;i<count;i++) 
			{
    				objStyle=(obj.length)?obj[i].style:obj.style;
    				objStyle.filter=filterValue;
    				objStyle.MozOpacity=opacityValue;
    				objStyle.KhtmlOpacity=opacityValue;
    				objStyle.opacity=opacityValue;
   			}
  		}
 	}
}


function mouse_pos(e) 
{
	if(!e) e = window.event;
	var body = (window.document.compatMode && window.document.compatMode == "CSS1Compat") ?
	window.document.documentElement : window.document.body || null;
	ww_pos_left= e.pageX ? e.pageX : e.clientX + body.scrollLeft;
	ww_pos_top= e.pageY ? e.pageY : e.clientY + body.scrollTop;
	if(ww_tool_mved==true)
	{
		$('t00ltip').style.left = ww_pos_left+'px';
		$('t00ltip').style.top = ww_pos_top+'px';
	}	
}

function opacity(el,sta,end, time) 
{
	var speed = Math.round(time / 100);
	var timer = 0;
	if(sta > end) {
		for(i = sta; i >= end; i--) {
			setTimeout("changeOpac(" + i + ",'" + el + "')",(timer * speed));
			timer++;
		}
	} else if(sta < end) {
		for(i = sta; i <= end; i++)
			{
			setTimeout("changeOpac(" + i + ",'" + el + "')",(timer * speed));
			timer++;
		}
	}
}

function changeOpac(opacity, el) {
	var object = $(el).style; 
	object.opacity = (opacity / 100);
	object.MozOpacity = (opacity / 100);
	object.KhtmlOpacity = (opacity / 100);
	object.filter = "alpha(opacity=" + opacity + ")";
}

var ww_pos_left=0;
var ww_pos_top=0;
var ww_scroll_top;
var ww_scroll_left;
ww_tool_mved=false;
document.onmousemove=mouse_pos;
var scrollListener=function(){
	if( typeof( window.pageYOffset ) == 'number' ) 
	{
		     scrOfY = window.pageYOffset;
  				scrOfX = window.pageXOffset;
			} 
	else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) 
	{
  				scrOfY = document.body.scrollTop;
  				scrOfX = document.body.scrollLeft;
			} 
    	else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) 
	{
  				scrOfY = document.documentElement.scrollTop;
  				scrOfX = document.documentElement.scrollLeft;
			}
	var y=(ww_scroll_top+scrOfY);
	var x=(ww_scroll_left+scrOfX);
	$('t00ltip').style.top = y+'px';
	$('t00ltip').style.left = x+'px';
};
var ToolTip =
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
	evo: '',
	ty: '',
	tylight: 0,
	alpha: 99,
	movetool: false,
	fadetime: 1000,
	fade: false,

	// init
	init: function (ajp)
	{
		if(!this.el)
		{
			var divElm = document.createElement('DIV');
			divElm.id = "t00ltip";
			divElm.style.position = "absolute";
			divElm.style.top = "0px";
			divElm.style.zIndex = "1000";
			divElm.style.left = "0px";
			divElm.style.display = "none";
			divElm.style.visibility = "hidden";
			document.getElementsByTagName("body").item(0).appendChild(divElm);
			this.el=divElm;
			if(ajp) this.ajp=ajp;
		}
	},
	
	get: function (datset,callobj,usemouse,ext,esc,alp,movable,fade,fadetime,onc,follow)
	{
		if(WW_INIT_TOOL==false) return false;
		if(fadetime)this.fadetime=fadetime;
		ww_tool_close=false;
		ww_tool_mved=false;
		var obj=this;
		if(!this.el)
		{
			this.init();
		}
		if(usemouse==false)
		{
			this.usemouse=false;
		}
		else
		{
			this.usemouse=true;
		}
		if(esc==true)
		{
			ww_tool_close=true;
			ww_close_tool();
		}
		if(alp){alpha=alp;}else{alpha=0;}
		this.callobj=callobj;
		this.old_alt='';
		if(movable){movetool=true;}else{movetool=false;}
		if(typeof(onc)=='undefined') var onc='';
		if(follow){follow=true;}else{follow=false;}
		follow=false;
		if(typeof(fade)=='undefined') var fade=false;
		if(callobj.alt)
		{
			this.old_alt=callobj.alt;
		}
		if(ext)
			new ajax(this.ajp, {postBody:'data='+datset+ext,onComplete:function(transport){obj.isloaded(transport,onc,fade,follow)}});
		else
			new ajax(this.ajp, {postBody:'data='+datset,onComplete:function(transport){obj.isloaded(transport,onc,fade,follow)}});
	},

	get_id: function (callobj,ajp,ext)
	{
		if(callobj.id)
		{
			pos=callobj.id.indexOf("tt_");
			if(pos==0)
			{
				this.get(callobj.id.substring(pos+3),callobj,ajp,ext);
			}
		}
	},

	init_class: function (clname,ajp)
	{
		var obj = this;
		if(!this.el)
		{
			this.init(ajp);
		}
		ww_set_click(clname,function()
		{
			obj.get_id(this);
		},'pointer');
	},

	isloaded: function (transport,onc,fade,follow)
	{
		var a=transport.responseText.indexOf("<---->");
		var obj=this;
		var of_left=-10;
		var of_top=-10;
		var typ='';
		if(a!=-1)
		{
			eval("obj.evo=eval('(' + transport.responseText.substring(0,a) + ')')");
			setInnerHTML('t00ltip',transport.responseText.substring(a+6));
		}
		else
		{
			setInnerHTML('t00ltip',transport.responseText);
		}
		if(this.evo.left) of_left=this.evo.left;
		if(this.evo.top) of_top=this.evo.top;
		if(this.evo.typ) typ=this.evo.typ;
		this.el.style.display='';
		this.ty = typ;
		if(this.ty == 'lightbox')
		{
			this.pagepos();
			if (this.tylight == 0)
			{
				// background setzen
				var b 				= document.getElementsByTagName('body')[0];
				lboxbg 		= document.createElement('div');
				lboxbg.id	= 'lboxbg';
				b.appendChild(lboxbg);
				this.tylight = 1;
			}
			if(fade==true){transparency($('lboxbg').id,'100');}
			$('lboxbg').style.display = 'block';
			// positionierung setzen
			this.dx = (window_prop_w()-getWidth('t00ltip'))/2;
			this.dy = (window_prop_h()-getHeight('t00ltip'))/2;
			this.dy += this.py;
			if (this.dy < 0) this.dy = 0;
			$('t00ltip').style.left = this.dx+'px';
			$('t00ltip').style.top = this.dy+'px';
			// IE fixes
			if(movetool==true)
			{
				document.onmousemove=mouse_pos;
				tool_el=this.el;
	
			}			
			if (document.all && !window.opera)
			{			
				if(1==2)
				{
					// Windows angezeigte Höhe
					win_height = document.body.scrollHeight;
					//win_height = document.getElementsByTagName('html')[0].scrollHeight;
					win_height = document.getElementsByTagName('html')[0].offsetHeight-5;
	
					// Maximale Höhe von top-Wert des Tooltipps + Höhe Tooltips
					win_height_checked = this.dy + getHeight('t00ltip');
					// wenn gecheckte größer ist, setzen
					if (win_height_checked > win_height) win_height = win_height_checked;
					$('lboxbg').style.height = win_height + 'px';
				}
				if(1==1)
				{
					// Windows angezeigte HÃ¶he
					win_height = document.body.scrollHeight;
					if(win_height==0)win_height = document.getElementsByTagName('html')[0].offsetHeight-5;
					// Maximale HÃ¶he von top-Wert des Tooltipps + HÃ¶he Tooltips
					win_height_checked = this.dy + getHeight('t00ltip');
					// wenn gecheckte grÃ¶Ãer ist, setzen
					if (win_height_checked > win_height) win_height = win_height_checked;
					$('lboxbg').style.height = win_height + 'px';
				}
			}
			if(follow==true)
			{
				if (document.attachEvent)
				{
					//document.attachEvent("onscroll", scrollListener);
					document.onmousewheel=scrollListener;
				}
				else if (document.addEventListener)
				{
					document.addEventListener("scroll", scrollListener, false);
				}
			}
			ww_scroll_top=this.dy;
			ww_scroll_left=this.dx;			
		}
		else
		{
			setTop(this.el,findPosY(this.callobj)+of_top);
			setLeft(this.el,findPosX(this.callobj)+of_left);
			this.dx=findPosX(this.callobj)+of_left,
			this.dy=findPosY(this.callobj)+of_top,
			this.dx1=this.dx+getWidth('t00ltip');
			this.dy1=this.dy+getHeight('t00ltip');
			if(movetool==true)
			{
				ww_tool_mved=true;
				//alert(ww_pos_left);
				$('t00ltip').style.left = ww_pos_left+'px';
				$('t00ltip').style.top = ww_pos_top+'px';			
			}
		}
		this.isActive=true;
		if(fade==true){this.fade=fade;transparency(this.el,'100');}else{transparency(this.el,alpha);}
		this.el.style.visibility = "visible";
		if(fade==true) {var to=100-alpha;opacity(this.el.id, 0, to, this.fadetime);if(this.ty == 'lightbox'){opacity($('lboxbg').id, 0, '50', (this.fadetime*2));}}
		if(this.usemouse==true) {addEvent(document,'mousemove',function(ev) { obj.mousetracker(ev)});}
		if(onc)onc();
	},

	hide: function ()
	{
		if(document.removeEventListener){document.removeEventListener("scroll",scrollListener,false);document.removeEventListener("onkeydown",ww_taste,false);document.removeEventListener("keydown",ww_taste,false);}else{document.detachEvent('keydown',scrollListener);document.detachEvent('onkeydown',scrollListener);document.detachEvent('scroll',scrollListener);}
		ww_tool_close=false;
		ww_tool_mved=false;
		if(this.isActive==true)
		{
			if(this.usemouse==true) removeEvent(document,'mousemove',this.evmoli);
		}
		this.isActive=false;
		if(this.old_alt)
		{
			this.callobj.alt=this.old_alt;
		}
		if(this.fade==false)
		{		
			this.el.style.display = "none";
			this.el.style.visibility = "hidden";
		}
		else
		{
			opacity(this.el.id, 100, 0, this.fadetime);
			var tel=this.el;
			setTimeout(function(){tel.style.display="none";tel.style.visibility="hidden";},this.fadetime);
		}
		this.evo='';
		if(this.onClose) this.onClose();
		if(this.ty == 'lightbox')
		{
			if(this.fade==false)
			{
				$('lboxbg').style.display = 'none';
			}
			else
			{
				opacity($('lboxbg').id, 50, 0, this.fadetime);
				setTimeout(function(){$('lboxbg').style.display = 'none';},(this.fadetime*2));
			}
			if (document.all && !window.opera)
			{
				// IE fix
				//this.iefix_lboxbg('auto','auto');
				
				//b = document.getElementsByTagName('body')[0];
				//b.style.width = b.style.width-30;
			}
		}
		this.fade=false;
		if(this.usemouse==true) 
		{
			removeEvent(document,'mousemove',function(ev) { obj.mousetracker(ev)});
		}
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
		if(this.usemouse==true)
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
}

function evalScript(text)
{
	pos=0;
	while(1)
	{
		if((pos=text.indexOf('<script>', pos))>=0)
		{
			if((pos1=text.indexOf('</script>', pos))>=0)
			{
				aa=text.substring(pos+8,pos1);
				eval(aa);
				pos=pos1;
			}
		}
		else
		{
			break;
		}
	}
}

function evalScriptJS(js)
{
	eval(js);
}

var gnh_timeout = '';
function get_new_height(el,div)
{
	var divelement = $(div);
	if (divelement)
	{
		if ($(div).style.visibility == 'hidden')
		{
			setHeight(div,0);
			el.stNow = 0;
		}
		else if ($(div).style.height != 'auto')
		{
			if (window.ActiveXObject)
			{
				$(div).style.height = 'auto';
				el.stNow = getHeight(div);
				$(div).style.height = getHeight(div);
			}
			else
			{
				$(div).style.height = 'auto';
			}
		}
	}
	gnh_timeout = setTimeout(function(){get_new_height(el,div);},500);
}

var wwPlugIn_auto_div_temp = null;
var wwPlugIn =
{
	el: '',
	ajp:'',
	ins_obj: null,
	move_obj: null,
	moving: false,
	Timer: '',
	opTime: 0,
	duration: 400,
	onOnComplete: '',
	onOffComplete: '',
	onFlushComplete: '',
	evaljs: '',
	evo: '',

	// init
	init: function (div,ajp)
	{
		if(div) this.ins_obj=$(div);
		if(ajp) this.ajp=ajp;
		if(!this.el)
		{
			var divElm = document.createElement('DIV');
			divElm.id = "P1UgIn";
			divElm.style.position = "absolute";
			divElm.style.top = "0px";
			divElm.style.left = "0px";
			divElm.style.display = "none";
			document.getElementsByTagName("body").item(0).appendChild(divElm);
			this.el=divElm;
			get_new_height(this.el,this.ins_obj);
		}
	},

	get: function (div,datset,ajp,ext,js)
	{
		if (js) this.evaljs = js;
		if(!this.moving)
		{
			this.moving=true;
			var obj=this;
			if(this.move_obj)
			{
				if($(div).id==this.move_obj.id)
				{
					this.move_obj.onComplete=function()
					{
						obj.move_obj.onComplete=null;
						obj.move_obj.stNow=0;
						obj.move_obj=null;
						obj.moving=false;
						if(obj.onOffComplete)
						{
							obj.offOnComplete();
						}
					};
					ww_set_close(this.move_obj);
				}
				else
				{
					this.move_obj.onComplete=function()
					{
						obj.move_obj.onComplete=null;
						obj.get_checked(div,datset,ajp,ext);
						if(obj.onOffComplete)
						{
							obj.offOnComplete();
						}
					};
					ww_set_close(this.move_obj);
				}
			}
			else
			{
				obj.get_checked(div,datset,ajp,ext);
			}
		}
	},

	get_checked: function (div,datset,ajp,ext)
	{
		if (wwPlugIn_auto_div_temp != null)
		{
			$(wwPlugIn_auto_div_temp).innerHTML = '';
		}
		wwPlugIn_auto_div_temp = div;
		var obj=this;
		this.init(div,ajp);
		if(ext)
		{
			new ajax(this.ajp, {postBody:'data='+datset+ext,onComplete:function(transport){obj.isloaded(transport)}});
		}
		else
		{
			new ajax(this.ajp, {postBody:'data='+datset,onComplete:function(transport){obj.isloaded(transport)}});
		}
	},

	get_id: function (div,callobj,ajp,ext)
	{
		if(callobj.id)
		{
			pos=callobj.id.indexOf("pi_");
			if(pos==0)
			{
				this.get(div,callobj.id.substring(pos+3),ajp,ext);
			}
		}
	},

	isloaded: function (transport)
	{
		var a=transport.responseText.indexOf("<---->");
		var b=transport.responseText.indexOf("<--JS-->");
		var obj=this;
		
		this.el.style.visibility='hidden';
		this.el.style.display='';
		setWidth(this.el,getWidth(this.ins_obj));
		if(a!=-1 && b==-1)
		{
			eval("obj.evo=eval('(' + transport.responseText.substring(0,a) + ')')");
			setInnerHTML(this.el,transport.responseText.substring(a+6));
		}
		else if(a!=-1 && b!=-1)
		{
			eval("obj.evo=eval('(' + transport.responseText.substring(0,a) + ')')");
			setInnerHTML(this.el,transport.responseText.substring((b+8)));
			eval( transport.responseText.substring((a+6),b) );
		}
		else if(a==-1 && b!=-1)
		{
			setInnerHTML(this.el,transport.responseText.substring((b+8)));
			eval( transport.responseText.substring(0,b) );
		}
		else
		{
			setInnerHTML(this.el,transport.responseText);
		}

		if(this.ins_obj.stNow==undefined)
		{
			this.move_obj=wwInit_element(this.ins_obj,{});
		}
		else
		{
			this.move_obj=this.ins_obj;
		}
		evalScriptJS(this.evaljs);
		this.move_obj.stNow=0;
		this.move_obj.stHeight=getHeight(this.el);
		setHeight(this.move_obj,0),
		hide(this.move_obj);
		setInnerHTML(this.ins_obj,this.el.innerHTML);
		setHeight(this.move_obj,0),
		ww_set_height(obj.move_obj,getHeight(this.el));
		this.move_obj.onComplete=obj.move_end();
	},

	move_end: function()
	{
		this.move_obj.onComplete=null;
		this.moving=false;
		if(this.onOnComplete)
		{
			this.onOnComplete();
		}
	},

	flush: function(div,color)
	{
		var obj=this;
		var div_obj=$(div);
		this.init();
		this.el.style.visibility='hidden';
		this.el.style.display='';
		setInnerHTML(this.el,'<div style="width:'+getWidth(div_obj)+'px;height:'+getHeight(div_obj)+'px;background-color:'+color+'"></div>');
		setTop(this.el,findPosY(div_obj));
		setLeft(this.el,findPosX(div_obj));
		this.el.style.visibility='visible';
		this.el.style.zindex='1000';
		this.opTime=(new Date).getTime();
		this.Timer = setInterval (function(){obj.flush_time();}, 10);
	},

	flush_time: function()
	{
		if(this.Timer)
		{
			var time  = (new Date).getTime();
			if(time>=this.opTime+this.duration)
			{
				clearInterval(this.Timer);
				this.Timer=null;
				this.el.style.visibility='hidden';
				setTop(this.el,0);
				setLeft(this.el,0);
				if(this.onFlushComplete)
				{
					this.onFlushComplete();
				}
			}
			else
			{
				ww_set_opacity(this.el,1-(time - this.opTime) / (this.duration));
			}
		}
	},

	hide: function ()
	{
		if(this.move_obj)
		{
			var obj=this;
			
			
			obj.move_obj.onComplete=function()
			{
				obj.move_obj.onComplete=null;
				if(obj.onOffComplete)
				{
					obj.onOffComplete();
				}
				obj.moving=false;
				obj.move_obj=null;
			};
			this.moving=true;
			ww_set_close(this.move_obj);
		}
	}
}

var wwPlugIn_div_temp = null;
var wwPlugIn_ORIGINAL =
{
	el: '',
	ajp:'',
	ins_obj: null,
	move_obj: null,
	moving: false,
	Timer: '',
	opTime: 0,
	duration: 400,
	onOnComplete: '',
	onOffComplete: '',
	onFlushComplete: '',
	evo: '',

	// init
	init: function (div,ajp)
	{
		if(div) this.ins_obj=$(div);
		if(ajp) this.ajp=ajp;
		if(!this.el)
		{
			var divElm = document.createElement('DIV');
			divElm.id = "P1UgIn";
			divElm.style.position = "absolute";
			divElm.style.top = "0px";
			divElm.style.left = "0px";
			divElm.style.display = "none";
			document.getElementsByTagName("body").item(0).appendChild(divElm);
			this.el=divElm;
		}
	},

	get: function (div,datset,ajp,ext)
	{
		if(!this.moving)
		{
			this.moving=true;
			var obj=this;
			if(this.move_obj)
			{
				if($(div).id==this.move_obj.id)
				{
					this.move_obj.onComplete=function()
					{
						obj.move_obj.onComplete=null;
						obj.move_obj.stNow=0;
						obj.move_obj=null;
						obj.moving=false;
						if(obj.onOffComplete)
						{
							obj.offOnComplete();
						}
					};
					ww_set_close(this.move_obj);
				}
				else
				{
					this.move_obj.onComplete=function()
					{
						obj.move_obj.onComplete=null;
						obj.get_checked(div,datset,ajp,ext);
						if(obj.onOffComplete)
						{
							obj.offOnComplete();
						}
					};
					ww_set_close(this.move_obj);
				}
			}
			else
			{
				obj.get_checked(div,datset,ajp,ext);
			}
		}
	},

	get_checked: function (div,datset,ajp,ext)
	{
		if (wwPlugIn_div_temp != null){
      $(wwPlugIn_div_temp).innerHTML = '';
    }
    wwPlugIn_div_temp = div;
		var obj=this;
		this.init(div,ajp);
		if(ext)
		{
			new ajax(this.ajp, {postBody:'data='+datset+ext,onComplete:function(transport){obj.isloaded(transport)}});
		}
		else
		{
			new ajax(this.ajp, {postBody:'data='+datset,onComplete:function(transport){obj.isloaded(transport)}});
		}
	},

	get_id: function (div,callobj,ajp,ext)
	{
		if(callobj.id)
		{
			pos=callobj.id.indexOf("pi_");
			if(pos==0)
			{
				this.get(div,callobj.id.substring(pos+3),ajp,ext);
			}
		}
	},

	isloaded: function (transport)
	{
		var a=transport.responseText.indexOf("<---->");
		var obj=this;
		
		this.el.style.visibility='hidden';
		this.el.style.display='';
		setWidth(this.el,getWidth(this.ins_obj));
		if(a!=-1)
		{
			eval("obj.evo=eval('(' + transport.responseText.substring(0,a) + ')')");
			setInnerHTML(this.el,transport.responseText.substring(a+6));
		}
		else
		{
			setInnerHTML(this.el,transport.responseText);
		}

		if(this.ins_obj.stNow==undefined)
		{
			this.move_obj=wwInit_element(this.ins_obj,{});
		}
		else
		{
			this.move_obj=this.ins_obj;
		}
		this.move_obj.stNow=0;
		this.move_obj.stHeight=getHeight(this.el);
		setHeight(this.move_obj,0),
		hide(this.move_obj);
		setInnerHTML(this.ins_obj,this.el.innerHTML);
		setHeight(this.move_obj,0),
		ww_set_height(obj.move_obj,getHeight(this.el));
		this.move_obj.onComplete=obj.move_end();
	},

	move_end: function()
	{
		this.move_obj.onComplete=null;
		this.moving=false;
		if(this.onOnComplete)
		{
			this.onOnComplete();
		}
	},

	flush: function(div,color)
	{
		var obj=this;
		var div_obj=$(div);
		this.init();
		this.el.style.visibility='hidden';
		this.el.style.display='';
		setInnerHTML(this.el,'<div style="width:'+getWidth(div_obj)+'px;height:'+getHeight(div_obj)+'px;background-color:'+color+'"></div>');
		setTop(this.el,findPosY(div_obj));
		setLeft(this.el,findPosX(div_obj));
		this.el.style.visibility='visible';
		this.el.style.zindex='1000';
		this.opTime=(new Date).getTime();
		this.Timer = setInterval (function(){obj.flush_time();}, 10);
	},

	flush_time: function()
	{
		if(this.Timer)
		{
			var time  = (new Date).getTime();
			if(time>=this.opTime+this.duration)
			{
				clearInterval(this.Timer);
				this.Timer=null;
				this.el.style.visibility='hidden';
				setTop(this.el,0);
				setLeft(this.el,0);
				if(this.onFlushComplete)
				{
					this.onFlushComplete();
				}
			}
			else
			{
				ww_set_opacity(this.el,1-(time - this.opTime) / (this.duration));
			}
		}
	},

	hide: function ()
	{
		if(this.move_obj)
		{
			var obj=this;
			
			obj.move_obj.onComplete=function()
			{
				obj.move_obj.onComplete=null;
				if(obj.onOffComplete)
				{
					obj.onOffComplete();
				}
				obj.moving=false;
				obj.move_obj=null;
			};
			this.moving=true;
			ww_set_close(this.move_obj);
		}
	}
}


el_flush_div=null;
el_flush_op=100;
el_flush_opTimer=null;
el_flush_obj='';

function el_flush(div,color)
{
	el_flush_obj=$(div);
	if(el_flush_div == null)
	{
		el_flush_div=document.createElement('DIV')
		document.getElementsByTagName("body").item(0).appendChild(el_flush_div);
	}

	el_flush_op=100;
	el_flush_div.style.visibility='hidden';
	el_flush_div.style.display='';
	el_flush_div.style.position='absolute';
	el_flush_div.style.width=getWidth(el_flush_obj)+'px';
	el_flush_div.style.height=getHeight(el_flush_obj)+'px';
	el_flush_div.style.backgroundColor=color;
	setTop(el_flush_div,findPosY(el_flush_obj));
	setLeft(el_flush_div,findPosX(el_flush_obj));
	el_flush_div.style.visibility='visible';
	el_flush_div.style.zIndex='1001';
	el_flush_opTimer = setInterval (function(){el_flush_time();}, 10);
}

function el_flush_time()
{
	if(el_flush_opTimer!=null)
	{
		ww_set_opacity(el_flush_div,(el_flush_op-=4)/100);
		if(el_flush_op<=20)
		{
			clearInterval(el_flush_opTimer);
			el_flush_opTimer=null;
			el_flush_div.style.visibility='hidden';
			setTop(el_flush_div,0);
			setLeft(el_flush_div,0);
		}
	}
}

function EvalSound(soundobj)
{
	var thissound= eval("document."+soundobj);
	thissound.Play();
}

var return_login;
function getlogin()
{
	if(return_login._MO_LOGIN_STATUS=='_ET_LO_OK')
	{
		//wwPlugIn.onFlushComplete=function(){location.href=PPATH+'controlcenter-member.html';};
		var loc=location.href;
		if(parent.top.ww_login_url) loc=parent.top.ww_login_url;
		wwPlugIn.onFlushComplete=function(){location.href=loc;};
		wwPlugIn.flush('login','#23982b');
		return;
	}
	else if (return_login._MO_LOGIN_ETXT == 'NUBREVALID')
	{
		ToolTip.get('nubrevalid',this,false,'');
		return;
	}
	else if (return_login._MO_LOGIN_ETXT == 'IDREVALID')
	{
		ToolTip.get('idrevalid',this,false,'&NAME='+return_login._MO_LOGIN_NAME);
		return;
	}
	setInnerHTML('loginerror',return_login._MO_LOGIN_ETXT);
	wwPlugIn.flush('login','#b73a18')
}

function getlogin1()
{
	if(return_login._MO_LOGIN_STATUS=='_ET_LO_OK')
	{
		//wwPlugIn.onFlushComplete=function(){location.href=PPATH+'controlcenter-member.html';};
		wwPlugIn.onFlushComplete=function(){location.href=location.href;};
		wwPlugIn.flush('form_login1','#23982b');
		return;
	}
	//setInnerHTML('loginerror1',return_login._MO_LOGIN_ETXT);
	wwPlugIn.flush('form_login1','#b73a18')
	//wwPlugIn.get('pwvdiv','pwv',PPATH+'/ajax/plugin.html');
	wwPlugIn.get('logindiv','login',PPATH+'/ajax/plugin.html');
	return;
}

function nubrevalid_ok(name,pw,stlo)
{
	if (name=='<!--NAME-->' ) {
		$('LNUBREVALID').value=1;
		hide('nub_links');
		block('nub_wait');
		$('CHANNEL').style.marginTop='-500px';
		block('CHANNEL');
		chatlogin($('form_login'));	
	}
	else {
	testlogin2 (name,pw,stlo);
	}
}
function nubrevalid_cancel()
{
	ToolTip.hide();
}


function testlogin2(name, pw, stlo){
	
	new ajax(PPATH + 'ajax/login.html', {
		postBody: 'NAME=' + URLEncode(name) + '&PW=' + URLEncode(pw) + '&STLO=' + stlo + '&NUBREVALID=1',
		onComplete: function(){
			if (return_login._MO_LOGIN_STATUS == '_ET_LO_OK') {
				location.href = location.href;
				
			}
	},evalObj:'return_login'});
}	
		


function testlogin(obj,flu,err)
{
	var stlo=obj.STLO.checked;
	if(stlo==true)
	{
		stlo=1;
	}
	else
	{
		stlo=0;
	}
	new ajax(PPATH+'ajax/login.html', {postBody:'NAME='+URLEncode(obj.NAME.value)+'&PW='+URLEncode(obj.PW.value)+'&STLO='+stlo+'&NUBREVALID='+$('LNUBREVALID').value,onComplete:function(){
		var to_flush='login';
		var to_err='loginerror';
		if(typeof(flu)!='undefined')
		{
			to_flush=flu;
		}
		if(typeof(err)!='undefined')
		{
			to_err=err;
		}
		if(return_login._MO_LOGIN_STATUS=='_ET_LO_OK')
		{
			//wwPlugIn.onFlushComplete=function(){location.href=PPATH+'controlcenter-member.html';};
			var loc=location.href;
			if(parent.top.ww_login_url) loc=parent.top.ww_login_url;
			wwPlugIn.onFlushComplete=function(){location.href=loc;};
			if(to_flush=='loginbox'){el_flush(to_flush,'#23982b');}
			wwPlugIn.flush(to_flush,'#23982b');
			return;
		}
		else if (return_login._MO_LOGIN_ETXT == 'NUBREVALID')
		{
			
			tll='&NAME='+URLEncode(obj.NAME.value);
			tll+='&PW='+URLEncode(obj.PW.value);
			tll+='&stlo='+stlo;
			ToolTip.get('nubrevalid',this,false,tll);
			return;
		}
		else if (return_login._MO_LOGIN_ETXT == 'IDREVALID')
		{
			ToolTip.get('idrevalid',this,false,'&NAME='+return_login._MO_LOGIN_NAME);
			return;
		}
		setInnerHTML(to_err,return_login._MO_LOGIN_ETXT);
		wwPlugIn.flush(to_flush,'#b73a18');
		if(to_flush=='loginbox'){el_flush(to_flush,'#b73a18');}
	},evalObj:'return_login'});
}

function testlogin1(obj)
{
	new ajax(PPATH+'ajax/login.html', {postBody:'NAME='+URLEncode(obj.NAME1.value)+'&PW='+URLEncode(obj.PW1.value)+'&STLO='+obj.STLO1.value,onComplete:getlogin1,evalObj:'return_login'});
}

function goto_channel()
{
	var not=0;
	if($('not')){if($('not').checked==true){not=1;}}
	var loc=PPATH+'cpop.html?CHANNEL='+escape($('CHANNEL').value)+'&SBG='+$('bgc').value+'&RURL='+escape($('LRURL').value)+'&NOT='+not;
	location.href=loc;
	return;
}


function getlogin_chat()
{
	var not=0;
	if($('not')){if($('not').checked==true){not=1;}}
	if(return_login._MO_LOGIN_STATUS=='_ET_LO_OK')
	{
		if(1==2)
		{
			var loc=PPATH+'cpop.html?CHANNEL='+escape($('CHANNEL').value)+'&SBG='+$('bgc').value+'&RURL='+escape($('LRURL').value)+'&NOT='+not;
			wwPlugIn.onFlushComplete=function(){location.href=loc;};
			wwPlugIn.flush('login','#23982b');
			return;
		}
		wwPlugIn.onFlushComplete=function()
		{
			var div=document.createElement('div');
			var unique=Math.random();
			div.id='ww_login_form_div'+unique;
			div.style.visibility='hidden';
			document.getElementsByTagName("body").item(0).appendChild(div);
			var form=document.createElement('form');
			form.setAttribute('method','post');
			form.setAttribute('id','ww_login_form_form'+unique);
			form.setAttribute('action',PPATH+'cpop.html');
			document.getElementById('ww_login_form_div'+unique).appendChild(form);
			var input=new Array();
			input[input.length]=new Array('CHANNEL',escape($('CHANNEL').value));
			input[input.length]=new Array('SBG',$('bgc').value);
			input[input.length]=new Array('RURL',escape($('LRURL').value));
			input[input.length]=new Array('NOT',not);
			for(var i=0;i<input.length;i++)
			{
				var inp=document.createElement('input');
				inp.setAttribute('name',input[i][0]);
				inp.setAttribute('type','text');
				inp.setAttribute('value',input[i][1]);
				document.getElementById('ww_login_form_form'+unique).appendChild(inp);
			}
			var submit=document.createElement('input');
			submit.setAttribute('type','submit');
			document.getElementById('ww_login_form_form'+unique).appendChild(submit);
			document.getElementById('ww_login_form_form'+unique).submit();
			return;	
		};
		wwPlugIn.flush('login','#23982b');
		return;	
	}
	else if ($('LPW').value == '')
	{
		if(1==2)
		{
			var loc=PPATH+'cpop.html?NAME='+escape($('LNAME').value)+'&PW=&CHANNEL='+escape($('CHANNEL').value)+'&SBG='+$('bgc').value+'&RURL='+escape($('LRURL').value)+'&NOT='+not;
			location.href=loc;
			return;
		}
		var div=document.createElement('div');
		var unique=Math.random();
		div.id='ww_login_form_div'+unique;
		div.style.visibility='hidden';
		document.getElementsByTagName("body").item(0).appendChild(div);
		var form=document.createElement('form');
		form.setAttribute('method','post');
		form.setAttribute('id','ww_login_form_form'+unique);
		form.setAttribute('action',PPATH+'cpop.html');
		document.getElementById('ww_login_form_div'+unique).appendChild(form);
		var input=new Array();
		input[input.length]=new Array('NAME',escape($('LNAME').value));
		input[input.length]=new Array('PW','');
		input[input.length]=new Array('CHANNEL',escape($('CHANNEL').value));
		input[input.length]=new Array('SBG',$('bgc').value);
		input[input.length]=new Array('RURL',escape($('LRURL').value));
		input[input.length]=new Array('NOT',not);
		for(var i=0;i<input.length;i++)
		{
			var inp=document.createElement('input');
			inp.setAttribute('name',input[i][0]);
			inp.setAttribute('type','text');
			inp.setAttribute('value',input[i][1]);
			document.getElementById('ww_login_form_form'+unique).appendChild(inp);
		}
		var submit=document.createElement('input');
		submit.setAttribute('type','submit');
		document.getElementById('ww_login_form_form'+unique).appendChild(submit);
		document.getElementById('ww_login_form_form'+unique).submit();
		return;
	}
	else if (return_login._MO_LOGIN_ETXT == 'NUBREVALID')
	{
		hide('CHANNEL');
		ToolTip.get('nubrevalid',this,false,'');
		return;
	}
	else if (return_login._MO_LOGIN_ETXT == 'IDREVALID')
	{
		hide('CHANNEL');
		ToolTip.get('idrevalid',this,false,'&NAME='+return_login._MO_LOGIN_NAME);
		return;
	}
	setInnerHTML('loginerror',return_login._MO_LOGIN_ETXT);
	wwPlugIn.flush('login','#b73a18');
}

function chatlogin(obj)
{
	var stlo=obj.STLO.checked;
	if(stlo==true)
	{
		stlo=1;
	}
	else
	{
		stlo=0;
	}
	new ajax(PPATH+'ajax/login.html', {postBody:'NAME='+URLEncode(obj.NAME.value)+'&PW='+URLEncode(obj.PW.value)+'&STLO='+stlo+'&NUBREVALID='+$('LNUBREVALID').value,onComplete:getlogin_chat,evalObj:'return_login'});
}


//function BilderVorladen()
// {
//    document.Vorladen = new Array();
//    if (document.images)
//    {
//        for (var i = 0; i < BilderVorladen.arguments.length; i++)
//        {
//            document.Vorladen[i] = new Image();
//            document.Vorladen[i].src = BilderVorladen.arguments[i];
//        }
//    }
//}

//addLoadEvent(function()
// {
//    BilderVorladen('grafiken/basic/buttons/basic_button_left_1.gif',
//    'grafiken/basic/buttons/basic_button_left_2.gif',
//    'grafiken/basic/buttons/basic_button_right_1.gif',
//    'grafiken/basic/buttons/basic_button_right_2.gif'
//    );
//});

//declaring the class
var ww_sslider = Class.create();
//defining the rest of the class implmentation
ww_sslider.prototype = {

	sl_gap: 0,
	sl_div_obj: '',
	sl_pos: 0,
	sl_x: 0,
	sl_to_track: false,

	sl_div: '',
	sl_left: 0,
	sl_max: 2000,
	sl_width: 10,
	sl_minv: 0,
	sl_maxv: 100,
	sl_akt: 50,
	sl_release: '',
	sl_move: '',
	sl_form: '',
	sl_hover: '',

	initialize: function(options)
	{
		if(options.sl_div!='undefined') this.sl_div=options.sl_div;
		if(options.sl_left!='undefined') this.sl_left=options.sl_left;
		if(options.sl_max!='undefined') this.sl_max=options.sl_max;
		if(options.sl_width!='undefined') this.sl_width=options.sl_width;
		if(options.sl_minv!='undefined') this.sl_minv=options.sl_minv;
		if(options.sl_maxv!='undefined') this.sl_maxv=options.sl_maxv;
		if(options.sl_akt!='undefined') this.sl_akt=options.sl_akt;
		if(options.sl_release!='undefined') this.sl_release=options.sl_release;
		if(options.sl_move!='undefined') this.sl_move=options.sl_move;
		if(options.sl_form!='undefined') this.sl_form=options.sl_form;
		this.sl_div_obj=$(this.sl_div);
		var obj=this;
		if (this.sl_div_obj.addEventListener) {
			this.sl_div_obj.addEventListener('mousedown', function() {obj.track()}, false);
			this.sl_div_obj.addEventListener('mouseup', function() {obj.track_stop()}, false);
		} else {
			this.sl_div_obj.onmousedown = function() {obj.track()};
			this.sl_div_obj.onmouseup = function() {obj.track_stop()};
		}
		if (window.addEventListener)
		{
			document.addEventListener('mousemove', function(ev) { obj.mousetracker(ev)}, false);
		}
		else if (window.attachEvent)
		{
			document.attachEvent('onmousemove', function(ev) { obj.mousetracker(ev)});
		}
		else
		{
			document.onmousemove = function(ev) { obj.mousetracker(ev)};
		}
		this.sl_pos=(this.sl_max-this.sl_width)/(this.sl_maxv-this.sl_minv)*(this.sl_akt-this.sl_minv);
		this.sl_div_obj.style.marginLeft = this.sl_pos+ "px";
	},

	track: function(ev)
	{
		var obj=this;
		if(this.sl_hover) this.sl_hover();
		if (document.addEventListener)
		{
	                document.addEventListener('mouseup', function() {obj.track_stop()}, false);
	        }
	        else
	        {
			document.onmouseup = function() {obj.track_stop()};
	        }
		this.sl_gap=parseInt(this.sl_pos);
		if (isNaN(this.sl_gap))
		{
			this.sl_gap = 0;
		}
		this.sl_gap -= this.sl_x;
		this.sl_to_track=true;
	},
	
	track_stop: function()
	{
		var obj=this;
		if (document.removeEventListener)
		{
			document.removeEventListener('mouseup', function() {obj.track_stop()}, false);
		}
		else
		{
			document.onmouseup = null;
		}
		if(this.sl_release) this.sl_release(this.sl_akt);
		this.sl_to_track=false;
	},
	
	mousetracker: function(ev)
	{
		if (!ev)
		{
			ev = window.event;
		}
		this.sl_x = ev.clientX;
		if(this.sl_to_track)
		{
			var old_pos = this.sl_pos;
			this.sl_pos= this.sl_gap + this.sl_x;
			if(this.sl_pos<0)
			{
				this.sl_pos=0;
			}
			if(this.sl_pos>=this.sl_max-this.sl_width)
			{
				this.sl_pos=this.sl_max-this.sl_width;
			}
			this.sl_div_obj.style.marginLeft = this.sl_pos+ "px";
			if(old_pos != this.sl_pos)
			{
				this.sl_akt=this.sl_minv+((this.sl_maxv-this.sl_minv)*this.sl_pos/(this.sl_max-this.sl_width));
				if(this.sl_move) this.sl_move(this.sl_akt);
				if(this.sl_form) this.sl_form.value=this.sl_akt;
			}
			if (ev && ev.preventDefault)
			{
				ev.preventDefault(); 
			}
			else if (window.event)
			{
				window.event.returnValue = false;
			}
		}
	}
};

function set_bof(v1,v2)
{
	new ajax(PPATH+'ajax/bof_add.html', {postBody:'XID='+v1+'&OTYP='+v2,onComplete:function(){location.href=location.href}});
}

function rm_bof(v1,v2)
{
	new ajax(PPATH+'ajax/bof_del.html', {postBody:'XID='+v1+'&OTYP='+v2,onComplete:function(){location.href=location.href}});
}

function encode_utf8(rohtext)
{
	// dient der Normalisierung des Zeilenumbruchs
	rohtext = rohtext.replace(/\r\n/g,"\n");
	var utftext = "";
	for(var n=0; n<rohtext.length; n++)
		{
		// ermitteln des Unicodes des  aktuellen Zeichens
		var c=rohtext.charCodeAt(n);
		// alle Zeichen von 0-127 => 1byte
		if (c<128)
			utftext += String.fromCharCode(c);
		// alle Zeichen von 127 bis 2047 => 2byte
		else if((c>127) && (c<2048)) {
			utftext += String.fromCharCode((c>>6)|192);
			utftext += String.fromCharCode((c&63)|128);}
		// alle Zeichen von 2048 bis 66536 => 3byte
		else {
			utftext += String.fromCharCode((c>>12)|224);
			utftext += String.fromCharCode(((c>>6)&63)|128);
			utftext += String.fromCharCode((c&63)|128);}
		}
	return utftext;
}

function decode_utf8(utftext)
{
	var plaintext = ""; var i=0; var c=c1=c2=0;
	// while-Schleife, weil einige Zeichen uebersprungen werden
	while(i<utftext.length)
		{
		c = utftext.charCodeAt(i);
		if (c<128) {
			plaintext += String.fromCharCode(c); i++;}
		else if((c>191) && (c<224)) {
			c2 = utftext.charCodeAt(i+1);
			plaintext += String.fromCharCode(((c&31)<<6) | (c2&63));
			i+=2;}
		else {
			c2 = utftext.charCodeAt(i+1); c3 = utftext.charCodeAt(i+2);
			plaintext += String.fromCharCode(((c&15)<<12) | ((c2&63)<<6) | (c3&63));
			i+=3;}
		}
	return plaintext;
}

function escape_umlaute(text){
 umlaute = new Array("ü", "ö", "ä","Ü","Ö","Ä","ß");
 umlaute_escape = new Array("&uuml;", "&ouml;", "&auml;","&Uuml;","&Ouml;","&Auml;","&szlig;");
 for (var i=0; i<umlaute.length; i++)
 {
 	eval('text = text.replace(/'+umlaute[i]+'/g, \''+umlaute_escape[i]+'\')');
 }
 return text;
}

function window_prop_w()
{
	if (typeof window.innerWidth == 'number')
	{
		return window.innerWidth;
	}
	else if (typeof document.body.clientWidth == 'number')
	{
		return document.body.clientWidth;
	}
	else if (typeof document.documentElement.clientWidth == 'number')
  {
		return document.documentElement.clientWidth;
	}
	return 0;
}

function window_prop_h()
{
	if (typeof window.innerWidth == 'number')
	{
		return window.innerHeight;
	}
	else if (typeof document.body.clientWidth == 'number')
	{
		//return document.body.clientHeight; // IE interpretiert falsch
		return document.documentElement.offsetHeight;
	}
	else if (typeof document.documentElement.clientWidth == 'number')
  {
		return document.documentElement.clientHeight;
	}
	return 0;
}

/* NC */

nc_window = false;
function nc_open()
{
	var tmph = screen.height;
	var tmpw = screen.width;
	nc_window = window.open(nc_p_in, "NC", "width="+(nc_w-4)+",height="+(nc_h-4)+",left="+parseInt((tmpw/2)-(nc_w/2))+",top="+parseInt((tmph/2)-(nc_h/2))+",scrollbars=no,location=no, dependent=yes,directories=no,status=no,menubar=no, toolbar=no,resizable=no");
	nc_window.focus();
}
function nc_newmsg(uname)
{
	var tmph = screen.height;
	var tmpw = screen.width;
	nc_window = window.open(nc_p_new+((uname)?'?NAME='+uname:''), "NC", "width="+(nc_w-4)+",height="+(nc_h-4)+",left="+parseInt((tmpw/2)-(nc_w/2))+",top="+parseInt((tmph/2)-(nc_h/2))+",scrollbars=no,location=no, dependent=yes,directories=no,status=no,menubar=no, toolbar=no,resizable=no");
	nc_window.focus();
}

function ww_checkbox_change_bit(inp,val,chkid)
{
	if($(chkid).checked==true)
	{
		if($(inp).value.indexOf(val) != '-1')
		{
		}
		else
		{
			var n=$(inp).value.replace('0', '');
			$(inp).value=n;
			$(inp).value+=','+val;
		}
	}
	else
	{
		var n=$(inp).value.replace(','+val , '');
		$(inp).value=n;
		if($(inp).value=='')
		{
			$(inp).value='0';
		}
	}
}

function ww_voting_send(xid,val)
{
	if(val)
	{
		new ajax(PPATH+'ajax/voting.html', {postBody:'XID='+xid+'&VAL='+val,onComplete:function(){wwPlugIn.flush('ww_voting_form_'+xid,'#23982b');ww_voting_show_result(xid);}});
	}
	else
	{
		wwPlugIn.flush('ww_voting_form_'+xid,'#b73a18');
	}
}

function ww_voting_show_result(xid)
{
	if(xid)
	{
		new ajax(PPATH+'ajax/voting_result.html', {postBody:'XID='+xid,update:'ww_voting_'+xid,onComplete:function(){  }});
	}
	else
	{
		wwPlugIn.flush('ww_voting_form_'+xid,'#b73a18');
	}
}

function ww_voting_show(xid)
{
	if(xid)
	{
		new ajax(PPATH+'ajax/voting_show.html', {postBody:'XID='+xid,update:'ww_voting_'+xid,onComplete:function(){}});
	}
}

function ww_twitter_update()
{
	new ajax(PPATH+'ajax/twitter_update.html', {postBody:'',update:'twitter_box'});
}

var twitter_update=false;
 
function ww_twitter_result(trans)
{
	ToolTip.hide();
	$('twitter_box_content').scrollTop=0;
	if(return_twitter._MO_TW_STATUS=='NO')
	{
		setInnerHTML("ww_twitter_result",return_twitter._MO_TW_ETXT);
		$('ww_twitter_result').style.color='#b73a18';
		wwPlugIn.flush('ww_twitter_result','#b73a18');
	}
	if(return_twitter._MO_TW_STATUS=='OK')
	{
		if(twitter_update==true)
		{
			twitter_update=false;
			setTimeout("ww_twitter_update()",1000);
		}
		setInnerHTML("ww_twitter_result",return_twitter._MO_TW_ETXT);
		$('ww_twitter_result').style.color='#23982b';
		wwPlugIn.flush('ww_twitter_result','#23982b');
	}
	setTimeout("setInnerHTML('ww_twitter_result','');",2000);
}

function ww_twitter_msg_send(to,msg)
{
	if(to && msg)
	{
		new ajax(PPATH+'ajax/twitter_send.html', {postBody:'TO='+to+'&MSG='+msg,onComplete:ww_twitter_result,evalObj:'return_twitter'});
	}
}

function ww_twitter_msg_send_stat(msg)
{
	if(msg)
	{
		twitter_update=true;
		new ajax(PPATH+'ajax/twitter_send_msg.html', {postBody:'MSG='+msg,onComplete:ww_twitter_result,evalObj:'return_twitter'});
	}
}

function ww_twitter_msg_del(xid)
{
	if(xid)
	{
		new ajax(PPATH+'ajax/twitter_msg_del.html', {postBody:'XID='+xid,onComplete:ww_twitter_result,evalObj:'return_twitter'});
	}
}

function ww_twitter_stat_del(xid)
{
	if(xid)
	{
		twitter_update=true;
		new ajax(PPATH+'ajax/twitter_sta_del.html', {postBody:'XID='+xid,onComplete:ww_twitter_result,evalObj:'return_twitter'});
	}
}

function ww_send_taf_res(trans)
{
	if(return_taf._MO_AKT_STATUS=='NO')
	{
		setInnerHTML('ww_taf_error',return_taf._MO_TAF_ETXT);
		el_flush('ww_tooltip_flush','#b73a18');
	}
	if(return_taf._MO_AKT_STATUS=='OK')
	{
		setInnerHTML('ww_taf_error',return_taf._MO_TAF_ETXT);
		el_flush('ww_tooltip_flush','#23982b');
		setTimeout("ToolTip.hide();",1000);
	}
}

function ww_send_taf(url,email,desc)
{
	if(url && email && desc)
	{
		new ajax(PPATH+'ajax/send_taf.html', {postBody:'URL='+url+'&EMAIL='+email+'&DESC='+desc,onComplete:ww_send_taf_res,evalObj:'return_taf'});
	}
	else
	{
		el_flush('ww_tooltip_flush','#b73a18');
	}
}

/**
* Handle Firebug calls when Firebug is not available (getfirebug.com)
*/
if (!window.console || !console.firebug)
{
	window.console = {};
	var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
	for (var i = 0; i < names.length; ++i) window.console[names[i]] = function() {};
}
function console_alert(txt)
{
	console.info(txt);
}

function ww_fbc_sitereload(url)
{
	if(url)
	{
		if(url=='RELOAD')
		{
			console_alert('reload to '+window.loation);
			window.location.reload();
		}
		else
		{
			console_alert('reload to '+url);
			location.href=url;
		}  
	}
	else
	{
		console_alert('reload to '+window.loation);
		window.location.reload();
	}
}

function ww_logout(url)
{
	if(typeof(ww_fbc_ownid)=='undefined')
	{
		ww_fbc_sitereload(url);
	}
	else
	{
		if(ww_fbc_ownid>0)
		{
			FB.ensureInit(function() {
				FB.Facebook.apiClient.users_getLoggedInUser(function(res)
				{
					if(res==null)
					{
						ww_fbc_sitereload(url);
					}
					else
					{
						FB.Facebook.get_sessionState().waitUntilReady(function() 
						{
							ToolTip.get('ww_fbc_logout',this,false,'&URL='+url);
						});
					}
				});
			});
		}
		else
		{
			ww_fbc_sitereload(url);
		}
	}
}

var ww_oldsrc;
var ww_formsend=false;
var ww_formxid;
var ww_formdiv;
function oc_save(xid,div,iext)
{
	if(ww_formsend==false)
	{
		ww_formxid=xid;
		ww_formdiv=div;
		var img="grafiken/basic/loading.gif";
		if(typeof(iext)=='undefinex') var iext='';
		ww_setInnerHTML(div,"<img "+iext+" src='"+img+"' />");
		ww_oldsrc=$(xid).onclick;
		$(xid).onclick=new function(){};
		ww_formsend=true;
	}
}


// Prints one or multiple Textarea(s) which will limit the text to a maximum length
// Tested on Firefox 1.5 and 3.0 and Internet Explorer 6.0 and 7.0
// For details about JavaScript events try the sample at the bottom of the page:
// mediaevent.de/javascript/onkeydown.html
// on various browsers to study the multiple differences!

// ATTENTION: onKeyDown and onKeyUp will NOT work here!!
function OnTextareaKeyPress(oEvent, oArea, MaxLen)
{
    Chr = -1;
    if (window.event) // MSIE (does not fire DEL, BACKSPACE keys)
    {
        // event.charCode is undefined on MSIE!!
        Chr = window.event.keyCode;
    }
    else if (oEvent) // Firefox (fires also DEL, BACKSPACE keys with charCode=0)
    {
        // oEvent.keyCode returns nonsense but NOT the ASCII code on Firefox!!
        Chr = oEvent.charCode;
    }

    // return false to block characters if text too long
    // return true for all control keys!!
    return (Chr < 32 || oArea.value.length < MaxLen);
}

// Shorten PASTED texts which cannot be captured in OnTextareaKeyPress()
function OnTextareaKeyUp(oArea, MaxLen)
{
    if (oArea.value.length > MaxLen)
        oArea.value = oArea.value.substring(0, MaxLen);
}

function ww_pwv()
{
	new ajax(PPATH+'ajax/login_lostpw.html', {postBody: 'NAME='+URLEncode($('pwvname').value), evalObj:'return_pwv',onComplete: function()
	{
		if(return_pwv._MO_PWV_STATUS=='_ET_PWV_OK')
		{
			setInnerHTML('loginerror_pwv','<span class="green">'+return_pwv._MO_PWV_ETXT+'</span>');
			el_flush('loginerror_pwv','#23982b');
		}
		else
		{
			setInnerHTML('loginerror_pwv','<span class="red">'+return_pwv._MO_PWV_ETXT+'</span>');
			el_flush('loginerror_pwv','#b73a18');
		}
	}
	});
}

function ww_debugger_send(str)
{
	if(WW_DEBUGGING_MODE==true)
	{
		top.InsertLog(str);
	}
} 

/**
*
*  Javascript trim, ltrim, rtrim
*  http://www.webtoolkit.info/
*
**/
 
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function goto_hp(el)
{
	var url='';
	if(typeof(el)=='string')
	{
		url=el;
	}
	else
	{
		url=el.href
	}
	ToolTip.get('gotohp',this,false,'&_URL='+url);
}

function goto_hp_fbtw(el,enabled,hasval,elm)
{
	var url='';
	if(typeof(el)=='string')
	{
		url=el;
	}
	else
	{
		url=el.href
	}
	ToolTip.get('gotohp_fbtw',$(elm),false,'&_URL='+url+'&_EN='+enabled+'&_VAL='+hasval+'&_XID='+elm);
}


function idrev(sel,name)
{
	if(sel=='id')
	{
		window.open(PPATH+'settings/'+name+'.html', 'IDCARD', 'width=810,height=800,scrollbars=yes');
		location.href=location.href;
	}
	else
	{
		if($('CHANNEL') != null && $('LRURL').value != null)
		{
			location.href=PPATH+'cpop.html?CHANNEL='+escape($('CHANNEL').value)+'&RURL='+escape($('LRURL').value);
		}
		else
		{
			location.href=PPATH+'cpop.html?RURL=http://www.chatcity.de/';
		}
	}
}

function id_check_url(id,val)
{
	new ajax(PPATH+'ajax/profil_chg_url.html', {postBody:'DID='+id+'&VAL='+val,onComplete:function()
	{
		if(return_url._MO_PRO_STATUS=='OK')
		{
			//setInnerHTML('ww_akt_form_err_'+return_url._MO_PRO_DID,return_url._MO_PRO_ETXT);
			//wwPlugIn.flush('ww_akt_form_err_'+return_url._MO_PRO_DID,'#23982b');
			setInnerHTML('ww_akt_form_err_'+return_url._MO_PRO_DID,'');
			wwPlugIn.flush('ww_profil_upd_'+return_url._MO_PRO_DID,'#23982b');
		}
		if(return_url._MO_PRO_STATUS=='NO')
		{
			setInnerHTML('ww_akt_form_err_'+return_url._MO_PRO_DID,return_url._MO_PRO_ETXT);
			//setInnerHTML('ww_profil_upd_err',return_url._MO_PRO_ETXT);
			//wwPlugIn.flush('ww_akt_form_err_'+return_url._MO_PRO_DID,'#b73a18');
			wwPlugIn.flush('ww_profil_upd_'+return_url._MO_PRO_DID,'#b73a18');
		}
	},evalObj:'return_url'});
}

function show_bn(classname,ident)
{
	document.write("<a href='");
	document.write("&#x68;&#x74;&#x74;&#x70;&#x3A;&#x2F;&#x2F;&#x77;&#x77;&#x77;&#x2E;&#x65;&#x76;&#x65;&#x6E;&#x74;&#x31;&#x30;&#x31;&#x2E;&#x64;&#x65;&#x2F;&#x72;&#x65;&#x63;&#x68;&#x74;&#x65;&#x69;&#x6E;&#x68;&#x61;&#x62;&#x65;&#x72;&#x2E;&#x68;&#x74;&#x6D;&#x6C;?"+ident);
	document.write("' target='_blank' class='"+classname+"'>");
	document.write("&#66;&#105;&#108;&#100;&#110;&#97;&#99;&#104;&#119;&#101;&#105;&#115;&#101;");
	document.write("<\/a>");
}
