import DoublyLinkedList from './doubly-linked-list.js';

export default class StackLinkedList {
  /** 
  * Creates a new instance of StackLinkedList.
  * @summary Time Complexity: O(1)
  */
  constructor() {
    this.items = new DoublyLinkedList();
  }

  /** 
  * Adds a new element to the top of the stack.
  * @summary Time Complexity: O(1)
  * @param {any} element - The element to be added to the stack.
  */
  push(element) {
    this.items.push(element);
  }

  /** 
  * Removes the top element from the stack and returns it.
  * @summary Time Complexity: O(1)
  * @return {any | undefined} - The top element of the stack or undefined if the stack is empty.
  */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.size() - 1);
  }

  /** 
  * Returns the top element of the stack without removing it.
  * @summary Time Complexity: O(1)
  * @return {any | undefined} - The top element of the stack or undefined if the stack is empty.
  */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1).element;
  }

  /** 
  * Returns true if the stack is empty, otherwise returns false.
  * @summary Time Complexity: O(1)
  * @return {boolean} - True if the stack is empty, otherwise false.
  */
  isEmpty() {
    return this.items.isEmpty();
  }

  /** 
  * Returns the number of elements in the stack.
  * @summary Time Complexity: O(1)
  * @return {number} - The number of elements in the stack.
  */
  size() {
    return this.items.size();
  }

  /** 
  * Removes all elements from the stack.
  * @summary Time Complexity: O(1)
  */  
  clear() {
    this.items.clear();
  }

  /** 
  * Returns a string representation of the stack.
  * @summary Time Complexity: O(n)
  * @return {string} - The string representation of the stack.
  */
  toString() {
    return this.items.toString();
  }
}