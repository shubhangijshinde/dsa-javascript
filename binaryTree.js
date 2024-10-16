/**
 * Binary Trees Common Patterns
 * 
 * 1. Tree Traversals
 * 2. Level-Order Traversal
 * 3. Height of a Tree
 * 4. Checking for a Balanced Tree
 * 5. Finding a Node
 * 6. Inserting a Node
 * 7. Deleting a Node
 * 8. Lowest Common Ancestor (LCA)
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;
    if(root.val === p.val || root.val === q.val) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left === null) return right;
    if(right === null) return left;

    return root;
};

/**
 * 113. Path Sum II
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

    let res = [];
    
    const getArray = (arr, currRoot, sum) => {
        if(currRoot == null) return [];

        sum += currRoot.val;
        arr.push(currRoot.val);

        if(!currRoot.left && !currRoot.right && sum == targetSum) {
            res.push([...arr]);
        }

        getArray(arr, currRoot.left, sum)
        getArray(arr, currRoot.right, sum)
        console.log("arr before: ", arr);
        arr.pop();
        console.log("arr after: ", arr);
    }

    getArray([], root, 0);

    return res;
};
