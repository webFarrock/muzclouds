<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

class CITeacherMainInfo extends CBitrixComponent{
	public function executeComponent(){

		$this->arResult = array();
		CModule::IncludeModule('iblock');


		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT"){
			if(!check_bitrix_sessid()){
				$arError[] = array(
					"code" => "session time is up",
					"title" => GetMessage("¬аша сесси€ истекла. ќтправьте сообщение повторно"));
			}else{

				$el = new CIBlockElement;

				$arLoadProductArray = Array(
					"IBLOCK_ID"    => $USER->GetID(), // элемент изменен текущим пользователем
					"MODIFIED_BY"    => $USER->GetID(), // элемент изменен текущим пользователем
					"IBLOCK_SECTION" => false,          // элемент лежит в корне раздела
					"PROPERTY_VALUES"=> $PROP,
					"NAME"           => "Ёлемент",
					"ACTIVE"         => "Y",            // активен

					"DETAIL_PICTURE" => CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"]."/image.gif")
				);

				//$res = $el->Update($PRODUCT_ID, $arLoadProductArray);


			}

			if(empty($arErrors)){

				LocalRedirect('');

			}else{
				$arResult = $arFields;
			}

		}else{

		}

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
		$arSelect   = Array("ID", "IBLOCK_ID", "NAME", 'PREVIEW_PICTURE', 'DETAIL_PICTURE', 'PREVIEW_TEXT', 'DETAIL_TEXT');
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $this->arResult['PROFILE']);
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, array('nTopCount' => 1), $arSelect);

		while($obItem = $res->GetNextElement()){
			$arItem = $obItem->GetFields();
			$arItem['PROPS'] = $obItem->GetProperties();

		}


		$this->arResult['TEACHER'] = $arItem;

	}


}