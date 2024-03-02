import Deque from './deque.js';

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