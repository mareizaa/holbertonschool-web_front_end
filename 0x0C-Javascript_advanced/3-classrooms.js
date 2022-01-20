function createClassRoom(numbersOfStudents) {

	function studentSeat(seat) {
		return function () {
			return seat;
		};
	}

	const students = [];
	let i = 0;

	for (i; i <= numbersOfStudents; i++) {
		students.push(studentSeat(i + 1));
	}

	return students;
}

var classRoom = createClassRoom(10);
