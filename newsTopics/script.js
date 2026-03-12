const API_KEY = "3c03537f6eac9fa63797cfb9d916d50f";
const container = document.getElementById("news-container");

async function getNews(topic){

container.innerHTML = "Loading...";

const url =
`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&topic=${topic}&max=10`;

const res = await fetch(url);
const data = await res.json();

displayNews(data.articles);
}

function displayNews(articles){

container.innerHTML="";

articles.forEach(article => {

const card = document.createElement("div");
card.className="card";

card.innerHTML = `
<img src="${article.image}" />
<h3>${article.title}</h3>
<p>${article.description}</p>
<a href="${article.url}" target="_blank">Read More</a>
`;

container.appendChild(card);

});

}

window.onload = () => {
getNews("technology");
}