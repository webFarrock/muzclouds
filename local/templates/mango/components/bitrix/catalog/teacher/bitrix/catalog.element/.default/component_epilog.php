<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

if(!empty($arResult['MY_AUDIO'])){

	$APPLICATION->SetAdditionalCSS('/local/vendor/mp3-light-player/start/content/global.css');

	$APPLICATION->AddHeadScript('/local/vendor/mp3-light-player/start/java/FWDMLP.js');
	?><script>initMyAudio();</script><?
}

?>
