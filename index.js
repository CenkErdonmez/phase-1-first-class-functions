function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(soemthing){
    return (receivesAFunction)
}

function returnsAnAnonymousFunction(){
    return (function(){})
}