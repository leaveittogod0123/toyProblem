/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n) {

  let ans = 0;

  let board = makeBoard(n);

  let dLocation = [[0,1],[1,0],[-1,0],[0,-1]];

  function dfs(row,col){
    if( row === n-1 && col === n-1){
      ans+=1;
      return;
    }

    board.togglePiece(row,col);

    // for(let i =0; i< dLocation.length; i++){
    //   let dRow = row + dLocation[i][0];
    //   let dCol = col + dLocation[i][1];
    //
    //   if(dRow >=0 && dRow < n && dCol >=0 && dCol < n){
    //     if(!board.hasBeenVisited(dRow,dCol)){
    //       dfs(dRow,dCol);
    //     }
    //   }
    // }

    if(row+1 < n && !board.hasBeenVisited(row+1,col))
      dfs(row+1, col);
    if(col+1 < n && !board.hasBeenVisited(row,col+1))
      dfs(row, col+1);
    if(row-1 >= 0 && !board.hasBeenVisited(row-1,col))
      dfs(row-1,col);
    if(col-1 >= 0 && !board.hasBeenVisited(row,col-1))
      dfs(row, col-1);

    board.togglePiece(row,col);
  }
  dfs(0,0);
  return ans;
}


console.log(robotPaths(6));