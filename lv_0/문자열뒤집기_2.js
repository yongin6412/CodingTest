/**
 * 문제
 * 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (my_string, s, e) => {
  const str = [...my_string];
  const reverseStr = [];
  for (let i = s; i <= e; i++) {
    reverseStr.push(my_string[i]);
  }

  str.splice(s, reverseStr.length, ...reverseStr.reverse());
  return str.join("");
};

console.log(solution("Progra21Sremm3", 6, 12));
