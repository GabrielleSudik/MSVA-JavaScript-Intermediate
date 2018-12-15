//sample worker script of a deferred worker.
//this script isn't too different from the web worker we already did

//deferred workers are used when the side event
//is going to take a long time
//basically lets the user know that the side event is:
//done, failed, or in progress

self.onmessage = function(e){
    //receive a message, note the current time
    var startTime = new Date().toTimeString();
    //simulate a long-running operation
    //we're using it to take the place of a function that takes a long time
    sleep(5000);
    //build return message:
    var output = e.data.message + ' processed at ' + startTime;
    //send message back to caller:
    self.postMessage({message: output});
}

//js doesn't have a built-in sleep function, so we're writing one:
function sleep(milliseconds){
    var startingTime = new Date().getTime();
    var stopTime = startingTime + milliseconds;

    while (stopTime > new Date().getTime()) { }
}