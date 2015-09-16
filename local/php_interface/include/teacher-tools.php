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

	// проверяет является ли $user_id владельцем записи $teacher_elem_id
	public static function chkTeacherRights($user_id, $teacher_elem_id){
		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID", "NAME");
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $user_id, 'ID' => $teacher_elem_id);
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);

		if($arItem = $res->GetNext()){
			return true;
		}

		return false;

	}


}