import {printToDom} from "../helpers/util.js";


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const showPets = () => {
    return pets;
};

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => {
        domString += `<div class="card border-success mb-3 pet-card">`;
        domString +=    `<div class="card-header bg-transparent border-success">${pet.name}`;
        domString +=    `<div class="card-body text-success">`;
        domString +=        `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`;        
        domString +=        `<h5 class="card-title">${pet.color}</h5>`;
        domString +=        `<p class="card-text">${pet.specialSkill}</p>`;
        domString +=    `<div class="card-footer bg-transparent border-success">${pet.type}`
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);

}

export {setPets, showPets, petsBuilder};

