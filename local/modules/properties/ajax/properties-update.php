<?php
	
	use Bitrix\Main\Context;
	use Bitrix\Main\Loader;
	use Bitrix\Main\LoaderException;
	
	define('LOG_FILENAME', $_SERVER['DOCUMENT_ROOT'] . '/log.txt');
	
	require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
	
	$message = '';
	$arResult = [];
	$arPropertyVariants = [];
	$arPropertyRatio = [];
	
	$arRequest = Context::getCurrent()->getRequest()->toArray();
	
	if ($arRequest['action'] != 'y')
		die();
	
	try {
		
		Loader::includeModule('iblock');
		Loader::includeModule('highloadblock');
		Loader::includeModule('properties');
		
		$arPropertiesRatio = \Properties\Main::getPropertiesRatio();
		
		foreach ($arPropertiesRatio as $arRatio) {
			
			$obProps = CIBlockProperty::GetList([],
				[
					'IBLOCK_ID' => \Properties\Main::CATALOG_IBLOCK_ID,
					'CODE' => $arRatio['UF_TO']
				]
			);
			if ($result = $obProps->GetNext()) {
				$propertyId = $result['ID'];
			} else {
				
				$arFields = [
					'NAME' => $arRatio['UF_TO_NAME'],
					'ACTIVE' => 'Y',
					'SORT' => 500,
					'CODE' => $arRatio['UF_TO'],
					'PROPERTY_TYPE' => 'L',
					'MULTIPLE' => 'Y',
					'IBLOCK_ID' => \Properties\Main::CATALOG_IBLOCK_ID,
					'FEATURES' => [
						[
							'IS_ENABLED' => 'Y',
							'MODULE_ID' => 'iblock',
							'FEATURE_ID' => 'DETAIL_PAGE_SHOW'
						]
					
					]
				];
				
				$obProperty = new CIBlockProperty;
				$propertyId = $obProperty->Add($arFields);
				
			}
			
			if (!isset($propertyId)) {
				echo json_encode([
					'status' => 'error',
					'message' => 'Ошибка',
				]);
				die();
			}
			
			$arSelect = ['ID'];
			
			$arFilter = [
				'IBLOCK_ID' => \Properties\Main::CATALOG_IBLOCK_ID,
				'ACTIVE_DATE' => 'Y',
				'ACTIVE' => 'Y'
			];
			
			foreach ($arRatio['UF_FROM'] as $k => $propCode) {
				
				$arSelect[] = 'PROPERTY_' . $propCode;
				
				if ($k == 0)
					$arFilterItems['LOGIC'] = 'OR';
				
				$arFilterItems[]['!PROPERTY_' . $propCode . '_VALUE'] = false;
				
			}
			
			if (!isset($arFilterItems)) {
				echo json_encode([
					'status' => 'error',
					'message' => 'Ошибка: Нет элементов, у которых заполнено хотя бы одно свойство',
				]);
				die();
			}
			
			$arFilter[] =
				[
					[
						$arFilterItems
					],
				];
			
			$res = CIBlockElement::GetList(
				[],
				$arFilter,
				false,
				[
					'nPageSize' => 1000000
				], $arSelect);
			
			while ($ob = $res->GetNextElement()) {
				
				$arFields = $ob->GetFields();
				
				foreach ($arRatio['UF_FROM'] as $k => $propCode) {
					
					$propValue = $arFields['PROPERTY_' . $propCode . '_VALUE'];
					
					if (strlen($arFields['PROPERTY_' . $propCode . '_VALUE']) > 0) {
						
						if (!in_array($propValue, $arPropertyVariants))
							$arPropertyVariants[] = $propValue;
						
						$arProperty[] = $arFields['PROPERTY_' . $propCode . '_VALUE'];
					}
					
				}
				
				if (isset($arProperty))
					$arResult['PROPERTY_VALUES'][] = [
						'ELEMENT_ID' => $arFields['ID'],
						'VALUES' => $arProperty,
					];
				
				unset($arProperty);
				
			}
			
			foreach ($arPropertyVariants as $arPropertyVariant) {
				
				$property_enums = CIBlockPropertyEnum::GetList(
					[],
					[
						"IBLOCK_ID" => \Properties\Main::CATALOG_IBLOCK_ID,
						"PROPERTY_ID" => $propertyId,
						"VALUE" => $arPropertyVariant
					]
				);
				if ($enum_fields = $property_enums->GetNext()) {
					$arPropertyRatio[$arPropertyVariant] = $enum_fields['ID'];
				} else {
					
					$obPropertyEnumValue = new CIBlockPropertyEnum;
					
					if (
					$PropID = $obPropertyEnumValue->Add(
						[
							'PROPERTY_ID' => $propertyId,
							'VALUE' => $arPropertyVariant
						]
					)
					) {
						$arPropertyRatio[$arPropertyVariant] = $PropID;
					}
					
				}
				
			}
			
			$arResult['PROPERTY'] = [
				'NAME' => $arRatio['UF_TO_NAME'],
				'CODE' => $arRatio['UF_TO'],
				'ID' => $propertyId,
				'VARIANTS_STRING' => $arPropertyVariants,
				'PROPERTY_VALUES_RATIO' => $arPropertyRatio,
			];
			
			foreach($arResult['PROPERTY_VALUES'] as $k => $arPropertyValue) {
				
				foreach($arPropertyValue['VALUES'] as $value) {
					
					$arResult['PROPERTY_VALUES'][$k]['RATIO'][] = $arPropertyRatio[$value];
					
				}
				
			}
			
			foreach ($arResult['PROPERTY_VALUES'] as $arPropertyValue) {
				
				CIBlockElement::SetPropertyValuesEx(
					$arPropertyValue['ELEMENT_ID'],
					false,
					[
						$arResult['PROPERTY']['CODE'] => $arPropertyValue['RATIO']
					]
				);
				
				$message .= 'Обновили элемент ID = ' . $arPropertyValue['ELEMENT_ID'] . '<br/>';
				
			}
			
		}
		
		echo json_encode([
			'status' => 'ok',
			'message' => 'Готово<br/>' . $message,
		]);
		
	} catch (LoaderException $e) {
	}