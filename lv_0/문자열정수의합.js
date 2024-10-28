/**
 * 문제
 * 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_str) => {
  return num_str.split("").reduce((acc, cur) => Number(acc) + Number(cur));
};

console.log(solution("1000000"));
