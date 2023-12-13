import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Para limpiar el contenido del text area 

const reset = document.querySelector('#resetButton');
reset.addEventListener("click", borrarContenido);

function borrarContenido() {
  const contenido = document.querySelector('textarea');
  contenido.value='';
}




  