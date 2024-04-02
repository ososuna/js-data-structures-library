/**  
* Default equals function. It checks if two values are equal.
* @param {any} a - The first value to be compared.
* @param {any} b - The second value to be compared.
* @return {boolean} True if the values are equal, false otherwise.
*/
export const defaultEquals = (a, b) => {
  return a === b;
};

/** 
* Default to string function. It converts any value to a string.
* @summary Time complexity: O(1)
* @param {any} item - The value to be converted to a string.
* @return {string} A string representation of the value.
*/
export const defaultToString = (item) => {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${ item }`;
  }
  return item.toString();
};