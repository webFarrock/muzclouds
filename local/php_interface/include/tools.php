<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

Class GarbageStorage{
	private static $storage = array();
	public static function set($name, $value){ self::$storage[$name] = $value;}
	public static function get($name){ return self::$storage[$name];}
}

class ShortTools{

	static public function getIBElementsName(array $arID){
		if(CModule::IncludeModule("iblock")){
			$arOrder    = array('ORDER' => 'DESC', 'NAME' => 'ASC');
			$arSelect   = array("ID", "IBLOCK_ID", "NAME");
			$arFilter   = array("ID"=>$arID, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
			$res        = CIBlockElement::GetList($arOrder, $arFilter, false, false, $arSelect);

			while($item = $res->GetNext()){
				$items[$item['ID']] = $item['NAME'];
			}

			return $items;
		}

	}

	static function getUserField($entity_id, $value_id, $property_id){
		$arUF = $GLOBALS["USER_FIELD_MANAGER"]->GetUserFields($entity_id, $value_id);
		return $arUF[$property_id]["VALUE"];
	}


	static function setUserField($entity_id, $value_id, $uf_id, $uf_value){
		return $GLOBALS["USER_FIELD_MANAGER"]->Update($entity_id, $value_id, array($uf_id => $uf_value));
	}

	static public function getYouTubeCode($url){

		$code = self::getYouTubeCodeFromURL($url);
		if(!empty($code)) return $code;

		$code = self::getYouTubeCodeFromEmbed($url);

		return $code;
	}

	static public function getYouTubeCodeFromURL($url){

		$parsed_url = parse_url($url);

		if($parsed_url['query']){
			parse_str($parsed_url['query'], $get_array);
			return $get_array['v'];
		}
		return false;
	}

	static public function getYouTubeCodeFromEmbed($url) {
		$v = false;
		$url = add_http(trim($url,"//"));
		$parsed_url = parse_url($url);
		parse_str($parsed_url['query']);
		if (!$v) {
			$parsed_path = explode("/",$parsed_url['path']);
			$last = last($parsed_path);
			$id = $last;
		} else {
			$id = $v;
		}
		return $id;
	}

	public static function getUserFullNameById($id){
		if(!$id) return false;

		$rsUser = CUser::GetByID($id);
		$arUser = $rsUser->Fetch();

		return $arUser['LAST_NAME'] .' '. $arUser['NAME'];
	}

	public static function getUserLoginById($id){
		if(!$id) return false;

		$rsUser = CUser::GetByID($id);
		$arUser = $rsUser->Fetch();

		return $arUser['LOGIN'];
	}

	public static function removeItemFromArray($item, $array){

		$key = array_search($item, $array);

		if (0 === $key || !$key === false){
			unset($array[$key]);
		}

		return $array;
	}

	public static function getElementNameById($id){
		if(!CModule::IncludeModule("iblock")) return false;

		$res = CIBlockElement::GetByID($id);
		if($arRes = $res->GetNext()){
			return $arRes['NAME'];
		}

	}

	public static function getPropertyEnumValue($id){
		$property = CIBlockPropertyEnum::GetByID($id);
		if(is_array($property)){
			return $property['VALUE'];
		}
	}

	public static function getPropertyEnumXmlId($id){
		$property = CIBlockPropertyEnum::GetByID($id);
		if(is_array($property)){
			return $property['XML_ID'];
		}
	}

	public static function getActiveOrders(){
		if(!CModule::IncludeModule("iblock")) return false;
		global $USER;

		$arOrder = array();
		$arFilter = array (
			"IBLOCK_ID"=> IBLOCK_ID_LESSONS_ORDER,
			"ACTIVE" => "Y",
			'PROPERTY_TEACHER' => $USER->GetID(),
		);

		$arSelect = array(
			"ID",
			"IBLOCK_ID",
			"NAME",
		);

		$rsItems = CIBlockElement::GetList($arOrder, $arFilter, false, false, $arSelect);

		return $rsItems->SelectedRowsCount();


	}

	public static function ShowAlert($arParams){

		global $APPLICATION;

		if($arParams['MESSAGE'] <> ""){

			if(!$arParams['ICO'])       $arParams['ICO'] = 'fa-ban';
			if(!$arParams['CLASSES'])   $arParams['CLASSES'] = 'alert-danger';
			if(!$arParams['HEADER'])    $arParams['HEADER'] = 'Ошибка!';

			$APPLICATION->IncludeComponent(
				"bitrix:system.show_message",
				"alert",
				Array(
					"HIDE_CLOSE_BTN"    => $arParams['HIDE_CLOSE_BTN'],
					"ICO"               => $arParams['ICO'],
					"HEADER"            => $arParams['HEADER'],
					"MESSAGE"           => $arParams['MESSAGE'],
					"CLASSES"           => $arParams['CLASSES'],
				),null,array("HIDE_ICONS" => "Y")
			);
		}
	}
	public static function ShowCallout($arParams){

		global $APPLICATION;

		if(!$arParams['CLASSES'])   $arParams['CLASSES'] = 'callout-danger';

		if($arParams['MESSAGE'] <> ""){
			$APPLICATION->IncludeComponent(
				"bitrix:system.show_message",
				"callout",
				Array(
					"HEADER"    => $arParams['HEADER'],
					"MESSAGE"   => $arParams['MESSAGE'],
					"CLASSES"   => $arParams['CLASSES'],
				),null,array("HIDE_ICONS" => "Y")
			);
		}
	}

}


function pre($ar){
	echo '<pre>';
	print_r($ar);
	echo '</pre>';

}
function jsDump($ar) {
	global $USER;
	if ($USER->IsAdmin()) {
		echo "<script>var init = true; console.log(JSON.parse('".addslashes(json_encode($ar))."'))</script>";
	}
}
function jsTree($var, $search_id = 'jsTree') {
	echo $search_id;
	if (is_array($var) && count($var) > 0) {
		truncArray($var, 200);
	}
	echo "<div class='jtree-container' data-jtree='".htmlspecialchars(json_encode($var), ENT_QUOTES, 'UTF-8')."'></div>";
}
function truncArray(&$ar, $len) {
	if (intval($len) > 0 && count($ar) > 0) {
		foreach ($ar as &$var) {
			if (is_array($var)) {
				truncArray($var, $len);
			} else if (is_string($var) && strlen($var) > $len) {
				$var = TruncateText($var, $len);
			}
		}
	}
}
function check_array($needle,$haystack){
	$result = false;
	if (!empty($needle)) {
		if (is_array($haystack)) {
			if (count($haystack) > 0) {
				$result = in_array($needle,$haystack);
			} else {
				$result = true;
			}
		} else {
			$result = true;
		}
	}
	return $result;
}
function is_assoc($arr)
{
	return array_keys($arr) !== range(0, count($arr) - 1);
}
function get_row_keys ($row, $array) {
	$row_keys = array();
	if (!is_assoc($array)) {
		$cnt = count($array);
		$last = $cnt-1;
		for ($i = 1; $i < intval(count($array)/$row); $i++) {
			$row_keys[] = $row*$i-1;
		}
		if ($last_i = array_search($last, $row_keys)) {
			unset($last_i);
		}
		return $row_keys;
	}
	return false;
}

function add_http($url) {
	if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
		$url = "http://" . $url;
	}
	return $url;
}
function tick(&$counter) {
	$counter = abs($counter-1);
	return $counter;
}
function abs_path($pathname) {
	return $_SERVER['DOCUMENT_ROOT'].$pathname;
}
function first($array) {
	if (!is_array($array)) return $array;
	if (!count($array)) return null;
	reset($array);
	return $array[key($array)];
}

function last($array) {
	if (!is_array($array)) return $array;
	if (!count($array)) return null;
	end($array);
	return $array[key($array)];
}
function getYouTubeId($url) {
	$v = false;
	$url = add_http(trim($url,"//"));
	$parsed_url = parse_url($url);
	parse_str($parsed_url['query']);
	if (!$v) {
		$parsed_path = explode("/",$parsed_url['path']);
		$last = last($parsed_path);
		$id = $last;
	} else {
		$id = $v;
	}
	return $id;
}
function is_row($current, $row/*, $count*/) {
	if ($current == $row - 1) {
		return true;
	}
	return false;
}