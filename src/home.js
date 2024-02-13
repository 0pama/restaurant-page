export default function home(){
    const container = document.createElement('div');
    const logoname = document.createElement('h1');
    const desc = document.createElement('h2');
    

    logoname.innerText = "Bisbaas";
    desc.innerText = "Traditional somali cuisine";

    logoname.className = 'logo-home';
    desc.className = 'desc-home'
    

    container.appendChild(logoname);
    container.appendChild(desc);
    container.className ='home-div'

    document.getElementById("content").appendChild(container);
    console.log("from home////")
}