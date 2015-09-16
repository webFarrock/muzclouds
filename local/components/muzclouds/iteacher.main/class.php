<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

class CITeacherMainInfo extends CBitrixComponent{
	public function executeComponent(){
		global  $APPLICATION,
				$USER;

		$this->arResult = array();
		CModule::IncludeModule('iblock');


		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT"){
			if(!check_bitrix_sessid()){
				$arError[] = array(
					"code" => "session time is up",
					"title" => GetMessage("Ваша сессия истекла. Отправьте сообщение повторно"));
			}else{
				if(TeacherTools::chkTeacherRights($USER->GetID(), $_REQUEST['TEACHER_ELEMENT_ID']))
				$el = new CIBlockElement;


				$fio = $_REQUEST['LAST_NAME'].' '.$_REQUEST['NAME'].' '.$_REQUEST['SECOND_NAME'];

				$arTeacher = Array(
					"IBLOCK_ID"    => $USER->GetID(), // элемент изменен текущим пользователем
					"MODIFIED_BY"    => $USER->GetID(), // элемент изменен текущим пользователем
					//"IBLOCK_SECTION" => false,          // элемент лежит в корне раздела
					//"PROPERTY_VALUES"=> $PROP,
					"NAME"           => "Преподаватель ".$fio,
					"ACTIVE"         => $_REQUEST['ACTIVE'],            // активен
				);

				if($res = $el->Update($_REQUEST['TEACHER_ELEMENT_ID'], $arTeacher)){
					CIBlockElement::SetPropertyValuesEx($_REQUEST['TEACHER_ELEMENT_ID'], IBLOCK_ID_TEACHERS, array(
						'LAST_NAME'     => $_REQUEST['LAST_NAME'],
						'NAME'          => $_REQUEST['NAME'],
						'SECOND_NAME'   => $_REQUEST['SECOND_NAME'],
						//'' => $_REQUEST[''],
					));

				}





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

		$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/plugins/iCheck/all.css');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/iCheck/icheck.min.js');
	}

	public function onPrepareComponentParams($arParams){
		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT" && check_bitrix_sessid()){
			$_REQUEST['TEACHER_ELEMENT_ID'] = intval($_REQUEST['TEACHER_ELEMENT_ID']);
			$_REQUEST['ACTIVE'] = $_REQUEST['ACTIVE']?'Y':'N';

		}
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
		$arSelect   = Array("ID", "IBLOCK_ID", "ACTIVE", "NAME", 'PREVIEW_PICTURE', 'DETAIL_PICTURE', 'PREVIEW_TEXT', 'DETAIL_TEXT');
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $this->arResult['PROFILE']);
		$res        = CIBlockElement::GetList($arSort, $arFilter, false, array('nTopCount' => 1), $arSelect);

		while($obItem = $res->GetNextElement()){
			$arItem = $obItem->GetFields();
			$arItem['PROPS'] = $obItem->GetProperties();

		}


		$this->arResult['TEACHER'] = $arItem;

	}



}