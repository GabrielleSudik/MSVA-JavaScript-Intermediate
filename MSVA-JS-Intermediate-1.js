// part one
//in js, you don't declare the variable type

var x = 3;

//all functions MUST start with word "function". easy.

function numberSquared(x){
    return x*x;
}

var sentence = "The square of " + x + " is: "+ numberSquared(x);
console.log(sentence);

//in Terminal, from the folder with the file:
//"node filename.js"

var num = numberSquared(5);
console.log(num);

//self-invoking functions. they run on their own, don't need to be called.
//put them in ((two parentheses)) don't forget the (parameters) at the end.

((function yourePretty(){
    console.log("You're pretty!");
}))();

//enclosure function: like a nested function.
//don't forget function keywords for each part of the nest

function showName(firstName, lastName){
    var nameIntro = "Your name is ";

    function makeFullName(){
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}

console.log(showName("Gaby", "Sudik"));

function weightPlusTen(firstName, lastName, weight){
    var nameIntro = "Your name is ";
    var weightIntro = "And your real weight is " + realWeight + "pounds.";

    function realWeight(){
        return weight + 10;

        function makeLongName(){
            return nameIntro + firstName + " " + lastName;
        }

        makeLongName();
    }
    return realWeight();
}

console.log(weightPlusTen("Bea", "Arthur", 160));
//the above is not quite right. not sure it's possible to keep nesting??


//here is a new example of nested function:

function celebrityName(firstName){
    var nameIntro = "This celebrity is ";

    function lastName(theLastName){
        console.log(nameIntro + firstName + " " + theLastName);
    }

    return lastName;
}

//the first link calls celebrityName with the first name only
var famousName = celebrityName("Gary");
//if you try printing/calling it now you get [Function:lastName]
console.log(famousName);
//calling that new var/function, you'll get what you expect, minus the last name
famousName();
//so, call it again with the missing piece and you get the full expected output.
famousName("Kasparov");


//another example:
//you can enclose the second function inside a return statement

function theLocation(){
    var city = "Cleveland";

    return{
        get: function(){
            console.log(city);
        },
        set: function(newCity){
            city = newCity;
        }
    }
}

//the next line "summarizes" the whole function in one variable
//so you just have to call the shorthand
//if you called just theLocation(), you get no output
var myPlace = theLocation();
myPlace.get();
myPlace.set("Lakewood");
myPlace.get();
//when you call the "get" part of the nested funtion, you get whatever "city" is.
//when you call the "set" part, you have to pass the name of the new city (and it will be set)
//calling get again shows the new city.

theLocation();
myPlace.get();
//interesting. after re-calling theLocation();
//get still prints "Lakewood"
//not sure if that's because calling theLocation() does nothing
//or because the previous "set" was more authoritative than re-declaring the variable?


//anonymous functions.  have no name.
//common uses: recursion and enclosures

//named function:
function meTime(){
    alert("Go outside!");
}

//compare to anon function that does the same thing:
var meTime = function(){
    alert("Go outside!");
}

//named Fs can be called anywhere in the code
//anon Fs can only be called after they appear

//some examples:

//function expression
var sayHi = function(){
    alert("Hi!");
}

//in an onject:
var Pony = {
    //one of the object's properties is a function for saying its name
    sayName: function(){
        alert("My name is Boo Radley.");
    }
};

//event handler (jQuery!)
/*
$("p").click = function(){
    alert("Hello.");
};
*/
//coded out because you don't have jQuery linked

//self-invoking:
/*
((function(){
    alert("Hiya.");
})());
*/
//fyi you're fuzzy about where the closing () go.
//they seem to work in at least two places! O_O
//why is that creating an error when run??

//recursion:
var factorial = function(x){
    return !(n > 1) ? 1 : arguments.callee(n-1) * n;
}

//console.log(factorial(5));

//you've seen this before above-- the get and set functions are unnamed! 
function theLocation2(){
    var city = "Bay";

    return{
        get: function(){console.log(city);},
        set: function(newCity) {city = newCity;}
    };
}


//jQuery
//it's a JS library
//but it has so many of its own functions, it's kind of its own thing

//need to start all jQuery lines with $.
//jQuery calls things, akin to CSS.
//start with the selector, dot notation, then action

/*
<script>
    $(this).hide();
    $("p").hide();
    $(".test").hide();
</script>
*/

//fyi jQuery is a better substitute for AJAX


/* commenting trick!
  use two // before one /* (and reverse at the end)
  to easily coomment and uncomment if you need to test or show work
  */