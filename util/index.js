/**  
* Default equals function. It checks if two values are equal.
* @param {any} a - The first value to be compared.
* @param {any} b - The second value to be compared.
* @return {boolean} True if the values are equal, false otherwise.
*/
export const defaultEquals = (a, b) => {
  return a === b;
};

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