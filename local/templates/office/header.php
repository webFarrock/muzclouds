<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<!DOCTYPE html>
<html>
<head>
	<?$APPLICATION->ShowHead();?>
	<title><?$APPLICATION->ShowTitle();?></title>

	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

	<?/*<!-- Bootstrap 3.3.4 -->*/?>
	<?$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/bootstrap/css/bootstrap.min.css')?>

	<?/*<!-- Theme style -->*/?>
	<?$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/dist/css/AdminLTE.min.css')?>

	<?/*<!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->*/?>
	<?$APPLICATION->SetAdditionalCSS(OFFICE_TPL_PATH.'/dist/css/skins/_all-skins.min.css')?>

	<!-- Font Awesome Icons -->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<!-- Ionicons -->
	<link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<?/*<!-- jQuery 2.1.4 -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/jQuery/jQuery-2.1.4.min.js')?>

	<?/*<!-- Bootstrap 3.3.2 JS -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/bootstrap/js/bootstrap.min.js')?>
	<?/*<!-- SlimScroll -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/slimScroll/jquery.slimscroll.min.js')?>
	<?/*<!-- FastClick -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/plugins/fastclick/fastclick.min.js')?>
	<?/*<!-- AdminLTE App -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/dist/js/app.min.js')?>
	<?/*<!-- AdminLTE for demo purposes -->*/?>
	<?$APPLICATION->AddHeadScript(OFFICE_TPL_PATH.'/dist/js/demo.js')?>
</head>
<body class="skin-blue sidebar-mini">
<?$APPLICATION->ShowPanel();?>
<?/*<!-- Site wrapper -->*/?>
<div class="wrapper">

	<header class="main-header">

		<a href="/office/" class="logo">
			<?/*<!-- mini logo for sidebar mini 50x50 pixels -->*/?>
			<span class="logo-mini">Muz<b>Clouds</b></span>
			<?/*<!-- logo for regular state and mobile devices -->*/?>
			<span class="logo-lg">Muz<b>Clouds</b></span>
		</a>
		<?/*<!-- Header Navbar: style can be found in header.less -->*/?>
		<?$APPLICATION->IncludeFile('/local/includes/office/navbar-static-top.php');?>
	</header>

	<!-- =============================================== -->

	<!-- Left side column. contains the sidebar -->
	<aside class="main-sidebar">
		<!-- sidebar: style can be found in sidebar.less -->
		<section class="sidebar">
			<!-- Sidebar user panel -->
			<?$APPLICATION->IncludeComponent("muzclouds:office.user.panel", 'user-panel-left', array('USER_ID' => $USER->GetID()), false, array('HIDE_ICONS' => 'Y'));?>


			<?//$APPLICATION->IncludeFile('/local/include/office/sidebar-search-form.php');?>

			<!-- sidebar menu: : style can be found in sidebar.less -->
			<ul class="sidebar-menu">
				<li class="header">Главное меню</li>
				<li>
					<a href="/office/profile/">
						<i class="fa fa-user"></i> <span>Профайл</span>
					</a>
				</li>
				<?if(TeacherTools::getUserTeacherAccount()){?>
					<li>
						<a href="/office/teacher-profile/">
							<i class="fa fa-dashboard"></i> <span>Профиль преподавателя</span>
						</a>
					</li>
				<?}?>
				<?if(TeacherTools::getUserTeacherAccount()){?>
					<li class="treeview">
						<a href="#">
							<i class="fa fa-dashboard"></i> <span>Я преподаватель</span> <i class="fa fa-angle-left pull-right"></i>
						</a>
						<ul class="treeview-menu">
							<li><a href="/office/teacher-profile/"><i class="fa fa-circle-o"></i> Основные данные</a></li>
							<li><a href="#"><i class="fa fa-circle-o"></i> Видео </a></li>
							<li><a href="#"><i class="fa fa-circle-o"></i> Заявки </a></li>
						</ul>
					</li>
				<?}else{?>
					<li>
						<a href="#">
							<i class="fa fa-dashboard"></i> <span>Нет профиля преподавателя... подумать как создавать</span>
						</a>
					</li>
				<?}?>


			</ul>
		</section>
		<!-- /.sidebar -->
	</aside>

	<!-- =============================================== -->

	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<h1>
				<?$APPLICATION->ShowTitle(true);?>
			</h1>

			<?$APPLICATION->IncludeComponent("bitrix:breadcrumb", "bcr", Array(), false);?>

		</section>

		<!-- Main content -->
		<section class="content">



