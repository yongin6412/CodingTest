/**
 * 문제
 * 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (array, n) => {
  return array.filter((x) => x === n).length;
};

console.log(solution([0, 2, 3, 4], 1));
