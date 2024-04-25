# Robot indexes

Given two inputs. First input is the location map, a 2D array:

```
| O | E | E | E | X | 
| E | O | X | X | X |
| E | E | E | E | E |
| X | E | O | E | E |
| X | E | X | E | X | 
```

```
{
    '0-0': [1, 1, 5, 5],
    '0-1': [...],
}

O = Robot, E = Empty, X = blocker
```

The second input is the query. It’s a 1D array consisting of distance to the closest blocker in the order from left, top, bottom and right
`[2, 2, 4, 1]` -> This means distance of 2 to the left blocker, 2 to the top blocker, 4 to the bottom blocker and 1 to the right blocker map boundary is also considered blocker, meaning if the robot hits the boundary it also means it’s hitting the blocker.

Task: Write a function that takes these two inputs and returns the index of the robots (if any) that matches the query that we’re looking for.
Answer: `[[1, 1]]`

Matrix example: `[['O','E','E','E','X'],['E','O','X','X','X'],['E','E','E','E','E'],['X','E','O','E','E'],['X','E','X','E','X']]
