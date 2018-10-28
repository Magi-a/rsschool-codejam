function recursion(tree){

    var arr = []
    
    function inTree(tree, lvl){

        if(!('right' in tree) && !('left' in tree)){
            if(arr[lvl] == undefined){
                arr[lvl] = [];
                arr[lvl].push(tree.value);
            } else {
                arr[lvl].push(tree.value);
            }
            return 0;
        }

        if('left' in tree){
            inTree(tree.left, lvl+1);
        }
        
        if('right' in tree){
            inTree(tree.right, lvl+1);
        }
        

        if(arr[lvl] == undefined){
            arr[lvl] = [];
            arr[lvl].push(tree.value);
        } else {
            arr[lvl].push(tree.value);
        }
    
    }
    
    inTree(tree, 0);
    
    return arr;
}