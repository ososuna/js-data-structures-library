import Queue from './queue.js';

/** 
* Hot potato game simulation.
* @summary Time complexity: O(n * m), where n represents the number of elements in the queue and m represents the number of times the elements are passed around before the game ends.
* @param {any[]} elements - Players in the game.
* @param {number} num - Number of times the potato is passed around before the game ends.
* @return {object} An object containing the list of eliminated players and the winner of the game.
*/
const hotPotatoGame = (elements, num) => {
  const queue = new Queue();
  const eliminatedList = [];

  for (let index = 0; index < elements.length; index++) {
    queue.enqueue(elements[index]);
  }

  while(queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
};

export default hotPotatoGame;