// Casting

var stingVar = "6";
var result = 7 + Number(stingVar);
                    //put Number in front of the string number in cased in parenthesis to cast(treat) it as a number
//console.log(result);

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407) 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
                    //put Sting in front of variable in cased in parenthesis to cast it as a string
console.log(phoneNo);