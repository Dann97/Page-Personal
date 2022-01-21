import {asides} from './asides.js';
import {home} from './home.js'
import {experiencie} from './experiencie.js'
import {getElementById, getEventListener} from './functions/functions.js'

(function init() {
    
})(asides());


var codigoACopiar = document.getElementById('email');
console.log(codigoACopiar)
navigator.clipboard.writeText(codigoACopiar.innerHTML);



let buttonHome=getElementById('home')
getEventListener(buttonHome,home)
let buttonExp=getElementById('experiencie')
getEventListener(buttonExp,experiencie)




