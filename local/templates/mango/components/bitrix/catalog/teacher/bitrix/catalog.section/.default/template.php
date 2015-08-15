<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>


<div class="row">
	<div class="col-md-9 col-md-push-3 col-sm-8 col-sm-push-4">
		<div class="page-selector">
			<div class="pages-box pages-box-top  hidden-xs">
				<?=$arResult["NAV_STRING"]; ?>
			</div>
			<div class="shop-grid-controls">
				<div class="entry">
					<div class="inline-text">Сортировать по</div>
					<div class="simple-drop-down">
						<select>
							<option>ФИО</option>
							<option>Рейтингу</option>
						</select>
					</div>
					<div class="sort-button"></div>
				</div>
				<div class="entry">
					<div class="view-button grid"><i class="fa fa-th"></i></div>
					<div class="view-button active list"><i class="fa fa-list"></i></div>
				</div>
			</div>
			<div class="clear"></div>
		</div>




		<div class="row shop-grid list-view">


			<?foreach($arResult['ITEMS'] as $arItem){?>


				<div class="col-md-3 col-sm-4 shop-grid-item">
					<div class="product-slide-entry">
						<div class="product-image">

							<a href="<?=$arItem['DETAIL_PAGE_URL']?>">
								<?if($arItem['PREVIEW_PICTURE']['SRC']){?>
									<img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>">
								<?}else{?>
									<img src="<?= MANGO_TPL_PATH ?>/img/product-minimal-1.jpg" alt="">
								<?}?>
							</a>
						</div>
						<a class="tag" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=join(', ', $arItem['DISPLAY_PROPERTIES']['WHAT_TEACH']['VALUE'])?></a>
						<a class="title" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>

						<div class="rating-box">
							<div class="star"><i class="fa fa-star"></i></div>
							<div class="star"><i class="fa fa-star"></i></div>
							<div class="star"><i class="fa fa-star"></i></div>
							<div class="star"><i class="fa fa-star"></i></div>
							<div class="star"><i class="fa fa-star"></i></div>
							<div class="reviews-number">25 отзывов</div>
						</div>
						<div class="article-container style-1">
							<p><?=$arItem['PREVIEW_TEXT']?></p>
						</div>
						<div class="list-buttons">
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="button style-10">Подробнее</a>
							<a class="button style-11 add-to-bookmark"><i class="fa fa-heart"></i> В закладки </a>
						</div>
					</div>
					<div class="clear"></div>
				</div>

			<?}?>



		</div>
		<div class="page-selector">

			<div class="pages-box">
				<?=$arResult["NAV_STRING"]; ?>
			</div>
			<div class="clear"></div>
		</div>


		<?=$arResult["NAV_STRING"]; ?>
	</div>
</div>
