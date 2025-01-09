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

    const li = document.createElement("li");
    li.classList.add("card-task");

    const btnConcluir = document.createElement("button");
    btnConcluir.addEventListener("click", concluirTask);
    btnConcluir.type = "button";
    btnConcluir.classList.add("btn-concluir");
    btnConcluir.innerHTML = "Concluir";
    
    const ul = document.getElementById("list-task");
    ul.appendChild(li);
    li.appendChild(titleTask);
    li.appendChild(etiquetaTask);
    li.appendChild(dataTask);
    li.appendChild(btnConcluir);
}

// function concluirTask(){
// alert("Tarefa concluída com sucesso!");

// const btnConcluir = document.getElementsByClassName("btn-concluir");
// const titleTask = document.getElementsByClassName("title-task");

//     console.log(btnConcluir, titleTask);

//     titleTask.classList.add("title-concluido");

//     btnConcluir.style.display = "none";
// }

function concluirTask(event) {
    alert("Tarefa concluída com sucesso!");

    // Obter o botão que disparou o evento
    const btnConcluir = event.target;

    // Obter o elemento da tarefa (li) que contém o botão
    const cardTask = btnConcluir.parentElement;

    // Substituir o botão por um emote
    const emote = document.createElement("span");
    emote.classList.add("emote-concluido");
    emote.innerHTML = "✅"; // Substitua pelo emote que você tem salvo

    // Remover o botão e adicionar o emote
    cardTask.removeChild(btnConcluir);
    cardTask.appendChild(emote);

    // Adicionar a classe de estilo ao título da tarefa
    const titleTask = cardTask.querySelector(".title-task");
    titleTask.classList.add("title-concluido");
}


