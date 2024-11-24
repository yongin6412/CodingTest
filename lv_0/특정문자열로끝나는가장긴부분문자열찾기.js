/**
 * 문제
 * 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
 */

// const solution = (myString, pat) => {
//   let num = [];
//   let max;
//   for (let i = 0; i < myString.length; i++) {
//     if (myString.indexOf(pat, i) !== -1) {
//       num.push(i);
//     }
//   }
//   max = Math.max(...num);
//   return myString.slice(0, max + pat.length);
// };

const solution = (myString, pat) => {
  const num = myString.lastIndexOf(pat) + pat.length;
  return myString.slice(0, num);
};

console.log(solution("AbCdEFG", "dE"));
// console.log(solution("AAAAaaaa", "a"));
