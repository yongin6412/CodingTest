/**
 * 문제
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 */

const solution = (n) => {
  let num = n.toString();
  return [...num].reduce((acc, cur) => acc + parseInt(cur), 0);
};

console.log(solution(930211));
