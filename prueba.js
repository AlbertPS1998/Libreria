


function asign(){

  let book = {
    
  
  
titulo: document.getElementById("titulo").value,
autor: document.getElementById("autor").value,
paginas: document.getElementById("paginas").value,
leido: document.getElementById("leidodesplegable").value,

}


console.log(book);


var libro = document.createElement("div");
element = document.getElementById('container')
element.appendChild(libro);
libro.style.maxHeight = "30vh";
libro.style.minWidth = "20vh";
libro.style.display = "grid";
libro.style.gap = "0";
libro.style.gridTemplateRows = "4";
libro.style.backgroundColor = "white";
libro.style.border = "solid black 5px"
libro.style.margin = "2vh";



let salir = document.createElement('img');
salir.src="./imagenes/salir.png";
salir.style.width = "3vh";
salir.style.margin = "1vh";
salir.onclick = function() {
  libro.parentNode.removeChild(libro);
};
libro.appendChild(salir);




let parrafo1 = document.createElement('p');
let parrafo2 = document.createElement('p');
let parrafo3 = document.createElement('p');


let boton = document.createElement('input');
boton.type = "button";
boton.value = book.leido;
boton.onclick = changeColor;
boton.addEventListener('mouseover',function(){
boton.className = 'cursorPointerClass';
});
if (boton.value == "Leido") {
  boton.style.backgroundColor = "red";
  boton.value = "No leido";
}
else if(boton.value == "No leido"){
  boton.style.backgroundColor = "green";
  boton.value = "Leido";
  
}

let textoParrafo1 = document.createTextNode(book.titulo);
let textoParrafo2 = document.createTextNode(book.autor);
let textoParrafo3 = document.createTextNode(book.paginas);



parrafo1.appendChild(textoParrafo1);
parrafo2.appendChild(textoParrafo2);
parrafo3.appendChild(textoParrafo3);


libro.appendChild(parrafo1);
libro.appendChild(parrafo2);
libro.appendChild(parrafo3);
libro.appendChild(boton);

parrafo1.style.margin = "auto";
parrafo2.style.margin = "auto";
parrafo3.style.margin = "auto";


parrafo1.style.padding = "1vh";
parrafo2.style.padding = "1vh";
parrafo3.style.padding = "1vh";


parrafo1.style.border = "solid black 2px"
parrafo2.style.border = "solid black 2px"
parrafo3.style.border = "solid black 2px"


parrafo1.style.backgroundColor = "white" 
parrafo2.style.backgroundColor = "white"
parrafo3.style.backgroundColor = "white"


parrafo1.style.fontWeight = "bold"; 
parrafo2.style.fontWeight = "bold"
parrafo3.style.fontWeight = "bold"
function changeColor(){
if (boton.value == "Leido") {
  boton.style.backgroundColor = "red";
  boton.value = "No leido";
}
else if(boton.value == "No leido"){
  boton.style.backgroundColor = "green";
  boton.value = "Leido";
  
}
 
 
}

//Check if there is a stored div in localstorage

if(localStorage.getItem("myDiv")){
  libro.innerHTML = localStorage.getItem("myDiv");
  document.element.appendChild(libro);
}else{
  document.element.appendChild(container);
  localStorage.setItem("myDiv", libro.innerHTML);
}


}



function showForm() {
    document.getElementById('formElement').style.display = 'block';

}


function hideForm(){
  document.getElementById('formElement').style.display = 'none';
}

