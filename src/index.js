import analyzer from './analyzer.js'


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const resultadoLi0 = document.querySelector('li[data-testid="word-count"]');
  const resultadoLi1=document.querySelector('li[data-testid="character-count"]');
  const resultadoLi2=document.querySelector('Li[data-testid="character-no-spaces-count"]')
  const resultadoLi6=document.querySelector('Li[data-testid="word-length-average]')

  // Añadir escuchador de eventos al textarea, para identificar cuando se realizen cambios
  textarea.addEventListener('input', () => {
    // Obtener el texto del textarea
    const texto = textarea.value;
    // Usar analyzer para obtener el recuento de palabras
    const wordCount = analyzer.getWordCount(texto);
    const characterCount =analyzer.getCharacterCount(texto);
    const noSpaces=analyzer.getCharacterCountExcludingSpaces(texto);
    const lengthAverage=analyzer.getAverageWordLength(texto);
    // Actualizar el contenido del elemento li con el recuento de palabras
    resultadoLi0.textContent = `Cantidad de palabras: ${wordCount}`;
    resultadoLi1.textContent=`Cantidad de Caracteres: ${characterCount}`;
    resultadoLi2.textContent=`Caracteres sin espacios: ${noSpaces}`;
    resultadoLi6.textContent=`Promedio del largo de palabras: ${lengthAverage}`;
  });

});


const borrarContenido =document.querySelector('textarea');  
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  borrarContenido.value = '';}
);