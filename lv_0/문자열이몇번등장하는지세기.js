/**
 * 문제
 * 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
 */

const solution = (myString, pat) => {
  let count = new Set();
  for (let index = 0; index < myString.length; index++) {
    let foundIndex = myString.indexOf(pat, index);
    if (foundIndex !== -1) {
      count.add(foundIndex);
    }
  }
  return count.size;
};

console.log(solution("banana", "ana"));
