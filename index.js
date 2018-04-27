function getFirstSelector(selector) {
  const selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
const selected = document.querySelector('#nested .target')
return selected
}

function increaseRankBy(n) {
  const rankedlistlis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedlistlis.length; i++) {
    rankedlistlis[i].innerHTML = (parseInt(rankedlistlis[i].innerHTML) + n).toString()
  }
  return rankedlistlis
}

// function deepestChild() {
// let currentElement = document.querySelectorAll('#grand-node')[0]
//   while (currentElement.length !== undefined ) {
//     currentElement = currentElement.children[0]
//   }
//   return currentElement
// }

function deepestChild() {
  let currentElement = document.querySelector('#grand-node')
  while (currentElement.children.length>0) {
  currentElement = currentElement.children[0]
}
return currentElement
}

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
// This is challenging to implement correctly, but not beyond your ability!)
// HINT 1: Your solution for deepestChild() does not need to be totally generic;
// we don't expect it to work in every case. For example, we know that div#grand-node
//  has only one node at each level — for this lab, you can solve for that case, and not
//  worry about a case where there are sibling nodes.
