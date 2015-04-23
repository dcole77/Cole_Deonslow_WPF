/* Deonslow Cole 4/22/15 Conditionals Assignment*/

//ask user to enter their name & participants name in order to begin the camp registration & welcome them.
var name = prompt("To begin registering for our sports camp please enter your full name.");
if (name === ""){
    name = prompt("Ooops, you forgot something, \nPlease enter your full name in order to begin");
}
alert("Welcome " + name);

//ask user to enter the participants name
var camperName = prompt("Please enter the camper's full name.");
if (camperName === ""){
    camperName = prompt("Please enter camper's full name.")
}

//ask user ot input information about the camper; Age, Grade & Weight
var camperAge = prompt("How old is " + camperName);
if (camperAge === "") {
    camperAge = prompt("Please enter" + camperName + "'s age.");
}
var camperGrade = prompt("What grade is " + camperName + " in?");
if (camperGrade === "") {
    camperGrade = prompt("Please enter " + camperName + "'s grade.");
}
var camperWeight = prompt("How much does " + camperName + "'s weigh?");
if (camperWeight === "") {
    camperWeight = prompt("Please enter" + camperName + " weight.");

}