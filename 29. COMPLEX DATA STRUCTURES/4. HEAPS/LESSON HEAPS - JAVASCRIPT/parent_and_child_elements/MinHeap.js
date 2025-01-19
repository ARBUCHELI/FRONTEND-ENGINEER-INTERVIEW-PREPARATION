class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    add(value) {
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(this.heap);
    }
  
    bubbleUp() {
      console.log('Bubble Up');
    }
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = { 
    MinHeap,
    getParent,
    getLeft,
    getRight
  };