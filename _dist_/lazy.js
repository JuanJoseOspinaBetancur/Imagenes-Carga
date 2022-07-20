// crear una funcion de registrar una imagen

const isIntersecting = (entry) => {
  /* console.log(entry) */
  return entry.isIntersecting;
};

const load = (entry) => {
  const container = entry.target; //Contenedor
  const imagen = container.querySelector("img");
  const url = imagen.dataset.src;
  imagen.src = url;
  /* imagen.src = img; */

  //desregistra la imagen (unlisten)
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(load);
});

export const registerImage = (image) => {
  //IntersectionObserver -> observar la imagen
  observer.observe(image);
};
