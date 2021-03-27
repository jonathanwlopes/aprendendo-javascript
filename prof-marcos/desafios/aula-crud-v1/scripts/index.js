import module from "./mocks/index.js";

const $travelInformation = document.querySelector(".travel-information");
const $formSearch = document.querySelector(".form-search");
const $valueCnh = document.querySelector("#value-cnh");

const createStructure = () => {
  const result = searchDriver($valueCnh.value)

  const boxInformation = document.createElement("div");
  boxInformation.classList.add("box-information");
  $travelInformation.appendChild(boxInformation);

  const wrapperProfile = document.createElement("div");
  wrapperProfile.classList.add("wrapper-profile");
  boxInformation.appendChild(wrapperProfile);

  const imageProfile = document.createElement("img");
  imageProfile.classList.add("photo-profile");
  imageProfile.src = result.image
  wrapperProfile.appendChild(imageProfile)

  const nameProfile = document.createElement('span')
  nameProfile.classList.add('name-profile')
  nameProfile.textContent = result.name
  wrapperProfile.appendChild(nameProfile)

  const wrapperDescription = document.createElement('div')
  wrapperDescription.classList.add('wrapper-description')
  boxInformation.appendChild(wrapperDescription)

  const titleDescription = document.createElement('h3')
  titleDescription.classList.add('title-description')
  titleDescription.textContent = 'Descrição'
  wrapperDescription.appendChild(titleDescription)

  const driverDescription = document.createElement('h4')
  driverDescription.classList.add('text-description')
  driverDescription.textContent = result.description
  wrapperDescription.appendChild(wrapperDescription)

  const lineSeparator = document.createElement('hr')
  lineSeparator.classList.add('dividing-line')
  wrapperDescription.appendChild(lineSeparator) 

  
};


const searchDriver = (param) => {
  param = Number(param)
  const findDriver = module.crud.readByCNH(param)
  return findDriver
}

const insertData = () => {
}

$formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  createStructure()
});
