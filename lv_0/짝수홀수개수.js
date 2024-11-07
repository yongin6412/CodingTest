/**
 * 문제
 * 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (num_list) => {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return [even, odd];
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
