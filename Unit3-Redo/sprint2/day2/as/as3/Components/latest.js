import Navbar from "./navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

async function Random() {
  console.log(1);
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  //   let res = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  //   );
  let { categories } = await res.json();

  categories.forEach(
    ({ idCategory, strCategoryThumb, strCategoryDescription }) => {
      console.log(idCategory, strCategoryThumb, strCategoryDescription);

      let div = document.createElement("div");
      div.setAttribute("id", "item");
      div.innerHTML = `
      <div id="left">
        <span>${idCategory}</span>
        <p>${strCategoryDescription}
        </p>
      </div>
      <div id="right">
        <img
          src="${strCategoryThumb}"
          alt=""
        />
      </div>
    `;
      document.getElementById("recipe").append(div);
    }
  );
  /*document.getElementById("generate").innerHTML =
    "Click here again to generate another Recipe";
  document.getElementById("recipe").style.display = "none";
  meals.forEach(
    ({
      strMeal,
      strInstructions,
      strMealThumb,
      strIngredient1,
      strMeasure1,
      strIngredient2,
      strMeasure2,
      strIngredient3,
      strMeasure3,
      strIngredient4,
      strMeasure4,
      strIngredient5,
      strMeasure5,
    }) => {
      console.log(strMeal);
      document.getElementById("recipe").style.display = "block";

      let div = document.createElement("div");
      div.setAttribute("id", "item");
      div.innerHTML = `<div id="left">
      <div id="title">
        <h1>${strMeal}</h1>
        <div id="ingredients">
          <h3>Items Required</h3>
          <ul>
            <li>${strIngredient1} - ${strMeasure1}</li>
            <li>${strIngredient2} - ${strMeasure2}</li>
            <li>${strIngredient3} - ${strMeasure3}</li>
            <li>${strIngredient4} - ${strMeasure4}</li>
            <li>${strIngredient5} - ${strMeasure5}</li>
          </ul>
        </div>
      </div>
      <p>${strInstructions}
      </p>
    </div>
    <div id="right">
      <img
        src="${strMealThumb}"
        alt=""
      />
    </div>`;
      document.getElementById("recipe").append(div);
    }
  );*/
}
Random();
