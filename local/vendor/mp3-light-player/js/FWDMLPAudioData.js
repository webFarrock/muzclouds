/* Data */
(function(window){
	
	var FWDMLPAudioData = function(props, playListElement, parent){
		
		var self = this;
		var prototype = FWDMLPAudioData.prototype;
		
		this.xhr = null;
		this.emailXHR = null;
		this.playlist_ar = null;
		
		this.dlIframe = null;
		
		this.mainPreloader_img = null;
		this.bk_img = null;
		this.thumbnail_img = null;
		this.separator1_img = null;
		this.separator2_img = null;
		this.prevN_img = null;
		this.playN_img = null;
		this.pauseN_img = null;
		this.nextN_img = null;
		
		this.mainScrubberBkLeft_img = null;
		this.mainScrubberBkRight_img = null;
		this.mainScrubberDragLeft_img = null;
		this.mainScrubberLine_img = null;
		this.mainScrubberLeftProgress_img = null;
		this.volumeScrubberBkLeft_img = null;
		this.volumeScrubberBkRight_img = null;
		this.volumeScrubberDragLeft_img = null;
		this.volumeScrubberLine_img = null;
		this.volumeN_img = null;
		this.volumeS_img = null;
		this.volumeD_img = null;
		this.progressLeft_img = null;
		this.titleBarLeft_img = null;
		this.titleBarRigth_img = null;
		
		this.categoriesN_img = null;
		this.replayN_img = null;
		this.playlistN_img = null;
		this.shuffleN_img = null;
		this.facebookN_img = null;
		this.popupN_img = null;
		this.downloaderN_img = null;
		
		this.titlebarAnimBkPath_img = null;
		this.titlebarLeftPath_img = null;
		this.titlebarRightPath_img = null;
		this.soundAnimationPath_img = null;
		
		this.playlistItemBk1_img = null;
		this.playlistItemBk2_img = null;
		this.playlistSeparator_img = null;
		this.playlistScrBkTop_img = null;
		this.playlistScrBkMiddle_img = null;
		this.playlistScrBkBottom_img = null;
		this.playlistScrDragTop_img = null;
		this.playlistScrDragMiddle_img = null;
		this.playlistScrDragBottom_img = null;
		this.playlistScrLines_img = null;
		this.playlistScrLinesOver_img = null;
		this.playlistPlayButtonN_img = null;
		this.playlistItemGrad1_img = null;
		this.playlistItemGrad2_img = null;
		this.playlistItemProgress1_img = null;
		this.playlistItemProgress2_img = null;
		this.playlistDownloadButtonN_img = null;
	
		this.catNextN_img = null;
		this.catPrevN_img = null;
		this.catPrevD_img = null;
		
		this.categories_el = null;
		this.scs_el = null;
		this.props_obj = props;
		this.skinPaths_ar = [];
		this.images_ar = [];
		this.cats_ar = [];
	
		this.scClientId_str = "a123083c52a6b06985421d33038e033a";
		this.flashPath_str = null;
		this.mp3DownloaderPath_str = null;
		this.proxyPath_str = null;
		this.proxyFolderPath_str = null;
		this.mailPath_str = null;
		this.skinPath_str = null;
		this.controllerBkPath_str = null;
		this.thumbnailBkPath_str = null;
		this.playlistIdOrPath_str = null;
		this.mainScrubberBkMiddlePath_str = null;
		this.volumeScrubberBkMiddlePath_str = null;
		this.mainScrubberDragMiddlePath_str = null;
		this.volumeScrubberDragMiddlePath_str = null;
		this.timeColor_str = null;
		this.titleColor_str = null;
		this.progressMiddlePath_str = null;
		this.sourceURL_str = null;
		this.titlebarBkMiddlePattern_str = null;
		this.playlistPlayButtonN_str = null;
		this.playlistPlayButtonS_str = null;
		this.playlistPauseButtonN_str = null;
		this.playlistPauseButtonS_str = null;
		this.trackTitleNormalColor_str = null;
		this.trackTitleSelected_str = null;
		this.trackDurationColor_str = null;
		this.categoriesId_str = null;
		this.thumbnailSelectedType_str = null;
		this.facebookAppId_str = null;
		
		this.pauseSPath_str = null;
		this.playSPath_str = null;
		this.prevSPath_str = null;
		this.nextSPath_str = null;
		this.volumeSPath_str = null;
		this.volumeDPath_str = null;
		this.categoriesSPath_str = null;
		this.replaySPath_str = null;
		this.toopTipBk_str = null;
		this.toolTipsButtonFontColor_str = null;
		this.toopTipPointer_str = null;
		this.toopTipPointerUp_str = null;
		
		this.prevId = -1;
		this.totalCats = 0;
		this.countLoadedSkinImages = 0;
		this.volume = 1;
		this.startSpaceBetweenButtons = 0;
		this.spaceBetweenButtons = 0;
		this.mainScrubberOffsetTop = 0;
		this.spaceBetweenMainScrubberAndTime = 0;
		this.startTimeSpace = 0;
		this.scrubbersOffsetWidth = 0;
		this.scrubbersOffestTotalWidth = 0;
		this.volumeButtonAndScrubberOffsetTop = 0;
		this.maxPlaylistItems = 0;
		this.separatorOffsetOutSpace = 0;
		this.separatorOffsetInSpace = 0;
		this.lastButtonsOffsetTop = 0;
		this.allButtonsOffsetTopAndBottom = 0;
		this.controllerHeight = 0;
		this.titleBarOffsetTop = 0;
		this.scrubberOffsetBottom = 0;
		this.equlizerOffsetLeft = 0;
		this.nrOfVisiblePlaylistItems = 0;
		this.trackTitleOffsetLeft = 0;
		this.playPauseButtonOffsetLeftAndRight = 0;
		this.durationOffsetRight = 0;
		this.downloadButtonOffsetRight = 0;
		this.scrollbarOffestWidth = 0;
		this.resetLoadIndex = -1;
		this.startAtPlaylist = 0;
		this.startAtTrack = 0;
		this.totalCategories = 0;
		this.thumbnailMaxWidth = 0; 
		this.buttonsMargins = 0;
		this.thumbnailMaxHeight = 0;
		this.horizontalSpaceBetweenThumbnails = 0;
		this.verticalSpaceBetweenThumbnails = 0;
		this.countID3 = 0;
		this.toolTipsButtonsHideDelay = 0;
		
		this.JSONPRequestTimeoutId_to;
		this.showLoadPlaylistErrorId_to;
		this.dispatchPlaylistLoadCompleteWidthDelayId_to;
		this.loadImageId_to;
		this.dispatchLoadSkinCompleteWithDelayId_to;
		this.loadPreloaderId_to;
		
		this.isPlaylistDispatchingError_bl = false;
		this.allowToChangeVolume_bl = true;
		this.showContextMenu_bl = false;
		this.showButtonsToolTips_bl = false;
		this.autoPlay_bl = false;
		this.loop_bl = false;
		this.shuffle_bl = false;
		this.showLoopButton_bl = false;
		this.showShuffleButton_bl = false;
		this.showDownloadMp3Button_bl = false;
		this.showPlaylistsButtonAndPlaylists_bl = false;
		this.showPlaylistsByDefault_bl = false;
		this.showPlayListButtonAndPlaylist_bl = false;
		this.showFacebookButton_bl = false;
		this.showPopupButton_bl = false;
		this.expandControllerBackground_bl = false;
		this.animateOnIntro_bl = false;
		this.showPlayListByDefault_bl = false;
		this.isDataLoaded_bl = false;
		this.useDeepLinking_bl = false;
		this.showSoundCloudUserNameInTitle_bl = false;
		this.showThumbnail_bl = false;
		this.showSoundAnimation_bl = false;
		this.showPlaylistItemPlayButton_bl = false;
		this.isMobile_bl = FWDMLPUtils.isMobile;
		this.hasPointerEvent_bl = FWDMLPUtils.hasPointerEvent;
	
		//###################################//
		/*init*/
		//###################################//
		self.init = function(){
			self.parseProperties();
		};
		
		//#############################################//
		// parse properties.
		//#############################################//
		self.parseProperties = function(){
			
			self.categoriesId_str = self.props_obj.playlistsId;
			if(!self.categoriesId_str){
				setTimeout(function(){
					if(self == null) return;
					errorMessage_str = "The <font color='#FFFFFF'>playlistsId</font> property is not defined in the constructor function!";
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:errorMessage_str});
				}, 50);
				return;
			}
				
			self.mainFolderPath_str = self.props_obj.mainFolderPath;
			if(!self.mainFolderPath_str){
				setTimeout(function(){
					if(self == null) return;
					errorMessage_str = "The <font color='#FFFFFF'>mainFolderPath</font> property is not defined in the constructor function!";
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:errorMessage_str});
				}, 50);
				return;
			}
			
			if((self.mainFolderPath_str.lastIndexOf("/") + 1) != self.mainFolderPath_str.length){
				self.mainFolderPath_str += "/";
			}
			
			self.skinPath_str = self.props_obj.skinPath;
			if(!self.skinPath_str){
				setTimeout(function(){
					if(self == null) return;
					errorMessage_str = "The <font color='#FFFFFF'>skinPath</font> property is not defined in the constructor function!";
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:errorMessage_str});
				}, 50);
				return;
			}
			
		
			if((self.skinPath_str.lastIndexOf("/") + 1) != self.skinPath_str.length){
				self.skinPath_str += "/";
			}
			
			self.skinPath_str = self.mainFolderPath_str + self.skinPath_str;
			self.flashPath_str = self.mainFolderPath_str + "swf.swf";
			self.proxyPath_str =  self.mainFolderPath_str + "proxy.php";
			self.proxyFolderPath_str = self.mainFolderPath_str  + "proxyFolder.php";
			self.mailPath_str = self.mainFolderPath_str  + "sendMail.php";
			self.mp3DownloaderPath_str = self.mainFolderPath_str  + "downloader.php";
			
			self.categories_el = document.getElementById(self.categoriesId_str);
			var catsChildren_ar = FWDMLPUtils.getChildren(self.categories_el);
			self.totalCats = catsChildren_ar.length;	
			
			if(self.totalCats == 0){
				setTimeout(function(){
					if(self == null) return;
					errorMessage_str = "At least one category is required!";
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:errorMessage_str});
				}, 50);
				return;
			}
			
			for(var i=0; i<self.totalCats; i++){
				var obj = {};
				child = catsChildren_ar[i];
				
				if(!FWDMLPUtils.hasAttribute(child, "data-source")){
					setTimeout(function(){
						if(self == null) return;
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Attribute <font color='#FFFFFF'>data-source</font> is required in the categories html element at position <font color='#FFFFFF'>" + (i + 1)});
					}, 50);
					return;
				}
				
				if(!FWDMLPUtils.hasAttribute(child, "data-thumbnail-path")){
					setTimeout(function(){
						if(self == null) return;
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Attribute <font color='#FFFFFF'>data-thumbnail-path</font> is required in the categories html element at position <font color='#FFFFFF'>" + (i + 1)});
					}, 50);
					return;
				}
				
				obj.source = FWDMLPUtils.getAttributeValue(child, "data-source");
				obj.thumbnailPath = FWDMLPUtils.getAttributeValue(child, "data-thumbnail-path");
				obj.htmlContent = child.innerHTML;
				self.cats_ar[i] = obj;
			}
			
			//try{self.categories_el.parentNode.removeChild(self.categories_el);}catch(e){};
		
			self.facebookAppId_str = self.props_obj.facebookAppId || undefined;
			self.totalCategories = self.cats_ar.length;
			self.playlistIdOrPath_str = self.props_obj.playlistIdOrPath || undefined;
			self.timeColor_str = self.props_obj.timeColor || "#FF0000";
			self.trackTitleNormalColor_str = self.props_obj.trackTitleNormalColor || "#FF0000";
			self.trackTitleSelected_str = self.props_obj.trackTitleSelectedColor || "#FF0000";
			
			self.titleColor_str = self.props_obj.titleColor || "#FF0000";
			self.tracksCountingColor_str = self.props_obj.tracksCountingColor || "#FF0000";
			self.tracksCountingLineColor_str = self.props_obj.tracksCountingLineColor || "#FF0000";
			self.thumbnailSelectedType_str = self.props_obj.thumbnailSelectedType || "opacity";
			if(self.thumbnailSelectedType_str != "blackAndWhite"  
				&& self.thumbnailSelectedType_str != "threshold" 
				&& self.thumbnailSelectedType_str != "opacity"){
				self.thumbnailSelectedType_str = "opacity";
			}
			if(self.isMobile_bl || FWDMLPUtils.isIEAndLessThen9)  self.thumbnailSelectedType_str = "opacity";
			if(document.location.protocol == "file:") self.thumbnailSelectedType_str = "opacity";
		
			self.startAtPlaylist = self.props_obj.startAtPlaylist || 0;
			if(isNaN(self.startAtPlaylist)) self.startAtPlaylist = 0;
			//if(self.startAtPlaylist != 0) self.startAtPlaylist -= 1;
			if(self.startAtPlaylist < 0){
				self.startAtPlaylist = 0;
			}else if(self.startAtPlaylist > self.totalCats - 1){
				self.startAtPlaylist = self.totalCats - 1;
			}
			
			self.startAtTrack = self.props_obj.startAtTrack || 0; 
			
			self.volume = self.props_obj.volume;
			if(!self.volume) self.volume = 1;
			if(isNaN(self.volume)) volume = 1;
			if(self.volume > 1 || self.isMobile_bl){
				self.volume = 1;
			}else if(self.volume <0){
				self.volume = 0;
			}
			
			self.toolTipsButtonFontColor_str = self.props_obj.toolTipsButtonFontColor || "#FF0000";
			self.buttonsMargins = self.props_obj.buttonsMargins || 0; 
			self.thumbnailMaxWidth = self.props_obj.thumbnailMaxWidth || 330; 
			self.thumbnailMaxHeight = self.props_obj.thumbnailMaxHeight || 330;
			self.horizontalSpaceBetweenThumbnails = self.props_obj.horizontalSpaceBetweenThumbnails;
			if(self.horizontalSpaceBetweenThumbnails == undefined)  self.horizontalSpaceBetweenThumbnails = 40;
			self.verticalSpaceBetweenThumbnails = parseInt(self.props_obj.verticalSpaceBetweenThumbnails);
			if(self.verticalSpaceBetweenThumbnails == undefined)  self.verticalSpaceBetweenThumbnails = 40;
			self.toolTipsButtonsHideDelay = self.props_obj.toolTipsButtonsHideDelay || 1.5; 
			
			self.startSpaceBetweenButtons = self.props_obj.startSpaceBetweenButtons || 0;
			self.spaceBetweenButtons = self.props_obj.spaceBetweenButtons || 0;
			self.mainScrubberOffsetTop = self.props_obj.mainScrubberOffsetTop || 100;
			self.spaceBetweenMainScrubberAndTime = self.props_obj.spaceBetweenMainScrubberAndTime;
			self.startTimeSpace = self.props_obj.startTimeSpace;
			self.scrubbersOffsetWidth  = self.props_obj.scrubbersOffsetWidth || 0;
			self.scrubbersOffestTotalWidth = self.props_obj.scrubbersOffestTotalWidth || 0;
			self.volumeButtonAndScrubberOffsetTop = self.props_obj.volumeButtonAndScrubberOffsetTop || 0;
			self.spaceBetweenVolumeButtonAndScrubber = self.props_obj.spaceBetweenVolumeButtonAndScrubber || 0;
			self.volumeScrubberOffestWidth = self.props_obj.volumeScrubberOffestWidth || 0;
			self.scrubberOffsetBottom = self.props_obj.scrubberOffsetBottom || 0;
			self.equlizerOffsetLeft = self.props_obj.equlizerOffsetLeft || 0;
			self.nrOfVisiblePlaylistItems = self.props_obj.nrOfVisiblePlaylistItems || 0;
			self.trackTitleOffsetLeft = self.props_obj.trackTitleOffsetLeft || 0;
			self.playPauseButtonOffsetLeftAndRight = self.props_obj.playPauseButtonOffsetLeftAndRight || 0;
			self.durationOffsetRight = self.props_obj.durationOffsetRight || 0;
			self.downloadButtonOffsetRight = self.props_obj.downloadButtonOffsetRight || 0;
			self.scrollbarOffestWidth = self.props_obj.scrollbarOffestWidth || 0;
			self.maxPlaylistItems = self.props_obj.maxPlaylistItems || 200;
			self.controllerHeight = self.props_obj.controllerHeight || 200;
			self.titleBarOffsetTop = self.props_obj.titleBarOffsetTop || 0;
			self.separatorOffsetInSpace = self.props_obj.separatorOffsetInSpace || 0;
			self.lastButtonsOffsetTop = self.props_obj.lastButtonsOffsetTop || 0;
			self.allButtonsOffsetTopAndBottom = self.props_obj.allButtonsOffsetTopAndBottom || 0;
			self.separatorOffsetOutSpace = self.props_obj.separatorOffsetOutSpace || 0;
			self.volumeScrubberWidth = self.props_obj.volumeScrubberWidth || 10;
			if(self.volumeScrubberWidth > 200) self.volumeScrubberWidth = 200;
			
			if(self.isMobile_bl) self.allowToChangeVolume_bl = false;
			
			self.rightClickContextMenu_str = self.props_obj.rightClickContextMenu || "developer";
			test = self.rightClickContextMenu_str == "developer" 
				   || self.rightClickContextMenu_str == "disabled"
				   || self.rightClickContextMenu_str == "default";
			if(!test) self.rightClickContextMenu_str = "developer";
			
			self.showButtonsToolTips_bl = self.props_obj.showButtonsToolTips; 
			self.showButtonsToolTips_bl = self.showButtonsToolTips_bl == "no" ? false : true;
			if(self.isMobile_bl) self.showButtonsToolTips_bl = false;
			
			self.addCountingToTracks_bl = self.props_obj.addCountingToTracks; 
			self.addCountingToTracks_bl = self.addCountingToTracks_bl == "yes" ? true : false;
			
			self.autoPlay_bl = self.props_obj.autoPlay; 
			self.autoPlay_bl = self.autoPlay_bl == "yes" ? true : false;
			//if(FWDMLPUtils.isMobile) self.autoPlay_bl = false;
		
			self.loop_bl = self.props_obj.loop; 
			self.loop_bl = self.loop_bl == "yes" ? true : false;
			
			self.shuffle_bl = self.props_obj.shuffle; 
			self.shuffle_bl = self.shuffle_bl == "yes" ? true : false;
			
			self.useDeepLinking_bl = self.props_obj.useDeepLinking; 
			self.useDeepLinking_bl = self.useDeepLinking_bl == "yes" ? true : false;
			
			self.showSoundCloudUserNameInTitle_bl = self.props_obj.showSoundCloudUserNameInTitle; 
			self.showSoundCloudUserNameInTitle_bl = self.showSoundCloudUserNameInTitle_bl == "yes" ? true : false;
			
			self.showThumbnail_bl = self.props_obj.showThumbnail; 
			self.showThumbnail_bl = self.showThumbnail_bl == "yes" ? true : false;
			
			self.showLoopButton_bl = self.props_obj.showLoopButton; 
			self.showLoopButton_bl = self.props_obj.showLoopButton == "no" ? false : true;
			
			self.showPlayListButtonAndPlaylist_bl = self.props_obj.showPlayListButtonAndPlaylist; 
			self.showPlayListButtonAndPlaylist_bl = self.showPlayListButtonAndPlaylist_bl == "no" ? false : true;
			
			if(FWDMLPUtils.isAndroid 
			   && self.showPlayListButtonAndPlaylist_bl
			   && self.props_obj.showPlayListOnAndroid == "no"
			   ){
				self.showPlayListButtonAndPlaylist_bl = false;
			}
			
			self.showPlaylistsButtonAndPlaylists_bl = self.props_obj.showPlaylistsButtonAndPlaylists;
			self.showPlaylistsButtonAndPlaylists_bl = self.showPlaylistsButtonAndPlaylists_bl == "no" ? false : true;
			
			self.showPlaylistsByDefault_bl = self.props_obj.showPlaylistsByDefault; 
			self.showPlaylistsByDefault_bl = self.showPlaylistsByDefault_bl == "yes" ? true : false;
		
			self.showShuffleButton_bl = self.props_obj.showShuffleButton; 
			self.showShuffleButton_bl = self.props_obj.showShuffleButton == "no" ? false : true;
			
			self.showDownloadMp3Button_bl = self.props_obj.showDownloadMp3Button; 
			self.showDownloadMp3Button_bl = self.showDownloadMp3Button_bl == "no" ? false : true;
			
			self.showFacebookButton_bl = self.props_obj.showFacebookButton; 
			self.showFacebookButton_bl = self.props_obj.showFacebookButton == "no" ? false : true;
			
			self.showPopupButton_bl = self.props_obj.showPopupButton; 
			self.showPopupButton_bl = self.showPopupButton_bl == "no" ? false : true;
			
			self.expandControllerBackground_bl = self.props_obj.expandBackground; 
			self.expandControllerBackground_bl = self.expandControllerBackground_bl == "yes" ? true : false;
			
			self.showPlaylistItemPlayButton_bl = self.props_obj.showPlaylistItemPlayButton; 
			self.showPlaylistItemPlayButton_bl = self.showPlaylistItemPlayButton_bl == "no" ? false : true;
			
			self.showPlaylistItemDownloadButton_bl = self.props_obj.showPlaylistItemDownloadButton; 
			self.showPlaylistItemDownloadButton_bl = self.showPlaylistItemDownloadButton_bl == "no" ? false : true;
			
			self.forceDisableDownloadButtonForPodcast_bl = self.props_obj.forceDisableDownloadButtonForPodcast; 
			self.forceDisableDownloadButtonForPodcast_bl = self.forceDisableDownloadButtonForPodcast_bl == "yes" ? true : false;
			
			self.forceDisableDownloadButtonForOfficialFM_bl = self.props_obj.forceDisableDownloadButtonForOfficialFM; 
			self.forceDisableDownloadButtonForOfficialFM_bl = self.forceDisableDownloadButtonForOfficialFM_bl == "yes" ? true : false;
			
			self.forceDisableDownloadButtonForFolder_bl = self.props_obj.forceDisableDownloadButtonForFolder; 
			self.forceDisableDownloadButtonForFolder_bl = self.forceDisableDownloadButtonForFolder_bl == "yes" ? true : false;
	
			if(self.showFacebookButton_bl && !self.facebookAppId_str){
				setTimeout(function(){
					if(self == null) return;
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Parameter <font color='#FFFFFF'>facebookAppId</font> is requiredin the constructor, this represents the facebook app id, for more info read the documetation"});
				}, 50);
				return;
			}
			
			self.animateOnIntro_bl = self.props_obj.animateOnIntro; 
			self.animateOnIntro_bl = self.animateOnIntro_bl == "yes" ? true : false;
			
			self.showPlayListByDefault_bl = self.props_obj.showPlayListByDefault; 
			self.showPlayListByDefault_bl = self.showPlayListByDefault_bl == "no" ? false : true;
			
			self.showSoundAnimation_bl = self.props_obj.showSoundAnimation; 
			self.showSoundAnimation_bl = self.showSoundAnimation_bl == "yes" ? true : false;
			
			self.showPlaylistItemPlayButton_bl = self.props_obj.showPlaylistItemPlayButton; 
			self.showPlaylistItemPlayButton_bl = self.showPlaylistItemPlayButton_bl == "no" ? false : true;
			
			self.addScrollBarMouseWheelSupport_bl = self.props_obj.addScrollBarMouseWheelSupport; 
			self.addScrollBarMouseWheelSupport_bl = self.addScrollBarMouseWheelSupport_bl == "no" ? false : true;
			
			
			self.preloaderPath_str = self.skinPath_str + "logo.png";
			self.mainPreloader_img = new Image();
			self.mainPreloader_img.onerror = self.onSkinLoadErrorHandler;
			self.mainPreloader_img.onload = self.onPreloaderLoadHandler;
			self.mainPreloader_img.src = self.skinPath_str + "preloader.png";
			
			self.skinPaths_ar = [
		         {img:self.controllerBk_img = new Image(), src:self.skinPath_str + "controller-background.png"},
			     {img:self.separator1_img = new Image(), src:self.skinPath_str + "separator.png"},
			     {img:self.separator2_img = new Image(), src:self.skinPath_str + "separator.png"},
			     {img:self.prevN_img = new Image(), src:self.skinPath_str + "prev-button.png"},
			     {img:self.playN_img = new Image(), src:self.skinPath_str + "play-button.png"},
			     {img:self.pauseN_img = new Image(), src:self.skinPath_str + "pause-button.png"},
			     {img:self.nextN_img = new Image(), src:self.skinPath_str + "next-button.png"},
			     {img:self.mainScrubberBkLeft_img = new Image(), src:self.skinPath_str + "scrubber-left-background.png"},
			     {img:self.mainScrubberBkRight_img = new Image(), src:self.skinPath_str + "scrubber-right-background.png"},
			     {img:self.mainScrubberDragLeft_img = new Image(), src:self.skinPath_str + "scrubber-left-drag.png"},
			     {img:self.mainScrubberLine_img = new Image(), src:self.skinPath_str + "scrubber-line.png"},
			     {img:self.mainScrubberLeftProgress_img = new Image(), src:self.skinPath_str + "progress-left.png"},
			     {img:self.volumeScrubberDragLeft_img = new Image(), src:self.skinPath_str + "scrubber-left-drag.png"},
			     {img:self.volumeN_img = new Image(), src:self.skinPath_str + "volume-icon.png"},
			     {img:self.progressLeft_img = new Image(), src:self.skinPath_str + "progress-left.png"},
			     {img:self.categoriesN_img = new Image(), src:self.skinPath_str + "categories-button.png"},
			     {img:self.replayN_img = new Image(), src:self.skinPath_str + "replay-button.png"},
			     {img:self.shuffleN_img = new Image(), src:self.skinPath_str + "shuffle-button.png"},
			     {img:self.facebookN_img = new Image(), src:self.skinPath_str + "facebook-button.png"},
			     {img:self.popupN_img = new Image(), src:self.skinPath_str + "popup-button.png"},
			     {img:self.downloaderN_img = new Image(), src:self.skinPath_str + "download-button.png"},
			     {img:self.titlebarAnimBkPath_img = new Image(), src:self.skinPath_str + "titlebar-equlizer-background.png"},
			     {img:self.titlebarLeftPath_img = new Image(), src:self.skinPath_str + "titlebar-grad-left.png"},
			     {img:self.soundAnimationPath_img = new Image(), src:self.skinPath_str + "equalizer.png"},
			     {img:self.titleBarLeft_img = new Image(), src:self.skinPath_str + "titlebar-left-pattern.png"},
			     {img:self.titleBarRigth_img = new Image(), src:self.skinPath_str + "titlebar-right-pattern.png"}
    		];

			
			//setup skin paths
			self.prevSPath_str = self.skinPath_str + "prev-button-over.png"; 
			self.playSPath_str = self.skinPath_str + "play-button-over.png";
			self.pauseSPath_str = self.skinPath_str + "pause-button-over.png";
			self.nextSPath_str = self.skinPath_str + "next-button-over.png"; 
			
			self.controllerBkPath_str = self.skinPath_str + "controller-background.png";
			self.thumbnailBkPath_str = self.skinPath_str + "thumbnail-background.png";

			self.mainScrubberBkMiddlePath_str = self.skinPath_str + "scrubber-middle-background.png";
			self.mainScrubberDragMiddlePath_str = self.skinPath_str + "scrubber-middle-drag.png";
	
			self.volumeScrubberBkMiddlePath_str = self.skinPath_str + "scrubber-middle-background.png";
			self.volumeScrubberDragMiddlePath_str = self.skinPath_str + "scrubber-middle-drag.png";	
		
			self.volumeSPath_str = self.skinPath_str + "volume-icon-over.png";
			self.volumeDPath_str = self.skinPath_str + "volume-icon-disabled.png";
			self.progressMiddlePath_str = self.skinPath_str + "progress-middle.png";
			
			self.categoriesSPath_str = self.skinPath_str + "categories-button-over.png"; 
			self.replaySPath_str = self.skinPath_str + "replay-button-over.png"; 
			self.toopTipBk_str = self.skinPath_str + "tooltip-background.png"; 
			self.toopTipPointer_str = self.skinPath_str + "tooltip-pointer-down.png"; 
			self.toopTipPointerUp_str = self.skinPath_str + "tooltip-pointer-up.png"; 
			self.playlistSPath_str = self.skinPath_str + "playlist-button-over.png"; 
			self.shuffleSPath_str = self.skinPath_str + "shuffle-button-over.png"; 
			self.facebookSPath_str = self.skinPath_str + "facebook-button-over.png"; 
			self.popupSPath_str = self.skinPath_str + "popup-button-over.png"; 
			self.downloaderSPath_str = self.skinPath_str + "download-button-over.png"; 
			self.titlebarRightPath_str = self.skinPath_str + "titlebar-grad-right.png"; 
			self.titlebarBkMiddlePattern_str = self.skinPath_str + "titlebar-middle-pattern.png"; 
			
			if(self.showPlaylistsButtonAndPlaylists_bl){
				self.skinPaths_ar.push(
				    {img:self.catNextN_img = new Image(), src:self.skinPath_str + "categories-next-button.png"},
				    {img:self.catPrevN_img = new Image(), src:self.skinPath_str + "categories-prev-button.png"},
				    {img:self.catCloseN_img = new Image(), src:self.skinPath_str + "categories-close-button.png"},
				    {img:new Image(), src:self.skinPath_str + "categories-background.png"}
				);
		
				self.catBkPath_str = self.skinPath_str + "categories-background.png"; 
				self.catThumbBkPath_str = self.skinPath_str + "categories-thumbnail-background.png"; 
				self.catThumbBkTextPath_str = self.skinPath_str + "categories-thumbnail-text-backgorund.png"; 
				self.catNextSPath_str = self.skinPath_str + "categories-next-button-over.png"; 
				self.catNextDPath_str = self.skinPath_str + "categories-next-button-disabled.png";
				self.catPrevSPath_str = self.skinPath_str + "categories-prev-button-over.png"; 
				self.catPrevDPath_str = self.skinPath_str + "categories-prev-button-disabled.png"; 
				self.catCloseSPath_str = self.skinPath_str + "categories-close-button-over.png"; 
			}
		
			self.totalGraphics = self.skinPaths_ar.length;
			self.loadSkin();
		};
		
		//####################################//
		/* Preloader load done! */
		//###################################//
		this.onPreloaderLoadHandler = function(){
			setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PRELOADER_LOAD_DONE);
			}, 50);
		};
		
		//####################################//
		/* load buttons graphics */
		//###################################//
		self.loadSkin = function(){
			var img;
			var src;
			for(var i=0; i<self.totalGraphics; i++){
				img = self.skinPaths_ar[i].img;
				src = self.skinPaths_ar[i].src;
				img.onload = self.onSkinLoadHandler;
				img.onerror = self.onSkinLoadErrorHandler;
				img.src = src;
			}
		};
		
		this.onSkinLoadHandler = function(e){
			self.countLoadedSkinImages++;
			if(self.countLoadedSkinImages == self.totalGraphics){
				setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.SKIN_LOAD_COMPLETE);
				}, 50);
			}
		};
		
		self.onSkinLoadErrorHandler = function(e){
			if (FWDMLPUtils.isIEAndLessThen9){
				message = "Graphics image not found!";
			}else{
				message = "The skin icon with label <font color='#FFFFFF'>" + e.target.src + "</font> can't be loaded, check path!";
			}
			
			if(window.console) console.log(e);
			var err = {text:message};
			setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, err);
			}, 50);
		};
		
		//####################################//
		/* show error if a required property is not defined */
		//####################################//
		self.showPropertyError = function(error){
			self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"The property called <font color='#FFFFFF'>" + error + "</font> is not defined."});
		};
		
		//##########################################//
		/* Download mp3 */
		//##########################################//
		this.downloadMp3 = function(sourcePath, pName){
			
			if(document.location.protocol == "file:"){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Downloading mp3 files local is not allowed or possible!. To function properly please test online."});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}
			
			pName = pName.replace(/[^A-Z0-9\-\_\.]+/ig, "_");
			if(!(/\.(mp3)$/i).test(pName)) pName+='.mp3';
		
			if(sourcePath.indexOf("http:") == -1){
				sourcePath = sourcePath.substr(sourcePath.indexOf("/") + 1);
				//sourcePath = sourcePath.substr(sourcePath.indexOf("/") + 1);
				sourcePath = encodeURIComponent(sourcePath);
			};
			
			var url = self.mp3DownloaderPath_str;
			if(!self.dlIframe){
				self.dlIframe = document.createElement("IFRAME");
				self.dlIframe.style.display = "none";
				document.documentElement.appendChild(self.dlIframe);
			}
			
			if(self.isMobile_bl){
			
				var email = self.getValidEmail();
				if(!email) return;
				
				if(self.emailXHR != null){
					try{self.emailXHR.abort();}catch(e){}
					self.emailXHR.onreadystatechange = null;
					self.emailXHR.onerror = null;
					self.emailXHR = null;
				}
				
				self.emailXHR = new XMLHttpRequest();
				
				self.emailXHR.onreadystatechange = function(e){
					if(self.emailXHR.readyState == 4){
						if(self.emailXHR.status == 200){
							if(self.emailXHR.responseText == "sent"){
								alert("Email sent.");
							}else{
								alert("Error sending email, this is a server side error, the php file can't send the email!");
							}
							
						}else{
							alert("Error sending email: " + self.emailXHR.status + ": " + self.emailXHR.statusText);
						}
					}
				};
				
				self.emailXHR.onerror = function(e){
					try{
						if(window.console) console.log(e);
						if(window.console) console.log(e.message);
					}catch(e){};
					alert("Error sending email: " + e.message);
				};

				self.emailXHR.open("get", self.mailPath_str + "?mail=" + email + "&name=" + pName + "&path=" + sourcePath, true);
				self.emailXHR.send();
				return;
			}
		
			if(sourcePath.indexOf("soundcloud.com") != -1){
				self.dlIframe.src = sourcePath;
			}else{
				self.dlIframe.src = url + "?path="+ sourcePath +"&name=" + pName;
			}
		};
		
		this.getValidEmail = function(){
			var email = prompt("Please enter your email address where the mp3 download link will be sent:");
			var emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
			while(!emailRegExp.test(email) || email == ""){
				if(email === null) return;
				email = prompt("Please enter a valid email address:");
			}
			return email;
		};
		
		
		//####################################//
		/* load playlist */
		//####################################//
		this.loadPlaylist = function(id){
			if(self.isPlaylistDispatchingError_bl) return;
			
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			var domIdOrURL = self.cats_ar[id].source;
		
			if(!domIdOrURL){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"<font color='#FFFFFF'>loadPlaylist()</font> - Please specify an html elementid, podcast link, soudcloud link or xml path"});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}
			
			if(!isNaN(domIdOrURL)){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"<font color='#FFFFFF'>loadPlaylist()</font> - The parameter must be of type string!"});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}
		
			if(domIdOrURL.indexOf("soundcloud.com") != -1){
				self.loadSoundCloudList(domIdOrURL);	
			}else if(domIdOrURL.indexOf("official.fm") != -1){
				self.loadOfficialFmList(domIdOrURL);
			}else if(domIdOrURL.indexOf("folder:") != -1){
				self.loadFolderPlaylist(domIdOrURL);
			}else if(domIdOrURL.indexOf(".xml") != -1
			  || domIdOrURL.indexOf("http:") != -1
			  || domIdOrURL.indexOf("https:") != -1
			  || domIdOrURL.indexOf("www.") != -1
			){
				self.loadXMLPlaylist(domIdOrURL);
			}else{
				self.parseDOMPlaylist(domIdOrURL);	
			}
			self.prevId = id;
		};
		
		//##########################################//
		/* load soundcloud list */
		//##########################################//
		this.loadSoundCloudList = function(url){
			if(self.isPlaylistDispatchingError_bl) return;
		
			self.closeXHR();
			
			self.sourceURL_str = url;
			var url = "http://api.soundcloud.com/resolve?format=json&url=" + self.sourceURL_str + "&client_id=" + self.scClientId_str + "&callback=" + parent.instanceName_str + ".data.parseSoundCloud";
			
			if(self.scs_el ==  null){
				try{
					self.scs_el = document.createElement('script');
					self.scs_el.src = url;
					self.scs_el.id = parent.instanceName_str + ".data.parseSoundCloud";
					document.documentElement.appendChild(self.scs_el);
				}catch(e){}
			}
			self.JSONPRequestTimeoutId_to = setTimeout(self.JSONPRequestTimeoutError, 8000);
		};
		
		this.JSONPRequestTimeoutError = function(){
			self.isPlaylistDispatchingError_bl = true;
			showLoadPlaylistErrorId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading offical.fm url!<font color='#FFFFFF'>" + self.sourceURL_str + "</font>"});
				self.isPlaylistDispatchingError_bl = false;
			}, 50);
			return;
		};
	
		
		//##########################################//
		/* load official fm list */
		//##########################################//
		this.loadOfficialFmList = function(url){
			if(self.isPlaylistDispatchingError_bl) return;
		
			self.closeXHR();
			
			self.sourceURL_str = url;
			var url = "http://api.official.fm/playlists/" + url.substr(url.indexOf("/") + 1) +  "/tracks?format=jsonp&fields=streaming&api_version=2&callback=" + parent.instanceName_str + ".data.parseOfficialFM";
			if(self.scs_el ==  null){
				try{
					self.scs_el = document.createElement('script');
					self.scs_el.src = url;
					self.scs_el.id = parent.instanceName_str + ".data.parseOfficialFM";
					document.documentElement.appendChild(self.scs_el);
				}catch(e){}
			}
			self.JSONPRequestTimeoutId_to = setTimeout(self.JSONPRequestTimeoutError, 8000);
		};
		
		this.JSONPRequestTimeoutError = function(){
			self.isPlaylistDispatchingError_bl = true;
			showLoadPlaylistErrorId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading soundcloud url!<font color='#FFFFFF'>" + self.sourceURL_str + "</font>"});
				self.isPlaylistDispatchingError_bl = false;
			}, 50);
			return;
		};
		
		this.closeJsonPLoader = function(){
			clearTimeout(self.JSONPRequestTimeoutId_to);
		};
		
		//#######################################//
		/* load XML playlist (warning this will will work only online on a web server,
		 *  it is not working local!) */
		//######################################//
		this.loadXMLPlaylist = function(url){
			if(self.isPlaylistDispatchingError_bl) return;
			
			if(document.location.protocol == "file:" && url.indexOf("official.fm") == -1){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Loading XML files local is not allowed or possible!. To function properly please test online."});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}
			
			self.closeXHR();
			self.loadFromFolder_bl = false;
			self.sourceURL_str = url;
			self.xhr = new XMLHttpRequest();
			self.xhr.onreadystatechange = self.ajaxOnLoadHandler;
			self.xhr.onerror = self.ajaxOnErrorHandler;
			
			try{
				self.xhr.open("get", self.proxyPath_str + "?url=" +  self.sourceURL_str + "&rand=" + parseInt(Math.random() * 99999999), true);
				self.xhr.send();
			}catch(e){
				var message = e;
				if(e){if(e.message)message = e.message;}
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"XML file can't be loaded! <font color='#FFFFFF'>" + self.sourceURL_str + "</font>. " + message });
			}
		};
		
		//#######################################//
		/* load folder1 */
		//######################################//
		this.loadFolderPlaylist = function(url){
			if(self.isPlaylistDispatchingError_bl) return;
			
			if(document.location.protocol == "file:" && url.indexOf("official.fm") == -1){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Creating a mp3 playlist from a folder is not allowed or possible local! To function properly please test online."});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}	
			
			self.closeXHR();
			self.loadFromFolder_bl = true;
			self.countID3 = 0;
			self.sourceURL_str = url.substr(url.indexOf(":") + 1);
			self.xhr = new XMLHttpRequest();
			self.xhr.onreadystatechange = self.ajaxOnLoadHandler;
			self.xhr.onerror = self.ajaxOnErrorHandler;
			
			try{
				self.xhr.open("get", self.proxyFolderPath_str + "?dir=" +  encodeURIComponent(self.sourceURL_str) + "&rand=" + parseInt(Math.random() * 9999999), true);
				self.xhr.send();
			}catch(e){
				var message = e;
				if(e){if(e.message)message = e.message;}
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Folder proxy file path is not found: <font color='#FFFFFF'>" + self.proxyFolderPath_str + "</font>"});
			}
		};

		this.ajaxOnLoadHandler = function(e){
			var response;
			var isXML = false;
			
			if(self.xhr.readyState == 4){
				if(self.xhr.status == 404){
					if(self.loadFromFolder_bl){
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Folder proxy file path is not found: <font color='#FFFFFF'>" + self.proxyFolderPath_str + "</font>"});
					}else{
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Proxy file path is not found: <font color='#FFFFFF'>" + self.proxyPath_str + "</font>"});
					}
					
				}else if(self.xhr.status == 408){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Proxy file request load timeout!"});
				}else if(self.xhr.status == 200){
					//console.log(self.xhr.responseText)
					
					if(self.xhr.responseText.indexOf("<b>Warning</b>:") != -1){
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading folder: <font color='#FFFFFF'>" + self.sourceURL_str + "</font>. Make sure that the folder path is correct!"});
						return;
					}
					
					if(window.JSON){
						response = JSON.parse(self.xhr.responseText);
					}else{
						response = eval('('+ self.xhr.responseText +')');
					}
					
					if(response.channel){
						self.parsePodcast(response);
					}else if(response.folder){
						self.parseFolderJSON(response);
					}else if(response.li){
						self.parseXML(response);
					}else if(response.error){//this applies only with proxy (xml and poscast)
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading file: <font color='#FFFFFF'>" + self.sourceURL_str + "</font>. Make sure the file path (xml or podcast) is correct and well formatted!"});
					}
				}
			}
		};
		
		this.ajaxOnErrorHandler = function(e){
			try{
				if(window.console) console.log(e);
				if(window.console) console.log(e.message);
			}catch(e){};
			if(self.loadFromFolder_bl){
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading file : <font color='#FFFFFF'>" + self.proxyFolderPath_str + "</font>. Make sure the path is correct"});
			}else{
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Error loading file : <font color='#FFFFFF'>" + self.proxyPath_str + "</font>. Make sure the path is correct"});
			}
		};
		
		//#####################################//
		/* Parse soundcloud JSON */
		//####################################//
		this.parseSoundCloud = function(object){
			self.closeJsonPLoader();
			self.playlist_ar = [];
			var obj;
			var track;
		
			if(object.kind == "playlist"){
				for(var i=0; i<object.tracks.length; i++){
					track = object.tracks[i];
					obj = {};
					obj.source = track["stream_url"] + "?consumer_key=" + self.scClientId_str;
					obj.downloadPath = track["downloadable"] == true ? track["download_url"] + "?consumer_key=" + self.scClientId_str : undefined;
					obj.downloadable = track["downloadable"];
					obj.thumbPath = track["artwork_url"];
					if(self.showSoundCloudUserNameInTitle_bl){
						if(self.addCountingToTracks_bl){
							if(i<9) count = "0";
							obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" +  "<span style='font-weight:bold;'>" + track["user"]["username"] + "</span>" + " - " + track["title"];
						}else{
							obj.title = "<span style='font-weight:bold;'>" + track["user"]["username"] + "</span>" + " - " + track["title"];
						}
						obj.titleText = track["user"]["username"] + " - " + track["title"];
					}else{
						if(self.addCountingToTracks_bl){
							if(i<9) count = "0";
							obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" + track["title"];
						}else{
							obj.title = track["title"];
						}
						obj.titleText = track["title"];
					}
					
					obj.duration = track["duration"];
					if(track["streamable"]) self.playlist_ar.push(obj);
					if(i > self.maxPlaylistItems - 1) break;
				}
			}else if(object.kind == "track"){
				track = object;
				obj = {};
				obj.source = track["stream_url"] + "?consumer_key=" + self.scClientId_str;
				if(obj.source == undefined)  obj.source = track["uri"] + "/stream" + "?consumer_key=" + self.scClientId_str;
				obj.downloadPath = track["downloadable"] == true ? track["download_url"] + "?consumer_key=" + self.scClientId_str : undefined;
				obj.thumbPath = track["artwork_url"];
				if(self.showSoundCloudUserNameInTitle_bl){
					obj.title = "<span style='font-weight:bold;'>" + track["user"]["username"] + "</span>" + " - " + track["title"];
					obj.titleText = track["user"]["username"] + " - " + track["title"];
				}else{
					obj.title = track["title"];
					obj.titleText = track["title"];
				}
				obj.duration = track["duration"];
				self.playlist_ar[0] = obj;
			}else{
				self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Please provide a playlist or track URL : <font color='#FFFFFF'>" + self.sourceURL_str + "</font>."});
			}
			
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
			
			self.isDataLoaded_bl = true;
		};
		
		
		//#####################################//
		/* Parse official FM */
		//#####################################//
		this.parseOfficialFM = function(object){
			self.closeJsonPLoader();
			self.playlist_ar = [];
			var obj;
			var track;
			var obj_ar = object.tracks;
			var thumbPath = undefined;
			
			for(var i=0; i<obj_ar.length; i++){
				track = object.tracks[i].track;
				obj = {};
				obj.source = encodeURI(track.streaming.http);
				obj.downloadPath = obj.source;
				obj.downloadable = self.showDownloadMp3Button_bl;
				if(self.forceDisableDownloadButtonForOfficialFM_bl) obj.downloadable = false; 
				obj.thumbPath = thumbPath;
				var count = "";
				if(self.addCountingToTracks_bl){
					if(i<9) count = "0";
					obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" +  "<span style='font-weight:bold;'>" + track["artist"] + "</span>" + " - " + track["title"];
				}else{
					obj.title = "<span style='font-weight:bold;'>" + track["artist"] + "</span>" + " - " + track["title"];
				}
				obj.titleText = track["artist"] + " - " + track["title"];
				obj.duration = track.duration * 1000;
				self.playlist_ar[i] = obj;
				if(i > self.maxPlaylistItems - 1) break;
			}
			
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
		
			self.isDataLoaded_bl = true;	
		};
		
		//####################################//
		/* parse podcast JSON */
		//####################################//
		this.parsePodcast = function(response){
			self.playlist_ar = [];
			var obj;
			var obj_ar = response.channel.item;
			var thumbPath = undefined;
			try{thumbPath = response["channel"]["image"]["url"];}catch(e){}
			
			for(var i=0; i<obj_ar.length; i++){
				obj = {};
				obj.source = encodeURI(obj_ar[i]["enclosure"]["@attributes"]["url"]);
				obj.downloadPath = obj.source;
				obj.downloadable = self.showDownloadMp3Button_bl;
				if(self.forceDisableDownloadButtonForPodcast_bl) obj.downloadable = false;
				obj.thumbPath = thumbPath;
				var count = "";
				if(self.addCountingToTracks_bl){
					if(i<9) count = "0";
					obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" +  obj_ar[i].title;
				}else{
					obj.title = obj_ar[i].title;
				}
				obj.titleText = obj_ar[i].title;
				obj.duration = undefined;
				self.playlist_ar[i] = obj;
				if(i > self.maxPlaylistItems - 1) break;
			}
			
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
		
			self.isDataLoaded_bl = true;
		};
		
		//####################################//
		/* parse xml JSON */
		//####################################//
		this.parseXML = function(response){
			self.playlist_ar = [];
			var obj;
			var obj_ar = response.li;
			
			for(var i=0; i<obj_ar.length; i++){
				obj = {};
				obj.source = obj_ar[i]["@attributes"]["data-path"];
				var firstUrlPath = encodeURI(obj.source.substr(0,obj.source.lastIndexOf("/") + 1));
				var secondUrlPath = encodeURIComponent(obj.source.substr(obj.source.lastIndexOf("/") + 1));
				obj.source = firstUrlPath + secondUrlPath;
				obj.downloadPath = obj.source;
				obj.downloadable = obj_ar[i]["@attributes"]["data-downloadable"] == "yes" ? true : false;
				obj.thumbPath = obj_ar[i]["@attributes"]["data-thumbpath"];
				var count = "";
				if(self.addCountingToTracks_bl){
					if(i<9) count = "0";
					obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" + obj_ar[i]["@attributes"]["data-title"];
				}else{
					obj.title = obj_ar[i]["@attributes"]["data-title"];
				}
				obj.titleText = obj_ar[i]["@attributes"]["data-title"];
				obj.duration = obj_ar[i]["@attributes"]["data-duration"];
				self.playlist_ar[i] = obj;
				if(i > self.maxPlaylistItems - 1) break;
			}
		
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
			
			self.isDataLoaded_bl = true;
		};
		
		
		
		//####################################//
		/* parse folder JSON */
		//####################################//
		this.parseFolderJSON = function(response){
			self.playlist_ar = [];
			var obj;
			var obj_ar = response.folder;
			var counter = 0;
		
			for(var i=0; i<obj_ar.length; i++){
				obj = {};
				obj.source = obj_ar[i]["@attributes"]["data-path"];
				var firstUrlPath = encodeURI(obj.source.substr(0,obj.source.lastIndexOf("/") + 1));
				var secondUrlPath = encodeURIComponent(obj.source.substr(obj.source.lastIndexOf("/") + 1));
				obj.source = firstUrlPath + secondUrlPath;
				obj.downloadPath = obj.source;
				obj.downloadable = self.showDownloadMp3Button_bl;
				if(self.forceDisableDownloadButtonForFolder_bl) obj.downloadable = false;
				obj.thumbPath = obj_ar[i]["@attributes"]["data-thumbpath"];
				
				obj.title = "...";
				obj.titleText = "...";
				
				self.playlist_ar[i] = obj;
				if(i > self.maxPlaylistItems - 1) break;
			}
			
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
	
			self.isDataLoaded_bl = true;
		};
		
		//##########################################//
		/* parse DOM playlist */
		//##########################################//
		this.parseDOMPlaylist = function(idOrObject){
			if(self.isPlaylistDispatchingError_bl) return;
			var root_el;
			
			self.closeXHR();
			
			root_el = document.getElementById(idOrObject);
			if(!root_el){
				self.isPlaylistDispatchingError_bl = true;
				showLoadPlaylistErrorId_to = setTimeout(function(){
					self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"The playlist with id <font color='#FFFFFF'>" + idOrObject + "</font> is not found in the DOM."});
					self.isPlaylistDispatchingError_bl = false;
				}, 50);
				return;
			}
			
			var children_ar = FWDMLPUtils.getChildren(root_el);
			var totalChildren = children_ar.length;
			var child;
			self.playlist_ar = [];
			
			for(var i=0; i<totalChildren; i++){
				var obj = {};
				child = children_ar[i];
				
				if(!FWDMLPUtils.hasAttribute(child, "data-path")){
					self.isPlaylistDispatchingError_bl = true;
					showLoadPlaylistErrorId_to = setTimeout(function(){
						self.dispatchEvent(FWDMLPAudioData.LOAD_ERROR, {text:"Attribute <font color='#FFFFFF'>data-path</font> is required in the playlist at position <font color='#FFFFFF'>" + (i + 1)});
					}, 50);
					return;
				}
				
				if(i > self.maxPlaylistItems - 1) break;
				
				obj.source = FWDMLPUtils.getAttributeValue(child, "data-path");
				var firstUrlPath = encodeURI(obj.source.substr(0,obj.source.lastIndexOf("/") + 1));
				var secondUrlPath = encodeURIComponent(obj.source.substr(obj.source.lastIndexOf("/") + 1));
				obj.source = firstUrlPath + secondUrlPath;
				obj.downloadPath = obj.source;
				
				if(FWDMLPUtils.hasAttribute(child, "data-thumbpath")){
					obj.thumbPath = FWDMLPUtils.getAttributeValue(child, "data-thumbpath");
				}else{
					obj.thumbPath = undefined;
				}
				
				if(FWDMLPUtils.hasAttribute(child, "data-downloadable")){
					obj.downloadable = FWDMLPUtils.getAttributeValue(child, "data-downloadable") == "yes" ? true : false;
				}else{
					obj.downloadable = undefined;
				}
				
				obj.title = "not defined!";
				try{
					var count = "";
					if(self.addCountingToTracks_bl){
						if(i<9) count = "0";
						obj.title = "<font color=" + self.tracksCountingColor_str + ">" + count + (i + 1) + "</font>" + "<font color="  + self.tracksCountingLineColor_str + "> - </font>" + FWDMLPUtils.getChildren(child)[0].innerHTML;
					}else{
						obj.title = FWDMLPUtils.getChildren(child)[0].innerHTML;
					}
					
				}catch(e){};
				try{obj.titleText = FWDMLPUtils.getChildren(child)[0].textContent || FWDMLPUtils.getChildren(child)[0].innerText;}catch(e){};
				
				if(FWDMLPUtils.hasAttribute(child, "data-duration")){
					obj.duration = FWDMLPUtils.getAttributeValue(child, "data-duration");
				}else{
					obj.duration = undefined;
				}
				
				self.playlist_ar[i] = obj;
			}
					
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function(){
				self.dispatchEvent(FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE);
			}, 50);
	
			self.isDataLoaded_bl = true;
		};
		
		//####################################//
		/* close xhr */
		//####################################//
		this.closeXHR = function(){
			self.closeJsonPLoader();
			try{
				document.documentElement.removeChild(self.scs_el);
				self.scs_el = null;
			}catch(e){}
			
			if(self.xhr != null){
				try{self.xhr.abort();}catch(e){}
				self.xhr.onreadystatechange = null;
				self.xhr.onerror = null;
				self.xhr = null;
			}
			self.countID3 = 2000;
		};
		
		this.closeData = function(){
			self.closeXHR();
			clearTimeout(self.loadImageId_to);
			clearTimeout(self.showLoadPlaylistErrorId_to);
			clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
			clearTimeout(self.loadImageId_to);
			clearTimeout(self.loadPreloaderId_to);
			if(self.image_img){
				self.image_img.onload = null;
				self.image_img.onerror = null;
			}
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDMLPAudioData.setPrototype = function(){
		FWDMLPAudioData.prototype = new FWDMLPEventDispatcher();
	};
	
	FWDMLPAudioData.prototype = null;
	
	FWDMLPAudioData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
	FWDMLPAudioData.LOAD_DONE = "onLoadDone";
	FWDMLPAudioData.LOAD_ERROR = "onLoadError";
	FWDMLPAudioData.IMAGE_LOADED = "onImageLoaded";
	FWDMLPAudioData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete";
	FWDMLPAudioData.SKIN_PROGRESS = "onSkinProgress";
	FWDMLPAudioData.IMAGES_PROGRESS = "onImagesPogress";
	FWDMLPAudioData.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete";
	
	window.FWDMLPAudioData = FWDMLPAudioData;
}(window));