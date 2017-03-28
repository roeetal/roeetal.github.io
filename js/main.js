

// function changeBackground() {
//   var images = ['first', 'second', 'third'],
//       i = 1; // Counter to keep track of the class index
//
//   // Cache the element reference
//   var $main = $('#intro');
//   setInterval(function(){
//     var newClass = "major "+images[i++];
//     $main.attr('class', newClass); // Set the class attribute value
//     i = i % images.length; // If greater than class length, reset back to 0
//   }, 4000);
// }
// window.onload = changeBackground;


function checkScroll() {
  var videos = document.getElementsByTagName("video"),
  fraction=1;
  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
    video.loop = false;
    video.addEventListener('ended',swap,false);
    var x = document.getElementById("orbit");
    if (x.className === "page init animate") {
      video.play();
    }
  }
}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

function swap(){
  var x = document.getElementById("orbit");
  x.className += " completed";
}
