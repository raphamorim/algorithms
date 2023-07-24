# String with chars order

Check if string follows order of characters defined by a pattern or not.

Given an input string and a pattern, check if characters in the input string follows the same order as determined by characters present in the pattern. Assume there won’t be any duplicate characters in the pattern.

## Input 1

string = "engineers rock"
pattern = "er";
Output: true
Explanation: All `e` in the input string are before all `r`.

## Input 2

string = "engineers rock"
pattern = "egr";
Output: false
Explanation: There are two `e` after `g` in the input string.

## Input 3

string = "engineers rock"
pattern = "gsr";
Output: false
Explanation: There are one `r` before `s` in the input string.