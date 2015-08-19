<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');

?>

<div class="row">
<div class="col-md-9 col-md-push-3 col-sm-8 col-sm-push-4 blog-sidebar">
	<div class="information-blocks">
		<div class="mozaic-banners-wrapper type-2">
			<div class="row">
				<div class="banner-column col-md-4">
					<div class="row">
						<div class="banner-column col-md-12 col-sm-3">
							<div class="mozaic-banner-entry type-2" style="background-image: url(<?MANGO_TPL_PATH?>/img/mozaic-banner-4.jpg);">
								<div class="mozaic-banner-content">
									<h3 class="subtitle">Iphone 5s 64GB Gold</h3>
									<h2 class="title">$299,99</h2>
									<a class="button style-5" href="#">shop now</a>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>


	<?$APPLICATION->IncludeFile('/local/includes/mango/left-menu.php');?>


<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>