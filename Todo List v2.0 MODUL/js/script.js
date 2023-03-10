//MODUL
const todoApp = {
	addButton: document.getElementById("todo-add-button"),
	todoContainer: document.getElementById("todo-container"),
	inputText: document.querySelector('[name="todo"]'),
	buttonTick: document.querySelector(".todo-check")
};

todoApp.addButton.addEventListener("click", (e) => {
	e.preventDefault();
	let todo = document.createElement("div");
	todo.classList.add("todo");
	liMaker(todoApp.inputText.value, todo);
	buttonCheckMaker(todo);
	buttonDeleteMaker(todo);
	if (todoApp.inputText.value === "") {
		Swal.fire({
			target: "body",
			titleText: "you have to type something",
			text: "It's look like you hadn't typed anything",
			icon: "warning",
			confirmButtonText: "Okay!"
		});
	} else {
		todoApp.todoContainer.appendChild(todo);
	}
	todoApp.inputText.value = "";
});

todoApp.inputText.addEventListener("keyup", (e) => {
	e.preventDefault();
	let todo = document.createElement("div");
	todo.classList.add("todo");
	liMaker(todoApp.inputText.value, todo);
	buttonCheckMaker(todo);
	buttonDeleteMaker(todo);
	if (todoApp.inputText.value === "" && event.keyCode == 13) {
		Swal.fire({
			target: "body",
			titleText: "you have to type something",
			text: "It's look like you hadn't typed anything",
			icon: "warning",
			confirmButtonText: "Okay!"
		});
	} else if (event.keyCode == 13) {
		todoApp.todoContainer.appendChild(todo);
		todoApp.inputText.value = "";
	}
});

todoApp.todoContainer.addEventListener("click", (e) => {
	let target = e.target;
	if (target.classList.contains("todo-delete")) {
		let items = target.parentElement;
		items.style.animation = "goAway 500ms ease";
		items.addEventListener("animationend", () => {
			items.remove();
		});
	}
	if (target.classList.contains("todo-check")) {
		let item = target.parentElement;
		item.classList.toggle("completed");
	}
});

function liMaker(text, e) {
	let li = document.createElement("li");
	li.innerText = `${text}`;
	e.appendChild(li);
}

function buttonCheckMaker(e) {
	let buttonCheck = document.createElement("button");
	buttonCheck.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"\
    stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\
    class="feather feather-check-circle">\
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\
    <polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
	buttonCheck.classList.add("todo-check");
	e.appendChild(buttonCheck);
}

function buttonDeleteMaker(e) {
	buttonDelete = document.createElement("button");
	buttonDelete.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"\
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">\
            <circle cx="12" cy="12" r="10"></circle>\
            <line x1="15" y1="9" x2="9" y2="15"></line>\
            <line x1="9" y1="9" x2="15" y2="15"></line></svg>';
	buttonDelete.classList.add("todo-delete");
	e.appendChild(buttonDelete);
}

let img = document.querySelectorAll("svg");
img.forEach((e) => {
	e.setAttribute("draggable", "false");
});
// MODUL