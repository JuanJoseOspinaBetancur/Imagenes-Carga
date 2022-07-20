import {registerImage} from './lazy'

const API = "https://randomfox.ca/floof/";
const agregarIMG = document.getElementById("agregarIMG");

const arrayImg = [];

const visualizar = (img) => {
  const images = document.getElementById("images");
  images.textContent = "";
  
  
    const imagen = document.createElement("img");
    imagen.dataset.src = img; 
    imagen.setAttribute("class", "w-96 h-96 mx-auto rounded-lg");

    const cont=document.createElement("div")
    cont.append(imagen)
    cont.setAttribute("class","bg-gray-200")
    
    arrayImg.push(cont);
    registerImage(cont)
  

  images.append(...arrayImg);
};

const obtener = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    visualizar(data.image)
  } catch (error) {
    console.log(error);
  }

};

agregarIMG.addEventListener("click", () => {
  obtener(API);
});
