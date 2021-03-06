<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
CBitrixComponent::includeComponentClass('muzclouds:iteacher.edit.parent');
class CITeacherMainInfo extends CITeacherEditParent{
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



}