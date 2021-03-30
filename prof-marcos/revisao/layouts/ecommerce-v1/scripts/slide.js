import createElement from "./mocks/createElement.js";
import inserts from "./inserts.js";

const $container = document.querySelector(".container");

const createStructureSlide = () => {
  const sectionSlide = createElement('section','slide-bar', $container)
  const imgSlide01 = createElement('img','img-slide', sectionSlide )
  inserts.insertImages(imgSlide01, "Slide01");
};

export default {createStructureSlide}