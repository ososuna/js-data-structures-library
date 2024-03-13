import LinkedList from './linked-list.js';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

/** 
* Default comparison function.
* @summary Time complexity: O(1)
* @param {any} a - The first element to be compared.
* @param {any} b - The second element to be compared.
* @return {number} 0 if a and b are equal, -1 if a is less than b, and 1 if a is bigger than b.
*/
const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
};

export default class SortedLinkedList extends LinkedList {
  
  /** 
  * Creates a new instance of SortedLinkedList.
  * @summary Time complexity: O(1)
  * @param {function} equalsFn - Optional function to compare equality between elements.
  * @param {function} compareFn - Optional function to compare elements in the list.
  */
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  /** 
  * Inserts an element in the list in a sorted way.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to insert the element.
  * @param {any} element - The element to be inserted.
  * @param {number} index - As we do not want to allow inserting elements at any index, a default value of 0 is set. If the index parameter is passed to the method, it will be ignored.
  * @return {boolean} True if the element was inserted, false otherwise.
  */
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  /** 
  * Returns the index of the next sorted element.
  * @summary Time complexity: O(n) - In the worst case, we need to iterate through the entire list to find the index of the next sorted element.
  * @param {any} element - The element to be compared.
  * @return {number} The index of the next sorted element.
  */
  getIndexNextSortedElement(element) {
    let current = this.head;
    let index = 0;
    for (; index < this.size() && current; index++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return index;
      }
      current = current.next;
    }
    return index;
  }

}