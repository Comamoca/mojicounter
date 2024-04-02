import Countable from "countable";

/*
paragraphs:      段落の数。
sentences:       文の数。
words:           単語の数。
characters:      文字数。
all:             スペースと改行を含むすべての文字の数。
*/

interface CountResult {
  paragraphs: number;
  sentences: number;
  words: number;
  characters: number;
  all: number;
}

export function count(text: string): CountResult {
  let count = {};
  Countable.count(text, (counter) => (count = counter));
  return count;
}
