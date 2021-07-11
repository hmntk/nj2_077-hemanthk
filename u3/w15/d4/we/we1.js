async function getData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    var data = await response.json();

    appendProducts(data);
  } catch (error) {
    console.log("error: ", error);
  }

  //   console.log(data);
}

getData();
let container = document.getElementById("container");
function appendProducts(data) {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = data[i].image;

    let title = document.createElement("h2");
    title.innerText = data[i].title;

    let price = document.createElement("h4");
    price.innerText = data[i].price;

    let description = document.createElement("p");
    description.innerHTML = data[i].description;

    div.append(img, title, price, description);

    container.append(div);
  }
}
