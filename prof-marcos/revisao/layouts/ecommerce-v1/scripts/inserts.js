import crud from "./mocks/crud.js";

const inserts = {
  insertImages: (master, image) => {
    const findImages = crud.read("dataImages").find((search) => {
      if (search.imageType === image) {
        master.src = search.link;
        return true;
      } else {
        return false;
      }
    });
    return findImages;
  },

  insertTextContent: (master, text) => {
    const findText = crud.read("dataTitles").find((search) => {
      if (search.titleType === text) {
        master.textContent = search.title;
        return true;
      } else {
        master.textContent =
          "Texto requerido não encontrado, consulte administrador.";
        console.error("Texto não encontrado, consulte database e parâmetros.");
        return false;
      }
    });
    return findText;
  },
};

export default inserts;
