import LinkedList from './linked-list.js';
import { defaultEquals } from '../util/index.js';
import { DoublyNode } from './node.js';

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
}