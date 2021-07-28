async function getMovieData() {
  let name = document.getElementById("name").value;

  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=2ae0967f`);

    var data = await res.json();
    showMovieData(data);
  } catch (error) {
    console.log("error", error);
  }
  if (data.Response == "False") {
    movieNotFound();
  }
  console.log(data);
}
let container = document.getElementById("container");

showMovieData = (data) => {
  container.innerHTML = "";
  container.style.display = "block";
  let div = document.createElement("div");

  let title = document.createElement("h4");
  title.innerHTML = data.Title;
  title.style.fontSize = "25px";
  let release = document.createElement("p");
  release.innerHTML = `${data.Released}  |  ${data.Language}`;
  let actors = document.createElement("p");
  actors.innerHTML = `Starring ${data.Actors}`;
  let director = document.createElement("p");
  director.innerHTML = ` Directed by ${data.Director}`;
  let poster = document.createElement("img");
  poster.src = data.Poster;
  poster.style.borderRadius = "15px";
  let imdbrating = document.createElement("p");
  imdbrating.innerHTML = ` IMDB : ${data.imdbRating}`;
  let divRight = document.createElement("div");
  divRight.setAttribute("id", "divRight");
  divRight.append(title, release, actors, director, imdbrating);

  div.append(poster, divRight);
  div.setAttribute("id", "flex");
  container.append(div);
}

movieNotFound = () => {
  container.innerHTML = "";
  container.innerHTML =
    "Movie Not Found. Please try another by refreshing the Page!";
}
