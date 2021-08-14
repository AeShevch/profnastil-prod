<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-9 d-flex flex-column">
                <div class="row flex-grow-1 d-">
                    <div class="col-12 col-md-6 d-flex flex-column mb-4 mb-md-0">
                        <div class="row flex-grow-1">
                            <div class="col-12 mb-4 d-flex flex-column">
                                <a href="#" class="trigger trigger_big flex-grow-1">
                                    <svg class="trigger__icon" width="100" height="100" aria-hidden="true">
                                        <use xlink:href="#icon_assortment"></use>
                                    </svg>
                                    <h3 class="trigger__title">
                                        Большой ассортимент
                                    </h3>
                                    <p class="trigger__desc mb-0">
                                        строительных, электро и декоративно-отделочных материалов по низким ценам в наличии и под заказ
                                    </p>
                                </a>
                            </div>
                            <div class="col-12 d-flex flex-column">
                                <div class="row flex-grow-1">
                                    <div class="col-6 d-flex flex-column">
                                        <a href="#" class="trigger flex-grow-1">
                                            <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                                <use xlink:href="#icon_delivery"></use>
                                            </svg>
                                            <h3 class="trigger__title">
                                                Удобная доставка
                                            </h3>
                                            <p class="trigger__desc mb-0">
                                                в течение дня по предварительному звонку
                                            </p>
                                        </a>
                                    </div>
                                    <div class="col-6 d-flex flex-column">
                                        <a href="#" class="trigger flex-grow-1">
                                            <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                                <use xlink:href="#icon_return"></use>
                                            </svg>
                                            <h3 class="trigger__title">
                                                Возврат товаров
                                            </h3>
                                            <p class="trigger__desc mb-0">
                                                в течение 7 календарных дней
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex flex-column">
                        <div class="row mb-4 flex-grow-1">
                            <div class="col-6 d-flex flex-column">
                                <a href="#" class="trigger flex-grow-1">
                                    <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                        <use xlink:href="#icon_calc_trigger"></use>
                                    </svg>
                                    <h3 class="trigger__title">
                                        Строительный калькулятор
                                    </h3>
                                    <p class="trigger__desc mb-0">
                                        возможность произвести предварительный расчет стоимости ремонта
                                    </p>
                                </a>
                            </div>
                            <div class="col-6 d-flex flex-column">
                                <a href="#" class="trigger flex-grow-1">
                                    <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                        <use xlink:href="#icon_faq"></use>
                                    </svg>
                                    <h3 class="trigger__title">
                                        Вопрос-ответ
                                    </h3>
                                    <p class="trigger__desc mb-0">
                                        часто задаваемые вопросы по товару
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div class="row flex-grow-1">
                            <div class="col-6 d-flex flex-column">
                                <a href="#" class="trigger flex-grow-1">
                                    <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                        <use xlink:href="#icon_sale"></use>
                                    </svg>
                                    <h3 class="trigger__title">
                                        Скидки
                                    </h3>
                                    <p class="trigger__desc mb-0">
                                        накопительная дисконтная система лояльности, бонусы постоянным клиентам
                                    </p>
                                </a>
                            </div>
                            <div class="col-6 d-flex flex-column">
                                <a href="#" class="trigger flex-grow-1">
                                    <svg class="trigger__icon" width="50" height="50" aria-hidden="true">
                                        <use xlink:href="#icon_sale"></use>
                                    </svg>
                                    <h3 class="trigger__title">
                                        Online оплата
                                    </h3>
                                    <p class="trigger__desc mb-0">

                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 d-none d-lg-flex">
                <a href="#" title="Перейти к странице акции" class="sale-banner">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/images/demo/alert.png" alt="" class="sale-banner__image">
                    <span class="sale-banner__content">
                        <span class="sale-banner__title pb-2" style="color:#e90008; font-size: 18px;font-weight: 700;">
                            Уважаемые посетители!
                        </span>
                        <span class="sale-banner__time" style=" font-size: 1em; font-weight:600;">
                            Сайт находится в режиме разработки.
                            Наличие и актуальную стоимость уточнять у менеджеров.
                            <br>
                            Приносим свои извинения за не удобства.
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <?
        global $arrFilterSales;
        $GLOBALS['arrFilterSales'] = array('PROPERTY_NOVYY_TOVAR_VALUE' => 'Да');
        $APPLICATION->IncludeComponent(
	"bitrix:catalog.top", 
	"products-carousel", 
	array(
		"TITLE" => "Новинки",
		"CAROUSEL_ID" => "news-carousel",
		"COUNT_PER_PAGE" => "5",
		"ACTION_VARIABLE" => "action",
		"ADD_PICT_PROP" => "-",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"ADD_TO_BASKET_ACTION" => "ADD",
		"BASKET_URL" => "/personal/basket.php",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPARE_NAME" => "CATALOG_COMPARE_LIST",
		"COMPATIBLE_MODE" => "Y",
		"CONVERT_CURRENCY" => "N",
		"CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"OR\",\"True\":\"True\"},\"CHILDREN\":[]}",
		"DETAIL_URL" => "/catalog/#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
		"DISPLAY_COMPARE" => "N",
		"ELEMENT_COUNT" => "32",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "desc",
		"ENLARGE_PRODUCT" => "STRICT",
		"FILTER_NAME" => "arrFilterSales",
		"HIDE_NOT_AVAILABLE" => "N",
		"HIDE_NOT_AVAILABLE_OFFERS" => "N",
		"IBLOCK_ID" => "113",
		"IBLOCK_TYPE" => "catalog1Cv83",
		"LABEL_PROP" => array(
			0 => "NOVINKI",
		),
		"OFFERS_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"OFFERS_LIMIT" => "0",
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_TAXES",
			1 => "CML2_ATTRIBUTES",
			2 => "SORT",
			3 => "Size",
			4 => "Size",
			5 => "BASE_UNIT",
			6 => "ARTICLE",
			7 => "",
		),
		"PRICE_CODE" => array(
			0 => "Типовые правила продаж",
		),
		"PRICE_VAT_INCLUDE" => "Y",
		"PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons",
		"PRODUCT_DISPLAY_MODE" => "Y",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_PROPERTIES" => array(
		),
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'6','BIG_DATA':false}]",
		"PRODUCT_SUBSCRIPTION" => "Y",
		"PROPERTY_CODE" => array(
			0 => "CML2_TRAITS",
			1 => "NOVINKI",
			2 => "",
		),
		"COMPONENT_TEMPLATE" => "products-carousel",
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_SORT_FIELD2" => "id",
		"OFFERS_SORT_ORDER2" => "desc",
		"LINE_ELEMENT_COUNT" => "3",
		"SECTION_URL" => "",
		"SEF_MODE" => "N",
		"USE_PRICE_COUNT" => "N",
		"SHOW_PRICE_COUNT" => "1",
		"USE_PRODUCT_QUANTITY" => "Y",
		"PARTIAL_PRODUCT_PROPERTIES" => "Y",
		"OFFERS_CART_PROPERTIES" => array(
			0 => "MAKSIMALNAYA_SKIDKA_PROTSENT",
			1 => "CML2_TRAITS",
		)
	),
	false
);
        ?>
    </div>
</section>


<div class="container">
    <?php
    global $arrFilterSales;
    $GLOBALS['arrFilterSales'] = array('PROPERTY_SNIZHENA_TSENA_VALUE' => 'Да');
    $APPLICATION->IncludeComponent(
	"bitrix:catalog.top", 
	"products-carousel", 
	array(
		"TITLE" => "Сниженные цены",
		"CAROUSEL_ID" => "sales-carousel",
		"COUNT_PER_PAGE" => "5",
		"ACTION_VARIABLE" => "action",
		"ADD_PICT_PROP" => "-",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"ADD_TO_BASKET_ACTION" => "ADD",
		"BASKET_URL" => "/personal/basket.php",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPARE_NAME" => "CATALOG_COMPARE_LIST",
		"COMPATIBLE_MODE" => "Y",
		"CONVERT_CURRENCY" => "N",
		"CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"OR\",\"True\":\"True\"},\"CHILDREN\":[]}",
		"DETAIL_URL" => "/catalog/#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
		"DISPLAY_COMPARE" => "N",
		"ELEMENT_COUNT" => "32",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "desc",
		"ENLARGE_PRODUCT" => "STRICT",
		"FILTER_NAME" => "arrFilterSales",
		"HIDE_NOT_AVAILABLE" => "N",
		"HIDE_NOT_AVAILABLE_OFFERS" => "N",
		"IBLOCK_ID" => "113",
		"IBLOCK_TYPE" => "catalog1Cv83",
		"LABEL_PROP" => array(
			0 => "NOVINKI",
		),
		"LABEL_PROP_MOBILE" => "",
		"LABEL_PROP_POSITION" => "top-left",
		"LINE_ELEMENT_COUNT" => "5",
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
		"MESS_BTN_BUY" => "Купить",
		"MESS_BTN_COMPARE" => "Сравнить",
		"MESS_BTN_DETAIL" => "Подробнее",
		"MESS_NOT_AVAILABLE" => "Нет в наличии",
		"OFFERS_CART_PROPERTIES" => array(
			0 => "MAKSIMALNAYA_SKIDKA_PROTSENT",
			1 => "CML2_TRAITS",
		),
		"OFFERS_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"OFFERS_LIMIT" => "0",
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_TAXES",
			1 => "CML2_ATTRIBUTES",
			2 => "SORT",
			3 => "Size",
			4 => "Size",
			5 => "BASE_UNIT",
			6 => "ARTICLE",
			7 => "",
		),
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_FIELD2" => "id",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_SORT_ORDER2" => "desc",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"PRICE_CODE" => array(
			0 => "Типовые правила продаж",
		),
		"PRICE_VAT_INCLUDE" => "Y",
		"PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons",
		"PRODUCT_DISPLAY_MODE" => "Y",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_PROPERTIES" => array(
		),
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'6','BIG_DATA':false}]",
		"PRODUCT_SUBSCRIPTION" => "Y",
		"PROPERTY_CODE" => array(
			0 => "CML2_TRAITS",
			1 => "",
		),
		"PROPERTY_CODE_MOBILE" => "",
		"SECTION_URL" => "",
		"SEF_MODE" => "Y",
		"SHOW_CLOSE_POPUP" => "N",
		"SHOW_DISCOUNT_PERCENT" => "Y",
		"SHOW_MAX_QUANTITY" => "N",
		"SHOW_OLD_PRICE" => "Y",
		"SHOW_PRICE_COUNT" => "1",
		"SHOW_SLIDER" => "Y",
		"SLIDER_INTERVAL" => "3000",
		"SLIDER_PROGRESS" => "Y",
		"USE_ENHANCED_ECOMMERCE" => "N",
		"USE_PRICE_COUNT" => "N",
		"USE_PRODUCT_QUANTITY" => "Y",
		"VIEW_MODE" => "SECTION",
		"DISCOUNT_PERCENT_POSITION" => "top-right",
		"SEF_RULE" => "",
		"OFFER_ADD_PICT_PROP" => "-",
		"OFFER_TREE_PROPS" => "",
		"COMPONENT_TEMPLATE" => "products-carousel"
	),
	false
);
    ?>

    <section class="calc-banner">
        <div class="calc-banner__inner">
            <h2 class="calc-banner__title">
                Калькулятор ремонта
            </h2>
            <p class="calc-banner__desc">
                Рассчитать и заказать всё для ремонта проще, чем вы думаете
            </p>
            <a href="/calculator/"
               class="calc-banner__link"
               title="Перейти на страницу калькулятора">
                Подробнее
            </a>
        </div>
    </section>

    <?php
    global $arrFilterAgain;
    $arrFilterAgain = array(
        '=PROPERTY_OPYAT_V_PRODAZHE_VALUE' => 'Да'
    );
    $APPLICATION->IncludeComponent(
	"bitrix:catalog.top", 
	"products-carousel", 
	array(
		"TITLE" => "Опять в продаже",
		"CAROUSEL_ID" => "sales-carousel",
		"COUNT_PER_PAGE" => "5",
		"ACTION_VARIABLE" => "action",
		"ADD_PICT_PROP" => "-",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"ADD_TO_BASKET_ACTION" => "ADD",
		"BASKET_URL" => "/personal/basket.php",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPARE_NAME" => "CATALOG_COMPARE_LIST",
		"COMPATIBLE_MODE" => "Y",
		"CONVERT_CURRENCY" => "N",
		"CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"OR\",\"True\":\"True\"},\"CHILDREN\":[]}",
		"DETAIL_URL" => "/catalog/#SECTION_CODE_PATH#/#ELEMENT_CODE#/",
		"DISPLAY_COMPARE" => "N",
		"ELEMENT_COUNT" => "18",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "desc",
		"ENLARGE_PRODUCT" => "STRICT",
		"FILTER_NAME" => "arrFilterAgain",
		"HIDE_NOT_AVAILABLE" => "N",
		"HIDE_NOT_AVAILABLE_OFFERS" => "N",
		"IBLOCK_ID" => "113",
		"IBLOCK_TYPE" => "catalog1Cv83",
		"LABEL_PROP_MOBILE" => "",
		"LABEL_PROP_POSITION" => "top-left",
		"LINE_ELEMENT_COUNT" => "3",
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
		"MESS_BTN_BUY" => "Купить",
		"MESS_BTN_COMPARE" => "Сравнить",
		"MESS_BTN_DETAIL" => "Подробнее",
		"MESS_NOT_AVAILABLE" => "Нет в наличии",
		"OFFERS_CART_PROPERTIES" => array(
		),
		"OFFERS_FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"OFFERS_LIMIT" => "0",
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_TAXES",
			1 => "CML2_ATTRIBUTES",
			2 => "SORT",
			3 => "Size",
			4 => "Size",
			5 => "BASE_UNIT",
			6 => "ARTICLE",
			7 => "",
		),
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_FIELD2" => "id",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_SORT_ORDER2" => "desc",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"PRICE_CODE" => array(
			0 => "Типовые правила продаж",
		),
		"PRICE_VAT_INCLUDE" => "Y",
		"PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons",
		"PRODUCT_DISPLAY_MODE" => "Y",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_PROPERTIES" => array(
			0 => "CML2_ATTRIBUTES",
		),
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'6','BIG_DATA':false}]",
		"PRODUCT_SUBSCRIPTION" => "Y",
		"PROPERTY_CODE" => array(
			0 => "CML2_TRAITS",
			1 => "",
		),
		"PROPERTY_CODE_MOBILE" => "",
		"SECTION_URL" => "",
		"SEF_MODE" => "Y",
		"SHOW_CLOSE_POPUP" => "N",
		"SHOW_DISCOUNT_PERCENT" => "Y",
		"SHOW_MAX_QUANTITY" => "N",
		"SHOW_OLD_PRICE" => "Y",
		"SHOW_PRICE_COUNT" => "1",
		"SHOW_SLIDER" => "Y",
		"SLIDER_INTERVAL" => "3000",
		"SLIDER_PROGRESS" => "Y",
		"TEMPLATE_THEME" => "yellow",
		"USE_ENHANCED_ECOMMERCE" => "N",
		"USE_PRICE_COUNT" => "N",
		"USE_PRODUCT_QUANTITY" => "Y",
		"VIEW_MODE" => "SECTION",
		"COMPONENT_TEMPLATE" => "products-carousel",
		"DISCOUNT_PERCENT_POSITION" => "top-right",
		"SEF_RULE" => "",
		"OFFER_ADD_PICT_PROP" => "-",
		"OFFER_TREE_PROPS" => ""
	),
	false
);
    ?>
</div>
<section class="pt-4 pb-4">
    <?$APPLICATION->IncludeFile('components/customs/ourPartners/index.php');?>
</section>

<section class="pt-4 pb-4">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-9 order-1 order-md-0">
<!--                --><?//
//                // Главный слайдер
//                $APPLICATION->IncludeComponent(
//                    "bitrix:news.list",
//                    "shop-main-slider",
//                    [
//                        "DISPLAY_DATE" => "Y",
//                        "DISPLAY_NAME" => "Y",
//                        "DISPLAY_PICTURE" => "Y",
//                        "DISPLAY_PREVIEW_TEXT" => "Y",
//                        "AJAX_MODE" => "N",
//                        "IBLOCK_TYPE" => "content",
//                        "IBLOCK_ID" => Site::getIblockIdByCode('sl_home_page'),
//                        "NEWS_COUNT" => "20",
//                        "SORT_BY1" => "ACTIVE_FROM",
//                        "SORT_ORDER1" => "DESC",
//                        "SORT_BY2" => "SORT",
//                        "SORT_ORDER2" => "ASC",
//                        "FILTER_NAME" => "",
//                        "FIELD_CODE" => ["DETAIL_PICTURE"],
//                        "PROPERTY_CODE" => ["LINK", ""],
//                        "CHECK_DATES" => "Y",
//                        "DETAIL_URL" => "",
//                        "PREVIEW_TRUNCATE_LEN" => "",
//                        "ACTIVE_DATE_FORMAT" => "d.m.Y",
//                        "SET_TITLE" => "N",
//                        "SET_BROWSER_TITLE" => "N",
//                        "SET_META_KEYWORDS" => "N",
//                        "SET_META_DESCRIPTION" => "N",
//                        "SET_LAST_MODIFIED" => "N",
//                        "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
//                        "ADD_SECTIONS_CHAIN" => "N",
//                        "HIDE_LINK_WHEN_NO_DETAIL" => "Y",
//                        "PARENT_SECTION" => "",
//                        "PARENT_SECTION_CODE" => "",
//                        "INCLUDE_SUBSECTIONS" => "Y",
//                        "CACHE_TYPE" => "A",
//                        "CACHE_TIME" => "3600",
//                        "CACHE_FILTER" => "Y",
//                        "CACHE_GROUPS" => "N",
//                        "DISPLAY_TOP_PAGER" => "N",
//                        "DISPLAY_BOTTOM_PAGER" => "N",
//                        "PAGER_TITLE" => "Новости",
//                        "PAGER_SHOW_ALWAYS" => "Y",
//                        "PAGER_TEMPLATE" => "",
//                        "PAGER_DESC_NUMBERING" => "Y",
//                        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
//                        "PAGER_SHOW_ALL" => "Y",
//                        "PAGER_BASE_LINK_ENABLE" => "Y",
//                        "SET_STATUS_404" => "Y",
//                        "SHOW_404" => "Y",
//                        "MESSAGE_404" => "",
//                        "PAGER_BASE_LINK" => "",
//                        "PAGER_PARAMS_NAME" => "arrPager",
//                        "AJAX_OPTION_JUMP" => "N",
//                        "AJAX_OPTION_STYLE" => "Y",
//                        "AJAX_OPTION_HISTORY" => "N",
//                        "AJAX_OPTION_ADDITIONAL" => "",
//                    ]
//                );
//                ?>
            </div>
<!--            <div class="col-12 col-md-3 d-flex order-0 order-md-1 mb-4 mb-md-0">-->
<!--                <a href="" title="Перейти к странице акции" class="sale-banner">-->
<!--                    <img src="--><?//= SITE_TEMPLATE_PATH ?><!--/images/demo/banner.png" alt="" class="sale-banner__image">-->
<!--                    <span class="sale-banner__content p-2 p-md-0">-->
<!--                        <span class="sale-banner__title">-->
<!--                            Время действия акции:-->
<!--                        </span>-->
<!--                        <span class="sale-banner__time">-->
<!--                            с 01.11 по 31.11-->
<!--                        </span>-->
<!--                    </span>-->
<!--                </a>-->
<!--            </div>-->
        </div>
    </div>
</section>

<section class="triggers">
    <div class="container">
        <div class="triggers__inner row">
            <div class="col-12 col-md mb-3 mb-md-0">
                <div class="triggers__item trigger">
                    <svg class="trigger__icon"
                         width="72" height="72">
                        <use xlink:href="#icon_package"></use>
                    </svg>
                    <div class="trigger__inner">
                        <h4 class="trigger__title">Ассортимент</h4>
                        <p class="trigger__desc">Всегда в наличии более 10 000 наименований строительных материалов</p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md">
                <div class="triggers__item trigger">
                    <svg class="trigger__icon"
                         width="72" height="72">
                        <use xlink:href="#icon_shield"></use>
                    </svg>
                    <div class="trigger__inner">
                        <h4 class="trigger__title">Качество</h4>
                        <p class="trigger__desc"></p>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md">
                <div class="triggers__item trigger">
                    <svg class="trigger__icon"
                         width="72" height="72">
                        <use xlink:href="#icon_delivery-box"></use>
                    </svg>
                    <div class="trigger__inner">
                        <h4 class="trigger__title">Доставка</h4>
                        <p class="trigger__desc">в течение дня по предварительному звонку</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>