# Algorithms

## Big O

We can analyze how efficient an algorithm is from the amount of time, storage, other resources it takes to run the algorithm, and a change in the input size. Big O Notation in Data Structure tells us how well an algorithm will perform in a particular situation. In other words, it gives an algorithm's upper-bound runtime or worst-case complexity.

The performance of an algorithm can change with a change in the input size. That is where Asymptotic Notations like Big O Notation comes into play. Asymptotic Notations can describe an algorithm's run time when the input tends toward a specific or limiting value. Asymptotic analysis helps to analyze the algorithm performance change in the order of input size.

Big O Notation in Data Structure is used to express algorithmic complexity using algebraic terms. It describes the upper bound of an algorithm's runtime and calculates the time and amount of memory needed to execute the algorithm for an input value.

Good resources:

- [Big O Notation by Gayle Laakmann McDowell](https://www.youtube.com/watch?v=v4cd1O4zkGw)
- [The Complete Guide to Big O Notation & Complexity Analysis for Algorithms: Part 1 of 2 by Alvin Zablan](https://www.youtube.com/watch?v=HfIH3czXc-8)
- [The Complete Guide to Big O Notation & Complexity Analysis for Algorithms: Part 2 of 2 by Alvin Zablan](https://www.youtube.com/watch?v=zo7YFqw5hNw)

--

## Sorts

Good resources:

- [QuickSort Algorithm by Abdul Bari](https://www.youtube.com/watch?v=7h1s2SojIRw)

--

## Problems

### [Valid Anagram](/problems/valid-anagram/problem.md)

| Solution | Avg Time | Time Complexity
| --- | ----------- | --- |
| [JavaScript #1](/javascript/valid-anagram/solution-1.js) | 424.484ms | `A1^3` |
[JavaScript #2](/javascript/valid-anagram/solution-2.js) | 7.486ms | `2(A1 + A2)` |
[JavaScript #3](/javascript/valid-anagram/solution-3.js) | 9.745ms | `log A1` |

### [Two Sum](/problems/two-sum/problem.md)

| Solution | Avg Time | Time Complexity
| --- | ----------- | --- |
[JavaScript #1](/javascript/two-sum/solution-1.js) | 9.745ms | `log A1` |

### [Contains Duplicate](/problems/contains-duplicate/problem.md)

| Solution | Avg Time | Time Complexity
| --- | ----------- | --- |
[JavaScript #1](/javascript/contains-duplicate/solution-1.js) | 9.745ms | `log A1` |

## Running

**Running Rust exercises**

```bash
make run lang=rust name=valid-anagram
```

**Running JavaScript exercises**

```bash
make run lang=js name=valid-anagram
```
