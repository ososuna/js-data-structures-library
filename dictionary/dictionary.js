import { defaultToString }  from '../util';
import ValuePair from './value-pair.js';

export default class Dictionary {
  /** 
  * Creates a new instance of Dictionary.
  * @summary Time complexity: O(1)
  * @param {function} toStrFn - Optional function to convert keys to strings. Default is defaultToString.
  */
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /** 
  * Returns true if the key exists in the dictionary and false otherwise.
  * @summary Time complexity: O(1)
  * @param {any} key - The key to be checked.
  * @return {boolean} True if the key exists in the dictionary and false otherwise.
  */  
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  /** 
  * Adds a new element to the dictionary or updates an existing one.
  * @summary Time complexity: O(1)
  * @param {any} key - The key of the new element.
  * @param {any} value - The value of the new element.
  * @return {boolean} True if the element was added successfully, and false otherwise.
  */
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  /** 
  * Removes the specified element from the dictionary.
  * @summary Time complexity: O(1)
  * @param {any} key - The key of the element to be removed.
  * @return {boolean} True if the element was removed successfully, and false if the element is not in the dictionary.
  */
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;  
  }

  /** 
  * Returns the value associated with the specified key.
  * @summary Time complexity: O(1)
  * @param {any} key - The key of the element to be returned.
  * @return {any | undefined} The value associated with the specified key, or undefined if the key is not in the dictionary.
  */
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  /** 
  * Returns an array of all the ValuePair objects in the dictionary.
  * @summary Time complexity: O(n)
  * @return {ValuePair[]} An array of all the ValuePair objects in the dictionary.
  */
  keyValues() {
    return Object.values(this.table);
  }

  /** 
  * Returns an array of all the keys in the dictionary.
  * @summary Time complexity: O(n)
  * @return {any[]} An array of all the keys in the dictionary.
  */
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  /** 
  * Returns an array of all the values in the dictionary.
  * @summary Time complexity: O(n)
  * @return {any[]} An array of all the values in the dictionary.
  */
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  /** 
  * Executes the provided callback function once for each key-value pair in the dictionary.
  * @summary Time complexity: O(n)
  * @param {function} callbackFn - The function to be executed for each key-value pair.
  */
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (!result) {
        break;
      }
    }
  }

  /** 
  * Returns the number of elements in the dictionary.
  * @summary Time complexity: O(n)
  * @return {number} The number of elements in the dictionary.
  */
  size() {
    return Object.keys(this.table).length;
  }

  /** 
  * Returns true if the dictionary is empty, and false otherwise.
  * @summary Time complexity: O(n)
  * @return {boolean} True if the dictionary is empty, and false otherwise.
  */
  isEmpty() {
    return this.size() === 0;
  }

  /** 
  * Removes all elements from the dictionary.
  * @summary Time complexity: O(1)
  */
  clear() {
    this.table = {};
  }

  /** 
  * Returns a string representation of the dictionary.
  * @summary Time complexity: O(n)
  * @return {string} A string representation of the dictionary.
  */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString  = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[0].toString()}`
    }
    return objString;
  }
}