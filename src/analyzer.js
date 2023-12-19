
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
  getAverageWordLength: (text) => {
    const wordsForAverage=text.split(' ').filter(Boolean);
    
    
  }


};

export default analyzer;