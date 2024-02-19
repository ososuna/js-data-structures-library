class Stack {

  /** 
  * Creates a new instance of Stack.
  * @summary Time complexity: O(1)
  */
  constructor() {
    this.count = 0;
    this.items = {};
  }

  /** 
  * Adds a new element to the top of the stack.
  * @summary Time complexity: O(1)
  * @param {any} element - The element to be added to the stack.
  */
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 
  * Returns the number of elements in the stack.
  * @summary Time complexity: O(1)
  * @return {number} The number of elements in the stack.
  */
  size() {
    return this.count;
  }

  /** 
  * Returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
  * @summary Time complexity: O(1)
  * @return {boolean} True if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
  */
  isEmpty() {
    return this.count === 0;
  }

  /** 
  * Removes the top element from the stack and returns it. If the stack is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any|undefined} The top element from the stack, or undefined if the stack is empty.
  */  
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];
    return element;
  }

  /** 
  * Returns the top element from the stack without removing it. If the stack is empty, returns undefined.
  * @summary Time complexity: O(1)
  * @return {any|undefined} The top element from the stack, or undefined if the stack is empty.
  */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count-1];
  }

  /** 
  * Removes all the elements from the stack.
  * @summary Time complexity: O(1)
  */
  clear() {
    this.count = 0;
    this.items = {};
  }

  /** 
  * Returns a string representation of the stack.
  * @summary Time complexity: O(n)
  * @return {string} A string representation of the stack.
  */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${ this.items[0] }`;
    for (let index = 1; index < this.count; index++) {
      str = `${str}, ${this.items[index]}`;
    }
    return str;
  }
}