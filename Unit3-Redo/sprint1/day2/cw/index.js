async function getData() {
  let data = await fetch("https://restcountries.eu/rest/v2/all");
  let response = await data.json();

  console.log(response);

  response.forEach(
    ({
      name,
      capital,
      currencies: [{ name: curr }],
      languages: [{ name: lang }],
    }) => {
      console.log(`${name}, ${capital}, ${curr}, ${lang}`);
    }
  );
}
getData();
