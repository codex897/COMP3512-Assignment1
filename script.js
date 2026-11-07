import config from './data/data-minifed.json' with {type: 'json'};
console.log(config.products.length);

const selectProducts = config.products.slice(0, 20);
const productsContains = document.getElementById("products-container");

for (let product of selectProducts) {
    const article = document.createElement("article");
    article.className = "product-card";

}
const img = document.createElement("img");