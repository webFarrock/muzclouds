<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

if(!empty($arResult['PROPERTIES']['MY_VIDEO']['VALUE']) && is_array($arResult['PROPERTIES']['MY_VIDEO']['VALUE'])){
	foreach($arResult['PROPERTIES']['MY_VIDEO']['VALUE'] as $key => $val){
		$arResult['PROPERTIES']['MY_VIDEO']['VALUE'][$key] = ShortTools::getYouTubeCode($val);
	}
}

if(!empty($arResult['PROPERTIES']['MY_AUDIO']['VALUE']) && is_array($arResult['PROPERTIES']['MY_AUDIO']['VALUE'])){
	$cp = $this->__component;

	if (is_object($cp)){
		$cp->arResult['MY_AUDIO'] = false;

		foreach($arResult['PROPERTIES']['MY_AUDIO']['VALUE'] as $key => $val){
			$cp->arResult['MY_AUDIO'][$key] = CFile::GetFileArray($val);
			$arResult['PROPERTIES']['MY_AUDIO']['VALUE'][$key] = CFile::GetFileArray($val);
		}

		$cp->SetResultCacheKeys(array('MY_AUDIO'));
	}
}


$arContacts = array(
	0 => array(
		'ico'
	),
);