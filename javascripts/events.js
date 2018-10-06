import {sortPets} from "./components/petComponent.js";

const sortEvents = () => {
    const catButton = document.getElementById('catButton');
    const dogButton = document.getElementById('dogButton');
    const dinoButton = document.getElementById('dinoButton');
    const allButton = document.getElementById('all');
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
    allButton.addEventListener('click', sortPets);
};

export {sortEvents}