import createElement from "./mocks/createElement.js";
import listMenuHeader from "./mocks/menu.js";
import inserts from "./inserts.js";

const $container = document.querySelector(".container");

const createStructureHeader = () => {
  const header = createElement("header", "header", $container);
  const boxTopBar = createElement("div", "box-top-bar", header);
  const topBarMsg = createElement("p", "top-bar-msg", boxTopBar);
  inserts.insertTextContent(topBarMsg, "Garantia");

  const wrapperHeader = createElement("div", "wrapper-header-menu", header);
  const headerLogo = createElement("img", "header-logo", wrapperHeader);
  inserts.insertImages(headerLogo, "Logo");

  const navMenu = createElement("nav", "nav-menu", wrapperHeader);
  const listMenu = createElement("ul", "list-menu", navMenu);
  for (const item of listMenuHeader) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = item.toUpperCase();
    listMenu.appendChild(listItem);
  }

  const wrapperSearch = createElement("div", "wrapper-header-search", header);
  const listProduct = createElement("div", "list-product", wrapperSearch);
  const iconListProduct = createElement("i", "fas-color", listProduct);
  iconListProduct.classList.add("fas", "fa-bars", "fa-lg");
  const titleListProduct = createElement("h3", "title-product", listProduct);
  titleListProduct.textContent = "PRODUTOS";
  const wrapperInputSearch = createElement(
    "div",
    "wrapper-input-search",
    wrapperSearch
  );
  const btnCategory = createElement(
    "button",
    "btn-category",
    wrapperInputSearch
  );
  btnCategory.textContent = "Categorias";
  const searchProduct = createElement(
    "input",
    "search-product",
    wrapperInputSearch
  );
  searchProduct.type = "text";
  searchProduct.placeholder = "Digite o nome do produto";
  const btnBuscar = createElement("button", "btn-search", wrapperInputSearch);
  btnBuscar.textContent = "BUSCAR";
  const wrapperIcons = createElement("div", "wrapper-icons", wrapperSearch);
  const linkComparar = createElement("a", "", wrapperIcons);
  const imgComparar = createElement("img", "img-cart", linkComparar);
  inserts.insertImages(imgComparar, "Comparar");
  imgComparar.title = "Comparar";
  const linkFavoritos = createElement("a", "", wrapperIcons);
  const imgFavoritos = createElement("img", "img-cart", linkFavoritos);
  inserts.insertImages(imgFavoritos, "Favoritos");
  imgFavoritos.title = "Favoritos";
  const linkCarrinho = createElement("a", "", wrapperIcons);
  const imgCarrinho = createElement("img", "img-cart", linkCarrinho);
  inserts.insertImages(imgCarrinho, "Carrinho");
  imgCarrinho.title = "Carrinho";
};

export default {
  createStructureHeader,
};
