let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
  if (body.style.background === "white") {
    body.style.background = "purple";
  } else {
    body.style.background = "white";
  }
});
