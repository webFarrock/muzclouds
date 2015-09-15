<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
if (empty($arResult)) return;
?>

<ul class="nav nav-tabs">
	<?foreach($arResult as $arItem){?>
		<li <?if($arItem['SELECTED']){?> class="active" <?}?>><a href="<?=$arItem['LINK']?>"><?=$arItem['TEXT']?></a></li>
	<?}?>
</ul>

