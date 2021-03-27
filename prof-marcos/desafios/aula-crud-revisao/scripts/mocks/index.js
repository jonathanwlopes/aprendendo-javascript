const driverList = {
  data: [
    {
      idDriver: 1,
      fristName: "Jonathan",
      lastName: "Lopes",
      adress: {
        street: "Rua Mario Pavanello",
        number: 230,
      },
      documentCNH: 894357167,
      imageProfile: "#",
    },
    {
      idDriver: 2,
      fristName: "Marcos",
      lastName: "Henrique",
      adress: {
        street: "Rua Jacarezinho",
        number: 640,
      },
      documentCNH: 864257964,
      imageProfile: "#",
    },
  ],
};

const crud = {
  read: () => {
    const listDriver = driverList.data;
    return listDriver;
  },

  readById: (search) => {
    const objectFound = driverList.data.find((id) => {
      if (id.idDriver === search) {
        return true;
      } else {
        return  false;
      }
    });
    return objectFound;
  },
};

export default {
  driverList: driverList,
  crud: crud,
};
