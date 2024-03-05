export default class Node {
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