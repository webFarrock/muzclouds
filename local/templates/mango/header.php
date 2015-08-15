<? if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die(); ?>
<!DOCTYPE html>
<html>
<head>

	<?$APPLICATION->ShowHead();?>

	<meta name="format-detection" content="telephone=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, minimal-ui"/>

	<?$APPLICATION->SetAdditionalCSS(MANGO_TPL_PATH.'/css/bootstrap.min.css')?>
	<?$APPLICATION->SetAdditionalCSS(MANGO_TPL_PATH.'/css/idangerous.swiper.css')?>
	<?$APPLICATION->SetAdditionalCSS(MANGO_TPL_PATH.'/css/font-awesome.min.css')?>
	<?$APPLICATION->SetAdditionalCSS('http://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700%7CDancing+Script%7CMontserrat:400,700%7CMerriweather:400,300italic%7CLato:400,700,900')?>
	<?$APPLICATION->SetAdditionalCSS(MANGO_TPL_PATH.'/css/style.css')?>
	<?$APPLICATION->SetAdditionalCSS('/local/includes/mango/css/style.css')?>

	<!--[if IE 9]>
	<link href="<?=MANGO_TPL_PATH?>/css/ie9.css" rel="stylesheet" type="text/css"/>
	<![endif]-->

	<link rel="shortcut icon" href="<?=MANGO_TPL_PATH?>/img/favicon-2.ico"/>

	<?$APPLICATION->AddHeadScript(MANGO_TPL_PATH.'/js/jquery-2.1.3.min.js')?>
	<?$APPLICATION->AddHeadScript(MANGO_TPL_PATH.'/js/idangerous.swiper.min.js')?>
	<?$APPLICATION->AddHeadScript(MANGO_TPL_PATH.'/js/global.js')?>
	<?$APPLICATION->AddHeadScript(MANGO_TPL_PATH.'/js/jquery.mousewheel.js')?>
	<?$APPLICATION->AddHeadScript(MANGO_TPL_PATH.'/js/jquery.jscrollpane.min.js')?>

	<title><?$APPLICATION->ShowTitle();?></title>
</head>
<body class="style-3">

<?$APPLICATION->ShowPanel();?>


<?$APPLICATION->IncludeFile('/local/includes/mango/load-wrapper.php');?>

<div id="content-block">

<div class="content-center fixed-header-margin">

<div class="header-wrapper style-3">
	<header class="type-1">
		<?$APPLICATION->IncludeFile('/local/includes/mango/header-top.php');?>
		<?$APPLICATION->IncludeFile('/local/includes/mango/header-middle.php');?>

		<div class="close-header-layer"></div>

		<?$APPLICATION->IncludeFile('/local/includes/mango/top-menu.php');?>

	</header>

	<div class="clear"></div>
</div>

<div class="content-push">


