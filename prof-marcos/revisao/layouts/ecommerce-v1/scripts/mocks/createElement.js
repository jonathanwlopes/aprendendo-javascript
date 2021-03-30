const createElement = (element, clas, master) => {
  const newElement = document.createElement(element);
  if (clas != "") {
    newElement.classList.add(clas);
  }
  master.appendChild(newElement);
  return newElement;
};

export default createElement 