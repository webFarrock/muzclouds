<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
CBitrixComponent::includeComponentClass('muzclouds:iteacher.edit.parent');
class CITeacherProgramm extends CITeacherEditParent{
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
						"PREVIEW_TEXT" => $_REQUEST['PREVIEW_TEXT'],
						"PREVIEW_TEXT_TYPE" => "text",
						"DETAIL_TEXT" => $_REQUEST['DETAIL_TEXT'],
						"DETAIL_TEXT_TYPE" => "html",
					);

					//if(0)
					if($res = $el->Update($_REQUEST['TEACHER_ELEMENT_ID'], $arTeacher)){

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


				$this->arResult['TEACHER']['PREVIEW_TEXT'] = $_REQUEST['PREVIEW_TEXT'];
				$this->arResult['TEACHER']['DETAIL_TEXT'] = $_REQUEST['DETAIL_TEXT'];
				$this->arResult['ERRORS'] = $arErrors;
			}


		}else{
			$this->getProfileInfo();
			$this->getTeacherInfo();
		}



		$this->includeComponentTemplate();

		$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');
	}

	public function onPrepareComponentParams($arParams){
		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT" && check_bitrix_sessid()){

			$_REQUEST['TEACHER_ELEMENT_ID'] = intval($_REQUEST['TEACHER_ELEMENT_ID']);

			$_REQUEST['PREVIEW_TEXT'] = strip_tags($_REQUEST['PREVIEW_TEXT']);
			//$_REQUEST['PREVIEW_TEXT'] = nl2br($_REQUEST['PREVIEW_TEXT']);

			$_REQUEST['DETAIL_TEXT'] = $_REQUEST['DETAIL_TEXT'];
		}
	}



}