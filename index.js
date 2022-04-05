var list = [0, 3, 4, "a", 10, "asd"];

function insertMissing(index, value) {
	list.splice(index, 0, value);
}

function getListMissing(val, prevIndex) {
	let index = list.indexOf(val);

	if (val > list.length) {
		console.log("Value is greater than list length");
		return;
	}

	return index !== -1 ? getListMissing(val + 1, index) : { prevIndex, val };
}

function addMissing() {
	const missingValue = getListMissing(0);

	insertMissing(missingValue.prevIndex + 1, missingValue.val);
}

console.log("****----****");
console.log(list);
addMissing();
console.log(list);
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
addMissing();
console.log(list);
console.log("****----****");
