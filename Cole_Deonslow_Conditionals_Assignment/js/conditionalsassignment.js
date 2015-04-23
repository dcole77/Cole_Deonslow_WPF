/* Deonslow Cole 4/22/15 Conditionals Assignment*/

//ask user to enter their name & participants name in order to begin the camp registration, verify they are a parent or guardian & welcome them.
var name = prompt("To begin registering for our sports camp please enter your full name.");
if (name === ""){
    name = prompt("Ooops, you forgot something, \nPlease enter your full name in order to begin");
    console.log(name)
}

//ask user to enter the participants name
var camperName = prompt("Please enter the camper's full name.");
if (camperName === ""){
    camperName = prompt("Please enter camper's full name.");
    console.log(camperName)
}
//ask user to verify that they are the parent or guardian
var guardian = prompt("Are you " + camperName + "'s parent or guardian?");
if (guardian === "yes"){
    alert("Thank you " + name + ", please continue.")
}else{alert("Only " + camperName + "'s parent or guardian can fill out this information. \nPlease stop");

}
//ask user to input information about the camper; Age, Grade & Weight
var camperAge = prompt("How old is " + camperName);
if (camperAge === "") {
    camperAge = prompt("Please enter" + camperName + "'s age.");
    console.log(camperAge)
}
var camperGrade = prompt("What grade is " + camperName + " in?");
if (camperGrade === "") {
    camperGrade = prompt("Please enter " + camperName + "'s grade.");
    console.log(camperGrade)
}
var camperWeight = prompt("How much does " + camperName + " weigh?");
if (camperWeight === "") {
    camperWeight = prompt("Please enter " + camperName + " weight.");
    console.log(camperWeight)

}
//ask user to select the group they would like to participate in
var group = prompt("Which group would you like to join? \nBeginner \nIntermediate \nAdvanced");
if (group === "Beginner"){
    (camperAge >= 10 && camperAge <= 12);
    alert(camperName + " meets the age requirements to be in the Beginner group.");
}else (camperAge < 10)
    alert(camperName + "is " + 10-camperAge + " year's too young to bein this group.");
