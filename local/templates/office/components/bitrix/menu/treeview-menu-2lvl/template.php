<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
if (empty($arResult)) return;
?>

<ul class="treeview-menu">
	<?foreach($arResult as $arItem){?>
		<li <?if($arItem['SELECTED']){?> class="active" <?}?>><a href="<?=$arItem['LINK']?>"><i class="fa fa-circle-o"></i><?=$arItem['TEXT']?></a></li>
	<?}?>
</ul>
