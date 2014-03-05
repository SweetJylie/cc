	// Definitions
	var wwbm_url = '/grafiken/basic/obj/public/';

	var wwbm_btns = new Array();
	wwbm_btns[1]	= new Array("Mister Wong", "mrwong.gif", "http://www.mister-wong.de/index.php?action=addurl&amp;bm_url={wwbmurlencode}&amp;bm_notice=&amp;bm_description={wwbmtitleencode}&amp;bm_tags=");
	wwbm_btns[2]	= new Array("Facebook", "facebook.gif", "http://www.facebook.com/sharer.php?u={wwbmurlencode}&amp;t={wwbmtitleencode}");
	wwbm_btns[3]	= new Array("Google", "google.gif", "http://www.google.com/bookmarks/mark?op=add&amp;hl=de&amp;bkmk={wwbmurlencode}&amp;annotation=&amp;labels=&amp;title={wwbmtitleencode}");
	wwbm_btns[4]	= new Array("Digg", "digg.gif", "http://digg.com/submit?phase=2&url={wwbmurlencode}");
	wwbm_btns[5]	= new Array("MySpace", "myspace.gif", "http://www.myspace.com/Modules/PostTo/Pages/?u={wwbmurlencode}&t={wwbmtitleencode}");
	wwbm_btns[6]	= new Array("Del.icio.us", "delicious.gif", "http://del.icio.us/post?v=2&url={wwbmurlencode}&title={wwbmtitleencode}");
	
	// Functions
	function wwbm_showbtn(mode,btnids)
	{
		if (mode == 'buttonbar')
		{
			if (btnids)
			{
				var wwbm_values = btnids.split(',');
				for (var i=0; i < wwbm_values.length; i++)
				{
						if (wwbm_values[i]) wwbm_addbtn(wwbm_values[i]);
				}
			}
		}
	}

	function wwbm_addbtn(btnid)
	{
		var wwbmurl = encodeURIComponent(location.href);
		var wwbmti = encodeURIComponent(document.title);
		
		var wwbmtmp = wwbm_btns[btnid][2];
		wwbmtmp = wwbmtmp.replace('{wwbmurlencode}',wwbmurl);
		wwbmtmp = wwbmtmp.replace('{wwbmtitleencode}',wwbmti);

		document.writeln('<a href="'+wwbmtmp+'" target="_blank" title="'+wwbm_btns[btnid][0]+'"><img src="'+wwbm_url+wwbm_btns[btnid][1]+'" border="0" /></a> ');	
	}
	
