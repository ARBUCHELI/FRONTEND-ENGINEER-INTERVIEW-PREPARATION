class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    popMin() {
      if (this.size === 0) {
        return null;
      }
      else {
        console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        console.log(`.. Removed ${min} from heap`);
        console.log('..',this.heap);
        return min;
      }
    }
  
    add(value) {
      console.log(`.. adding ${value}`);
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(`added ${value} to heap`, this.heap);
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
        console.log('..', this.heap);
        console.log(`.. swap index ${current} with ${getParent(current)}`);
        this.swap(current, getParent(current));
        current = getParent(current);
      }
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;