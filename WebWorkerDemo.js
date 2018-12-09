self.onmessage = function(e){
    //the message is on the data property:
    var message = e.data;
    self.postMessage(message + 'is processed!');
}

//note to self: you can't get the html page to run from VSCode
//and it's not working from VS. hmm...