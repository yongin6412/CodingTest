/**
 * 문제
 * 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, indices) => {
  const str = [...my_string];
  indices.sort((a, b) => b - a).map((num) => str.splice(num, 1));
  return str.join("");
};

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
