<?php
	
	/** @global CUser $USER */
	/** @global CMain $APPLICATION */
	
	/** @global string $mid */
	
	use \Bitrix\Main\Loader as Loader;
	use \Bitrix\Main\LoaderException as LoaderException;
	use Bitrix\Main\Page\Asset;
	
	if (!$USER->IsAdmin())
		return false;
	
	global $APPLICATION;
	
	Asset::getInstance()->addJs('/local/modules/properties/js/jquery-3.5.1.min.js');
	Asset::getInstance()->addJs('/local/modules/properties/js/script.js');
	
	if (
	!($USER->CanDoOperation('fileman_edit_existent_folders')
		|| $USER->CanDoOperation('fileman_admin_folders'))
	)
		$APPLICATION->AuthForm(GetMessage("ACCESS_DENIED"));
	
	try {
		
		Loader::includeModule("fileman");
		Loader::includeModule("iblock");
		
	} catch (LoaderException $e) {
	}
	
	IncludeModuleLangFile(__FILE__);
	
	$params = [
		'module-id' => "properties"
	];
?>

<?php
	
	$tabControl = new CAdminTabControl(
		'tabControl',
		[
			[
				'DIV' => 'mainConfig',
				'TAB' => "Обновление значений свойств",
				'TITLE' => "Обновление значений свойств"
			]
		]
	);
	
	$tabControl->Begin();
?>

<form method="post"
      action="<? echo $APPLICATION->GetCurPage() ?>?mid=<?= urlencode($mid) ?>&amp;lang=<? echo LANGUAGE_ID ?>"
      enctype="multipart/form-data"
>
	
	<?= bitrix_sessid_post(); ?>
	
	<?php $tabControl->BeginNextTab(); ?>
	<tr>
		<td>
			
			<p>
				Будут созданы или обновлены свойства основного каталога.<br/>
				<a href="/bitrix/admin/highloadblock_rows_list.php?ENTITY_ID=4&lang=ru"
				>Интерфейс сопоставления свойств</a>
			</p>
			
			<input type="submit"
			       name="iblock-items-update"
			       value="Обновить"
			       title=""
			       class="adm-btn-save js-iblock-sets-btn-o-data"
			>
			
		</td>
	</tr>
	<tr>
		<td>
			<div class="js-properties-status-box js-hidden"></div>
		</td>
	</tr>
	<?php $tabControl->EndTab(); ?>
	
	<?php $tabControl->Buttons(); ?>
	
	<? $tabControl->End(); ?>
	
	<input type="hidden" name="action" value="y" />
	
</form>

<style>
	
	.js-properties-status-box {
		font-size: 13px;
		display: block;
		font-family: monospace;
		white-space: pre;
		margin: 1em 0;
	}
	
	.text-error {
		color: #ff0000;
	}
	
	.js-hidden {
		display: none;
	}

</style>