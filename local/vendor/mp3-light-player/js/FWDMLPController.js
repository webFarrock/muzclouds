/* FWDRVPController */
(function(){
var FWDRVPController = function(
			data,
			parent
		){
		
		var self = this;
		var prototype = FWDRVPController.prototype;
		
		this.bk_img = data.bk_img;
		this.thumbnail_img = data.thumbnail_img;
		this.separator1_img = data.separator1_img;
		this.separator2_img = data.separator2_img;
		this.prevN_img = data.prevN_img;
		this.prevS_img = data.prevS_img;
		this.playN_img = data.playN_img;
		this.playS_img = data.playS_img;
		this.pauseN_img = data.pauseN_img;
		this.pauseS_img = data.pauseS_img;
		this.nextN_img = data.nextN_img;
		this.nextS_img = data.nextS_img;
		this.mainScrubberBkLeft_img = data.mainScrubberBkLeft_img;
		this.mainScrubberBkRight_img = data.mainScrubberBkRight_img;
		this.mainScrubberDragLeft_img = data.mainScrubberDragLeft_img;
		this.mainScrubberLine_img = data.mainScrubberLine_img;
		this.mainScrubberLeftProgress_img = data.mainScrubberLeftProgress_img;
		this.volumeScrubberBkLeft_img = data.volumeScrubberBkLeft_img;
		this.volumeScrubberBkRight_img = data.volumeScrubberBkRight_img;
		this.volumeScrubberDragLeft_img = data.volumeScrubberDragLeft_img;
		this.volumeScrubberLine_img = data.volumeScrubberLine_img;
		this.volumeN_img = data.volumeN_img;
		this.thumb_img = null;
		this.titleBarLeft_img = data.titleBarLeft_img;
		this.titleBarRigth_img = data.titleBarRigth_img;
		
		this.categoriesN_img = data.categoriesN_img;
		this.replayN_img = data.replayN_img;
		this.playlistN_img = data.playlistN_img;
		this.shuffleN_img = data.shuffleN_img;
		this.downloaderN_img = data.downloaderN_img;
		this.facebookN_img = data.facebookN_img;
		this.popupN_img = data.popupN_img;
		this.controllerBk_img = data.controllerBk_img;
		
		this.titlebarAnimBkPath_img = data.titlebarAnimBkPath_img;
		this.titlebarLeftPath_img = data.titlebarLeftPath_img;
		this.titlebarRightPath_img = data.titlebarRightPath_img;
		this.soundAnimationPath_img = data.soundAnimationPath_img;
		
		this.buttons_ar = [];
		
		this.thumb_do = null;
		this.disable_do = null;
		this.mainHolder_do = null;
		this.firstSeparator_do = null;
		this.secondSeparator_do = null;
		this.prevButton_do = null;
		this.playPauseButton_do = null;
		this.mainTitlebar_do = null;
		this.animationBackground_do = null;
		this.titleBarGradLeft_do = null;
		this.titlebarGradRight_do = null;
		this.titleBarLeft_do = null;
		this.titleBarRIght_do = null;
		this.animation_do = null;
		this.mainScrubber_do = null;
		this.mainScrubberBkLeft_do = null;
		this.mainScrubberBkMiddle_do = null;
		this.mainScrubberBkRight_do = null;
		this.mainScrubberDrag_do = null;
		this.mainScrubberDragLeft_do = null;
		this.mainScrubberDragMiddle_do = null;
		this.mainScrubberBarLine_do = null;
		this.mainProgress_do = null;
		this.progressLeft_do = null;
		this.progressMiddle_do = null;
		this.currentTime_do = null;
		this.totalTime_do = null;
		this.mainVolumeHolder_do = null;
		this.volumeButton_do = null;
		this.volumeScrubber_do = null;
		this.volumeScrubberBkLeft_do = null;
		this.volumeScrubberBkMiddle_do = null;
		this.volumeScrubberBkRight_do = null;
		this.volumeScrubberDrag_do = null;
		this.volumeScrubberDragLeft_do = null;
		this.volumeScrubberDragMiddle_do = null;
		this.volumeScrubberBarLine_do = null;
		this.categoriesButton_do = null;
		this.playlistButton_do = null;
		this.loopButton_do = null;
		this.shuffleButton_do = null;
		this.downloadButton_do = null;
		this.facebookButton_do = null;
		this.simpleText_do = null;
		this.animText1_do = null;
		this.animText2_do = null;
		
		this.prevButtonToolTip_do = null;
		this.playPauseToolTip_do = null;
		this.nextButtonToolTip_do = null;
		this.playlistsButtonToolTip_do = null;
		this.playlistButtonToolTip_do = null;
		this.loopButtonToolTip_do = null;
		this.shuffleButtonToolTip_do = null;
		this.facebookButtonToolTip_do = null;
		this.downloadButtonToolTip_do = null;
		this.populButtonToolTip_do = null;
		this.volumeButtonToolTip_do = null;
		
		this.controllerBkPath_str = data.controllerBkPath_str;
		this.thumbnailBkPath_str = data.thumbnailBkPath_str;
		this.mainScrubberBkMiddlePath_str = data.mainScrubberBkMiddlePath_str;
		this.volumeScrubberBkMiddlePath_str = data.volumeScrubberBkMiddlePath_str;
		this.mainScrubberDragMiddlePath_str = data.mainScrubberDragMiddlePath_str;
		this.volumeScrubberDragMiddlePath_str = data.volumeScrubberDragMiddlePath_str;
		this.timeColor_str = data.timeColor_str;
		this.titleColor_str = data.titleColor_str;
		this.progressMiddlePath_str = data.progressMiddlePath_str;
		this.titlebarBkMiddlePattern_str = data.titlebarBkMiddlePattern_str;
		this.thumbPath_str = null;
		this.toolTipsButtonFontColor_str = data.toolTipsButtonFontColor_str;
		
		this.controllerHeight = data.controllerHeight;
		this.minLeftWidth = 150;
		this.thumbWidthAndHeight = self.controllerHeight;
		this.stageWidth = 0;
		this.stageHeight = self.controllerHeight;
		this.scrubbersBkLeftAndRightWidth = this.mainScrubberBkLeft_img.width;
		this.mainScrubberWidth = 0;
		this.totalVolumeBarWidth = 100;
		this.minVolumeBarWidth = 60;
		this.volumeScrubberWidth = 0;
		this.spaceBetweenVolumeButtonAndScrubber = data.spaceBetweenVolumeButtonAndScrubber;

		this.mainScrubberOffsetTop = data.mainScrubberOffsetTop;
		this.spaceBetweenMainScrubberAndTime = data.spaceBetweenMainScrubberAndTime;
		this.startTimeSpace = data.startTimeSpace;
		this.scrubbersHeight = this.mainScrubberBkLeft_img.height;
		this.mainScrubberDragLeftWidth = self.mainScrubberDragLeft_img.width;
		this.scrubbersOffsetWidth = data.scrubbersOffsetWidth;
		this.scrubbersOffestTotalWidth = data.scrubbersOffestTotalWidth;
		this.volumeButtonAndScrubberOffsetTop = data.volumeButtonAndScrubberOffsetTop;
		this.volume = data.volume;
		this.lastVolume = self.volume;
		this.startSpaceBetweenButtons = data.startSpaceBetweenButtons;
		this.spaceBetweenButtons = 1000;
		this.volumeScrubberOffestWidth = data.volumeScrubberOffestWidth;
		this.percentPlayed = 0;
		this.separatorOffsetOutSpace = data.separatorOffsetOutSpace;
		this.separatorOffsetInSpace = data.separatorOffsetInSpace;
		this.titlebarHeight = self.titlebarLeftPath_img.height;
		this.titleBarOffsetTop = data.titleBarOffsetTop;
		this.animTextWidth = 0;
		this.animationHolderWidth = 0;
		this.lastTotalTimeLength = 0;
		this.lastCurTimeLength = 0;
		this.lastButtonsOffsetTop = data.lastButtonsOffsetTop;
		this.allButtonsOffsetTopAndBottom = data.allButtonsOffsetTopAndBottom;
		this.timeHeight = 0;
		this.totalButtonsWidth = 0;
		this.largerButtonHeight = 0;
		this.scrubberOffsetBottom = data.scrubberOffsetBottom;
		this.equlizerOffsetLeft = data.equlizerOffsetLeft;
		this.toolTipsButtonsHideDelay = data.toolTipsButtonsHideDelay;
		
		this.showAnimationIntroId_to;
		this.animateTextId_to;
		this.startToAnimateTextId_to;
		this.setTimeSizeId_to;
		this.animateTextId_int;
		
		this.showButtonsToolTips_bl = data.showButtonsToolTips_bl;
		this.showPlaylistsButtonAndPlaylists_bl = data.showPlaylistsButtonAndPlaylists_bl;
		this.loop_bl = data.loop_bl;
		this.shuffle_bl = data.shuffle_bl;
		this.allowToChangeVolume_bl = data.allowToChangeVolume_bl;
		this.showLoopButton_bl = data.showLoopButton_bl;
		this.showShuffleButton_bl = data.showShuffleButton_bl;
		this.showPlayListButtonAndPlaylist_bl = data.showPlayListButtonAndPlaylist_bl;
		this.showDownloadMp3Button_bl = data.showDownloadMp3Button_bl;
		this.showFacebookButton_bl = data.showFacebookButton_bl;
		this.showPopupButton_bl = data.showPopupButton_bl;
		this.animateOnIntro_bl = data.animateOnIntro_bl;
		this.showSoundAnimation_bl = data.showSoundAnimation_bl;
		this.isMainScrubberScrubbing_bl = false;
		this.isMainScrubberDisabled_bl = false;
		this.isVolumeScrubberDisabled_bl = false;
		this.isMainScrubberLineVisible_bl = false;
		this.isVolumeScrubberLineVisible_bl = false;
		this.showPlayListByDefault_bl = data.showPlayListByDefault_bl;
		this.showThumbnail_bl = false;
		this.isTextAnimating_bl = false;
		this.expandControllerBackground_bl = data.expandControllerBackground_bl;
		this.isMute_bl = false;
		this.isMobile_bl = FWDMLPUtils.isMobile;
		this.hasPointerEvent_bl = FWDMLPUtils.hasPointerEvent;

		//##########################################//
		/* initialize this */
		//##########################################//
		self.init = function(){
			self.mainHolder_do = new FWDMLPDisplayObject("div");
			if(self.expandControllerBackground_bl){
				self.bk_do = new FWDMLPDisplayObject("img");
				self.bk_do.setScreen(self.controllerBk_img);
				self.mainHolder_do.addChild(self.bk_do);
			}else{
				self.mainHolder_do.getStyle().background = "url('" + self.controllerBkPath_str + "')";
			}
			
			self.addChild(self.mainHolder_do);
			self.setupThumb();
			self.setupPrevButton();	
			self.setupPlayPauseButton();
			self.setupNextButton();	
			self.setupSeparators();
			self.setupMainScrubber();
			self.setupTitlebar();
			self.setupTime();
			self.setupVolumeScrubber();
			if(self.showPlaylistsButtonAndPlaylists_bl) self.setupCategoriesButton();
			if(self.showLoopButton_bl) self.setupLoopButton();
			if(self.showShuffleButton_bl) self.setupShuffleButton();
			if(self.showFacebookButton_bl) self.setupFacebookButton();
			if(self.showDownloadMp3Button_bl) self.setupDownloadButton();
			if(self.showPopupButton_bl) self.setupPopupButton();
			if(self.showButtonsToolTips_bl) self.setupToolTips();
			if(!self.isMobile_bl) self.setupDisable();
			
			self.mainHolder_do.setY(-500);
			self.showAnimationIntroId_to = setTimeout(function(){
				self.mainHolder_do.setY(-self.stageHeight);
				if(self.animateOnIntro_bl){
					self.animateOnIntro(true);
				}else{
					self.animateOnIntro(false);
				}
			},200);
			
			var button;
			for(var i=0; i<self.buttons_ar.length; i++){
				button = self.buttons_ar[i];
				self.totalButtonsWidth += button.w;
				if(button.h > self.largerButtonHeight) self.largerButtonHeight = button.h;
			}
			self.totalButtonsWidth += self.volumeButton_do.w;
			self.totalButtonsWidth +=  self.startSpaceBetweenButtons * 2;
		};
		
		//###########################################//
		// Resize and position self...
		//###########################################//
		self.resizeAndPosition = function(){
			
			if(parent.stageWidth == self.stageWidth && parent.stageHeight == self.stageHeight) return;
			self.stageWidth = parent.stageWidth;
			
			self.positionButtons();
		};
		
		//#################################//
		/* animate on intro */
		//#################################//
		this.animateOnIntro = function(animate){
			
			if(animate){
				FWDMLPTweenMax.to(self.mainHolder_do, .8, {y:0, ease:Expo.easeInOut});
			}else{
				FWDMLPTweenMax.killTweensOf(self.mainHolder_do);
				self.mainHolder_do.setY(0);
			}
		};
		
		//##############################//
		/* setup background */
		//##############################//
		self.positionButtons = function(){
			
			var button;
			var prevItem;
			var leftWidth = 0;
			var minimizedSpaceBetweenButtons = 0;
			var totalButtons = self.buttons_ar.length;
			
			if(self.showDownloadMp3Button_bl){
				if(data.playlist_ar[parent.id].downloadable){
					if(FWDMLPUtils.indexOfArray(self.buttons_ar, self.downloadButton_do) == -1){
						if(self.showFacebookButton_bl && self.showPopupButton_bl){
							self.buttons_ar.splice(self.buttons_ar.length - 2,0, self.downloadButton_do);
						}else if(self.showFacebookButton_bl || self.showPopupButton_bl){
							self.buttons_ar.splice(self.buttons_ar.length - 1,0, self.downloadButton_do);
						}else{
							self.buttons_ar.splice(self.buttons_ar.length,0, self.downloadButton_do);
						}
						
						self.downloadButton_do.setVisible(true);
					}
				}else{
					var downloadButtonIndex = FWDMLPUtils.indexOfArray(self.buttons_ar, self.downloadButton_do);
					if(downloadButtonIndex != -1){
						self.buttons_ar.splice(downloadButtonIndex,1);
						self.downloadButton_do.setVisible(false);
					}
				}
			};
			
			totalButtons = self.buttons_ar.length;
			
			if(!data.playlist_ar){
				self.showThumbnail_bl = true;
			}else{
				if(data.playlist_ar[parent.id] == undefined){
					self.showThumbnail_bl = false;
				}else{
					self.showThumbnail_bl = Boolean(data.playlist_ar[parent.id].thumbPath);
				}
			}
			
			if(!data.showThumbnail_bl) self.showThumbnail_bl = false;
			
			if(self.showThumbnail_bl){
				leftWidth += self.thumbWidthAndHeight;
				self.thumb_do.setX(0);
			}else{
				self.thumb_do.setX(-300);
			}
			
			for(var i=0; i<totalButtons; i++){
				button = self.buttons_ar[i];
				leftWidth += button.w + self.spaceBetweenButtons;
			}
			
			if(totalButtons > 3){
				
				var lastButtonsTotalWidth = 0;
				for(var i=0; i<totalButtons; i++){
					button = self.buttons_ar[i];
					if(i > 2){
						if(i == 3){
							lastButtonsTotalWidth += button.w;
						}else{
							lastButtonsTotalWidth += self.buttons_ar[i].w + self.spaceBetweenButtons;
						}
					}
				}
				
				if(lastButtonsTotalWidth < self.minVolumeBarWidth){	

					for(var i=0; i<totalButtons; i++){
						button = self.buttons_ar[i];
						if(i > 2){
							leftWidth -= button.w + self.spaceBetweenButtons;
						}
					}
					
					self.totalVolumeBarWidth = self.minVolumeBarWidth + self.volumeButton_do.w + self.spaceBetweenVolumeButtonAndScrubber;
					self.volumeScrubberWidth = self.minVolumeBarWidth - self.startSpaceBetweenButtons + self.volumeScrubberOffestWidth;
					leftWidth += self.totalVolumeBarWidth;
					leftWidth += self.separatorOffsetOutSpace * 2 + self.separatorOffsetInSpace * 2;
					leftWidth += self.startSpaceBetweenButtons;
					leftWidth += self.firstSeparator_do.w + self.secondSeparator_do.w;
					self.mainVolumeHolder_do.setY(self.volumeButtonAndScrubberOffsetTop);
					
				}else{
					leftWidth -= self.spaceBetweenButtons * 2;
					leftWidth += self.separatorOffsetOutSpace * 2 + self.separatorOffsetInSpace * 2;
					leftWidth += self.startSpaceBetweenButtons * 2;
					leftWidth += self.firstSeparator_do.w + self.secondSeparator_do.w;
					
					lastButtonsTotalWidth = 0;
					for(var i=0; i<totalButtons; i++){
						button = self.buttons_ar[i];
						if(i > 2){
							if(i == 3){
								lastButtonsTotalWidth += button.w;
							}else{
								lastButtonsTotalWidth += self.buttons_ar[i].w + self.spaceBetweenButtons;
							}
						}
					}
					lastButtonsTotalWidth -= 7;
					self.totalVolumeBarWidth = lastButtonsTotalWidth + self.volumeButton_do.w + self.spaceBetweenVolumeButtonAndScrubber;
					self.volumeScrubberWidth = lastButtonsTotalWidth - self.volumeButton_do.w - self.spaceBetweenVolumeButtonAndScrubber + self.volumeScrubberOffestWidth;
					self.mainVolumeHolder_do.setY(self.volumeButtonAndScrubberOffsetTop);
				}
			}else{
				self.totalVolumeBarWidth = self.minVolumeBarWidth + self.volumeButton_do.w + self.spaceBetweenVolumeButtonAndScrubber;
				self.volumeScrubberWidth = self.minVolumeBarWidth - self.startSpaceBetweenButtons + self.volumeScrubberOffestWidth;
				leftWidth += self.totalVolumeBarWidth;
				leftWidth += self.separatorOffsetOutSpace * 2 + self.separatorOffsetInSpace * 2;
				leftWidth += self.startSpaceBetweenButtons;
				leftWidth += self.firstSeparator_do.w + self.secondSeparator_do.w;
				self.mainVolumeHolder_do.setY(parseInt((self.stageHeight - self.mainVolumeHolder_do.h)/2));
			}
			
			leftWidth = self.stageWidth - leftWidth;
			
			if(leftWidth > self.minLeftWidth){
				self.stageHeight = self.controllerHeight;
				self.secondSeparator_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace + leftWidth + self.separatorOffsetInSpace);
				
				for(var i=0; i<totalButtons; i++){
					button = self.buttons_ar[i];
					if(i == 0){
						prevItem = self.thumb_do;
						if(self.showThumbnail_bl){
							button.setX(prevItem.x + prevItem.w + self.startSpaceBetweenButtons);
						}else{
							button.setX(self.startSpaceBetweenButtons);
						}
						button.setY(parseInt((self.stageHeight - button.h)/2));
					}else if(i == 1){
						prevItem = self.buttons_ar[i -1];
						button.setX(prevItem.x + prevItem.w + self.spaceBetweenButtons);
						button.setY(parseInt((self.stageHeight - button.h)/2));
					}else if(i == 2){
						prevItem = self.buttons_ar[i -1];
						button.setX(prevItem.x + prevItem.w + self.spaceBetweenButtons);
						self.firstSeparator_do.setX(button.x + button.w + self.separatorOffsetOutSpace);
						button.setY(parseInt((self.stageHeight - button.h)/2));
					}else if(i == 3){
						self.secondSeparator_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace + leftWidth + self.separatorOffsetInSpace);
						prevItem = self.buttons_ar[i -1];
						button.setX(self.secondSeparator_do.x + self.secondSeparator_do.w + self.separatorOffsetOutSpace);
						button.setY(self.lastButtonsOffsetTop);
					}else{
						prevItem = self.buttons_ar[i -1];
						button.setX(prevItem.x + prevItem.w + self.spaceBetweenButtons);
						button.setY(self.lastButtonsOffsetTop);
					}
				}
				
				//titlebar
				self.mainTitlebar_do.setWidth(leftWidth);
				self.mainTitlebar_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace);
				self.titlebarGradRight_do.setX(self.mainTitlebar_do.w - self.titlebarGradRight_do.w);
				self.titleBarRight_do.setX(self.mainTitlebar_do.w - self.titleBarRight_do.w);
				self.mainTitlebar_do.setY(self.titleBarOffsetTop);
				if(!self.totalTime_do.w && FWDMLPUtils.isIEAndLessThen9) return;
				
				//main scrubber and time
				self.currentTime_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace);
				self.totalTime_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace + leftWidth - self.totalTime_do.w);
				self.currentTime_do.setY(self.mainScrubberOffsetTop + parseInt((self.mainScrubber_do.h - self.currentTime_do.h)/2));
				self.totalTime_do.setY(self.mainScrubberOffsetTop + parseInt((self.mainScrubber_do.h - self.totalTime_do.h)/2));
				
				self.mainScrubberWidth = leftWidth + self.scrubbersOffestTotalWidth - self.currentTime_do.w - self.totalTime_do.w - self.spaceBetweenMainScrubberAndTime * 2;
				self.mainScrubber_do.setWidth(self.mainScrubberWidth);
				self.mainScrubberBkMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth * 2);
				self.mainScrubberBkRight_do.setX(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth);
				self.mainScrubber_do.setX(self.firstSeparator_do.x + self.firstSeparator_do.w + self.separatorOffsetInSpace - parseInt(self.scrubbersOffestTotalWidth/2)  + self.currentTime_do.w + self.spaceBetweenMainScrubberAndTime);
				self.mainScrubber_do.setY(self.mainScrubberOffsetTop);
				self.mainScrubberDragMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth - self.scrubbersOffsetWidth);
				self.progressMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth - self.scrubbersOffsetWidth);
				self.updateMainScrubber(self.percentPlayed);
				
				//volume
				self.mainVolumeHolder_do.setX(self.secondSeparator_do.x + self.secondSeparator_do.w + self.separatorOffsetOutSpace);
				self.mainVolumeHolder_do.setWidth(self.totalVolumeBarWidth + self.scrubbersOffestTotalWidth);
				self.volumeScrubber_do.setX(self.volumeButton_do.x + self.volumeButton_do.w + self.spaceBetweenVolumeButtonAndScrubber - parseInt(self.scrubbersOffestTotalWidth/2));
				self.volumeScrubber_do.setWidth(self.volumeScrubberWidth);
				self.volumeScrubberBkRight_do.setX(self.volumeScrubberWidth - self.scrubbersBkLeftAndRightWidth);
				self.volumeScrubberBkMiddle_do.setWidth(self.volumeScrubberWidth - self.scrubbersBkLeftAndRightWidth * 2);
				self.volumeScrubberDragMiddle_do.setWidth(self.volumeScrubberWidth - self.scrubbersBkLeftAndRightWidth);
				self.updateVolume(self.volume);
				self.setHeight(self.controllerHeight);
			}else{
			
				//thumbnail
				self.thumb_do.setX(-300);
				
				//separators
				self.firstSeparator_do.setX(-300);
				self.secondSeparator_do.setX(-300);
				
				//titlebar
				self.mainTitlebar_do.setWidth(self.stageWidth);
				self.mainTitlebar_do.setX(0);
				self.mainTitlebar_do.setY(0);
				self.titlebarGradRight_do.setX(self.mainTitlebar_do.w - self.titlebarGradRight_do.w);
				self.titleBarRight_do.setX(self.mainTitlebar_do.w - self.titleBarRight_do.w);
				
				//position buttons
				var totalButtonsWidthWithCustomSpace = 0;
				var leftWidth;
				var tempTotalButtonWidth = self.totalButtonsWidth;
				if(self.downloadButton_do && FWDMLPUtils.indexOfArray(self.buttons_ar, self.downloadButton_do) != -1){
					tempTotalButtonWidth += self.downloadButton_do.w;
					
				}
				minimizedSpaceBetweenButtons = parseInt((self.stageWidth - tempTotalButtonWidth)/(totalButtons));
				
				for(var i=0; i<totalButtons; i++){
					button = self.buttons_ar[i];
					totalButtonsWidthWithCustomSpace += button.w + minimizedSpaceBetweenButtons; 
				}
				
				totalButtonsWidthWithCustomSpace += self.volumeButton_do.w;
				leftWidth = parseInt((self.stageWidth - totalButtonsWidthWithCustomSpace)/2)  - self.startSpaceBetweenButtons;
				
				for(var i=0; i<totalButtons; i++){
					button = self.buttons_ar[i];
					button.setY(self.titleBarGradLeft_do.h + self.allButtonsOffsetTopAndBottom + parseInt((self.largerButtonHeight - button.h)/2));
					
					if(i == 0){
						button.setX(leftWidth + self.startSpaceBetweenButtons);
					}else{
						prevItem = self.buttons_ar[i -1];
						button.setX(Math.round(prevItem.x + prevItem.w + minimizedSpaceBetweenButtons));
					}
				}
			
				self.mainVolumeHolder_do.setX(button.x + button.w + minimizedSpaceBetweenButtons);
				self.mainVolumeHolder_do.setY(self.titleBarGradLeft_do.h + self.allButtonsOffsetTopAndBottom + parseInt((self.largerButtonHeight - self.volumeButton_do.h)/2));
				if(!self.totalTime_do.w && FWDMLPUtils.isIEAndLessThen9) return;
				//main scrubber and time
				self.currentTime_do.setX(self.startTimeSpace);
				self.currentTime_do.setY(self.playPauseButton_do.y + self.playPauseButton_do.h + self.allButtonsOffsetTopAndBottom);
				self.totalTime_do.setX(self.stageWidth - self.startTimeSpace - self.totalTime_do.w);
				self.totalTime_do.setY(self.playPauseButton_do.y + self.playPauseButton_do.h + self.allButtonsOffsetTopAndBottom);
				self.mainScrubber_do.setX(self.currentTime_do.x +  self.currentTime_do.w + self.spaceBetweenMainScrubberAndTime - parseInt(self.scrubbersOffestTotalWidth/2));
				self.mainScrubber_do.setY(self.currentTime_do.y + parseInt((self.currentTime_do.h - self.mainScrubber_do.h)/2));
				self.mainScrubberWidth = self.stageWidth + self.scrubbersOffestTotalWidth - self.currentTime_do.w - self.totalTime_do.w - self.spaceBetweenMainScrubberAndTime * 2 - self.startTimeSpace * 2;
				self.mainScrubber_do.setWidth(self.mainScrubberWidth);
				self.mainScrubberBkMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth * 2);
				self.mainScrubberBkRight_do.setX(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth);
				self.mainScrubberDragMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth - self.scrubbersOffsetWidth);
				self.progressMiddle_do.setWidth(self.mainScrubberWidth - self.scrubbersBkLeftAndRightWidth - self.scrubbersOffsetWidth);
				self.updateMainScrubber(self.percentPlayed);
				
				//volume
				self.totalVolumeBarWidth = self.volumeButton_do.w;
				self.mainVolumeHolder_do.setWidth(self.totalVolumeBarWidth);
				self.updateVolume(self.volume);
				
				self.stageHeight = self.mainTitlebar_do.h + self.largerButtonHeight + (self.allButtonsOffsetTopAndBottom * 2) + self.mainScrubber_do.h + self.scrubberOffsetBottom;
			}
		
			self.startToCheckIfAnimTitle();
			if(self.bk_do){
				self.bk_do.setWidth(self.stageWidth);
				self.bk_do.setHeight(self.stageHeight);
			}
			self.setWidth(self.stageWidth);
			self.setHeight(self.stageHeight);
			self.mainHolder_do.setWidth(self.stageWidth);
			self.mainHolder_do.setHeight(self.stageHeight);
		};
		
		//################################//
		/* Setup tooltips */
		//################################//		
		this.setupToolTips = function(){
			
			FWDMLPToolTip.setPrototype();
			self.prevButtonToolTip_do = new FWDMLPToolTip(self.prevButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "previous track", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
			document.documentElement.appendChild(self.prevButtonToolTip_do.screen);
			
			FWDMLPToolTip.setPrototype();
			self.playPauseToolTip_do = new FWDMLPToolTip(self.playPauseButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "play / pause", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
			document.documentElement.appendChild(self.playPauseToolTip_do.screen);
			
			FWDMLPToolTip.setPrototype();
			self.nextButtonToolTip_do = new FWDMLPToolTip(self.nextButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "next track", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
			document.documentElement.appendChild(self.nextButtonToolTip_do.screen);
			
			if(self.showPlaylistsButtonAndPlaylists_bl){
				FWDMLPToolTip.setPrototype();
				self.playlistsButtonToolTip_do = new FWDMLPToolTip(self.categoriesButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "show playlists", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.playlistsButtonToolTip_do.screen);
			}
			
			if(self.showPlayListButtonAndPlaylist_bl){
				FWDMLPToolTip.setPrototype();
				self.playlistButtonToolTip_do = new FWDMLPToolTip(self.playlistButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "show / hide playlist",self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.playlistButtonToolTip_do.screen);
			}
			
			if(self.showLoopButton_bl){
				FWDMLPToolTip.setPrototype();
				self.loopButtonToolTip_do = new FWDMLPToolTip(self.loopButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "loop", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.loopButtonToolTip_do.screen);
			}
			
			if(self.showShuffleButton_bl){
				FWDMLPToolTip.setPrototype();
				self.shuffleButtonToolTip_do = new FWDMLPToolTip(self.shuffleButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "shuffle", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.shuffleButtonToolTip_do.screen);
			}
			
			if(self.showFacebookButton_bl){
				FWDMLPToolTip.setPrototype();
				self.facebookButtonToolTip_do = new FWDMLPToolTip(self.facebookButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "share on facebook", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.facebookButtonToolTip_do.screen);
			}
			
			if(self.showDownloadMp3Button_bl){
				FWDMLPToolTip.setPrototype();
				self.downloadButtonToolTip_do = new FWDMLPToolTip(self.downloadButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "download track", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.downloadButtonToolTip_do.screen);
			}
			
			if(self.showPopupButton_bl){
				FWDMLPToolTip.setPrototype();
				self.populButtonToolTip_do = new FWDMLPToolTip(self.popupButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "popup", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
				document.documentElement.appendChild(self.populButtonToolTip_do.screen);
			}
			
			FWDMLPToolTip.setPrototype();
			self.volumeButtonToolTip_do = new FWDMLPToolTip(self.volumeButton_do, data.toopTipBk_str, data.toopTipPointer_str, data.toopTipPointerUp_str, "mute / unmute", self.toolTipsButtonFontColor_str, self.toolTipsButtonsHideDelay);
			document.documentElement.appendChild(self.volumeButtonToolTip_do.screen);
		};
		
		this.showToolTip = function(button, toolTip, e){
			if(!self.showButtonsToolTips_bl) return;
			var ws = FWDMLPUtils.getViewportSize();
			var wc = FWDMLPUtils.getViewportMouseCoordinates(e);
			
			var localX = parseInt(button.getGlobalX() + button.w/2 - toolTip.w/2);
			var localY = parseInt(button.getGlobalY() - toolTip.h - 6);
			var offseX = 0;
		
			if(localX < 0){
				offseX = localX;
				localX = 0;
			}else if(localX + toolTip.w > ws.w){
				
				offseX = (ws.w - (localX + toolTip.w)) * -1;
				localX = localX + (offseX * -1);
			}
			
			if(localY < 0){
				localY += button.h + toolTip.h + 12;
				toolTip.positionPointer(offseX, true);
			}else{
				toolTip.positionPointer(offseX, false);
			}

			toolTip.setX(localX);
			toolTip.setY(localY);
			toolTip.show();
		};
		
		//################################//
		/* Setup thumb */
		//################################//
		this.setupThumb = function(){
			self.thumb_do = new FWDMLPDisplayObject("div");
			self.thumb_do.getStyle().background = "url('" + self.thumbnailBkPath_str + "')";
			self.thumb_do.setWidth(self.thumbWidthAndHeight);
			self.thumb_do.setHeight(self.thumbWidthAndHeight);
			
			self.mainHolder_do.addChild(self.thumb_do);
		};
		
		this.loadThumb = function(thumbPath){
			self.positionButtons();
			if(!data.showThumbnail_bl) return;
		
			if(!thumbPath){
				self.cleanThumbnails(true);
				self.thumbPath_str = "none";
				return;
			}
			
			if(self.thumbPath_str == thumbPath) return;
			
			self.thumbPath_str = thumbPath;
			
			if(self.thumb_img){
				self.thumb_img.onload = null;
				self.thumb_img.onerror = null;
				self.thumb_img = null;
			}
			
			if(!self.thumbPath_str) return;
			self.thumb_img = new Image();
			self.thumb_img.onload = self.thumbImageLoadComplete;
			self.thumb_img.onerror = self.thumbImageLoadError;
			self.thumb_img.src = self.thumbPath_str;
		};
		
		this.thumbImageLoadError = function(){
			self.cleanThumbnails(true);
		};
		
		this.thumbImageLoadComplete = function(){
			var thumbImage_do = new FWDMLPDisplayObject("img");
			thumbImage_do.setScreen(self.thumb_img);
			var curW = self.thumb_img.width;
			var curH = self.thumb_img.height;
		
			var scaleX = self.thumbWidthAndHeight/curW;
			var scaleY = self.thumbWidthAndHeight/curH;
			var totalScale = 0;
			
			if(scaleX <= scaleY){
				totalScale = scaleX;
			}else if(scaleX >= scaleY){
				totalScale = scaleY;
			}
	
			thumbImage_do.setWidth(parseInt((curW * totalScale)));
			thumbImage_do.setHeight(parseInt((curH * totalScale)));
			thumbImage_do.setX(parseInt((self.thumbWidthAndHeight - (curW * totalScale))/2));
			thumbImage_do.setY(parseInt((self.thumbWidthAndHeight - (curH * totalScale))/2));
			thumbImage_do.setAlpha(0);
			
			for(var i=0; i<self.thumb_do.getNumChildren(); i++){
				child = self.thumb_do.getChildAt(i);
				FWDMLPTweenMax.killTweensOf(child);
			}
			
			FWDMLPTweenMax.to(thumbImage_do, .8,{alpha:1,
				alpha:1,
				delay:.2,
				ease:Expo.easeOut,
				onComplete:self.cleanThumbnails
			});
			self.thumb_do.addChild(thumbImage_do);
		};
		
		
		this.cleanThumbnails = function(removeAllChildren){
			var child;
			var startIndex = removeAllChildren? 0 : 1;
			while(self.thumb_do.getNumChildren() > startIndex){
				child = self.thumb_do.getChildAt(0);
				FWDMLPTweenMax.killTweensOf(child);
				self.thumb_do.removeChild(child);
				child.destroy();
			}
		};
		
		//###############################//
		/* setup disable */
		//##############################//
		this.setupDisable = function(){
			self.disable_do = new FWDMLPDisplayObject("div");
			if(FWDMLPUtils.isIE){
				self.disable_do.setBkColor("#FFFFFF");
				self.disable_do.setAlpha(0);
			}
		};
		
		//##########################################//
		/* Setup prev button */
		//#########################################//
		this.setupPrevButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.prevButton_do = new FWDMLPSimpleButton(self.prevN_img, data.prevSPath_str);
			self.prevButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.prevButtonShowToolTipHandler);
			self.prevButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.prevButtonOnMouseUpHandler);
			self.buttons_ar.push(self.prevButton_do);
			self.mainHolder_do.addChild(self.prevButton_do); 
		};
		
		this.prevButtonShowToolTipHandler = function(e){
			self.showToolTip(self.prevButton_do, self.prevButtonToolTip_do, e.e);
		};
		
		this.prevButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.PLAY_PREV);
		};
		
		//################################################//
		/* Setup play button */
		//################################################//
		this.setupPlayPauseButton = function(){
			FWDRVPComplexButton.setPrototype();
			self.playPauseButton_do = new FWDRVPComplexButton(
					self.playN_img,
					data.playSPath_str,
					self.pauseN_img,
					data.pauseSPath_str,
					true
			);
			
			self.buttons_ar.push(self.playPauseButton_do);
			self.playPauseButton_do.addListener(FWDRVPComplexButton.SHOW_TOOLTIP, self.playButtonShowToolTipHandler);
			self.playPauseButton_do.addListener(FWDRVPComplexButton.MOUSE_UP, self.playButtonMouseUpHandler);
			self.mainHolder_do.addChild(self.playPauseButton_do);
		};
		
		
		this.playButtonShowToolTipHandler = function(e){
			self.showToolTip(self.playPauseButton_do, self.playPauseToolTip_do, e.e);
		};
		
		this.showPlayButton = function(){
			if(!self.playPauseButton_do) return;
			self.playPauseButton_do.setButtonState(1);
		};
		
		this.showPauseButton = function(){
			if(!self.playPauseButton_do) return;
			self.playPauseButton_do.setButtonState(0);
		};
		
		this.playButtonMouseUpHandler = function(){
			if(self.playPauseButton_do.currentState == 0){
				self.dispatchEvent(FWDRVPController.PAUSE);
			}else{
				self.dispatchEvent(FWDRVPController.PLAY);
			}
		};
		
		//##########################################//
		/* Setup next button */
		//#########################################//
		this.setupNextButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.nextButton_do = new FWDMLPSimpleButton(self.nextN_img, data.nextSPath_str);
			self.nextButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.nextButtonShowToolTipHandler);
			self.nextButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.nextButtonOnMouseUpHandler);	
			self.nextButton_do.setY(parseInt((self.stageHeight - self.nextButton_do.h)/2));
			self.buttons_ar.push(self.nextButton_do);
			self.mainHolder_do.addChild(self.nextButton_do); 
		};
		
		this.nextButtonShowToolTipHandler = function(e){
			self.showToolTip(self.nextButton_do, self.nextButtonToolTip_do, e.e);
		};
		
		this.nextButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.PLAY_NEXT);
		};
		
		//##########################################//
		/* Setup separators */
		//#########################################//
		this.setupSeparators = function(){
			self.firstSeparator_do = new FWDMLPDisplayObject("img");
			self.firstSeparator_do.setScreen(self.separator1_img);
			
			self.secondSeparator_do = new FWDMLPDisplayObject("img");
			self.secondSeparator_do.setScreen(self.separator2_img);
			
			self.firstSeparator_do.setX(-10);
			self.secondSeparator_do.setX(-10);
			self.firstSeparator_do.setY(parseInt((self.stageHeight - self.firstSeparator_do.h)/2));
			self.secondSeparator_do.setY(parseInt((self.stageHeight - self.secondSeparator_do.h)/2));
			
			self.mainHolder_do.addChild(self.firstSeparator_do);
			self.mainHolder_do.addChild(self.secondSeparator_do);
		};
		
		//################################################//
		/* Setup title bar */
		//###############################################//
		this.setupTitlebar = function(){
			self.mainTitlebar_do = new FWDMLPDisplayObject("div");
			self.mainTitlebar_do.getStyle().background = "url('" + self.titlebarBkMiddlePattern_str + "')";
			self.mainTitlebar_do.setHeight(self.titlebarHeight);

			self.titleBarLeft_do = new FWDMLPDisplayObject("img");
			self.titleBarLeft_do.setScreen(self.titleBarLeft_img);
			self.titleBarRight_do = new FWDMLPDisplayObject("img");
			self.titleBarRight_do.setScreen(self.titleBarRigth_img);	
			
			self.simpleText_do = new FWDMLPDisplayObject("div");
			self.simpleText_do.setOverflow("visible");
			self.simpleText_do.hasTransform3d_bl = false;
			self.simpleText_do.hasTransform2d_bl = false;
			self.simpleText_do.setBackfaceVisibility();
			self.simpleText_do.getStyle().fontFamily = "Arial";
			self.simpleText_do.getStyle().fontSize= "12px";
			self.simpleText_do.getStyle().whiteSpace= "nowrap";
			self.simpleText_do.getStyle().textAlign = "left";
			self.simpleText_do.getStyle().color = self.titleColor_str;
			self.simpleText_do.getStyle().fontSmoothing = "antialiased";
			self.simpleText_do.getStyle().webkitFontSmoothing = "antialiased";
			self.simpleText_do.getStyle().textRendering = "optimizeLegibility";	
			
			self.animText1_do = new FWDMLPDisplayObject("div");
			self.animText1_do.setOverflow("visible");
			self.animText1_do.hasTransform3d_bl = false;
			self.animText1_do.hasTransform2d_bl = false;
			self.animText1_do.setBackfaceVisibility();
			self.animText1_do.getStyle().fontFamily = "Arial";
			self.animText1_do.getStyle().fontSize= "12px";
			self.animText1_do.getStyle().whiteSpace= "nowrap";
			self.animText1_do.getStyle().textAlign = "left";
			self.animText1_do.getStyle().color = self.titleColor_str;
			self.animText1_do.getStyle().fontSmoothing = "antialiased";
			self.animText1_do.getStyle().webkitFontSmoothing = "antialiased";
			self.animText1_do.getStyle().textRendering = "optimizeLegibility";	
			
			self.animText2_do = new FWDMLPDisplayObject("div");
			self.animText2_do.setOverflow("visible");
			self.animText2_do.hasTransform3d_bl = false;
			self.animText2_do.hasTransform2d_bl = false;
			self.animText2_do.setBackfaceVisibility();
			self.animText2_do.getStyle().fontFamily = "Arial";
			self.animText2_do.getStyle().fontSize= "12px";
			self.animText2_do.getStyle().whiteSpace= "nowrap";
			self.animText2_do.getStyle().textAlign = "left";
			self.animText2_do.getStyle().color = self.titleColor_str;
			self.animText2_do.getStyle().fontSmoothing = "antialiased";
			self.animText2_do.getStyle().webkitFontSmoothing = "antialiased";
			self.animText2_do.getStyle().textRendering = "optimizeLegibility";	
			
			
			self.titleBarGradLeft_do = new FWDMLPDisplayObject("img");
			self.titleBarGradLeft_do.setScreen(self.titlebarLeftPath_img);
			self.titleBarGradLeft_do.setX(-50);
			
			var titlebarGradRight_img = new Image();
			titlebarGradRight_img.src = data.titlebarRightPath_str;
			self.titlebarGradRight_do = new FWDMLPDisplayObject("img");
			self.titlebarGradRight_do.setScreen(titlebarGradRight_img);
			self.titlebarGradRight_do.setWidth(self.titleBarGradLeft_do.w);
			self.titlebarGradRight_do.setHeight(self.titleBarGradLeft_do.h)
			
			if(self.showSoundAnimation_bl){
				self.animationBackground_do = new FWDMLPDisplayObject("img");
				self.animationBackground_do.setScreen(self.titlebarAnimBkPath_img);
				self.animationHolderWidth = self.animationBackground_do.w;
				self.simpleText_do.setX(self.animationBackground_do.w + 5);
				
				FWDMLPPreloader.setPrototype();
				self.animation_do = new FWDMLPPreloader(data.soundAnimationPath_img, 29, 22, 31, 80, true);
				self.animation_do.setX(self.equlizerOffsetLeft);
				self.animation_do.setY(0);
				self.animation_do.show(true);
				self.animation_do.stop();
			}else{
				self.simpleText_do.setX(5);
			}
		
			setTimeout(function(){
				if(self == null) return;
				self.simpleText_do.setY(parseInt((self.mainTitlebar_do.h - self.simpleText_do.getHeight())/2) + 1);
				self.animText1_do.setY(parseInt((self.mainTitlebar_do.h - self.simpleText_do.getHeight())/2) + 1);
				self.animText2_do.setY(parseInt((self.mainTitlebar_do.h - self.simpleText_do.getHeight())/2) + 1);
			}, 50);
			
			self.mainTitlebar_do.addChild(self.titleBarLeft_do);
			self.mainTitlebar_do.addChild(self.titleBarRight_do);
			self.mainTitlebar_do.addChild(self.simpleText_do);
			self.mainTitlebar_do.addChild(self.animText1_do);
			self.mainTitlebar_do.addChild(self.animText2_do);
			
			if(self.showSoundAnimation_bl){
				self.mainTitlebar_do.addChild(self.animationBackground_do);
				self.mainTitlebar_do.addChild(self.animation_do);
			}
			self.mainTitlebar_do.addChild(self.titleBarGradLeft_do);
			self.mainTitlebar_do.addChild(self.titlebarGradRight_do);
			self.mainHolder_do.addChild(self.mainTitlebar_do);
		};
		
		this.setTitle = function(title){
			self.simpleText_do.setInnerHTML(title);
			self.animText1_do.setInnerHTML(title + "***");
			self.animText2_do.setInnerHTML(title + "***");
			self.animText1_do.setX(-1000);
			self.animText2_do.setX(-1000);
			self.startToCheckIfAnimTitle(true);
		};
		
		//############################################//
		/* Check title animation */
		//############################################//
		this.startToCheckIfAnimTitle = function(stopCurrentAnimation){
			if(stopCurrentAnimation) self.stopToAnimateText();
			clearTimeout(self.animateTextId_to);
			clearTimeout(self.startToAnimateTextId_to);
			self.animateTextId_to = setTimeout(self.checkIfAnimTitle, 10);
		};
		
		this.checkIfAnimTitle = function(){
			var leftWidth = self.mainTitlebar_do.w -  5 - self.titlebarGradRight_do.w;
			leftWidth -= self.animationHolderWidth;
			
			if(self.simpleText_do.getWidth() > leftWidth){
				if(self.isTextAnimating_bl) return;
				if(self.showSoundAnimation_bl){
					self.titleBarGradLeft_do.setX(self.animationHolderWidth);
					self.titlebarGradRight_do.setY(0);
				}else{
					self.titleBarGradLeft_do.setX(0);
					self.titlebarGradRight_do.setY(0);
				}
				clearTimeout(self.startToAnimateTextId_to);
				self.startToAnimateTextId_to = setTimeout(self.startToAnimateText, 300);
			}else{
				self.titleBarGradLeft_do.setX(-50);
				self.titlebarGradRight_do.setY(-50);
				self.stopToAnimateText();
			}
		};
		
		this.startToAnimateText = function(){
			if(self.isTextAnimating_bl) return;
			
			self.isTextAnimating_bl = true;
			self.animTextWidth = self.animText1_do.getWidth();
			
			self.simpleText_do.setX(-1000);
			
			self.animText1_do.setX(self.animationHolderWidth + 5);
			self.animText2_do.setX(self.animationHolderWidth + self.animTextWidth + 10);
		
			clearInterval(self.animateTextId_int);
			self.animateTextId_int = setInterval(self.animateText, 40);
		};
		
		this.stopToAnimateText = function(){
			if(!self.isTextAnimating_bl) return;
			self.isTextAnimating_bl = false;
			
			self.simpleText_do.setX(self.animationHolderWidth + 5);
		
			self.animText1_do.setX(-1000);
			self.animText2_do.setX(-1000);
			
			clearInterval(self.animateTextId_int);
		};
		
		this.animateText = function(){
			self.animText1_do.setX(self.animText1_do.x - 1);
			self.animText2_do.setX(self.animText2_do.x - 1);
			
			if(self.animText1_do.x < - (self.animTextWidth - self.animationHolderWidth))  self.animText1_do.setX(self.animText2_do.x  +  self.animTextWidth + 5);
			if(self.animText2_do.x < - (self.animTextWidth - self.animationHolderWidth))  self.animText2_do.setX(self.animText1_do.x  +  self.animTextWidth + 5);
		};
		
	
		this.stopEqulizer = function(){
			if(self.animation_do) self.animation_do.stop();
		};
		
		this.startEqulizer = function(){
			if(self.animation_do) self.animation_do.start();
		};
	
		//################################################//
		/* Setup main scrubber */
		//################################################//
		this.setupMainScrubber = function(){
			//setup background bar
			self.mainScrubber_do = new FWDMLPDisplayObject("div");
			self.mainScrubber_do.setY(parseInt((self.stageHeight - self.scrubbersHeight)/2));
			self.mainScrubber_do.setHeight(self.scrubbersHeight);
			
			self.mainScrubberBkLeft_do = new FWDMLPDisplayObject("img");
			self.mainScrubberBkLeft_do.setScreen(self.mainScrubberBkLeft_img);
			
			self.mainScrubberBkRight_do = new FWDMLPDisplayObject("img");
			self.mainScrubberBkRight_do.setScreen(self.mainScrubberBkRight_img);
			
			var middleImage = new Image();
			middleImage.src = self.mainScrubberBkMiddlePath_str;
			
			if(self.isMobile_bl){
				self.mainScrubberBkMiddle_do = new FWDMLPDisplayObject("div");	
				self.mainScrubberBkMiddle_do.getStyle().background = "url('" + self.mainScrubberBkMiddlePath_str + "')";
			}else{
				self.mainScrubberBkMiddle_do = new FWDMLPDisplayObject("img");
				self.mainScrubberBkMiddle_do.setScreen(middleImage);
			}
				
			self.mainScrubberBkMiddle_do.setHeight(self.scrubbersHeight);
			self.mainScrubberBkMiddle_do.setX(self.scrubbersBkLeftAndRightWidth);
			
			//setup progress bar
			self.mainProgress_do = new FWDMLPDisplayObject("div");
			self.mainProgress_do.setHeight(self.scrubbersHeight);
		
			self.progressLeft_do = new FWDMLPDisplayObject("img");
			self.progressLeft_do.setScreen(self.mainScrubberLeftProgress_img);
			
			middleImage = new Image();
			middleImage.src = self.progressMiddlePath_str;
			
			self.progressMiddle_do = new FWDMLPDisplayObject("div");	
			self.progressMiddle_do.getStyle().background = "url('" + self.progressMiddlePath_str + "')";
			
			self.progressMiddle_do.setHeight(self.scrubbersHeight);
			self.progressMiddle_do.setX(self.mainScrubberDragLeftWidth);
			
			//setup darg bar.
			self.mainScrubberDrag_do = new FWDMLPDisplayObject("div");
			self.mainScrubberDrag_do.setHeight(self.scrubbersHeight);
		
			self.mainScrubberDragLeft_do = new FWDMLPDisplayObject("img");
			self.mainScrubberDragLeft_do.setScreen(self.mainScrubberDragLeft_img);
			
			middleImage = new Image();
			middleImage.src = self.mainScrubberDragMiddlePath_str;
			//if(self.isMobile_bl){
				
				self.mainScrubberDragMiddle_do = new FWDMLPDisplayObject("div");	
				self.mainScrubberDragMiddle_do.getStyle().background = "url('" + self.mainScrubberDragMiddlePath_str + "')";
			//}else{
				//self.mainScrubberDragMiddle_do = new FWDMLPDisplayObject("img");
				//self.mainScrubberDragMiddle_do.setScreen(middleImage);
			//}
			self.mainScrubberDragMiddle_do.setHeight(self.scrubbersHeight);
			self.mainScrubberDragMiddle_do.setX(self.mainScrubberDragLeftWidth);
			
			self.mainScrubberBarLine_do = new FWDMLPDisplayObject("img");
			self.mainScrubberBarLine_do.setScreen(self.mainScrubberLine_img);
			self.mainScrubberBarLine_do.setAlpha(0);
			self.mainScrubberBarLine_do.hasTransform3d_bl = false;
			self.mainScrubberBarLine_do.hasTransform2d_bl = false;
			
			//add all children
			self.mainScrubber_do.addChild(self.mainScrubberBkLeft_do);
			self.mainScrubber_do.addChild(self.mainScrubberBkMiddle_do);
			self.mainScrubber_do.addChild(self.mainScrubberBkRight_do);
			self.mainScrubberDrag_do.addChild(self.mainScrubberDragLeft_do);
			self.mainScrubberDrag_do.addChild(self.mainScrubberDragMiddle_do);
			self.mainProgress_do.addChild(self.progressLeft_do);
			self.mainProgress_do.addChild(self.progressMiddle_do);
			self.mainScrubber_do.addChild(self.mainProgress_do);
			self.mainScrubber_do.addChild(self.mainScrubberDrag_do);
			self.mainScrubber_do.addChild(self.mainScrubberBarLine_do);
			self.mainHolder_do.addChild(self.mainScrubber_do);
		
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.mainScrubber_do.screen.addEventListener("MSPointerOver", self.mainScrubberOnOverHandler);
					self.mainScrubber_do.screen.addEventListener("MSPointerOut", self.mainScrubberOnOutHandler);
					self.mainScrubber_do.screen.addEventListener("MSPointerDown", self.mainScrubberOnDownHandler);
				}else{
					self.mainScrubber_do.screen.addEventListener("touchstart", self.mainScrubberOnDownHandler);
				}
			}else if(self.screen.addEventListener){	
				self.mainScrubber_do.screen.addEventListener("mouseover", self.mainScrubberOnOverHandler);
				self.mainScrubber_do.screen.addEventListener("mouseout", self.mainScrubberOnOutHandler);
				self.mainScrubber_do.screen.addEventListener("mousedown", self.mainScrubberOnDownHandler);
			}else if(self.screen.attachEvent){
				self.mainScrubber_do.screen.attachEvent("onmouseover", self.mainScrubberOnOverHandler);
				self.mainScrubber_do.screen.attachEvent("onmouseout", self.mainScrubberOnOutHandler);
				self.mainScrubber_do.screen.attachEvent("onmousedown", self.mainScrubberOnDownHandler);
			}
			
			self.disableMainScrubber();
		};
		
		this.mainScrubberOnOverHandler =  function(e){
			if(self.isMainScrubberDisabled_bl) return;
		};
		
		this.mainScrubberOnOutHandler =  function(e){
			if(self.isMainScrubberDisabled_bl) return;
		};
		
		this.mainScrubberOnDownHandler =  function(e){
			if(self.isMainScrubberDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			self.isMainScrubberScrubbing_bl = true;
			var viewportMouseCoordinates = FWDMLPUtils.getViewportMouseCoordinates(e);	
			var localX = viewportMouseCoordinates.screenX - self.mainScrubber_do.getGlobalX();
			
			if(localX < 0){
				localX = 0;
			}else if(localX > self.mainScrubberWidth - self.scrubbersOffsetWidth){
				localX = self.mainScrubberWidth - self.scrubbersOffsetWidth;
			}	
			var percentScrubbed = localX/self.mainScrubberWidth;
			if(!FWDMLP.hasHTML5Audio && localX >= self.mainProgress_do.w) localX = self.mainProgress_do.w;
			var playlistItemPercentScrubb = localX/self.mainScrubberWidth;
			
			if(self.disable_do) self.addChild(self.disable_do);
			
			self.updateMainScrubber(percentScrubbed);
			
			
			self.dispatchEvent(FWDRVPController.START_TO_SCRUB);
			self.dispatchEvent(FWDRVPController.SCRUB_PLAYLIST_ITEM, {percent:playlistItemPercentScrubb});
			self.dispatchEvent(FWDRVPController.SCRUB, {percent:percentScrubbed});
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					window.addEventListener("MSPointerMove", self.mainScrubberMoveHandler);
					window.addEventListener("MSPointerUp", self.mainScrubberEndHandler);
				}else{
					window.addEventListener("touchmove", self.mainScrubberMoveHandler);
					window.addEventListener("touchend", self.mainScrubberEndHandler);
				}
			}else{
				if(window.addEventListener){
					window.addEventListener("mousemove", self.mainScrubberMoveHandler);
					window.addEventListener("mouseup", self.mainScrubberEndHandler);		
				}else if(document.attachEvent){
					document.attachEvent("onmousemove", self.mainScrubberMoveHandler);
					document.attachEvent("onmouseup", self.mainScrubberEndHandler);		
				}
			}
		};
		
		this.mainScrubberMoveHandler = function(e){
			if(e.preventDefault) e.preventDefault();
			var viewportMouseCoordinates = FWDMLPUtils.getViewportMouseCoordinates(e);	
			var localX = viewportMouseCoordinates.screenX - self.mainScrubber_do.getGlobalX();
			
			if(localX < 0){
				localX = 0;
			}else if(localX > self.mainScrubberWidth - self.scrubbersOffsetWidth){
				localX = self.mainScrubberWidth - self.scrubbersOffsetWidth;
			}
			
			var percentScrubbed = localX/self.mainScrubberWidth;
			if(!FWDMLP.hasHTML5Audio && localX >= self.mainProgress_do.w) localX = self.mainProgress_do.w;
			var playlistItemPercentScrubb = localX/self.mainScrubberWidth;
			
			self.updateMainScrubber(percentScrubbed);
			self.dispatchEvent(FWDRVPController.SCRUB_PLAYLIST_ITEM, {percent:playlistItemPercentScrubb});
			self.dispatchEvent(FWDRVPController.SCRUB, {percent:percentScrubbed});
		};
		
		this.mainScrubberEndHandler = function(e){
			if(self.disable_do){
				if(self.contains(self.disable_do)) self.removeChild(self.disable_do);
			}
			/*
			if(e){
				if(e.preventDefault) e.preventDefault();
				self.mainScrubberMoveHandler(e);
			}
			*/
			self.dispatchEvent(FWDRVPController.STOP_TO_SCRUB);
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					window.removeEventListener("MSPointerMove", self.mainScrubberMoveHandler);
					window.removeEventListener("MSPointerUp", self.mainScrubberEndHandler);
				}else{
					window.removeEventListener("touchmove", self.mainScrubberMoveHandler);
					window.removeEventListener("touchend", self.mainScrubberEndHandler);
				}
			}else{
				if(window.removeEventListener){
					window.removeEventListener("mousemove", self.mainScrubberMoveHandler);
					window.removeEventListener("mouseup", self.mainScrubberEndHandler);		
				}else if(document.detachEvent){
					document.detachEvent("onmousemove", self.mainScrubberMoveHandler);
					document.detachEvent("onmouseup", self.mainScrubberEndHandler);		
				}
			}
		};
		
		this.disableMainScrubber = function(){
			if(!self.mainScrubber_do) return;
			self.isMainScrubberDisabled_bl = true;
			self.mainScrubber_do.setButtonMode(false);
			self.updateMainScrubber(0);
			self.updatePreloaderBar(0);
			self.mainScrubberEndHandler();
		};
		
		this.enableMainScrubber = function(){
			if(!self.mainScrubber_do) return;
			self.isMainScrubberDisabled_bl = false;
			self.mainScrubber_do.setButtonMode(true);
		};
		
		this.updateMainScrubber = function(percent){
			if(!self.mainScrubber_do || isNaN(percent)) return;
			var finalWidth = parseInt(percent * self.mainScrubberWidth); 
			
			self.percentPlayed = percent;
			if(!FWDMLP.hasHTML5Audio && finalWidth >= self.mainProgress_do.w) finalWidth = self.mainProgress_do.w;
			
			if(finalWidth < 1 && self.isMainScrubberLineVisible_bl){
				self.isMainScrubberLineVisible_bl = false;
				FWDMLPTweenMax.to(self.mainScrubberBarLine_do, .5, {alpha:0});
			}else if(finalWidth > 2 && !self.isMainScrubberLineVisible_bl){
				self.isMainScrubberLineVisible_bl = true;
				FWDMLPTweenMax.to(self.mainScrubberBarLine_do, .5, {alpha:1});
			}
			
			self.mainScrubberDrag_do.setWidth(finalWidth);
			if(finalWidth > self.mainScrubberWidth - self.scrubbersOffsetWidth) finalWidth = self.mainScrubberWidth - self.scrubbersOffsetWidth;
			FWDMLPTweenMax.to(self.mainScrubberBarLine_do, .8, {x:finalWidth, ease:Expo.easeOut});
		};
		
		this.updatePreloaderBar = function(percent){
			
			if(!self.mainProgress_do) return;
			var finalWidth = parseInt(percent * self.mainScrubberWidth); 
			
			if(percent == 1){
				self.mainProgress_do.setY(-30);
			}else if(self.mainProgress_do.y != 0 && percent!= 1){
				self.mainProgress_do.setY(0);
			}
			if(finalWidth > self.mainScrubberWidth - self.scrubbersOffsetWidth) finalWidth = self.mainScrubberWidth - self.scrubbersOffsetWidth;
			if(finalWidth < 0) finalWidth = 0;
			self.mainProgress_do.setWidth(finalWidth);
		};
		
		//########################################//
		/* Setup time*/
		//########################################//
		this.setupTime = function(){
			self.currentTime_do = new FWDMLPDisplayObject("div");
			self.currentTime_do.hasTransform3d_bl = false;
			self.currentTime_do.hasTransform2d_bl = false;
			self.currentTime_do.getStyle().fontFamily = "Arial";
			self.currentTime_do.getStyle().fontSize= "12px";
			self.currentTime_do.getStyle().whiteSpace= "nowrap";
			self.currentTime_do.getStyle().textAlign = "left";
			self.currentTime_do.getStyle().color = self.timeColor_str;
			self.currentTime_do.getStyle().fontSmoothing = "antialiased";
			self.currentTime_do.getStyle().webkitFontSmoothing = "antialiased";
			self.currentTime_do.getStyle().textRendering = "optimizeLegibility";	
			//self.currentTime_do.setBkColor("#FF0000");
			self.mainHolder_do.addChild(self.currentTime_do);
			
			self.totalTime_do = new FWDMLPDisplayObject("div");
			self.totalTime_do.hasTransform3d_bl = false;
			self.totalTime_do.hasTransform2d_bl = false;
			self.totalTime_do.getStyle().fontFamily = "Arial";
			self.totalTime_do.getStyle().fontSize= "12px";
			self.totalTime_do.getStyle().whiteSpace= "nowrap";
			self.totalTime_do.getStyle().textAlign = "right";
			self.totalTime_do.getStyle().color = self.timeColor_str;
			self.totalTime_do.getStyle().fontSmoothing = "antialiased";
			self.totalTime_do.getStyle().webkitFontSmoothing = "antialiased";
			self.totalTime_do.getStyle().textRendering = "optimizeLegibility";	
			//self.totalTime_do.setBkColor("#FF0000");
			self.mainHolder_do.addChild(self.totalTime_do);
			
			self.updateTime();
			setTimeout(function(){
				if(self == null) return;
				self.timeHeight = self.currentTime_do.getHeight();
				self.currentTime_do.h = self.timeHeight;
				self.totalTime_do.h = self.timeHeight;
				self.stageWidth = parent.stageWidth;
				self.positionButtons();
			}, 50);
		};
		
		this.updateTime = function(currentTime, totalTime){
			
			if(!self.currentTime_do || !totalTime) return;
			
			if(totalTime == "00:00") totalTime = currentTime;
			
			self.currentTime_do.setInnerHTML(currentTime);
			self.totalTime_do.setInnerHTML(totalTime);
			
			if(currentTime.length != self.lastTotalTimeLength
			  || totalTime.length != self.lastCurTimeLength){
				var currentTimeTempW = self.currentTime_do.offsetWidth;
				var totalTimeTempW = self.totalTime_do.offsetWidth;
				
				self.currentTime_do.w = currentTimeTempW;
				self.totalTime_do.w = totalTimeTempW;
				
				self.positionButtons();
				
				setTimeout(function(){
					self.currentTime_do.w = self.currentTime_do.getWidth();
					self.totalTime_do.w = self.totalTime_do.getWidth();
					self.positionButtons();
				}, 50);
			
				self.lastCurTimeLength = currentTime.length;
				self.lastTotalTimeLength = totalTime.length;
			}
		};

		
		//################################################//
		/* Setup volume scrubber */
		//################################################//
		this.setupVolumeScrubber = function(){
			
			self.mainVolumeHolder_do =  new FWDMLPDisplayObject("div");
			self.mainVolumeHolder_do.setHeight(self.volumeN_img.height);
			self.mainHolder_do.addChild(self.mainVolumeHolder_do);
			
			//setup volume button
			FWDMLPSimpleButton.setPrototype();
			self.volumeButton_do = new FWDMLPSimpleButton(self.volumeN_img, data.volumeSPath_str, data.volumeDPath_str);
			self.volumeButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.volumeButtonShowToolTipHandler);
			self.volumeButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.volumeButtonOnMouseUpHandler);
			if(!self.allowToChangeVolume_bl) self.volumeButton_do.disable();
					
			//setup background bar
			self.volumeScrubber_do = new FWDMLPDisplayObject("div");
			self.volumeScrubber_do.setHeight(self.scrubbersHeight);
			self.volumeScrubber_do.setX(self.volumeButton_do.w);
			self.volumeScrubber_do.setY(parseInt((self.volumeButton_do.h - self.scrubbersHeight)/2));
			
			self.volumeScrubberBkLeft_do = new FWDMLPDisplayObject("img");
			var volumeScrubberBkLeft_img = new Image();
			volumeScrubberBkLeft_img.src = self.mainScrubberBkLeft_do.screen.src;
			self.volumeScrubberBkLeft_do.setScreen(volumeScrubberBkLeft_img);
			self.volumeScrubberBkLeft_do.setWidth(self.mainScrubberBkLeft_do.w);
			self.volumeScrubberBkLeft_do.setHeight(self.mainScrubberBkLeft_do.h);
			
			self.volumeScrubberBkRight_do = new FWDMLPDisplayObject("img");
			var volumeScrubberBkRight_img = new Image();
			volumeScrubberBkRight_img.src = self.mainScrubberBkRight_do.screen.src;
			self.volumeScrubberBkRight_do.setScreen(volumeScrubberBkRight_img);
			self.volumeScrubberBkRight_do.setWidth(self.mainScrubberBkRight_do.w);
			self.volumeScrubberBkRight_do.setHeight(self.mainScrubberBkRight_do.h);

			
			var middleImage = new Image();
			middleImage.src = self.volumeScrubberBkMiddlePath_str;
			
			if(self.isMobile_bl){
				self.volumeScrubberBkMiddle_do = new FWDMLPDisplayObject("div");	
				self.volumeScrubberBkMiddle_do.getStyle().background = "url('" + self.volumeScrubberBkMiddlePath_str + "')";
			}else{
				self.volumeScrubberBkMiddle_do = new FWDMLPDisplayObject("img");
				self.volumeScrubberBkMiddle_do.setScreen(middleImage);
			}
				
			self.volumeScrubberBkMiddle_do.setHeight(self.scrubbersHeight);
			self.volumeScrubberBkMiddle_do.setX(self.scrubbersBkLeftAndRightWidth);
			
			//setup darg bar.
			self.volumeScrubberDrag_do = new FWDMLPDisplayObject("div");
			self.volumeScrubberDrag_do.setHeight(self.scrubbersHeight);
		
			self.volumeScrubberDragLeft_do = new FWDMLPDisplayObject("img");
			self.volumeScrubberDragLeft_do.setScreen(self.volumeScrubberDragLeft_img);
			
			middleImage = new Image();
			middleImage.src = self.volumeScrubberDragMiddlePath_str;
			if(self.isMobile_bl){
				self.volumeScrubberDragMiddle_do = new FWDMLPDisplayObject("div");	
				self.volumeScrubberDragMiddle_do.getStyle().background = "url('" + self.volumeScrubberDragMiddlePath_str + "')";
			}else{
				self.volumeScrubberDragMiddle_do = new FWDMLPDisplayObject("img");
				self.volumeScrubberDragMiddle_do.setScreen(middleImage);
			}
			self.volumeScrubberDragMiddle_do.setHeight(self.scrubbersHeight);
			self.volumeScrubberDragMiddle_do.setX(self.mainScrubberDragLeftWidth);
			
			self.volumeScrubberBarLine_do = new FWDMLPDisplayObject("img");
			var volumeScrubberBarLine_img = new Image();
			volumeScrubberBarLine_img.src = self.mainScrubberBarLine_do.screen.src;
			self.volumeScrubberBarLine_do.setScreen(volumeScrubberBarLine_img);
			self.volumeScrubberBarLine_do.setWidth(self.mainScrubberBarLine_do.w);
			self.volumeScrubberBarLine_do.setHeight(self.mainScrubberBarLine_do.h);
			self.volumeScrubberBarLine_do.setAlpha(0);
			self.volumeScrubberBarLine_do.hasTransform3d_bl = false;
			self.volumeScrubberBarLine_do.hasTransform2d_bl = false;
			
			
			//add all children
			self.volumeScrubber_do.addChild(self.volumeScrubberBkLeft_do);
			self.volumeScrubber_do.addChild(self.volumeScrubberBkMiddle_do);
			self.volumeScrubber_do.addChild(self.volumeScrubberBkRight_do);
			self.volumeScrubber_do.addChild(self.volumeScrubberBarLine_do);
			self.volumeScrubberDrag_do.addChild(self.volumeScrubberDragLeft_do);
			self.volumeScrubberDrag_do.addChild(self.volumeScrubberDragMiddle_do);
			self.volumeScrubber_do.addChild(self.volumeScrubberDrag_do);
			self.volumeScrubber_do.addChild(self.volumeScrubberBarLine_do);
			
			self.mainVolumeHolder_do.addChild(self.volumeButton_do); 
			self.mainVolumeHolder_do.addChild(self.volumeScrubber_do);
	
			if(self.allowToChangeVolume_bl){
				if(self.isMobile_bl){
					if(self.hasPointerEvent_bl){
						self.volumeScrubber_do.screen.addEventListener("MSPointerOver", self.volumeScrubberOnOverHandler);
						self.volumeScrubber_do.screen.addEventListener("MSPointerOut", self.volumeScrubberOnOutHandler);
						self.volumeScrubber_do.screen.addEventListener("MSPointerDown", self.volumeScrubberOnDownHandler);
					}else{
						self.volumeScrubber_do.screen.addEventListener("touchstart", self.volumeScrubberOnDownHandler);
					}
				}else if(self.screen.addEventListener){	
					self.volumeScrubber_do.screen.addEventListener("mouseover", self.volumeScrubberOnOverHandler);
					self.volumeScrubber_do.screen.addEventListener("mouseout", self.volumeScrubberOnOutHandler);
					self.volumeScrubber_do.screen.addEventListener("mousedown", self.volumeScrubberOnDownHandler);
				}else if(self.screen.attachEvent){
					self.volumeScrubber_do.screen.attachEvent("onmouseover", self.volumeScrubberOnOverHandler);
					self.volumeScrubber_do.screen.attachEvent("onmouseout", self.volumeScrubberOnOutHandler);
					self.volumeScrubber_do.screen.attachEvent("onmousedown", self.volumeScrubberOnDownHandler);
				}
			}
			
			self.enableVolumeScrubber();
			self.updateVolumeScrubber(self.volume);
		};
		
		this.volumeButtonShowToolTipHandler = function(e){
			self.showToolTip(self.volumeButton_do, self.volumeButtonToolTip_do, e);
		};
		
		this.volumeButtonOnMouseUpHandler = function(){
			var vol = self.lastVolume;
			
			if(self.isMute_bl){
				vol = self.lastVolume;
				self.isMute_bl = false;
			}else{
				vol = 0.000001;
				self.isMute_bl = true;
			};
			self.updateVolume(vol);
		};
		
		this.volumeScrubberOnOverHandler =  function(e){
			if(self.isVolumeScrubberDisabled_bl) return;
		};
		
		this.volumeScrubberOnOutHandler =  function(e){
			if(self.isVolumeScrubberDisabled_bl) return;
		};
		
		this.volumeScrubberOnDownHandler =  function(e){
			if(self.isVolumeScrubberDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			var viewportMouseCoordinates = FWDMLPUtils.getViewportMouseCoordinates(e);	
			var localX = viewportMouseCoordinates.screenX - self.volumeScrubber_do.getGlobalX();
			
			if(localX < 0){
				localX = 0;
			}else if(localX > self.volumeScrubberWidth - self.scrubbersOffsetWidth){
				localX = self.volumeScrubberWidth - self.scrubbersOffsetWidth;
			}
			var percentScrubbed = localX/self.volumeScrubberWidth;
			
			if(self.disable_do) self.addChild(self.disable_do);
			self.lastVolume = percentScrubbed;
			self.updateVolume(percentScrubbed);
			
			self.dispatchEvent(FWDRVPController.VOLUME_START_TO_SCRUB);
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					window.addEventListener("MSPointerMove", self.volumeScrubberMoveHandler);
					window.addEventListener("MSPointerUp", self.volumeScrubberEndHandler);
				}else{
					window.addEventListener("touchmove", self.volumeScrubberMoveHandler);
					window.addEventListener("touchend", self.volumeScrubberEndHandler);
				}
			}else{
				if(window.addEventListener){
					window.addEventListener("mousemove", self.volumeScrubberMoveHandler);
					window.addEventListener("mouseup", self.volumeScrubberEndHandler);		
				}else if(document.attachEvent){
					document.attachEvent("onmousemove", self.volumeScrubberMoveHandler);
					document.attachEvent("onmouseup", self.volumeScrubberEndHandler);		
				}
			}
		};
		
		this.volumeScrubberMoveHandler = function(e){
			if(self.isVolumeScrubberDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			var viewportMouseCoordinates = FWDMLPUtils.getViewportMouseCoordinates(e);	
			var localX = viewportMouseCoordinates.screenX - self.volumeScrubber_do.getGlobalX();
			
			if(localX < 0){
				localX = 0;
			}else if(localX > self.volumeScrubberWidth - self.scrubbersOffsetWidth){
				localX = self.volumeScrubberWidth - self.scrubbersOffsetWidth;
			}
			var percentScrubbed = localX/self.volumeScrubberWidth;
			self.lastVolume = percentScrubbed;
			self.updateVolume(percentScrubbed);
		};
		
		this.volumeScrubberEndHandler = function(){
			self.dispatchEvent(FWDRVPController.VOLUME_STOP_TO_SCRUB);
			if(self.disable_do){
				if(self.contains(self.disable_do)) self.removeChild(self.disable_do);
			}
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					window.removeEventListener("MSPointerMove", self.volumeScrubberMoveHandler);
					window.removeEventListener("MSPointerUp", self.volumeScrubberEndHandler);
				}else{
					window.removeEventListener("touchmove", self.volumeScrubberMoveHandler);
					window.removeEventListener("touchend", self.volumeScrubberEndHandler);
				}
			}else{
				if(window.removeEventListener){
					window.removeEventListener("mousemove", self.volumeScrubberMoveHandler);
					window.removeEventListener("mouseup", self.volumeScrubberEndHandler);		
				}else if(document.detachEvent){
					document.detachEvent("onmousemove", self.volumeScrubberMoveHandler);
					document.detachEvent("onmouseup", self.volumeScrubberEndHandler);		
				}
			}
		};
		
		this.disableVolumeScrubber = function(){
			self.isVolumeScrubberDisabled_bl = true;
			self.volumeScrubber_do.setButtonMode(false);
			self.volumeScrubberEndHandler();
		};
		
		this.enableVolumeScrubber = function(){
			self.isVolumeScrubberDisabled_bl = false;
			self.volumeScrubber_do.setButtonMode(true);
		};
		
		this.updateVolumeScrubber = function(percent){
			var finalWidth = parseInt(percent * self.volumeScrubberWidth); 
			
			self.volumeScrubberDrag_do.setWidth(finalWidth);
			
			if(finalWidth < 1 && self.isVolumeScrubberLineVisible_bl){
				self.isVolumeScrubberLineVisible_bl = false;
				FWDMLPTweenMax.to(self.volumeScrubberBarLine_do, .5, {alpha:0});
			}else if(finalWidth > 1 && !self.isVolumeScrubberLineVisible_bl){
				self.isVolumeScrubberLineVisible_bl = true;
				FWDMLPTweenMax.to(self.volumeScrubberBarLine_do, .5, {alpha:1});
			}
			
			if(finalWidth > self.volumeScrubberWidth - self.scrubbersOffsetWidth) finalWidth = self.volumeScrubberWidth - self.scrubbersOffsetWidth;
			FWDMLPTweenMax.to(self.volumeScrubberBarLine_do, .8, {x:finalWidth, ease:Expo.easeOut});
		};
		
		this.updateVolume = function(volume){
			self.volume = volume;
			if(self.volume <= 0.000001){
				self.isMute_bl = true;
				self.volume = 0.000001;
			}else if(self.voume >= 1){
				self.isMute_bl = false;
				self.volume = 1;
			}else{
				self.isMute_bl = false;
			}
			
			if(self.volume == 0.000001){
				if(self.volumeButton_do) self.volumeButton_do.setDisabledState();
			}else{
				if(self.volumeButton_do) self.volumeButton_do.setEnabledState();
			}
			
			if(self.volumeScrubberBarLine_do) self.updateVolumeScrubber(self.volume);
			self.dispatchEvent(FWDRVPController.CHANGE_VOLUME, {percent:self.volume});
		};
		
		//##########################################//
		/* Setup categories buttons */
		//##########################################//
		this.setupCategoriesButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.categoriesButton_do = new FWDMLPSimpleButton(self.categoriesN_img, data.categoriesSPath_str);
			self.categoriesButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.categoriesButtonShowTooltipHandler);
			self.categoriesButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.categoriesButtonOnMouseUpHandler);
			self.categoriesButton_do.setY(parseInt((self.stageHeight - self.categoriesButton_do.h)/2));
			self.buttons_ar.push(self.categoriesButton_do);
			self.mainHolder_do.addChild(self.categoriesButton_do); 
		};
		
		this.categoriesButtonShowTooltipHandler = function(e){
			self.showToolTip(self.categoriesButton_do, self.playlistsButtonToolTip_do, e.e);
		};
		
		this.categoriesButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.SHOW_CATEGORIES);
		};
		
		this.setCategoriesButtonState = function(state){	
			if(!self.categoriesButton_do) return;
			if(state == "selected"){
				self.categoriesButton_do.setSelected();
			}else if(state == "unselected"){
				self.categoriesButton_do.setUnselected();
			}
		};
		
		//##########################################//
		/* Setup loop button */
		//#########################################//
		this.setupLoopButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.loopButton_do = new FWDMLPSimpleButton(self.replayN_img, data.replaySPath_str, undefined, true);
			self.loopButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.loopButtonShowTooltipHandler);
			self.loopButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.loopButtonOnMouseUpHandler);
			self.loopButton_do.setY(parseInt((self.stageHeight - self.loopButton_do.h)/2));
			self.buttons_ar.push(self.loopButton_do);
			self.mainHolder_do.addChild(self.loopButton_do); 
			if(self.loop_bl) self.setLoopStateButton("selected");
		};
		
		
		this.loopButtonShowTooltipHandler = function(e){
			self.showToolTip(self.loopButton_do, self.loopButtonToolTip_do, e.e);
		};
		
		this.loopButtonOnMouseUpHandler = function(){
			if(self.loopButton_do.isSelectedFinal_bl){
				self.dispatchEvent(FWDRVPController.DISABLE_LOOP);
			}else{
				self.dispatchEvent(FWDRVPController.ENABLE_LOOP);
			}
		};
		
		this.setLoopStateButton = function(state){	
			if(!self.loopButton_do) return;
			if(state == "selected"){
				self.loopButton_do.setSelected();
			}else if(state == "unselected"){
				self.loopButton_do.setUnselected();
			}
		};
		
		//##########################################//
		/* Setup download button */
		//#########################################//
		this.setupDownloadButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.downloadButton_do = new FWDMLPSimpleButton(self.downloaderN_img, data.downloaderSPath_str);
			self.downloadButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.downloadButtonShowToolTipHandler);
			self.downloadButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.downloadButtonOnMouseUpHandler);
			self.downloadButton_do.setX(-300);
			self.downloadButton_do.setY(parseInt((self.stageHeight - self.downloadButton_do.h)/2));
			//self.buttons_ar.push(self.downloadButton_do);
			self.mainHolder_do.addChild(self.downloadButton_do); 
		};
		
		this.downloadButtonShowToolTipHandler = function(e){
			self.showToolTip(self.downloadButton_do, self.downloadButtonToolTip_do, e.e);
		};
		
		this.downloadButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.DOWNLOAD_MP3);
		};
		
		//##########################################//
		/* Setup shuffle button */
		//#########################################//
		this.setupShuffleButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.shuffleButton_do = new FWDMLPSimpleButton(self.shuffleN_img, data.shuffleSPath_str, undefined, true);
			self.shuffleButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.shuffleButtonShowToolTipHandler);
			self.shuffleButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.shuffleButtonOnMouseUpHandler);
			self.shuffleButton_do.setY(parseInt((self.stageHeight - self.shuffleButton_do.h)/2));
			self.buttons_ar.push(self.shuffleButton_do);
			self.mainHolder_do.addChild(self.shuffleButton_do); 
			if(!self.loop_bl && self.shuffle_bl) self.setShuffleButtonState("selected");
		};
		
		this.shuffleButtonShowToolTipHandler = function(e){
			self.showToolTip(self.shuffleButton_do, self.shuffleButtonToolTip_do, e.e);
		};
		
		this.shuffleButtonOnMouseUpHandler = function(){
			if(self.shuffleButton_do.isSelectedFinal_bl){
				self.dispatchEvent(FWDRVPController.DISABLE_SHUFFLE);
			}else{
				self.dispatchEvent(FWDRVPController.ENABLE_SHUFFLE);
			}
		};
		
		this.setShuffleButtonState = function(state){	
			if(!self.shuffleButton_do) return;
			if(state == "selected"){
				self.shuffleButton_do.setSelected();
			}else if(state == "unselected"){
				self.shuffleButton_do.setUnselected();
			}
		};
	
		//##########################################//
		/* Setup facebook button */
		//#########################################//
		this.setupFacebookButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.facebookButton_do = new FWDMLPSimpleButton(self.facebookN_img, data.facebookSPath_str);
			self.facebookButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.facebookButtonShowToolTipHandler);
			self.facebookButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.faceboolButtonOnMouseUpHandler);
			self.facebookButton_do.setY(parseInt((self.stageHeight - self.facebookButton_do.h)/2));
			self.buttons_ar.push(self.facebookButton_do);
			self.mainHolder_do.addChild(self.facebookButton_do); 
		};
		
		this.facebookButtonShowToolTipHandler = function(e){
			self.showToolTip(self.facebookButton_do, self.facebookButtonToolTip_do, e.e);
		};
		
		this.faceboolButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.FACEBOOK_SHARE);
		};
		
		//##########################################//
		/* Setup popup button */
		//#########################################//
		this.setupPopupButton = function(){
			FWDMLPSimpleButton.setPrototype();
			self.popupButton_do = new FWDMLPSimpleButton(self.popupN_img, data.popupSPath_str);
			self.popupButton_do.addListener(FWDMLPSimpleButton.SHOW_TOOLTIP, self.popupButtonShowToolTipHandler);
			self.popupButton_do.addListener(FWDMLPSimpleButton.MOUSE_UP, self.popupButtonOnMouseUpHandler);
			self.popupButton_do.setY(parseInt((self.stageHeight - self.popupButton_do.h)/2));
			self.buttons_ar.push(self.popupButton_do);
			self.mainHolder_do.addChild(self.popupButton_do); 
		};
		
		this.popupButtonShowToolTipHandler = function(e){
			self.showToolTip(self.popupButton_do, self.populButtonToolTip_do, e.e);
		};
		
		this.popupButtonOnMouseUpHandler = function(){
			self.dispatchEvent(FWDRVPController.POPUP);
		};
		
		//#########################################//
		/* disable all buttons except categories */
		//########################################//
		this.disableControllerWhileLoadingPlaylist = function(){
			self.prevButton_do.disable();
			self.playPauseButton_do.disable();
			self.nextButton_do.disable();
			if(self.playlistButton_do) self.playlistButton_do.disable();
			if(self.facebookButton_do) self.facebookButton_do.disable();
			self.updateTime("...", "...");
			self.setTitle("...");
		};
		
		this.enableControllerWhileLoadingPlaylist = function(){
			self.prevButton_do.enable();
			self.playPauseButton_do.enable();
			self.nextButton_do.enable();
			if(self.playlistButton_do) self.playlistButton_do.enable();
			if(self.facebookButton_do) self.facebookButton_do.enable();
		};
		
		this.init();
	};
	
	/* set prototype */
	FWDRVPController.setPrototype = function(){
		FWDRVPController.prototype = new FWDMLPDisplayObject("div");
	};
	
	FWDRVPController.FACEBOOK_SHARE = "facebookShare";
	FWDRVPController.PLAY_NEXT = "playNext";
	FWDRVPController.PLAY_PREV = "playPrev";
	FWDRVPController.PLAY = "play";
	FWDRVPController.PAUSE = "pause";
	FWDRVPController.VOLUME_START_TO_SCRUB = "volumeStartToScrub";
	FWDRVPController.VOLUME_STOP_TO_SCRUB = "volumeStopToScrub";
	FWDRVPController.START_TO_SCRUB = "startToScrub";
	FWDRVPController.SCRUB = "scrub";
	FWDRVPController.SCRUB_PLAYLIST_ITEM = "scrubPlaylistItem";
	FWDRVPController.STOP_TO_SCRUB = "stopToScrub";
	FWDRVPController.CHANGE_VOLUME = "changeVolume";
	FWDRVPController.SHOW_CATEGORIES = "showCategories";
	FWDRVPController.SHOW_PLAYLIST = "showPlaylist";
	FWDRVPController.HIDE_PLAYLIST = "hidePlaylist";
	FWDRVPController.ENABLE_LOOP = "enableLoop";
	FWDRVPController.DISABLE_LOOP = "disableLoop";
	FWDRVPController.ENABLE_SHUFFLE = "enableShuffle";
	FWDRVPController.DISABLE_SHUFFLE = "disableShuffle";
	FWDRVPController.POPUP = "popup";
	FWDRVPController.DOWNLOAD_MP3 = "downloadMp3";
	
	
	
	FWDRVPController.prototype = null;
	window.FWDRVPController = FWDRVPController;
	
}());