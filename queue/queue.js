export default class Queue {
  /** 
  * Creates a new instance of Queue.
  * @summary Time complexity: O(1)
  */
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /** 
  * Adds a new element at the back of the queue.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be added to the queue.
  */
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 
  * Removes the first element from the queue and returns it. If the queue is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The first element from the queue, or undefined if the queue is empty.
  */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const firstElement = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstElement;
  }

  /** 
  * Returns the first element from the queue without removing it. If the queue is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The first element from the queue, or undefined if the queue is empty.
  */  
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /** 
  * Returns true if the queue does not contain any elements, and false if the size of the queue is bigger than 0.
  * @summary Time complexity: O(1)
  * @return {boolean} True if the queue does not contain any elements, and false if the size of the queue is bigger than 0.
  */  
  isEmpty() {
    return this.size() === 0;
  }

  /** 
  * Returns the number of elements in the queue.
  * @summary Time complexity: O(1)
  * @return {number} The number of elements in the queue.
  */  
  size() {
    return this.count - this.lowestCount;
  }

  /** 
  * Removes all elements from the queue.
  * @summary Time complexity: O(1)
  */  
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /** 
  * Returns a string representation of the queue.
  * @summary Time complexity: O(n)
  * @return {string} A string representation of the queue.
  */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.items[this.lowestCount]}`;
    for (let index = this.lowestCount + 1; index < this.count; index++) {
      str = `${str}, ${this.items[index]}`;
    }
    return str;
  }
}