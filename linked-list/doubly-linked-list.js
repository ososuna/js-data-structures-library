import LinkedList from './linked-list.js';
import { defaultEquals } from '../util/index.js';
import { DoublyNode } from './node.js';

export default class DoublyLinkedList extends LinkedList {

  /** 
  * Creates a new instance of DoublyLinkedList.
  * @summary Time complexity: O(1)
  */
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  /** 
  * Inserts a new element at a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to find the element.
  * @param {any} element - The value to be added to the list.
  * @param {number} index - The position of the element to be added.
  * @return {boolean} True if the element was added, false otherwise.
  */
  insert(element, index) {
    if (index < 0 || index > this.count ) {
      return false;
    }
    const node = new DoublyNode(element);
    let current = this.head;
    if (index===0) {
      if (this.head === undefined) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) { // last item
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index-1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }

  /** 
  * Removes an item from a specified position in the list.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to remove the element.
  * @param {number} index - The position of the element to be removed.
  * @return {any | undefined} The removed element if it was removed, undefined otherwise.
  */
  removeAt(index) {
    if (index < 0 || index >= this.count ) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      // if there's only one item, then we update tail as well
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) { // last item
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.count--;
    return current.element;
  }
}