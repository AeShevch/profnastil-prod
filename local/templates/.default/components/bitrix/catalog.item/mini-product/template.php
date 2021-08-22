<?php
/** @var array $arResult */

$mainPrice = str_replace(".00 руб", " р.", $arResult["ITEM"]["PRICES"]["Типовые правила продаж"]["PRINT_VALUE_NOVAT"]);
$oldPrice = str_replace(".00 руб", " р.", $arResult["ITEM"]["PRICES"]["Типовые правила продаж"]["PRINT_DISCOUNT_VALUE_NOVAT"]);

//echo "<pre>";
//print_r($arResult);
//echo "</pre>";
//?>
<article class="product-card js-product-container">
    <small class="product-card__article">
        Код: <?= $arResult["ITEM"]['PROPERTIES']['CML2_TRAITS']['VALUE']['2'] ?>
    </small>
    <a href="<?= $arResult["ITEM"]["DETAIL_PAGE_URL"] ?>"
       class="product-card__link">
        <img class="product-card__image js-product-image"
             src="<?php echo !empty($arResult['ITEM']['DETAIL_PICTURE']['SRC']) ? $arResult['ITEM']['DETAIL_PICTURE']['SRC'] : SITE_TEMPLATE_PATH . "/images/product-placeholder.jpeg" ?>"
             alt="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["ALT"] ?>"
             title="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["TITLE"] ?>"
             loading="lazy"
             width="236"
             height="236"
        >
    </a>
    <a href="<?= $arResult["ITEM"]["DETAIL_PAGE_URL"] ?>"
       class="product-card__link">
        <h3 class="product-card__title">
            <b><?= $arResult["ITEM"]["NAME"] ?></b>
        </h3>
    </a>
    <div class="product-card__prices">
        <b class="product-card__main-price">
            <?= $mainPrice ?>
        </b>
        <?php if ($mainPrice !== $oldPrice): ?>
            <s class="product-card__old-price">
                <?= $oldPrice ?>
            </s>
        <?php endif; ?>
    </div>
    <div class="product-card__buttons">
        <a href="<?= $arResult["ITEM"]["DETAIL_PAGE_URL"] ?>"
           title="Перейти на страницу товара «<?= $arResult["ITEM"]["NAME"] ?>»"
           class="product-card__more button button_outlined"
           type="button">
            Подробнее
        </a>
        <button
                title="Добавить товар «<?= $arResult["ITEM"]["NAME"] ?>» в корзину"
                data-ajax-url="<?= $arResult["ITEM"]["ADD_URL"] ?>"
                data-id="<?= $arResult["ITEM"]["ID"] ?>"
                data-price="<?= $arResult["ITEM"]["PRICES"]["Типовые правила продаж"]["VALUE"] ?>"
                class="product-card__buy js-add-to-cart-button"
                type="button">
            В корзину
            <span id="html-spinner"></span>
        </button>
    </div>

</article>

