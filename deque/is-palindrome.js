import Deque from './deque.js';

/** 
* Checks if a string is a palindrome.
* @summary Time complexity: O(n) - where n is the length of the string.
* @param {string} str - The string to be checked.
* @return {boolean} True if the string is a palindrome, false otherwise.
*/
const isPalindrome = (str) => {
  if (str === undefined || str === null || ( str !== null && str.lenght === 0)) {
    return false;
  }
  const deque = new Deque();
  let isPalindrome = true;
  let first, last;
  str = str.toLowerCase().split(' ').join('');
  for (let i = 0; i < str.length; i++) {
    deque.addBack(str[i]);
  }
  while (deque.size() > 1) {
    first = deque.removeFront();
    last = deque.removeBack();
    if (first !== last) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};

export default isPalindrome;