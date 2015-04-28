//Deonslow Cole, 4-27-15, Functions Worksheet

//Circumference
//declare a variable to hold the arguments
var totalRadius =  calCircumference(10.2);
//declare the function
function calCircumference (r){
    var circumference = 2 * 3.14 * r;
    return circumference;
}
console.log("The circumference of the circle is " + totalRadius);


//Stung Problem
//declare variable for argument
var totalWeight = vicWeight (125);
//declare function for bee sting
function vicWeight (wt){
    var stings = 8.666666667 * wt;
    return stings;
}
console.log("It take " + totalWeight + " bee stings to kill this animal.")