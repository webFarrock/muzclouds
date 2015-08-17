<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>
<div class="register-box-body">

	<? if($USER->IsAuthorized()){ ?>

		<p><? echo GetMessage("MAIN_REGISTER_AUTH") ?></p>

	<? } else{ ?>
		<?
		if(count($arResult["ERRORS"]) > 0):
			foreach($arResult["ERRORS"] as $key => $error)
				if(intval($key) == 0 && $key !== 0)
					$arResult["ERRORS"][$key] = str_replace("#FIELD_NAME#", "&quot;".GetMessage("REGISTER_FIELD_".$key)."&quot;", $error);

			?>
			<div class="callout callout-danger">
				<h4>Ошибка!</h4>
				<p><?=implode("<br />", $arResult["ERRORS"])?></p>
			</div>

			<?
		elseif($arResult["USE_EMAIL_CONFIRMATION"] === "Y"):
			?>
			<div class="callout callout-success">
				<h4>Ура!</h4>
				<p><?= GetMessage("REGISTER_EMAIL_WILL_BE_SENT") ?></p>
			</div>
		<? endif ?>
		<p class="login-box-msg"><?= GetMessage("AUTH_REGISTER") ?></p>
		<form method="post" action="<?= POST_FORM_ACTION_URI ?>" name="regform" enctype="multipart/form-data">
			<? if($arResult["BACKURL"] <> ''){ ?>
				<input type="hidden" name="backurl" value="<?= $arResult["BACKURL"] ?>"/>
			<? } ?>


				<? foreach($arResult["SHOW_FIELDS"] as $FIELD){ ?>

					<?
							switch($FIELD){

							case 'LOGIN':
								?>
								<div class="form-group has-feedback">
									<input type="text" class="form-control" name="REGISTER[<?= $FIELD ?>]" value="<?= $arResult["VALUES"][$FIELD] ?>" placeholder="Логин" />
									<span class="glyphicon glyphicon-user form-control-feedback"></span>
								</div>
							<?
							break;
							case 'EMAIL':
							?>
								<div class="form-group has-feedback">
									<input type="email" class="form-control" placeholder="Email" name="REGISTER[<?= $FIELD ?>]" value="<?= $arResult["VALUES"][$FIELD] ?>"  />
									<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
								</div>
							<?break;

							case "PASSWORD":
								?>
								<div class="form-group has-feedback">
									<input type="password" class="form-control" placeholder="Пароль" type="password" name="REGISTER[<?= $FIELD ?>]"
									       value="<?= $arResult["VALUES"][$FIELD] ?>" autocomplete="off" />
									<span class="glyphicon glyphicon-lock form-control-feedback"></span>
								</div>
							<? if($arResult["SECURE_AUTH"]): ?>
								<span class="bx-auth-secure" id="bx_auth_secure"
								      title="<? echo GetMessage("AUTH_SECURE_NOTE") ?>" style="display:none">
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
							<?endif ?>
								<?
								break;
							case "CONFIRM_PASSWORD":
								?>

								<div class="form-group has-feedback">
									<input type="password" name="REGISTER[<?= $FIELD ?>]"
									       value="<?= $arResult["VALUES"][$FIELD] ?>" autocomplete="off" class="form-control" placeholder="Пароль еще раз" />
									<span class="glyphicon glyphicon-log-in form-control-feedback"></span>
								</div>
								<?break;?>

							<?} ?>


				<? } ?>


				<?
				/* CAPTCHA */
				if($arResult["USE_CAPTCHA"] == "Y"){
					?>

					<div class="row form-group">
						<div class="col-xs-6">
							<img src="/bitrix/tools/captcha.php?captcha_sid=<?= $arResult["CAPTCHA_CODE"] ?>" width="155" height="34" alt="CAPTCHA"/>
							<input type="hidden" name="captcha_sid" value="<?= $arResult["CAPTCHA_CODE"] ?>"/>
						</div><!-- /.col -->
						<div class="col-xs-6">

							<input type="text" class="form-control" name="captcha_word" maxlength="50" placeholder="Защитный код" value=""/>
						</div><!-- /.col -->
					</div>

					<?
				}
				/* !CAPTCHA */
				?>

			<div class="row form-group">
				<div class="col-xs-12">
					<input type="submit" class="btn btn-primary btn-block btn-flat" name="register_submit_button" value="<?= GetMessage("AUTH_REGISTER") ?>"/>
				</div><!-- /.col -->
			</div>

			<p><? echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"]; ?></p>

		</form>


		<div class="social-auth-links text-center">
			<p>- или -</p>
			<a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using Facebook</a>
			<a href="#" class="btn btn-block btn-social btn-google-plus btn-flat"><i class="fa fa-google-plus"></i> Sign up using Google+</a>
		</div>

		<a href="/auth/" class="text-center">У меня уже есть аккаунт</a>

	<? } ?>
</div>