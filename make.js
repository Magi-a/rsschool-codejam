function make(){

    var arr = Array.from(arguments);

    function result(i){

        if(typeof i == 'function'){
            return arr.reduce(i);
        }
        
        for(let i = 0; i < arguments.length; i++){
            arr.push(arguments[i]);
        }

        return result;
    }

    return result;  
}