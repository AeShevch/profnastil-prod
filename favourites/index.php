<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetTitle("Избранные товары");
?>
    <div class="container">
        <section class="section section_padding mb-4" aria-label="Избранные товары">
            <ul class="row list-reset">
                <? if (\Bitrix\Main\Loader::includeModule("sale")) {
                    $dbBasketItems = CSaleBasket::GetList(
                        array(
                            "NAME" => "ASC",
                            "ID" => "ASC"
                        ),
                        array(
                            "FUSER_ID" => CSaleBasket::GetBasketUserID(),
                            "LID" => SITE_ID,
                            "ORDER_ID" => "NULL",
                            "DELAY" => "Y"
                        ),
                        false,
                        false
                    );
                    while ($arItem = $dbBasketItems->Fetch()):
                        ?>
                        <li class="col-6 col-lg-3 p-0">
                            <?
                            $rsElem = CIBlockElement::GetById($arItem["PRODUCT_ID"]);
                            $arElem = $rsElem->GetNextElement();

                            $APPLICATION->IncludeComponent(
                                "bitrix:catalog.item",
                                "",
                                [
                                    "IBLOCK_ID" => "113",
                                    "ITEM" => array_merge(
                                        $arItem,
                                        $arElem->GetFields(),
                                        [
                                            "PROPERTIES" => $arElem->GetProperties()
                                        ]
                                    )
                                ]
                            );
                            ?>
                        </li>
                    <? endwhile;
                }
                ?>
            </ul>
        </section>
    </div>

<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php');