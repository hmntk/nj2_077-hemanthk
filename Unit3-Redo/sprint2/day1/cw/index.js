function Register(e) {
  console.log("triggered");
  e.preventDefault();

  let formdata = {
    name: document.getElementById("inp1").value,
    email: document.getElementById("inp2").value,
    password: document.getElementById("inp3").value,
    username: document.getElementById("inp4").value,
    mobile: document.getElementById("inp5").value,
    description: document.getElementById("inp6").value,
  };
  formdata = JSON.stringify(formdata);

  async function sendData() {
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
      console.log("error is:", error);
    }
  }
  sendData();
}

function Login(e) {
  e.preventDefault();
  console.log("triggered");

  let formdata = {
    username: document.getElementById("inp7").value,
    password: document.getElementById("inp8").value,
  };
  formdata = JSON.stringify(formdata);

  async function sendData() {
    try {
      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
        {
          method: "POST",
          body: formdata,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log(data.token, JSON.parse(formdata).username);
      getMyProfile(JSON.parse(formdata).username, data.token);
    } catch (error) {
      console.log("error is:", error);
    }
  }
  sendData();
}

function getMyProfile(username, tokennumber) {
  async function getData() {
    try {
      let res1 = await fetch(
        `https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
          headers: {
            Authorization: `Bearer ${tokennumber}`,
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
// // var x = new Stack();
// // console.log(x);

// class Stack {
//   constructor() {
//     this.stack = [];
//     this.length = 0;
//   }
//   push(...p) {
//     p.forEach((el) => {
//       this.stack.push(el);
//       this.length++;
//     });
//   }
//   remove() {
//     this.stack.pop();
//     this.length--;
//   }
//   peek() {
//     return this.stack[this.length - 1];
//   }
// }

// let x = new Stack();
// x.push("a", "ert");
// console.log(x.peek());
// x.remove();
// console.log(x);
