package ro.fwd{
	
	import flash.display.Sprite;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.display.StageScaleMode;
	import flash.display.StageAlign;
	import flash.external.ExternalInterface;
	import flash.system.System;
	import flash.system.Security;
	import flash.display.LoaderInfo;
	import flash.utils.setTimeout;
	
	
	public class Main extends MovieClip{
		
		private var _soundScreen:SoundScreen;
		private var _self;
		
		private var _instanceName_str:String = null;
		private var _sourcePath_str:String = null;
		
		private var _volume = 1;
		
		private var _autoPlay_bl:Boolean = false;
		private var _loop_bl:Boolean = false;
		
		public function Main(){
			 Security.allowDomain("*");
    		 Security.allowInsecureDomain("*");
			 _self = this;
			 
			 if(this.stage){
				 this.init();
			 }else{
				 addEventListener(Event.ADDED_TO_STAGE, init, false, 0, true);
			 }
		}
		
		private function init(){
			 this._instanceName_str = LoaderInfo(this.root.loaderInfo).parameters.instanceName;
			 this._volume = Number(LoaderInfo(this.root.loaderInfo).parameters.volume);
			
			//txt.text =  String(this._sourcePath_str + " " + this._volume + " " + this._instanceName_str + " " + this._autoPlay_bl + " " + this._loop_bl);
			//_soundScreen = new SoundScreen(1);
			//this.setSource("http://www.webdesign-flash.ro/ht/r/demo/content/mp3/01.mp3")
			//this.playAudio();
			_self._soundScreen = new SoundScreen(_self._volume);
			_self._soundScreen.addEventListener(SoundScreenEvent.START, _self.startHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.ERROR, _self.errorHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.STOP, _self.stopHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.SAFE_TO_SCRUBB, _self.safeToScrubbHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.PAUSE, _self.pauseHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.PLAY, _self.playHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.UPDATE_TIME, _self.updateTimeHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.UPDATE, _self.updateHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.LOAD_PROGRESS, _self.progressHandler);
			_self._soundScreen.addEventListener(SoundScreenEvent.SOUND_COMPLETE, _self.soundCompleteHandler)
	
			addExternalCallBacks();
			setTimeout(function(){
				ExternalInterface.call(_self._instanceName_str + ".flashScreenIsReady");
			}, 200);
		}
		
		private function addExternalCallBacks(){
			try{
				ExternalInterface.addCallback("playAudio", playAudio);
			}catch(e:Error){
				ExternalInterface.call(this._instanceName_str + ".flashScreenFail");
				return;
			}
	
			ExternalInterface.addCallback("pauseAudio", pauseAudio);
			ExternalInterface.addCallback("stopAudio", stopAudio);
			ExternalInterface.addCallback("setSource", setSource);
			ExternalInterface.addCallback("startToScrub", startToScrub);
			ExternalInterface.addCallback("stopToScrub", stopToScrub);
			ExternalInterface.addCallback("scrub", scrub);
			ExternalInterface.addCallback("replayAudio", replayAudio);
			ExternalInterface.addCallback("setVolume", setVolume);
			ExternalInterface.addCallback("isAudioPlaying", isAudioPlaying);
			ExternalInterface.addCallback("isAudioStopped", isAudioStopped);
		}
		
		//###########################################//
		//API
		//###########################################//
		public function setSource(param){
			this._soundScreen.setSource(param);
		}
		
		public function playAudio(){
			this._soundScreen.play();
		}
		
		public function pauseAudio(){
			this._soundScreen.pause();
		}
		
		public function stopAudio(){
			this._soundScreen.stop();
		}
		
		public function startToScrub(){
			this._soundScreen.startToScrub();
		}
		
		public function stopToScrub():void{
			this._soundScreen.stopToScrub();
		}
		
		public function scrub(percent:Number){
			this._soundScreen.scrub(percent);
		}
		
		public function replayAudio(){
			this._soundScreen.replay();
		}
		
		public function setVolume(percent:Number){
			this._soundScreen.setVolume(percent);
		}
		
		public function isAudioPlaying():Boolean{
			return this._soundScreen.isPlaying_bl;
		}
		
		public function isAudioStopped():Boolean{
			return !this._soundScreen.isOpened_bl;
		}
		
		//#############################################//
		//EVENT HANDLERS
		//#############################################//
		private function startHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenStartHandler");
		}
		
		
		private function errorHandler(e){
			 ExternalInterface.call(this._instanceName_str + ".audioScreenErrorHandler", e.text);
		}
		
		private function updateTimeHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenUpdateTimeHandler", e.text, e.text2);
		}
		
		private function updateHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenUpdateHandler", e.nr);
		}
		
		private function progressHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenLoadProgressHandler", e.nr);
		}
		
		private function safeToScrubbHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenSafeToScrubbHandler");
		}
		
		private function stopHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenStopHandler");
			ExternalInterface.call(this._instanceName_str + ".audioScreenUpdateTimeHandler", "00:00/00:00");
		}
	
		private function playHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenPlayHandler");
		}
		
		private function pauseHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenPauseHandler");
		}
		
		private function soundCompleteHandler(e){
			ExternalInterface.call(this._instanceName_str + ".audioScreenPlayCompleteHandler");
		}
	}
}