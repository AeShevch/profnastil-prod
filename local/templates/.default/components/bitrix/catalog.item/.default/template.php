<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$this->setFrameMode(true);

$arElement = $arParams['ITEM'];

//echo "<pre>";
//print_r($arParams);
//echo "</pre>";

$this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arResult['PARAMS']["IBLOCK_ID"], "ELEMENT_EDIT"));
$this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arResult['PARAMS']["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
$strMainID = $this->GetEditAreaId($arElement['ID']);

$arItemIDs = array(
    'ID' => $strMainID,
    'PICT' => $strMainID . '_pict',
    'SECOND_PICT' => $strMainID . '_secondpict',
    'MAIN_PROPS' => $strMainID . '_main_props',

    'QUANTITY' => $strMainID . '_quantity',
    'QUANTITY_DOWN' => $strMainID . '_quant_down',
    'QUANTITY_UP' => $strMainID . '_quant_up',
    'QUANTITY_MEASURE' => $strMainID . '_quant_measure',
    'BUY_LINK' => $strMainID . '_buy_link',
    'SUBSCRIBE_LINK' => $strMainID . '_subscribe',

    'PRICE' => $strMainID . '_price',
    'DSC_PERC' => $strMainID . '_dsc_perc',
    'SECOND_DSC_PERC' => $strMainID . '_second_dsc_perc',

    'PROP_DIV' => $strMainID . '_sku_tree',
    'PROP' => $strMainID . '_prop_',
    'DISPLAY_PROP_DIV' => $strMainID . '_sku_prop'

);
$strObName = 'ob' . preg_replace("/[^a-zA-Z0-9_]/i", "x", $strMainID);

$iblockid = $arElement['IBLOCK_ID'];
$id = $arElement['ID'];
if (isset($_SESSION["CATALOG_COMPARE_LIST"][$iblockid]["ITEMS"][$id])) {
    $checked = 'in_compare';
} else {
    $checked = '';
}
?>

<!-- Catalog item  -->
<article class="catalog-item h-100 d-flex flex-column js-product-container">
    <span class="catalog-item__article mb-2">
        Код: <?php echo $arElement["PROPERTIES"]["CML2_TRAITS"]["VALUE"][2] ?>
    </span>
    <!-- Product sales -->
    <div class="catalog-item__labels product-labels">
        <div class="product-labels__main">
            <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                <? if ($arPrice["CAN_ACCESS"]): ?>
                    <? if ($arPrice["DISCOUNT_DIFF_PERCENT"]): ?>
                        <mark class="product-labels__item">
                            Скидка <?= $arPrice["DISCOUNT_DIFF_PERCENT"] ?>%
                        </mark>
                    <? endif; ?>
                <? endif; ?>
            <? endforeach; ?>
        </div>
    </div>

    <!-- Product add buttons -->
    <div class="catalog-item__control-buttons">
        <?
        //Проверяем, есть ли данный товар в отложенных
        $curProductId = $arElement["ID"];
        $dbBasketItems = CSaleBasket::GetList(
            array(
                "NAME" => "ASC",
                "ID" => "ASC"
            ),
            array(
                "FUSER_ID" => CSaleBasket::GetBasketUserID(),
                "LID" => SITE_ID,
                "PRODUCT_ID" => $curProductId,
                "ORDER_ID" => "NULL",
                "DELAY" => "Y"
            ),
            false,
            false,
            array("PRODUCT_ID")
        );
        while ($arItems = $dbBasketItems->Fetch()) {
            $itInDelay = $arItems['PRODUCT_ID'];
        }
        $inWishList = in_array($arResult["ID"], $dbBasketItems) || isset($itInDelay);
        ?>
        <button class="product-control js-toggle-in-wishlist"
                aria-label="Добавить товар в избранное"
                title="Добавить товар в избранное"
                type="button"
                aria-pressed="<?= $inWishList ? 'true' : 'false' ?>"
                data-action="<?= $inWishList ? 'remove' : 'add' ?>"
                data-product-id="<?= $arElement["ID"] ?>"
                data-catalog-price-id="<?= $arElement["CATALOG_PRICE_ID_7"] ?>"
                data-catalog-price="<?= $arElement["CATALOG_PRICE_7"] ?>"
                data-product-name="<?= $arElement["NAME"] ?>"
                data-product-detailed-page-url="<?= $arElement["DETAIL_PAGE_URL"] ?>">
            <svg aria-hidden="true" width="20" height="20">
                <use xlink:href="#icon_like"></use>
            </svg>
        </button>
        <? unset($itInDelay) ?>
        <button class="product-control <?= $checked; ?>"
                id="compareid_<?= $arElement['ID']; ?>"
                onclick="compare_tov(<?= $arElement['ID']; ?>);"
                aria-label="Добавить товар в сравнение"
                title="Добавить товар в сравнение"
                type="button">
            <svg aria-hidden="true" width="20" height="20">
                <use xlink:href="#icon_compare"></use>
            </svg>
        </button>
    </div>

    <!-- Product image -->
    <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>"
       id="<?= $arItemIDs['PICT'] ?>"
       title="Перейти к товару «<?= $arElement["NAME"] ?>»"
       class="catalog-item__image">
        <img src="<?php echo !empty($arElement["PREVIEW_PICTURE"]["SRC"]) ? $arElement["PREVIEW_PICTURE"]["SRC"] : SITE_TEMPLATE_PATH . "/images/product-placeholder.jpeg" ?>"
            <?php // aria-labelledby должен совпадать с id заголовка, id можно любой ?>
             class="js-product-image"
             aria-labelledby="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>"
             alt="<?= $arElement["NAME"] ?>"
             loading="lazy"
             width="206" height="160">
    </a>

    <!-- Product name -->
    <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>"
       class="catalog-item__link mb-2 mt-3"
       title="Перейти к товару «<?= $arElement["NAME"] ?>">
        <h3 class="catalog-item__title"
            id="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>">
            <?= htmlspecialchars_decode($arElement['NAME']) ?>
        </h3>
    </a>

    <!-- Product prices -->
    <div class="catalog-item__prices mb-3 mt-auto">
        <?
        if (!empty($arElement["PRICES"])) :
            foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                <? if ($arPrice["CAN_ACCESS"]): ?>
                    <? if ($arPrice["DISCOUNT_VALUE"] < $arPrice["VALUE"]): ?>
                        <span class="catalog-item__price-old"><?= $arPrice["VALUE"] ?>&nbsp₽</span>
                        <span class="catalog-item__price-main bx_price"
                              id="<?= $arItemIDs['PRICE'] ?>">
											<span><?= $arPrice["DISCOUNT_VALUE"] ?>₽</span></span>
                    <? else: ?>
                        <span class="catalog-item__price-main bx_price"
                              id="<?= $arItemIDs['PRICE'] ?>"> <span><?= $arPrice["VALUE"] ?>&nbsp₽</span></span>
                    <? endif; ?>
                <? endif; ?>
            <? endforeach; ?>
        <? elseif ($arElement["PRICE"]): ?>
            <span class="catalog-item__price-main bx_price"
                  id="<?= $arItemIDs['PRICE'] ?>"> <span><?= $arElement["PRICE"] ?>&nbsp₽</span></span>
        <? elseif ($arElement['ITEM_PRICES']): ?>
            <? if ($arElement['ITEM_PRICES'][0]['PRINT_RATIO_PRICE'] != $arElement['ITEM_PRICES'][0]['PRINT_RATIO_BASE_PRICE']): ?>
                <span class="catalog-item__price-old"><?= $arElement['ITEM_PRICES'][0]['PRINT_RATIO_BASE_PRICE'] ?></span>
                <span class="catalog-item__price-main"><?= $arElement['ITEM_PRICES'][0]['PRINT_RATIO_PRICE'] ?></span>
            <? else: ?>
                <span class="catalog-item__price-main"><?= $arElement['ITEM_PRICES'][0]['PRINT_RATIO_PRICE'] ?></span>
            <? endif; ?>
        <? endif; ?>

    </div>

    <!-- Buy button -->
    <? if ($arElement["CAN_BUY"]): ?>
        <div class="d-flex justify-content-center mb-2">
            <fieldset class="count-field">
                <div class="count-field__inner">
                    <button aria-controls="product-count-input"
                            aria-label="Уменьшить количество товара на 1"
                            onClick="this.parentElement.children['product-count-input'].stepDown()"
                            class="count-field__button count-field__button_minus"
                            type="button">
                        –
                    </button>
                    <input id="product-count-input"
                           aria-label="Количество товара"
                           autocomplete="off"
                           class="count-field__input js-product-quantity"
                           max="<?php // echo $arResult["PRODUCT"]["QUANTITY"] ?>"
                           min="1"
                           name="product-count-input"
                           step="1"
                           pattern="\d+"
                           type="number"
                           value="1">
                    <button aria-controls="product-count-input"
                            aria-label="Увеличить количество товара на 1"
                            onClick="this.parentElement.children['product-count-input'].stepUp()"
                            class="count-field__button count-field__button_plus"
                            type="button">
                        +
                    </button>
                </div>
            </fieldset>
        </div>
        <button class="catalog-item__add-to-cart button w-100 js-add-to-cart-button"
                id="<? echo $arItemIDs['BUY_LINK']; ?>"
                data-ajax-url="<?= !empty($arElement["ADD_URL"]) ? $arElement["ADD_URL"] : "/catalog/?action=ADD2BASKET&amp;id=" . $arElement["ID"] ?>"
                data-id="<?= $arElement["ID"] ?>"
                data-price="<?= !empty($arElement["PRICES"]) ? $arElement["PRICES"]["Типовые правила продаж"]["VALUE"] : $arElement['PRICE'] ?>"
                type="submit"
                name="<? echo $arParams["ACTION_VARIABLE"] . "ADD2BASKET" ?>"
                aria-label="Добавить в корзину">
            <svg class="me-1" width="16" height="16">
                <use xlink:href="#icon_cart-thin"></use>
            </svg>
            Купить
            <span id="html-spinner"></span>
        </button>
    <? elseif ((count($arResult["PRICES"]) > 0) || is_array($arElement["PRICE_MATRIX"])): ?>
        <button class="catalog-item__add-to-cart button w-100"
                type="button"
                aria-label="<?= GetMessage("CATALOG_NOT_AVAILABLE") ?>">
            <?= GetMessage("CATALOG_NOT_AVAILABLE") ?>
        </button>
    <? endif ?>

</article>
<script type="text/javascript">
    var <? echo $strObName; ?> =
    new JCCatalogSection(<? echo CUtil::PhpToJSObject($arJSParams, false, true); ?>);
    <!--    --><?// echo $strObName; ?>//.Init();
</script>
