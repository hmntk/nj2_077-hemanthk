let div = document.getElementById("charList");
let eight = document.getElementById("right");

async function getResults() {
  let query = document.getElementById("query").value;
  let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
  let { results } = await res.json();

  console.log(results);

  div.innerHTML = null;
  results.forEach(({ name }, index) => {
    let p = document.createElement("p");
    p.innerHTML = name;
    p.onmouseover = () => {
      p.style.background = "yellow";
    };
    p.onmouseout = () => {
      p.style.background = "white";
    };
    p.onclick = function () {
      // birth_year, eye_color, gender, hair_color, height, mass, name, skin_color
      eight.innerHTML = null;
      eight.innerHTML = `        <h1>${results[index].name}</h1>
      <hr/>
      <p>Mass : ${results[index].mass} lbs</p>
      <p>${results[index].skin_color} skinned</p>
      <p>${results[index].hair_color} hair</p>
      <p>${results[index].height} cms tall</p>
      <p>born on ${results[index].birth_year}</p>`;
    };
    div.append(p);
  });
}
let timer;
function throttleSearch() {
  if (timer) {
    return;
  }
  timer = setTimeout(() => {
    getResults();
    timer = 0;
  }, 2000);
}
