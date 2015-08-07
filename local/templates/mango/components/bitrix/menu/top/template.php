<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
if (empty($arResult)) return;
?>
<nav>
	<ul>
		<?foreach($arResult as $arItem){?>
			<li class="<?=$arItem['PARAMS']['TYPE']?>">
				<a href="<?=$arItem['LINK']?>" <?if($arItem['SELECTED']){?> class="active" <?}?>><?=$arItem['TEXT']?></a><i class="fa <?if(!empty($arItem['SUBMENU'])){?> fa-chevron-down <?}?>"></i>

				<?if(!empty($arItem['SUBMENU']) && is_array($arItem['SUBMENU'])){?>
					<div class="submenu">
						<ul class="simple-menu-list-column">
							<?foreach($arItem['SUBMENU'] as $arSubItem){?>
								<li><a href="<?=$arSubItem['LINK']?>"><i class="fa fa-angle-right"></i><?=$arSubItem['TEXT']?></a></li>
							<?}?>
						</ul>
					</div>
				<?}?>
			</li>
		<?}?>

		<li class="fixed-header-visible">
			<a class="fixed-header-square-button open-search-popup"><i class="fa fa-search"></i></a>
		</li>
	</ul>

	<div class="clear"></div>
	<a class="fixed-header-visible additional-header-logo"><img src="<?= MANGO_TPL_PATH ?>/img/logo-3.png" alt=""/></a>
</nav>
