/**
 *
 * Implement a `BFSelect` method on this Tree class.
 *
 * BFSelect accepts a filter function, calls that function on each of the nodes
 * in Breadth First order, and returns a flat array of node values of the tree
 * for which the filter returns true.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   root1.BFSelect(function (value, depth) {
 *     return value % 2;
 *   })
 *   // [1, 3, 5, 7]
 *
 *   root1.BFSelect(function (value, depth) {
 *     return depth === 1;
 *   })
 *   // [2, 3]
 *
 */

/*
 * Basic tree that stores a value.
 */

var Tree = function (value, depth = 0) {
    this.value = value;
    this.depth = depth;
    this.children = [];
};


Tree.prototype.BFSelect = function (filter) {
    // return an array of values for which the function filter(value, depth) returns true
    // let qu = [];
    // let checked = {};
    //
    // qu.push(this);
    // checked[`${this.value}`] = true;
    //
    // while (qu.length) {
    //     let currentNode = qu.shift();
    //
    //     for (const child of currentNode.children) {
    //         if (checked[`${child.value}`]) continue;
    //
    //         if (filter(child.value, child.depth)) {
    //             checked[`${child.value}`] = true;
    //             qu.push(child);
    //         }
    //
    //     }
    // }
    //
    // let ans = [];
    // for (const node in checked) {
    //     if (checked[`${node}`]) ans.push(node);
    // }
    //
    // return ans;
    let ans = [];

    // ㅇㅓ디서 부터 순회를 시작할 건지? -> root.DFSSelct이니 this.value는 root이겠네
    //
    function traverse(currentNode, visited, depth) {

        for (let child of currentNode.children) {
            if (filter(child.value, depth)) {
                visited.push(child.value);
            }
            traverse(child, visited, depth + 1);
        }

    }


    if (filter(this.value, 0, 0)) {
        ans.push(this.value);
    }

    traverse(this, ans, 1);

    return ans;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function (child, depth = 0) {
    if (!child || !(child instanceof Tree)) {
        child = new Tree(child, depth + 1);
    }

    if (!this.isDescendant(child)) {
        this.children.push(child);
    } else {
        throw new Error("That child is already a child of this tree");
    }
    // return the new child node for convenience
    return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function (child) {
    if (this.children.indexOf(child) !== -1) {
        // `child` is an immediate child of this tree
        return true;
    } else {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].isDescendant(child)) {
                // `child` is descendant of this tree
                return true;
            }
        }
        return false;
    }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function (child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
        // remove the child
        this.children.splice(index, 1);
    } else {
        throw new Error("That node is not an immediate child of this tree");
    }
};


var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
let ans = root1.BFSelect(function (value, depth) {
    return value % 2;
})

console.log(ans);


// [1, 3, 5, 7]