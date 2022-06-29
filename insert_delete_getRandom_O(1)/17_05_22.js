/**
 * Implement the RandomizedSet class:
 * RandomizedSet() Initializes the RandomizedSet object.
 *
 * bool insert(int val) Inserts an item val into the set if not present.
 * Returns true if the item was not present, false otherwise.
 *
 * bool remove(int val) Removes an item val from the set if present.
 * Returns true if the item was present, false otherwise.
 *
 *
 * int getRandom() Returns a random element from the current set of elements
 * (it's guaranteed that at least one element exists when this method is called).
 * Each element must have the same probability of being returned.
 *
 *
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 *
 * Input
 * ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * Output
 * [null, true, false, true, 2, true, false, 2]
 *
 * -2^31 <= val <= 2^31 - 1
 * At most 2 * 105 calls will be made to insert, remove, and getRandom.
 * There will be at least one element in the data structure when getRandom is called.
 */

/**

Set can only contain unique values

randomSet = {1,2,3};
let returnVal = randomSet.insert(4);
log(returnVal); // prints true

let returnVal = randomSet.insert(3);
log(returnVal); // prints false

return value tells us whether element was present when we call insert()



randomSet = {1,2,3};
let returnVal = randomSet.remove(4);
log(returnVal); // prints false

let returnVal = randomSet.remove(3);
log(returnVal); // prints true

Get Random - Returns a random element
let randomVal = randomSet.getRandom();
log(randomVal); // 1 or 2 or 3 

Get random will not be called on empty RandomizedSet.

Don't return random values blindly.

Example - coin -> H/T

P(head) = 1/2
P(tail) = 1/2


randomSet = {1,2,3,4,5,6};

randomSet.getRandom(); -> 3
randomSet.getRandom(); -> 2
randomSet.getRandom(); -> 1
randomSet.getRandom(); -> 5
randomSet.getRandom(); -> 6
randomSet.getRandom(); -> 4

// wrong implementation
randomSet.getRandom(); -> 3
randomSet.getRandom(); -> 2
randomSet.getRandom(); -> 1
randomSet.getRandom(); -> 2
randomSet.getRandom(); -> 2
randomSet.getRandom(); -> 2

*/

/**
 * Approach
 *
 * insert, delete and getRandom = O(1)
 *
 * what data structure can we use?
 * 1. array
 * 2. set - I can find any value in O(1)
 *
 * set.find(val) -> O(1)
 *
 *
 *
 * {6, 5, 1, 2, 3, 4}
 *
 *
 * RandomizedSet(){
 *   this.set = {};
 *   this.head = new Node();
 * }
 *
 * insert(val){
 *  if(set.contains(val) === true){
 *    return false;
 *  }
 *  else {
 *   // insert the value
 *   also insert in set
 *   return true;
 *  }
 * }
 *
 *
 * {6, 5, 1, 2, 3, 4}
 *
 * remove(val){
 *   if(set.contains(val) === false){
 *     return false;
 *   } else {
 *    remove from set
 *    return true;
 *   }
 *
 * }
 *
 *
 *
 *
 *
 *
 * class Thing(){
 *   constructor(){
 *      this.height = 50;
 *    }
 * }
 *
 * function Thing(){
 *    this.height = 50;
 *    // add width
 *    // add printHeight() function
 * }
 *
 *
 * // add properties or members to class
 *
 * Thing.prototype.printHeight = function(){
 *   console.log(this.height);
 * }
 *
 * let thing = new Thing();
 * if(some condition){
 *   Thing.prototype.printHeight = function(){
 *   console.log(this.height);
 * }
 *} else {
    Thing.prototype.printWidth = function(){
 *   console.log(this.height);
 * }
 }
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

var RandomizedSet = function () {
  this.map = {}; // ds for O(1) operation; normal JS object
  this.values = []; // simple array
};

/**
 * values = [1, ]
 * map = {
 *    1: 0,
 * }
 *
 * this.map[1] = 0
 *
 * insert(1)
 * insert(2)
 *
 */

RandomizedSet.prototype.insert = function (val) {
  //check if val is present in RandomSet
  if (this.map[val] !== undefined) {
    // val is present and not undefined
    return false;
  }
  // if val is not present
  this.map[val] = this.values.length;
  this.values.push(val);
  return true;
};

/**
 * RandomizedSet.remove(1)
 *  values = [1,2,3]
 *  map = {
        1: 0,
        2: 1, 
        3: 2,
    }

    idx = 0;

    new map after delete,
    map = {
        2: 1,
        3: 2,
    }
    values = [1,2,3]

    new values after this.values.pop()
    last = 3
    values = [1,2]
   
   
   
    map = {
        3: 0,
        2: 1,
    }
    values = [3, 2]
 *
 */
RandomizedSet.prototype.remove = function (val) {
  // without any searching
  // if val is not in RandomizedSet
  if (this.map[val] === undefined) {
    return false;
  }
  // storing the index of the val in idx
  const idx = this.map[val];
  delete this.map[val];
  // storing the last element of values in last
  const last = this.values.pop();
  // last element is the val passed to the function

  // this line checks if there is only one element in RandomizedSet
  // map = {}
  // values = []
  // idx = 0
  // last = 1
  if (this.values.length === idx) return true;
  // else just replace the elementin both the map and values array
  this.map[last] = idx;
  // place the last element at idx in values array, remove the val
  this.values[idx] = last;
  return true;
};

// For random values array is used
// values[Math.floor(Math.random() * this.values.length)]

// range - 0 - values.length - 1
// Math.random will give number in range - [0,1)
// Math.random() -> 0.5678

// this.values = [1,2,3,4,5,6]
// Math.random() -> 0.34 * 6 = 2.04 = Math.floor(2.34) = 2 -> random index

// Math.random() -> 0.999999 * 6 = 5.4 -> 5
// return values[2] = 3;

// If you return a random value, you need to pick from the collection of elements
// map =  {val: idx}
// values = [1,2,3]
// generate a random index, and return the value at that index
RandomizedSet.prototype.getRandom = function () {
  if (this.values.length === 0) return null;
  // returning a random value
  return this.values[Math.floor(Math.random() * this.values.length)];
};

// console.log(Math.random());

// const obj = {
//   1: 2,
//   2: 3,
// };

// console.log(obj);
// delete obj[1];
// console.log(obj);

// function Thing() {
//   this.height = 50;
//   // add width
//   // add printHeight() function
// }

// // add properties or members to class

// Thing.prototype.printHeight = function () {
//   console.log(this.height);
// };

// let thing = new Thing();
// thing.printHeight();
// console.log(thing);
