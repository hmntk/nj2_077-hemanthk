function Register(e) {
  e.preventDefault();

  let formdata = {
    name: document.getElementById("ip1").value,
    email: document.getElementById("ip2").value,
    password: document.getElementById("ip3").value,
    username: document.getElementById("ip4").value,
    mobile: document.getElementById("ip5").value,
    description: document.getElementById("ip6").value,
  };

  formdata = JSON.stringify(formdata);

  async function postData() {
    try {
      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        {
          method: "POST",
          body: formdata,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  postData();
}

function Login(e) {
  e.preventDefault();
  console.log("triggered");
  let formdata = {
    username: document.getElementById("ip7").value,
    password: document.getElementById("ip8").value,
  };

  formdata = JSON.stringify(formdata);

  async function getData() {
    try {
      let res1 = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
        {
          method: "POST",
          body: formdata,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let { token, error } = await res1.json();
      if (!error) {
        getMyProfile(JSON.parse(formdata).username, token);
      } else {
        alert("Wrong Credentials !");
      }
    } catch (error) {
      console.log(error);
    }
  }
  getData();
}

function getMyProfile(username, token) {
  document.getElementById("forms").style.display = "none";
  document.getElementById("body").style.display = "block";

  async function getData() {
    try {
      let res1 = await fetch(
        `https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data1 = await res1.json();
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  }
  getData();
}
/*async function Search() {
  let query = document.getElementById("query").value;
  let res = await fetch(
    `http://api.serpstack.com/search?access_key=9a1cd2359e6a952c5675afd7a9a5f4b0&query=${query}`
  );
  let { organic_results } = await res.json();
  console.log(organic_results);
}
*/
