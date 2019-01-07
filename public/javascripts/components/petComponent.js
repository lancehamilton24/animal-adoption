import {printToDom} from "../helpers/util.js";


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const showPets = () => {
    return pets;
};

const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
       petsBuilder(pets); 
    } if (type === 'cat'){
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } if (type === 'dog') {
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } if (type === 'dino'){
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } 
};

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => {
        domString += `<div class="col-sm-4  pet-card">`;
        domString += `<div class="card border-success">`;
        domString +=    `<div class="card-header bg-transparent border-success">${pet.name}`;
        domString +=    `<div class="card-body text-success">`;
        domString +=        `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`;        
        domString +=        `<h5 class="card-title">${pet.color}</h5>`;
        domString +=        `<p class="card-text petSkill">${pet.specialSkill}</p>`;
        domString +=    `<div class="card-footer bg-transparent border-success petType">${pet.type}`
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
        domString += `</div>`; 
        
    });
    printToDom(domString);

}

export {setPets, showPets, petsBuilder, sortPets};

