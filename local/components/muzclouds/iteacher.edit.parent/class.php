<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

class CITeacherEditParent extends CBitrixComponent{

	public function getProfileInfo(){

		global $USER;
		$rsUser = CUser::GetByID($USER->GetID());
		$arUser = $rsUser->Fetch();

		$this->arResult['PROFILE'] = $arUser;
	}

	public function getTeacherInfo(){

		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID", "ACTIVE", "NAME", "PREVIEW_TEXT", "DETAIL_TEXT");
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $this->arResult['PROFILE']['ID']);
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, array('nTopCount' => 1), $arSelect);

		if($obItem = $res->GetNextElement()){
			$arItem = $obItem->GetFields();
			$arItem['PROPS'] = $obItem->GetProperties();

			$db_groups = CIBlockElement::GetElementGroups($arItem['ID']);
			while($ar_group = $db_groups->Fetch()){
				$arItem['SECTIONS'][] = $ar_group['ID'];
			}
		}

		$this->arResult['TEACHER'] = $arItem;

	}


	public function getWhatTeachEnum(){
		$db_enum_list = CIBlockProperty::GetPropertyEnum("WHAT_TEACH", Array(), Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS));
		while($ar_enum_list = $db_enum_list->GetNext()){
			$this->arResult['WHAT_TEACH_ENUM'][] = $ar_enum_list;
		}
	}

	public function getTeachingSections(){
		$arSort     = Array('SORT' => 'ASC');
		$arSelect   = Array("ID", "IBLOCK_ID", "NAME");
		$arFilter   = Array('IBLOCK_ID'=>IBLOCK_ID_TEACHERS, 'GLOBAL_ACTIVE'=>'Y', 'DEPTH_LEVEL' => 1);
		$db_list    = CIBlockSection::GetList($arSort, $arFilter, false, $arSelect);

		while($ar_result = $db_list->GetNext()){
			$this->arResult['TEACHING_SECTIONS'][] = $ar_result;
		}

	}



}