import {sortPets} from "./components/petComponent.js";

const sortEvents = () => {
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    const allButton = document.getElementById('all');
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
    allButton.addEventListener('click', sortPets);
};

export {sortEvents}