import { Entry } from './../src/journal.js';

describe('Entry', () => {

  test('should correctly count the words', () => {
    const newEntry = new Entry();
    const response = "I want to go park";
    //console.log(newEntry,response);
    let result = newEntry.numOfWords(response);
    expect(result).toEqual(5);
  });

  test('should correctly return the words starting with vowels', () => {
    const newEntry = new Entry();
    const response = "i want to eat apple";
    //console.log(newEntry,response);
    let result = newEntry.vowels(response);
    expect(result).toBe("i,eat,apple");
  });
});