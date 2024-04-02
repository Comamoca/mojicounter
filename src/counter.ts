// @ts-nocheck
import Countable from "countable";

/*
paragraphs:      段落の数。
sentences:       文の数。
words:           単語の数。
characters:      文字数。
all:             スペースと改行を含むすべての文字の数。
*/

export interface CountResult {
  paragraphs: number;
  sentences: number;
  words: number;
  characters: number;
  all: number;
}

export function count(text: string): CountResult {
  let count: CountResult = {
    paragraphs: 0,
    sentences: 0,
    words: 0,
    characters: 0,
    all: 0,
  };
  // ts-ignore
  Countable.count(text, (counter) => (count = counter));
  return count;
}
