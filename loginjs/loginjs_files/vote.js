
var VoteTool = Class.create();
VoteTool.prototype =
{
	idname: '',
	cname: '',
	elnum: 10,
	val: 0,
	isclick: false,
	onClick: '',

	// init
	initialize: function (idname,cname,elnum)
	{
		obj = this;
		this.el=true;
		this.cname=cname;
		this.idname=idname;
		this.elnum=elnum;
		for(i=0;i<this.elnum;i++)
		{
			setClick(this.idname+i,obj.click);
			$(this.idname+i).cobj=this;
		}
	},

	ch_col: function (el,inout)
	{
		if(this.isclick==false)
		{
			for(i=0;i<this.elnum;i++)
			{
				setClass(this.idname+i,this.cname);
			}
			if(inout==1)
			{
				var idn=parseInt(el.id.substring(this.idname.length));
				for(i=0;i<idn+1;i++)
				{
					setClass(this.idname+i,this.cname+i);
				}
			}
		}
	},

	click: function()
	{
		this.cobj.isclick=false;
		this.cobj.ch_col(this,1);
		this.cobj.isclick=true;
		this.cobj.val=parseInt(this.id.substring(this.cobj.idname.length))+1;
		if(this.cobj.onClick)
		{
			this.cobj.onClick(this.cobj.val);
		}
	},

	set: function(val)
	{
		if(val>0)
		{
			this.isclick=false;
			this.ch_col($(this.idname+(val-1)),1);
			this.isclick=true;
		}
		else
		{
			this.isclick=false;
			for(i=0;i<this.elnum;i++)
			{
				setClass(this.idname+i,this.cname);
			}
		}
		this.val=val;
		if(this.onClick)
		{
			this.onClick(val);
		}
	}
}
