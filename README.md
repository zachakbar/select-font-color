# select-font-color
Function to change the placeholder text color of the styled select box once an option is chosen. Script is tailored to <code>.styled-select</code> class from the <a href="https://github.com/zachakbar/boilerplate" target="_blank">boilerplate</a>.

<pre>
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
</pre>
