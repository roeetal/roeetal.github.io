function changeBackground() {
  var images = ['first', 'second', 'third'],
      i = 1; // Counter to keep track of the class index

  // Cache the element reference
  var $main = $('#banner');
  setInterval(function(){
    var newClass = "major "+images[i++];
    $main.attr('class', newClass); // Set the class attribute value
    i = i % images.length; // If greater than class length, reset back to 0
  }, 4000);
}
window.onload = changeBackground;
