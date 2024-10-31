/**
 * 문제
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  let result = 0;

  if (num_list.length >= 11) {
    num_list.forEach((num) => (result += num));
  } else {
    result = 1;
    num_list.forEach((num) => (result *= num));
  }

  return result;
};

console.log(solution([2, 3, 4, 5]));
