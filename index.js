// const tasks = [
//     { nome: "Criar tela de Login", etiqueta: "Front-end", data: "Criado em: 21/08/2024" },
//     { nome: "Criar tela de Cadastro", etiqueta: "Front-end", data: "Criado em: 21/08/2024" },
//     { nome: "Criar Banco de Dados", etiqueta: "Back-end", data: "Criado em: 21/08/2024" },
// ]

// function gravarDadosLocalStorage(taskObj) {
//     let tasksSalves = JSON.parse(localStorage.getItem("tasks"));
//     tasksSalves.push(taskObj);

//     localStorage.setItem("tasks", JSON.stringify(tasksSalves));
// }

// function carregarDadosLocalStorage() {
//     console.log("task", JSON.parse(localStorage.getItem("tasks")));
// }

// const form = document.getElementById("create-board-task-form");

// form.addEventListener("submit", function (evento) {
//     evento.preventDefault();
//     createTask();
// });

// function createTask() {
//     console.log("Tarefa criada com sucesso!");
//     const nameTask = document.getElementById("nameTask");
//     const etiqueta = document.getElementById("etiqueta");
//     const data = "Criado em: 21/08/2024"

//     const titleTask = document.createElement("h2");
//     titleTask.classList.add("title-task");
//     titleTask.innerHTML = nameTask.value;
//     // titleTask.innerHTML = task.nome;

//     const etiquetaTask = document.createElement("p");
//     etiquetaTask.classList.add("etiqueta-task");
//     etiquetaTask.innerHTML = etiqueta.value;
//     // etiquetaTask.innerHTML = task.etiqueta;

//     const dataTask = document.createElement("p");
//     dataTask.classList.add("date-task");
//     dataTask.innerHTML = "Criado em: 21/08/2024";
//     // dataTask.innerHTML = task.data;

//     const li = document.createElement("li");
//     li.classList.add("card-task");

//     const btnConcluir = document.createElement("button");
//     btnConcluir.addEventListener("click", concluirTask);
//     btnConcluir.type = "button";
//     btnConcluir.classList.add("btn-concluir");
//     btnConcluir.innerHTML = "Concluir";

//     const ul = document.getElementById("list-task");
//     ul.appendChild(li);
//     li.appendChild(titleTask);
//     li.appendChild(etiquetaTask);
//     li.appendChild(dataTask);
//     li.appendChild(btnConcluir);

//     const taskObj = {
//         nome: nameTask.value,
//         etiqueta: etiqueta.value,
//         data: data
//     }

//     gravarDadosLocalStorage(taskObj);
//     carregarDadosLocalStorage();
// }

// function renderizarTarefas() {
//     const renderizar = JSON.parse(localStorage.getItem("tasks"));
//     renderizar.map((task) => {
//         console.log("Renderizar Tarefa", task.nome, task.etiqueta, task.data);
//         const titleTask = document.createElement("h2");
//         titleTask.classList.add("title-task");
//         // titleTask.innerHTML = nameTask.value;
//         titleTask.innerHTML = task.nome;

//         const etiquetaTask = document.createElement("p");
//         etiquetaTask.classList.add("etiqueta-task");
//         // etiquetaTask.innerHTML = etiqueta.value;
//         etiquetaTask.innerHTML = task.etiqueta;

//         const dataTask = document.createElement("p");
//         dataTask.classList.add("date-task");
//         // dataTask.innerHTML = "Criado em: 21/08/2024";
//         dataTask.innerHTML = task.data;

//         const li = document.createElement("li");
//         li.classList.add("card-task");

//         const btnConcluir = document.createElement("button");
//         btnConcluir.addEventListener("click", concluirTask);
//         btnConcluir.type = "button";
//         btnConcluir.classList.add("btn-concluir");
//         btnConcluir.innerHTML = "Concluir";

//         const ul = document.getElementById("list-task");
//         ul.appendChild(li);
//         li.appendChild(titleTask);
//         li.appendChild(etiquetaTask);
//         li.appendChild(dataTask);
//         li.appendChild(btnConcluir);
//     })
// }

// function concluirTask(event) {
//     alert("Tarefa concluída com sucesso!");

//     // Obter o botão que disparou o evento
//     const btnConcluir = event.target;

//     // Obter o elemento da tarefa (li) que contém o botão
//     const cardTask = btnConcluir.parentElement;

//     // Substituir o botão por um emote
//     const emote = document.createElement("span");
//     emote.classList.add("emote-concluido");
//     emote.innerHTML = "✅"; // Substitua pelo emote que você tem salvo

//     // Remover o botão e adicionar o emote
//     cardTask.removeChild(btnConcluir);
//     cardTask.appendChild(emote);

//     // Adicionar a classe de estilo ao título da tarefa
//     const titleTask = cardTask.querySelector(".title-task");
//     titleTask.classList.add("title-concluido");

//     countTask++;
// }

// window.onload = function() {
//     renderizarTarefas();
// };

//DECLARAÇÃO DAS TAREFAS INICIAIS
//Aqui foi criado um ARRAY/LIST com os OBJETOS que representam as tarefas iniciais, e cada OBJETO
//contém: NOME, ETIQUETA e DATA

const tasks = [
    { nome: "Criar tela de Login", etiqueta: "Front-end", data: "Criado em: 21/08/2024" },
    { nome: "Criar tela de Cadastro", etiqueta: "Front-end", data: "Criado em: 21/08/2024" },
    { nome: "Criar Banco de Dados", etiqueta: "Back-end", data: "Criado em: 21/08/2024" },
];

//-----------------------------------------------------------------------------------------------

//FUNÇÃO DE GRAVAR DADOS NO LOCAL STORAGE (armazenamento de dados via WEB)
//

function gravarDadosLocalStorage(taskObj) {
    let tasksSalvas = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksSalvas.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasksSalvas));
}

function carregarDadosLocalStorage() {
    console.log("Tasks:", JSON.parse(localStorage.getItem("tasks")));
}

const form = document.getElementById("create-board-task-form");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    createTask();
});

function createTask() {
    console.log("Tarefa criada com sucesso!");
    const nameTask = document.getElementById("nameTask").value;
    const etiqueta = document.getElementById("etiqueta").value;
    const data = "Criado em: 21/08/2024";

    const taskObj = {
        nome: nameTask,
        etiqueta: etiqueta,
        data: data,
    };

    addTaskToDOM(taskObj);
    gravarDadosLocalStorage(taskObj);
    carregarDadosLocalStorage();
}

function addTaskToDOM(task) {
    const titleTask = document.createElement("h2");
    titleTask.classList.add("title-task");
    titleTask.innerHTML = task.nome;

    const etiquetaTask = document.createElement("p");
    etiquetaTask.classList.add("etiqueta-task");
    etiquetaTask.innerHTML = task.etiqueta;

    const dataTask = document.createElement("p");
    dataTask.classList.add("date-task");
    dataTask.innerHTML = task.data;

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

function renderizarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tasks")) || [];
    tarefasSalvas.forEach((task) => addTaskToDOM(task));
}

function concluirTask(event) {
    alert("Tarefa concluída com sucesso!");

    const btnConcluir = event.target;
    const cardTask = btnConcluir.parentElement;

    const emote = document.createElement("span");
    emote.classList.add("emote-concluido");
    emote.innerHTML = "✅";

    cardTask.removeChild(btnConcluir);
    cardTask.appendChild(emote);

    const titleTask = cardTask.querySelector(".title-task");
    titleTask.classList.add("title-concluido");
}

window.onload = function () {
    renderizarTarefas();
};
