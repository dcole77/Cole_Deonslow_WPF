// Functions - Variable Scope

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