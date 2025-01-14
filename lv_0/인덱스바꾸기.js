/**
 * 문제
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (my_string, num1, num2) => {
  const result = [...my_string];
  [result[num1], result[num2]] = [result[num2], result[num1]];
  return result.join("");
};

console.log(solution("hello", 1, 2));
