class Deque {

  /** 
  * Creates a new instance of Deque.
  * @summary Time complexity: O(1)
  */
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /** 
  * Adds a new element at the front of the deque.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be added to the deque.
  */  
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    }
  }

  /** 
  * Adds a new element at the back of the deque.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be added to the deque.
  */
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 
  * Removes the first element from the deque and returns it. If the deque is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The first element from the deque, or undefined if the deque is empty.
  */  
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const firstElement = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstElement;
  }

  /** 
  * Removes the last element from the deque and returns it. If the deque is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The last element from the deque, or undefined if the deque is empty.
  */
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const lastElement = this.items[this.count];
    delete this.items[this.count];
    return lastElement;
  }

  /** 
  * Returns the first element from the deque without removing it. If the deque is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The first element from the deque, or undefined if the deque is empty.
  */
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /** 
  * Returns the last element from the deque without removing it. If the deque is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The last element from the deque, or undefined if the deque is empty.
  */
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count-1];
  }

  /** 
  * Returns true if the deque does not contain any elements, and false if the size of the deque is bigger than 0.
  * @summary Time complexity: O(1)
  * @return {boolean} True if the deque does not contain any elements, and false if the size of the deque is bigger than 0.
  */
  isEmpty() {
    return this.size() === 0;
  }

  /** 
  * Returns the number of elements in the deque.
  * @summary Time complexity: O(1)
  * @return {number} The number of elements in the deque.
  */
  size() {
    return this.count - this.lowestCount;
  }

  /** 
  * Removes all elements from the deque.
  * @summary Time complexity: O(1)
  */
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /** 
  * Returns a string representation of the deque.
  * @summary Time complexity: O(n)
  * @return {string} A string representation of the deque.
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