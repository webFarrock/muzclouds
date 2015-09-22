<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
CBitrixComponent::includeComponentClass('muzclouds:iteacher.edit.parent');
class CITeacherPhoto extends CITeacherEditParent{
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

					if($_REQUEST['PREVIEW_PICTURE']){
						$arTeacher['PREVIEW_PICTURE'] = CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"].$_REQUEST['PREVIEW_PICTURE']);
					}

					if($_REQUEST['DETAIL_PICTURE']){
						$arTeacher['DETAIL_PICTURE'] = CFile::MakeFileArray($_SERVER["DOCUMENT_ROOT"].$_REQUEST['DETAIL_PICTURE']);
					}

					if('Y' == $_REQUEST['PREVIEW_PICTURE_del'] && $_REQUEST['PREVIEW_PICTURE_ID']){
						$arTeacher['PREVIEW_PICTURE'] = array('del' => 'Y');
						CFile::Delete($_REQUEST['PREVIEW_PICTURE_ID']);
					}

					if('Y' == $_REQUEST['DETAIL_PICTURE_del'] && $_REQUEST['DETAIL_PICTURE_ID']){
						$arTeacher['DETAIL_PICTURE'] = array('del' => 'Y');
						CFile::Delete($_REQUEST['DETAIL_PICTURE_ID']);
					}


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
	}

	public function onPrepareComponentParams($arParams){
		if ($_SERVER["REQUEST_METHOD"]=="POST" && $_POST["ACTION"]=="EDIT" && check_bitrix_sessid()){

			$_REQUEST['TEACHER_ELEMENT_ID'] = intval($_REQUEST['TEACHER_ELEMENT_ID']);

		}
	}



}