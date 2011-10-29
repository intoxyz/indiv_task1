function GoodsScroll() {
	this.Name = "GScroll";
	this.GoodsName = "Goods_Scroll";
	this.Speed = 70;
	this.GoodsSetTime = null;
	
	this.LiBox_Num = 4;
	this.LiBox_HiddenNum = 5;
	
	this.GoodsSetting();
	this.DivSize();
	this.GoodlsArrange();
	
	this.doMove = function(state) {
		this.sState = state;
		if(this.sState == "next") {
			this._nextFrame();
		} else if(this.sState == "prev") {
			this._prevFrame();
		}
	}
}

GoodsScroll.prototype.GoodsSetting = function() {
	this.GoodsBox = document.getElementById(this.GoodsName);
	this.OlBox = this.GoodsBox.getElementsByTagName("ol")[0];
	this.LiBox = this.OlBox.getElementsByTagName("li");
	this.LiBox_Length = this.LiBox.length;
	this.LiBox_Width = this.LiBox.item(0).offsetWidth;
	this.LiBox_Left = new Array();
}

GoodsScroll.prototype.DivSize = function() {
	this.DivBox = this.LiBox.item(0).getElementsByTagName("div");
	this.DivBox_Height = 0;
	for ( var i=0; i < this.DivBox.length; i++ ) {
		this.DivBox_Height = this.DivBox_Height + this.DivBox.item(i).offsetHeight;
	}
	this.GoodsBox.style.height = this.DivBox_Height + 20 + "px";
	this.GoodsBox.style.width = this.LiBox_Width * this.LiBox_HiddenNum +"px";
}

GoodsScroll.prototype.GoodlsArrange = function() {
	this.Default_left = -(this.LiBox_Num * this.LiBox_Width);
	
	for ( var i=0; i < this.LiBox_Length; i++ ) {
		this.LiBox_Left[i] = this.Default_left + ( i * this.LiBox_Width );
		this.LiBox.item(i).style.left = this.LiBox_Left[i] + "px";
	}
	
	this.Last_Left = this.LiBox_Left[this.LiBox_Length-1];
}

GoodsScroll.prototype._nextFrame = function() {
	for ( var i=0; i<this.LiBox_Length; i++ ) {
		this.LiBox_Left[i] = this.LiBox_Left[i] - this.Speed;
		if ( this.LiBox_Left[i] == ( this.Default_left - this.LiBox_Width ) ) {
			this.LiBox_Left[i] = ( ( this.LiBox_Length - 1 ) * this.LiBox_Width ) + this.Default_left;
			this.LiBox[i].style.left = this.LiBox_Left[i] + "px"
		} else {
			this.LiBox[i].style.left = this.LiBox_Left[i]+"px";
		}
	}
	if ( this.LiBox_Left[0] % ( this.LiBox_Width * this.LiBox_Num ) == 0 ) {
//		this.GoodsSetTime = setTimeout(this.Name + "._nextFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.Name + "._nextFrame()",100);
	}
}

GoodsScroll.prototype._prevFrame = function() {
	for ( var i=0; i<this.LiBox_Length; i++ ) {
		this.LiBox_Left[i] = this.LiBox_Left[i] + this.Speed;
		if ( this.LiBox_Left[i] == this.Last_Left + this.LiBox_Width ) {
			this.LiBox_Left[i] = this.Default_left;
			this.LiBox[i].style.left = this.LiBox_Left[i] + "px"
		} else {
			this.LiBox[i].style.left = this.LiBox_Left[i]+"px";
		}
	}
	if ( this.LiBox_Left[0] % ( this.LiBox_Width * this.LiBox_Num ) == 0 ) {
//		this.GoodsSetTime = setTimeout(this.Name + "._prevFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.Name + "._prevFrame()",100);
	}
}

GoodsScroll.prototype._nextBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.Name + "._nextFrame()",100);
}
GoodsScroll.prototype._prevBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.Name + "._prevFrame()",100);
}

