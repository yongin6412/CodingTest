/**
 * 문제
 * 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
 */

// const solution = (arr, idx) => {
//   let result = 0;
//   for (let i = idx; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       result = i;
//       break;
//     }
//     result = -1;
//   }
//   return result;
// };

const solution = (arr, idx) => {
  return arr.indexOf(1, idx);
};

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
console.log(solution([1, 1, 1, 1, 0, 0, 1], 4));
