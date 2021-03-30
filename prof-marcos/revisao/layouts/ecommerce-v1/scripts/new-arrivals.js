import createElement from "./mocks/createElement.js";

const $container = document.querySelector(".container");

const createNewArrivals = () => {
  const sectionArrivals = createElement("section", "new-arrivals", $container);
  const boxTitle = createElement(
    "div",
    "box-title-new-arrival",
    sectionArrivals
  );
  const wrapperTitle = createElement(
    "div",
    "wrapper-title-new-arrival",
    boxTitle
  );
  const titleNewArrival = createElement(
    "h3",
    "title-new-arrival",
    wrapperTitle
  );
  titleNewArrival.textContent = "Novos Produtos";
  const subTitleNewArrival = createElement(
    "h4",
    "sub-title-new-arrival",
    wrapperTitle
  );
  subTitleNewArrival.textContent = "chegaram hoje";
  const lineSaparator = createElement("div", "line-separator", boxTitle);
  const wrapperPlusSlider = createElement(
    "div",
    "wrapper-plus-slides",
    boxTitle
  );
  const prev = createElement("a", "prev", wrapperPlusSlider);
  prev.textContent = "<";
  const next = createElement("a", "next", wrapperPlusSlider);
  next.textContent = ">";

  const fristBoxNewArrival = document.createElement("div");
  fristBoxNewArrival.classList.add("box-new-arrival1", "fade");
  sectionArrivals.appendChild(fristBoxNewArrival);

  const boxProduct = document.createElement("div");
  boxProduct.classList.add("box-product");
  fristBoxNewArrival.appendChild(boxProduct);

  const imgProduct = document.createElement("img");
  imgProduct.classList.add("img-product");
  imgProduct.src =
    "http://www.citricolalucato.com.br/imagens/ImgProduto/6e73f21b_51a41a55/igran_valencia.png";
  boxProduct.appendChild(imgProduct);

  const wrapperBoxProduct = document.createElement("div");
  wrapperBoxProduct.classList.add("wrapper-box-products");
  boxProduct.appendChild(wrapperBoxProduct);

  const nameProduct = document.createElement("span");
  nameProduct.classList.add("name-product");
  nameProduct.textContent = "Laranja Folha Murcha 1KG";
  wrapperBoxProduct.appendChild(nameProduct);

  const ratingProduct = document.createElement("span");
  ratingProduct.classList.add("rating-product");
  ratingProduct.textContent = "Nota do Produto: 10";
  wrapperBoxProduct.appendChild(ratingProduct);

  const priceProduct = document.createElement("span");
  priceProduct.classList.add("price-product");
  priceProduct.textContent = "R$ 12,99";
  wrapperBoxProduct.appendChild(priceProduct);
};

export default { createNewArrivals };
