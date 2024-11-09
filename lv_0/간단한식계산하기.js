/**
 * 문제
 * 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (binomial) => {
  const arr = binomial.split(" ");
  if (arr.includes("+")) {
    return Number(arr[0]) + Number(arr[2]);
  } else if (arr.includes("-")) {
    return Number(arr[0] - arr[2]);
  } else {
    return Number(arr[0] * arr[2]);
  }
};

console.log(solution("43 + 12"));
console.log(solution("0 - 7777"));
console.log(solution("40000 * 40000"));
