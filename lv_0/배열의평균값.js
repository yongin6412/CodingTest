/**
 * 문제
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 */

// const solution = (numbers) => {
//   let sum = 0;
//   numbers.map((number) => (sum += number));
//   return sum / numbers.length;
// };
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const solution = (numbers) => {
  const sum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum / numbers.length;
};

// reduce함수의 첫 번째 매개변수는 누적되는 값이고 초기값을 지정해줄 수 있다. 두 번쨰 매개변수는 현재 순회되고 있는 값이라고 보면된다.

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
