<? if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die(); ?>


<div class="header-middle">
	<div class="logo-wrapper">
		<a id="logo" href="#"><img src="<?= MANGO_TPL_PATH ?>/img/logo-4.png" alt=""/></a>
	</div>

	<div class="middle-entry">
		<?/*
		<a class="icon-entry" href="#">
                                <span class="image">
                                    <i class="fa fa-phone"></i>
                                </span>
                                <span class="text">
                                    <b>Contact Info</b> <br/> (+48) 500 700 600
                                </span>
		</a>
		<a class="icon-entry" href="#">
                                <span class="image">
                                    <i class="fa fa-car"></i>
                                </span>
                                <span class="text">
                                    <b>Free Shipping</b> <br/> on order over $200
                                </span>
		</a>
		*/?>
	</div>

	<div class="right-entries user-links">
		<a class="header-functionality-entry open-search-popup" href="/search/"><i class="fa fa-search"></i><span title="Поиск">Поиск</span></a>
		<?if($USER->IsAuthorized()){?>
			<a class="header-functionality-entry" href="/office/"><i class="fa fa-user"></i><span title="Кабинет">Кабинет</span></a>
			<a class="header-functionality-entry" href="/office/favorites/"><i class="fa fa-heart-o"></i><span title="Закладки">Закладки</span></a>
			<a class="header-functionality-entry" href="/auth/?logout=yes"><i class="fa fa-eject"></i><span title="Выйти">Выйти</span></a>
		<?}else{?>

			<a class="header-functionality-entry" href="/auth/?logout=yes"><i class="fa fa-key"></i><span title="Вход">Вход</span></a>
			<a class="header-functionality-entry" href="/auth/?logout=yes"><i class="fa fa-lock"></i><span title="Регистрация">Регистрация</span></a>
		<?}?>


		<?/*<a class="header-functionality-entry open-cart-popup" href="#"><i class="fa fa-shopping-cart"></i><span>My Cart</span> <b>$255,99</b></a>*/?>
	</div>

</div>