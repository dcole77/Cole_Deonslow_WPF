/*Deonslow Cole 4/14/15 Expressions Assignment*/

//invite user to to enter their name.
var name = prompt ("Let's see how many calories you can burn! \nPlease enter your name.");

//use alert to say Hi to the user
alert("Hi " + name);

//ask the user to enter their weight.
var weight = prompt(name + ", please enter your weight.");

//Change user weight from pounds to kilograms
var newWeight = weight / 2.2
console.log(newWeight)

//invite user to enter the time spent on activities
alert("Alright " + name + ". Let's get started, please enter the hours you plan to spend on each activity in a week.");

//ask user to enter the amount of time they spend on an activity.
var yogaTime = prompt("How many hours will you spend in yoga? \nUse .5 for half; ex. 1.5");
var bikingTime = prompt("How many hours will you spend biking? \nUse .5 for half; ex. 1.5");
var hikeTime = prompt("How many hours will you spend hiking? \nUse .5 for half; ex. 1.5");
var walkTime = prompt("How many hours will you spend walking? \nUse .5 for half; ex. 1.5");
var runTime = prompt("How many hours will you spend jogging? \nUse .5 for half; ex. 1.5");

//calculate the total time for the week on activities
var totTime = Number(yogaTime) + Number(bikingTime) + Number(hikeTime) + Number(walkTime) + Number(runTime)
console.log(totTime);

//let the user know the total time they spend on weekly activities
alert(name + ", You plan on spending about" + totTime + " hours a week on these activities.");