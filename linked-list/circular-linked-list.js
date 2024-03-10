import { defaultEquals } from '../util.js';
import LinkedList from './linked-list.js';

export default class CircularLinkedList extends LinkedList {
  /**
  * Creates a new instance of DoublyLinkedList.
  * @param {function} equalsFn - Optional function to compare equality between elements.
  * @summary Time complexity: O(1)
  */
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  /** 
  * Inserts a new element at a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to find the element.
  * @param {any} element - The value to be added to the list.
  * @param {number} index - The position of the element to be added.
  * @return {boolean} True if the element was added, false otherwise.
  */
  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(element);
    let current = this.head;
    if (index === 0) {
      if (this.head === undefined) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        current = this.getElementAt(this.size());
        this.head = node;
        current.next = this.head;
      }
    } else {
      const previous = this.getElementAt(index-1);
      node.next = previous.next;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  /** 
  * Removes an element from the list at a specified position.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to remove the element.
  * @param {number} index - The position of the element to be removed.
  * @return {any | undefined} The removed element if it was removed, undefined otherwise.
  */
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size());
        this.head = removed.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index-1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
}