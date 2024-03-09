export class Node {
  /** 
  * Create a new instance of Node for a Linked List.
  * @summary Time complexity: O(1)
  * @param {any} element - The value to be added to the list.
  */  
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
export class DoublyNode extends Node {
  /** 
  * Create a new instance of Node for a Doubly Linked List.
  * @summary Time complexity: O(1)
  * @param {any} element - The value to be added to the list.
  * @param {Node} next - The next node in the list.
  * @param {Node} prev - The previous node in the list.
  */  
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}