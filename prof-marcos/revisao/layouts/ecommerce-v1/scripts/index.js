import header from './header.js'
import inserts from './inserts.js'

const $container = document.querySelector(".container");

const createStructureSlideBar = () => {
  const sectionSlide = document.createElement("section");
  sectionSlide.classList.add("slide-bar");
  $container.appendChild(sectionSlide);

  const imgSlide01 = document.createElement("img");
  imgSlide01.classList.add("img-slide");
  inserts.insertImages(imgSlide01,'Slide01')
  sectionSlide.appendChild(imgSlide01);
};

const createStructureBenefits = () => {
  const sectionBenefits = document.createElement("section");
  sectionBenefits.classList.add("benefits");
  $container.appendChild(sectionBenefits);

  const boxBenefits = document.createElement("div");
  boxBenefits.classList.add("box-benefits");
  sectionBenefits.appendChild(boxBenefits);

  const wrapperBoxBenefits = document.createElement("div");
  wrapperBoxBenefits.classList.add("wrapper-box-benefits");
  boxBenefits.appendChild(wrapperBoxBenefits);

  const imgBenefits = document.createElement("img");
  imgBenefits.classList.add("img-benefits");
  inserts.insertImages(imgBenefits,'Shipped')
  wrapperBoxBenefits.appendChild(imgBenefits);

  const wrapperInfoBenefits = document.createElement("div");
  wrapperInfoBenefits.classList.add("wrapper-info-benefits");
  wrapperBoxBenefits.appendChild(wrapperInfoBenefits);

  const titleBenefits = document.createElement("h3");
  titleBenefits.classList.add("title-benefits");
  titleBenefits.textContent = "Pagamento Seguro";
  wrapperInfoBenefits.appendChild(titleBenefits);

  const subTitleBenefits = document.createElement("h4");
  subTitleBenefits.classList.add("sub-title-benefits");
  subTitleBenefits.textContent = "100% criptografado";
  wrapperInfoBenefits.appendChild(subTitleBenefits);
};

const createNewArrivals = () => {
  const sectionNewArrivals = document.createElement("section");
  sectionNewArrivals.classList.add("new-arrivals");
  $container.appendChild(sectionNewArrivals);

  const boxTitle = document.createElement("div");
  boxTitle.classList.add("box-title-new-arrival");
  sectionNewArrivals.appendChild(boxTitle);

  const wrapperTitle = document.createElement("div");
  wrapperTitle.classList.add("wrapper-title-new-arrival");
  boxTitle.appendChild(wrapperTitle);

  const titleNewArrival = document.createElement("h3");
  titleNewArrival.classList.add("title-new-arrival");
  titleNewArrival.textContent = "Novos Produtos";
  wrapperTitle.appendChild(titleNewArrival);

  const subTitleNewArrival = document.createElement("h4");
  subTitleNewArrival.classList.add("sub-title-new-arrival");
  subTitleNewArrival.textContent = "chegaram hoje";
  wrapperTitle.appendChild(subTitleNewArrival);

  const lineSaparator = document.createElement("div");
  lineSaparator.classList.add("line-separator");
  boxTitle.appendChild(lineSaparator);

  const wrapperPlusSlider = document.createElement("div");
  wrapperPlusSlider.classList.add("wrapper-plus-slides");
  boxTitle.appendChild(wrapperPlusSlider);

  const prev = document.createElement("a");
  prev.classList.add("prev");
  prev.textContent = "<";
  wrapperPlusSlider.appendChild(prev);

  const next = document.createElement("a");
  next.classList.add("next");
  next.textContent = ">";
  wrapperPlusSlider.appendChild(next);

  const fristBoxNewArrival = document.createElement("div");
  fristBoxNewArrival.classList.add("box-new-arrival1", "fade");
  sectionNewArrivals.appendChild(fristBoxNewArrival);

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

const createBanners = () => {
  const sectionBanners = document.createElement("section");
  sectionBanners.classList.add("banners");
  $container.appendChild(sectionBanners);

  const boxBanners = document.createElement("div");
  boxBanners.classList.add("box-banners");
  sectionBanners.appendChild(boxBanners);

  const imgBanner = document.createElement("img");
  imgBanner.classList.add("img-banner");
  inserts.insertImages(imgBanner,'Banner')
  boxBanners.appendChild(imgBanner);
};

header.createStructureHeader();
createStructureSlideBar();
createStructureBenefits();
createNewArrivals();
createBanners();
