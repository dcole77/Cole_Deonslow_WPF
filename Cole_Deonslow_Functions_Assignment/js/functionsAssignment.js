//Deonslow Cole, 4-27-15, Functions Assignment

//welcome user
alert("Welcome to the Marvel Hero's Game");
//prompt user to enter & validate
var champName = prompt("To begin, create yourself a Super Hero Champion Name");
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
    var villain = 825;
//prompt user to pick weapons & validate
var weapon1 = prompt(champName + " choose in your first weapon. \n1. Power Boost \n2. Partial Defense Boost");
    weapon1 = weapon1.toLowerCase();
while (weapon1 === "") {
        weapon1 = prompt(champName + " You can't fight without a weapon! \nChoose your first weapon \n1. Power Boost \n2. Partial Defense Boost")
    }
    if (weapon1 === "power boost") {
        weapon1 = Number(skillLevel) + (Number(skillLevel) * .25)
    } else (weapon1 = Number(skillLevel) + (Number(skillLevel) * .15));
console.log("You received a boost of " + weapon1 + ".");
var weapon2 = prompt(champName + " choose your second weapon. \n1. Element Gun \n2. Infinity Sword");
weapon2 = weapon2.toLowerCase();
while (weapon2 === "") {
        weapon2 = prompt(champName + " Another weapon will greatly increase your chance of survival! \nChoose your second weapon \n1. Element Gun \n2. Infinity Sword")
    }
    if (weapon2 === "element gun") {
        weapon2 = Number(skillLevel) + 90
    } else (weapon2 = skillLevel * .70);
console.log("You've received an additional " + weapon2 + " to your skill level with the addition of your second weapon.");
var weapon3 = prompt(champName + " choose your third weapon. \n1. Armored Suit  \n2. Proton Cannon");
weapon3 = weapon3.toLowerCase();
while (weapon3 === "") {
        weapon3 = prompt(champName + " You need something to help fight Ultron! \nChoose your third weapon for battle! \n1. Armored Suit  \n2. Proton Cannon");
    }
    if (weapon3 === "armored suit") {
        weapon3 = Number(skillLevel) + 90
    } else (weapon3 = Number(skillLevel) + 110);
console.log("Your last weapon has increased your skill level by " + weapon3 + ".");
//set up function for total skill level
var totSkillLevel = completeSkillLevel(weapon1, weapon2, weapon3);
function completeSkillLevel (w1, w2, w3){
    var total = (w1 + w2) + w3;
    return total
}
console.log("Your total skill level is " + totSkillLevel + ".");
//prompt user to ask if they are ready to battle & validate
var battleReady = prompt("OH NO! " + champName + ", Utron has arrived sooner than expected, now that you're equipped you'll have to face him. \nAre you ready to fight Ultron? \nYes or No");
battleReady = battleReady.toLowerCase();
while (battleReady === "" && battleReady != "yes" || battleReady != "no") {
    battleReady = prompt(champName + " You must type Yes or No!");
}
if (battleReady === "yes") {
    battleReady = prompt("Type Attack to take on Ultron");
} else prompt("There's no time for hesitation " + champName + " Earth is depending on you. Type Attack before Ultron destroys the planet!");
console.log("You're going to attack Ultron.");