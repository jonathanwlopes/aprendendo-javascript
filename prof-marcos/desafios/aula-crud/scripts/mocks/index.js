const listDrivers = {
  data: [
    {
      idDriver: 1,
      fristName: "Jonathan",
      lastName: "Lopes",
      andress: {
        street: "Rua Mario Pavanello",
        number: "230",
      },
      documentCNH: 386458265,
      active: true,
    },

    {
      idDriver: 2,
      fristName: "Marcos",
      lastName: "Henrique",
      andress: {
        street: "Rua Jacarezinho",
        number: "100",
      },
      documentCNH: 323474633,
      active: true,
    },

    {
      idDriver: 3,
      fristName: "David",
      lastName: "Cordeon",
      andress: {
        street: "Rua Mar Oceanico",
        number: "250",
      },
      documentCNH: 5489851214,
      active: false,
    },
  ],
};

const crud = {
  read: () => {
    return listDrivers.data;
  },

  readById: (id) => {
    const driverFind = listDrivers.data.find(function (search) {
      if (search.idDriver === id) {
        return true;
      } else {
        return false;
      }
    });
    return driverFind;
  },
};

export default {
  listDrivers: listDrivers,
  crud: crud,
};
