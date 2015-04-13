// Deonslow Cole 4/12/15 Expressions Worksheet.*/

//Dog Years

//declare the years of a human
var humYears = 1;
//declare dog years, which is human years multiplied by 7
var dogYears = humYears * 7;
//print out the output of how old Sparky is in relation to human years
console.log("Sparky is " + humYears + " human years old which is " + dogYears + " in dog years.");


//Slice of Pie part 1

//declare slices of pizza
var pizSlices = 11;
//declare number of people at the party
var partyPeople = 32;
//declare the number of pizzas ordered
var pizPies = 14;
//find the average number of slices ate by multiplying the number of slices on a pizza by the number of pizzas and divide by the number of people at the party.
var eatPizza = pizPies * pizSlices / partyPeople;
//print out the output of the number of slices each person at the party got
console.log("Each person ate" + " " + eatPizza + " " + "slices of pizza at the party.");


//Slice of Pie part 2

//Use Modulo to find the remainder of left over slices if everyone ate a even number of slices.
var eatPizza = (pizPies * pizSlices) % partyPeople;
//print out the output for the remaining number of slices that Sparky would get to eat.
console.log("Sparky got" + " " + eatPizza + " " + "slices of pizza." );


//Average shopping bill

//declare five weekly grocery bills in an array
var shopBills = [35.89, 55.37, 40.67, 75.83, 60.95];
//declare the total of the five bills
var totalBills = shopBills[0] + shopBills[1] + shopBills[2] + shopBills[3] + shopBills[4];
//declare the average of the total bills by dividing it by 5 weeks
var averageBills = totalBills / 5;
//print out the output of the average spent on weekly groceries
console.log("You have spent a total of $" + totalBills + " on groceries over 5 weeks. That is an average of $" + averageBills + " per week.");


//Discounts

//declare the item
var item = "shirt"
// the price of the item
var shirt = 88.99;
//declare the discount percentage
var discount = 35 / 100;
//declare the sales tax
var salesTax = 7.5 / 100;
//declare the amount of discount
var totalDis = shirt - (shirt * discount);
//declare the total of item with discount and tax
var totalPrice = (totalDis * salesTax) + totalDis;
//print out the output of the total of the item with the discount and sales tax
console.log("Your " + item + " was originally $" + shirt + ", but after a " + discount + "% discount, it is now $" + totalDis + " without tax, and $" + totalPrice + " with tax.");