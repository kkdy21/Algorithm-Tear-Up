//[PGS] 같은 숫자는 싫어

//for문 이용
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.7MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.6MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.6MB)
// 테스트 10 〉	통과 (0.05ms, 33.6MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.6MB)
// 테스트 14 〉	통과 (0.10ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.6MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 테스트 17 〉	통과 (0.04ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (13.85ms, 83MB)
// 테스트 2 〉	통과 (13.75ms, 83MB)
// 테스트 3 〉	통과 (13.73ms, 83MB)
// 테스트 4 〉	통과 (12.94ms, 83.3MB)

// filter 이용
// 테스트 1 〉	통과 (0.04ms, 33.7MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.08ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.6MB)
// 테스트 9 〉	통과 (0.05ms, 33.6MB)
// 테스트 10 〉	통과 (0.04ms, 33.5MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.6MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.5MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 테스트 17 〉	통과 (0.04ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (25.80ms, 83.1MB)
// 테스트 2 〉	통과 (25.20ms, 83.4MB)
// 테스트 3 〉	통과 (23.81ms, 83.3MB)
// 테스트 4 〉	통과 (26.25ms, 83.5MB)

function solution(arr){
  //     let result = [];
  //     let temp ;
      
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== temp) {
  //             result.push(arr[i]);
  //             temp = arr[i];
  //         }
  //     }
      
  //     return result;
      
      return arr.filter((el,i) => el !== arr[i+1])
  }