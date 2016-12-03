function toggleNav() {
  var x = document.getElementById("navbar");
  if (x.className === "main-navbar") {
    x.className += "-responsive";
  } else {
      x.className = "main-navbar";
  }
}
