//Задача 1
function parseCount(result) {
	let result_parsing = Number.parseFloat(result);
	if (Number.isNaN(result_parsing)) {
		throw new Error(`Невалидное значение`);
	}
	return result_parsing;
}


function validateCount(result) {
	try {
		let result_parsing2 = parseCount(result);
		return result_parsing2;
	} catch (error) {
		return error;
	}
}

//Задача 2
class Triangle {
	constructor(side1, side2, side3) {

		if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
			throw new Error(`Треугольник с такими сторонами не существует`);
		}

		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	get perimeter() {
		return this.side1 + this.side2 + this.side3;
	}

	get area() {
		let peri = this.perimeter / 2;

		let area = Math.sqrt(peri * (peri - this.side1) * (peri - this.side2) * (peri - this.side3));
		return +area.toFixed(3);
	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);

	} catch (error) {
		return {
			get perimeter() {
				return `Ошибка! Треугольник не существует`;
			},
			get area() {
				return `Ошибка! Треугольник не существует`;
			}
		};
	}
}