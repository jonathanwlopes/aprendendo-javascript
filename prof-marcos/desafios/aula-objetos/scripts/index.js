import articleList from "./mocks/index.js";
const $panelArticles = document.querySelector(".panel-articles");

const createArticle = (article) => {
  const panelArticle = document.createElement("div");
  panelArticle.classList.add("panel-article");
  const image = document.createElement("img");
  image.classList.add("img-article");
  image.src = article.image;
  const articleTitle = document.createElement("h3");
  articleTitle.classList.add("article-title");
  articleTitle.textContent = article.title;
  const articleContent = document.createElement('p')
  articleContent.classList.add('article-content')
  articleContent.textContent = article.content


  $panelArticles.appendChild(panelArticle);
  panelArticle.appendChild(image);
  panelArticle.appendChild(articleTitle);
  panelArticle.appendChild(articleContent)
};

for (const article of articleList) {
  createArticle(article);
}
