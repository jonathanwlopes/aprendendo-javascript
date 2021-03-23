import listProfile from "./mocks/index.js";

const $panelOurTeam = document.querySelector(".panel-our-team");

const createLayout = (profile) => {
  const wrapperProfile = document.createElement("div");
  wrapperProfile.classList.add("wrapper-profile");
  const imageProfile = document.createElement("img");
  imageProfile.classList.add("image-profile");
  imageProfile.src = profile.image;
  const wrapperInfoProfile = document.createElement('div')
  wrapperInfoProfile.classList.add('wrapper-info-profile')
  const nameProfile = document.createElement('span')
  nameProfile.classList.add('name-profile')
  nameProfile.textContent = profile.nameProfile

  $panelOurTeam.appendChild(wrapperProfile);
  wrapperProfile.appendChild(imageProfile);
  wrapperProfile.appendChild(wrapperInfoProfile)
  wrapperInfoProfile.appendChild(nameProfile)
};

const printLayout = (listProfile) => {
  $panelOurTeam.textContent = "";
  for (const profile of listProfile) {
    createLayout(profile);
  }
};

printLayout(listProfile);
