$(document).on('click', '.js-iblock-sets-btn-o-data', function(x) {

    let $this = $(this);
    let $form = $(this).closest('form');
    let $statusPropertiesBox = $('.js-properties-status-box');

    $.ajax({
        url: '/local/modules/properties/ajax/properties-update.php',
        type: 'post',
        data: $form.serialize(),
        dataType: 'json',
        beforeSend: function () {
            $this.attr('disabled', true);
	        $statusPropertiesBox.html('Подождите...');
        }
    }).done(function (res) {
	
	    $statusPropertiesBox.removeClass('js-hidden');

    	if('message' in res)
		    $statusPropertiesBox.html(res.message);

        $this.attr('disabled', false);

    });

    x.preventDefault();

});