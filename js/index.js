const cart = document.querySelector("#shopping-cart");
const miniCart = document.querySelector("#mini-cart");
const triangle = document.querySelector("#arrow-up")

cart.addEventListener("click", () => {
  const miniCartDisplay = getComputedStyle(miniCart).display;
  if (miniCartDisplay == "block") {
    miniCart.style.display = "none";
    triangle.style.display = "none";
  } else {
    miniCart.style.display = "block";
    triangle.style.display = "block";
  }
});
