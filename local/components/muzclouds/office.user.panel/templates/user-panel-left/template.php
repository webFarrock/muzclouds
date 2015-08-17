<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="user-panel">
	<div class="pull-left image">
		<?if($arResult['PERSONAL_PHOTO_SRC']){?>
			<img src="<?=$arResult['PERSONAL_PHOTO_SRC']?>" class="img-circle" alt="<?=$arResult['LAST_NAME']?> <?=$arResult['NAME']?>"  title="<?=$arResult['LAST_NAME']?> <?=$arResult['NAME']?>" />
		<?}else{?>
			<img src="<?=OFFICE_TPL_PATH?>/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
		<?}?>

	</div>

	<div class="pull-left info clearfix">
		<p><?=$arResult['LAST_NAME']?> <?=$arResult['NAME']?></p>
		<a href="javascript::void(0);"><i class="fa fa-circle text-success"></i> Online</a>
	</div>
	<br clear="all">
</div>