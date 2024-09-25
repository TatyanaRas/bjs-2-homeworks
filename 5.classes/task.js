//задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {

		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;

	}
	fix() {
		this.state = this.state * 1.5;
	}


	set state(number) {

		if (number < 0) {
			this.State = 0;
		}
		if (number > 100) {
			this.State = 100;
		} else { this.State = number;
	}
}

get state() {
	return this.State;
}
}


class Magazine extends PrintEditionItem {

	constructor(type, name, releaseDate, pagesCount) {
		super(type, name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, type, name, releaseDate, pagesCount) {//
		super(type, name, releaseDate, pagesCount);
		this.type = "book";
        this.author = author;
	}
}
class NovelBook extends Book {
	constructor(author, type, name, releaseDate, pagesCount) {
		super(author, type, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}
	class FantasticBook extends Book {
		constructor(author, type, name, releaseDate, pagesCount) {
			super(author, type, name, releaseDate, pagesCount);
			this.type = "fantastic";
		}
    }
		class DetectiveBook extends Book {
			constructor(author, type, name, releaseDate, pagesCount) {
				super(author, type, name, releaseDate, pagesCount);
				this.type = "detective";
			}
		}
//задача 2      

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}

	findBookBy(type, value) {
	let findBook = this.books.find(book => book[type] === value);
if (typeof findBook === 'object' ) {
return  findBook;
}
else {
	return null;
}
	}


	giveBookByName(bookName){
		let giveBook = this.books.find(book => book.name === bookName);
		if (typeof giveBook === 'object') {

			let index = this.books.indexOf(giveBook);
            this.books.splice(index, 1);	
			return giveBook;
		}
		else {
			return null;
		}

	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3