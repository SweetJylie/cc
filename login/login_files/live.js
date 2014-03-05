function livestats(obj,startvalue,showmode)
{
	var obj = obj;
	var showmode = showmode;
	var value = startvalue;
	var value_to = startvalue;
	var liveTimeout = false;

	function compare_data()
	{
		eval('value_to = '+obj+';');
		var speed = 50000;
		if (value_to == false) value_to = 0;
		if (value == false)
		{
			value = value_to;
			show_data(value);
			speed = 500;
		}
		else if (value < value_to)
		{
			value++;
			show_data(value);
			speed = get_speed(value_to,value);
		}
		else if (value > value_to)
		{
			value--;
			show_data(value);
			speed = get_speed(value,value_to);
		}
		else if (value == value_to)
		{
			speed = 5000;
		}
		liveTimeout = window.setTimeout( function () { compare_data() }, speed);
	}

	function show_data(value)
	{
		if (showmode == 'txt')
		{
			$(obj).innerHTML = value;
		}
		else if (showmode == 'img')
		{
			var valuestring = to_numberstring(value)+'';
			var tmp = '';
			for (var i=0; i<valuestring.length; i++)
			{
				if (valuestring.substr(i,1) == '.')
				{
					tmp += '<div class="n np"><\/div>';
				}
				else
				{
					tmp += '<div class="n n'+valuestring.substr(i,1)+'"><\/div>';
				}
			}
			tmp += '<div class="cl"><\/div>';
			$(obj).innerHTML = tmp;
		}
	}
	
	function get_speed(vala,valb)
	{
		var speed = 250;
		var val_diff = vala - valb;
		if (val_diff > 10  ) speed = 200;
		if (val_diff > 25  ) speed = 150;
		if (val_diff > 50  ) speed = 100;
		if (val_diff > 100  ) speed = 50;
		if (val_diff > 150  ) speed = 25;
		if (val_diff > 200  ) speed = 10;
		if (val_diff > 250  ) speed = 1;
		
		speed = parseInt(20000/(val_diff));
		if (speed == 0) speed = 250;
		return speed;
	}

	function to_numberstring(number)
	{
		var numberstring = (number%1000).toString();
		var x = parseInt(number/1000);
		while(x > 0)
		{
			numberstring = x%1000 + '.' + numberstring;
			x = parseInt(x/1000);
		}
		return numberstring;
	}

	compare_data();
}

function get_chat_data()
{
	t = document.createElement("script");
	t.src =  IPATH+"script/aw.js?r="+Math.random();
	t.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(t);
	var tmp = window.setTimeout( function () { chk_chat_data() }, 1000);
}

function chk_chat_data()
{
	var actual_user_tmp = 0;
	var tmp = 0;
	for (icha=0;icha<cha.length;icha+=3)
	{
		tmp = parseInt(cha[icha+1]);
		if (tmp > 0) actual_user_tmp += tmp;
	}
	actual_user = actual_user_tmp;
	
	if (typeof(show_channel_stats)!="undefined")
	{
		if (show_channel_stats == true)
		{
			var chnum = new  Array();
			for (iccg=0;iccg<ccg.length;iccg+=2)
			{
				chnum[ccg[iccg]] = 0;
				for (iccc=0;iccc<ccc.length;iccc+=4)
				{
					if (ccg[iccg] == ccc[(iccc+2)])
					{
						for (icha=0;icha<cha.length;icha+=3)
						{
							if (ccc[iccc] == cha[icha])
							{
								tmp = parseInt(cha[icha+1]);
								if (tmp > 0) chnum[ccg[iccg]] += tmp;
							}
						}
					}
				}
				eval('c_ol_'+ccg[iccg]+' = '+chnum[ccg[iccg]]+';');
				//console_alert(chnum[ccg[iccg]]);
			}
		}
	}
	else if (typeof(show_table_stats)!="undefined")
	{
		var tmptable = '';
		if (show_table_stats == true)
		{
			var iline = 0;
			for (iccg=0;iccg<ccg.length;iccg+=2)
			{
				iline = 0;
				tmptable += '<table border="0" cellpadding="0" cellspacing="0">';
				tmptable += '<thead><th width="20%" style="border-left:0px;">'+ccg[(iccg+1)]+'</th><th width="10%">Anzahl</th><th>Teilnehmer</th></thead>';
				tmptable += '<tbody>';
				for (iccc=0;iccc<ccc.length;iccc+=4)
				{
					if (ccg[iccg] == ccc[(iccc+2)])
					{
						for (icha=0;icha<cha.length;icha+=3)
						{
							if (ccc[iccc] == cha[icha])
							{
								tmptable += '<tr class="line'+iline+'" valign="top"><th>'+cha[icha]+'</th><td>'+cha[icha+1]+'</td><td>'+trim(cha[icha+2]).split(' ').join(', ')+'</td></tr>';
								if (iline == 0) iline = 1; else iline = 0;
							}
						}
					}
				}
				tmptable += '</tbody>';
				tmptable += '</table>';
				tmptable += '<div class="vspace"></div>';
				//console_alert(chnum[ccg[iccg]]);
			}
			setInnerHTML('live_table',tmptable);
		}
	}
}

var liveInterval = false;
addLoadEvent(
	function ()
	{
		window.setTimeout( function () { chk_chat_data(); }, 500);
		liveInterval = window.setInterval("get_chat_data()", 59000);
	}
);
