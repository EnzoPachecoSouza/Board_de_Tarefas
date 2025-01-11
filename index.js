//DECLARAÇÃO DAS TAREFAS INICIAIS
//Aqui foi criado um ARRAY/LIST com os OBJETOS que representam as tarefas iniciais, e cada OBJETO
//contém: NOME, ETIQUETA e DATA

const tasks = [
    { nome: "Criar tela de Login", etiqueta: "Front-end", data: "Criado em: 21/08/2024", check: false },
    { nome: "Criar tela de Cadastro", etiqueta: "Front-end", data: "Criado em: 21/08/2024", check: false },
    { nome: "Criar Banco de Dados", etiqueta: "Back-end", data: "Criado em: 21/08/2024", check: false },
];

//-----------------------------------------------------------------------------------------------

//FUNÇÃO DE GRAVAR DADOS NO LOCAL STORAGE (armazenamento de dados via WEB)
//let tasksSalvas = JSON.parse(localStorage.getItem("tasks")) || [];
//Ele irá tentar carregar o array de tarafas salvo no LOCAL STORAGE
//Caso não exista, ele cria um Array VAZIO como Padrão

//tasksSalvas.push(taskObj);
//Adiciona a nova tarefa ao array de Tasks Salvas

//localStorage.setItem("tasks", JSON.stringify(tasksSalvas));
//Salva o Array atualizado no LOCALSTORAGE em formado de string, usando o JSON.strinfy

function gravarDadosLocalStorage(taskObj) {
    let tasksSalvas = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksSalvas.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasksSalvas));
}

//---------------------------------------------------------------------------------------------

//FUNÇÃO DE CARREGAR DADOS DO LOCAL STORAGE

//Carrega as tarefas salvas no localStorage, converte de string para objeto com JSON.parse e exibe no console.

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
        check: false
    };

    addTaskToDOM(taskObj);
    gravarDadosLocalStorage(taskObj);
    carregarDadosLocalStorage();
}

function addTaskToDOM(task) {
    const divDescricao = document.createElement("div");
    divDescricao.classList.add("task-descricao");

    const divDescricaoAbaixo = document.createElement("div");
    divDescricaoAbaixo.classList.add("descricao-abaixo");

    const titleTask = document.createElement("p");
    if (!task.check) {
        titleTask.classList.add("title-task");
    } else {
        titleTask.classList.add("title-concluido");
    }
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

    const ul = document.getElementById("list-task");
    ul.appendChild(li);
    li.appendChild(divDescricao);
    divDescricao.appendChild(titleTask);
    divDescricao.appendChild(divDescricaoAbaixo);
    divDescricaoAbaixo.appendChild(etiquetaTask);
    divDescricaoAbaixo.appendChild(dataTask);

    // li.appendChild(titleTask);
    // li.appendChild(etiquetaTask);
    // li.appendChild(dataTask);


    if (!task.check) {
        const btnConcluir = document.createElement("button");
        btnConcluir.addEventListener("click", concluirTask);
        btnConcluir.type = "button";
        btnConcluir.classList.add("btn-concluir");
        btnConcluir.innerHTML = "Concluir";

        li.appendChild(btnConcluir);
    } else {
        // const emote = document.createElement("span");
        // emote.classList.add("emote-concluido");
        // emote.innerHTML = "✅";

        const img = document.createElement("img");
        img.classList.add("img-concluido");
        img.src = "img/icone.svg";

        li.appendChild(img);
    }
}

function renderizarTarefas() {
    if (JSON.parse(localStorage.getItem("tasks")) === null) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const tarefasSalvas = JSON.parse(localStorage.getItem("tasks")) || [];

    tarefasSalvas.forEach((task) =>
        addTaskToDOM(task)
    );
    atualizarContadorTarefas();
}

function concluirTask(event) {
    const btnConcluir = event.target;
    const cardTask = btnConcluir.parentElement;

    // Atualizar o DOM
    // const emote = document.createElement("span");
    // emote.classList.add("emote-concluido");
    // emote.innerHTML = "✅";

    const img = document.createElement("img");
    img.classList.add("img-concluido");
    img.src = "img/icone.svg";

    cardTask.removeChild(btnConcluir);
    cardTask.appendChild(img);

    const titleTask = cardTask.querySelector(".title-task");
    titleTask.classList.add("title-concluido");

    // Atualizar o estado no localStorage
    const nomeTask = titleTask.innerHTML;
    let tarefasSalvas = JSON.parse(localStorage.getItem("tasks")) || [];

    tarefasSalvas = tarefasSalvas.map((task) => {
        if (task.nome === nomeTask) {
            return { ...task, check: true }; // Atualiza a tarefa como concluída
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tarefasSalvas));

    atualizarContadorTarefas();
}

function atualizarContadorTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tasks")) || [];
    const tarefasConcluidas = tarefasSalvas.filter(task => task.check).length;

    const contadorElemento = document.getElementById("completed-tasks-count");
    contadorElemento.innerHTML = tarefasConcluidas;

    localStorage.setItem("completedTasksCount", tarefasConcluidas);
}

window.onload = function () {
    renderizarTarefas();

    const contadorSalvo = localStorage.getItem("completedTasksCount") || 0;
    document.getElementById("completed-tasks-count").innerHTML = contadorSalvo;
};
