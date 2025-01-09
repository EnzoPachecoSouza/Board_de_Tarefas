const form = document.getElementById("create-board-task-form");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    createTask();
});

function createTask(){
    console.log("Tarefa criada com sucesso!");
    const nameTask = document.getElementById("nameTask");
    const etiqueta = document.getElementById("etiqueta");
    const data = "Criado em: 21/08/2024"

    const titleTask = document.createElement("h2");
    titleTask.classList.add("title-task");
    titleTask.innerHTML = nameTask.value;

    const etiquetaTask = document.createElement("p");
    etiquetaTask.classList.add("etiqueta-task");
    etiquetaTask.innerHTML = etiqueta.value;

    const dataTask = document.createElement("p");
    dataTask.classList.add("date-task");
    dataTask.innerHTML = data;

    const btnConcluir = document.createElement("button");
    btnConcluir.classList.add("btn-concluir");
    btnConcluir.innerHTML = "Concluir";

    const li = document.createElement("li");
    li.classList.add("card-task");

    const ul = document.getElementById("list-task");
    ul.appendChild(li);
    li.appendChild(titleTask);
    li.appendChild(etiquetaTask);
    li.appendChild(dataTask);
    li.appendChild(btnConcluir);
}

