// Functions - Function Execution

//basic structure of the function.
function outputMsg(){
    console.log("Hello World");
}

//function structure with the code it is to run. This will not write to console.
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
//To call the function write the function name followed by two parenthesis.
calcArea();