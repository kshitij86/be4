// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let res = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[res - 1]) {
//       nums[res] = nums[i];
//       res++;
//     }
//   }
//   return res;
// };

// class MyStack {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//     this.top1 = -1;
//     this.top2 = -1;
//   }
//   isEmpty() {
//     return this.top1 == -1;
//   }
//   empty() {
//     return this.top2 == -1;
//   }
//   push(x) {
//     this.stack1[++this.top1] = x;
//     if (this.empty() || this.stack2[this.top2] >= x) {
//       this.stack2[++this.top2] = x;
//     }
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return -1;
//     } else {
//       let val = this.stack1[this.top1--];
//       if (!this.empty() || this.stack2[this.top2] == val) {
//         this.top2--;
//       }
//       return val;
//     }
//   }
//   getMin() {
//     if (this.empty()) {
//       return -1;
//     }
//     return this.stack2[this.top2];
//   }
// }

// let myStack = new MyStack();
