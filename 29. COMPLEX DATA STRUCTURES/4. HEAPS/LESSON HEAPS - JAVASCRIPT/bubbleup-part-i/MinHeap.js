class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    add(value) {
      this.heap.push(value);
      console.log(`... Adding ${value}`);
      this.bubbleUp();
      console.log(`Content of heap: ${this.heap}`);
      this.size++;
    }
  
    bubbleUp() {
      console.log('... Bubble Up');
    }
  }
  module.exports = MinHeap;