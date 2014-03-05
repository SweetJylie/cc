var return_vote_obj;
//function vote_objekt(transport)
//{
//	if(return_vote_obj._MO_VOTE_OK==1)
//	{
//		wwPlugIn.onFlushComplete=function(){
//			setInnerHTML('vote_num',return_vote_obj._MO_VOTE_VN);
//			setInnerHTML('vote_val',(return_vote_obj._MO_VOTE_VV/10));
//			setInnerHTML('vote_link','Du hast bereits abgestimmt');
//			wwPlugIn.onFlushComplete='';
//			wwPlugIn.hide();
//		};
//		wwPlugIn.flush('vote_flush','#23982b');
//		return;
//	}
//	wwPlugIn.flush('vote_flush','#b73a18')
//}

function vote_objekt(transport)
	{
		
		if(return_vote_obj._MO_VOTE_OK==1)
		{
			
			wwPlugIn.onFlushComplete=function(){
				wwPlugIn.onFlushComplete='';
				wwPlugIn.onOffComplete=function()
				{
					location.href=location.href;
				};
				wwPlugIn.hide();
			};
			wwPlugIn.flush('vote_flush','#23982b');
			return;
		}
		wwPlugIn.flush('vote_flush','#b73a18')	
		
		
	}

function test_vote_obj(val,xid,obj)
{
	if(val>=0)
	{
		new ajax(PPATH+'ajax/vote_objekt.html', {postBody:'OTYP='+obj+'&XID='+xid+'&VAL='+val,onComplete:vote_objekt,evalObj:'return_vote_obj'});
	}
	else
	{
		wwPlugIn.flush('vote_flush','#b73a18')
	}
}

var return_com_obj;
function com_objekt(transport)
{
	if(return_com_obj._MO_COM_STATUS=='_ET_COM_OK')
	{
		setInnerHTML('com_err','');
		wwPlugIn.onFlushComplete=function(){
			wwPlugIn.onFlushComplete='';
			wwPlugIn.onOffComplete=function()
			{
				location.href=location.href;
			};
			wwPlugIn.hide();
		};
		wwPlugIn.flush('com_flush','#23982b');
		return;
	}
	setInnerHTML('com_err',return_com_obj._MO_COM_ETXT)
	wwPlugIn.flush('com_flush','#b73a18')
}

function test_com_obj(val,xid,obj)
{
	if(val!='')
	{
		new ajax(PPATH+'ajax/com_add.html', {postBody:'OTYP='+obj+'&XID='+xid+'&MSG='+URLEncode(val),onComplete:com_objekt,evalObj:'return_com_obj'});
	}
	else
	{
		wwPlugIn.flush('com_flush','#b73a18')
	}
}

function testm_com_obj(val,cid)
{
	if(val!='')
	{
		new ajax(PPATH+'ajax/com_mod.html', {postBody:'CID='+cid+'&MSG='+URLEncode(val),onComplete:com_objekt,evalObj:'return_com_obj'});
	}
	else
	{
		wwPlugIn.flush('com_flush','#b73a18')
	}
}

var myAgent   = navigator.userAgent.toLowerCase();
var myVersion = parseInt(navigator.appVersion);
var is_ie   = ((myAgent.indexOf("msie") != -1)  && (myAgent.indexOf("opera") == -1));
var is_win   =  ((myAgent.indexOf("win")!=-1) || (myAgent.indexOf("16bit")!=-1));
var temp_range=null;

function textCounter(field, countfield, maxlimit)
{
	if (field.value.length > maxlimit)
		field.value = field.value.substring(0, maxlimit);
	else 
		countfield.value = maxlimit - field.value.length;
}

function tempSelec(theForm){
  theForm.focus();
  /* für Internet Explorer */
  if(typeof document.selection != 'undefined') {
    temp_range = document.selection.createRange();
    temp_range.select();
  }
}

function setSelec(theForm){
  if(navigator.appName!="Netscape" && temp_range) {
    temp_range.select();
  }
}

// function addText(theTag, theClsTag, theForm)
// {
// 	var message = theForm;
// 	var set=false;
// 	var old=false;
// 	var selected="";
// 
// 	if(navigator.appName=="Netscape" &&  message.textLength>=0 ) 
// 	{ // mozilla, firebird, netscape
// 		if(theClsTag!="" && message.selectionStart!=message.selectionEnd) 
// 		{
// 			selected=message.value.substring(message.selectionStart,message.selectionEnd);
// 			str=theTag + selected+ theClsTag;
// 			old=true;
// 		}
// 		else 
// 		{
// 			str=theTag;
// 			if(theClsTag != "")
// 			{
// 				str += theClsTag;
// 			}
// 		}
// 
// 		message.focus();
// 		start=message.selectionStart;
// 		end=message.textLength;
// 		endtext=message.value.substring(message.selectionEnd,end);
// 		starttext=message.value.substring(0,start);
// 		message.value=starttext + str + endtext;
// 		message.selectionStart=start;
// 		message.selectionEnd=start;
// 
// 		message.selectionStart = message.selectionStart + str.length;
// 
// 		if(old) 
// 		{
// 			return false;
// 		}
// 
// 		set=true;
// 	}
// 	if ( (myVersion >= 4) && is_ie && is_win) 
// 	{  // Internet Explorer
// 		if(message.isTextEdit) 
// 		{
// 			message.focus();
// 			var sel = document.selection;
// 			var rng = sel.createRange();
// 			rng.colapse;
// 			if((sel.type == "Text" || sel.type == "None") && rng != null)
// 			{
// 				if(theClsTag != "" )
// 				{
// 					if(rng.text.length > 0)
// 					{
// 						theTag += rng.text + theClsTag;
// 					}
// 					else
// 					{
// 						theTag += " "+theClsTag;
// 					}
// 				}
// 				rng.text = theTag;
// 			}
// 		}
// 		else
// 		{
// 			if(!set) 
// 			{
// 				message.value += theTag;
// 				if(theClsTag != "")
// 				{
// 					message.value += theClsTag;
// 				}
// 			}
// 		}
// 	}
// 	else
// 	{
// 		if(!set)
// 		{
// 			message.value += theTag;
// 			if(theClsTag != "")
// 			{
// 				message.value += theClsTag;
// 			}
// 		}
// 	}
// 
// 	message.focus();
// }	

function addText(theTag, theClsTag, theForm)
{
	var message = theForm;
	var set=false;
	var old=false;
	var selected="";
	var safari=false;
	if(navigator.appName=="Netscape" || navigator.appName=="Opera" &&  message.textLength>=0 ) 
	{ // mozilla, firebird, netscape, Opera Fehlerbeiseitigung 9.50
		if(theClsTag!="" && message.selectionStart!=message.selectionEnd) 
		{
			selected=message.value.substring(message.selectionStart,message.selectionEnd);
			str=theTag + selected+ theClsTag;
			old=true;
		}
		else 
		{
			str=theTag;
			if(theClsTag != "")
			{
				str += theClsTag;
			}
		}
		if(myAgent.indexOf("safari/") != -1) { var safari=true;}
		if(safari==true)
		{

		}
		message.focus();
		start=message.selectionStart;
		end=message.textLength;
		endtext=message.value.substring(message.selectionEnd,end);
		starttext=message.value.substring(0,start);
		message.value=starttext + str + endtext;
		message.selectionStart=start;
		message.selectionEnd=start;

		message.selectionStart = message.selectionStart + str.length;

		if(old) 
		{
			return false;
		}

		set=true;
	}
	if ( (myVersion >= 4) && is_ie && is_win) 
	{  // Internet Explorer
		if(message.isTextEdit) 
		{
			message.focus();
			var sel = document.selection;
			var rng = sel.createRange();
			rng.colapse;
			if((sel.type == "Text" || sel.type == "None") && rng != null)
			{
				if(theClsTag != "" )
				{
					if(rng.text.length > 0)
					{
						theTag += rng.text + theClsTag;
					}
					else
					{
						theTag += " "+theClsTag;
					}
				}
				rng.text = theTag;
			}
		}
		else
		{
			if(!set) 
			{
				message.value += theTag;
				if(theClsTag != "")
				{
					message.value += theClsTag;
				}
			}
		}
	}
	else
	{
		if(!set)
		{
			message.value += theTag;
			if(theClsTag != "")
			{
				message.value += theClsTag;
			}
		}
	}

	message.focus();
}


function getSelectedText(theForm)
{
	var message = theForm;
	var selected = '';
	
	if(navigator.appName=="Netscape" &&  message.textLength>=0 && message.selectionStart!=message.selectionEnd )
	{
		selected=message.value.substring(message.selectionStart,message.selectionEnd);
	}
	else if( (myVersion >= 4) && is_ie && is_win )
	{
		if(message.isTextEdit)
		{ 
			message.focus();
			var sel = document.selection;
			var rng = sel.createRange();
			rng.colapse;

			if((sel.type == "Text" || sel.type == "None") && rng != null)
			{
				if(rng.text.length > 0) selected = rng.text;
			}
		}	
	}
	return selected;
}

var taglObj;

function del_tag(el)
{
	new ajax(PPATH+'ajax/tag_tmpdel.html', {postBody: 'TID='+el.id.substr(3), onComplete:set_tagl, evalObj:'taglObj'});
}

function set_tagl(el)
{
	$('taginput').value='';

	var tl='';
	for ( i=0; i<taglObj._MO_TAG_TNUM;i++ )
	{
		tl=tl+taglObj._MO_TAG_TAG[i]+'<span id=\"tid'+taglObj._MO_TAG_TID[i]+'\" class=\"mod_del\" title=\"löschen\">&nbsp;</span>&nbsp ';
	}
	if(taglObj._MO_TAG_TNUM >=10)
	{
		hide('newtag');
	}
	else
	{
		show('newtag');
		$('taginput').focus();
	}
	setInnerHTML('ttagl',tl);
	ww_set_click('mod_del',function()
	{
		del_tag(this);
	});
}

function get_tagl()
{
	var tl='';
	if(taglObj && taglObj._MO_TAG_TNUM)
	{
		for ( i=0; i<taglObj._MO_TAG_TNUM;i++ )
		{
			tl=tl+'<a href="#">'+taglObj._MO_TAG_TAG[i]+'</a>&nbsp;&nbsp;|&nbsp;&nbsp;';
		}
	}
	return tl;
}

function add_tag(tag)
{
	new ajax(PPATH+'ajax/tag_tmpadd.html', {postBody: 'TNAME='+URLEncode(tag), onComplete:set_tagl, evalObj:'taglObj'});
}

function reload_page()
{
	window.location.href=window.location.href;
}

function add_titletag (inp)
{
	results = inp.split(' ');
	for(i=0;i<results.length;i++)
	{
     do_titletag(results[i]);
	}

}
function do_titletag(thetag)
{
	if(taglObj && taglObj._MO_TAG_TNUM)
	{
		if (taglObj._MO_TAG_TNUM <10)
		{
		    new ajax(PPATH+'ajax/tag_tmpadd.html', {postBody: 'TNAME='+URLEncode(thetag), onComplete:set_tagl, evalObj:'taglObj'});
		    wwPlugIn.flush('tagflash','#23982b');
		}
	}
	else
	{
        new ajax(PPATH+'ajax/tag_tmpadd.html', {postBody: 'TNAME='+URLEncode(thetag), onComplete:set_tagl, evalObj:'taglObj'});
        wwPlugIn.flush('tagflash','#23982b');
	}
}

function add_gbook(val,xid,obj)
{
	if(val!='')
	{
		new ajax(PPATH+'ajax/gb_add.html', {postBody:'OTYP='+obj+'&XID='+xid+'&MSG='+URLEncode(val),onComplete:com_objekt,evalObj:'return_com_obj'});
	}
	else
	{
		wwPlugIn.flush('com_flush','#b73a18')
	}
}

function del_gb(gb_id,xid,typ)
{
	//alert('Lösche id: '+gb_id+' mit der XID= '+xid+' Vom Typ: '+typ);
	new ajax(PPATH+'ajax/gb_del.html', {postBody:'ID='+gb_id+'&XID='+xid+'&TYP='+typ,onComplete:gb_flush(gb_id,'1')});
}

function edit_gb(msg,xid,typ,gb_id)
{
	//alert('MSG: '+msg+' XID= '+xid+' TYP= '+typ);
	new ajax(PPATH+'ajax/gb_edit.html', {postBody:'XID='+xid+'&TYP='+typ+'&MSG='+URLEncode(msg)+'&GB_ID='+gb_id,onComplete:gb_flush(gb_id,'2')});
}

function gb_flush(gb_id,x)
{
	if(x==2)
	{
		wwPlugIn.flush('id2_'+gb_id,'#23982b');
		wwPlugIn.onFlushComplete=function(){
		wwPlugIn.onFlushComplete='';
		wwPlugIn.onOffComplete=function()
		{
			location.href=location.href;
		};
		wwPlugIn.hide();
		location.href=location.href;
		};
	}
	if(x==1)
	{
		wwPlugIn.flush('id_'+gb_id,'#23982b');
		wwPlugIn.onFlushComplete=function(){
		wwPlugIn.onFlushComplete='';
		wwPlugIn.onOffComplete=function()
		{
			location.href=location.href;
		};
		wwPlugIn.hide();
		location.href=location.href;
		};
	}
}






