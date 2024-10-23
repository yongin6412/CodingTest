/**
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 */

const solution1 = (s1, s2) => {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        count += 1;
      }
    }
  }
  return count;
};
console.log(
  "solution1 : ",
  solution1(["a", "b", "c"], ["com", "b", "d", "p", "c"])
);

/**
 * solution1 문제풀이
 * 이중 for문을 사용해서 s1[i]를 s2[j]가 반복되는동안 값이 같은지 확인하는 방법
 */

const solution2 = (s1, s2) => {
  const arr = s1.filter((x) => s2.includes(x));
  return arr.length;
};

console.log(
  "solution2 : ",
  solution1(["a", "b", "c"], ["com", "b", "d", "p", "c"])
);

/**
 * s1배열에 filter함수를 사용해서 해당 값이 s2의 값에 해당되는지 확인하는 includes함수를 사용함.
 * includes함수를 사용하면 해당 값이 있는지 자기 배열에서 순회를 한다.
 */
