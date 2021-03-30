import inserts from "./inserts.js";

const $container = document.querySelector(".container");

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
  inserts.insertImages(imgBenefits, "Shipped");
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

export default {createStructureBenefits}