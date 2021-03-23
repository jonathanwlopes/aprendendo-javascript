import listProfile from "./mocks/index.js";

const $panelOurTeam = document.querySelector(".panel-our-team");

const createLayout = (profile) => {
  const wrapperProfile = document.createElement("div");
  wrapperProfile.classList.add("wrapper-profile");

  const imageProfile = document.createElement("img");
  imageProfile.classList.add("image-profile");
  imageProfile.src = profile.image;

  const wrapperInfoProfile = document.createElement("div");
  wrapperInfoProfile.classList.add("wrapper-info-profile");

  const nameProfile = document.createElement("span");
  nameProfile.classList.add("name-profile");
  nameProfile.textContent = profile.nameProfile;

  const carrerProfile = document.createElement("div");
  carrerProfile.classList.add("carrer-profile");
  carrerProfile.textContent = profile.carrerProfile;

  const wrapperIcons = document.createElement("div");
  wrapperIcons.classList.add("wrapper-icons");

  const linkFacebook = document.createElement("a");
  linkFacebook.href = profile.facebook;
  linkFacebook.target = "_blank";
  linkFacebook.classList.add("fab", "fa-facebook", "fa-lg", "_blank");

  const linkTwitter = document.createElement("a");
  linkTwitter.href = profile.twitter;
  linkTwitter.target = "_blank";
  linkTwitter.classList.add("fab", "fa-twitter", "fa-lg", "_blank");

  const linkInstagram = document.createElement("a");
  linkInstagram.href = profile.instagram;
  linkInstagram.target = "_blank";
  linkInstagram.classList.add("fab", "fa-instagram", "fa-lg", "_blank");

  const linkGit = document.createElement("a");
  linkGit.href = profile.github;
  linkGit.target = "_blank";
  linkGit.classList.add("fab", "fa-github", "fa-lg", "_blank");

  $panelOurTeam.appendChild(wrapperProfile);
  wrapperProfile.appendChild(imageProfile);
  wrapperProfile.appendChild(wrapperInfoProfile);
  wrapperInfoProfile.appendChild(nameProfile);
  wrapperInfoProfile.appendChild(carrerProfile);
  wrapperProfile.appendChild(wrapperIcons);
  wrapperIcons.appendChild(linkFacebook);
  wrapperIcons.appendChild(linkTwitter);
  wrapperIcons.appendChild(linkInstagram);
  wrapperIcons.appendChild(linkGit);
};

const printLayout = (listProfile) => {
  $panelOurTeam.textContent = "";
  for (const profile of listProfile) {
    createLayout(profile);
  }
};

printLayout(listProfile);
