<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

foreach($arResult as $key => $arItems){
	if('/teachers/' == $arItems['LINK']){
		if(CModule::IncludeModule('iblock')){
			$arSort     = Array('SORT' => 'ASC');
			$arSelect   = Array("ID", "IBLOCK_ID", "NAME", 'SECTION_PAGE_URL');
			$arFilter   = Array('IBLOCK_ID'=>IBLOCK_ID_TEACHERS, 'GLOBAL_ACTIVE'=>'Y');
			$db_list    = CIBlockSection::GetList($arSort, $arFilter, true, $arSelect);

			while($ar_result = $db_list->GetNext()){
				$arResult[$key]['SUBMENU'][] = array(
					'TEXT' => $ar_result['NAME'],
					'LINK' => $ar_result['SECTION_PAGE_URL'],
				);
			}

		}
	}
}


