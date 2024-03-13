import LinkedList from './linked-list.js';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
};

export default class SortedLinkedList extends LinkedList {
  
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

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