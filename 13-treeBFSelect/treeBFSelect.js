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

var Tree = function (value) {
    this.value = value;
    this.children = [];
};


Tree.prototype.BFSelect = function (filter) {
    // return an array of values for which the function filter(value, depth) returns true
    let qu = [];
    let checked = {};
    let ans = [];
    let depth = 0;
    let count = 0;

    qu.push(this);
    checked[`${this.value}`] = true;
    this.depth = depth;
    if(filter(this.value, depth)){
        ans.push(this.value);
    }


    while (qu.length) {
        let currentNode = qu.shift();
        //currentNode의 자식수를 count에 받아온다.

        for (const child of currentNode.children) {
            child.depth = currentNode.depth + 1;
            // if (checked[`${child.value}`]) continue; 일반적인 BFS로직에서는 원래는 넣어야 하는 코드,
            // 그런데 주어진 데이터구조에서는
            // 다른 노드에서 중복된 value 값을 가질 수 있다.
            // BFS, DFS건 어쨋든 목적은 모든 노드를 돌아야한다.
            // 그런데 또 그래프 탐색에서 조건이 한번씩 방문한다는 것이다. 그거 때문에 check 로직을 넣어준다.
            // 현재 데이터 구조에서는 한번 방문한 노드를 또 방문하지 않기 때문에 체크로직 자체가 필요없다.
            // 왜냐하면 그래프가 아니고 트리이기 때문이다.

            if (filter(child.value, child.depth)) {
                ans.push(child.value);
            }
            checked[`${child.value}`] = true;
            qu.push(child);
        }
    }

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
