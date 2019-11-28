var img = document.querySelector(".gif");
var click = 0;

img.addEventListener("click", function() {
  img.className = "is-click";
  click = click + 1;
  if (click % 2 == 0) {
    img.className = "gif";
  }
});
