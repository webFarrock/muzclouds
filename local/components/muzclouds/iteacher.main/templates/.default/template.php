<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>




			<form method="post" class="form-horizontal" name="form1" action="/" enctype="multipart/form-data">
			<div class="row">
				<div class="col-md-6">
					<form role="form">
						<div class="box-body">

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


						</div><!-- /.box-body -->

						<div class="box-footer">
							<button type="submit" class="btn btn-primary">Сохранить</button>
						</div>
					</form>
				</div>

			</div>
			<!-- form start -->

			</form>

