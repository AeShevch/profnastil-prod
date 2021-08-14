<?php
	
	use Bitrix\Main\Loader;
	use Bitrix\Main\LoaderException;

	require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
	
	try {
		
		Loader::includeModule('properties');
		
		\Properties\Main::action();
		
	} catch (LoaderException $e) {
	}