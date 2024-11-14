/**
 * 문제
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

// const solution = (str1, str2) => {
//   const totalLength = str1.length + str2.length;
//   const result = [];
//   let str1Index = 0;
//   let str2Index = 0;
//   for (let i = 0; i < totalLength; i++) {
//     if (i % 2 === 0) {
//       result.push(str1[str1Index]);
//       str1Index++;
//     } else {
//       result.push(str2[str2Index]);
//       str2Index++;
//     }
//   }
//   return result.join("");
// };

const solution = (str1, str2) => {
  const result = [...str1].map((str, i) => str + str2[i]);
  return result.join("");
};

console.log(solution("aaaaa", "bbbbb"));
console.log(solution("acegi", "bdfhj"));
