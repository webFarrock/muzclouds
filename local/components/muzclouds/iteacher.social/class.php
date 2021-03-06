<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
CBitrixComponent::includeComponentClass('muzclouds:iteacher.edit.parent');
class CITeacherSocial extends CITeacherEditParent{
	public function executeComponent(){
		global  $APPLICATION,
		        $USER;

		CModule::IncludeModule('iblock');

		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT"){
			if(!check_bitrix_sessid()){
				$arError[] = array(
					"code" => "session time is up",
					"title" => GetMessage("Ваша сессия истекла. Отправьте сообщение повторно"));
			}else{
				if(TeacherTools::chkTeacherRights($USER->GetID(), $this->arParams['TEACHER_ELEMENT_ID'])){

					$el = new CIBlockElement;

					$arTeacher = Array(
						"IBLOCK_ID"    => IBLOCK_ID_TEACHERS,
						"MODIFIED_BY"    => $USER->GetID(),
					);

					if($res = $el->Update($this->arParams['TEACHER_ELEMENT_ID'], $arTeacher)){
						CIBlockElement::SetPropertyValuesEx($this->arParams['TEACHER_ELEMENT_ID'], IBLOCK_ID_TEACHERS, array(
							'SOC_VK'        => $this->arResult['_REQUEST']['SOC_VK'],
							'SOC_FACEBOOK'  => $this->arResult['_REQUEST']['SOC_FACEBOOK'],
							'SOC_TWITTER'   => $this->arResult['_REQUEST']['SOC_TWITTER'],
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

				$this->arResult['TEACHER']['PROPS']["SOC_VK"]['VALUE']          = $this->arResult['_REQUEST']['SOC_VK'];
				$this->arResult['TEACHER']['PROPS']["SOC_FACEBOOK"]['VALUE']    = $this->arResult['_REQUEST']['SOC_FACEBOOK'];
				$this->arResult['TEACHER']['PROPS']["SOC_TWITTER"]['VALUE']     = $this->arResult['_REQUEST']['SOC_TWITTER'];

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
		$arParams['TEACHER_ELEMENT_ID'] = intval($_REQUEST['TEACHER_ELEMENT_ID']);

		$this->arResult['_REQUEST'] = array();
		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT" && check_bitrix_sessid()){

			foreach($_REQUEST as $key => $val){

				$this->arResult['_REQUEST'][$key] = htmlspecialcharsEx($val);
				$this->arResult['_REQUEST'][$key] = trim($val);

				if(substr_count($key, 'SOC_')){
					$val = trim($val);
					$val = str_ireplace('http://', '', $val);
					$val = str_ireplace('https://', '', $val);

					if($val){
						$val = 'https://'.$val;
					}

					$this->arResult['_REQUEST'][$key] = $val;
				}


			}

		}

		return $arParams;
	}



}