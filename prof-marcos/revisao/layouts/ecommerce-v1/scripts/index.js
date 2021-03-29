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

const $container = document.querySelector(".container");

const createStructureHeader = () => {
    const listMenuHeader = [
        "Duvidas",
        "Blog",
        "Saiba Mais",
        "Contato",
        "Lista de Compras",
    ];
    const $header = document.createElement("header");
    $header.classList.add("header");
    $container.appendChild($header);

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

    const wrapperSearch = document.createElement("div");
    wrapperSearch.classList.add("wrapper-header-search");
    $header.appendChild(wrapperSearch);

    const listProduct = document.createElement("div");
    listProduct.classList.add("list-product");
    wrapperSearch.appendChild(listProduct);

    const iconListProduct = document.createElement("i");
    iconListProduct.classList.add("fas-color", "fas", "fa-bars", "fa-lg");
    listProduct.appendChild(iconListProduct);

    const titleListProduct = document.createElement("h3");
    titleListProduct.classList.add("title-product");
    titleListProduct.textContent = "PRODUTOS";
    listProduct.appendChild(titleListProduct);

    const wrapperInputSearch = document.createElement("div");
    wrapperInputSearch.classList.add("wrapper-input-search");
    wrapperSearch.appendChild(wrapperInputSearch);

    const btnCategory = document.createElement("button");
    btnCategory.classList.add("btn-category");
    btnCategory.textContent = "Categorias";
    wrapperInputSearch.appendChild(btnCategory);

    const searchProduct = document.createElement("input");
    searchProduct.classList.add("search-product");
    searchProduct.type = "text";
    searchProduct.placeholder = "Digite o nome do produto";
    wrapperInputSearch.appendChild(searchProduct);

    const btnBuscar = document.createElement("button");
    btnBuscar.classList.add("btn-search");
    btnBuscar.textContent = "BUSCAR";
    wrapperInputSearch.appendChild(btnBuscar);

    const wrapperIcons = document.createElement("div");
    wrapperIcons.classList.add("wrapper-icons");
    wrapperSearch.appendChild(wrapperIcons);

    const linkComparar = document.createElement("a");
    linkComparar.innerHTML = `<img class="img-cart" title="Comparar" src="image/dollar-tag.png" />`;
    wrapperIcons.appendChild(linkComparar);

    const linkFavoritos = document.createElement("a");
    linkFavoritos.innerHTML = `<img class="img-cart" title="Favoritos" src="image/star.png" />`;
    wrapperIcons.appendChild(linkFavoritos);

    const linkCarrinho = document.createElement("a");
    linkCarrinho.innerHTML = `<img class="img-cart" title="Carrinho" src="image/shopping-cart.png" />`;
    wrapperIcons.appendChild(linkCarrinho);
};

const createStructureSlideBar = () => {
    const sectionSlide = document.createElement("section");
    sectionSlide.classList.add("slide-bar");
    $container.appendChild(sectionSlide);

    const imgSlide01 = document.createElement("img");
    imgSlide01.classList.add("img-slide");
    imgSlide01.src =
        "https://blueskytechmage.com/ayo/media/slidebanner/s/l/slider-home9-2.jpg";
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
    imgBenefits.src = "./image/shipped.png";
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

    const fristBoxNewArrival = document.createElement('div')
    fristBoxNewArrival.classList.add('box-new-arrival1', 'fade')
    sectionNewArrivals.appendChild(fristBoxNewArrival)

    const boxProduct = document.createElement('div')
    boxProduct.classList.add('box-product')
    fristBoxNewArrival.appendChild(boxProduct)

    const imgProduct = document.createElement('img')
    imgProduct.classList.add('img-product')
    imgProduct.src = 'http://www.citricolalucato.com.br/imagens/ImgProduto/6e73f21b_51a41a55/igran_valencia.png'
    boxProduct.appendChild(imgProduct)

    const wrapperBoxProduct = document.createElement('div')
    wrapperBoxProduct.classList.add('wrapper-box-products')
    boxProduct.appendChild(wrapperBoxProduct)

    const nameProduct = document.createElement('span')
    nameProduct.classList.add('name-product')
    nameProduct.textContent = 'Laranja Folha Murcha 1KG'
    wrapperBoxProduct.appendChild(nameProduct)

    const ratingProduct = document.createElement('span')
    ratingProduct.classList.add('rating-product')
    ratingProduct.textContent = 'Nota do Produto: 10'
    wrapperBoxProduct.appendChild(ratingProduct)

    const priceProduct = document.createElement('span')
    priceProduct.classList.add('price-product')
    priceProduct.textContent = 'R$ 12,99'
    wrapperBoxProduct.appendChild(priceProduct)

};

const createBanners = () => {
    const sectionBanners = document.createElement('section')
    sectionBanners.classList.add('banners')
    $container.appendChild(sectionBanners)

    const boxBanners = document.createElement('div')
    boxBanners.classList.add('box-banners')
    sectionBanners.appendChild(boxBanners)

    const imgBanner = document.querySelector('img')
    imgBanner.classList.add('img-banner')
    imgBanner.src = "https://blueskytechmage.com/ayo/media/banner9-1.jpg"
    boxBanners.appendChild(imgBanner)

}


createStructureHeader();
createStructureSlideBar();
createStructureBenefits();
createNewArrivals();
createBanners();