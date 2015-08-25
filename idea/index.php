<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Есть идея");
?><?$APPLICATION->IncludeComponent(
	"bitrix:idea",
	"",
	Array(
		"COMPONENT_TEMPLATE" => ".default",
		"BLOG_URL" => "idea_s1",
		"IBLOCK_CATEGORIES" => "3",
		"POST_BIND_USER" => array(),
		"POST_BIND_STATUS_DEFAULT" => "1",
		"MESSAGE_COUNT" => "25",
		"COMMENTS_COUNT" => "25",
		"USE_ASC_PAGING" => "N",
		"TAGS_COUNT" => "0",
		"NAV_TEMPLATE" => "",
		"IMAGE_MAX_WIDTH" => "800",
		"EDITOR_RESIZABLE" => "Y",
		"EDITOR_CODE_DEFAULT" => "N",
		"EDITOR_DEFAULT_HEIGHT" => "300",
		"COMMENT_EDITOR_DEFAULT_HEIGHT" => "200",
		"SEF_MODE" => "N",
		"VARIABLE_ALIASES" => Array("post_id"=>"post_id","user_id"=>"user_id","page"=>"page","category_1"=>"category_1","category_2"=>"category_2","status_code"=>"status_code","category"=>"category"),
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"CACHE_TIME_LONG" => "604800",
		"PATH_TO_SMILE" => "/bitrix/images/blog/smile/",
		"SET_TITLE" => "Y",
		"SET_NAV_CHAIN" => "Y",
		"DATE_TIME_FORMAT" => "d.m.Y H:i:s",
		"NAME_TEMPLATE" => "",
		"SHOW_LOGIN" => "Y",
		"COMMENT_ALLOW_VIDEO" => "N",
		"NO_URL_IN_COMMENTS" => "",
		"ALLOW_POST_CODE" => "Y",
		"USE_GOOGLE_CODE" => "Y",
		"SHOW_RATING" => "N",
		"DISABLE_EMAIL" => "N",
		"DISABLE_RSS" => "N"
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>