/**
 * 문제
 * 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// const solution = (array) => {
//   const result = [];
//   let maxNum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxNum) {
//       maxNum = array[i];
//       result.length = 0;
//       result.push(array[i], i);
//     }
//   }
//   return result;
// };

// console.log(solution([9, 10, 11, 8]));

const solution = (array) => {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
};

console.log(solution([9, 15, 11, 8]));
