const agregarButton = document.getElementById ("agregar");
const itemInput = document.getElementById ("item");
const listcontenedor = document.getElementById("contenedor");
const limpiarButton = document.getElementById ("limpiar");
let datosArray = JSON.parse(localStorage.getItem("datos")) || [];


function addItem(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        let li = document.createElement ("li");
        li.classList.add ("list-group-item");
        li.textContent = arr[i];
        listcontenedor.appendChild (li); 

    }
};

function displayElement(arr) {

    contenedor.innerHTML += `<li class="list-group-item">${
      arr[arr.length - 1]
    } </li>`;
  }

addItem(datosArray);


agregarButton.addEventListener("click", () => {
    if (itemInput.value) {
      datosArray.push(itemInput.value);
      localStorage.setItem("datos", JSON.stringify(datosArray));
      item.value = "";
      displayElement(datosArray);
    }
  });

  limpiarButton.addEventListener("click", () => {
    localStorage.removeItem("datos");
    contenedor.textContent = "";
  });