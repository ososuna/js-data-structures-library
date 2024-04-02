export default class ValuePair {
  /** 
  * Creates a new instance of ValuePair.
  * @summary Time complexity: O(1)
  * @param {any} key - The key of the new element.
  * @param {any} value - The value of the new element.
  */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  /** 
  * Returns a string representation of the value pair.
  * @summary Time complexity: O(1)
  * @return {string} A string representation of the value pair.
  */
  toString() {
    return `[#${this.key}:  ${this.value}]`;
  }
}