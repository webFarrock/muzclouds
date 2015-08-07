/* Gallery */
(function (window){
	
	var FWDMLP = function(props){
		
		var self = this;
	
		/* init gallery */
		self.init = function(){
		
			TweenLite.ticker.useRAF(false);
			this.props_obj = props;
			 
			this.instanceName_str = this.props_obj.instanceName;
			if(!this.instanceName_str){
				alert("FWDMLP instance name is requires please make sure that the instanceName parameter exsists and it's value is uinique.");
				return;
			}
			
			if(window[this.instanceName_str]){
				alert("FWDMLP instance name " + this.instanceName_str +  " is already defined and contains a different instance reference, set a different instance name.");
				return;
			}else{
				window[this.instanceName_str] = this;
			}
		
			if(!this.props_obj){
				alert("FWDMLP constructor properties object is not defined!");
				return;
			}
			
			this.useOnlyAPI_bl = self.props_obj.useOnlyAPI; 
			this.useOnlyAPI_bl = self.useOnlyAPI_bl == "yes" ? true : false;
			
			if(!this.props_obj.parentId && !this.useOnlyAPI_bl){		
				alert("Property parentId is not defined in the FWDMLP constructor, self property represents the div id into which the megazoom is added as a child!");
				return;
			}
			
			if(!FWDMLPUtils.getChildById(self.props_obj.parentId) && !this.useOnlyAPI_bl){
				alert("FWDMLP holder div is not found, please make sure that the div exsists and the id is correct! " + self.props_obj.parentId);
				return;
			}

			this.stageContainer = FWDMLPUtils.getChildById(self.props_obj.parentId);
			this.listeners = {events_ar:[]};
			this.ws = null;
			this.data = null;
			this.customContextMenu_do = null;
			this.info_do = null;
			this.main_do = null;
			this.preloader_do = null;
			this.controller_do = null;
			this.categories_do = null;
			this.audioScreen_do = null;
			this.flash_do = null;
			this.flashObject = null;
			this.facebookShare = null;
			
			this.flashObjectMarkup_str =  null;
			this.popupWindowBackgroundColor = this.props_obj.popupWindowBackgroundColor || "#000000";
			
			this.prevCatId = -1;
			this.catId = -1;
			this.id = -1;
			this.prevId = -1;
			this.lastPercentPlayed = 0;
			this.totalAudio = 0;
			this.stageWidth = 0;
			this.stageHeight = 0;
			this.maxWidth = self.props_obj.maxWidth || 2000;
			this.maxHeight = 0;
			this.popupWindowWidth = self.props_obj.popupWindowWidth || 500;
			this.popupWindowHeight = self.props_obj.popupWindowHeight || 400;
			if(FWDMLPUtils.isIE) self.popupWindowHeight -= 4;
			
			setTimeout(function(){
				self.originalPopupWidth = window.outerWidth;
				self.originalPopupHeight = window.outerHeight;
			}, 200);
		
			this.resizeHandlerId_to;
			this.resizeHandler2Id_to;
			this.hidePreloaderId_to;
			this.orientationChangeId_to;
			this.showCatWidthDelayId_to;
			
			this.hasOpenedInPopup_bl = false;
			this.isAPIReady_bl = false;
			this.isPlaylistLoaded_bl = false;
			this.isFlashScreenReady_bl = false;
			this.orintationChangeComplete_bl = true;
			this.useDeepLinking_bl = self.props_obj.useDeepLinking;
			this.useDeepLinking_bl = self.useDeepLinking_bl == "yes" ? true : false;
			this.openInPopup_bl = false;
			
			setTimeout(function(){
				try{
					if(window.opener 
						&& window.opener.openedPlayerInstance 
						&& window.opener.openedPlayerInstance == self.instanceName_str){
						self.openInPopup_bl = true;
						self.popupWindow = window.opener[self.instanceName_str];
						window.opener[self.instanceName_str].removeAndDisablePlayer();
					}else{
						if(window.opener 
						&& window.opener.openedPlayerInstance 
						&& window.opener.openedPlayerInstance != self.instanceName_str){
							return;
						}
					}
				}catch(e){}
				
				self.isMobile_bl = FWDMLPUtils.isMobile;
				self.hasPointerEvent_bl = FWDMLPUtils.hasPointerEvent;
				self.setupMainDo();
				self.startResizeHandler();
				self.setupInfo();
				self.setupData();
			}, 49);
			
		
			FWDMLP.instaces_ar.push(this);	
		};
		
		this.popup = function(){
			if(self.popupWindow && !self.popupWindow.closed) return
			var myWindow;
			var left = (screen.width/2)-(self.popupWindowWidth/2);
			var top = (screen.height/2)-(self.popupWindowHeight/2);
			var loc = "no";
			if(FWDMLPUtils.isSafari) loc = "yes";
			
			try{
				if(FWDMLPUtils.isMobile){
					self.popupWindow = window.open(location.href);
				}else{
					self.popupWindow = window.open(location.href,"",'location='+loc+', width='+self.popupWindowWidth+', height='+self.popupWindowHeight+', top='+top+', left='+left);
				}
				
				if(self.popupWindow){
					self.stageContainer.style.display = "none";
					if(self.preloader_do) self.preloader_do.hide(false);
					self.data.closeData();
					self.stop();
					window.openedPlayerInstance = self.instanceName_str;
					self.hasOpenedInPopup_bl = true;
					self.isAPIReady_bl = false;
				}
				self.stopResizeHandler();
				self.dispatchEvent(FWDMLP.POPUP);
			}catch(e){
			}
		};
		
		
		this.removeAndDisablePlayer = function(){
			try{
				self.stageContainer.style.display = "none";
			}catch(e){}
		};
		
		//#############################################//
		/* setup main do */
		//#############################################//
		self.setupMainDo = function(){
			self.main_do = new FWDMLPDisplayObject("div", "relative");
			self.main_do.getStyle().msTouchAction = "none";
			self.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
			self.main_do.setBackfaceVisibility();
			self.main_do.setOverflow("visible");
			if(!FWDMLPUtils.isMobile || (FWDMLPUtils.isMobile && FWDMLPUtils.hasPointerEvent)) self.main_do.setSelectable(false);
			
			if(self.openInPopup_bl){
				if(!FWDMLPUtils.isIEAndLessThen9) document.getElementsByTagName("body")[0].style.display = "none";
				document.documentElement.appendChild(self.main_do.screen);
				self.main_do.setPosition("fixed");
				self.main_do.getStyle().zIndex = "2147483646";
				document.documentElement.style.overflow = "hidden";
				document.documentElement.style.backgroundColor = self.popupWindowBackgroundColor;	
				self.main_do.setBkColor(self.popupWindowBackgroundColor);
				self.main_do.getStyle().width = "100%";
				self.main_do.setHeight(3000);
			}else{
				self.stageContainer.style.overflow = "hidden";
				self.stageContainer.style.height = "0px";
				self.stageContainer.appendChild(self.main_do.screen);
			}
			
		};
		
		//#############################################//
		/* setup info_do */
		//#############################################//
		self.setupInfo = function(){
			FWDMLPInfo.setPrototype();
			self.info_do = new FWDMLPInfo(self);
		};	
		
		//#############################################//
		/* resize handler */
		//#############################################//
		self.startResizeHandler = function(){
			if(window.addEventListener){
				window.addEventListener("resize", self.onResizeHandler);
			}else if(window.attachEvent){
				window.attachEvent("onresize", self.onResizeHandler);
			}
			self.onResizeHandler(true);
			self.resizeHandlerId_to = setTimeout(function(){self.resizeHandler(true);}, 50);
		};
		
		self.stopResizeHandler = function(){
			clearTimeout(self.resizeHandlerId_to);
			clearTimeout(self.resizeHandler2Id_to);
			clearTimeout(self.orientationChangeId_to);
			if(window.removeEventListener){
				window.removeEventListener("resize", self.onResizeHandler);
			}else if(window.detachEvent){
				window.detachEvent("onresize", self.onResizeHandler);
			}	
		};
		
		self.onResizeHandler = function(e){
			self.resizeHandler();
			clearTimeout(self.resizeHandler2Id_to);
			self.resizeHandler2Id_to = setTimeout(function(){self.resizeHandler();}, 300);
		};
		
		self.resizeHandler = function(overwrite){
			
			if(!self.openInPopup_bl){
				self.stageContainer.style.width = "100%";
				if(self.stageContainer.offsetWidth > self.maxWidth && !self.openInPopup_bl){
					self.stageContainer.style.width = self.maxWidth + "px";
				}
				self.stageWidth = self.stageContainer.offsetWidth;
				if(self.controller_do) self.maxHeight = self.controller_do.h;
				
				self.stageHeight = self.maxHeight;
				
				self.main_do.setWidth(self.stageWidth);
			}else{
				self.ws = FWDMLPUtils.getViewportSize();
				self.stageWidth = self.ws.w;
			}
			
			if(self.preloader_do) self.positionPreloader();
			if(self.controller_do) self.controller_do.resizeAndPosition();
			if(self.categories_do) self.categories_do.resizeAndPosition();
			if(self.info_do && self.info_do.isShowed_bl) self.info_do.positionAndResize();
			
			if(self.data && !overwrite){
				self.setStageContainerHeight(false);
			}else{
				self.setStageContainerHeight(true);
			}
			
		};
		
		//#############################################//
		/* resize main container */
		//#############################################//
		this.setStageContainerHeight = function(animate){
			if(!self.controller_do){
				if(!self.openInPopup_bl){
					self.main_do.setHeight(self.stageHeight);
					self.stageContainer.style.height = self.stageHeight + "px";
				}
				return;
			}
			
			if(self.openInPopup_bl){
				if(!self.ws) self.ws = FWDMLPUtils.getViewportSize();
				
				self.stageWidth = self.ws.w;
				self.main_do.setX(0);
				self.main_do.setY(0);
				self.main_do.getStyle().width = "100%";
				
				self.main_do.setHeight(3000);
				self.controller_do.setX(0);
				FWDMLPTweenMax.killTweensOf(self.controller_do);
				if(animate){
					//if(self.controller_do.y != 0) FWDMLPTweenMax.to(self.controller_do, .8, {y:0, ease:Expo.easeInOut});
				}else{
					self.controller_do.setY(0);
					self.controller_do.setX(0);
				}
				
				self.controller_do.setY(0);
				self.controller_do.setX(0);
				return;
			}
			
			//if(self.main_do.h == self.stageHeight)  return;
			
			FWDMLPTweenMax.killTweensOf(self.stageContainer);
			if(animate && !FWDMLPUtils.isIEAndLessThen9){
				self.main_do.setHeight(self.controller_do.h);
				FWDMLPTweenMax.to(self.stageContainer, .8, {css:{height:self.controller_do.h}, ease:Expo.easeInOut});
			}else{
				if(!self.controller_do.h) return
				self.main_do.setHeight(self.controller_do.h);
				self.stageContainer.style.height = self.controller_do.h + "px";
			}	
		};
		
		//#############################################//
		/* setup context menu */
		//#############################################//
		this.setupContextMenu = function(){
			self.customContextMenu_do = new FWDMLPContextMenu(self.main_do, self.data.rightClickContextMenu_str);
		};
		
		//#############################################//
		/* Setup main instances */
		//#############################################//
		this.setupMainInstances = function(){
			if(self.controller_do) return;
			if(FWDMLP.hasHTML5Audio) self.setupAudioScreen();
			self.setupController();
			if(self.data.showPlaylistsButtonAndPlaylists_bl) self.setupCategories();
			if(self.data.showFacebookButton_bl) self.setupFacebook();
			self.controller_do.resizeAndPosition();
		};
	
		//#############################################//
		/* setup data */
		//#############################################//
		this.setupData = function(){
			FWDMLPAudioData.setPrototype();
			self.data = new FWDMLPAudioData(self.props_obj, self.rootElement_el, self);
			self.data.addListener(FWDMLPAudioData.PRELOADER_LOAD_DONE, self.onPreloaderLoadDone);
			self.data.addListener(FWDMLPAudioData.LOAD_ERROR, self.dataLoadError);
			self.data.addListener(FWDMLPAudioData.SKIN_PROGRESS, self.dataSkinProgressHandler);
			self.data.addListener(FWDMLPAudioData.SKIN_LOAD_COMPLETE, self.dataSkinLoadComplete);
			self.data.addListener(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE, self.dataPlayListLoadComplete);
		};
		
		self.onPreloaderLoadDone = function(){
			self.maxHeight = self.data.controllerHeight;
			self.setupPreloader();
			if(!self.isMobile_bl) self.setupContextMenu();
			
			self.resizeHandler();
			if(!self.openInPopup_bl) self.main_do.setHeight(self.data.controllerHeight);
			self.stageContainer.style.height = self.data.controllerHeight + "px";
		};
		
		self.dataLoadError = function(e){
			self.maxHeight = 200;
			if(self.preloader_do) self.preloader_do.hide(false);
			self.main_do.addChild(self.info_do);
			self.info_do.showText(e.text);
			setTimeout(self.resizeHandler, 200);
			self.main_do.setHeight(self.data.controllerHeight);
			self.stageContainer.style.height = self.data.controllerHeight + "px";
			self.dispatchEvent(FWDMLP.ERROR, {error:e.text});
		};
		
		self.dataSkinProgressHandler = function(e){};
		
		self.dataSkinLoadComplete = function(){	
			if(self.openInPopup_bl) self.data.showPopupButton_bl = false;
			if(self.useDeepLinking_bl){
				setTimeout(function(){self.setupDL();}, 200);
			}else{
				if(self.openInPopup_bl){
					self.catId = self.popupWindow.catId;
					self.id = self.popupWindow.id;
				}else{
					self.catId = self.data.startAtPlaylist;
					self.id = self.data.startAtTrack;
				}
				self.loadInternalPlaylist();
			}
		};
	
		this.dataPlayListLoadComplete = function(){
			if(!self.isAPIReady_bl) self.dispatchEvent(FWDMLP.READY);
			self.isAPIReady_bl = true;
			self.isPlaylistLoaded_bl = true;
			if(self.openInPopup_bl){
				self.data.autoPlay_bl = true;
				self.data.showPlayListByDefault_bl = true;
			}
		
			if(FWDMLP.hasHTML5Audio){
				self.setupMainInstances();
				self.updatePlaylist();
				self.resizeHandler();
			}else{
				if(self.flash_do){
					self.updatePlaylist();
				}else{
					self.setupFlashScreen();
				}
			}
			
			self.dispatchEvent(FWDMLP.LOAD_PLAYLIST_COMPLETE);
		};
		
		this.updatePlaylist = function(){
			if(self.main_do) if(self.main_do.contains(self.info_do)) self.main_do.removeChild(self.info_do);
			self.preloader_do.hide(true);
			self.prevId = -1;
			self.totalAudio = self.data.playlist_ar.length;
			self.controller_do.enableControllerWhileLoadingPlaylist();
	    	self.controller_do.cleanThumbnails(true);
	    
	    	if(self.openInPopup_bl && self.popupWindow.audioScreen_do) self.lastPercentPlayed = self.popupWindow.audioScreen_do.lastPercentPlayed;
	    	self.setSource();
			if(self.data.autoPlay_bl) self.play();
		};
		
		this.loadInternalPlaylist = function(){
			self.isPlaylistLoaded_bl = false;
			self.data.loadPlaylist(self.catId);
			
			self.stop();
			self.preloader_do.show(true);
			if(self.controller_do){
				self.controller_do.disableControllerWhileLoadingPlaylist();
				self.controller_do.loadThumb();
			}
			
			if(self.isAPIReady_bl) self.dispatchEvent(FWDMLP.START_TO_LOAD_PLAYLIST);
		};
		
		
		//############################################//
		/* update deeplink */
		//############################################//
		this.setupDL = function(){
			FWDAddress.onChange = self.dlChangeHandler;
			self.dlChangeHandler();
		};
		
		this.dlChangeHandler = function(){
			if(self.hasOpenedInPopup_bl) return;
			var mustReset_bl = false;
			
			if(self.categories_do && self.categories_do.isOnDOM_bl){
				self.categories_do.hide();
				return;
			}
			
			self.catId = parseInt(FWDAddress.getParameter("catid"));
			self.id = parseInt(FWDAddress.getParameter("trackid"));
			
			if(self.catId == undefined || self.id == undefined || isNaN(self.catId) || isNaN(self.id)){
				
				self.catId = self.data.startAtPlaylist;
				self.id = self.data.startAtTrack;
				
				mustReset_bl = true;
			}
			
			if(self.catId < 0 || self.catId > self.data.totalCategories - 1 && !mustReset_bl){
				self.catId = self.data.startAtPlaylist;
				self.id = self.data.startAtTrack;
				mustReset_bl = true;
			}
			
			if(self.data.playlist_ar){
				if(self.id < 0 && !mustReset_bl){
					self.id = self.data.startAtTrack;
					mustReset_bl = true;
				}else if(self.prevCatId == self.catId && self.id > self.data.playlist_ar.length - 1  && !mustReset_bl){
					self.id = self.data.playlist_ar.length - 1;
					mustReset_bl = true;
				}
			}
			
			if(mustReset_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
				return;
			}
			
			if(self.prevCatId != self.catId){
				self.loadInternalPlaylist();
				self.prevCatId = self.catId;
			}else{
				self.setSource(false);
				self.play();
				
			}
		};
		
		//#############################################//
		/* setup preloader */
		//#############################################//
		this.setupPreloader = function(){
			FWDMLPPreloader.setPrototype();
			self.preloader_do = new FWDMLPPreloader(self.data.mainPreloader_img, 53, 34, 30, 80, true);
			self.preloader_do.show(true);
			self.main_do.addChild(self.preloader_do);
		};
		
		this.positionPreloader = function(){
			self.preloader_do.setX(parseInt((self.stageWidth - self.preloader_do.w)/2));
			if(self.controller_do){
				self.preloader_do.setY(parseInt((self.controller_do.h - self.preloader_do.h)/2));
			}else{
				self.preloader_do.setY(parseInt((self.maxHeight - self.preloader_do.h)/2));
			}
		};
		
		//###########################################//
		/* setup categories */
		//###########################################//
		this.setupCategories = function(){
			FWDRVPCategories.setPrototype();
			self.categories_do = new FWDRVPCategories(self.data);
			self.categories_do.getStyle().zIndex = "2147483647";
			self.categories_do.addListener(FWDRVPCategories.HIDE_COMPLETE, self.categoriesHideCompleteHandler);
			if(self.data.showPlaylistsByDefault_bl){
				self.showCatWidthDelayId_to = setTimeout(function(){
					self.showCategories();
				}, 1400);
			};
		};
		
		this.categoriesHideCompleteHandler = function(e){
			self.controller_do.setCategoriesButtonState("unselected");
			if(self.customContextMenu_do) self.customContextMenu_do.updateParent(self.main_do);
			
			if(self.useDeepLinking_bl){
				if(self.categories_do.id != self.catId){
					self.catId = self.categories_do.id;
					self.id = 0;
					FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
				}
			}else{
				if(self.catId == self.categories_do.id) return;
				self.catId = self.categories_do.id;
				self.id = 0;
				self.loadInternalPlaylist(self.catId);
			}
			if(self.openInPopup_bl){
				window.resizeTo(self.originalPopupWidth, self.originalPopupHeight);
				//moveTo(parseInt((screen.availWidth - self.originalPopupWidth)/2), parseInt((screen.availHeight - self.originalPopupHeight)/2));
			}
		};
		
		//###########################################//
		/* setup controller */
		//###########################################//
		this.setupController = function(){
			FWDRVPController.setPrototype();
			self.controller_do = new FWDRVPController(self.data, self);
			self.controller_do.addListener(FWDRVPController.POPUP, self.controllerOnPopupHandler);
			self.controller_do.addListener(FWDRVPController.PLAY, self.controllerOnPlayHandler);
			self.controller_do.addListener(FWDRVPController.PLAY_NEXT, self.controllerPlayNextHandler);
			self.controller_do.addListener(FWDRVPController.PLAY_PREV, self.controllerPlayPrevHandler);
			self.controller_do.addListener(FWDRVPController.PAUSE, self.controllerOnPauseHandler);
			self.controller_do.addListener(FWDRVPController.VOLUME_START_TO_SCRUB, self.volumeStartToScrubbHandler);
			self.controller_do.addListener(FWDRVPController.VOLUME_STOP_TO_SCRUB, self.volumeStopToScrubbHandler);
			self.controller_do.addListener(FWDRVPController.START_TO_SCRUB, self.controllerStartToScrubbHandler);
			self.controller_do.addListener(FWDRVPController.SCRUB, self.controllerScrubbHandler);
			self.controller_do.addListener(FWDRVPController.SCRUB_PLAYLIST_ITEM, self.controllerPlaylistItemScrubbHandler);
			self.controller_do.addListener(FWDRVPController.STOP_TO_SCRUB, self.controllerStopToScrubbHandler);
			self.controller_do.addListener(FWDRVPController.CHANGE_VOLUME, self.controllerChangeVolumeHandler);
			self.controller_do.addListener(FWDRVPController.SHOW_CATEGORIES, self.showCategoriesHandler);
			self.controller_do.addListener(FWDRVPController.ENABLE_LOOP, self.enableLoopHandler);
			self.controller_do.addListener(FWDRVPController.DISABLE_LOOP, self.disableLoopHandler);
			self.controller_do.addListener(FWDRVPController.ENABLE_SHUFFLE, self.enableShuffleHandler);
			self.controller_do.addListener(FWDRVPController.DISABLE_SHUFFLE, self.disableShuffleHandler);
			self.controller_do.addListener(FWDRVPController.FACEBOOK_SHARE, self.facebookShareHandler);
			self.controller_do.addListener(FWDRVPController.DOWNLOAD_MP3, self.controllerButtonDownloadMp3Handler);
			self.main_do.addChild(self.controller_do);
			
		};
		
		this.controllerOnPopupHandler = function(){
			self.popup();
		};
		
		this.controllerOnPlayHandler = function(e){
			FWDMLP.pauseAllAudio(self);
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.play();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.playAudio();
			}
		};
		
		this.controllerPlayNextHandler = function(e){
			if(self.data.shuffle_bl){
				self.playShuffle();
			}else{
				self.playNext();
			}
		};
		
		this.controllerPlayPrevHandler = function(e){
			if(self.data.shuffle_bl){
				self.playShuffle();
			}else{
				self.playPrev();
			}
		};
		
		this.controllerOnPauseHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.pause();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.pauseAudio();
			}
		};
		
		this.volumeStartToScrubbHandler = function(e){
		};
		
		this.volumeStopToScrubbHandler = function(e){
		};
		
		this.controllerStartToScrubbHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.startToScrub();
			}else if(self.isFlashScreenReady_bl){
				FWDMLP.pauseAllAudio(self);
				self.flashObject.startToScrub();
			}
		};
		
		this.controllerScrubbHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.scrub(e.percent);
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.scrub(e.percent);
			}
		};
		
		this.controllerPlaylistItemScrubbHandler = function(e){
		};
		
		this.controllerStopToScrubbHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.stopToScrub();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.stopToScrub();
			}
		};
		
		this.controllerChangeVolumeHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.setVolume(e.percent);
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.setVolume(e.percent);
			}
		};
		
		this.showCategoriesHandler = function(e){
			if(self.openInPopup_bl){
				window.resizeTo(self.originalPopupWidth + 200, self.originalPopupHeight + 300);
				//moveTo(parseInt((screen.availWidth - self.originalPopupWidth - 200)/2), parseInt((screen.availHeight - self.originalPopupHeight - 300)/2));
			}
			
			setTimeout(function(){
				self.showCategories();
			}, 10);
			
			self.controller_do.setCategoriesButtonState("selected");
		};
		
		this.enableLoopHandler = function(e){
			self.data.loop_bl = true;
			self.data.shuffle_bl = false;
			self.controller_do.setLoopStateButton("selected");
			self.controller_do.setShuffleButtonState("unselected");
		};
		
		this.disableLoopHandler = function(e){
			self.data.loop_bl = false;
			self.controller_do.setLoopStateButton("unselected");
		};
		
		this.enableShuffleHandler = function(e){
			self.data.shuffle_bl = true;
			self.data.loop_bl = false;
			self.controller_do.setShuffleButtonState("selected");
			self.controller_do.setLoopStateButton("unselected");
		};
		
		this.disableShuffleHandler = function(e){
			self.data.shuffle_bl = false;
			self.controller_do.setShuffleButtonState("unselected");
		};
		
		this.facebookShareHandler = function(e){
			
			if(document.location.protocol == "file:"){
				var error = "Facebook is not allowing sharing local, please test online.";
				self.main_do.addChild(self.info_do);
				self.info_do.showText(error);
				return;
			}
				
			if(self.useDeepLinking_bl){
				var curItem = self.data.playlist_ar[self.id];
				var thumbPath;
			
				if(curItem.thumbPath && curItem.thumbPath.indexOf("//") !=  -1){
					thumbPath = curItem.thumbPath;
				}else if(curItem.thumbPath){
					var absolutePath = location.pathname;
					absolutePath = location.protocol + "//" + location.host + absolutePath.substring(0, absolutePath.lastIndexOf("/") + 1);
					thumbPath = absolutePath + curItem.thumbPath;
				}
				self.facebookShare.share(location.href, curItem.titleText, thumbPath);
			}else{
				self.facebookShare.share(location.href);
			}
		};
		
		this.controllerButtonDownloadMp3Handler = function(e){
			self.downloadMP3();
		};
		
		//###########################################//
		/* setup FWDRVPAudioScreen */
		//###########################################//
		this.setupAudioScreen = function(){	
			FWDRVPAudioScreen.setPrototype();
			self.audioScreen_do = new FWDRVPAudioScreen(self.data.volume, self.data.autoPlay_bl, self.data.loop_bl);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.START, self.audioScreenStartHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.ERROR, self.audioScreenErrorHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.SAFE_TO_SCRUBB, self.audioScreenSafeToScrubbHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.STOP, self.audioScreenStopHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.PLAY, self.audioScreenPlayHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.PAUSE, self.audioScreenPauseHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.UPDATE, self.audioScreenUpdateHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.UPDATE_TIME, self.audioScreenUpdateTimeHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.LOAD_PROGRESS, self.audioScreenLoadProgressHandler);
			self.audioScreen_do.addListener(FWDRVPAudioScreen.PLAY_COMPLETE, self.audioScreenPlayCompleteHandler);
			if(self.useOnlyAPI_bl){
				document.documentElement.appendChild(self.audioScreen_do.screen);
			}else{
				self.main_do.addChild(self.audioScreen_do);	
			}
		};
		
		this.audioScreenStartHandler = function(){
			self.dispatchEvent(FWDMLP.START);
		};
		
		this.audioScreenErrorHandler = function(e){
			var error;
			if(FWDMLP.hasHTML5Audio){
				error = e.text;
				if(self.main_do) self.main_do.addChild(self.info_do);
				if(self.info_do) self.info_do.showText(error);
			}else{
				error = e;
				if(self.main_do) self.main_do.addChild(self.info_do);
				if(self.info_do) self.info_do.showText(error);
			}
			
			self.dispatchEvent(FWDMLP.ERROR, {error:error});
		};
		
		this.audioScreenSafeToScrubbHandler = function(){
			if(self.controller_do) self.controller_do.enableMainScrubber(); 
		};
		
		this.audioScreenStopHandler = function(e){
			if(self.main_do) if(self.main_do.contains(self.info_do)) self.main_do.removeChild(self.info_do);
			if(self.controller_do){
				self.controller_do.showPlayButton();
				self.controller_do.stopEqulizer();
				self.controller_do.disableMainScrubber();
			}
			self.dispatchEvent(FWDMLP.STOP);
		};
		
		this.audioScreenPlayHandler = function(){
			if(self.controller_do){
				self.controller_do.showPauseButton();
				self.controller_do.startEqulizer();
			}
			
			if(self.openInPopup_bl){
				setTimeout(function(){
					if(!self.scrubbedFirstTimeInPopup_bl) self.scrub(self.lastPercentPlayed);
					self.scrubbedFirstTimeInPopup_bl = true;
				},600);
			}
			self.dispatchEvent(FWDMLP.PLAY);
		};
		
		this.audioScreenPauseHandler = function(){
			if(self.controller_do){
				self.controller_do.showPlayButton();
				self.controller_do.stopEqulizer();
			}
			self.dispatchEvent(FWDMLP.PAUSE);
		};
		
		this.audioScreenUpdateHandler = function(e){
			var percent;	
			if(FWDMLP.hasHTML5Audio){
				percent = e.percent;
				if(self.controller_do) self.controller_do.updateMainScrubber(percent);
			}else{
				percent = e;
				if(self.controller_do) self.controller_do.updateMainScrubber(percent);
			}
			self.dispatchEvent(FWDMLP.UPDATE, {percent:percent});
		};
		
		this.audioScreenUpdateTimeHandler = function(e, e2){
			var curTime;
			var totalTime;
			if(FWDMLP.hasHTML5Audio){
				curTime = e.curTime;
				totalTime = e.totalTime;
				if(self.controller_do) self.controller_do.updateTime(curTime, totalTime);
			}else{
				curTime = e;
				totalTime = e2;
				
				if(totalTime.length > curTime.length) curTime = (parseInt(totalTime.substring(0,1)) - 1) + ":" + curTime;
				if(self.controller_do) self.controller_do.updateTime(curTime, totalTime);
			}
		
			self.dispatchEvent(FWDMLP.UPDATE_TIME, {curTime:curTime, totalTime:totalTime});
		};
		
		this.audioScreenLoadProgressHandler = function(e){
			if(FWDMLP.hasHTML5Audio){
				if(self.controller_do) self.controller_do.updatePreloaderBar(e.percent);
			}else{
				if(self.controller_do) self.controller_do.updatePreloaderBar(e);
			}
		};
		
		this.audioScreenPlayCompleteHandler = function(){
			self.dispatchEvent(FWDMLP.PLAY_COMPLETE);
			if(FWDMLP.hasHTML5Audio){
				if(self.data.loop_bl){
					self.audioScreen_do.replay();
				}else if(self.data.shuffle_bl){
					self.playShuffle();
				}else{
					self.playNext();
				}
			}else if(self.isFlashScreenReady_bl){
				if(self.data.loop_bl){
					self.flashObject.replayAudio();
				}else if(self.data.shuffle_bl){
					self.playShuffle();
				}else{
					self.playNext();
				}
			}
		};
		
		//#############################################//
		/* Flash screen... */
		//#############################################//
		this.setupFlashScreen = function(){
			if(self.flash_do) return;
			if(!FWDMLPFlashTest.hasFlashPlayerVersion("9.0.18")){
				if(self.useOnlyAPI_bl){
					alert("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>");
				}else{
					self.main_do.addChild(self.info_do);
					self.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>");
				}
				if(self.preloader_do) self.preloader_do.hide(false);
				return;
			}
			
			self.flash_do = new FWDMLPDisplayObject("div");
			self.flash_do.setBackfaceVisibility();
			self.flash_do.setResizableSizeAfterParent();	
			if(self.useOnlyAPI_bl){
				document.getElementsByTagName("body")[0].appendChild(self.flash_do.screen);
			}else{
				self.main_do.addChild(self.flash_do);
			}
		
			var sourcePath = "not defined!";
			
			self.flashObjectMarkup_str = '<object id="' + (self.instanceName_str +  "1") + '" name="' + (self.instanceName_str +  "1") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + self.data.flashPath_str + '"/><param name="wmode" value="transparent"><param name=FlashVars value="instanceName=' + self.instanceName_str + '&sourcePath=' + sourcePath + '&volume=' + self.data.volume + '&autoPlay=' + self.data.autoPlay_bl + '&loop=' + self.data.loop_bl + '"/><param name = "allowScriptAccess" value="always" /><!--[if !IE]>--><object name="myCom" type="application/x-shockwave-flash" data="' + self.data.flashPath_str + '" width="100%" height="100%"><param name="swliveconnect" value="true"/><param name="wmode" value="transparent"><param name=FlashVars value="instanceName=' + self.instanceName_str + '&sourcePath=' + sourcePath + '&volume=' + self.data.volume + '&autoPlay=' + self.data.autoPlay_bl + '&loop=' + self.data.loop_bl + '"/><!--<![endif]--><!--[if !IE]>--></object><!--<![endif]--></object>';
			self.flash_do.screen.innerHTML = self.flashObjectMarkup_str;
			
			self.flashObject = self.flash_do.screen.firstChild;
			if(!FWDMLPUtils.isIE) self.flashObject = self.flashObject.getElementsByTagName("object")[0];
		};
	
		this.flashScreenIsReady = function(){
			//console.log("flash is ready " + self.instanceName_str)
			self.isFlashScreenReady_bl = true;
			self.setupMainInstances();
			self.updatePlaylist();
		};
		
		this.flashScreenFail = function(){
			self.main_do.addChild(self.info_do);
			self.info_do.showText("External interface error!");
			self.resizeHandler();
		};
		
		
		
		this.loadID3IfPlaylistDisabled = function(){
			var source = self.data.playlist_ar[self.id].source;
			var title = self.data.playlist_ar[self.id].title;
			if(FWDMLPUtils.isIEAndLessThen9){
				var obj = self.data.playlist_ar[self.id];
				if(self.id < 9){
					obj.title = "Track 0" + (self.id + 1);
				}else{
					obj.title = "Track " + (self.id + 1);
				}
				obj.titleText = obj.title;
				self.controller_do.setTitle(obj.title);
				return;
			}
			if(title != "...") return;
			source = source + "?rand=" + parseInt(Math.random() * 99999999);
				
			ID3.loadTags(source, function() {
				var obj = self.data.playlist_ar[self.id];
				var tags = ID3.getAllTags(source);
				var count;
				if(self.data.addCountingToTracks_bl){
					count = self.id + 1;
					if(self.id < 9) count = "0" + (self.id + 1);
					obj.title = "<font color=" + self.data.tracksCountingColor_str + ">" + count + "</font>" + "<font color="  + self.data.tracksCountingLineColor_str + "> - </font>" + tags.artist + " - " +  tags.title;
				}else{
					obj.title = tags.artist + " - " +  tags.title;
				}
				obj.titleText = obj.title;
				self.controller_do.setTitle(obj.title);
			});
		};
		
		//#######################################//
		/* Set source based on id */
		//#######################################//
		this.setSource = function(itemClicked){
			
			//if(self.id == self.prevId) return;
			if(self.id < 0){
				self.id = 0;
			}else if(self.id > self.totalAudio - 1){
				self.id = self.totalAudio - 1;
			}
			
			var audioPath = self.data.playlist_ar[self.id].source;
			
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.setSource(audioPath);
			}else{
				var paths_ar = audioPath.split(",");
				
				for(var i=0; i<paths_ar.length; i++){
					audioPath = paths_ar[i];
					paths_ar[i] = FWDMLPUtils.trim(audioPath);
				}
				
				for(var i=0; i<paths_ar.length; i++){
					if(paths_ar[i].indexOf(".mp3") != -1){
						audioPath = paths_ar[i];
						break;
					}
				}
				self.flashObject.setSource(audioPath);
			}
			
			self.controller_do.stopEqulizer();
			self.controller_do.setTitle(self.data.playlist_ar[self.id].title);
			if(self.data.playlist_ar[self.id].duration == undefined){
				self.controller_do.updateTime("00:00", "00:00");
			}else{
				self.controller_do.updateTime("00:00", FWDMLP.formatTotalTime(self.data.playlist_ar[self.id].duration));
			}
			self.controller_do.loadThumb(self.data.playlist_ar[self.id].thumbPath);
			self.loadID3IfPlaylistDisabled();
			self.resizeHandler();
		};
		
		//##########################################//
		/* Setup facebook */
		//##########################################//
		this.setupFacebook = function(){
			if(document.location.protocol == "file:") return;
			self.facebookShare = new FWDRVPFacebookShare(self.data.facebookAppId_str);
		};
		
		//####################################//
		// API
		//###################################//
		this.loadPlaylist = function(id){
			if(!self.isAPIReady_bl) return;
			if(self.data.prevId == id) return;
			self.catId = id;
			self.id = 0;
			
			if(self.catId < 0){
				self.catId = 0;
			}else if(self.catId > self.data.totalCategories - 1){
				self.catId = self.data.totalCategories - 1;
			};
			if(self.useDeepLinking_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
			}else{
				self.loadInternalPlaylist();
			}
		};
		
		this.playNext = function(){	
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			self.id ++;
			if(self.id < 0){
				self.id = self.totalAudio - 1;
			}else if(self.id > self.totalAudio - 1){
				self.id = 0;
			}
			
			if(self.useDeepLinking_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
			}else{
				self.setSource();
				self.play();
			}
			self.prevId = self.id;
		};
		
		this.playPrev = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			self.id --;	
			if(self.id < 0){
				self.id = self.totalAudio - 1;
			}else if(self.id > self.totalAudio - 1){
				self.id = 0;
			}
			if(self.useDeepLinking_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
			}else{
				self.setSource();
				self.play();
			}
			self.prevId = self.id;
		};
		
		this.playShuffle = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			var tempId = parseInt(Math.random() * self.data.playlist_ar.length);
			while(tempId == self.id) tempId = parseInt(Math.random() * self.data.playlist_ar.length);
			self.id = tempId;	
			if(self.id < 0){
				self.id = self.totalAudio - 1;
			}else if(self.id > self.totalAudio - 1){
				self.id = 0;
			}

			if(self.useDeepLinking_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
			}else{
				self.setSource();
				self.play();
			}
			self.prevId = self.id;
		};
		
		this.playSpecificTrack = function(catId, trackId){	
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			
			self.catId = catId;
			self.id = trackId;
			
			if(self.catId < 0){
				self.catId = 0;
			}else if(self.catId > self.data.totalCategories - 1){
				self.catId = self.data.totalCategories - 1;
			};
			if(self.id < 0) self.id = 0;
			
			if(self.useDeepLinking_bl){
				FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id);
			}else{
				self.setSource();
				self.play();
			}
			self.prevId = self.id;
		};
		
		this.play = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			FWDMLP.pauseAllAudio(self);
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.play();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.playAudio();
			}
		};
		
		this.pause = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.pause();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.pauseAudio();
			}
		};
		
		this.stop = function(){
			if(!self.isAPIReady_bl) return;
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.stop();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.stopAudio();
			}
		};
		
		this.startToScrub = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.startToScrub();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.startToScrub();
			}
		};
		
		this.stopToScrub = function(){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			if(FWDMLP.hasHTML5Audio){
				self.audioScreen_do.stopToScrub();
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.stopToScrub();
			}
		};
		
		this.scrub = function(percent){
			if(!self.isAPIReady_bl || !self.isPlaylistLoaded_bl) return;
			if(isNaN(percent)) return;
			if(percent < 0){
				percent = 0;
			}else if(percent > 1){
				percent = 1;
			}
			if(FWDMLP.hasHTML5Audio){
				if(self.audioScreen_do) self.audioScreen_do.scrub(percent);
			}else if(self.isFlashScreenReady_bl){
				self.flashObject.scrub(percent);
			}
		};
		
		this.setVolume = function(volume){
			if(!self.isAPIReady_bl) return;
			if(self.isMobile_bl) volume = 1;
			self.controller_do.updateVolume(volume);
		};
		
		this.showCategories = function(){
			if(!self.isAPIReady_bl) return;
			if(self.categories_do){
				self.categories_do.show(self.catId);
				if(self.customContextMenu_do) self.customContextMenu_do.updateParent(self.categories_do);
				self.controller_do.setCategoriesButtonState("selected");
			}
		};
		
		this.hideCategories = function(){
			if(!self.isAPIReady_bl) return;
			if(self.categories_do){
				self.categories_do.hide();
				self.controller_do.setCategoriesButtonState("unselected");
			}
		};
		
		this.showPlaylist = function(){
			if(!self.isAPIReady_bl) return;
		};
		
		this.hidePlaylist = function(){
			if(!self.isAPIReady_bl) return;
		};
		
		this.share = function(){
			if(!self.isAPIReady_bl) return;
			self.facebookShareHandler();
		};	
		
		this.getIsAPIReady = function(){
			return self.isAPIReady_bl;
		};
		
		this.getCatId = function(){
			return self.catId;
		};
		
		this.getTrackId = function(){
			return self.id;
		};
		
		this.getTrackTitle = function(){
			if(!self.isAPIReady_bl) return;
			return self.data.playlist_ar[self.id].title;
		};
		
		this.downloadMP3 = function(pId){
			if(document.location.protocol == "file:"){
				var error = "Downloading mp3 files local is not allowed or possible!. To function properly please test online.";
				self.main_do.addChild(self.info_do);
				self.info_do.showText(error);
				return;
			}
			
			if(pId ==  undefined) pId = self.id;
			
			var source = self.data.playlist_ar[pId].downloadPath;
			var sourceName = self.data.playlist_ar[pId].titleText;
			self.data.downloadMp3(source, sourceName);
		};
		
		//###########################################//
		/* event dispatcher */
		//###########################################//
		this.addListener = function (type, listener){
	    	if(!this.listeners) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = this;
	        this.listeners.events_ar.push(event);
	    };
	    
	    this.dispatchEvent = function(type, props){
	    	if(this.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		this.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	   this.removeListener = function(type, listener){
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this 
	        			&& this.listeners.events_ar[i].type === type
	        			&& this.listeners.events_ar[i].listener ===  listener
	        	){
	        		this.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };		
		self.init();
	};
	
	/* set prototype */
	FWDMLP.setPrototype =  function(){
		FWDMLP.prototype = new FWDRVPEventDispatcher();
	};
	
	FWDMLP.pauseAllAudio = function(pAudio){
	
		var totalAudio = FWDMLP.instaces_ar.length;
		var audio;
		
		for(var i=0; i<totalAudio; i++){
			audio = FWDMLP.instaces_ar[i];
			if(audio != pAudio) audio.stop();
		};
	};
	
	FWDMLP.hasHTML5Audio = (function(){
		var soundTest_el = document.createElement("audio");
		var flag = false;
		if(soundTest_el.canPlayType){
			flag = Boolean(soundTest_el.canPlayType('audio/mpeg') == "probably" || soundTest_el.canPlayType('audio/mpeg') == "maybe");
		}
		if(self.isMobile_bl) return true;
		//return false;
		return flag;
	}());
	
	FWDMLP.getAudioFormats = (function(){
		var audio_el = document.createElement("audio");
		if(!audio_el.canPlayType) return;
		var extention_str = "";
		var extentions_ar = [];
		if(audio_el.canPlayType('audio/mpeg') == "probably" || audio_el.canPlayType('audio/mpeg') == "maybe"){
			extention_str += ".mp3";
		}
		
		if(audio_el.canPlayType("audio/ogg") == "probably" || audio_el.canPlayType("audio/ogg") == "maybe"){
			extention_str += ".ogg";
		}
		
		if(audio_el.canPlayType("audio/mp4") == "probably" || audio_el.canPlayType("audio/mp4") == "maybe"){
			extention_str += ".webm";
		}
		
		extentions_ar = extention_str.split(".");
		extentions_ar.shift();
		
		audio_el = null;
		return extentions_ar;
	})();
	
	FWDMLP.hasCanvas = (function(){
		return Boolean(document.createElement("canvas"));
	})();
	
	FWDMLP.formatTotalTime = function(secs){
		
		if(typeof secs == "string" && secs.indexOf(":") != -1){
			if(secs.length <= 5){
				return secs;
			}else{
				return "0:" + secs;
			}
		} 
		
		secs = secs/1000;
		
		var hours = Math.floor(secs / (60 * 60));
		
	    var divisor_for_minutes = secs % (60 * 60);
	    var minutes = Math.floor(divisor_for_minutes / 60);

	    var divisor_for_seconds = divisor_for_minutes % 60;
	    var seconds = Math.ceil(divisor_for_seconds);
	    
	    minutes = (minutes >= 10) ? minutes : "0" + minutes;
	    seconds = (seconds >= 10) ? seconds : "0" + seconds;
	   
	    if(isNaN(seconds)) return "00:00/00:00";
		if(hours > 0){
			 return hours + ":" + minutes + ":" + seconds;
		}else{
			 return  minutes + ":" + seconds;
		}
	};
	

	FWDMLP.getAudioFormats = (function(){
		var audio_el = document.createElement("audio");
		if(!audio_el.canPlayType) return;
		var extention_str = "";
		var extentions_ar = [];
		if(audio_el.canPlayType('audio/mpeg') == "probably" || audio_el.canPlayType('audio/mpeg') == "maybe"){
			extention_str += ".mp3";
		}
		
		if(audio_el.canPlayType("audio/ogg") == "probably" || audio_el.canPlayType("audio/ogg") == "maybe"){
			extention_str += ".ogg";
		}
		
		if(audio_el.canPlayType("audio/mp4") == "probably" || audio_el.canPlayType("audio/mp4") == "maybe"){
			extention_str += ".webm";
		}
		
		extentions_ar = extention_str.split(".");
		extentions_ar.shift();
		
		audio_el = null;
		return extentions_ar;
	})();
	
	FWDMLP.instaces_ar = [];
	
	FWDMLP.READY = "ready";
	FWDMLP.START_TO_LOAD_PLAYLIST = "startToLoadPlaylist";
	FWDMLP.LOAD_PLAYLIST_COMPLETE = "loadPlaylistComplete";
	FWDMLP.STOP = "stop";
	FWDMLP.PLAY = "play";
	FWDMLP.PAUSE = "pause";
	FWDMLP.UPDATE = "update";
	FWDMLP.UPDATE_TIME = "updateTime";
	FWDMLP.ERROR = "error";
	FWDMLP.PLAY_COMPLETE = "playComplete";
	FWDMLP.POPUP = "popup";
	FWDMLP.START = "start";
	
	
	window.FWDMLP = FWDMLP;
	
}(window));