import { defaultToString } from '../util';
import ValuePair from '../dictionary/value-pair.js';
import LinkedList from '../linked-list/linked-list.js';

export default class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const hash = this.hashCode(key);
      if (this.table[hash] == null) {
        this.table[hash] = new LinkedList();
      }
      this.table[hash].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const linkedList = this.table[hash];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (key === current.element.key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[hash];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}