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
<!-- Site wrapper -->
<div class="wrapper">

	<header class="main-header">

		<a href="/office/" class="logo">
			<?/*<!-- mini logo for sidebar mini 50x50 pixels -->*/?>
			<span class="logo-mini">Muz<b>Clouds</b></span>
			<?/*<!-- logo for regular state and mobile devices -->*/?>
			<span class="logo-lg">Muz<b>Clouds</b></span>
		</a>
		<?/*<!-- Header Navbar: style can be found in header.less -->*/?>
		<?$APPLICATION->IncludeFile('/local/include/office/navbar-static-top.php');?>
	</header>

	<!-- =============================================== -->

	<!-- Left side column. contains the sidebar -->
	<aside class="main-sidebar">
		<!-- sidebar: style can be found in sidebar.less -->
		<section class="sidebar">
			<!-- Sidebar user panel -->
			<?$APPLICATION->IncludeComponent("muzclouds:office.user.panel", 'user-panel-left', array('USER_ID' => $USER->GetID()), false, array('HIDE_ICONS' => 'Y'));?>


			<?//$APPLICATION->IncludeFile('/local/include/office/sidebar-search-form.php');?>

			<!-- /.search form -->
			<!-- sidebar menu: : style can be found in sidebar.less -->
			<ul class="sidebar-menu">
				<li class="header">Главное меню</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-dashboard"></i> <span>Dashboard</span> <i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="<?=OFFICE_TPL_PATH?>/index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
						<li><a href="<?=OFFICE_TPL_PATH?>/index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-files-o"></i>
						<span>Layout Options</span>
						<span class="label label-primary pull-right">4</span>
					</a>
					<ul class="treeview-menu">
						<li><a href="../layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
						<li><a href="../layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
						<li><a href="../layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
						<li><a href="../layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
					</ul>
				</li>
				<li>
					<a href="../widgets.html">
						<i class="fa fa-th"></i> <span>Widgets</span> <small class="label pull-right bg-green">Hot</small>
					</a>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-pie-chart"></i>
						<span>Charts</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="../charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
						<li><a href="../charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
						<li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
						<li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-laptop"></i>
						<span>UI Elements</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="../UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>
						<li><a href="../UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>
						<li><a href="../UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>
						<li><a href="../UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>
						<li><a href="../UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
						<li><a href="../UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-edit"></i> <span>Forms</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="../forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
						<li><a href="../forms/advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>
						<li><a href="../forms/editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-table"></i> <span>Tables</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="../tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>
						<li><a href="../tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>
					</ul>
				</li>
				<li>
					<a href="../calendar.html">
						<i class="fa fa-calendar"></i> <span>Calendar</span>
						<small class="label pull-right bg-red">3</small>
					</a>
				</li>
				<li>
					<a href="../mailbox/mailbox.html">
						<i class="fa fa-envelope"></i> <span>Mailbox</span>
						<small class="label pull-right bg-yellow">12</small>
					</a>
				</li>
				<li class="treeview active">
					<a href="#">
						<i class="fa fa-folder"></i> <span>Examples</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>
						<li><a href="login.html"><i class="fa fa-circle-o"></i> Login</a></li>
						<li><a href="register.html"><i class="fa fa-circle-o"></i> Register</a></li>
						<li><a href="lockscreen.html"><i class="fa fa-circle-o"></i> Lockscreen</a></li>
						<li><a href="404.html"><i class="fa fa-circle-o"></i> 404 Error</a></li>
						<li><a href="500.html"><i class="fa fa-circle-o"></i> 500 Error</a></li>
						<li class="active"><a href="blank.html"><i class="fa fa-circle-o"></i> Blank Page</a></li>
					</ul>
				</li>
				<li class="treeview">
					<a href="#">
						<i class="fa fa-share"></i> <span>Multilevel</span>
						<i class="fa fa-angle-left pull-right"></i>
					</a>
					<ul class="treeview-menu">
						<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
						<li>
							<a href="#"><i class="fa fa-circle-o"></i> Level One <i class="fa fa-angle-left pull-right"></i></a>
							<ul class="treeview-menu">
								<li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
								<li>
									<a href="#"><i class="fa fa-circle-o"></i> Level Two <i class="fa fa-angle-left pull-right"></i></a>
									<ul class="treeview-menu">
										<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
										<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
					</ul>
				</li>
				<li><a href="<?=OFFICE_TPL_PATH?>/documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
				<li class="header">LABELS</li>
				<li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
				<li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
				<li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
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
				Blank page
				<small>it all starts here</small>
			</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
				<li><a href="#">Examples</a></li>
				<li class="active">Blank page</li>
			</ol>
		</section>

		<!-- Main content -->
		<section class="content">



