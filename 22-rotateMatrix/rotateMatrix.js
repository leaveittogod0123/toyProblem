var rotateMatrix = function (matrix, clockwise) {
    // Your code here.

    if(!matrix[0])
        return [];


    let newMatrix = new Array(matrix[0].length)
        .fill()
        .map((v) => {
                return v = new Array(matrix.length)
                    .fill()
                    .map(v => 0);
            }
        );

    if(clockwise === -1){
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                newMatrix[matrix.length-i-1][j] = matrix[j][i]
            }
        }
    }else{
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                newMatrix[i][matrix.length-j-1] = matrix[j][i]
            }
        }
    }





    return newMatrix;
};

