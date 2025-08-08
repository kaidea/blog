

Number.prototype.add=function(n){
    return this + n
}

Number.prototype.subtract=function(n){
    return this - n
}

console.log((1).add(5).subtract(2)===4)