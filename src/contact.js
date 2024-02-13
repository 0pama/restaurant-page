import './contact.css'

let data = [{
title:"Address",
desc:"371 7th Ave, New York, NY 10001, United States of America"
},{
    title:"phone",
    desc:"55677488423433",
},{
    title:"Email",
    desc:"example@gmail.com",
}]


export default function contact (){
    const header = document.createElement('h1');
    const contactBox = document.createElement('div');
    
    for(let i=0;i<data.length;i++){
        const box = document.createElement('div')
        const headerBox = document.createElement('h2');
        const descBox = document.createElement('h3');
        
        headerBox.innerText = data[i].title;
        descBox.innerText = data[i].desc;
        header.innerText= "contact us"

        box.appendChild(headerBox);
        box.appendChild(descBox);
        contactBox.appendChild(box);

        box.className = 'contact-containers';
    }
    contactBox.className = "contact-box"
    header.className = "contact-header"
    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(contactBox);


}