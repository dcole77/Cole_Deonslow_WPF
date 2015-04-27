// Functions - Returning Values
/*
//basic structure of the function.
function outputMsg(){
    console.log("Hello World");
}

var width = 5; //this variable is scoped outside of the function

//function structure with the code it is to run. This will not write to console.
function calcArea(){
    var width = 20; //these variables are scoped within the function
    var height = 30;
    var area = width * height;
    console.log(area);
}
//To call the function write the function name followed by two parenthesis.
calcArea();

//will write the variable outside of the function
console.log(width)


calArea(30, 20);//30 is the first argument be in the first parameter & 20 is the second. They will be sent to the function.

function calArea(w, h){ //inside the parenthesis are the storage for the values. In this case w=30 & h=20
    var area = w * h;
    console.log(area);
}

function dogYears(age){//parameters are always in the function definition (will always hold the arguments)
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}
var age1 = 4;
dogYears(age1); //arguments (the items you are passing into the function)
dogYears(7);*/


var total = calArea(30, 20); //In order to get it to put the info out you need to assign it a variable to write it to.

function calArea(w, h){
    var area = w * h;
    return area; //function spitting the info out.
}
console.log(total);