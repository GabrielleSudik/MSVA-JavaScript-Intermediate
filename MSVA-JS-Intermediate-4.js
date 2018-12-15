//a sample call

var result = null;

var xhr = new XMLHttpRequest();

//xhr is a standard variable name for XMLHTTPRequest objects

xhr.onreadystatechange = function(){
    //check if operation has completed and is successful:
    //fyi, 4 means you got data, and 200 means success.
    if(xhr.readyState == 4 && xhr.status == 200){
        //get result:
        result = xhr.resultText;
    }
}

//open the connection (we could use or Post or Delete, etc):
//open only opens. it doesn't send any data.
xhr.open("GET", "url");

//send the request:
xhr.send();