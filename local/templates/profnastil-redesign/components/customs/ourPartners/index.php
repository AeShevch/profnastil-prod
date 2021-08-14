<div class="container">
    <div class="row">
        <div class="col-8 col-md-4 mb-5">
            <div class="brush-stroke">
                <svg class="brush-stroke__left" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use xlink:href="#left-stroke"></use>
                </svg>
                <h2 class="brush-stroke__middle">Наши партнеры</h2>
                <svg class="brush-stroke__right" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use xlink:href="#right-stroke"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="partners__inner row">
        <?
        if (CModule::IncludeModule("iblock")):
            $iblock_id = 115;
            $arSort = Array("RAND"=>"ASC");
            $arSelect = Array("NAME", "PROPERTY_PARTNER_URL","PROPERTY_PARTNER_IMG");
            $arFilter = Array("IBLOCK_ID" => $iblock_id, "ACTIVE"=>"Y");
            $partners =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
            while($ob = $partners->GetNextElement()){
                $arFields = $ob->GetFields();
                $img_path = CFile::GetPath($arFields['PROPERTY_PARTNER_IMG_VALUE']);
                $partner_url=$arFields['PROPERTY_PARTNER_URL_VALUE'];
                ?>
                <div class="col-12 col-md-3 col-md-6 col-lg-2 mb-2">
                    <div class="partners__item">
                        <a class="partners__url" href="<?$partner_url?>" target="_blank">
                            <img src="<?=$img_path?>" alt="">
                        </a>
                    </div>
                </div>
                <?
            }
            ?>
        <?endif;?>
    </div>
</div>