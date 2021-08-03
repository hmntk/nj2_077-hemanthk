import Navbar from "./navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

document.getElementById("recipe").innerHTML = "";
async function Search() {
  document.getElementById("resultBox").innerHTML = "";
  document.getElementById("recipe").innerHTML = "";
  let query = document.getElementById("query").value;
  console.log(query);
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  //   let res = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  //   );
  let { meals } = await res.json();
  console.log(meals);
  document.getElementById("resultBox").style.display = "block";
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
      let p = document.createElement("p");
      p.innerHTML = strMeal;
      p.onclick = () => {
        document.getElementById("resultBox").style.display = "none";
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
      };
      document.getElementById("resultBox").append(p);
    }
  );
}

let timer;
document.getElementById("query").oninput = () => {
  if (timer) {
    return;
  }
  timer = setTimeout(() => {
    Search();
    timer = 0;
  }, 2000);
};
