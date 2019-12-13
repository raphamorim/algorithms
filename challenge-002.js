/*
  Given two identical DOM tree structures, A and B,
  and a node from A, find the corresponding node in B
*/

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>DOM Traversal</title>
</head>
<body>
  <div id="rootA">
    <div>
      <div></div>
    </div>

    <div></div>


    <div>
      <div>
        <div id="nodeA"></div>
        <div></div>
      </div>
    </div>
  </div>

  <div id="rootB">
    <div>
      <div></div>
    </div>

    <div></div>

    <div>
      <div>
        <div id="nodeB"></div>
        <div></div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Answer:
const rootA = document.querySelector('#rootA');
const rootB = document.querySelector('#rootB');

const nodeA = document.querySelector('#nodeA');
const nodeB = document.querySelector('#nodeB');

function getPath(root, node) {
  let path = [];

  while(root !== node) {
    const parent = node.parentNode;
    const parentNodes = parent.childNodes;
    const children = Array.prototype.slice.call(parentNodes);
    const index = children.indexOf(node);
    path.push(index);
    node = parent;
  }

  return path;
}

function getNodeFromPath(node, path) {
  const toWalk = [...path];

  while (toWalk.length > 0) {
    node = node.childNodes[toWalk.pop()];
  }

  return node;
}

const nodePath = getPath(rootA, nodeA);
console.log(getNodeFromPath(rootB, nodePath) === nodeB); // true
