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

  let dLocation = [[-1,0],[0,1],[1,0],[0,-1]];

  function dfs(board,row,col){
    if( row === n-1 && col === n-1){
      ans+=1;
      return;
    }

    for(let i =0; i< dLocation.length; i++){
      let dRow = row + dLocation[i][0];
      let dCol = col + dLocation[i][1];

      if(dRow < 0 || dRow === n || dCol <0 || dCol === n) continue;
      if(board.hasBeenVisited(dRow,dCol)) continue;

      board.togglePiece(dRow,dCol);
      dfs(board,dRow,dCol);
      board.togglePiece(dRow,dCol);
    }
  }
  board.togglePiece(0,0);
  dfs(board, 0,0);
  return ans;
}

