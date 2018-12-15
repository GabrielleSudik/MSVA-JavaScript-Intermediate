self.onmessage = function(e){
    //the message is on the data property:
    var messageObject = e.data;
    //next line detects the START message:
    if(messageObject.status === "START"){
        self.postMessage("Started!");
    } 
    else{
        var message = messageObject.message;
        self.postMessage(messageObject + "is processed!");
    }
}

//note to self: you can't get the html page to run from VSCode or VS
//it IS working if you double-click the html file in the explorer folder

//but the button doesn't work :-/

//this is part of part 3
//this is the worker side of the code

//fyi, it seems the web worker isn't working because your
//localhost isn't working. 
//you get it, though.

//some notes:
//(1) not all js libraries work in the worker. it depends on what it does.
//eg, jQuery doesn't work, because it depends on the DOM.
//others could work, though.
//(2) you can't prioritize the worker thread. it's out of your control, really.

