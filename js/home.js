import { changeColor } from "./functions/functions.js";
export const home = () =>{
    let bodySection=document.querySelector('.bodySection');
    let barMenu=document.getElementById('home')
    changeColor(barMenu);
    bodySection.innerHTML=`
    <div><h1>Who am I?</h1></div>
    <div>
    I am a person with dedication who likes to be prepared for all the challenges that arise, being an optimistic, honest and collaborative person, a lover of technology in all its branches, focused on generating new skills to put it into practice in the day to day. </div>
    `;
    bodySection.style="padding:10px;display: grid; grid-template-rows: 20% 80%;"
   
}

