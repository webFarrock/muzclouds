<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Профиль преподавателя");
?>

<?$APPLICATION->IncludeComponent("muzclouds:iteacher", '', array(), false, array('HIDE_ICONS' => 'Y'));?>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>