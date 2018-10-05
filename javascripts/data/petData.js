import {setPets} from '../components/petComponent.js';
function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
}

function executeThisCodeifXhrFails () {
    console.log('Looks broken');

}




const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeifXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

console.log(getPets);

export {getPets};