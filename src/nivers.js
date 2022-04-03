import { birthday } from './data-module.js';

document.getElementById("btnniver").addEventListener("click", niver);

function niver(){
    let month = document.getElementById("mesescolhido").value
    document.getElementById("resultadoniver").innerHTML = JSON.stringify(birthday(month));
}