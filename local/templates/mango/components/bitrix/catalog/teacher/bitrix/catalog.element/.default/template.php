<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="content-push">
	<div class="information-blocks">
		<div class="row">
			<div class="col-sm-4 information-entry main-image-wp">
				<?if($arResult['DETAIL_PICTURE']['SRC']){?>
					<img src="<?=$arResult['DETAIL_PICTURE']['SRC']?>" alt="<?=$arResult['DETAIL_PICTURE']['ALT']?>" title="<?=$arResult['DETAIL_PICTURE']['TITLE']?>"  />
				<?}elseif($arResult['PREVIEW_PICTURE']['SRC']){?>
					<img src="<?=$arResult['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arResult['PREVIEW_PICTURE']['ALT']?>" title="<?=$arResult['PREVIEW_PICTURE']['TITLE']?>"  />
				<?}else{?>
					<img src="<?=MANGO_TPL_PATH?>/img/product-main-1.jpg" alt=""  />
				<?}?>

				<?if(!empty($arResult['SOC_LINKS']) && is_array($arResult['SOC_LINKS'])){?>
					<div class="i-in-soc">
						<div class="title">Я в соцсетях</div>
						<?foreach($arResult['SOC_LINKS'] as $soc_link){?>
							<a target="_blank" href="<?=$soc_link['VALUE'];?>" class="btn btn-social-icon btn-<?=$soc_link['ICO']?>"><i class="fa fa-<?=$soc_link['ICO']?>"></i></a>
						<?}?>
						<div class="clear"></div>
					</div>
				<?}?>



			</div>
			<div class="col-sm-8 information-entry">
				<div class="product-detail-box">
					<h1 class="product-title"><?=$arResult['NAME']?></h1>

					<a class="button style-11 add-to-bookmark"><i class="fa fa-heart"></i> В закладки</a>

					<?/*<h3 class="product-subtitle">Loremous Clothing</h3>*/?>
					<div class="rating-box">
						<div class="star"><i class="fa fa-star"></i></div>
						<div class="star"><i class="fa fa-star"></i></div>
						<div class="star"><i class="fa fa-star"></i></div>
						<div class="star"><i class="fa fa-star-o"></i></div>
						<div class="star"><i class="fa fa-star-o"></i></div>
						<div class="rating-number">25 Reviews</div>
					</div>
					<div class="product-description detail-info-entry"><?=$arResult['PREVIEW_TEXT']?></div>



					<?if(!empty($arResult['PROPERTIES']['MY_AUDIO']['VALUE'])){?>
						<div class="detail-info-entry">

							<div id="MY_AUDIO"></div>

							<ul id="playlists" style="display:none;">
								<li data-source="playlist"  data-thumbnail-path="content/thumbnails/large1.jpg">
									<p class="minimalWhiteCategoriesTitle"><span class="boldWhite">Title: </span>My playlist 1</p>
									<p class="minimalWhiteCategoriesType"><span class="boldWhite">Type: </span><span class="minimalWhiteCategoriesTypeIn">HTML</span></p>
									<p class="minimalWhiteCategoriesDescription"><span class="boldWhite">Description: </span>This playlist is created using html elements.</p>
								</li>
							</ul>

							<ul id="playlist">
								<?foreach($arResult['PROPERTIES']['MY_AUDIO']['VALUE'] as $key => $arAudio){?>
									<li onmousedown="player1.playSpecificTrack(0,<?=$key?>)" data-path="<?=$arAudio['SRC']?>" >
										<p><b><?=$key+1;?></b> - <?=$arAudio['DESCRIPTION']?$arAudio['DESCRIPTION']:$arAudio['ORIGINAL_NAME']?></p>
									</li>
								<?}?>
							</ul>
							<div class="clear"></div>
						</div>
					<?}?>

					<?if(!empty($arResult['CONTACTS']) && is_array($arResult['CONTACTS'])){?>
						<div class="detail-info-entry contacts">
							<div class="detail-info-entry-title">Контакты:</div>
							<?foreach($arResult['CONTACTS'] as $arContact){?>
								<div class="contacts__item">
									<a class="btn btn-social-icon btn-<?=$arContact['ICO']?> bg-olive"><i class="fa fa-<?=$arContact['ICO']?>"></i></a> <?=$arContact['VALUE']?>
								</div>
							<?}?>
						</div>
					<?}?>



					<div class="share-box detail-info-entry">
						<div class="title">Поделиться в соцсетях</div>
						<div class="socials-box">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-google-plus"></i></a>
							<a href="#"><i class="fa fa-youtube"></i></a>
							<a href="#"><i class="fa fa-linkedin"></i></a>
							<a href="#"><i class="fa fa-instagram"></i></a>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="information-blocks">
		<div class="tabs-container style-1">
			<div class="swiper-tabs tabs-switch">
				<div class="title">Еще:</div>
				<div class="list">
					<?if(!empty($arResult['PROPERTIES']['MY_VIDEO']['VALUE'])){?>
						<?$video_cnt = count($arResult['PROPERTIES']['MY_VIDEO']['VALUE'])?>
						<a class="tab-switcher">Видео (<?=$video_cnt?>)</a>
					<?}?>
					<?if(!empty($arResult['DETAIL_TEXT'])){?>
						<a class="tab-switcher">Программа обучения</a>
					<?}?>

					<a class="tab-switcher">Отзывы (25)</a>
					<div class="clear"></div>
				</div>
			</div>
			<div>
				<?if(!empty($arResult['PROPERTIES']['MY_VIDEO']['VALUE'])){?>
					<div class="tabs-entry">
						<div class="article-container style-1">
							<div class="accordeon size-1">

								<?for($i = 0; $i<$video_cnt; $i++){?>
									<?if(!$arResult['PROPERTIES']['MY_VIDEO']['VALUE'][$i]) continue;?>
									<div class="accordeon-title"><span class="number"><?=$i+1?></span>
										<?if($arResult['PROPERTIES']['MY_VIDEO']['DESCRIPTION'][$i]){?>
											<?=$arResult['PROPERTIES']['MY_VIDEO']['DESCRIPTION'][$i];?>
										<?}else{?>
											Видео №<?=$i+1?>
										<?}?>
									</div>
									<div class="accordeon-entry">
										<div class="article-container style-1">
											<iframe width="560" height="315" src="https://www.youtube.com/embed/<?=$arResult['PROPERTIES']['MY_VIDEO']['VALUE'][$i]?>" frameborder="0" allowfullscreen></iframe>
										</div>
									</div>
								<?}?>

							</div>
						</div>
					</div>
				<?}?>

				<div class="tabs-entry">
					<div class="article-container style-1">
						<div class="row">
							<div class="col-md-6 information-entry">
								<?=$arResult['DETAIL_TEXT']?>
							</div>
						</div>
					</div>
				</div>

				<div class="tabs-entry">
					<div class="article-container style-1">
						<div class="row">
							<div class="col-md-6 information-entry">
								<h4>RETURNS POLICY</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
								<ul>
									<li>Any Product types that You want - Simple, Configurable</li>
									<li>Downloadable/Digital Products, Virtual Products</li>
									<li>Inventory Management with Backordered items</li>
									<li>Customer Personal Products - upload text for embroidery, monogramming</li>
									<li>Create Store-specific attributes on the fly</li>
								</ul>
							</div>
							<div class="col-md-6 information-entry">
								<h4>SHIPPING</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
								<ul>
									<li>Any Product types that You want - Simple, Configurable</li>
									<li>Downloadable/Digital Products, Virtual Products</li>
									<li>Inventory Management with Backordered items</li>
									<li>Customer Personal Products - upload text for embroidery, monogramming</li>
									<li>Create Store-specific attributes on the fly</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div><?//..content-push">?>