/**
 * Sum of all root to leaf paths
 *
 * 1. You are given a binary tree containing only digits from 0 to 9.
 * 2. Each root-to-leaf path in the tree represents a number.
 * 3. For example, 1 -> 2 -> 3 represents the
 * number 123.
 *
 * You need to find and return the total sum of all root-to-leaf numbers.
 *
 *
 * Input - root of a binary tree
 * Output - the sum of all root to leaf numbers
 *
 *
 *                                        [1]
 *                                        /  \
 *                                      [2]   [4]
 *                                      /  \
 *                                    [5]   [3]
 *
 *
 * Root to leaf - [1,2,5], [1,2,3], [1,4]
 *                  125       123    14 = 248 + 14 = 262
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
 * Test Cases -
 *
 *                                          [1]
 *                                        /     \
 *
 * Since there are 2 leaf nodes, there are 2 root to leaf paths in the tree.
 * Paths - 1
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
 *                                ->      [1]
 *                                       /   \
 *                                    [0]     [2]
 *                                   /   \       \
 *                                  [3]   [4]     [6]
 *
 *  [1,]
 *
 * PREORDER -
 * arr.push(root.data); -> number
 * [1, ]
 * first left
 * second right
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
 * Root is zero , all paths start from 0 node
 * Paths - [1,0,3], [1,0,4], [1,2,6]
 *           103       104     126 -> 130 + 103 -> 333
 * 210
 * 123 -> (1*10^2) + (2*10^1) + (3*10^0)
 *      -> (1*100) + (0*10) + (3*1) -> 103
 *
 *
 *                            [1]
 *                           /    \
 *                        [2]     [0]
 *                               /
 *                              [3]
 *
 * sumGlobal = 103 + 12 = 115
 * arr = [1,0,3] -> sum = 103,
 * [1,2] -> 12
 *
 * (1*10^2) + (0*10^1) + (3*10^0) -> 103
 *
 * Observations -
 * 1. The root of the tree is the most significant digit(leftmost)
 * 2. "0" can be anywhere, don't need special code
 *
 *
 * Algorithm:
 * 1. Traverse all root to leaf paths (preorder), store in string/stack/queue,
 *     convert to number and add to a totalSum.
 * 2. After all paths are explored, return the total sum.
 *
 *
 *
 *
 * Traverse all root to leaf paths :-
 *
 * As the root to leaf is the height/depth of the tree,
 * TODO: Will the order matter?
 * Inorder - (left, root, right)
 * Postorder - (left, right, root)
 *
 *
 * [x] -> Preorder - (root, left, right)
 *
 *
 *
 * Recursion & Preorder traversal will be the best ->
 *
 * How will you handle array to number conversion?
 *
 * [1,2,3,4,5,6] -> (1*10^5) + (2*10^4) + 3456
 *            0 1 2 3 4 5
 * let arr = [1,2,3,4,5,6];
 * arr[i] * Math.pow(10, n - i - 1);
 *
 * for(let i = 0; i<arr.length; i++)
 *       arr[i] * Math.pow(10, n - i - 1);
 *
 * n = 6
 *                              sum = 0
 * 1 * Math.pow(10, 6 - 0 - 1) -> 100000 [i=0]
 * 2 * Math.pow(10, 6 - 1 - 1) ->  20000 [i=1]
 * 3 * Math.pow(10, 6 - 2 - 1) ->   3000 [i=2]
 * 4 * Math.pow(10, 6 - 3 - 1) ->    400 [i=3]
 * 5 * Math.pow(10, 6 - 4 - 1) ->     50 [i=4]
 * 6 * Math.pow(10, 6 - 5 - 1) ->      6 [i=3]
 *                                 -------
 *                                 123456
 *
 * arr = [1, 2, 3]
 *                     [1]
 *                    /   \
 *                   [2]   [4]
 *                  /
 *                 [3]
 *
 * let n = arr.length;
 *
 *
 *
 *
 *
 *
 */

class Node {
  constructor(_data) {
    this.data = _data;
    this.left = null;
    this.right = null;
  }
}

let rootToLeafSum = function (root) {
  // will contain actual result
  let sumGlobal = 0;
  // a elper function for recursion
  let rootToLeafSumHelper = function (root, arr) {
    // does the actual recursion
    //
    if (root === null) {
      // empty tree
      return;
    }
    // processing the root
    // add digit to array
    arr.push(root.data);
    if (root.left === null && root.right === null) {
      // this is a leaf
      // for the leaf node

      // setting the current sum
      let sum = 0;
      // algo to convert array to number
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * Math.pow(10, arr.length - i - 1);
      }
      sumGlobal = sumGlobal + sum;
      // for backtracking purpose
      arr.pop();
      return;
    }

    // preorder recursive calls
    // root -> left -> right
    rootToLeafSumHelper(root.left, arr);
    rootToLeafSumHelper(root.right, arr);
    // for internal nodes
    arr.pop();
  };
  // call the helper function
  rootToLeafSumHelper(root, []);
  // print the output
  console.log(sumGlobal);
};

/**
 *
 * LEFT SKEWED TREE
 *
 *                {1, , null}
 *                   /
 *                {2, , null}
 *                  /
 *                {3, null, null}
 *
 *                 1
 *                / \
 *              2    3
 *              /     \
 *             7        4
 *                      /
 *                     9
 *
 *  127, 1349 -> 1476
 *
 */

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(7);

root.right = new Node(3);
root.right.right = new Node(4);
root.right.right.left = new Node(9);

rootToLeafSum(root);

// https://forms.gle/M5Lftj2NjWtv3M2i8
