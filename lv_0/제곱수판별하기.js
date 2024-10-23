/**
 * 문제
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
 */

const solution = (n) => {
  for (let i = 0; i < n / 2; i++) {
    if (i * i === n) {
      return 1;
    }
  }
  return 2;
};

console.log(solution(144));

/**
 * 문제풀이
 * 매개변수로 들어오는 값의 제곱수니깐 해당 값을 반으로 나눈값까지만 반복하면 된다.
 */
