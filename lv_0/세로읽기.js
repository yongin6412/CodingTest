/**
 * 문제
 * 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, m, c) => {
  const sliceStr = [];
  for (let i = 0; i < my_string.length; i += m) {
    sliceStr.push(my_string.slice(i, i + m));
  }
  const result = sliceStr.map((str) => str[c - 1]);
  return result.join("");
};

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
