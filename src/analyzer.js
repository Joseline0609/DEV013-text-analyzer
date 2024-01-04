
const analyzer = {
  getWordCount: (text) => {
    const words=text.split(' ').filter(Boolean);
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[\^\s*,.;@!"#$%&/()=?¡!¿'\\]/gi,"").length;
    
  },
  getNumberCount: (text) => {
    // Usar una expresión regular para encontrar todos los números en el texto
    const numeros = text.match(/\d+([/.]\d+)?\b/g);
    // Devolver la cantidad de números encontrados
    return numeros ? numeros.length : 0;
  },
  getNumberSum: (text) => {
    const expresionMatch = /\d+([/.]\d+)?\b/g;
    const coincidencias = text.match(expresionMatch);
    let suma = 0;

    if (coincidencias) {
      for (let i = 0; i < coincidencias.length; i++) {
        suma += parseFloat(coincidencias[i]);
      }
    }

    return suma;
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(' ').filter(Boolean);
    let sumaLongitudes = 0;

    palabras.forEach(palabra => {
      sumaLongitudes += palabra.length;
    });

    const resultado =palabras.length > 0 ? sumaLongitudes / palabras.length : 0;
    return Number(resultado.toFixed(2));

    /*const palabras = text.split(' ').filter(Boolean);
    let sumaLongitudes = 0;
    for (let i = 0; i < palabras.length; i++) {
      sumaLongitudes += palabras[i].length;
    }
    return palabras.length > 0 ? sumaLongitudes / palabras.length : 0;*/
  },

};


export default analyzer;  