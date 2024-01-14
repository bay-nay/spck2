let productList = [];
function getProduct() {
  fetch("https://6578608bf08799dc80451925.mockapi.io/")
  .then(function (respond) {
    return respond.json();
  })
  .then(function(data){
    productList = data;
    renderProductList()
  })
}
const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function renderProductList() {
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];

    let productiTEM = productTemp.content.cloneNode(true);
    productiTEM.getElementById("product-image").src = product.image;
    productiTEM.getElementById("product-name").textContent = product.title;
    productiTEM.getElementById("product-price").textContent = product.price;
    productListElm.appendChild(productiTEM);
  }
}

getProduct();