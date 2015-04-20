/* Deonslow Cole Conditional Worksheet Created 4/19/15 */

//Celsius to Fahrenheit
/*var numDegree = prompt("What is the temperature outside?");
var degree = prompt("Would you like to convert it to Celsius or Fahrenheit? \nPlease enter 'C' for Celsius or 'F' for Fahrenheit");
if(degree === "C"){
        degree = (numDegree - 32) * (5/9);
    console.log("The temperature is " + degree + " degrees Celsius.")
    }

if(degree === "F"){
        degree = (numDegree * 1.8) + 32;
    console.log("The temperature is " + degree + " degrees Fahrenheit.")
    }*/

//Last Chance for Gas

/*var gasEfficiency = 30;
var gasTank = .75;
var gasCapacity = 20;
if (gasCapacity * gasTank * gasEfficiency > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else {
    console.log("You only have " + (gasCapacity * gasTank) + " gallons of gas in your tank, better get gas now while you can!");
}*/

//Check the Login
var userName = prompt("Please enter your User Name");
var userPass = prompt("Please enter your Password");
var corName = "FullSail15";
var corPass = "Welcome1";
if(userName === corName && userPass === corPass){
    console.log("Welcome, " + userName + "!");
}else if (userName != corName){
    console.log("User not found!");
}else {
    console.log("Password does not match our records.")
}