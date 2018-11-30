
//
self.onmessage = function(e){
    //the message is on the data property:
    var message = e.data;
    self.postMessage(message + 'is processed!');
}
