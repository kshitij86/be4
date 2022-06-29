/**
 * Asteroid Collision -
 *
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size,
 * and the sign represents its direction (positive meaning right, negative meaning left).
 *
 * Input - [2,3,-5,6,7,-1000]
 *         left   right
 *
 *  1 * 0 = 0 = right
 * -1 * 0 = 0 = right
 *
 * (2,->),(3,->),(5,<-),(6,->),(7,->) [INITIAL STATE]
 * ----------------------------------
 * (3,->),(5,<-) -> (5,<-) [smaller one has exploded]
 * (2,->),(5,<-),(6,->),(7,->) [STATE - 1]
 * ----------------------------------
 * (2,->),(5,<-) -> (5,<-)
 * (5,<-),(6,->),(7,->) [STATE - 2]
 *
 * [-5, 6, 7] (FINAL ARRAY)
 *
 * For each asteroid, the size is the absolute value.
 * And its sign is the direction of its movement.
 * Only horizontal.
 *
 * (IMPORTANT) Each asteroid moves at the same speed.
 *
 * (OBJECTIVE) Find out the state of the asteroids after all collisions.
 *
 * If two asteroids meet, the smaller one will explode.
 *
 * If both are the same size, both will explode.
 *
 * Two asteroids moving in the same direction will never meet.
 *
 *
 *
 *
 *
 *
 * Example - 1
 * Input: asteroids = [5,10,-5]
 * Output: [5,10]
 *
 * [5, 10, -5]
 *
 * (5, ->)(10, ->)(5, <-)
 * (5, ->)(10, ->)
 * i = 2
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
 * Example - 2
 * Input: asteroids = [8,-8]
 * Output: []
 *
 * [(8,->)(8,<-)] => []
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
 * Example - 3
 * Input: asteroids = [10,2,-5]
 * Output: [10]
 *
 * [10, 2, -5]
 *
 *    (10,->),(2,->),(5,<-)
 * => (10,->),(5,<-)
 * => (10,->)
 *
 * [10]
 *
 *
 *
 *
 * Example - 4
 * asteroids = [-10, 3, 2, -30, -20, 8, 9]
 *
 * <-, -> [NO COLLISION] == (-,+)
 * ->, <- [COLLISION] ==  (+,-)
 * A negative asteroid will collide with:
 *  - a positive asteroid before it
 *
 *
 *
 * stack = [3, 2]
 *
 * i = 3
 * (3,->),(2,->)(30,<-)
 * (3,->),(30,<-)
 * (30,<-)
 *
 *  [-10, -30, -20, 8, 9]
 *
 * 3 was seen before
 * 2 was seen after
 *
 * LIFO -> Stack
 *
 * Constraints:
 * 2 <= asteroids.length <= 10^4
 * If there is only one, no collison ever happens.
 *
 * -1000 <= asteroids[i] <= 1000
 * asteroids[i] != 0
 *
 *
 * We need to store the previous data somewhere.
 *  TOS     i
 * (20,->)(3,<-) = (20,->)
 * Remove 3 from the array
 * i++
 *  TOS    i
 * (2,->)(30,<-)
 * stack.pop()
 * do until all small ones are deleted
 *
 * Algorithm:
 * 1. Iterate over the array and consider each element with its sign. Also maintain a stack.
 * 2. If first element is negative, ignore. Else if it is positive, add it to the stack.
 * 3. For each element after this, do
 *      a) (while)If this element is negative, check the top of stack. If TOS is positive, there is a collison.
 *          Compare the asteroid sizes and adjust accordingly.
 *      b) If it is positive, just add to stack.
 * 4. Do until all collisons are resolved.
 * 5. Return the final state of the array.
 *
 *
 *  TOS      i
 * (3,<-)  (5,<-)
 *
 *
 *
 *
 * i = 3
 * asteroids[i] = -30
 * stack = [-10, -30, -20, 8, 9]
 * [-10, 3, 2, -30, -20, 8, 9]
 * sum = -27
 *
 *
 *
 */

var asteroidCollision = function (asteroids) {
  // stack to keep track of asteroid values
  let stack = [];
  // iterate over all asteroids
  for (let i = 0; i < asteroids.length; i++) {
    // if stack is not empty
    // if the element is negative
    // if TOS is positive
    while (
      stack.length > 0 &&
      asteroids[i] < 0 &&
      stack[stack.length - 1] > 0
    ) {
      // difference = current_asteroid + TOS
      //  i   TOS
      // -30 + 2 = -28
      //  i   TOS
      // -3 + 20 = 17
      //  i = 1, stack.length = 7
      // [1,2,3,4,5,6,7]
      let sum = asteroids[i] + stack[stack.length - 1];
      /**
       *   TOS       i
       *  (2,->)   (30,<-)
       * [...]    -30
       * sum = -28
       *
       *
       */
      if (sum < 0) {
        // the asteroid on TOS is smaller than the negative one
        stack.pop();
      } else if (sum > 0) {
        // the negative asteroid has a smaller size
        asteroids[i] = 0;
      } else {
        // sum is equal than zero
        asteroids[i] = 0;
        stack.pop();
      }
    }
    // if asteroids[i] == 0, it is not pushed into the stack
    if (asteroids[i] != 0) {
      stack.push(asteroids[i]);
    }
  }
  return stack;
};

// https://forms.gle/1jHJnjRSXd6SWGbe6
