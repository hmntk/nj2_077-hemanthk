let movies_div = document.getElementById("movies");
var timerId;
async function searchMovies() {
  let query = document.getElementById("query").value;

  if (query.length <= 3) {
    return;
  }
  let res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=2ae0967f`);

  let data = await res.json();

  console.log(data);
  return data.Search;
  throttleFunction();
}

async function throttleFunction() {
  if (timerId) {
    return;
  }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 2000);
}
function appendMovies(d) {
  movies_div.innerHTML = null;
  d.forEach(({ Title }) => {
    let p = document.createElement("p");
    p.innerText = Title;
    movies_div.append(p);
  });
}

async function main() {
  let movies = await searchMovies();

  appendMovies(movies);
}
