const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
let botaoRemover = document.querySelector(".botao__remover")

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
	const deleteField = document.getElementById('delete-input');
	removeChild(deleteInput.value);
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

botaoRemover.addEventListener("click", () => {
	let valorDoInput = document.querySelector("#tarefa").value;
	if (itemClicado == false) {
		if (valorDoInput == '' || valorDoInput == null) {
			alert("Digite alguma tarefa a ser excluída.");
			return;
		}
		let item = document.querySelectorAll("ul .lista__itens");
		item.forEach((elemento) => {
			if (valorDoInput === elemento.textContent) {
				listaDeItens.removeChild(elemento);
				document.querySelector("#tarefa").value = '';
			}
		})
	})	