function balancedParenthesis(expr) {
  let temp = [];
  for (let i = 0; i < expr.length; i++) {
    if (temp.length === 0) {
      temp.push(expr[i]);
    } else if (
      (temp[temp.length - 1] == "(" && expr[i] == ")") ||
      (temp[temp.length - 1] == "{" && expr[i] == "}") ||
      (temp[temp.length - 1] == "[" && expr[i] == "]")
    ) {
      temp.pop();
    } else {
      temp.push(expr[i]);
    }
  }
  if (temp.length === 0) {
    return true;
  }
  return false;
}

console.log(balancedParenthesis("[{(}]"));
