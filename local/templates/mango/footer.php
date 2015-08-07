<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>

</div>
<div class="footer-wrapper style-3">
	<footer class="type-1">

		<?//$APPLICATION->IncludeFile('/local/includes/mango/pre-footer.php');?>


		<div class="footer-bottom-navigation">
			<div class="cell-view">
				<?$APPLICATION->IncludeComponent("bitrix:menu", "bottom", array(
						"ROOT_MENU_TYPE" => "bottom",
						"MENU_CACHE_TYPE" => "A",
						"MENU_CACHE_TIME" => "36000000",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"MENU_THEME" => "site",
						"CACHE_SELECTED_ITEMS" => "N",
						"MENU_CACHE_GET_VARS" => array(
						),
						"MAX_LEVEL" => "1",
						"CHILD_MENU_TYPE" => "",
						"USE_EXT" => "Y",
						"DELAY" => "N",
						"ALLOW_MULTI_SELECT" => "N",
					),
					false
				);?>


				<div class="copyright"><?$APPLICATION->IncludeFile('/local/includes/mango/copyright.php');?></div>
			</div>

			<div class="cell-view">
				<div class="payment-methods">
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-1.png" alt=""/></a>
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-2.png" alt=""/></a>
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-3.png" alt=""/></a>
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-4.png" alt=""/></a>
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-5.png" alt=""/></a>
					<a href="#"><img src="<?= MANGO_TPL_PATH ?>/img/payment-method-6.png" alt=""/></a>
				</div>
			</div>

		</div>
	</footer>
</div>


</div><?//<div class="content-push">?>

</div><?//<div class="content-center fixed-header-margin">?>
<div class="clear"></div>

</div><?//<div id="content-block">?>

<?$APPLICATION->IncludeFile('/local/includes/mango/search-box-popup.php');?>


</body>
</html>
