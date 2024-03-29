export default class Set {
  /** 
  * Creates a new instance of Set
  * @summary Time complexity: O(1)
  */
  constructor() {
    this.items = {};
  }

  /** 
  * Returns true if the set contains the specified element, and false otherwise.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be checked.
  * @return {boolean} True if the set contains the specified element, and false otherwise.
  */  
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  /** 
  * Adds a new element to the set.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be added to the set.
  * @return {boolean} True if the element was added successfully, and false if the element is already in the set.
  */
  add(element) {
    if (this.has(element)) {
      return false;
    }
    this.items[element] = element;
    return true;
  }

  /** 
  * Removes the specified element from the set.
  * @summary Time complexity: O(1)
  * @param {any} element - Element to be removed from the set.
  * @return {boolean} True if the element was removed successfully, and false if the element is not in the set.
  */
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  /** 
  * Removes all elements from the set.
  * @summary Time complexity: O(1)
  */
  clear() {
    this.items = {};
  }

  /** 
  * Returns the number of elements in the set.
  * @summary Time complexity: O(n)
  * @return {number} The number of elements in the set.
  */  
  size() {
    return Object.keys(this.items).length;
  }

  /** 
  * Returns an array containing all elements in the set.
  * @summary Time complexity: O(n)
  * @return {any[]} An array containing all elements in the set.
  */
  values() {
    return Object.values(this.items);
  }

  /** 
  * Returns the union of the set with another set.
  * @summary Time complexity: O(n)
  * @param {Set} otherSet - The other set to be combined with this set.
  * @return {Set} A new set containing all elements in this set and the other set.
  */
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  /** 
  * Returns the intersection of the set with another set.
  * @summary Time complexity: O(n)
  * @param {Set} otherSet - The other set to be intersected with this set.
  * @return {Set} A new set containing all elements that are in both this set and the other set.
  */
  intersection(otherSet) {
    const intersectionSet = new Set();
    const setValues = this.values();
    const otherSetValues = otherSet.values();
    let smallerValues = setValues;
    let biggerValues = otherSetValues;
    if (setValues - otherSetValues > 0) {
      smallerValues = otherSetValues;
      biggerValues = setValues;
    }
    smallerValues.forEach(value => {
      if (biggerValues.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  /** 
  * Returns the difference of the set with another set.
  * @summary Time complexity: O(n)
  * @param {Set} otherSet - The other set to be compared with this set.
  * @return {Set} A new set containing all elements that are in this set but not in the other set.
  */
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  /** 
  * Returns true if the set is a subset of another set, and false otherwise.
  * @summary Time complexity: O(n)
  * @param {Set} otherSet - The other set to be compared with this set.
  * @return {boolean} True if the set is a subset of the other set, and false otherwise. 
  */
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}