function sumOfOther(arr){

    return arr.map(function(item, id, arr){
        return arr.filter(function(a, b){
            return b != id;
        }).reduce(function(sum, current){
            return sum + current;
        })
    });
}