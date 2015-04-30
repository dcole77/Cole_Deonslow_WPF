//Deonslow Cole, 4-27-15, Functions Assignment

//welcome user
alert("Welcome to the Marvel Hero's Game");
//prompt user to enter & validate
var champName = prompt("To begin, enter your created Super Hero Champion Name");
while (champName === ""){
    champName = prompt("To begin you must create a Super Hero Champion Name. \nWhat will your Hero Name Be?");
}
console.log("Your hero name is " + champName + ".");
//alert user with created name welcoming to the game
alert("Welcome to the team " + champName + ". \nUltron is planning an attack on Earth and we need your help to stop him!");
//prompt user to chose their skill level, validate & declare villain level
var skillLevel = prompt("What is your skill level " + champName + "? \nPlease enter your level between 100 - 300");
while(skillLevel === ""){
    skillLevel = prompt("You can't join the fight until you select a skill level! \nYour level needs to be between 100 - 300")
}if (skillLevel < 100 || skillLevel > 300){
    skillLevel = prompt(champName + ", in order to join the fight your skill level must be between 100 - 300")
}while (skillLevel < 100 || skillLevel > 300){
    skillLevel = prompt(champName + ", in order to join the fight your skill level must be between 100 - 300")
}
console.log("Your skill level is " + skillLevel + ".");
//declare villain level
    var villain = 875;
//prompt user to pick weapons & validate
var weapon1 = prompt(champName + "Choose you first weapon. \n1. Power Boost \n2. Partial Defense Boost");
    weapon1 = weapon1.toLowerCase();
while (weapon1 === "") {
        weapon1 = prompt(champName + " You can't fight without a weapon! \nChoose your first weapon \n1. Power Boost \n2. Partial Defense Boost")
    }
    if (weapon1 === "power boost") {
        weapon1 = skillLevel * .5
    } else (weapon1 = skillLevel * .10);
console.log("You received a boost of " + weapon1 + ".");
var weapon2 = prompt(champName + "Choose you second weapon. \n1. Element Gun \n2. Infinity Sword");
weapon2 = weapon2.toLowerCase();
while (weapon2 === "") {
        weapon2 = prompt(champName + " Another weapon will greatly increase your chance of survival! \nChoose your second weapon \n1. Element Gun \n2. Infinity Sword")
    }
    if (weapon2 === "element gun") {
        weapon2 = Number(skillLevel) + 120
    } else (weapon2 = skillLevel * .45);
console.log("You've received an additional " + weapon2 + " to your skill level with the addition of your second weapon.");
var weapon3 = prompt(champName + "Choose you third weapon. \n1. Armored Suit  \n2. Proton Cannon");
weapon3 = weapon3.toLowerCase();
while (weapon3 === "") {
        weapon3 = prompt(champName + " You need something to help fight Ultron! \nChoose your third weapon for battle! \n1. Armored Suit  \n2. Proton Cannon");
    }
    if (weapon3 === "armored suit") {
        weapon3 = Number(skillLevel) + 100
    } else (weapon3 = Number(skillLevel) + 90);
console.log("Your last weapon has increased your skill level by " + weapon3 + ".");