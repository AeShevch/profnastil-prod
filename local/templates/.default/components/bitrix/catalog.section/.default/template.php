<? /** @var CBitrixComponent $component */ ?>
<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>
<script>
    //window.filterCount = "<?//=declOfNum($arResult['NAV_RESULT']->NavRecordCount, array('товар', 'товара', 'товаров'));?>//";
    //document.addEventListener('DOMContentLoaded', () => {
    //	let countContainer = document.querySelector('.mobile-filter-toggle__products-count');
    //	countContainer.innerHTML = window.filterCount;
    //})
</script>

<script>
    function compare_tov(id) {
        var chek = document.getElementById('compareid_' + id);
        if (!chek.classList.contains('in_compare')) {
            chek.classList.add('in_compare');
            //Добавить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "ADD_TO_COMPARE_LIST", id: AddedGoodId, 'compare_list_reload': 'Y'
                },
                function (data) {
                    $("#compare_list_count").html(data);
                    let count = $('#compare_list_count').find('[data-block="count"]').text();
                    if (count.length > 0)
                        $('.header-link-count-compare').text(count)
                    else
                        $('.header-link-count-compare').text('0');
                }
            );
        } else {
            chek.classList.remove('in_compare');
            //Удалить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "DELETE_FROM_COMPARE_LIST", id: AddedGoodId, 'compare_list_reload': 'Y'
                },
                function (data) {
                    $("#compare_list_count").html(data);
                    let count = $('#compare_list_count').find('[data-block="count"]').text();
                    if (count.length > 0)
                        $('.header-link-count-compare').text(count)
                    else
                        $('.header-link-count-compare').text('0');
                }
            );
        }
    }
</script>

<section role="alert"
         class="compare-alert section section_padding"
         id="compare_list_count"
         aria-label="Товар добавлен в сравнение">
    <? $APPLICATION->IncludeComponent(
        "bitrix:catalog.compare.list",
        "",
        array(
            "IBLOCK_TYPE" => "catalog1Cv83", //Сюда ваш тип инфоблока каталога
            "IBLOCK_ID" => "113", //Сюда ваш ID инфоблока каталога
            "AJAX_MODE" => "N",
            "AJAX_OPTION_JUMP" => "N",
            "AJAX_OPTION_STYLE" => "Y",
            "AJAX_OPTION_HISTORY" => "N",
            "DETAIL_URL" => "#SECTION_CODE#",
            "COMPARE_URL" => "/catalog/compare.php",
            "NAME" => "CATALOG_COMPARE_LIST",
            "AJAX_OPTION_ADDITIONAL" => ""
        ),
        $component
    ); ?>
</section>


<? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

<!-- Section products list  -->
<section class="catalog__list" id="product-listings">
    <div class="section mb-3 pt-3 pb-3 last section_padding">
        <ul class="row list-reset last" aria-labelledby="section-title">
            <? foreach ($arResult["ITEMS"] as $cell => $arElement): ?>
                <?
                $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
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
                <li class="col-6 col-lg-3 p-0" id="<?= $this->GetEditAreaId($arElement['ID']); ?>">
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:catalog.item",
                        ".default",
                        [
                            "IBLOCK_ID" => "113",
                            "ITEM" => $arElement,
                        ],
                        $component
                    ); ?>
                </li>
            <? endforeach; ?>
        </ul>
    </div>
</section>
<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

