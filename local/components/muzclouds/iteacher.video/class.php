<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
CBitrixComponent::includeComponentClass('muzclouds:iteacher.edit.parent');
class CITeacherVideo extends CITeacherEditParent{
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

						CIBlockElement::SetPropertyValueCode($this->arParams['TEACHER_ELEMENT_ID'], 'MY_VIDEO', $this->arResult['_REQUEST']['MY_VIDEO']);

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

				$this->arResult['TEACHER']['PROPS']["MY_VIDEO"] = $this->arResult['_REQUEST']['MY_VIDEO'];

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

				$this->arResult['_REQUEST'][$key] = $val;

				if(substr_count($key, 'MY_VIDEO')){

					foreach($val as $keyVideo => $arVideo){
						if($arVideo['VALUE']){
							$arVideo['DESCRIPTION'] = trim($arVideo['DESCRIPTION']);
							$arVideo['DESCRIPTION'] = htmlspecialcharsEx($arVideo['DESCRIPTION']);
							$arVideo['VALUE'] = trim($arVideo['VALUE']);
							$arVideo['VALUE'] = htmlspecialcharsEx($arVideo['VALUE']);
							$arVideo['VALUE'] = str_ireplace('http://', '', $arVideo['VALUE']);
							$arVideo['VALUE'] = str_ireplace('https://', '', $arVideo['VALUE']);

							if($arVideo['VALUE']){
								$arVideo['VALUE'] = 'https://'.$arVideo['VALUE'];
							}

							$this->arResult['_REQUEST'][$key][$keyVideo] = $arVideo;
						}else{

							unset($this->arResult['_REQUEST'][$key][$keyVideo]);

						}
					}

				}


			}

		}

		return $arParams;
	}



}