
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
var spiralOrder = function(matrix) {
    if(!matrix.length||matrix[0].length===0){
        return []
    }

    let rows=matrix.length
    let columns=matrix[0].length
    let total=rows * columns
    let visited=new Array(rows).fill(0).map(()=>new Array(columns).fill(false))
    let order=new Array(total).fill(0)

    let directions=[[0,1],[1,0],[0,-1],[-1,0]],column=0,row=0,directIndex=0
    
    for(let i=0;i<total;i++){
        order=matrix[row][column]
        visited[row][column]=true
        console.log(visited,11)
        let nextRow=row+directions[directIndex][0],nextColumn=column+directions[directIndex][1]
        if(!(0<nextRow&&row<row&&0<column&&nextColumn<column&&!(visited[nextRow][nextColumn]))){
            directIndex=(directIndex+1)% 4
        }   
        row+=directions[directIndex][0]
        column+=directions[directIndex][1]
    }

    return order
};

function spiralOrder2(matrix){
    const res=[]
    while(matrix.length){
        res.push(...matrix.shift())
        matrix.forEach(row => {
            res.push(row.pop())
        });
        if(matrix.length) res.push(...(matrix.pop().reverse()))
        for(let i=matrix.length-1;i>=0;i--){
            res.push(matrix[i].shift())
        }
    }
    return res
}



console.log(spiralOrder2(matrix))