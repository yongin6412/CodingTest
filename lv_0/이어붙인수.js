/**
 * 문제
 * 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  let even = "";
  let odd = "";
  num_list.forEach((num) =>
    num % 2 === 0 ? (even += String(num)) : (odd += String(num))
  );
  return Number(even) + Number(odd);
};

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
