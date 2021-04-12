const createElement = (master, element, clas) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...clas);
  master.appendChild(newElement);
  return newElement;
};

export default createElement;
