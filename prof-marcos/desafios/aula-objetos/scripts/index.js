import articleList from "./mocks/index.js";
const $panelArticles = document.querySelector(".panel-articles");

// Create Articles

const createArticle = (article) => {
  const panelArticle = document.createElement("div");
  panelArticle.classList.add("panel-article");
  const image = document.createElement("img");
  image.classList.add("img-article");
  image.src = article.image;
  const articleTitle = document.createElement("h3");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = article.title;
  const articleContent = document.createElement("p");
  articleContent.classList.add("article-content");
  articleContent.textContent = article.content;

  $panelArticles.appendChild(panelArticle);
  panelArticle.appendChild(image);
  panelArticle.appendChild(articleTitle);
  panelArticle.appendChild(articleContent);
};

const printArticles = (articleList) => {
  $panelArticles.innerHTML = "";
  for (const article of articleList) {
    createArticle(article);
  }
};

printArticles(articleList);


// Add new article
const $addNewArticle = document.querySelector(".add-new-article");
const $formImage = document.querySelector(".form-image");
const $formTitle = document.querySelector(".form-title");
const $formContent = document.querySelector(".form-content");

$addNewArticle.addEventListener("submit", function (event) {
  event.preventDefault();
  const addNewArticle = {
    image: $formImage.value,
    title: $formTitle.value,
    content: $formContent.value,
  };

  articleList.push(addNewArticle);
  printArticles(articleList);
  console.log(articleList);
});

