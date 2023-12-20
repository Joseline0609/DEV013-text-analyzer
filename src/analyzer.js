
const analyzer = {
  getWordCount: (text) => {
    const words=text.split(' ').filter(Boolean);
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s+/g, '').length;
  },
  getNumberCount: (text) => {
    // Usar una expresión regular para encontrar todos los números en el texto
    const numeros = text.match(/\d+/g);
    // Devolver la cantidad de números encontrados
    // Si no hay números, match devolverá null, así que asegúrate de manejar eso
    return numeros ? numeros.length : 0;
  },
  getNumberSum: (text) => {
    let suma = 0;
    let numeroActual = '';

    for (let i = 0; i < text.length; i++) {
      if (text[i] >= '0' && text[i] <= '9') {
        // Agregar el dígito actual al número actual
        numeroActual += text[i];
      } else if (numeroActual.length > 0) {
        // Sumar el número actual a la suma total y resetear el número actual
        suma += parseInt(numeroActual, 10);
        numeroActual = '';
      }
    }

    // Asegurarse de sumar el último número si el texto termina con un dígito
    if (numeroActual.length > 0) {
      suma += parseInt(numeroActual, 10);
    }

    return suma;

    /*const numeros = text.match(/\d+/g);
    const suma = numeros ? numeros.reduce((total, num) => total + parseInt(num, 10), 0) : 0;
    return suma;*/

    /*const palabras = text.split(/\s+/);
    let contadorNumeros = 0;
    palabras.forEach(palabra => {
      // Comprobar si la palabra es un número usando una expresión regular
      if(palabra.match(/^\d+$/)) {
        contadorNumeros++;
      }
    });
    return contadorNumeros;*/
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(' ').filter(Boolean);
    let sumaLongitudes = 0;

    palabras.forEach(palabra => {
      sumaLongitudes += palabra.length;
    });

    return palabras.length > 0 ? sumaLongitudes / palabras.length : 0;

    /*const palabras = text.split(' ').filter(Boolean);
    let sumaLongitudes = 0;
    for (let i = 0; i < palabras.length; i++) {
      sumaLongitudes += palabras[i].length;
    }
    return palabras.length > 0 ? sumaLongitudes / palabras.length : 0;*/
  },

};

export default analyzer;