<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
var_dump(file_get_contents('php://input'));

if (CModule::IncludeModule("sale") && CModule::IncludeModule("catalog")) {
    if (isset($_POST['id']) && isset($_POST['QUANTITY'])) {
        $PRODUCT_ID = intval($_POST['id']);
        $QUANTITY = intval($_POST['QUANTITY']);
        Add2BasketByProductID($PRODUCT_ID, $QUANTITY);

        echo "Ok";
    } else {
        echo "Нет параметров";
    }
} else {
    echo "Не подключены модули";
}

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_after.php");