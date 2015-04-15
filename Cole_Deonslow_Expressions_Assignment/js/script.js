//Deonslow Cole 4/14/15 Expressions Assignment*/

alert("Lets see how many calories you can burn?"); //ask the user if they want to see how many calories they can burn.
var weight = prompt("Enter your weight"); //ask the user to enter their weight.
var time = prompt("Enter the number of hours you plan on working out. \nFor half hour enter .5 \nex. 2 and a half hours is 2.5"); //ask user to enter the amount of time they will work out.
var activityOne = prompt("Enter your first activity from below: \nAerobics \nYoga \nNone" ); //ask user to chose their first activity.
var activityTwo = prompt("Enter your second activity from below: \nBiking \nWalking \nNone"); //ask user to chose their second activity.
var activityThree = prompt("Enter your third activity from below: \nHiking \nRunning \nNone"); //ask user to chose their third activity.
var activityFour = prompt("Enter your fourth activity from below \nCardio Equipment \nDancing \nNone"); //ask user to chose their fourth activity.
var activities = ["Aerobics", "Yoga", "Biking", "Walking", "Hiking", "Running", "Cardio Equipment", "Dancing", "None"]; //declare Metabolic Equivalent Values (MET) to each activity through arrays.
activities[0] = 6.83;
activities[1] = 3;
activities[2] = 8.6;
activities[3] = 3.8;
activities[4] = 6;
activities[5] = 7.5;
activities[6] = 8;
activities[7] = 4.5;
activities[8] = 0;
