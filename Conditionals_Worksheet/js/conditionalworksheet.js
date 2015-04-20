/* Deonslow Cole Conditional Worksheet Created 4/19/15 */

//Celsius to Fahrenheit
var numDegree = prompt("What is the temperature outside?");
var degree = prompt("Would you like to convert it to Celsius or Fahrenheit? \nPlease enter 'C' for Celsius or 'F' for Fahrenheit");
if(degree === "C"){
        degree = (numDegree - 32) * (5/9);
    console.log("The temperature is " + degree + " degrees Celsius.")
    }

if(degree === "F"){
        degree = (numDegree * 1.8) + 32;
    console.log("The temperature is " + degree + " degrees Fahrenheit.")
    }


