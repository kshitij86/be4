const queue = (str) => {
  const splitStr = str.split(" ");
  let n = 0;
  for (let j = 0; j < splitStr.length; j++) {
    let flag = false;
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i] > splitStr[i + 1]) {
        let temp = splitStr[i];
        splitStr[i] = splitStr[i + 1];
        splitStr[i + 1] = temp;
        flag = true;
      }
    }
    if (flag) n++;
  }
  return n.toString();
};

console.log(queue("1 0 0"));
