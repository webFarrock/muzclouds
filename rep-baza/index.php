<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Реп. базы");
?>
<div class="content-push">
	<div class="parallax-slide fullwidth-block small-slide" style="height: 500px !important;margin-top: -25px;" >



		<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
		<div id="map" style="width: 100%; height: 600px"></div>
		<script type="text/javascript">
			ymaps.ready(init);
			var myMap;

			function init(){
				myMap = new ymaps.Map("map", {
					center: [55.76, 37.64],
					zoom: 7
				});
			}
		</script>

	</div>

</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>