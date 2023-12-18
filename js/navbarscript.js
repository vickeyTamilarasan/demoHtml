function myFunction() {
  console.log(window.innerWidth);
  var x = document.getElementById("unlist");
  if (window.innerWidth <= 420) {
    if (x.style.display == "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.style.height = "fit-content"
    }
  } else {
    x.style.display = "flex";
  }
}