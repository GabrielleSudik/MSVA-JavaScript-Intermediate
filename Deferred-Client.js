//this is the client side that works with the deferred-worker

function processMessage(message){
    //create the deferred object:
    //it's a jQuery thing
    var deferred = $.Deferred();

    //begin doing work:
    //most of the next three blocks are like the regular worker
    var worker = new Worker('./Deffered-Worker.js');

    worker.onmessage = function(e){
        //resolve when function completes,
        //send the string back
        //alerts anyone using the promise object
        //that the operation completed successfully
        deferred.resolve(e.data.message);
    };

    worker.postMessage({ message: message});

    //return promise to caller
    return deferred.promise();
}