import defaultEquals from '../util';

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

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

  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < index && current != null; i++) {
      current = current.next;  
    }
    return current.element;
  }

  insert(element, index) {
    if (index < 0 || index >= this.count) {
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

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

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