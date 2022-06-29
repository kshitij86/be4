class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
    this.maxSize = 40;
  }
  size() {
    return this.top + 1;
  }
  isempty() {
    return this.top <= -1;
  }
  push(data) {
    if (this.top + 1 > this.maxSize) {
      console.log("Stack overflow");
    }
    this.top++;
    this.data[this.top] = data;
  }
  pop() {
    this.top--;
  }
  peek() {
    if (this.isempty()) {
      throw new Error("Stack UnderFlow");
    }
    // console.log(this.data[this.top]);
    return this.data[this.data.length - 1];
  }
  insertatbottom(value) {
    if (this.data.length === 0) {
      this.push(value);
      return;
    }
    let x = this.peek();
    this.data.pop();
    this.insertatbottom(value);
    this.push(x);
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.insertatbottom(90);
console.log(stack.data);
