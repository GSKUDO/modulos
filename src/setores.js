import { sectorsearch } from './data-module.js';

document.getElementById("btnsetor").addEventListener("click", setor);

function setor(){
    let sectorlooked = document.getElementById("camposetor").value
    document.getElementById("resultadosetor").innerHTML = JSON.stringify(sectorsearch(sectorlooked));
}
