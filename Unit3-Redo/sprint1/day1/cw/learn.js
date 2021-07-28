// async function hello() {
//   return "Hello";
// }
// console.log(hello());

// -------

// fetch("https://reqres.in/api/users?page=2").then(function (res) {
//   res.json().then(function (response) {
//     console.log(response.data);
//   });
// });

// -----------
async function getData() {
  try {
    let data = await fetch("https://reqres.in/api/users?page=2");
    data.json().then(function (res) {
      console.log(res.data);
    });
  } catch (error) {
    console.log("error:", error);
  }
}

getData();
