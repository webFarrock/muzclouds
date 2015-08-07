package ro.fwd{
	
	import flash.display.Sprite;
	import flash.events.EventDispatcher;
	import flash.net.URLRequest;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.utils.setInterval;
	import flash.utils.clearInterval;

	public class SoundScreen extends EventDispatcher {
		
		private var _self:SoundScreen;
		
		private var _sound:Sound;
		private var _channel:SoundChannel;
		
		public var sourcePath_str = null;
		public var _position:Number = 0;//the position of the sound
		public var volume:Number=0;//the curretn volume
		
		private var _updateUpdateId_int:int;
		private var _updateProgressId_int:int;
		private var _safeToBeControllerId_int:int;
		
		public var dispatchSafeToUpdateVolume_bl:Boolean = false;
		public var isPlaying_bl:Boolean=false
		public var allowScrubing_bl:Boolean = false;//used for allowing the scrubbing
		public var isOpened_bl:Boolean = false;
		private var _hasError_bl:Boolean = false;
		private var _isStartEventDispatched_bl:Boolean = false;
		
		//constructor
		public function SoundScreen(volume:Number =0) {
			_self = this;
			this.volume = volume;
		}
		
		//########################################//
		// Setup audio
		//########################################//
		public function setupAudio():void{
			_sound = new Sound(new URLRequest(this.sourcePath_str));
			_sound.addEventListener(Event.OPEN, onSoundOpenHandler);
			_sound.addEventListener(IOErrorEvent.IO_ERROR, onSoundIOErrorHandler);
		}
		
		private function onSoundOpenHandler(e:Event):void{
			this.isOpened_bl = true;
			this.startToUpdateProgress();
			this.startSafeToBeControlled();
			this.play();
		}
		
		private function onSoundIOErrorHandler(e:IOErrorEvent):void{
			this._hasError_bl = true;
			var text  = "source not found <font color='#FFFFFF'>" + this.sourcePath_str + "</font>";
			this.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.ERROR, text));
		}
		
		//when the sound is has finish to play
		private function onSoundCompleteHandler(e:Event):void{
			dispatchEvent(new SoundScreenEvent(SoundScreenEvent.SOUND_COMPLETE));
		}
		
		private function destroyAudio():void{
			this.cleanEventsAndIntervals();
			if(this._channel != null){
			   this._channel.stop();
			   this._channel = null;
			}
			if(this._sound != null){
				try{this._sound.close()}catch(e:Error){};
				this._sound =  null;
			}
		}
		
		//#############################################//
		//Set  source
		//#############################################//
		public function setSource(sourcePath:String){
			this._hasError_bl = false;
			this.sourcePath_str = sourcePath;
			if(this._sound) this.stop();
		};
		
		public function pause():void{
			if(this.isOpened_bl == false || this._hasError_bl) return;
			this.stopToUpdateAudio();
			_channel.stop();
			this._position = this._channel.position;
			isPlaying_bl = false;
			dispatchEvent(new SoundScreenEvent(SoundScreenEvent.PAUSE));
		}
		
		public function play(overwrite:Boolean = false):void{
			if(this._sound == null){
				this.cleanEventsAndIntervals();
				this.isPlaying_bl = false;
				this.allowScrubing_bl = false;
				this.dispatchSafeToUpdateVolume_bl = true;
				this.setupAudio();
			}else{
				if((this.isPlaying_bl == true || this.isOpened_bl == false) && overwrite == false) return;
				if(this._channel != null) this._channel.stop();
				this.isPlaying_bl = true;
				this._channel = _sound.play(this._position);
				this.setVolume(volume);
				this.startToUpdateAudio();
				if(!this._isStartEventDispatched_bl){
					dispatchEvent(new SoundScreenEvent(SoundScreenEvent.START));
					this._isStartEventDispatched_bl = true;
				}
				dispatchEvent(new SoundScreenEvent(SoundScreenEvent.PLAY));
				this._channel.addEventListener(Event.SOUND_COMPLETE, onSoundCompleteHandler);
				
			}
		}
		
		public function stop(){
			if(this._sound == null) return;
			this.isOpened_bl = false;
			this.isPlaying_bl = false;
			this._isStartEventDispatched_bl = false;
			this._position = 0;
			this.destroyAudio();
			this.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.UPDATE_TIME, "00:00", "00:00"));
			this.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.STOP));
			this.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.LOAD_PROGRESS, "", "", 0));
		};
		
		//############################################//
		//Check if audio is safe to be controlled.
		//############################################//
		private function startSafeToBeControlled(){
			clearInterval(this._safeToBeControllerId_int);
			this._safeToBeControllerId_int = setInterval(this.safeToBeControlled, 16);
		};
		
		private function stopSafeToBeControlled(){
			clearInterval(this._safeToBeControllerId_int);
		};
		
		private function safeToBeControlled():void{
			if(!_self || !_self._sound || !_self._channel) return;
			var percentLoaded = (_sound.bytesLoaded/_sound.bytesTotal) * 100;
			
			if(percentLoaded >= 0.01){
				 _self.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.SAFE_TO_SCRUBB));
				 this.stopSafeToBeControlled();
			}
			
			if(this.dispatchSafeToUpdateVolume_bl && _sound.length){
				_self.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.SAFE_TO_UPDATE_VOLUME));
				_self.dispatchSafeToUpdateVolume_bl = false;
			}
		}
		
		//##############################################//
		// Update audio
		//#############################################//
		private function startToUpdateAudio(){
			clearInterval(this._updateUpdateId_int);
			this._updateUpdateId_int = setInterval(this.updateAudio, 100);
		};
		
		private function stopToUpdateAudio(){
			clearInterval(this._updateUpdateId_int);
		};
		
		//this function is dispatching an event with an enterframe informing who ever is listening of the changes in his properties
		private function updateAudio():void{
			try{
				if(!_self || !_self._sound || !_self._channel) return;
				if(!this.allowScrubing_bl){
					var percentLoaded = _self._sound.bytesLoaded/_self._sound.bytesTotal;
					var percentPlayed = (Number(_self._channel.position.toFixed(2))/ Number(_self._sound.length.toFixed(2))) * percentLoaded;
					_self.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.UPDATE, "", "", percentPlayed));
				}
				
				var curTime =  String(_self.formatTime(_self._channel.position/1000));
				var totalTime =  String(_self.formatTime(_self._sound.length/1000));
				
				this.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.UPDATE_TIME, curTime, totalTime));
			}catch(e:Error){}
		}
		
		//###########################################//
		// Update progress
		//##########################################//
		private function startToUpdateProgress(){
			clearInterval(this._updateProgressId_int);
			this._updateProgressId_int = setInterval(this.updateProgress, 100);
		};
		
		private function stopToUpdateProgress(){
			clearInterval(this._updateProgressId_int);
		};
		
		private function updateProgress(){
			var percentLoaded = _sound.bytesLoaded/_sound.bytesTotal;
			if(percentLoaded == 1) _self.stopToUpdateProgress();
			_self.dispatchEvent(new SoundScreenEvent(SoundScreenEvent.LOAD_PROGRESS, "", "", percentLoaded));
		};
		
		//################################################//
		//Scrubb.
		//################################################//
		public function startToScrub():void{
			if(this._sound == null) return;
			//this.play();
			this.allowScrubing_bl = true;
		}
		
		//stop scrubbing
		public function stopToScrub():void{
			if(this._sound == null) return;
			//this.play();
			this.allowScrubing_bl = false;
		}
		
		public function scrub(percent:Number){
			if(this._sound == null) return;
			if(percent > 0.999) percent = 0.999;
			this._position = percent * _sound.length;
			this.play(true);
		}
		
		//##########################################//
		//set volume
		//##########################################//
		public function setVolume(vol:Number):void{
			volume = vol;
			if(this._channel) this._channel.soundTransform =  new SoundTransform(volume);
		}
		
		public function replay(){
			this.scrub(0);
		}
		
		//#############################################//
		// Fromat time
		//#############################################//
		public function formatTime(seconds){
			var hours = Math.floor(seconds / (60 * 60));
			
		    var divisor_for_minutes = seconds % (60 * 60);
		    var minutes = Math.floor(divisor_for_minutes / 60);

		    var divisor_for_seconds = divisor_for_minutes % 60;
		    var seconds = Math.ceil(divisor_for_seconds);
		    
		    minutes = (minutes >= 10) ? minutes : "0" + minutes;
		    seconds = (seconds >= 10) ? seconds : "0" + seconds;
			
			if(hours > 0){
				 return hours + ":" + minutes + ":" + seconds;
			}else{
				 return minutes + ":" + seconds;
			}
		};
		
		//###############################################//
		//clean all
		//###############################################//
		private function cleanEventsAndIntervals(){
			if(this._sound == null) return;
			this.stopSafeToBeControlled();
			this.stopToUpdateProgress();
			this.stopToUpdateAudio();
			
			if(_channel != null){
			 _channel.removeEventListener(Event.SOUND_COMPLETE, onSoundCompleteHandler);
			}
			if(_sound != null){
				_sound.removeEventListener(Event.OPEN, onSoundOpenHandler);
				_sound.removeEventListener(IOErrorEvent.IO_ERROR, onSoundIOErrorHandler);
			}
			
		};
		
		
		
	}
}