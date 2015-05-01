//Deonslow Cole, 4-27-15, Functions Assignment

//welcome user
alert("Welcome to The Avenger's Hero Game");
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
var weapon1 = prompt(champName + " choose your first weapon. \n1. Power Boost \n2. Partial Defense Boost");
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
        weapon2 = Number(skillLevel) + 80
    } else (weapon2 = skillLevel * .70);
console.log("You've received an additional " + weapon2 + " to your skill level with the addition of your second weapon.");
var weapon3 = prompt(champName + " choose your third weapon. \n1. Armored Suit  \n2. Proton Cannon");
weapon3 = weapon3.toLowerCase();
while (weapon3 === "") {
        weapon3 = prompt(champName + " You need something to help fight Ultron! \nChoose your third weapon for battle! \n1. Armored Suit  \n2. Proton Cannon");
    }
    if (weapon3 === "armored suit") {
        weapon3 = Number(skillLevel) + 85
    } else (weapon3 = Number(skillLevel) + 110);
console.log("Your last weapon has increased your skill level by " + weapon3 + ".");
//set up function for total skill level
var totSkillLevel = completeSkillLevel(weapon1, weapon2, weapon3);
function completeSkillLevel (w1, w2, w3){
    var total = (w1 + w2) + w3;
    return total;
}
console.log("Your total skill level is " + totSkillLevel + ".");
//prompt user to ask if they are ready to battle & validate
var battleReady = prompt("OH NO! " + champName + ", Ultron has arrived sooner than expected, now that you're equipped you'll have to face him alone. \nAre you ready to fight Ultron? \nYes or No");
battleReady = battleReady.toLowerCase();
while (battleReady === "" && (battleReady != "yes" || battleReady != "no")) {
    battleReady = prompt(champName + " You must destroy Ultron please type Yes!");
}
if (battleReady === "yes") {
    battleReady = alert("Great, your courage to take on Ultron is magnificent!");
}else prompt("There's no time for hesitation " + champName + "!! Earth is depending on you. Type yes to attack before Ultron destroys the planet!");
console.log("You're going to attack Ultron.");
//alert user they are about to attack
alert("The crowd is cheering " + champName + "!..." + champName + ", as you rush into battle!!");
//write if statement to compare skill levels to determine outcome
var outcome;
if (totSkillLevel > villain){
    alert(champName + ", your " + totSkillLevel + " total skill level is enough to destroy Ultron. \nYou've saved the world.")
}else if (outcome = prompt (champName + ", your " + totSkillLevel + " total skill level isn't enough to defeat Ultron. \nIron Man has arrived, would you like his help? \nType yes or no")){
var teamUp = (outcome === "yes") ? alert("You and Iron Man are ready to take on Ultron") : alert(champName + ", you have let the world down we are doomed!");
}
console.log(champName + " you and Iron Man are ready to team up and fight Ultron");
//declare Iron Man variable
var ironMan  = 421;
//declare anonymous function for team up
var finalTeam = function(ts, im){
    var finTeamUp = (ts + im);
    return finTeamUp
}
var finBattle = finalTeam(totSkillLevel, ironMan);
console.log(finBattle);
//write if statement to compare the team up and the villain
if (finBattle > villain && outcome === "yes"){
    alert(champName + ", you and Iron Man have done it!! \nYour combined level of " + finBattle + " was enough to destroy Ultron. The world is safe because of you!! \nThank you " + champName + ".");
}
console.log(champName + ", you and Iron Man have done it!! \nYour combined level of " + finBattle + " was enough to destroy Ultron. The world is safe because of you!! \nThank you " + champName + ".");

//I tested the calculations by inputting different numbers for the skill level starting with the lowest 100 which provided a total skill level of 405 when added together with all of the weapons. The total skill level wasn't enough and when added with the value of Iron Man the skill level became 826 which was enough to stop the villian. I tested it again by putting in the highest skill level of 300 which returned an total skill level of 1546, enough to stop the villian.