<?
/**
 * @global CMain $APPLICATION
 * @param array $arParams
 * @param array $arResult
 */
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();
?>

<div class="row">
	<div class="col-md-6">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title"><?=GetMessage('REG_SHOW_HIDE')?></h3>
			</div><!-- /.box-header -->
			<? ShortTools::ShowAlert(array('MESSAGE' => $arResult["strProfileError"])); ?>

			<?
			if($arResult['DATA_SAVED'] == 'Y')
				ShortTools::ShowAlert(array('MESSAGE' => GetMessage('PROFILE_DATA_SAVED'), 'ICO' => 'fa-check', 'CLASSES' => 'alert-success', 'HEADER' => 'Все ok!'));
			?>

			<form method="post" class="form-horizontal" name="form1" action="<?= $arResult["FORM_TARGET"] ?>"
			      enctype="multipart/form-data">
				<div class="box-body">
					<?= $arResult["BX_SESSION_CHECK"] ?>
					<input type="hidden" name="lang" value="<?= LANG ?>"/>
					<input type="hidden" name="ID" value=<?= $arResult["ID"] ?>/>

					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('LAST_NAME') ?></label>

						<div class="col-sm-8"><input class="form-control" type="text" name="LAST_NAME" maxlength="50"
						                             value="<?= $arResult["arUser"]["LAST_NAME"] ?>"/></div>
					</div>

					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('NAME') ?></label>

						<div class="col-sm-8">
							<input type="text" class="form-control" placeholder="<?= GetMessage('NAME') ?>" name="NAME"
							       maxlength="50" value="<?= $arResult["arUser"]["NAME"] ?>"/>
						</div>

					</div>
					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('SECOND_NAME') ?></label>

						<div class="col-sm-8"><input class="form-control" type="text" name="SECOND_NAME" maxlength="50"
						                             value="<?= $arResult["arUser"]["SECOND_NAME"] ?>"/></div>
					</div>
					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('EMAIL') ?><? if($arResult["EMAIL_REQUIRED"]): ?>
								<span class="starrequired">*</span><? endif ?></label>

						<div class="col-sm-8"><input class="form-control" type="text" name="EMAIL" maxlength="50"
						                             value="<? echo $arResult["arUser"]["EMAIL"] ?>"/></div>
					</div>

					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('LOGIN') ?><span
								class="starrequired">*</span></label>

						<div class="col-sm-8"><input class="form-control" type="text" name="LOGIN" maxlength="50"
						                             value="<? echo $arResult["arUser"]["LOGIN"] ?>"/></div>
					</div>
					<? if($arResult["arUser"]["EXTERNAL_AUTH_ID"] == ''): ?>
						<div class="form-group">
							<label class="col-sm-4 control-label"><?= GetMessage('NEW_PASSWORD_REQ') ?></label>

							<div class="col-sm-8">
								<input class="form-control" type="password" name="NEW_PASSWORD" maxlength="50" value=""
								       autocomplete="off" class="bx-auth-input"/>
							</div>
						</div>
					<? if($arResult["SECURE_AUTH"]): ?>
						<span class="bx-auth-secure" id="bx_auth_secure" title="<? echo GetMessage("AUTH_SECURE_NOTE") ?>"
						      style="display:none">
									<div class="bx-auth-secure-icon"></div>
								</span>
						<noscript>
								<span class="bx-auth-secure" title="<? echo GetMessage("AUTH_NONSECURE_NOTE") ?>">
									<div class="bx-auth-secure-icon bx-auth-secure-unlock"></div>
								</span>
						</noscript>
						<script type="text/javascript">
							document.getElementById('bx_auth_secure').style.display = 'inline-block';
						</script>


					<? endif ?>
						<div class="form-group">
							<label class="col-sm-4 control-label"><?= GetMessage('NEW_PASSWORD_CONFIRM') ?></label>

							<div class="col-sm-8"><input class="form-control" type="password" name="NEW_PASSWORD_CONFIRM" maxlength="50" value=""
							                             autocomplete="off"/></div>
						</div>
					<? endif ?>

					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage('USER_GENDER') ?></label>

						<div class="col-sm-8">
							<div class="radio">
								<label>
									<input type="radio" name="optionsRadios" class="flat-red" value="M" <?= $arResult["arUser"]["PERSONAL_GENDER"] == "M" ? " CHECKED=\"CHECKED\"" : "" ?> />
									<?= GetMessage("USER_MALE") ?>
								</label>
							</div>
							<div class="radio">
								<label>
									<input type="radio" name="optionsRadios" class="flat-red" value="F" <?= $arResult["arUser"]["PERSONAL_GENDER"] == "F" ? " CHECKED=\"CHECKED\"" : "" ?> />
									<?= GetMessage("USER_FEMALE") ?>
								</label>
							</div>

						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage("USER_BIRTHDAY_DT") ?>
							(<?= $arResult["DATE_FORMAT"] ?>):</label>

						<div class="col-sm-8"><?
							$APPLICATION->IncludeComponent(
								'bitrix:main.calendar',
								'',
								array(
									'SHOW_INPUT' => 'Y',
									'FORM_NAME' => 'form1',
									'INPUT_NAME' => 'PERSONAL_BIRTHDAY',
									'INPUT_VALUE' => $arResult["arUser"]["PERSONAL_BIRTHDAY"],
									'SHOW_TIME' => 'N'
								),
								null,
								array('HIDE_ICONS' => 'Y')
							);

							?></div>
					</div>
					<div class="form-group">
						<label class="col-sm-4 control-label"><?= GetMessage("USER_PHOTO") ?></label>

						<div class="col-sm-8">
							<?= $arResult["arUser"]["PERSONAL_PHOTO_INPUT"] ?>
							<? if(strlen($arResult["arUser"]["PERSONAL_PHOTO"]) > 0){ ?>
								<br/>
								<?= $arResult["arUser"]["PERSONAL_PHOTO_HTML"] ?>
							<? } ?>
						</div>
					</div>



					<div class="box-footer">
						<p><? echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"]; ?></p>


						<input class="btn btn-primary" type="submit" name="save"
						       value="<?= (($arResult["ID"] > 0) ? GetMessage("MAIN_SAVE") : GetMessage("MAIN_ADD")) ?>">
						<input class="btn btn-default"
						       type="reset" value="<?= GetMessage('MAIN_RESET'); ?>">

					</div>
				</div><? /*<div class="box-body">*/ ?>
			</form>
			<?
			if($arResult["SOCSERV_ENABLED"]){
				$APPLICATION->IncludeComponent("bitrix:socserv.auth.split", ".default", array(
					"SHOW_PROFILES" => "Y",
					"ALLOW_DELETE" => "Y"
				),
					false
				);
			}
			?>
		</div><? //div class="box box-info">?>
	</div><? //div class="col-md-6">?>
</div><? //.row?>


