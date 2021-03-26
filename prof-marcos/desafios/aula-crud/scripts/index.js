import modulo from "./mocks/index.js"

const read = modulo.crud.read()
const readById = modulo.crud.readById
const arrayListDrivers = modulo.listDrivers.data

const driverSearch = readById(2)
console.log(driverSearch)

