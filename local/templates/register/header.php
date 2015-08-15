<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<?
use \Bitrix\Main\Page\Asset;
$oAsset = Asset::getInstance();
?>
<!DOCTYPE html>
<html>
<head>

	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />

	<?$oAsset->addCss(OFFICE_TPL_PATH.'/bootstrap/css/bootstrap.min.css')?>
	<?$oAsset->addCss(OFFICE_TPL_PATH.'/dist/css/AdminLTE.min.css')?>
	<?$oAsset->addCss(OFFICE_TPL_PATH.'/plugins/iCheck/square/blue.css')?>


	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->


	<?$oAsset->addJs(OFFICE_TPL_PATH.'/plugins/jQuery/jQuery-2.1.4.min.js')?>
	<?$oAsset->addJs(OFFICE_TPL_PATH.'/bootstrap/js/bootstrap.min.js')?>
	<?$oAsset->addJs(OFFICE_TPL_PATH.'/plugins/iCheck/icheck.min.js')?>
	<?$oAsset->addJs(SITE_TEMPLATE_PATH.'/script.js')?>

	<?$APPLICATION->ShowHead();?>
	<title><?$APPLICATION->ShowTitle();?></title>



</head>
<body class="register-page">
<?$APPLICATION->ShowPanel();?>
<div class="register-box">
	<div class="register-logo">
		<a href="/">Muz<b>Clouds</b></a>
	</div>
