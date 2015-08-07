//FWDMLPUtils
(function (window){
	
	var FWDMLPUtils = function(){};
	
	FWDMLPUtils.dumy = document.createElement("div");
	
	//###################################//
	/* String */
	//###################################//
	FWDMLPUtils.trim = function(str){
		return str.replace(/\s/gi, "");
	};
	
	FWDMLPUtils.splitAndTrim = function(str, trim_bl){
		var array = str.split(",");
		var length = array.length;
		for(var i=0; i<length; i++){
			if(trim_bl) array[i] = FWDMLPUtils.trim(array[i]);
		};
		return array;
	};

	//#############################################//
	//Array //
	//#############################################//
	FWDMLPUtils.indexOfArray = function(array, prop){
		var length = array.length;
		for(var i=0; i<length; i++){
			if(array[i] === prop) return i;
		};
		return -1;
	};
	
	FWDMLPUtils.randomizeArray = function(aArray) {
		var randomizedArray = [];
		var copyArray = aArray.concat();
			
		var length = copyArray.length;
		for(var i=0; i< length; i++) {
				var index = Math.floor(Math.random() * copyArray.length);
				randomizedArray.push(copyArray[index]);
				copyArray.splice(index,1);
			}
		return randomizedArray;
	};
	

	//#############################################//
	/*DOM manipulation */
	//#############################################//
	FWDMLPUtils.parent = function (e, n){
		if(n === undefined) n = 1;
		while(n-- && e) e = e.parentNode;
		if(!e || e.nodeType !== 1) return null;
		return e;
	};
	
	FWDMLPUtils.sibling = function(e, n){
		while (e && n !== 0){
			if(n > 0){
				if(e.nextElementSibling){
					 e = e.nextElementSibling;	 
				}else{
					for(var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
				}
				n--;
			}else{
				if(e.previousElementSibling){
					 e = e.previousElementSibling;	 
				}else{
					for(var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
				}
				n++;
			}
		}
		return e;
	};
	
	FWDMLPUtils.getChildAt = function (e, n){
		var kids = FWDMLPUtils.getChildren(e);
		if(n < 0) n += kids.length;
		if(n < 0) return null;
		return kids[n];
	};
	
	FWDMLPUtils.getChildById = function(id){
		return document.getElementById(id) || undefined;
	};
	
	FWDMLPUtils.getChildren = function(e, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes){
				kids.push(c);
			}else if(c.nodeType === 1){
				kids.push(c);
			}
		}
		return kids;
	};
	
	FWDMLPUtils.getChildrenFromAttribute = function(e, attr, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDMLPUtils.hasAttribute(c, attr)){
				kids.push(c);
			}else if(c.nodeType === 1 && FWDMLPUtils.hasAttribute(c, attr)){
				kids.push(c);
			}
		}
		return kids.length == 0 ? undefined : kids;
	};
	
	FWDMLPUtils.getChildFromNodeListFromAttribute = function(e, attr, allNodesTypes){
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDMLPUtils.hasAttribute(c, attr)){
				return c;
			}else if(c.nodeType === 1 && FWDMLPUtils.hasAttribute(c, attr)){
				return c;
			}
		}
		return undefined;
	};
	
	FWDMLPUtils.getAttributeValue = function(e, attr){
		if(!FWDMLPUtils.hasAttribute(e, attr)) return undefined;
		return e.getAttribute(attr);	
	};
	
	FWDMLPUtils.hasAttribute = function(e, attr){
		if(e.hasAttribute){
			return e.hasAttribute(attr); 
		}else {
			var test = e.getAttribute(attr);
			return  test ? true : false;
		}
	};
	
	FWDMLPUtils.insertNodeAt = function(parent, child, n){
		var children = FWDMLPUtils.children(parent);
		if(n < 0 || n > children.length){
			throw new Error("invalid index!");
		}else {
			parent.insertBefore(child, children[n]);
		};
	};
	
	FWDMLPUtils.hasCanvas = function(){
		return Boolean(document.createElement("canvas"));
	};
	
	//###################################//
	/* DOM geometry */
	//##################################//
	FWDMLPUtils.hitTest = function(target, x, y){
		var hit = false;
		if(!target) throw Error("Hit test target is null!");
		var rect = target.getBoundingClientRect();
		
		if(x >= rect.left && x <= rect.left +(rect.right - rect.left) && y >= rect.top && y <= rect.top + (rect.bottom - rect.top)) return true;
		return false;
	};
	
	FWDMLPUtils.getScrollOffsets = function(){
		//all browsers
		if(window.pageXOffset != null) return{x:window.pageXOffset, y:window.pageYOffset};
		
		//ie7/ie8
		if(document.compatMode == "CSS1Compat"){
			return({x:document.documentElement.scrollLeft, y:document.documentElement.scrollTop});
		}
	};
	
	FWDMLPUtils.getViewportSize = function(){
		if(FWDMLPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1){
			return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
		}
		
		if(FWDMLPUtils.isMobile) return {w:window.innerWidth, h:window.innerHeight};
		return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
	};
	
	FWDMLPUtils.getViewportMouseCoordinates = function(e){
		var offsets = FWDMLPUtils.getScrollOffsets();
		
		if(e.touches){
			return{
				screenX:e.touches[0] == undefined ? e.touches.pageX - offsets.x :e.touches[0].pageX - offsets.x,
				screenY:e.touches[0] == undefined ? e.touches.pageY - offsets.y :e.touches[0].pageY - offsets.y
			};
		}
		
		return{
			screenX: e.clientX == undefined ? e.pageX - offsets.x : e.clientX,
			screenY: e.clientY == undefined ? e.pageY - offsets.y : e.clientY
		};
	};
	
	
	//###################################//
	/* Browsers test */
	//##################################//
	FWDMLPUtils.hasPointerEvent = (function(){
		return Boolean(window.navigator.msPointerEnabled);
	}());
	
	FWDMLPUtils.isMobile = (function (){
		if(FWDMLPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'kfsowi'];
	    for(i in agents) {
	    	 if(navigator.userAgent.toLowerCase().indexOf(agents[i].toLowerCase()) != -1) {
	            return true;
	        }
	    }
	    return false;
	}());
	
	FWDMLPUtils.isAndroid = (function(){
		 return (navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1);
	}());
	
	FWDMLPUtils.isChrome = (function(){
		return navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
	}());
	
	FWDMLPUtils.isSafari = (function(){
		return navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDMLPUtils.isOpera = (function(){
		return navigator.userAgent.toLowerCase().indexOf('opera') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDMLPUtils.isFirefox = (function(){
		return navigator.userAgent.toLowerCase().indexOf('firefox') != -1;
	}());
	
	FWDMLPUtils.isIE = (function(){
		var isIE =  navigator.userAgent.toLowerCase().indexOf('msie') != -1;
		return isIE || Boolean(!FWDMLPUtils.isIE && document.documentElement.msRequestFullscreen);
	}());
	
	FWDMLPUtils.isIE11 = (function(){
		return Boolean(!FWDMLPUtils.isIE && document.documentElement.msRequestFullscreen);
	}());
	
	FWDMLPUtils.isIEAndLessThen9 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
	}());
	
	FWDMLPUtils.isIEAndLessThen10 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 
		|| navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
		|| navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
	}());
	
	FWDMLPUtils.isIE7 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
	}());
	
	FWDMLPUtils.isApple = (function(){
		return navigator.appVersion.toLowerCase().indexOf('mac') != -1;
	}());
	
	FWDMLPUtils.hasFullScreen = (function(){
		return FWDMLPUtils.dumy.requestFullScreen || FWDMLPUtils.dumy.mozRequestFullScreen || FWDMLPUtils.dumy.webkitRequestFullScreen || FWDMLPUtils.dumy.msieRequestFullScreen;
	}());
	
	function get3d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    var position;
	    while (p = properties.shift()) {
	       if (typeof FWDMLPUtils.dumy.style[p] !== 'undefined') {
	    	   FWDMLPUtils.dumy.style.position = "absolute";
	    	   position = FWDMLPUtils.dumy.getBoundingClientRect().left;
	    	   FWDMLPUtils.dumy.style[p] = 'translate3d(500px, 0px, 0px)';
	    	   position = Math.abs(FWDMLPUtils.dumy.getBoundingClientRect().left - position);
	    	   
	           if(position > 100 && position < 900){
	        	   try{document.documentElement.removeChild(FWDMLPUtils.dumy);}catch(e){}
	        	   return true;
	           }
	       }
	    }
	    try{document.documentElement.removeChild(FWDMLPUtils.dumy);}catch(e){}
	    return false;
	};
	
	function get2d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    while (p = properties.shift()) {
	       if (typeof FWDMLPUtils.dumy.style[p] !== 'undefined') {
	    	   return true;
	       }
	    }
	    try{document.documentElement.removeChild(FWDMLPUtils.dumy);}catch(e){}
	    return false;
	};	
	
	//###############################################//
	/* various utils */
	//###############################################//
	FWDMLPUtils.onReady =  function(callbalk){
		if (document.addEventListener) {
			document.addEventListener( "DOMContentLoaded", function(){
				FWDMLPUtils.checkIfHasTransofrms();
				callbalk();
			});
		}else{
			document.onreadystatechange = function () {
				FWDMLPUtils.checkIfHasTransofrms();
				if (document.readyState == "complete") callbalk();
			};
		 }
		
	};
	
	FWDMLPUtils.checkIfHasTransofrms = function(){
		document.documentElement.appendChild(FWDMLPUtils.dumy);
		FWDMLPUtils.hasTransform3d = get3d();
		FWDMLPUtils.hasTransform2d = get2d();
		FWDMLPUtils.isReadyMethodCalled_bl = true;
	};
	
	FWDMLPUtils.disableElementSelection = function(e){
		try{e.style.userSelect = "none";}catch(e){};
		try{e.style.MozUserSelect = "none";}catch(e){};
		try{e.style.webkitUserSelect = "none";}catch(e){};
		try{e.style.khtmlUserSelect = "none";}catch(e){};
		try{e.style.oUserSelect = "none";}catch(e){};
		try{e.style.msUserSelect = "none";}catch(e){};
		try{e.msUserSelect = "none";}catch(e){};
		e.onselectstart = function(){return false;};
	};
	
	FWDMLPUtils.getUrlArgs = function urlArgs(string){
		var args = {};
		var query = string.substr(string.indexOf("?") + 1) || location.search.substring(1);
		var pairs = query.split("&");
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	
	FWDMLPUtils.isReadyMethodCalled_bl = false;
	
	window.FWDMLPUtils = FWDMLPUtils;
}(window));

