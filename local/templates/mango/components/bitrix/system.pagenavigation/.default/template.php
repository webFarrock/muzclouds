<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"]."&amp;" : "");
$strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?".$arResult["NavQueryString"] : "");

if($arResult["NavPageCount"] < 2) return;


$bFirst = true;

if ($arResult["NavPageNomer"] > 1):
	if($arResult["bSavePage"]):
		?>
		<a class="square-button" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>"><i class="fa fa-angle-left"></i></a>
	<?
	else:
		if ($arResult["NavPageNomer"] > 1):
			?>
			<a class="square-button" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>"><i class="fa fa-angle-left"></i></a>
		<?
		endif;

	endif;

	if ($arResult["nStartPage"] > 1):
		$bFirst = false;
		if($arResult["bSavePage"]):
			?>
			<a class="square-button" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=1">1</a>
		<?
		else:
			?>
			<a class="square-button" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>">1</a>
		<?
		endif;
		if ($arResult["nStartPage"] > 2):
			?>
			<div class="divider">...</div>
		<?
		endif;
	endif;
endif;

do
{
	if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):
		?>
		<span class="square-button active"><?=$arResult["nStartPage"]?></span>
	<?
	elseif($arResult["nStartPage"] == 1 && $arResult["bSavePage"] == false):
		?>
		<a href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>" class="square-button"><?=$arResult["nStartPage"]?></a>
	<?
	else:
		?>
		<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>"<?
		?> class="square-button"><?=$arResult["nStartPage"]?></a>
	<?
	endif;
	$arResult["nStartPage"]++;
	$bFirst = false;
} while($arResult["nStartPage"] <= $arResult["nEndPage"]);

if($arResult["NavPageNomer"] < $arResult["NavPageCount"]):
	if ($arResult["nEndPage"] < $arResult["NavPageCount"]):
		if ($arResult["nEndPage"] < ($arResult["NavPageCount"] - 1)):
			?>
			<div class="divider">...</div>
		<?
		endif;
		?>
		<a class="square-button" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["NavPageCount"]?>"><?=$arResult["NavPageCount"]?></a>
	<?
	endif;
	?>
	<a class="square-button" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>"><i class="fa fa-angle-right"></i></a>
<?
endif;
?>