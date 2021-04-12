import createElement from "./mocks/createElement.js";
import crud from "./mocks/crud.js";

const createMain = () => {
  const master = document.body;
  const main = createElement(master, "main", ["container"]);
  createSection(main);
};

const createSection = (master) => {
  const section = createElement(master, "section", ["panel"]);
  createHeader(section);
  const panelTodo = createElement(section, "div", ["panel-todo"]);
  btnNewTask(panelTodo);
  const ul = createElement(panelTodo, "ul", ["list-tasks"]);
  printTasks();
};

const createHeader = (master) => {
  const header = createElement(master, "header", ["header"]);
  const icon = createElement(header, "i", [
    "fas-list-style",
    "fas",
    "fa-list-ul",
    "fa-lg",
  ]);
  const h2 = createElement(header, "h2", ["title-text"]);
  h2.textContent = "Website todo";

  master.appendChild(header);
};

const btnNewTask = (master) => {
  const btnNewTask = createElement(master, "button", ["btn-new-task"]);
  const icon = createElement(btnNewTask, "i", [
    "fas-btn-plus",
    "fas",
    "fa-plus",
  ]);
  const span = createElement(btnNewTask, "span", ["text-btn-new"]);
  span.textContent = " New Task";
  btnNewTask.addEventListener("click", (event) => {
    event.preventDefault();
    btnNewTask.remove();
    btnConfirm(master);
    createInputs(master);
  });
};

const btnConfirm = (master) => {
  const btnConfirm = createElement(master, "button", ["btn-confirm-task"]);
  const span = createElement(btnConfirm, "span", ["text-btn-confirm"]);
  span.textContent = " CONFIRM";
  btnConfirm.addEventListener("click", () => {
    const $inputId = document.querySelector(".new-task-inputId");
    const $input = document.querySelector(".new-task-input");
    const $panelInputs = document.querySelector(".panel-inputs");

    const newTask = {
      id: Number($inputId.value),
      task: $input.value,
    };

    const verifyId = crud.readById(newTask.id);
    if (verifyId != undefined) {
      console.error("ID JA EXISTE NO BANCO DE DADOS");
      const btnIdExist = createElement(master, "button", ["id-exist"]);
      const idExist = createElement(btnIdExist, "span", ["text-id-exist"]);
      idExist.textContent = "Atenção a tarefa não foi adicionada!";

      setTimeout(function () {
        btnIdExist.remove();
      }, 3000);
    } else {
      crud.create(newTask);
    }

    $panelInputs.remove();
    btnConfirm.remove();
    btnNewTask(master);
    printTasks();
  });
};

const printTasks = () => {
  const $ul = document.querySelector(".list-tasks");
  $ul.innerHTML = ``;
  crud.read().forEach((array) => {
    const wrapperList = createElement($ul, "div", ["wrapper-list-tasks"]);
    const checkbox = createElement(wrapperList, "input", ["checkbox"]);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", array.id);
    const label = createElement(wrapperList, "label", ["tasks-text"]);
    label.setAttribute("for", array.id);
    label.textContent = array.task;
    const iconRemove = createElement(wrapperList, "i", [
      "far-remove-style",
      "far",
      "fa-trash-alt",
      "fa-lg",
    ]);
    iconRemove.addEventListener("click", () => {
      crud.delete(array.id);
      printTasks();
    });

    checkbox.addEventListener("click", () => {
      if (checkbox.checked == true) {
        const $btnNewTask = document.querySelector(".btn-new-task");
        iconRemove.remove();
        $btnNewTask.remove();
        label.style = "text-decoration: line-through";
        const $panelTodo = document.querySelector(".panel-todo");
        createInputUpdate($panelTodo);
        const $panelInputs = document.querySelector(".panel-inputs");
        const $input = document.querySelector(".new-task-input");
        $input.value = array.task;
        $input.addEventListener("focusout", () => {
          crud.update(array.id, { task: $input.value });
          $panelInputs.remove();
          printTasks();
          btnNewTask($panelTodo);
        });
      } else {
        label.style = "text-decoration: none";
      }
    });
  });
};

const createInputs = (master) => {
  const panelInputs = createElement(master, "div", ["panel-inputs"]);
  const h2 = createElement(panelInputs, "h2", ["title-new-task"]);
  h2.textContent = "Type it new task in the field below";
  const inputId = createElement(panelInputs, "input", ["new-task-inputId"]);
  inputId.setAttribute("placeholder", "Type ID");
  inputId.setAttribute("type", "number");
  const input = createElement(panelInputs, "input", ["new-task-input"]);
  input.setAttribute("placeholder", "Type the task");
  input.setAttribute("id", "new-task-input");
  input.setAttribute("type", "text");
  input.setAttribute("required", "required");
};

const createInputUpdate = (master) => {
  const panelInputs = createElement(master, "div", ["panel-inputs"]);
  const h2 = createElement(panelInputs, "h2", ["title-new-task"]);
  h2.textContent = "Type it updated text";
  const input = createElement(panelInputs, "input", ["new-task-input"]);
  input.setAttribute("id", "new-task-input");
  input.setAttribute("type", "text");
  input.setAttribute("required", "required");
};

export default {
  createMain,
  createSection,
  createHeader,
  createInputs,
  createBtnConfirm: btnConfirm,
};
