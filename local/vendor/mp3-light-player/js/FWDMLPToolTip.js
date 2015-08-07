/* FWDMLPToolTip */
(function (window){
var FWDMLPToolTip = function(
			buttonRef_do,
			bkPath_str,
			pointerPath_str,
			toopTipPointerUp_str,
			toolTipLabel_str,
			fontColor_str,
			toolTipsButtonsHideDelay
		){
		
		var self = this;
		var prototype = FWDMLPToolTip.prototype;
		
		this.buttonRef_do = buttonRef_do;
		
		this.bkPath_str = bkPath_str;
		this.pointerPath_str = pointerPath_str;
		
		this.text_do = null;
		this.pointer_do = null;
		this.pointerUp_do = null;
	
		this.fontColor_str = fontColor_str;
		this.toolTipLabel_str = toolTipLabel_str;
		this.toopTipPointerUp_str = toopTipPointerUp_str;
	
		
		this.toolTipsButtonsHideDelay = toolTipsButtonsHideDelay * 1000;
		this.pointerWidth = 7;
		this.pointerHeight = 4;
		
		this.showWithDelayId_to;
		
		this.isMobile_bl = FWDMLPUtils.isMobile;
		this.isShowed_bl = true;
	
		//##########################################//
		/* initialize self */
		//##########################################//
		this.init = function(){
			self.setOverflow("visible");
			
			self.setupMainContainers();
			self.setLabel(self.toolTipLabel_str);
			self.hide();
			self.getStyle().background = "url('" + self.bkPath_str + "')";
			self.getStyle().zIndex = 9999999999;
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			self.text_do = new FWDMLPDisplayObject("div");
			self.text_do.hasTransform3d_bl = false;
			self.text_do.hasTransform2d_bl = false;
			self.text_do.setBackfaceVisibility();
			self.text_do.setDisplay("inline");
			self.text_do.getStyle().fontFamily = "Arial";
			self.text_do.getStyle().fontSize= "12px";
			self.text_do.getStyle().color = self.fontColor_str;
			self.text_do.getStyle().whiteSpace= "nowrap";
			self.text_do.getStyle().fontSmoothing = "antialiased";
			self.text_do.getStyle().webkitFontSmoothing = "antialiased";
			self.text_do.getStyle().textRendering = "optimizeLegibility";
			self.text_do.getStyle().padding = "6px";
			self.text_do.getStyle().paddingTop = "4px";
			self.text_do.getStyle().paddingBottom = "4px";
			self.setLabel();
			self.addChild(self.text_do);
			
			var pointer_img = new Image();
			pointer_img.src = self.pointerPath_str;
			self.pointer_do = new FWDMLPDisplayObject("img");
			self.pointer_do.setScreen(pointer_img);
			self.pointer_do.setWidth(self.pointerWidth);
			self.pointer_do.setHeight(self.pointerHeight);
			self.addChild(self.pointer_do);
			
			var pointerUp_img = new Image();
			pointerUp_img.src = self.toopTipPointerUp_str;
			self.pointerUp_do = new FWDMLPDisplayObject("img");
			self.pointerUp_do.setScreen(pointerUp_img);
			self.pointerUp_do.setWidth(self.pointerWidth);
			self.pointerUp_do.setHeight(self.pointerHeight);
			self.addChild(self.pointerUp_do);
		};
		
		//##########################################//
		/* set label */
		//##########################################//
		this.setLabel = function(label){
			self.text_do.setInnerHTML(toolTipLabel_str);
			setTimeout(function(){
				if(self == null) return;
					self.setWidth(self.text_do.getWidth());
					self.setHeight(self.text_do.getHeight());
					self.positionPointer();
				},50);
		};
		
		this.positionPointer = function(offsetX, showPointerUp){
			var finalX;
			var finalY;
			
			if(!offsetX) offsetX = 0;
			
			finalX = parseInt((self.w - self.pointerWidth)/2) + offsetX;
			
			if(showPointerUp){
				finalY =-3;
				self.pointerUp_do.setX(finalX);
				self.pointerUp_do.setY(finalY);
				self.pointer_do.setX(0);
				self.pointer_do.setY(0);
			}else{
				finalY = self.h;
				self.pointer_do.setX(finalX);
				self.pointer_do.setY(finalY);
				self.pointerUp_do.setX(0);
				self.pointerUp_do.setY(0);
			}
		};
		
		//##########################################//
		/* show / hide*/
		//##########################################//
		this.show = function(){
			if(self.isShowed_bl) return;
			self.isShowed_bl = true;
			
			FWDMLPTweenMax.killTweensOf(self);
			clearTimeout(self.showWithDelayId_to);
			self.showWithDelayId_to = setTimeout(self.showFinal, self.toolTipsButtonsHideDelay);
			if(window.addEventListener){
				window.addEventListener("mousemove", self.moveHandler);
			}else if(document.attachEvent){
				document.detachEvent("onmousemove", self.moveHandler);
				document.attachEvent("onmousemove", self.moveHandler);
			}
		};
		
		this.showFinal = function(){
			self.setVisible(true);
			self.setAlpha(0);
			FWDMLPTweenMax.to(self, .4, {alpha:1, onComplete:function(){self.setVisible(true);}, ease:Quart.easeOut});
		};
		
		this.moveHandler = function(e){
			var wc = FWDMLPUtils.getViewportMouseCoordinates(e);	
			if(!FWDMLPUtils.hitTest(self.buttonRef_do.screen, wc.screenX, wc.screenY)) self.hide();
		};
		
		this.hide = function(){
			if(!self.isShowed_bl) return;
			clearTimeout(self.showWithDelayId_to);
			if(window.removeEventListener){
				window.removeEventListener("mousemove", self.moveHandler);
			}else if(document.detachEvent){
				document.detachEvent("onmousemove", self.moveHandler);
			}
			FWDMLPTweenMax.killTweensOf(self);
			self.setVisible(false);
			self.isShowed_bl = false;
		};
		
	
		this.init();
	};
	
	/* set prototype */
	FWDMLPToolTip.setPrototype = function(){
		FWDMLPToolTip.prototype = null;
		FWDMLPToolTip.prototype = new FWDMLPDisplayObject("div", "fixed");
	};
	
	FWDMLPToolTip.CLICK = "onClick";
	FWDMLPToolTip.MOUSE_DOWN = "onMouseDown";
	
	FWDMLPToolTip.prototype = null;
	window.FWDMLPToolTip = FWDMLPToolTip;
}(window));