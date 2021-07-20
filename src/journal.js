export function Entry(title,body){
  this.title = title;
  this.body = body;
}

Entry.prototype.numOfWords = function(text){
  //console.log(typeof text, text);
  let wordCount = 0;
  const wordArray = text.split(" ");
  console.log("wordArray",wordArray);
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
};

Entry.prototype.vowels = function(text) {
    let vowels = ['a','e','i','o','u'];
    let vowelWords= [];
    const vowelArray = text.split(" ");
    let strarray = " ";
    vowelArray.forEach(function(element){
      for(let i=0; i<=vowels.length; i++){
        console.log(vowels[i]);
        if(element.startsWith(vowels[i])){
            vowelWords.push(element);
            strarray = vowelWords.toString();
        }
      }
      console.log(strarray);
    });
    return strarray;
};