<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<div class="col-md-12 col-sm-12">
	<div class="row">
		<?if(!empty($arResult['SECTIONS']) && is_array($arResult)){?>
			<?foreach($arResult['SECTIONS'] as $arSection){?>
				<?
				$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
				$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
				?>
				<div class="col-sm-3 information-entry information-entry-section" id="<? echo $this->GetEditAreaId($arSection['ID']); ?>">
					<div class="special-item-entry">
						<?if($arSection['PICTURE']['SRC']){?>
							<img src="<?=$arSection['PICTURE']['SRC']?>" alt="<?=$arSection['PICTURE']['ALT']?>" title="<?=$arSection['PICTURE']['TITLE']?>">
						<?}else{?>
							<img src="<?=MANGO_TPL_PATH?>/img/special-item-1.jpg" alt="">
						<?}?>

						<h3 class="title"><?=$arSection['NAME']?> <span></span></h3>
						<a class="button style-4" href="<?=$arSection['SECTION_PAGE_URL']?>">Перейти</a>
					</div>
				</div>
			<?}?>
		<?}?>
	</div>
</div>