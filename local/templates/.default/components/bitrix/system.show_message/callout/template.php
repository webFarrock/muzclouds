<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>

<div class="callout <?=$arParams['CLASSES']?>">
	<?if($arParams['HEADER']){?>
		<h4><?=$arParams['HEADER']?></h4>
	<?}?>
	<p><?=$arParams['MESSAGE']?></p>
</div>
