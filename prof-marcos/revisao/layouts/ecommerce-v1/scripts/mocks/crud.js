import module from "./dataBase.js";

const crud = {
  create: () => {},

  read: (dataBase) => {
    if (dataBase === "dataTitles") {
      return module.dataTitles.data;
    } else if (dataBase === "dataImages") {
      return module.dataImages.data;
    } else if (dataBase === "dataProducts") {
      return module.dataProducts.data;
    } else {
      return console.error("Data base não localizada");
    }
  },

  readMessageById: (master, id) => {
    const findMessage = module.dataTitles.data.find(function (search) {
      if (search.id === id) {
        return (master.textContent = search.message);
      } else {
        return false;
      }
    });
    return findMessage;
  },
};

export default crud;
