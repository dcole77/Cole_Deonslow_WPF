//Deonslow Cole, 4-27-15, Functions Assignment

//welcome user
alert("Welcome to the Marvel Hero's Game");
//prompt user to enter & validate
var champName = prompt("To begin, enter your created Super Hero Champion Name");
while (champName === ""){
    champName = prompt("To begin you must create a Super Hero Champion Name. \nWhat will your Hero Name Be?");
}
console.log(champName);
//alert user with created name welcoming to the game
alert("Welcome to the team " + champName + ". \nUltron is planning an attack on Earth and we need your help to stop him!");
//prompt user to chose their skill level, validate & declare villain level
var skillLevel = prompt("What is your skill level " + champName + "? \nPlease enter your level between 100 - 300");
while(skillLevel === ""){
    skillLevel = prompt("You can't join the fight until you select a skill level! \nYour level needs to be between 100 - 300")
}
console.log(skillLevel);
//declare villain level
var villian = 875;
