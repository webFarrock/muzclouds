/* Thumb */
(function (window){
	
	var FWDMLPPreloader = function(
			imageSource_img, 
			segmentWidth, 
			segmentHeight, 
			totalSegments, 
			animDelay,
			skipFirstFrame){
		
		var self  = this;
		var prototype = FWDMLPPreloader.prototype;
		
		this.imageSource_img = imageSource_img;
		this.image_sdo = null;
		
		this.segmentWidth = segmentWidth;
		this.segmentHeight = segmentHeight;
		this.totalSegments = totalSegments;
		this.animDelay = animDelay || 300;
		this.count = 0;
		
		this.delayTimerId_int;
		this.isShowed_bl = false;
		this.skipFirstFrame_bl = skipFirstFrame;
		
		//###################################//
		/* init */
		//###################################//
		this.init = function(){
			self.getStyle().zIndex = 1;
			self.setWidth(self.segmentWidth);
			self.setHeight(self.segmentHeight);
		
			self.image_sdo = new FWDMLPDisplayObject("img");
			self.image_sdo.setScreen(self.imageSource_img);
			self.image_sdo.hasTransform3d_bl = false;
			self.image_sdo.hasTransform2d_bl = false;
			self.addChild(this.image_sdo);
			
			self.hide(false);
		};
		
		//###################################//
		/* start / stop preloader animation */
		//###################################//
		this.start = function(){
			if(self == null) return;
			clearInterval(self.delayTimerId_int);
			self.delayTimerId_int = setInterval(self.updatePreloader, self.animDelay);
		};
		
		this.stop = function(){
			clearInterval(self.delayTimerId_int);
			self.image_sdo.setX(0);
		};
		
		this.updatePreloader = function(){
			if(self == null) return;
			self.count++;
			if(self.count > self.totalSegments - 1){
				if(self.skipFirstFrame_bl){
					self.count = 1;
				}else{
					self.count = 0;
				}	
			}
			
			var posX = self.count * self.segmentWidth;
			self.image_sdo.setX(-posX);
		};
		
		
		//###################################//
		/* show / hide preloader animation */
		//###################################//
		this.show = function(){
			this.setVisible(true);
			this.start();
			FWDMLPTweenMax.killTweensOf(this);
			FWDMLPTweenMax.to(this, 1, {alpha:1});
			this.isShowed_bl = true;
		};
		
		this.hide = function(animate){
			if(!this.isShowed_bl) return;
			FWDMLPTweenMax.killTweensOf(this);
			if(animate){
				FWDMLPTweenMax.to(this, 1, {alpha:0, onComplete:this.onHideComplete});
			}else{
				this.setVisible(false);
				this.setAlpha(0);
			}
			this.isShowed_bl = false;
		};
		
		this.onHideComplete = function(){
			self.stop();
			self.setVisible(false);
			self.dispatchEvent(FWDMLPPreloader.HIDE_COMPLETE);
		};

		this.init();
	};
	
	/* set prototype */
    FWDMLPPreloader.setPrototype = function(){
    	FWDMLPPreloader.prototype = new FWDMLPDisplayObject("div");
    };
    
    FWDMLPPreloader.HIDE_COMPLETE = "hideComplete";
    
    FWDMLPPreloader.prototype = null;
	window.FWDMLPPreloader = FWDMLPPreloader;
}(window));