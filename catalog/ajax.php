<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
if (CModule::IncludeModule("sale") && CModule::IncludeModule("catalog")) {
    if (!empty($_POST['id']) && !empty($_POST['quantity'])) {
        $PRODUCT_ID = intval($_POST['id']);
        $QUANTITY = intval($_POST['quantity']);
        Add2BasketByProductID($PRODUCT_ID, $QUANTITY);

        echo json_encode(["STATUS" => 'Ok']);
    } else {
        echo "Нет параметров";
    }
} else {
    echo "Не подключены модули";
}

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_after.php");