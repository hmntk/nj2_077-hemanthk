async function findVideos() {
  let vDiv = document.getElementById("videos");
  vDiv.innerHTML = null;
  let query = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDBWvLB1dxwQQaZRzTkKNcHmvq6YewBoWQ`
  );

  let data = await res.json();
  console.log(data);

  let vData = data.items;
  vData = vData.filter((el) => {
    return vData.id.videoId != undefined;
  });

  vData.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    vDiv.append(div);
  });
}
