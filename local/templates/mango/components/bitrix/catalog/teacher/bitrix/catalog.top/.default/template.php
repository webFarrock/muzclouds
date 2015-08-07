<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<div class="col-md-9 col-md-push-3 col-sm-8 col-sm-push-4">
<div class="page-selector">
	<div class="pages-box hidden-xs">
		<a href="#" class="square-button active">1</a>
		<a href="#" class="square-button">2</a>
		<a href="#" class="square-button">3</a>

		<div class="divider">...</div>
		<a href="#" class="square-button"><i class="fa fa-angle-right"></i></a>
	</div>
	<div class="shop-grid-controls">
		<div class="entry">
			<div class="inline-text">Sorty by</div>
			<div class="simple-drop-down">
				<select>
					<option>Position</option>
					<option>Price</option>
					<option>Category</option>
					<option>Rating</option>
					<option>Color</option>
				</select>
			</div>
			<div class="sort-button"></div>
		</div>
		<div class="entry">
			<div class="view-button active grid"><i class="fa fa-th"></i></div>
			<div class="view-button list"><i class="fa fa-list"></i></div>
		</div>
		<div class="entry">
			<div class="inline-text">Show</div>
			<div class="simple-drop-down" style="width: 75px;">
				<select>
					<option>12</option>
					<option>20</option>
					<option>30</option>
					<option>40</option>
					<option>all</option>
				</select>
			</div>
			<div class="inline-text">per page</div>
		</div>
	</div>
	<div class="clear"></div>
</div>




<div class="row shop-grid grid-view">


	<?foreach($arResult['ITEMS'] as $arItem){?>


		<div class="col-md-3 col-sm-4 shop-grid-item">
		<div class="product-slide-entry shift-image">
			<div class="product-image">

				<?if($arItem['PREVIEW_PICTURE']['SRC']){?>
					<img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>">
					<img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>">
				<?}else{?>
					<img src="<?= MANGO_TPL_PATH ?>/img/product-minimal-1.jpg" alt="">
					<img src="<?= MANGO_TPL_PATH ?>/img/product-minimal-11.jpg" alt="">
				<?}?>

				<div class="bottom-line left-attached">
					<a class="bottom-line-a square"><i class="fa fa-shopping-cart"></i></a>
					<a class="bottom-line-a square"><i class="fa fa-heart"></i></a>
					<a class="bottom-line-a square"><i class="fa fa-retweet"></i></a>
					<a class="bottom-line-a square"><i class="fa fa-expand"></i></a>
				</div>
			</div>
			<a class="tag" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=join(', ', $arItem['DISPLAY_PROPERTIES']['WHAT_TEACH']['VALUE'])?></a>
			<a class="title" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>

			<div class="rating-box">
				<div class="star"><i class="fa fa-star"></i></div>
				<div class="star"><i class="fa fa-star"></i></div>
				<div class="star"><i class="fa fa-star"></i></div>
				<div class="star"><i class="fa fa-star"></i></div>
				<div class="star"><i class="fa fa-star"></i></div>
				<div class="reviews-number">25 reviews</div>
			</div>
			<div class="article-container style-1">
				<p><?=$arItem['PREVIEW_TEXT']?></p>
			</div>
			<div class="price">
				<div class="prev">$199,99</div>
				<div class="current">$119,99</div>
			</div>
			<div class="list-buttons">
				<a class="button style-10">Add to cart</a>
				<a class="button style-11"><i class="fa fa-heart"></i> Add to Wishlist</a>
			</div>
		</div>
		<div class="clear"></div>
	</div>

	<?}?>



</div>
<div class="page-selector">
	<div class="description">Showing: 1-3 of 16</div>
	<div class="pages-box">
		<a href="#" class="square-button active">1</a>
		<a href="#" class="square-button">2</a>
		<a href="#" class="square-button">3</a>

		<div class="divider">...</div>
		<a href="#" class="square-button"><i class="fa fa-angle-right"></i></a>
	</div>
	<div class="clear"></div>
</div>
</div>
