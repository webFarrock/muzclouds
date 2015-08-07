<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
if (empty($arResult)) return;
?>

<div class="footer-links">
	<?foreach($arResult as $arItem){?>
		<a href="<?=$arItem['LINK']?>" <?if($arItem['SELECTED']){?> class="active" <?}?>><?=$arItem['TEXT']?></a>
	<?}?>
</div>

