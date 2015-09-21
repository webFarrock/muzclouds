<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
$curDir = $APPLICATION->GetCurDir();

switch($curDir){
	case '/office/teacher/':{
		$componentPage = 'main';
		break;
	}

	case '/office/teacher/audio/':{
		$componentPage = 'audio';
		break;
	}

	case '/office/teacher/video/':{
		$componentPage = 'video';
		break;
	}

	case '/office/teacher/photo/':{
		$componentPage = 'photo';
		break;
	}

	case '/office/teacher/social/':{
		$componentPage = 'social';
		break;
	}

	case '/office/teacher/programm/':{
		$componentPage = 'programm';
		break;
	}

}

if($componentPage){
	$this->IncludeComponentTemplate($componentPage);
}else{
	$this->AbortResultCache();
	\Bitrix\Iblock\Component\Tools::process404(
		'Error'
		,true
		,true
		,true

	);
}

return;
?>

<?
$arDefaultUrlTemplates404 = array(
	"aphisha" => "",
	"add_film" => "add_film/",
	"film" => "#ELEMENT_ID#/",
);

$arComponentVariables = array(
	"ELEMENT_ID",
	"ELEMENT_CODE",
);

if($arParams["SEF_MODE"] == "Y")
{
	$arUrlTemplates = CComponentEngine::MakeComponentUrlTemplates($arDefaultUrlTemplates404, $arParams["SEF_URL_TEMPLATES"]);

	$arVariables = array();

	$componentPage = CComponentEngine::ParseComponentPath(
		$arParams["SEF_FOLDER"],
		$arUrlTemplates,
		$arVariables
	);

	if(!$componentPage)
	{
		$componentPage = "aphisha";
	}

	$arResult = array(
		"FOLDER" => $arParams["SEF_FOLDER"],
		"URL_TEMPLATES" => $arUrlTemplates,
		"VARIABLES" => $arVariables);

}
else
{
	$arVariables = array();

	$arVariableAliases = CComponentEngine::MakeComponentVariableAliases($arDefaultVariableAliases, $arParams["VARIABLE_ALIASES"]);
	CComponentEngine::InitComponentVariables(false, $arComponentVariables, $arVariableAliases, $arVariables);

	print "<pre>";
	print_r($arVariables);
	print "</pre>";

	$componentPage = "";

	if(isset($arVariables["ELEMENT_ID"]) && intval($arVariables["ELEMENT_ID"]) > 0)
		$componentPage = "film";
	elseif(isset($arVariables["ELEMENT_CODE"]) && strlen($arVariables["ELEMENT_CODE"]) > 0)
		$componentPage = "film";
	elseif(isset($arVariables["add_film"]))
		$componentPage = "add_film";
	else
		$componentPage = "aphisha";

	$arResult = array(
		"FOLDER" => "",
		"URL_TEMPLATES" => Array(
			"aphisha" => htmlspecialcharsbx($APPLICATION->GetCurPage()),
			"film" => htmlspecialcharsbx($APPLICATION->GetCurPage()."?".$arVariableAliases["ELEMENT_ID"]."=#ELEMENT_ID#"),
			"add_film" => htmlspecialcharsbx($APPLICATION->GetCurPage()."?add_film=y"),
		),
		"VARIABLES" => $arVariables,
	);
}

$this->IncludeComponentTemplate($componentPage);
?>



