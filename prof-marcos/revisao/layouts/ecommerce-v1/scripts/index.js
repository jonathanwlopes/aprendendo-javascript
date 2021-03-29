// const $prev = document.querySelector(".prev");
// const $next = document.querySelector(".next");
// const $box1 = document.querySelector(".box-new-arrival1");
// const $box2 = document.querySelector(".box-new-arrival2");

// $prev.addEventListener("click", () => {
//     activeDisplay();
// });

// $next.addEventListener("click", () => {
//     activeDisplay();
// });

// const activeDisplay = () => {
//     const active = $box2.classList.contains("inactive");
//     if (active === true) {
//         $box1.classList.add("inactive");
//         $box2.classList.remove("inactive");
//     } else {
//         $box1.classList.remove("inactive");
//         $box2.classList.add("inactive");
//     }
// };

const $header = document.querySelector(".header");
const listMenuHeader = [
    "Duvidas",
    "Blog",
    "Saiba Mais",
    "Contato",
    "Lista de Compras",
];

const createStructureHeader = () => {
    const boxTopBar = document.createElement("div");
    boxTopBar.classList.add("box-top-bar");
    $header.appendChild(boxTopBar);

    const topBarMsg = document.createElement("p");
    topBarMsg.classList.add("top-bar-msg");
    topBarMsg.textContent =
        "Obtenha frete grátis - Garantia de entrega em até 02 horas após confirmação de pagamento.";
    boxTopBar.appendChild(topBarMsg);

    const wrapperHeader = document.createElement("div");
    wrapperHeader.classList.add("wrapper-header-menu");
    $header.appendChild(wrapperHeader);

    const headerLogo = document.createElement("img");
    headerLogo.classList.add("header-logo");
    headerLogo.src =
        "https://blueskytechmage.com/ayo/media/logo/stores/32/logo-organix.png";
    wrapperHeader.appendChild(headerLogo);

    const navMenu = document.createElement("nav");
    navMenu.classList.add("nav-menu");
    wrapperHeader.appendChild(navMenu);

    const listMenu = document.createElement("ul");
    listMenu.classList.add("list-menu");
    navMenu.appendChild(listMenu);

    for (const item of listMenuHeader) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        listItem.textContent = item.toUpperCase();
        listMenu.appendChild(listItem);
    }

    const wrapperSearch = document.createElement('div')
    wrapperSearch.classList.add('wrapper-header-search')
    $header.appendChild(wrapperSearch)

    const listProduct = document.createElement('div')
    listProduct.classList.add('list-product')
    wrapperSearch.appendChild(listProduct)

    const iconListProduct = document.createElement('i')
    iconListProduct.classList.add('fas-color', 'fas', 'fa-bars', 'fa-lg')
    listProduct.appendChild(iconListProduct)

    const titleListProduct = document.createElement('h3')
    titleListProduct.classList.add('title-product')
    titleListProduct.textContent = 'PRODUTOS'
    listProduct.appendChild(titleListProduct)

    const wrapperInputSearch = document.createElement('div')
    wrapperInputSearch.classList.add('wrapper-input-search')
    wrapperSearch.appendChild(wrapperInputSearch)

    const btnCategory = document.createElement('button')
    btnCategory.classList.add('btn-category')
    btnCategory.textContent = 'Categorias'
    wrapperInputSearch.appendChild(btnCategory)

    const searchProduct = document.createElement('input')
    searchProduct.classList.add('search-product')
    searchProduct.type = 'text'
    searchProduct.placeholder = 'Digite o nome do produto'
    wrapperInputSearch.appendChild(searchProduct)

    const btnBuscar = document.createElement('button')
    btnBuscar.classList.add('btn-search')
    btnBuscar.textContent = 'BUSCAR'
    wrapperInputSearch.appendChild(btnBuscar)

    const wrapperIcons = document.createElement('div')
    wrapperIcons.classList.add('wrapper-icons')
    wrapperSearch.appendChild(wrapperIcons)

    const linkComparar = document.createElement('a')
    linkComparar.innerHTML = `<img class="img-cart" title="Comparar" src="image/dollar-tag.png" />`
    wrapperIcons.appendChild(linkComparar)

    const linkFavoritos = document.createElement('a')
    linkFavoritos.innerHTML = `<img class="img-cart" title="Favoritos" src="image/star.png" />`
    wrapperIcons.appendChild(linkFavoritos)

    const linkCarrinho = document.createElement('a')
    linkCarrinho.innerHTML = `<img class="img-cart" title="Carrinho" src="image/shopping-cart.png" />`
    wrapperIcons.appendChild(linkCarrinho)

};

createStructureHeader();