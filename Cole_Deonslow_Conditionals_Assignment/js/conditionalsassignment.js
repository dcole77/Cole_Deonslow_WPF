/* Deonslow Cole 4/22/15 Conditionals Assignment*/

//prompt user to enter their name to begin, validate & welcome them.
var name = prompt("Let's see if you are getting the recommended amount of water. \nTo begin please enter your name.");
if (name === ""){
    name = prompt("Ooops, you forgot something, \nPlease enter your name in order to begin");
}
alert("Welcome " + name + ", let's see if you are hydrated.");
console.log(name);

//prompt user to enter their age & validate.
var drinkerAge = prompt("Please enter your age.");
if (isNaN(drinkerAge)){
    drinkerAge = prompt("Please enter your age. Numbers only.");
}
console.log(drinkerAge);

//prompt user to enter if they are a male of female
var gender = prompt("Are you a Male or Female?");
if (gender === "Male"){
    alert(name + ", your fluid intake is expected to be higher than females. \nGet ready to see if you are drinking enough.");
}else{alert(name + ", your fluid intake is expected to be lower than males. \nGet ready to see if you are drinking enough.");
}
console.log(gender)
