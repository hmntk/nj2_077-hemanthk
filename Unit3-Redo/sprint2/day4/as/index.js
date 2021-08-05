// console.log("hmmm");

const readline = require("readline");
const process = require("process");

const bh = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = ["book1", "book2", "book3"];

let bookhub = function () {
  return bh.question("Choose anyone out of the three", function (choice) {
    if (choice == 1) {
      console.log(arr);
      bookhub();
    } else if (choice == 2) {
      bh.question("Enter name of book", function (name) {
        arr.push(name);
        bookhub();
      });
    } else if (choice == 3) {
      bh.question(
        "Are you sure you want to quit? Press Y to quit",
        function (choice1) {
          if (choice1 == "Y") {
            bh.close();
          } else {
            bookhub();
          }
        }
      );
    } else {
      console.log("Unknown choice");
      setTimeout(() => {
        console.log("Unnown Choice. Please re enter right one");
        bookhub();
      }, 1000);
    }
  });
};
bookhub();

bh.on("close", function () {
  console.log("bye bye!");
});
