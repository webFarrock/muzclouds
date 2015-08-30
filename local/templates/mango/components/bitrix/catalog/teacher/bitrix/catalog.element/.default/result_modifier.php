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

$arResult['SOC_LINKS'] = array();

foreach($arResult['PROPERTIES'] as $code => $prop){


	if(substr_count($code, 'SOC_') && $prop['VALUE']){
		$prop['ICO'] = strtolower(str_replace('SOC_', '', $code));

		if(!substr_count('http://', $prop['VALUE']) && !substr_count('https://', $prop['VALUE'])){
			$prop['VALUE'] = 'http://'.$prop['VALUE'];
		}

		$arResult['SOC_LINKS'][$code] = $prop;
	}
}

$arResult['CONTACTS'] = array();

foreach($arResult['PROPERTIES'] as $code => $prop){
	if(substr_count($code, 'CONT_') && $prop['VALUE']){
		$prop['ICO'] = strtolower(str_replace('CONT_', '', $code));

		if('email' == $prop['ICO']){$prop['ICO'] = 'inbox';}

		$arResult['CONTACTS'][$code] = $prop;
	}
}
