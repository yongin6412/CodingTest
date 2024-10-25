/**
 * 문제
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

// const solution1 = (my_string, k) => {
//   let str = "";
//   for (let i = 0; i < k; i++) {
//     str += my_string;
//   }
//   return str;
// };

const solution2 = (my_string, k) => {
  return my_string.repeat(k);
};

console.log(solution2("string", 3));
