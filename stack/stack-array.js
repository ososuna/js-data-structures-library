class Stack {
  /** 
  * Creates a new instance of Stack.
  * @summary Time complexity: O(1)
  */
  constructor() {
    this.items = [];
  }

  /** 
  * Adds a new element to the top of the stack.
  * @summary Time complexity: O(1)
  * @param {any} element - The element to be added to the stack.
  */
  push(element) {
    this.items.push(element);
  }

  /** 
  * Removes the top element from the stack and returns it.
  * @summary Time complexity: O(1)
  * @return {any} The top element of the stack.
  */
  pop() {
    return this.items.pop();
  }

  /** 
  * Returns the top element of the stack without removing it.
  * @summary Time complexity: O(1)
  * @return {any} The top element of the stack.
  */
  peek() {
    return this.items[this.items.length-1];
  }

  /** 
  * Returns true if the stack is empty, otherwise false.
  * @summary Time complexity: O(1)
  * @return {boolean} True if the stack is empty, otherwise false.
  */  
  isEmpty() {
    return this.items.length === 0;
  }

  /** 
  * Returns the number of elements in the stack.
  * @summary Time complexity: O(1)
  * @return {number} The number of elements in the stack.
  */  
  size() {
    return this.items.length;
  }

  /** 
  * Removes all elements from the stack.
  * @summary Time complexity: O(1)
  */  
  clear() {
    this.items = [];
  }

}