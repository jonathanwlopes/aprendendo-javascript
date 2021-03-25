import listProduct from "./mocks/index.js";
const $sectionSales = document.querySelector(".sales");

const createStructure = () => {
  const wrapperTitle = document.createElement("div");
  wrapperTitle.classList.add("wrapper-title-sales");
  $sectionSales.appendChild(wrapperTitle);

  const arrivalsTitle = document.createElement('span')
  arrivalsTitle.classList.add('newarrivals-title')
  arrivalsTitle.textContent = 'NEW ARRIVALS'
  wrapperTitle.appendChild(arrivalsTitle)
  
  const arrivalsLine = document.createElement('hr')
  arrivalsLine.classList.add('newarrivals-line')
  wrapperTitle.appendChild(arrivalsLine)

  const wrapperPanelArraivals = document.createElement("div");
  wrapperPanelArraivals.classList.add("wrapper-panel-newarrivals");
  $sectionSales.appendChild(wrapperPanelArraivals);

  printProduct(wrapperPanelArraivals);

  // const insertProduct = document.createElement('div')
  // insertProduct.classList.add('insert-new-product')

};

const createProduct = (product, classSuper) => {
  const wrapperContentArrivals = document.createElement("div");
  wrapperContentArrivals.classList.add("wrapper-content-newarrivals");
  classSuper.appendChild(wrapperContentArrivals);

  const imageArrivals = document.createElement("img");
  imageArrivals.classList.add("img-product");
  imageArrivals.src = product.imageProduct;
  wrapperContentArrivals.appendChild(imageArrivals);

  const btnQuick = document.createElement('button')
  btnQuick.classList.add('btn-quick')
  btnQuick.textContent = "QUICK VIEW"
  wrapperContentArrivals.appendChild(btnQuick)

  const wrapperTitle = document.createElement('div')
  wrapperTitle.classList.add('wrapper-title-newarrivals')
  wrapperContentArrivals.appendChild(wrapperTitle)

  const nameProduct = document.createElement('span')
  nameProduct.classList.add('name-product')
  nameProduct.textContent = product.titleProduct
  wrapperTitle.appendChild(nameProduct)

  const priceProduct = document.createElement('span')
  priceProduct.classList.add('price-product')
  priceProduct.textContent = product.priceProduct
  wrapperTitle.appendChild(priceProduct)

  const wrapperIcon = document.createElement('div')
  wrapperIcon.classList.add('wrapper-icon-newarrivals')
  wrapperContentArrivals.appendChild(wrapperIcon)

  const iconBag = document.createElement('a')
  iconBag.classList.add('fas', 'fa-shopping-cart', 'fa-lg')
  iconBag.href = '#'
  wrapperIcon.appendChild(iconBag)

  const iconFavorite = document.createElement('a')
  iconFavorite.classList.add('fas', 'fa-heart', 'fa-lg')
  iconFavorite.href = '#'
  wrapperIcon.appendChild(iconFavorite)

};

const printProduct = (classSuper) => {
  for (const product of listProduct) {
    createProduct(product, classSuper);
  }
};

createStructure();
