exports.excerpt = (content) =>{
   const word_limit = 20;

    const words = content.split(' ');
    return words.slice(0 , word_limit - 1).join(' ') + ' .....';
}