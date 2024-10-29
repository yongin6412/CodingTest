/**
 * 문제
 * 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
 */

const solution = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    arr1.forEach((arr) => (arr1Sum += arr));
    arr2.forEach((arr) => (arr2Sum += arr));
    return arr1Sum > arr2Sum ? 1 : arr1Sum < arr2Sum ? -1 : 0;
  } else {
    return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : 0;
  }
};

console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
