function Blend (call,div1,div2,size,num,li,left,right,elnum)
{
	this.bl_call= call;
	this.bl_div_1= div1;
	this.bl_div_2= div2;
	this.bl_size= size;
	this.bl_num= num;
	this.bl_elnum= elnum;
	this.bl_li= li;
	this.bl_left= left;
	this.bl_right= right;
	this.bl_body= 'OLI=';
	this.bl_div= '';
	this.bl_left_en= 'grafiken/arrows/arrow_left_enabled.gif';
	this.bl_left_dis= 'grafiken/arrows/arrow_left_disabled.gif';
	this.bl_right_en= 'grafiken/arrows/arrow_right_enabled.gif';
	this.bl_right_dis= 'grafiken/arrows/arrow_right_disabled.gif';
	this.bl_is_move= false;
	this.bl_is_pn= false;
	this.bl_duration= 500;
	this.bl_obj= '';
	this.bl_start= 0;
	var self = this;
	

	// init
	this.init = function(div)
	{
		var obj=this;
		self.bl_div=div;
		self.bl_obj=ww_blend(div,div,{duration:self.bl_duration,onComplete:self.blend_done});
		self.set_lr();
		if(self.bl_left!='')
		{
			setClick(self.bl_left,self.left);
		}
		if(self.bl_right!='')
		{
			setClick(self.bl_right,self.right);
		}
	};

	this.set_var = function (call,div1,div2,size,num,li,left,right)
	{
		self.bl_call=call;
		self.bl_div_1=div1;
		self.bl_div_2=div2;
		self.bl_size=size;
		self.bl_num=num;
		self.bl_li=li;
		self.bl_left=left;
		self.bl_right=right;
	};

	this.set_lr = function()
	{
		if(self.bl_right)
		{
			if(self.bl_start+self.bl_elnum < self.bl_num)
			{
				setSrc(self.bl_right,self.bl_right_en);
			}
			else
			{
				setSrc(self.bl_right,self.bl_right_dis);
			}
		}
		if(self.bl_left)
		{
			if(self.bl_start>0)
			{
				setSrc(self.bl_left,self.bl_left_en);
			}
			else
			{
				setSrc(self.bl_left,self.bl_left_dis);
			}
		}
	};

	this.blend_done = function(el)
	{
		if(el.stFrom==0)
		{
			// next ausgelöst
			// elemente von 4-7 in 0-3 kopieren
			// margin neu setzen
			setInnerHTML(self.bl_div_1,$(self.bl_div_2).innerHTML);
			el.style.marginLeft = '0px';
		}
		self.set_lr();
		self.bl_is_move=false;
	};

	this.load = function(num)
	{
		if(num != undefined)
		{
			self.bl_start=num;
		}
		if(self.bl_is_move==false && self.bl_start < self.bl_num)
		{
			var tl='';
			if(self.bl_is_pn==false)
			{
				for(i=0;i<self.bl_elnum;i++)
				{
					if(self.bl_start+i<self.bl_num)
					{
						tl+=self.bl_li[self.bl_start+i]+',';
					}
				}
			}
			else
			{
				tl=self.bl_start;
			}
			if(self.bl_call) new ajax(self.bl_call, {postBody:self.bl_body+tl,onComplete:function(transport)
			{
				setInnerHTML(self.bl_div_1,transport.responseText);
				self.set_lr();
			}});
		}
	};

	this.right = function()
	{
		if(self.bl_is_move==false && self.bl_start+self.bl_elnum < self.bl_num)
		{
			var tl='';
			self.bl_start+=self.bl_elnum;
			if(self.bl_is_pn==false)
			{
				for(i=0;i<self.bl_elnum;i++)
				{
					if(self.bl_start+i<self.bl_num)
					{
						tl+=self.bl_li[self.bl_start+i]+',';
					}
				}
			}
			else
			{
				tl=self.bl_start;
			}
			if(self.bl_call) new ajax(self.bl_call, {postBody:self.bl_body+tl,onComplete:function(transport)
			{
				// neue elemente in 4-7 einfügen
				setInnerHTML(self.bl_div_2,transport.responseText);
				self.bl_is_move=true;
				ww_blend_start(self.bl_obj,0,0-self.bl_size);
			}});
		}
	};

	this.left = function()
	{
		if(self.bl_is_move==false && self.bl_start>0)
		{
			var tl='';
			self.bl_start-=self.bl_elnum;
			if(self.bl_start<0) self.bl_start=0;
			if(self.bl_is_pn==false)
			{
				for(i=0;i<self.bl_elnum;i++)
				{
					if(self.bl_start+i>=0)
					{
						tl+=self.bl_li[self.bl_start+i]+',';
					}
				}
			}
			else
			{
				tl=self.bl_start;
			}
			if(self.bl_call) new ajax(self.bl_call, {postBody:self.bl_body+tl,onComplete:function(transport)
			{
				// elemente von 0-3 in 4-7 kopieren
				setInnerHTML(self.bl_div_2,$(self.bl_div_1).innerHTML);
				// margin neu setzen
				self.bl_is_move=true;
				self.bl_obj.style.marginLeft = '-'+self.bl_size+'px';
				setTimeout(function()
				{
					// elemente in 0-3 einfügen
					setInnerHTML(self.bl_div_1,transport.responseText);
					ww_blend_start(self.bl_obj,0-self.bl_size,0);
				},10);
			}});
		}
	};
}
