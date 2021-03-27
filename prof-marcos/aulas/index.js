const dataBaseParent = {
  data: [
    {
      id: 1,
      name: "Jonathan",
      age: 27,
    },
    {
      id: 2,
      name: "Marcos",
      age: 30,
    },
  ],
  read: () => {
    return dataBaseParent.data;
  },

  readByID: (id) => {
    // let parentFind = null;
    // for (const parent of dataBaseParent.data) {
    //   if (id === parent.id) {
    //     parentFind = parent;
    //   }
    // }
    // return parentFind;
  },

};

const parent = dataBaseParent.readByID(1);
console.log(parent);
