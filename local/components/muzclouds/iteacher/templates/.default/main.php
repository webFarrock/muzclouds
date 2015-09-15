<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
if(file_exists(__DIR__.'/header.php')) require_once(__DIR__.'/header.php');
if(file_exists(__DIR__.'/header-in.php')) require_once(__DIR__.'/header-in.php');



$APPLICATION->IncludeComponent("muzclouds:iteacher.main", '', array(), false, array('HIDE_ICONS' => 'Y'));


if(file_exists(__DIR__.'/footer-in.php')) require_once(__DIR__.'/footer-in.php');
if(file_exists(__DIR__.'/footer.php')) require_once(__DIR__.'/footer.php');

