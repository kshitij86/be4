/**
 * Check for balanced tree -
 *
 * The balance of a tree is measured in terms of the height.
 * Skewed/unbalanced  tree -
 *
 *    lh = 0, rh = 4
 *          1
 *           \
 *            2
 *             \
 *              3
 *               \
 *                4
 *                 \
 *                  5
 *
 *
 *
 * Given the root of the tree, check whether it is a balanced tree or not.
 *
 * Definition of a balanced tree -
 *
 * A balanced binary tree is defined as the tree in which for every node the absolute difference 
 * in heights of the right and left subtrees is not more than 1.
 * 
 * 0 <= acceptable height <= 1
 *
 * difference in heights that is allowed - [0, 1]
 *
 *
 *
 *
 *                                          1
 *                                         / \
 *                                       2     4
 *                                        \
 *                                         3
 *
 *
 *
 * This is a balanced tree - 
 *
 *                                    ["1", 2, 1] -> 1 (allowed)
 *                                   /           \
          (allowed) 1   <- ["2", 0, 1]            ["4", 0, 0] -> 0 (allowed)
 *                                 \
 *                                ["3", 0, 0] -> 0 (allowed)
 *
 * (global result)
 * balanced = true;
 * 
 * Inside recursive fxn:
    * f1(root) -> call the function for height of the subtree (both left and right) [lh, rh]
    *             if(Math.abs(lh - rh) > 1){
    *                balanced = false;       
    *             }
    * f1(root.left)
    * f1(root.right)
 *             
 *
 * ["data value", height of left subtree, height of right subtree]
 *
 * 1. For a leaf node, the height of left and right are zero.
 *
 *
 * 
 * The function should return false for this example: 
 * 
 *                                  lh = 3, rh = 1
 *                                        1
 *                                      /   \
 *                                     2     3
 *                                    /
 *                                   4 
 *                                  /
 *                                 5 
 * 
 * 
 * 
 * Algorithm: 
 * (Hint: Think about the height of the subtree)
 * 
 * 1. Traverse the tree (pre-order fashion) and process the root.
 *      Find lh and rh and compare their diiference with 1.
 *      And update the balanced variable accordingly.
 * 
 * 2. Call for root.left.
 * 3. Call for root.right.
 * 4. After all nodes are processed, return "balanced".
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

function checkBalanced(root) {
  // global variable
  let balanced = true;
  // to find the height of atree/subtree
  function findHeightOfTree(root) {
    if (root === null) {
      return 0;
    }
    let leftH = findHeightOfTree(root.left);
    let rightH = findHeightOfTree(root.right);

    if (leftH > rightH) {
      return leftH + 1;
    }
    return rightH + 1;
  }
  // fxn that makes the recursive calls
  function checkBalancedRecursive(root) {
    // if tree is empty, return
    if (root === null) {
      return true;
    }
    // processing the root
    // find lh and rh
    let leftSubtreeHeight = findHeightOfTree(root.left);
    let rightSubtreeHeight = findHeightOfTree(root.right);

    // update balanced
    if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
      balanced = false;
      return;
    }
    // rest of the preorder calls
    checkBalancedRecursive(root.left);
    checkBalancedRecursive(root.right);
  }
  checkBalancedRecursive(root);
  // after checkBalancedRecursive is called, balanced will have the correct
  return balanced;
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
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.right.left = new Node(4);
root1.right.right = new Node(5);
root1.right.left.left = new Node(7);
root1.right.right.right = new Node(8);

/**
 *                                 10
 *                                /  \
 *                               20   30
 *
 */

let root2 = new Node(10);
root2.left = new Node(20);
root2.right = new Node(30);

// console.log(checkBalanced(root1));
console.log(checkBalanced(root2));

// https://forms.gle/1jHJnjRSXd6SWGbe6
