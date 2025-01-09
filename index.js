function createTask(){
    const nameTask = document.getElementById("nameTask").value;
    const etiqueta = document.getElementById("etiqueta").value;
    const data = "Criado em: 21/08/2024"

    nameTask.classList.add("title-task");
    etiqueta.classList.add("etiqueta-task");
    data.classList.add("date-task");

    const btnConcluir = document.createElement("button");
    btnConcluir.classList.add("btn-concluir");
    btnConcluir.innerHTML = "Concluir";

    const li = document.createElement("li");
    li.classList.add("card-task");
    li.innerHTML = `
    ${nameTask} - ${etiqueta} - ${data}
    `

    const ul = document.getElementById("task-list");
    ul.appendChild(li);
    li.appendChild(btnConcluir);
}