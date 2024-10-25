/**
 * 문제
 * 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

// const solution1 = (my_string) => {
//   let result = 0;
//   const str = my_string.split("");
//   str.forEach((i) => {
//     if (!isNaN(i)) {
//       result += Number(i);
//     }
//   });
//   return result;
// };

// console.log(solution1("aAb1B2cC34oOp"));

const solution2 = (my_string) => {
  return my_string.split("").reduce((acc, cur) => {
    Number(cur) ? (acc += Number(cur)) : acc;
    return acc;
  }, 0);
};

console.log(solution2("aAb1B2cC34oOp"));
