function selectFontColor(placeholderColor,selectedColor) {
	$('.styled-select select').change(function() {
		if($(this).val() !== ''){
			$(this).css('color',selectedColor);
		} else {
			$(this).css('color',placeholderColor);
		}
	});
	$('.styled-select select').each(function() {
		if($(this).val()){
			$(this).css('color',selectedColor);
		} else {
			$(this).css('color',placeholderColor);
		}
	});
}

$(document).ready(function(){
	selectFontColor('rgb(153,153,153)','rgb(51,51,51)');
});