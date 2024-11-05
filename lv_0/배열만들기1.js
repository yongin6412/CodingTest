/**
 * 문제
 * 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (n, k) => {
  const result = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % k === 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(solution(10, 3));
console.log(solution(15, 5));
