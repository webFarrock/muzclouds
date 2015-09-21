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
	<div class="col-md-8">

			<div class="box-body">

				<div class="form-group">
					<label for="detail_text"><?=GetMessage('PREVIEW_TEXT');?></label>
					<p class="help-block">Этот текст будет отображаться в списке преподавателей</p>
					<textarea id="preview_text" name="PREVIEW_TEXT" class="form-control" rows="10"><?=$arResult['TEACHER']['~PREVIEW_TEXT']?></textarea>
				</div>
				<br>
				<br>
				<div class="form-group">
					<label for="detail_text"><?=GetMessage('DETAIL_TEXT')?></label>
					<p class="help-block">Этот текст будет отображаться на персоональной страннице преподавателя</p>
					<textarea id="detail_text" name="DETAIL_TEXT" class="form-control wysihtml5" rows="20"><?=$arResult['TEACHER']['DETAIL_TEXT']?></textarea>
				</div>
			</div><!-- /.box-body -->

			<input type="hidden" name="TEACHER_ELEMENT_ID" value="<?=$arResult['TEACHER']['ID']?>"/>
			<input type="hidden" name="ACTION" value="EDIT"/>
			<?=bitrix_sessid_post()?>

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

</form>

<script type="text/javascript">
	$(function () {
		$(".wysihtml5").wysihtml5();
	});
</script>