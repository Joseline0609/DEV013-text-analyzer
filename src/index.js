import analyzer from './analyzer.js'


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const resultadoLi0 = document.querySelector('li[data-testid="word-count"]');
  const resultadoLi1=document.querySelector('li[data-testid="character-count"]');
  const resultadoLi2=document.querySelector('Li[data-testid="character-no-spaces-count"]');
  const resultadoLi3=document.querySelector('Li[data-testid="number-count"]');
  const resultadoLi4=document.querySelector('Li[data-testid="number-sum"]');
  const resultadoLi5=document.querySelector('Li[data-testid="word-length-average"]');

  // Añadir escuchador de eventos al textarea, para identificar cuando se realizen cambios
  textarea.addEventListener('input', () => {
    // Obtener el texto del textarea
    const texto = textarea.value;
    // Llamar a analyzer para obtener el recuento de palabras y demas metricas
    const wordCount = analyzer.getWordCount(texto);
    const characterCount =analyzer.getCharacterCount(texto);
    const noSpaces=analyzer.getCharacterCountExcludingSpaces(texto);
    const number=analyzer.getNumberCount(texto);
    const numberSum=analyzer.getNumberSum(texto);
    const lengthAverage=analyzer.getAverageWordLength(texto);
    // Actualizar el contenido del elemento li con el recuento de palabras y demas metricas usando text.content
    resultadoLi0.textContent = `Cantidad de palabras: ${wordCount}`;
    resultadoLi1.textContent=`Cantidad de Caracteres: ${characterCount}`;
    resultadoLi2.textContent=`Caracteres sin espacios: ${noSpaces}`;
    resultadoLi3.textContent=`Numeros: ${number}`;
    resultadoLi4.textContent=`Suma de numeros: ${numberSum}`;
    resultadoLi5.textContent=`Promedio Longitud de Palabras: ${lengthAverage}`;
  });

});

//Falta separar la funcion y anexarla al doc. analyzer.js, asi como agregar otra funcionalidad para borrar tambien las metricas 

const borrarContenido =document.querySelector('textarea');  
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  borrarContenido.value = '';}
);