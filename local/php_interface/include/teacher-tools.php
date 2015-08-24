<?
class TeacherTools{
	public static function getUserTeacherAccount($user_id = false){
		if(!CModule::IncludeModule('iblock')) return false;
		if(!$user_id){
			global $USER;
			$user_id = $USER->GetID();
		}

		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID");
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $user_id);
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, array('nTopCount' => 1), $arSelect);

		if($arItem = $res->GetNext()){
			return $arItem['ID'];
		}

		return false;
	}



}