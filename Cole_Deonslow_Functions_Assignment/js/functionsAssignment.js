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
var villain = 875;
//prompt user to pick weapons
var weapon1 = prompt(champName + "Choose you first weapon. \n1. Power Boost \n2. Partial Defense Boost" );
while(weapon1 === ""){
    weapon1 = prompt(champName + " You can't fight without a weapon! \nChoose your first weapon \n1. Power Boost \n2. Partial Defense Boost")
}if (weapon1 === "Power Boost"){
    weapon1 = skillLevel * .5
}else (weapon1 = skillLevel * .10);
console.log(weapon1);
var weapon2 = prompt(champName + "Choose you second weapon. \n1. Element Gun \n2. Infinity Sword" );
while(weapon2 === ""){
    weapon2 = prompt(champName + " Another weapon will greatly increase your chance of survival! \nChoose your second weapon \n1. Element Gun \n2. Infinity Sword")
}if (weapon2 === "Element Gun"){
    weapon2 = Number(skillLevel) + 120
}else (weapon2 = skillLevel * .35);
console.log(weapon2);
var weapon3 = prompt(champName + "Choose you third weapon. \n1. Armored Suit  \n2. Proton Cannon" );
while(weapon3 === ""){
    weapon3 = prompt(champName + " You need something to help fight Ultron! \nChoose your third weapon for battle! \n1. Armored Suit  \n2. Proton Cannon");
}if (weapon3 === "Armored Suit"){
        weapon3 = Number(skillLevel) + 100
    } else (weapon3 = Number(skillLevel) + 85);
console.log(weapon3);