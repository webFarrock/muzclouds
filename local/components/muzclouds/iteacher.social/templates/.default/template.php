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





				<div class="form-group">

					<div class="col-sm-8">
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-vk"></i>
							</div>
							<input class="form-control"
							       type="text"
							       name="SOC_VK"
							       maxlength="150"
							       value="<?= $arResult['TEACHER']['PROPS']["SOC_VK"]['VALUE'] ?>"/>
						</div>
					</div>
				</div>

				<div class="form-group">

					<div class="col-sm-8">
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-facebook"></i>
							</div>
							<input class="form-control"
							       type="text"
							       name="SOC_FACEBOOK"
							       maxlength="150"
							       value="<?= $arResult['TEACHER']['PROPS']["SOC_FACEBOOK"]['VALUE'] ?>"/>
						</div>
					</div>
				</div>


				<div class="form-group">

					<div class="col-sm-8">
						<div class="input-group">
							<div class="input-group-addon">
								<i class="fa fa-twitter"></i>
							</div>
							<input class="form-control"
							       type="text"
							       name="SOC_TWITTER"
							       maxlength="150"
							       value="<?= $arResult['TEACHER']['PROPS']["SOC_TWITTER"]['VALUE'] ?>"/>
						</div>
					</div>
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
	$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});
	$("[data-mask]").inputmask();
</script>