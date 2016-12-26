function toggleNav() {
  var x = document.getElementById("navbar");
  if (x.className === "main-navbar") {
    x.className += "-responsive";
  } else {
      x.className = "main-navbar";
  }
}

function checkScroll() {
  var videos = document.getElementsByTagName("video"),
  fraction=1;
  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
    video.loop = false;
    video.addEventListener('ended',swap,false);
    var x = document.getElementById("orbit");
    if (x.className === "orbit init animate") {
      video.play();
      video.playbackRate = 1.5;
    }
  }
}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

function swap(){
  var x = document.getElementById("orbit");
  x.className += " completed";
}

function changeBackground() {
  var images = ['first', 'second', 'third'],
      i = 1; // Counter to keep track of the class index

  // Cache the element reference
  var $main = $('#about');
  setInterval(function(){
    var newClass = "about "+images[i++];
    $main.attr('class', newClass); // Set the class attribute value
    i = i % images.length; // If greater than class length, reset back to 0
  }, 2500);
}
window.onload = changeBackground;
