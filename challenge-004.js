/*
  Inputs
  -------
    (1): Empty array
    --
    []
    => []
    (2): Flattened already
    --
    [1]
    => [1]
    (3): One level deep
    --
    [[1]]
    => [1]
    (4): Mixed with one level deep
    --
    [1, [2]]
    => [1, 2]
    (5): One level deep multiple arrays
    --
    [[1, 2], [3, 4]]
    => [1, 2, 3, 4]
    (6): Two levels deep
    --
    [[1, [2, 3]], [4, [5, 6, 7]]]
    => [1, 2, 3, 4, 5, 6, 7]
    (7): Arbitrary depth
    --
    [1, [2, [[3]], [4, 5, 6]], [[[[[[7, 8, 9]]]]]]]
    => [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
