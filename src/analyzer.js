
const analyzer = {  
  getWordCount: (text) => {
  // TODO: esta funcion debe retornar el recuento de palabras 
  },

  getCharacterCount: (text) => {
    
    let contadorCaracteres=document.getElementById('contadorCaracteres')
    let textareaElement=document.getElementsByTagName('user-input')

    function getCharacterCount(textareaElement,contadorCaracteres){
      contadorCaracteres.innerText = textareaElement.value.length;
    }
  },
  
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },

  
};

export default analyzer;
