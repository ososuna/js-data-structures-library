import defaultEquals from '../util';
import { Node } from './node.js';

export default class LinkedList {

  /** 
  * Creates a new instance of LinkedList.
  * @summary Time complexity: O(1)
  */
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  /** 
  * Adds a new element to the end of the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to add the element.
  * @param {any} element - The value to be added to the list.
  */
  push(element) {
    const node = new Node(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== undefined) { // get last item
        current = current.next;
      }
      // and assign next to new element to make the link
      current.next = node;
    }
    this.count++;
  }

  /** 
  * Removes an item from a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to remove the element.
  * @param {number} index - The position of the element to be removed.
  * @return {any} The removed element.
  */
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = this.getElementAt(index-1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  /** 
  * Returns the element at a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to find the element.
  * @param {number} index - The position of the element to be returned.
  * @return {any} The element at the specified position.
  */
  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < index && current != null; i++) {
      current = current.next;  
    }
    return current;
  }

  /** 
  * Inserts a new element at a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to insert the element.
  * @param {any} element - The value to be added to the list.
  * @param {number} index - The position of the element to be inserted.
  * @return {boolean} True if the element was inserted, false otherwise.
  */
  insert(element, index) {
    if (index < 0 || index > this.count ) {
      return false;
    }
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index-1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  /** 
  * Returns the index of the element in the list. If the element is not in the list, it returns -1.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to find the element.
  * @param {any} element - The element to be found.
  * @return {number} The index of the element in the list. If the element is not in the list, it returns -1.
  */
  indexOf(element) {
    if (this.equalsFn(this.head.element, element)) {
      return 0;
    }
    let current = this.head.next;
    let counter = 1;
    while (current.next !== undefined) {
      if (this.equalsFn(current.element, element)) {
        return counter;
      }
      current = current.next;
      counter++;
    }
    return -1;
  }

  /** 
  * Removes the first occurrence of the element from the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to remove the element.
  * @param {any} element - The element to be removed.
  * @return {any} The removed element.
  */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /** 
  * Returns the number of elements in the list.
  * @summary Time complexity: O(1)
  * @return {number} The number of elements in the list.
  */
  size() {
    return this.count;
  }

  /** 
  * Verifies if the list is empty.
  * @summary Time complexity: O(1)
  * @return {boolean} True if the list is empty, false otherwise.
  */
  isEmpty() {
    return this.size() === 0;
  }

  /** 
  * Returns the first element in the list.
  * @summary Time complexity: O(1)
  * @return {any | undefined} The first element in the list. If the list is empty, it returns undefined.
  */
  getHead() {
    return this.head;
  }

  /** 
  * Return a string representation of the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to create the string representation.
  * @return {string} The string representation of the list.
  */
  toString() {
    if (this.head === undefined) {
      return '';
    }
    let str = `${this.head.element}`;
    let current = this.head.next;
    for (let index = 1; index < this.size() && current !== undefined; index++) {
      str = `${str}, ${current.element}`;
      current = current.next;
    }
    return str;
  }
 
} 