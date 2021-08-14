<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
global $APPLICATION; 

	# Стройтовары
	$aMenuLinks = $APPLICATION->IncludeComponent(
		"bitrix:menu.sections",
		"",
		Array(
			"IS_SEF" => "Y", 
			"SEF_BASE_URL" => "/catalog/", 
			"SECTION_PAGE_URL" => "#SECTION_CODE_PATH#/",
			"DETAIL_PAGE_URL" => "#SECTION_CODE_PATH#/#ELEMENT_CODE#",
			"IBLOCK_TYPE" => "catalog1Cv83",
			"IBLOCK_ID" => 113,
			"DEPTH_LEVEL" => "3", 
			"CACHE_TYPE" => "A", 
			"CACHE_TIME" => "3600"
		)
	);
?>