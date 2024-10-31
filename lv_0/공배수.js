/**
 * 문제
 * 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (number, n, m) => {
  return number % n === 0 && number % m === 0 ? 1 : 0;
};

console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));
