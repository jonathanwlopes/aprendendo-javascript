import module from "./dataBase.js";

const crud = {
  create: () => {},

  read: (dataBase) => {
    if (dataBase === "infoProducts") {
      dataBase = module.infoProducts;
      return dataBase
    } else if (dataBase === 'pageTitles') {
      dataBase = module.pageTitles;
      return dataBase
    } else {
      return 'Database não localizada.'
    }
  },

  includeMessage: ()=> {
    return module.pageTitles.data
  }
};


export default crud;
