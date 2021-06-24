async function getMovieData() {
  let name = document.getElementById("name").value;

  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=2ae0967f`);

    var data = await res.json();
  } catch (error) {
    console.log("error", error);
  }
  console.log(data);
}
