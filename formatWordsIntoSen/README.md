# Format Words Into A Sentence - 04.09.18
https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript

## Problem Domain
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

## Solution Overview
Followed psuedocode. Used array filter method to separate non null words, created a string using array join method and used regex to add comma and and before the last item in string.