/**
 * Queue Reconstruction by Height
 *
 * You are given an array of people, people,
 * which are the attributes of some people in a queue (not necessarily in order).
 * Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki
 * other people in front who have a height greater than or equal to hi.
 *
 * Reconstruct and return the queue that is represented by the input array people.
 * The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is
 * the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).
 *
 *
 *
 * Constraints:
 * 1 <= people.length <= 2000
 * 0 <= hi <= 10^6
 * 0 <= ki < people.length
 * It is guaranteed that the queue can be reconstructed.
 *
 *
 *
 *
 * Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
 * Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 *
 *
 * Observations:
 * 1. The height of the people matters in ordering them and shorter before shorter people
 *    will not disturb the taller person.
 *
 *    people[i, j], people[i+1, j]
 *    then people[i+1][0] > people[i][0], then people[i+1] is unaffected
 *    [5, 0] [7, 0]
 *
 * 2. The taller people can be placed first.
 * 3. After this the shorter people can be placed.
 *
 * [[7,0], [6,1], [4,1]]
 *
 * [[7,0], [4,1], [6,1]]
 *
 * Sort the array in decreasing (non-increasing) order of height (people[i][0]).
 *
 * [[5,0], [5,1], [5,2]]
 * Arrange them in increasing order of the people[i][1] value
 *
 *
 * Approach:
 * 1. Sort the array according to the following:
 *      a) Sort in decrasing order of heights
 *      b) If the heights are same, then arrange in increasing order of ki (number of taller people)
 *
 *    At this step answer is not yet found.
 *
 * 2. Iterate over the array using two loops:
 *      a) The first will iterate over each element.
 *      b) The second loop will try to place each element at its correct place
 *    Both loops will iterate the array from 0 to arr.length-1.
 *
 *
 *
 * [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
 * [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
 *
 * [[5,0], [7,0], [5,2] [6,1], [4,4], [7,1]]
 *
 *
 * i = 0
 * [7,0]
 *
 * i=1
 * [7,1]
 *
 * i=2
 * i=3
 * i=4
 * i=5
 *
 *
 *
 * Array.splice() ->
 *
 * The splice() method changes the contents of an array by
 * removing or replacing existing elements and/or adding new elements in place.
 *
 *  const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
 *
 * After sorting we need to add it in between 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
 * Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
 *
 * i = 5
 * res = [[4,0], [5,0], [2,2], [3,2], [1,4], [6,0]]
 * 
 * 
 * 
 * Time: O(n*logn + n^2) -> O(n^2)
 * Space: O(n)
 * 
 *
 */

var reconstructQueue = function (people) {
  // comparator based sorting
  people.sort(function (a, b) {
    // Sort people by height as the first priority decreasingly,
    // and by order as the second priority non-decreasingly
    if (a[0] != b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  // iteration variable
  var i;
  // final answer
  var res = [];
  // Reconstruct queue by inserting people by its k value
  for (i = 0; i < people.length; i++) {
    // still takes O(n) time
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);

// https://forms.gle/1jHJnjRSXd6SWGbe6
