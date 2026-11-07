import config from './data/data-minifed.json' with {type: 'json'};
console.log(config.products.length);

const selectProducts = config.products.slice(0, 20);
const productsContains = document.getElementById("products-container");

for (let product of selectProducts) {
    const article = document.createElement("article");
    article.className = "product-card";

    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;
    article.appendChild(img);

    img.addEventListener("click", function () {
        alert(product.id)
    })


    const title = document.createElement("h3");
    title.textContent = product.title;
    article.appendChild(title);

    const price = document.createElement("p");
    price.textContent = product.price;
    article.appendChild(price)

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => {
        alert("  Product ID: " + product.id + " \n Product: " + product.title);
    });
    article.appendChild(btn);

    productsContains.appendChild(article);



}

