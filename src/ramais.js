import { extensionsearch } from './data-module.js';

document.getElementById("btnramais").addEventListener("click", ramal);

function ramal(){
    let extensionlooked = document.getElementById("camporamais").value
    document.getElementById("resultadoramais").innerHTML = JSON.stringify(extensionsearch(extensionlooked));
}
