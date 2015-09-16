<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>




<form method="post" class="form-horizontal" name="form1" action="" enctype="multipart/form-data">
<div class="row">
	<div class="col-md-6">
		<form role="form">
			<div class="box-body">

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('IS_ADVERTISE_ACTIVE') ?></label>

					<div class="col-sm-8">
						<label>
							<input type="checkbox" name="ACTIVE" value="Y" class="minimal" <?if('Y'==$arResult['TEACHER']['ACTIVE']){?> checked <?}?> />
							<span class="checkbox-label">Да</span>
						</label>
					</div>

				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('LAST_NAME') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="LAST_NAME" maxlength="50"
					                             value="<?= $arResult['TEACHER']['PROPS']["LAST_NAME"]['VALUE'] ?>"/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('NAME') ?></label>

					<div class="col-sm-8">
						<input type="text" class="form-control" placeholder="<?= GetMessage('NAME') ?>" name="NAME"
						       maxlength="50" value="<?= $arResult['TEACHER']['PROPS']["NAME"]['VALUE'] ?>"/>
					</div>

				</div>
				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('SECOND_NAME') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="SECOND_NAME" maxlength="50"
					                             value="<?= $arResult['TEACHER']['PROPS']["SECOND_NAME"]['VALUE'] ?>"/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('WHAT_I_TEACH') ?></label>

					<div class="col-sm-8">
						<div class="form-group no-left-margin">
							<label>
								<input type="checkbox" class="minimal" />
								<span class="checkbox-label">Инструмент</span>
							</label>
						</div>
						<div class="form-group no-left-margin">
							<label>
								<input type="checkbox" class="minimal" />
								<span class="checkbox-label">Инструмент</span>
							</label>
						</div>
						<div class="form-group no-left-margin">
							<label>
								<input type="checkbox" class="minimal" />
								<span class="checkbox-label">Инструмент</span>
							</label>
						</div>
						<div class="form-group no-left-margin">
							<label>
								<input type="checkbox" class="minimal" />
								<span class="checkbox-label">Инструмент</span>
							</label>
						</div>

					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('COUNTRY') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="" maxlength="50"
					                             value=""/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('CITY') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="" maxlength="50"
					                             value=""/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('EMAIL') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="" maxlength="50"
					                             value=""/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('SKYPE') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="" maxlength="50"
					                             value=""/></div>
				</div>

				<div class="form-group">
					<label class="col-sm-4 control-label"><?= GetMessage('PHONE') ?></label>

					<div class="col-sm-8"><input class="form-control" type="text" name="" maxlength="50"
					                             value=""/></div>
				</div>




			</div><!-- /.box-body -->

			<div class="box-footer">
				<button type="submit" class="btn btn-primary">Сохранить</button>
			</div>

			<input type="hidden" name="TEACHER_ELEMENT_ID" value="<?=$arResult['TEACHER']['ID']?>"/>
			<input type="hidden" name="ACTION" value="EDIT"/>
			<?=bitrix_sessid_post()?>
		</form>
	</div>

</div>
<!-- form start -->

</form>

<script type="text/javascript">
	$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});
</script>