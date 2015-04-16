/*Deonslow Cole 4/14/15 Expressions Assignment*/

//invite user to to enter their name.
var name = prompt ("Let's see how many calories you can burn! \nPlease enter your name.");

//use alert to say Hi to the user
alert("Hi " + name);
console.log(name);

//ask the user to enter their weight.
var weight = prompt(name + ", let's get started. \nPlease enter your weight.");
console.log(weight);

//Change user weight from pounds to kilograms
var kgWeight = weight / 2.2;
console.log(kgWeight);

//invite user to enter the time spent on activities
alert("Alright " + name + ". Please enter the hours you plan to spend on each activity in a week.");

//ask user to enter the amount of time they spend on an activity.
var yogaTime = prompt("How many hours will you spend in yoga? \nUse .5 for half; ex. 1.5");
var bikingTime = prompt("How many hours will you spend biking? \nUse .5 for half; ex. 1.5");
var walkTime = prompt("How many hours will you spend walking? \nUse .5 for half; ex. 1.5");
var runTime = prompt("How many hours will you spend jogging? \nUse .5 for half; ex. 1.5");

//calculate the total time for the week on activities
var totTime = Number(yogaTime) + Number(bikingTime) + Number(walkTime) + Number(runTime);
console.log(totTime);

//let the user know the total time they spend on weekly activities
alert(name + ", you plan on spending about " + totTime + " hours a week on these activities.");

//declare Metabolic Equivalent (MET) Values for activities
var metValues = ["yoga", "biking", "walking", "running"];

metValues[0] = 3;
metValues[1] = 8.6;
metValues[2] = 3.8;
metValues[3] = 7.5;

//alert user to see how many calories will be burned
alert(name + " are you ready to see how many calories you will burn?");

//calculate the total MET values
var totMet = metValues[0] + metValues[1] + metValues[2] + metValues[3];
console.log(totMet);

//calculate the Calories burned
var calBurned = (totMet * kgWeight) * totTime;
console.log(calBurned);

//alert user of the amount of calories burned in a week
alert("After " + totTime + " hours of activity " + name + ", you would have burned about " + calBurned + " calories in a week.");

//alert user to continue
alert("Great job " + name + "! Let's see how many calories you could burn over time.");

//ask user to enter the number of weeks they plan to keep up with the activities
var weeks = prompt("How many weeks will do you plan on doing these activities?");
console.log(weeks);

//calculate the amount of weekly calories burned
var wecalBurn = calBurned *= weeks;
console.log(wecalBurn);

//alert user of the amount of calories burned in the number of weeks
alert(name + "! After " + weeks + " weeks you could've burned about " + wecalBurn + " calories! \nNow get off the computer and get moving.");


/*To test everything, I put in my weight at 185, which equals 84.09kg. I put in 2 hours for each giving me a total of 8 hours.
    Taking the product of the weight and the total MET values and multiplying it by the total time gave me a value around 15,405
    total calories burned. Taking the total calories and multiplying it by the number of weeks gives the number of calories burned
    over a period of time.*/




