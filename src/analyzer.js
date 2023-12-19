
const analyzer = {
  getWordCount: (text) => {
    const words=text.split(' ').filter(Boolean);
    return words.length;
  }, 

};

export default analyzer;