/* FWDMLPSimpleSizeButton */
(function (window){
var FWDMLPSimpleSizeButton = function(
		nImg_img, 
		sImgPath,
		buttonWidth,
		buttonHeight){
		
		var self = this;
		var prototype = FWDMLPSimpleSizeButton.prototype;
		
		this.nImg_img = nImg_img;
		
		this.n_do;
		this.s_do;
	
		this.sImgPath_str = sImgPath;
		
		this.buttonWidth = self.nImg_img.width;
		this.buttonHeight = self.nImg_img.height;
		
		this.isMobile_bl = FWDMLPUtils.isMobile;
		this.hasPointerEvent_bl = FWDMLPUtils.hasPointerEvent;
		this.isDisabled_bl = false;
		
		
		//##########################################//
		/* initialize this */
		//##########################################//
		this.init = function(){
			self.setupMainContainers();
			self.setWidth(self.buttonWidth);
			self.setHeight(self.buttonHeight);
			self.setButtonMode(true);
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			
			self.n_do = new FWDMLPDisplayObject("img");	
			var nImg_img = new Image();
			nImg_img.src = self.nImg_img.src;
			self.n_do.setScreen(nImg_img);
			self.n_do.setWidth(self.buttonWidth);
			self.n_do.setHeight(self.buttonHeight);
			
			self.s_do = new FWDMLPDisplayObject("img");	
			var sImg_img = new Image();
			sImg_img.src = self.sImgPath_str;
			self.s_do.setScreen(sImg_img);
			self.s_do.setWidth(self.buttonWidth);
			self.s_do.setHeight(self.buttonHeight);
			
			self.addChild(self.s_do);
			self.addChild(self.n_do);
			
			self.screen.onmouseover = self.onMouseOver;
			self.screen.onmouseout = self.onMouseOut;
			self.screen.onclick = self.onClick;
			
		};
		
		this.onMouseOver = function(e){
			FWDMLPTweenMax.to(self.n_do, .9, {alpha:0, ease:Expo.easeOut});
		};
			
		this.onMouseOut = function(e){
			FWDMLPTweenMax.to(self.n_do, .9, {alpha:1, ease:Expo.easeOut});	
		};
			
		this.onClick = function(e){
			self.dispatchEvent(FWDMLPSimpleSizeButton.CLICK);
		};
		
			//########################################//
		/* destroy */
		//########################################//
		this.destroy = function(){
			
			if(self.n_do){
				FWDMLPTweenMax.killTweensOf(self.n_do);
				self.n_do.destroy();
				self.s_do.destroy();
			}
			
			self.n_do = null;
			self.s_do = null;
			
			self = null;
			prototype = null;
			FWDMLPSimpleSizeButton.prototype = null;
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDMLPSimpleSizeButton.setPrototype = function(){
		FWDMLPSimpleSizeButton.prototype = null;
		FWDMLPSimpleSizeButton.prototype = new FWDMLPDisplayObject("div", "relative");
	};
	
	FWDMLPSimpleSizeButton.CLICK = "onClick";
	
	FWDMLPSimpleSizeButton.prototype = null;
	window.FWDMLPSimpleSizeButton = FWDMLPSimpleSizeButton;
}(window));