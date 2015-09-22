<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<?if(!empty($arResult['ERRORS']) && is_array($arResult['ERRORS'])){?>
	<div class="row">
		<div class="col-md-6">
		<? ShortTools::ShowAlert(array('MESSAGE' => join('<br>', $arResult['ERRORS']))); ?>
		</div>
	</div>
<?}?>

<form method="post" class="form-horizontal" name="form1" action="" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-6">

			<div class="box-body">

				<div class="form-group preview-picture-wp">
					<label for="detail_text"><?=GetMessage('PREVIEW_PICTURE');?></label>
					<p class="help-block">Рекомендуемый размер: </p>
					<?
					echo \Bitrix\Main\UI\FileInput::createInstance(array(
						"name" => "PREVIEW_PICTURE",
						"description" => false,
						"upload" => true,
						"allowUpload" => "I",
						"medialib" => true,
						"fileDialog" => true,
						"cloud" => true,
						"delete" => true,
						"maxCount" => 1
					))->show($arResult['TEACHER']['PREVIEW_PICTURE']);
					?>
				</div>

			<input type="hidden" name="TEACHER_ELEMENT_ID" value="<?=$arResult['TEACHER']['ID']?>"/>
			<input type="hidden" name="ACTION" value="EDIT"/>
			<?=bitrix_sessid_post()?>

	</div><?//col-md-6?>

</div><?//row?>
<div class="row">
	<div class="col-md-6">
		<div class="box-body">
			<div class="form-group detail-picture-wp">
				<label for="detail_text"><?=GetMessage('DETAIL_PICTURE')?></label>
				<p class="help-block">Рекомендуемый размер</p>
				<?
				echo \Bitrix\Main\UI\FileInput::createInstance(array(
					"name" => "DETAIL_PICTURE",
					"description" => false,
					"upload" => true,
					"allowUpload" => "I",
					"medialib" => false,
					"fileDialog" => true,
					"cloud" => false,
					"delete" => true,
					"maxCount" => 1
				))->show($arResult['TEACHER']['DETAIL_PICTURE']);
				?>
			</div>
		</div><!-- /.box-body -->
	</div><?//col-md-6?>

</div><?//row?>
	<div class="row">
		<div class="col-md-12">
			<div class="box-body">
				<button type="submit" class="btn btn-primary">Сохранить</button>
			</div>
		</div>
	</div>
<!-- form start -->
	<input type="hidden" name="PREVIEW_PICTURE_ID" value="<?=$arResult['TEACHER']['PREVIEW_PICTURE']?>"/>
	<input type="hidden" name="DETAIL_PICTURE_ID" value="<?=$arResult['TEACHER']['DETAIL_PICTURE']?>"/>
</form>

<script type="text/javascript">
	$(function () {
		$(".wysihtml5").wysihtml5();
	});
</script>