function lightbox_confirm(ti,msg,yesfunc,yes,nofunc,no)
{
	ToolTip.get('lightbox_confirm',this,false,'&_TITLE='+escape(ti)+'&_MSG='+escape(msg)+'&_ACTIONYESFUNC='+escape(yesfunc)+'&_ACTIONYES='+escape(yes)+'&_ACTIONNOFUNC='+escape(nofunc)+'&_ACTIONNO='+escape(no));
}

function lightbox_waiting()
{
	ToolTip.get('lightbox_waiting',this,false,'');
}
