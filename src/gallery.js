
export default function gallery(){
const container = document.createElement('div');

      for(let i =2; i<14;i++){
        const image = new Image();
        const imageUrl = require(`./assets/${i}.jpg`);
       image.src = imageUrl;
        image.className = 'gallery-images'
        container.appendChild(image)
        }

container.className = 'gallery-photos-box';
const header= document.createElement('h1')
header.innerText = "gallery";
header.className = 'gallery-header'
document.getElementById("content").appendChild(header);

document.getElementById("content").appendChild(container);


}