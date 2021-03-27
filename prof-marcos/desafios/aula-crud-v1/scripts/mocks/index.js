const listDrivers = {
  data: [
    {
      cnh: 587324741,
      image: "https://templates-preview.com/gitex/images/profile-18.png",
      name: "Juliana Fagundes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias ipsum et alias qui architecto, exercitationem magni sunt cupiditate ea fugiat officiis pariatur quaerat harum delectus cum corrupti inventore omnis.",
      ratings: 4.5,
      aceptRate: 80,
      cancelRate: 7,
      trips: 5.635,
      years: 4,
      active: (param) =>{
        if(param == 'ativo'){
          return 'ativo'
        } else{
          return 'desativado'
        }
      }
    },

    {
      cnh: 854102765,
      image: "https://templates-preview.com/gitex/images/profile-18.png",
      name: "Patricia Fagundes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias ipsum et alias qui architecto, exercitationem magni sunt cupiditate ea fugiat officiis pariatur quaerat harum delectus cum corrupti inventore omnis.",
      ratings: 4.5,
      aceptRate: 80,
      cancelRate: 7,
    },

    {
      cnh: 204785369,
      image: "https://templates-preview.com/gitex/images/profile-18.png",
      name: "Rebeca Fagundes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias ipsum et alias qui architecto, exercitationem magni sunt cupiditate ea fugiat officiis pariatur quaerat harum delectus cum corrupti inventore omnis.",
      ratings: 4.5,
      aceptRate: 80,
      cancelRate: 7,
    },
  ],
};

const crud = {
  read: () => {
    for (const drivers of listDrivers) {
      return drivers;
    }
  },
  readByCNH: (cnh) => {
    const foundCNH = listDrivers.data.find((parm) => {
      if (parm.cnh === cnh) {
        return true;
      } else {
        return false;
      }
    });
    return foundCNH;
  },
};

export default {
  listDrivers: listDrivers,
  crud: crud,
};
