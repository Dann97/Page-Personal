import { changeColor } from "./functions/functions.js";
export const experiencie = () =>{
    let bodySection=document.querySelector('.bodySection');
    console.log(bodySection)
    bodySection.textContent="experiencie"
    let barMenu2=document.getElementById('experiencie')
    console.log(barMenu2)
    changeColor(barMenu2)
}

