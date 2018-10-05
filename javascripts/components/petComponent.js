// import {printToDom} from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const showPets = () => {
    return pets;
};



export {setPets, showPets};
