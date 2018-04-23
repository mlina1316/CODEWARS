Split string of words into individual words using regex
Use map to separate each word into individual letters
Converting string characters to ASCII numbers using charCodeAt method
Subtract 96 when using the charCodeAt() since 97 is the ASCII number of "a", 98 of "b", etc. Thus,subtracting 96 gives the position in the alphabet, which is a=1, b=2 etc.
Using the reduce method to get the sum for each word
Using Math.max() to get the highest number and then using the indexOf method to get its equivalent highest scoring word from the sentence.



