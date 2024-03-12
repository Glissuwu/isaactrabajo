let boton = document.querySelector(".boton-añadir");
const añadir = () => {
  let input = document.querySelector("#nombre-input");
  let div = document.createElement("div");
  let span = document.createElement("span");
  span.textContent = `${input.value}`;
  div.appendChild(span);
  document.querySelector(".contenedor").appendChild(div);
  div.classList.add("elemento");
  span.classList.add("nombre-elemento");
  contador++;
};

boton.addEventListener("click", añadir);
