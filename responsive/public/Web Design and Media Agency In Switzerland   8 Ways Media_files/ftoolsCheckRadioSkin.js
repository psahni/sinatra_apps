/* ftoolsCheckRadioSkin - JS by Péter Polgár (Force) - http://www.gbart.hu/ftools/ - 2013 */
function ftoolsCheckRadioSkin() {
	if( $('[type="checkbox"].ftoolsCheckRadioSkin').length != 0 ) {
		$('[type="checkbox"].ftoolsCheckRadioSkin').each(function() {
			var itemID = $(this).attr('id');
			var itemClass = $(this).attr('class');
			$(this).wrap('<label for="'+itemID+'" class="ftoolsCheckboxSkin '+itemClass+'"></label>').css('margin-left', -10000);
			ftoolsCheckboxSwitch(itemID);
			$(this).change(function() {
				ftoolsCheckboxSwitch(itemID); 
			}); 
		}); 
	}
	if( $('[type="radio"].ftoolsCheckRadioSkin').length != 0 ) {
		$('[type="radio"].ftoolsCheckRadioSkin').each(function() {
			var itemID = $(this).attr('id');
			var itemClass = $(this).attr('class');
			$(this).wrap('<label for="'+itemID+'" class="ftoolsRadiobuttonSkin '+itemClass+'"></label>').css('margin-left', -10000);
			ftoolsRadiobuttonSwitch(itemID);
			$(this).change(function() {
				ftoolsRadiobuttonSwitch(itemID); 
			});
		}); 
	} 
};

function ftoolsCheckboxSwitch(itemID) {
	var activeClass = 'ftoolsCheckboxSkin_active';
	var itemObject = $('#'+itemID);
	
	if( itemObject.attr('checked') == 'checked' ) {
		itemObject.parent().addClass(activeClass);
	}else{
		itemObject.parent().removeClass(activeClass); 
	} 
}

function ftoolsRadiobuttonSwitch(itemID) {
	var activeClass = 'ftoolsRadiobuttonSkin_active';
	var itemObject = $('#'+itemID);
	
	if( itemObject.attr('checked') == 'checked' ) {
		$('[name="'+itemObject.attr('name')+'"]').parent().removeClass(activeClass);
		itemObject.parent().addClass(activeClass); 
	} 
}

$(document).ready(function() { ftoolsCheckRadioSkin(); });