package ro.fwd{

	import flash.events.Event;
	
	/**
	 * Description: This is used as an custom event to be dispatched by the Data class.
	 */
	
	public class SoundScreenEvent extends Event {
	
		public static const START:String="start";
		public static const ERROR:String="error";
		public static const STOP:String = "stop";
		public static const PAUSE:String = "allowScrubing_bl";
		public static const PLAY:String = "play";
		public static const UPDATE:String = "update";
		public static const UPDATE_TIME:String = "updateTime";
		public static const SAFE_TO_SCRUBB = "safeToScrubb";
		public static const SAFE_TO_UPDATE_VOLUME:String = "safeToUpdateVolume";
		public static const LOAD_PROGRESS:String = "progress";
		public static const SOUND_COMPLETE:String = "playComplete";
		
		private var _text:String;
		private var _text2:String;
		private var _number:Number;

		public function SoundScreenEvent(pType:String, text:String=null, text2:String=null, number:Number = 0,  pBubbles:Boolean=false, pCancelable:Boolean=false) {
			this._text = text;
			this._text2 = text2;
			this._number = number;
			super(pType, pBubbles ,pCancelable);
		}
		
		override public function clone():Event {
			return new SoundScreenEvent(type, _text, _text2, _number, bubbles, cancelable);
		}
		
		//Getters
		public function get text():String{
			return _text;
		};
		
		public function get text2():String{
			return _text2;
		};
		
		//Getters
		public function get nr():Number{
			return _number;
		};
	}
}