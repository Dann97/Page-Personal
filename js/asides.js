import {personData} from './personData.js'
export const asides = function () {
    let aside = document.getElementById('aside');

    let divHeadAside = document.createElement('div');
    divHeadAside.className = "divAvatar"
    let divBodyAside = document.createElement('div');
    divBodyAside.className = 'bodyAside';
    let img = document.createElement('img');
    img.src = "/assets/avatar.jpeg"
    img.className = "avatar";
    divHeadAside.appendChild(img)
    aside.appendChild(divHeadAside)

    let p = document.createElement('p')
    divBodyAside.appendChild(p);
    aside.appendChild(divBodyAside)
    personData.map(data=>{
        let tr= document.createElement('tr')
        let labelName=document.createElement('label');
        labelName.textContent=data.name;
        let labelLastName=document.createElement('label');
        labelLastName.textContent= '\n' + data.lastName;
        let labelProfile=document.createElement('label');
        labelProfile.textContent= '\n' + data.profile;
        let labelEmail=document.createElement('label');
        labelEmail.textContent='\n' + data.emai;
        labelEmail.id="email"
        let labelLn=document.createElement('a');
        labelLn.href= '\n' + data.ln;
        labelLn.textContent= '\n' + "LinkedIn";
        labelLn.style="color:white"
        labelLn.target="blank"
        p.appendChild(labelName);
        p.appendChild(labelLastName);
        p.appendChild(labelProfile);
        p.appendChild(labelEmail);
        p.appendChild(labelLn)
    
    })

}


