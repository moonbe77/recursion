const root = document.querySelector("#root");
const content = document.querySelector("#content");
const button = document.getElementById("add");

var list = [
	{
		name: "wave 1",
		value: 100,
	},
	{
		name: "wave 2",
		value: 200,
	},
	{
		name: "bungalo",
		value: 300,
	},
	{
		name: "wave 7",
		value: 564300,
	},
	{
		name: "mutilo",
		value: 30054,
	},
];

list.sort((a, b) => {
	return a.name < b.name ? -1 : 1;
});

function renderList(values) {
	console.log("RENDER LIST", values);
	let render = values
		.map((item, index) => {
			return `<li>${item.name}</li>`;
		})
		.join("");

	content.innerHTML = render;
}
renderList(list);

function insertMissing(index, value) {
	list.splice(index, 0, value);
	list.sort((a, b) => {
		return a.name < b.name ? -1 : 1;
	});
	renderList(list);
}

function getListMissing(val, prevIndex) {
	let index = list.indexOf(val);
	// find the value on the list
	const find = list.find((item, index) => {
		return item.name === `wave ${val}`;
	});

	if (val > list.length) {
		console.log("Value is greater than list length");
		return { prevIndex, val: val + 1 };
	}

	if (find !== undefined) {
		return getListMissing(val + 1, index);
	}
	return { prevIndex, val };
}

function addMissing() {
	const missingValue = getListMissing(1);

	insertMissing(missingValue.prevIndex + 1, {
		name: `wave ${missingValue.val}`,
		value: 0,
	});
}

button.addEventListener("click", addMissing);
