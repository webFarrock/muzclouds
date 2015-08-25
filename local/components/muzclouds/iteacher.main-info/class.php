<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

class CITeacherMainInfo extends CBitrixComponent{
	public function executeComponent(){

		$this->arResult = array();


		CModule::IncludeModule('iblock');

		$this->getProfileInfo();
		$this->getTeacherInfo();

		$this->includeComponentTemplate();
	}

	public function getProfileInfo(){

		global $USER;
		$rsUser = CUser::GetByID($USER->GetID());
		$arUser = $rsUser->Fetch();

		$this->arResult['PROFILE'] = $arUser;
	}

	public function getTeacherInfo(){
		global $USER;

		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM", 'PREVIEW_PICTURE', 'PREVIEW_TEXT', 'DETAIL_TEXT');
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);

		while($obItem = $res->GetNextElement()){
			$arItem = $obItem->GetFields();

			/*
			if($arItem['PREVIEW_PICTURE']){
				$arItem['PREVIEW_PICTURE'] = CFile::GetFileArray($arItem['PREVIEW_PICTURE']);
			}
			*/

		}

		$this->arResult['TEACHER'] = $arItem;

	}


}