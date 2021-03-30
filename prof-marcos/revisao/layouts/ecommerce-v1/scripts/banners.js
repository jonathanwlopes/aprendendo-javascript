import inserts from "./inserts.js";

const $container = document.querySelector(".container");

const createStructureBanners = () => {
  const sectionBanners = document.createElement("section");
  sectionBanners.classList.add("banners");
  $container.appendChild(sectionBanners);

  const boxBanners = document.createElement("div");
  boxBanners.classList.add("box-banners");
  sectionBanners.appendChild(boxBanners);

  const imgBanner = document.createElement("img");
  imgBanner.classList.add("img-banner");
  inserts.insertImages(imgBanner, "Banner");
  boxBanners.appendChild(imgBanner);
};

export default {createStructureBanners}