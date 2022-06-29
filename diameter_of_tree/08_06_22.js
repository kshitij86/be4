/**
 * Diameter of binary tree -
 *
 * Given the root of a binary tree, find out its diameter.
 *
 * The diameter of the binary tree is defined as
 * the longest distance/path between any two nodes of the tree.
 *
 * The diameter need not necessarily pass through the root.
 * It can pass through root and it cannot include root also.
 *
 * Input = root of a tree (an object of Node)
 * Output = the diameter of the tree (a Number)
 *
 * root/any node - {
 *      data,
 *      left,
 *      right
 * }
 *
 * Path in a tree -
 *
 * The count of links/line/edge between any two nodes is the path between them.
 *
 * Path length/distance -
 * [1->5] - (1,2) & (2,5) - 2
 * [1->3] - (1,3) - 1
 * [1->2] - 1
 * [1->6] - 2
 * [2->6] & [2->5] - 1
 * [2->3] - 2
 * Answer - [5->3] & [6->3] - 3 {(6,2)(2,1)(1,3)}
 *
 *
 * Example 1 -
 *
 *
 *
 *                                                1
 *                                              /   \
 *                                             2     3
 *                                            / \
 *                                           5   6
 *
 * maxi = Math.max(3, -1)
 * maxi = 3
 * [1] -> 2 + 1 = 3
 * [2] -> 1 + 1 = 2
 * [5] -> 0 + 0 = 0
 * [6] -> 0 + 0 = 0
 * [3] -> 0 + 0 = 0
 *
 *
 *
 * Diameter of the tree is 3
 *
 *
 *
 *
 * Example 2 -
 *
 *                                             1
 *                                            / \
 *                                           2   3
 *                                              / \
 *                                             4   5
 *                                            /     \
 *                                           7       8
 *                                          /         \
 *                                         a           e
 *                                        /             \
 *                                       b               f
 *                                      /
 *                                     c
 *
 *
 * Diameter of tree -
 *
 * [1->c] - 6
 * [c->f] - 9
 *
 *
 * Diameters of the tree -
 * [7->8], [2->7], [2->8] (all have length 4)
 *
 *
 * [1->2] - 1
 * [1->7] - 3
 * [1->8] - 3
 *
 *
 *
 * Algorithm:
 * (Hint: think about the height of the tree & every subtree)
 * 1. Traverse the tree. (root -> left -> right) [PREORDER]
 *    Maintain a global maximum value (max).
 *    Start from the root, and try to find the following for each node:
 *      -> Find the right height
 *      -> Find the left height
 *      -> Add them and compare with the max and update accordingly
 * 2. Once all trees are processed, return the global maximum.
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

class Node {
  constructor(_data) {
    this.data = _data;
    // manually set left and right
    this.left = null;
    this.right = null;
  }
}

function diameterNaive(root) {
  // global maximum
  // actual answer to return
  let maxi = -1;
  // method to find height of any subtree
  function findHeightOfTree(root) {
    // for the empty tree
    if (root === null) {
      return 0;
    }
    let leftHeight = findHeightOfTree(root.left);
    let rightHeight = findHeightOfTree(root.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    return rightHeight + 1;
  }
  // the recursive call that will traverse the tree
  function diameterNaiveRecursive(root) {
    // if empty tree, return
    if (root === null) {
      return;
    }
    // find the left and right heights
    let lh = findHeightOfTree(root.left);
    let rh = findHeightOfTree(root.right);
    // update maxi accordingly
    maxi = Math.max(lh + rh, maxi);
    // preorder
    diameterNaiveRecursive(root.left);
    diameterNaiveRecursive(root.right);
  }
  // call recursive function
  diameterNaiveRecursive(root);
  // return the result
  return maxi;
}

function diameterOptimal(root) {
  // global maximum
  let maxi = -1;
  // for the recursive call
  function diameterOptimalRecursive(root) {
    if (root === null) {
      return 0;
    }
    // process the root
    // there is no separate function for height
    let lh = diameterOptimalRecursive(root.left);
    let rh = diameterOptimalRecursive(root.right);
    // update the maximum accordingly
    maxi = Math.max(maxi, lh + rh);
    return 1 + Math.max(lh, rh);
  }
  // after this call, maxi will have the diameter
  diameterOptimalRecursive(root);
  return maxi;
}

/**
 *                                             1
 *                                            / \
 *                                           2   3
 *                                              / \
 *                                             4   5
 *                                            /     \
 *                                           7       8
 *
 */

// build above tree structure
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.right.left.left = new Node(7);
root.right.right.right = new Node(8);

console.log(diameterNaive(root));
console.log(diameterOptimal(root));

// https://forms.gle/1jHJnjRSXd6SWGbe6
