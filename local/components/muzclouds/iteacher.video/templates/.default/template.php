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


				<?for($i=0; $i<TEACHER_MY_VIDEO_MAX_CNT; $i++){?>
					<div class="form-group youtube-link-wp">

						<div class="col-sm-8">
							<div class="input-group">
								<div class="input-group-addon">
									<i class="fa fa-header"></i>
								</div>
								<input class="form-control"
								       type="text"
								       placeholder="Название видео"
								       name="MY_VIDEO[<?=$i?>][DESCRIPTION]"
								       maxlength="150"
								       value="<?= $arResult['TEACHER']['PROPS']["MY_VIDEO"]['DESCRIPTION'][$i] ?>"/>
							</div>
							<div class="input-group">
								<div class="input-group-addon">
									<i class="fa fa-youtube"></i>
								</div>
								<input class="form-control"
								       type="text"
								       placeholder="Ссылка видео на youtube.com"
								       name="MY_VIDEO[<?=$i?>][VALUE]"
								       maxlength="150"
								       value="<?= $arResult['TEACHER']['PROPS']["MY_VIDEO"]['VALUE'][$i] ?>"/>
							</div>
						</div>
					</div>
				<?}?>


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
	$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});
	$("[data-mask]").inputmask();
</script>