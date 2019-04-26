const cart = document.querySelector("#shopping-cart");

cart.addEventListener("click", async () => {
  toggleMiniCart();
  const arrayOfProducts = await fetchProducts();
  clearMiniCart();
  createProductDiv(arrayOfProducts);
  totalPrice()
});

function toggleMiniCart() {
  const miniCart = document.querySelector("#mini-cart");
  const triangle = document.querySelector("#arrow-up");
  const miniCartDisplay = getComputedStyle(miniCart).display;

  if (miniCartDisplay == "block") {
    miniCart.style.display = "none";
    triangle.style.display = "none";
  } else {
    miniCart.style.display = "block";
    triangle.style.display = "block";
  }
}

async function fetchProducts() {
  const request = await fetch("http://localhost:3000/products");
  const json = await request.json();
  return json.cart.item;
}

function clearMiniCart() {
  const arrayOfProductsElements = document.querySelectorAll(".produto");
  const arrayOfHrElements = document.querySelectorAll("hr");
  if (arrayOfProductsElements && arrayOfHrElements) {
    for (const element of arrayOfProductsElements) {
      element.parentNode.removeChild(element);
    }
    for (const element of arrayOfHrElements) {
      element.parentNode.removeChild(element);
    }
  }
}

function createProductDiv(arrayOfProducts) {
  const listaProdutos = document.getElementById("lista-produtos");

  arrayOfProducts.map(obj => {
    // create <div class="produto"></div>
    const divProduct = document.createElement("div");
    divProduct.setAttribute("class", "produto");
    listaProdutos.appendChild(divProduct);

    // create <div class="img"></div>
    const divImg = document.createElement("div");
    divImg.setAttribute("class", "img");
    divProduct.appendChild(divImg);

    // create <img>
    // obs: remove '/' of the begging
    const img = document.createElement("img");
    img.setAttribute("src", `${obj.image.slice(1)}`);
    divImg.appendChild(img);

    // create <div class="produto"></div>
    const divNomeProduto = document.createElement('div');
    divNomeProduto.setAttribute('class','nome-produto');
    divProduct.appendChild(divNomeProduto);

    // create <p></p> and insert product name
    const pNomeProduto = document.createElement('p');
    pNomeProduto.innerHTML = obj.name
    divNomeProduto.appendChild(pNomeProduto);

    // create <div class="quantidade-produto"></div>
    const divQuantidadeProduto = document.createElement('div');
    divQuantidadeProduto.setAttribute('class', 'quantidade-produto');
    divProduct.appendChild(divQuantidadeProduto);

    // create <p></p> and insert product quantity
    const pQuantidadeProduto = document.createElement('p');
    pQuantidadeProduto.innerHTML = `Qtd: ${obj.quantity}`
    divQuantidadeProduto.appendChild(pQuantidadeProduto);

    // create <div class="valor-produto"></div>
    const divValorProduto = document.createElement('div');
    divValorProduto.setAttribute('class','valor-produto');
    divProduct.appendChild(divValorProduto);

    // create <p></p> and insert product price
    const pValorProduto = document.createElement('p');
    pValorProduto.setAttribute('product-price',`${obj.bestPrice}`)
    pValorProduto.innerHTML = obj.bestPriceFormated;
    divValorProduto.appendChild(pValorProduto);

    // create <hr>
    const hr = document.createElement("hr");
    listaProdutos.appendChild(hr);
  });
}

function totalPrice() {
  const arrayOfProductsElements = document.querySelectorAll('[product-price]')
  let total = 0;
  if(arrayOfProductsElements) {
    for (const element of arrayOfProductsElements) {
      const priceString = element.getAttribute('product-price');
      const stringWithDot = priceString.substring(0, priceString.length - 2) + '.' + priceString.substring(priceString.length - 2, priceString.length);
      const stringToNumber = parseFloat(stringWithDot);
      total += stringToNumber;
    }
  }
  const pValorTotal = document.getElementById('valor-total');
  pValorTotal.innerHTML = 'R$ ' + total.toLocaleString('pt-br');
}