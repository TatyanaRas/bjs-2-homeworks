function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}


Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return;

    }
		if (!!marksToAdd.length) {
			this.marks.push(...marksToAdd)
		}

		return;
	}

	Student.prototype.getAverage = function() {
		if (!this.marks || !this.marks.length) {
			return 0;
		} else {
			return this.marks.reduce((acc, curr) => acc + curr / this.marks.length, 0);
		}
	}

	Student.prototype.exclude = function(reason) {
		delete this.subjectName;
		delete this.marks;
		this.excluded = reason;

	}
