self.onmessage = function(e){
    //the message is on the data property:
    var message = e.data;
    self.postMessage(message + "is processed!");
}

//note to self: you can't get the html page to run from VSCode or VS
//it IS working if you double-click the html file in the explorer folder
//but the button doesn't work :-/

//this is part of part 3
//this is the worker side of the code