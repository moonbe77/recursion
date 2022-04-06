const root = document.querySelector("#root");
const content = document.querySelector("#content");
const button = document.getElementById("add");

var list = [0, 3, 10, "asd"];

function renderList(list) {
	const listHTML = list
		.map((item, index) => {
			return `<li>${item}</li>`;
		})
		.join("");

	content.innerHTML = listHTML;
}
renderList(list);

function insertMissing(index, value) {
	list.splice(index, 0, value);
	renderList(list);
}

function getListMissing(val, prevIndex) {
	let index = list.indexOf(val);

	if (val > list.length) {
		console.log("Value is greater than list length");
		return;
	}

	if (index !== -1) {
		return getListMissing(val + 1, index);
	}
	return { prevIndex, val };
}

function addMissing() {
	const missingValue = getListMissing(0);

	insertMissing(missingValue.prevIndex + 1, missingValue.val);
}

button.addEventListener("click", addMissing);
