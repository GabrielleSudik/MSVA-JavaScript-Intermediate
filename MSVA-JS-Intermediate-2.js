//part two

//"objects" in JS

//prototyping is the JS version of inheritance
//there are no classes; everything is done through constructors
//the object is the top of the pyramid (instead of a class)

//two ways to create objects:
//object literals and object constructors

var myGrades = {}; //created an empty object. {} makes it an object
    //fyi, that is JSON! JS objet notation.

//object literal
var collegeAlgebra = {
    level: "freshman",
    difficulty: "hard",
    grade: 98, 

    //and the object has a function:
    textbook: function(){
        console.log("Required text is Algebra 123.");
    }
}    

//object constructor
var collegeEnglish = new Object;
collegeEnglish.level = "junior";
collegeEnglish.difficulty = "medium";
collegeEnglish.grade = 95;
collegeEnglish.textbook = function(){
    console.log("Required text is Chaucer.");
}

//check them out, you'll see they are (almost) the same
console.log(collegeAlgebra);
collegeAlgebra.textbook();
console.log(collegeEnglish);
collegeEnglish.textbook();

//dot notation vs bracket notation:
//mostly the same, but [brackets] allow for certain renaming
//you kinda spaced on that part of the lesson

delete collegeAlgebra.difficulty;
console.log(collegeAlgebra);


//constructors: set properties and methods
//created like a function (needs keyword)

function Fruit(name, color){
    console.log("Object 'fruit' is created by construtor.");

    this.type = function(){
        console.log("Hi, I'm a fruit!");
    }

    this.name = name;
    this.color = color;
}

var orange = new Fruit("orange", "orange");

orange.type;
console.log(orange);


//prototype
//the basis for inheritance

//first create a construtor:
var vegetable = function(){
    this.type = "veggie";
}

//keyword prototype:
vegetable.prototype.print = function(){
    console.log(this.type + " is good for you.");
}

//create a new kind of vegetable 
var carrot = new vegetable();
carrot.print();

//you can later add new properties to the constructor/prototype
vegetable.prototype.color = "generic color";
console.log(carrot.color);
console.log("");


//a harder example of inheritance:
//first define Person constructor:
var Person = function(firstName){
    this.firstName = firstName;
    //this.age = age;
}

Person.prototype.sayHello = function(){
    console.log("My name is " + this.firstName);
}

/*
Person.prototype.sayAge = function(){
    console.log("My age is " + this.age);
}
*/

//now define Student constructor:
function Student (firstName, subject){
    //this line calls the prototype constructor:
    Person.call(this, firstName);
    //Person.call(this, age);
    //and this line is a specific property for Student:
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

//replace the sayHello function with one just for Student:
Student.prototype.sayHello = function(){
    console.log("My name is " + this.firstName + 
    ". I am studying " + this.subject + ".");
}

/*
Student.prototype.sayAge = function(){
    console.log("Error-solving at age: " + this.age);
}
*/

//this all works as expected:
var student0 = new Person("Kate");
student0.sayHello();
////student0.sayAge();

//this doesn't work since you added the sayAge function
var student1 = new Student("Janet", "math");
student1.sayHello();
//student1.sayAge();

//see if the instanceof works correctly:
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);
console.log("");

//fyi if you play around with commenting out some of those blocks
//you'll get different results for the function call
//and for instanceof

//GAB you added your own sayAge function; it's not working right, though
//so play around with it. LATER: hmm.


//some random stuff: "in", hasOwnProperty, for loop

var seafood = {small: "shrimp", big: "lobster"};
console.log("small" in seafood); //ie "is small a property in seafood?" true
console.log(seafood.hasOwnProperty("toString")); 
//ie "does seafood have the toString funtion?" false

for (var item in seafood){
    console.log(item);
}
//ie, show all properties (not values) of seafood

//DO!!!
//use the debugger to solve your problem
//didn't help lol

//it works when you only have one changed parameter/function in Student
//why doesn't it work when you have two? :(