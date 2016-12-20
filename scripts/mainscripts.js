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
    }
  }
}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

function swap(){
  var x = document.getElementById("orbit");
  x.className += " completed";
}
