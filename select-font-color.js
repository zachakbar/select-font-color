// Set the placeholder text color for Styled Select
function selectFontColor() {
	$('.styled-select select').change(function() {
		if($(this).val() !== ''){
			$(this).css('color','rgb(51,51,51);'); // Color once an item is selected
		} else {
			$(this).css('color','rgb(153,153,153);'); // Placeholder color
		}
	});
	$('.styled-select select').each(function() {
		if($(this).val()){
			$(this).css('color','rgb(51,51,51);'); // Color once an item is selected
		} else {
			$(this).css('color','rgb(153,153,153);'); // Placeholder color
		}
	});
}

$(document).ready(function(){
	selectFontColor();
});