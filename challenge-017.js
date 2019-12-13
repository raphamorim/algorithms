/*

Given a grid of characters output a decoded message as a string.

  H Z R R Q
  D I F C A E A !
  G H T E L A E
  L M N H P R F
  X Z R P E

The message for the following would be HITHERE!
Diagonally down right and diagonally up right if you can't go further.
The message ends when there is no space at the right up or down diagonal.

*/

var arr = [
  ['H', 'Z', 'R', 'R', 'Q'],
  ['D', 'I', 'F', 'C', 'A', 'E', 'A', '!'],
  ['G', 'H', 'T', 'E', 'L', 'A', 'E'],
  ['L', 'M', 'N', 'H', 'P', 'R', 'F'],
  ['X', 'Z', 'R', 'P', 'E']
];

function printMatrix(matrix) {
  const bottom = matrix.length - 1;
  function runOver(top, toPos, left, accStr) {
    if (left > matrix[top].length - 1) {
      return accStr;
    }

    accStr = accStr + matrix[top][left];
    left += 1;

    // Reached the bottom
    if (toPos === bottom && top === bottom) {
      return runOver(top - 1, 0, left, accStr)

    // Reached the top
    } else if (toPos === 0 && top === 0) {
      return runOver(top - 1, bottom, left, accStr)
    }

    const newTop = top > toPos ? top - 1 : top + 1;
    return runOver(newTop, toPos, left, accStr);
  }

  return runOver(0, bottom, 0, '');
}

console.log(printMatrix(arr));

// I gave up of writting using iteration

// function printMatrix(matrix) {
//   let str = '';

//   let x = 0;
//   let y = 0;
//   let moveDown = true;
//   while (true) {
//     if (x > matrix[y].length - 1) {
//       break;
//     }

//     str = str + String(matrix[y][x]);
//     x+=1;

//     if (y >= matrix.length - 1) {
//       y -= 1;
//       moveDown = false;
//     } else {
//       (moveDown) {
//         y += 1;
//       } else {
//         y -= 1;
//       }

//     }
//   }

//   return str;
// }

// console.log(printMatrix(arr));
