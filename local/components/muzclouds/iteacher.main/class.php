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
				if(TeacherTools::chkTeacherRights($USER->GetID(), $_REQUEST['TEACHER_ELEMENT_ID'])){

					$el = new CIBlockElement;

					$fio = $_REQUEST['LAST_NAME'].' '.$_REQUEST['NAME'].' '.$_REQUEST['SECOND_NAME'];

					$arTeacher = Array(
						"IBLOCK_ID"    => IBLOCK_ID_TEACHERS, // элемент изменен текущим пользователем
						"MODIFIED_BY"    => $USER->GetID(), // элемент изменен текущим пользователем
						"IBLOCK_SECTION" => $_REQUEST['SECTIONS'],          // элемент лежит в корне раздела
						"NAME"           => "Преподаватель ".$fio,
						"ACTIVE"         => $_REQUEST['ACTIVE'],            // активен
					);

					if($res = $el->Update($_REQUEST['TEACHER_ELEMENT_ID'], $arTeacher)){
						CIBlockElement::SetPropertyValuesEx($_REQUEST['TEACHER_ELEMENT_ID'], IBLOCK_ID_TEACHERS, array(
							'LAST_NAME'     => $_REQUEST['LAST_NAME'],
							'NAME'          => $_REQUEST['NAME'],
							'SECOND_NAME'   => $_REQUEST['SECOND_NAME'],
							'CONT_EMAIL'    => $_REQUEST['CONT_EMAIL'],
							'CONT_PHONE'    => $_REQUEST['CONT_PHONE'],
							'CONT_SKYPE'    => $_REQUEST['CONT_SKYPE'],
						));

					}else{
						$arErrors[] = $el->LAST_ERROR;
					}
				}else{// chkTeacherRights
					$arErrors[] = 'Ошибка доступа до записи с объявлением';
				}
			}

			if(empty($arErrors)){

				LocalRedirect('');

			}else{
				//
				$this->getProfileInfo();
				$this->getTeacherInfo();
				$this->getWhatTeachEnum();
				$this->getTeachingSections();

				$this->arResult['TEACHER']['PROPS']["LAST_NAME"]['VALUE']   = $_REQUEST['LAST_NAME'];
				$this->arResult['TEACHER']['PROPS']["NAME"]['VALUE']        = $_REQUEST['NAME'];
				$this->arResult['TEACHER']['PROPS']["SECOND_NAME"]['VALUE'] = $_REQUEST['SECOND_NAME'];
				$this->arResult['TEACHER']['PROPS']["CONT_EMAIL"]['VALUE']  = $_REQUEST['CONT_EMAIL'];
				$this->arResult['TEACHER']['PROPS']["CONT_PHONE"]['VALUE']  = $_REQUEST['CONT_PHONE'];
				$this->arResult['TEACHER']['PROPS']["CONT_SKYPE"]['VALUE']  = $_REQUEST['CONT_SKYPE'];
				$this->arResult['TEACHER']['ACTIVE']                        = $_REQUEST['ACTIVE'];
				$this->arResult['TEACHER']['SECTIONS']                      = $_REQUEST['SECTIONS'];
				$this->arResult['ERRORS'] = $arErrors;
			}


		}else{
			$this->getProfileInfo();
			$this->getTeacherInfo();
			$this->getWhatTeachEnum();
			$this->getTeachingSections();
		}



		$this->includeComponentTemplate();

		$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/plugins/iCheck/all.css');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/iCheck/icheck.min.js');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/input-mask/jquery.inputmask.js');;
	}

	public function onPrepareComponentParams($arParams){
		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT" && check_bitrix_sessid()){

			$_REQUEST['TEACHER_ELEMENT_ID'] = intval($_REQUEST['TEACHER_ELEMENT_ID']);
			$_REQUEST['ACTIVE'] = $_REQUEST['ACTIVE']?'Y':'N';

			$_REQUEST['NAME']           = trim($_REQUEST['NAME']);
			$_REQUEST['LAST_NAME']      = trim($_REQUEST['LAST_NAME']);
			$_REQUEST['SECOND_NAME']    = trim($_REQUEST['SECOND_NAME']);

			$_REQUEST['CONT_EMAIL']     = trim($_REQUEST['CONT_EMAIL']);
			$_REQUEST['CONT_SKYPE']     = trim($_REQUEST['CONT_SKYPE']);
			$_REQUEST['CONT_PHONE']     = trim($_REQUEST['CONT_PHONE']);
		}
	}

	public function getProfileInfo(){

		global $USER;
		$rsUser = CUser::GetByID($USER->GetID());
		$arUser = $rsUser->Fetch();

		$this->arResult['PROFILE'] = $arUser;
	}

	public function getTeacherInfo(){

		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID", "ACTIVE", "NAME",);
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