# Possible words from phone digits

Given a keypad as shown in the diagram, and an `N` digit number which is represented by array `a[ ]`, the task is to list all words which are possible by pressing these numbers.

## Example 1

Input: `N = 3, a[] = {2, 3, 4}`

Output:

```
adg adh adi aeg aeh aei afg afh afi 
bdg bdh bdi beg beh bei bfg bfh bfi 
cdg cdh cdi ceg ceh cei cfg cfh cfi 
```

Explanation: When we press 2,3,4 then `adg`, `adh`, `adi`, ... `cfi` are the list of possible words.

## Example 2

Input: `N = 3, a[] = {3, 4, 5}`

Output:

```
dgj dgk dgl dhj dhk dhl dij dik dil 
egj egk egl ehj ehk ehl eij eik eil 
fgj fgk fgl fhj fhk fhl fij fik fil
```

Explanation: When we press 3,4,5 then `dgj`, `dgk`, `dgl`, ... `fil` are the list of possible words.

## Task

You don't need to read input or print anything. You just need to complete the function `possibleWords()` that takes an array `a[ ]` and `N` as input parameters and returns an array of all the possible words in lexicographical increasing order. 

Expected Time Complexity: `O(4N * N)`.
Expected Auxiliary Space: `O(N)`.

## Constraints:

- 1 ≤ N ≤ 10
- 2 ≤ a[i] ≤ 9