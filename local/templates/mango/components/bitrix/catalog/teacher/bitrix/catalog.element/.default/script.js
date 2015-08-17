$(function(){
    $('.tab-switcher').first().addClass('active');
    $('.accordeon-title').first().addClass('active');
    $('.accordeon-entry').first().css('display','block');
});


function initMyAudio(){
    FWDMLPUtils.onReady(function(){
        new FWDMLP({
            //main settings
            instanceName:"player1",
            parentId:"MY_AUDIO",
            playlistsId:"playlists",
            mainFolderPath:"/local/vendor/mp3-light-player/start/content",
            skinPath:"modern_skin_white",
            showSoundCloudUserNameInTitle:"yes",
            useDeepLinking:"no",
            rightClickContextMenu:false,
            showButtonsToolTips:"no",
            //autoPlay:"no",
            loop:"no",
            shuffle:"no",
            maxWidth:250,
            volume:.8,
            toolTipsButtonsHideDelay:1.5,
            toolTipsButtonFontColor:"#000000",
            //controller settings
            animateOnIntro:"yes",
            showSoundAnimation:"yes",
            showLoopButton:"no",
            showShuffleButton:"no",
            showDownloadMp3Button:"no",
            showFacebookButton:"no",
            addCountingToTracks:"yes",
            expandBackground:"no",
            tracksCountingColor:"#000000",
            tracksCountingLineColor:"#333333",
            titleColor:"#000000",
            timeColor:"#6a6a6a",
            //controller align and size settings (described in detail in the documentation!)
            controllerHeight:114,
            startSpaceBetweenButtons:8,
            allButtonsOffsetTopAndBottom:4,
            spaceBetweenMainScrubberAndTime:6,
            startTimeSpace:10,
            scrubbersOffsetWidth:4,
            scrubbersOffestTotalWidth:-6,
            scrubberOffsetBottom:4,
            equlizerOffsetLeft:2,
            //playlists window settings
            showPlaylistsButtonAndPlaylists:"no",
            showPlaylistsByDefault:"no",
            forceDisableDownloadButtonForPodcast:"yes",
            forceDisableDownloadButtonForOfficialFM:"yes",
            forceDisableDownloadButtonForFolder:"yes",
            thumbnailSelectedType:"blackAndWhite",
            startAtPlaylist:0,
            startAtTrack:0,
            buttonsMargins:7,
            thumbnailMaxWidth:350,
            thumbnailMaxHeight:350,
            horizontalSpaceBetweenThumbnails:40,
            verticalSpaceBetweenThumbnails:40,
            //popup settings
            showPopupButton:"no",
            popupWindowBackgroundColor:"#FFFFFF",
            popupWindowWidth:500,
            popupWindowHeight:114
        });
    });
}