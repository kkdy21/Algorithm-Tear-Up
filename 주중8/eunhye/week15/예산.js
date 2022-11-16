function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  // 예산 정렬
  d.sort((a, b) => {
    return a - b;
  });

  for (i = 0; i < d.length; i++) {
    // 지원할 돈을 sum에 모두 담아서 budget과 비교, 넘치지 않으면 answer ++
    sum += d[i];
    if (sum < budget || sum == budget) {
      answer += 1;
    }
  }

  return answer;
}

// 정확성
// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.16ms, 33.5MB)
// 테스트 11 〉	통과 (0.16ms, 33.6MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (0.16ms, 33.5MB)
// 테스트 14 〉	통과 (0.17ms, 33.4MB)
// 테스트 15 〉	통과 (0.16ms, 33.5MB)
// 테스트 16 〉	통과 (0.16ms, 33.5MB)
// 테스트 17 〉	통과 (0.16ms, 33.4MB)
// 테스트 18 〉	통과 (0.16ms, 33.5MB)
// 테스트 19 〉	통과 (0.16ms, 33.5MB)
// 테스트 20 〉	통과 (0.14ms, 33.4MB)
// 테스트 21 〉	통과 (0.16ms, 33.5MB)
// 테스트 22 〉	통과 (0.14ms, 33.4MB)
// 테스트 23 〉	통과 (0.15ms, 33.5MB)
