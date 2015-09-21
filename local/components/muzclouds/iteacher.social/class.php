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

					$arTeacher = Array(
						"IBLOCK_ID"    => IBLOCK_ID_TEACHERS, // элемент изменен текущим пользователем
						"MODIFIED_BY"    => $USER->GetID(), // элемент изменен текущим пользователем
					);

					if($res = $el->Update($_REQUEST['TEACHER_ELEMENT_ID'], $arTeacher)){
						CIBlockElement::SetPropertyValuesEx($_REQUEST['TEACHER_ELEMENT_ID'], IBLOCK_ID_TEACHERS, array(
							'SOC_VK'        => $_REQUEST['SOC_VK'],
							'SOC_FACEBOOK'  => $_REQUEST['SOC_FACEBOOK'],
							'SOC_TWITTER'   => $_REQUEST['SOC_TWITTER'],
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

				$this->arResult['TEACHER']['PROPS']["SOC_VK"]['VALUE']          = $_REQUEST['SOC_VK'];
				$this->arResult['TEACHER']['PROPS']["SOC_FACEBOOK"]['VALUE']    = $_REQUEST['SOC_FACEBOOK'];
				$this->arResult['TEACHER']['PROPS']["SOC_TWITTER"]['VALUE']     = $_REQUEST['SOC_TWITTER'];

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

			foreach($_REQUEST as $key => $val){
				if(substr_count($key, 'SOC_')){
					$val = trim($val);
					$val = str_ireplace('http://', '', $val);
					$val = str_ireplace('https://', '', $val);

					if($val){
						$val = 'https://'.$val;
					}

					$_REQUEST[$key] = $val;
				}
			}


			$_REQUEST['SOC_VK']             = trim($_REQUEST['SOC_VK']);

			$_REQUEST['SOC_FACEBOOK']       = trim($_REQUEST['SOC_FACEBOOK']);
			$_REQUEST['SOC_TWITTER']        = trim($_REQUEST['SOC_TWITTER']);
		}
	}



}