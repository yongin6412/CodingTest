/**
 * 문제
 * 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
 */

// const solution = (n) => {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(new Array(n).fill(0));
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         result[i][j] = 1;
//       }
//     }
//   }

//   return result;
// };

const solution = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(i === j ? 1 : 0);
    }
    result.push(arr);
  }
  return result;
};

console.log(solution(6));
