const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your choice?", (choice) => {
  let i = 0;
  let firstNum = "",
    secondNum = "",
    operation = "";
  while (choice[i] !== " ") {
    firstNum += choice[i];
    i++;
  }
  i++;
  operation = choice[i];
  i += 2;
  while (i != choice.length) {
    secondNum += choice[i];
    i++;
  }
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  console.log(firstNum);
  console.log(operation);
  console.log(secondNum);
  console.log("press ctrl + c to quit...");
});
