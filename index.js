const root = document.querySelector("#root");
const content = document.querySelector("#content");
const button = document.getElementById("add");

var list = [
	{
		name: "wave 1",
		value: 100000000,
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

list.sort((a, b) => a.name - a.name);

function renderList(values) {
	values.sort((a, b) => a.name - b.name);
	let render = values
		.map((item, index) => {
			return `<div class='item'>
			<div class="item-value" id=${index}>${item.name}</div>
			<span class='delete' id="${index}">x</span>
			</div>`;
		})
		.join("");

	content.innerHTML = render;
	document.querySelectorAll(".delete").forEach((element) => {
		element.addEventListener("click", deleteItem);
	});
	document.querySelectorAll(".item-value").forEach((el) => {
		el.addEventListener("click", changeName);
	});
}
renderList(list);

function insertMissing(index, value) {
	list.splice(index, 0, value);
	// list.sort((a, b) => {
	// 	return a.name < b.name ? -1 : 1;
	// });
	renderList(list);
}

function renameItem(index, value) {
	list[index] = { ...list[index], name: value };
	console.log(list);
	renderList(list);
}

function getListMissing(val, prevIndex) {
	if (val === 0) {
		return getListMissing(1, 0);
	}
	let index = list.indexOf(val);
	if (index === -1 && list.length === 0) {
		return { index: 0, val: val };
	}
	// find the value on the list
	const find = list.find((item, index) => {
		return item.name === `wave ${val}`;
	});

	if (val > list.length) {
		console.log("Value is greater than list length");
		return { prevIndex, val: val };
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

function deleteItem(ev) {
	const index = ev.target.id;
	list.splice(index, 1);
	renderList(list);
}

function changeName(ev) {
	const index = ev.target.id;
	// const newName = prompt("enter new name");
	ev.target.onFocus((ev.target.contentEditable = true));
	console.log(onFocus);
	//get liST item AND REPLACE IT WITH THE NEW NAME
	// renameItem(index, newName);
}

button.addEventListener("click", addMissing);

// delete items from list DONE
// change name on click over item
