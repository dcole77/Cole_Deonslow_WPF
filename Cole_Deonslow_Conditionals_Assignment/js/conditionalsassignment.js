/* Deonslow Cole 4/22/15 Conditionals Assignment*/

//prompt user to enter their name to begin, validate & welcome them.
var name = prompt("Let's see if you are getting the recommended amount of water. \nTo begin please enter your name.");
if (name === ""){
    name = prompt("Ooops, you forgot something, \nPlease enter your name in order to begin");
}
alert("Welcome " + name + ", let's see if you are hydrated.");
console.log(name);

//prompt user to enter their age & validate.
var drinkerAge = prompt("Please enter your age. \nYou must be older than 8");
if (isNaN(drinkerAge)){
    drinkerAge = prompt("Please enter your age. Numbers only.");
}else if (drinkerAge <= 8){
    alert("You must be older than 8 to in order to complete this!");
}else alert("Thank you " + name + ". Here comes the hard part.");
console.log(drinkerAge);

//prompt user to enter if they are a male of female
var gender = prompt("Are you a Male or Female?");
if (gender === "Male"){
    alert(name + ", your water intake is expected to be higher than females. \nGet ready to see if you are drinking enough.");
}else{alert(name + ", your water intake is expected to be lower than males. \nGet ready to see if you are drinking enough.");
}
console.log(gender);

//Delcare array of young & older males & females daily number of ounces to drink. Young males and females index 0 & 2. Older males & females index 1 & 3
var dailyOunces = [96.5, 75, 125, 91];

//Delcare an array of male or female.
var gender = ["Male", "Female"];

//prompt user to enter the number of cups they drink
var cupsToDrink = prompt(name + ", how many cups do you drink a day?");
alert(name + ", you are drinking about " + cupsToDrink * 8 + " ounces a day.");
console.log(name + ", you are drinking about " + cupsToDrink * 8 + " ounces a day.");

//alert user of the amount they should be drinking
if (gender===[0] && (drinkerAge>8 && drinkerAge<=18)) {
    alert("You should be drinking" + dailyOunces[0] / 8 + " cups a day.");
}else if (gender===[0] && (drinkerAge>9 && drinkerAge>=19)){
    alert("You should be drinking" + dailyOunces[2] / 8 + " cups a day.");
}else if (gender===[1] && (drinkerAge>8 && drinkerAge <= 18)){
    alert("You should be drinking" + dailyOunces[1] / 8 + " cups a day.");
} else (gender===[1] && (drinkerAge>9 && drinkerAge>=19))
    alert("You should be drinking" + dailyOunces[3] / 8 + " cups a day.");
console.log("You should be drinking" + dailyOunces[0] / 8 + " cups a day.");
console.log("You should be drinking" + dailyOunces[2] / 8 + " cups a day.");
console.log("You should be drinking" + dailyOunces[1] / 8 + " cups a day.");
console.log("You should be drinking" + dailyOunces[3] / 8 + " cups a day.");