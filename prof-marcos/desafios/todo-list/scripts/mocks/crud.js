import database from "./dataBase.js";

const crud = {
  create: (task) => {
    const taskList = crud.read();
    const newTaskList = [...taskList, task];
    database.data = newTaskList;
    return newTaskList;
  },

  read: () => {
    const newTaskList = [...database.data];
    return newTaskList;
  },

  readById: (id) => {
    const taskList = crud.read();
    const taskFind = taskList.find((task) => {
      if (task.id === id) {
        console.log("verdadeiro");
        return true;
      } else {
        console.log("falso");
        return false;
      }
    });
    return taskFind;
  },

  update: (taskId, data) => {
    const taskList = crud.read();

    const newListTask = taskList.map((listTask) => {
      if (taskId === listTask.id) {
        const newTask = { ...listTask, ...data };
        return newTask;
      }
      return listTask;
    });
    database.data = newListTask;
  },
  delete: (taskId) => {
    const taskList = crud.read();
    const newTaskList = taskList.filter((listTask) => {
      if (taskId != listTask.id) {
        return true;
      } else {
        return false;
      }
    });
    database.data = newTaskList;
  },
};

export default crud;
