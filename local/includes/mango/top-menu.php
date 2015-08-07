<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<div class="navigation">
	<div class="navigation-header responsive-menu-toggle-class">
		<div class="title">Меню</div>
		<div class="close-menu"></div>
	</div>
	<div class="nav-overflow">
	<?$APPLICATION->IncludeFile('/local/includes/mango/search-box-top.php');?>

		<?$APPLICATION->IncludeComponent("bitrix:menu", "top", array(
				"ROOT_MENU_TYPE" => "top",
				"MENU_CACHE_TYPE" => "A",
				"MENU_CACHE_TIME" => "36000000",
				"MENU_CACHE_USE_GROUPS" => "Y",
				"MENU_THEME" => "site",
				"CACHE_SELECTED_ITEMS" => "N",
				"MENU_CACHE_GET_VARS" => array(
				),
				"MAX_LEVEL" => "1",
				"CHILD_MENU_TYPE" => "left",
				"USE_EXT" => "Y",
				"DELAY" => "N",
				"ALLOW_MULTI_SELECT" => "N",
			),
			false
		);?>
		<div class="navigation-footer responsive-menu-toggle-class">
			<?$APPLICATION->IncludeFile('/local/includes/mango/social-links.php');?>
			<div class="navigation-copyright"><?$APPLICATION->IncludeFile('/local/includes/mango/copyright.php');?></div>
		</div>
	</div><?//<div class="nav-overflow">?>
</div><?//<div class="navigation">?>