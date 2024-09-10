"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 -4 * a * c;
	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
		
	} else if (d === 0) {
		arr[0] = -b / (2 * a);
		
	} else {
		arr = [];
			}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let perCent = parseInt(percent) / 100 / 12;//ставка в месяц
	let contr = parseInt(contribution);
	let amt = parseInt(amount);
	let count = parseInt(countMonths);

	
	let loanBody = amt - contr; //тело кредита

	let payment = loanBody * (perCent + (perCent / (((1 + perCent) ** count) - 1))); //Ежемесячная оплата 

	let totalAmount = (payment * count).toFixed(2);
	
	console.log(totalAmount);
	return +(totalAmount);
}




