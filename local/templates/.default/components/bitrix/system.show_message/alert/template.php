<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>

<div class="alert <?=$arParams['CLASSES']?> alert-dismissable">
	<?if(!$arParams['HIDE_CLOSE_BTN']){?>
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
	<?}?>
	<h4>
		<?if($arParams['ICO']){?>
			<i class="icon fa <?=$arParams['ICO']?>"></i>
		<?}?>
		<?=$arParams['HEADER']?>
	</h4>
	<?=$arParams['MESSAGE']?>
</div>