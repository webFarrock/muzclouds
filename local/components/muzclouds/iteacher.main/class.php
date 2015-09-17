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
					"title" => GetMessage("���� ������ �������. ��������� ��������� ��������"));
			}else{
				if(TeacherTools::chkTeacherRights($USER->GetID(), $_REQUEST['TEACHER_ELEMENT_ID']))
				$el = new CIBlockElement;


				$fio = $_REQUEST['LAST_NAME'].' '.$_REQUEST['NAME'].' '.$_REQUEST['SECOND_NAME'];

				$arTeacher = Array(
					"IBLOCK_ID"    => $USER->GetID(), // ������� ������� ������� �������������
					"MODIFIED_BY"    => $USER->GetID(), // ������� ������� ������� �������������
					"IBLOCK_SECTION" => $_REQUEST['SECTIONS'],          // ������� ����� � ����� �������
					//"PROPERTY_VALUES"=> $PROP,
					"NAME"           => "������������� ".$fio,
					"ACTIVE"         => $_REQUEST['ACTIVE'],            // �������
				);

				if($res = $el->Update($_REQUEST['TEACHER_ELEMENT_ID'], $arTeacher)){
					CIBlockElement::SetPropertyValuesEx($_REQUEST['TEACHER_ELEMENT_ID'], IBLOCK_ID_TEACHERS, array(
						'LAST_NAME'     => $_REQUEST['LAST_NAME'],
						'NAME'          => $_REQUEST['NAME'],
						'SECOND_NAME'   => $_REQUEST['SECOND_NAME'],
						'CONT_EMAIL'    => $_REQUEST['CONT_EMAIL'],
						'CONT_PHONE'    => $_REQUEST['CONT_PHONE'],
						'CONT_SKYPE'    => $_REQUEST['CONT_SKYPE'],
						//'' => $_REQUEST[''],
					));


					//CIBlockElement::SetElementSection($_REQUEST['TEACHER_ELEMENT_ID'], $_REQUEST['SECTIONS']);

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
		$this->getWhatTeachEnum();
		$this->getTeachingSections();

		$this->includeComponentTemplate();

		$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/plugins/iCheck/all.css');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/iCheck/icheck.min.js');
		$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/input-mask/jquery.inputmask.js');;
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

		$arSort     = Array();
		$arSelect   = Array("ID", "IBLOCK_ID", "ACTIVE", "NAME",);
		$arFilter   = Array("IBLOCK_ID"=>IBLOCK_ID_TEACHERS, 'PROPERTY_USER_ID' => $this->arResult['PROFILE']);
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