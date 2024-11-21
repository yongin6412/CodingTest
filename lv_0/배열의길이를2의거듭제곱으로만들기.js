/**
 * 문제
 * 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (arr) => {
  const length = arr.length;
  let nextPowerOfTwo = 1;
  while (nextPowerOfTwo < length) {
    nextPowerOfTwo = nextPowerOfTwo * 2;
  }
  while (arr.length < nextPowerOfTwo) {
    arr.push(0);
  }
  return arr;
};

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
