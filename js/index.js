const cart = document.querySelector("#shopping-cart");
const miniCart = document.querySelector("#mini-cart");

addEventListener("click", () => {
  console.log("Carrinho clicado");
  const miniCartDisplay = getComputedStyle(miniCart).display;
  miniCartDisplay == "block"
    ? (miniCart.style.display = "none")
    : (miniCart.style.display = "block");
});
