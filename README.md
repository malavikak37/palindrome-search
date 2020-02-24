#PS-palindrome-search exercise

## Instructions
* Using vanilla JS, create a function that returns an array of all palindromes in order from longest to shortest length. If there no palindromes in the string, return an empty array.
* Provide notes on your code, including how to run it in the Candidate Notes section below.

## Rules
* Palindromes can span multiple words
* Palindrome must be at least 2 characters long

## Example
* Given the string 'civic' or 'c ivic', the following array should be returned:
['civic', 'ivi']

## Candidate Notes
* Create a loop with string length
* Get the sub string from string
* Check the length is greater than 2 and check if the string is palindrome or not
* If the substring is palindrome then push the string to array
* Print the array