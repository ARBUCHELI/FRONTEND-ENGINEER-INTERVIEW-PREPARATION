const { MinHeap, getParent, getLeft, getRight } = require('./MinHeap');

// instantiate MinHeap and assign to minHeap
const minHeap = new MinHeap();

// sample content of minHeap
minHeap.heap = [ null, 10, 13, 21, 61, 22, 23, 99 ];

// display content of minHeap
console.log(minHeap.heap);

// display the current value, its parent value, left child value and right child value
// replace null with the correct way to access the values of the parent, left child and right child
const current = 3;
const currentValue = minHeap.heap[current];
console.log(`Current value of ${current} is ${currentValue}`);
console.log(`Parent value of ${currentValue} is ${minHeap.heap[getParent(current)]}`);
console.log(`Left child value of ${currentValue} is ${minHeap.heap[getLeft(current)]}`);
console.log(`Right child value of ${currentValue} is ${minHeap.heap[getRight(current)]}`);