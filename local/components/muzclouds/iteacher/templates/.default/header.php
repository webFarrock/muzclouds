<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<div class="row">
	<div class="col-md-12">
		<div class="nav-tabs-custom">
			<?$APPLICATION->IncludeComponent("bitrix:menu", "tabs", array(
				"ROOT_MENU_TYPE" => "tabs",
				"MENU_CACHE_TYPE" => "A",
				"MENU_CACHE_TIME" => "36000000",
				"MENU_CACHE_USE_GROUPS" => "Y",
				"MENU_THEME" => "",
				"CACHE_SELECTED_ITEMS" => "N",
				"MENU_CACHE_GET_VARS" => array(),
				"MAX_LEVEL" => "1",
				"CHILD_MENU_TYPE" => "",
				"USE_EXT" => "Y",
				"DELAY" => "N",
				"ALLOW_MULTI_SELECT" => "N",
			),
				false
			);?>