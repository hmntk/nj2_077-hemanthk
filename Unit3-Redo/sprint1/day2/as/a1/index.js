console.log(1);

// let vID;

async function getSearchResults() {
  let query = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDBWvLB1dxwQQaZRzTkKNcHmvq6YewBoWQ&maxResults=20`
  );

  let { items } = await res.json();
  // console.log(items);
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  // vID = items;

  items.forEach(({ id: { videoId } }) => {
    async function showSearchResults() {
      let vData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?&key=AIzaSyDBWvLB1dxwQQaZRzTkKNcHmvq6YewBoWQ&part=snippet&id=${videoId}`
      );
      let data = await vData.json();
      console.log(data);

      let {
        items: [
          {
            snippet: {
              publishedAt,
              channelTitle,
              defaultLanguage,
              description,
              title,
              thumbnails: {
                default: { url },
              },
            },
          },
        ],
      } = data;

      console.log(channelTitle, description, title, url, publishedAt);
      let div = document.createElement("div");
      div.setAttribute("id", "item");
      div.innerHTML = `
      <div>
        <a href="https://google.com">
          <img
            src="${url}"
            alt="thumbnail"
        /></a>
      </div>
      <div>
        <a href="https://google.com">
          <h2>
            ${title}
          </h2></a
        >
        <div id="stat">
          <h4>${publishedAt}</h4>
          <h4><a href="https://youtube.com/c/">${channelTitle}</a></h4>
        </div>
        <p>
          ${description}
        </p>
      </div>
`;
      document.getElementById("content").append(div);
    }
    showSearchResults();
  });
}

// `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDBWvLB1dxwQQaZRzTkKNcHmvq6YewBoWQ&part=snippet'`

// https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3DM3r2XDceM6A&format=json
