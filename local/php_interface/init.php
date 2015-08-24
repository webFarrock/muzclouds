<?
ini_set('display_errors',1); error_reporting(E_ERROR);

$arLibs = array(
	$_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/defines.php',
	$_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/events.php',
	$_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/tools.php',
	$_SERVER['DOCUMENT_ROOT'].'/local/php_interface/include/teacher-tools.php',
);

foreach($arLibs as $lib){
	if(file_exists($lib)){
		require_once($lib);
	}
}