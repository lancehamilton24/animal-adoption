import {setPets, showPets, petsBuilder} from '../components/petComponent.js';
function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(showPets());
}

function executeThisCodeifXhrFails () {
    console.log('Looks broken');

}




const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeifXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getPets};