<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

class COfficeUserPanel extends CBitrixComponent{
	public function executeComponent(){

		$this->arResult = array();

		//if($this->StartResultCache(false)){
			$rsUser = CUser::GetByID($this->arParams['USER_ID']);
			$arUser = $rsUser->Fetch();

			if($arUser['PERSONAL_PHOTO']){
				$arSizes    = array('width'=>OFFICE_AVATAR_NATURAL, 'height'=>OFFICE_AVATAR_NATURAL);
				$file       = CFile::ResizeImageGet($arUser['PERSONAL_PHOTO'], $arSizes, BX_RESIZE_IMAGE_PROPORTIONAL);
				$arUser['PERSONAL_PHOTO_SRC'] = $file['src'];
			}

			$this->arResult = $arUser;
		//}

		$this->includeComponentTemplate();
	}


}