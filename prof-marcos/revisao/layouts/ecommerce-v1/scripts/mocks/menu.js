const listMenuHeader = [
  "Duvidas",
  "Blog",
  "Saiba Mais",
  "Contato",
  "Lista de Compras",
];

const addListMenu = (master) => {
  for (const item of listMenuHeader) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = item.toUpperCase();
    master.appendChild(listItem);
  }
};

export default {addListMenu};
