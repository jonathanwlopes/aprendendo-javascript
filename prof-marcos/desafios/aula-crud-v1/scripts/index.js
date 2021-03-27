import module from "./mocks/index.js";

const $travelInformation = document.querySelector(".travel-information");
const $formSearch = document.querySelector(".form-search");
const $valueCnh = document.querySelector("#value-cnh");

const createStructure = () => {
  const result = searchDriver($valueCnh.value);

  const boxInformation = document.createElement("div");
  boxInformation.classList.add("box-information");
  $travelInformation.appendChild(boxInformation);

  const wrapperProfile = document.createElement("div");
  wrapperProfile.classList.add("wrapper-profile");
  boxInformation.appendChild(wrapperProfile);

  const imageProfile = document.createElement("img");
  imageProfile.classList.add("photo-profile");
  imageProfile.src = result.image;
  wrapperProfile.appendChild(imageProfile);

  const nameProfile = document.createElement("span");
  nameProfile.classList.add("name-profile");
  nameProfile.textContent = result.name;
  wrapperProfile.appendChild(nameProfile);

  const wrapperDescription = document.createElement("div");
  wrapperDescription.classList.add("wrapper-description");
  boxInformation.appendChild(wrapperDescription);

  const titleDescription = document.createElement("h3");
  titleDescription.classList.add("title-description");
  titleDescription.textContent = "Descrição";
  wrapperDescription.appendChild(titleDescription);

  const driverDescription = document.createElement("h4");
  driverDescription.classList.add("text-description");
  driverDescription.textContent = result.description;
  wrapperDescription.appendChild(driverDescription);

  const lineSeparator = document.createElement("hr");
  lineSeparator.classList.add("dividing-line");
  wrapperDescription.appendChild(lineSeparator);

  const boxRating = document.createElement("div");
  boxRating.classList.add("box-rating");
  boxInformation.appendChild(boxRating);

  const wrapperIcons = document.createElement("div");
  wrapperIcons.classList.add("wrapper-icons");
  boxRating.appendChild(wrapperIcons);

  const ratings = document.createElement("span");
  ratings.classList.add("ratings");
  ratings.innerHTML = `${result.ratings} <i class="fas fa-star"></i>`;
  wrapperIcons.appendChild(ratings);

  const aceptRate = document.createElement("span");
  aceptRate.classList.add("rate-acept");
  aceptRate.innerHTML = `${result.aceptRate}% <i class="fas fa-user-check"></i
  >`;
  wrapperIcons.appendChild(aceptRate);

  const cancelRate = document.createElement("span");
  cancelRate.classList.add("rate-cancel");
  cancelRate.innerHTML = `${result.cancelRate}% <i class="fas fa-slash"></i>`;
  wrapperIcons.appendChild(cancelRate);

  const lineSeparatorTwo = document.createElement("hr");
  lineSeparatorTwo.classList.add("dividing-line");
  boxRating.appendChild(lineSeparatorTwo);

  const boxTrips = document.createElement("div");
  boxTrips.classList.add("box-trips");
  boxInformation.appendChild(boxTrips);

  const totalTrips = document.createElement("span");
  totalTrips.classList.add("total-trips");
  totalTrips.innerHTML = `${result.trips} viagens em ${result.years} anos`;
  boxTrips.appendChild(totalTrips);

  const infoDescription = document.createElement("p");
  infoDescription.classList.add("info-description");
  infoDescription.innerHTML = `Motorista esta <span class="text-active">${result.active(
    "ativo"
  )}</span> na plataforma`;
  boxTrips.appendChild(infoDescription);

  const boxSearch = document.createElement("div");
  boxSearch.classList.add("box-search");
  boxInformation.appendChild(boxSearch);

  const editInformation = document.createElement("button");
  editInformation.classList.add("edit-information");
  editInformation.textContent = "PESQUISAR OUTRO MOTORISTA";
  boxSearch.appendChild(editInformation);
  editInformation.addEventListener("click", function () {
    location = "index.html";
  });
};

const searchDriver = (param) => {
  param = Number(param);
  const findDriver = module.crud.readByCNH(param);
  return findDriver;
};

$formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  $travelInformation.textContent = " ";
  createStructure();
});
