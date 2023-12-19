import analyzer from './analyzer.js'


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const resultadoLi = document.querySelector('li[data-testid="word-count"]');

  // Añadir escuchador de eventos al textarea, para identificar cuando se realizen cambios
  textarea.addEventListener('input', () => {
    // Obtener el texto del textarea
    const texto = textarea.value;

    // Usar analyzer para obtener el recuento de palabras
    const wordCount = analyzer.getWordCount(texto);

    // Actualizar el contenido del elemento li con el recuento de palabras
    resultadoLi.textContent = `Cantidad de palabras: ${wordCount}`;
  });
});


const borrarContenido =document.querySelector('textarea');  
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  borrarContenido.value = '';}
);