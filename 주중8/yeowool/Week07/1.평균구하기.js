// 프로그래머스 평균구하기
// 난이도 :  level 1
// 풀이시간 :  5분 내
// 메모리 :	  KB      
// 시간 :   ms      

/*
문제
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5
*/

/*
1. for문으로 arr를 순회하며 answer에 arr의 i번째 요소를 더해준다.
2. for문 밖에서 arr의 길이만큼 더해진 answer를 나눠서 return 한다.

두번째 풀이
1. reduce로 arr를 모두 더한 뒤 arr의 길이로 나눠준것을 바로 return한다.
*/

function solution(arr) {
    var answer = 0;
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer / arr.length

}

/*
테스트 1 〉	통과 (0.07ms, 30MB)
테스트 2 〉	통과 (0.04ms, 30MB)
테스트 3 〉	통과 (0.10ms, 30MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.04ms, 30MB)
테스트 6 〉	통과 (0.06ms, 29.9MB)
테스트 7 〉	통과 (0.09ms, 30MB)
테스트 8 〉	통과 (0.11ms, 29.8MB)
테스트 9 〉	통과 (0.04ms, 29.9MB)
테스트 10 〉	통과 (0.06ms, 30.2MB)
테스트 11 〉	통과 (0.08ms, 30MB)
테스트 12 〉	통과 (0.05ms, 29.8MB)
테스트 13 〉	통과 (0.04ms, 29.5MB)
테스트 14 〉	통과 (0.05ms, 30.1MB)
테스트 15 〉	통과 (0.09ms, 29.8MB)
테스트 16 〉	통과 (0.04ms, 29.9MB)

*/


function solution(arr) {

    return arr.reduce((a,b) => a + b) / arr.length; 

}


/*
테스트 1 〉	통과 (0.08ms, 30.1MB)
테스트 2 〉	통과 (0.04ms, 30MB)
테스트 3 〉	통과 (0.11ms, 30MB)
테스트 4 〉	통과 (0.07ms, 30.1MB)
테스트 5 〉	통과 (0.09ms, 30.1MB)
테스트 6 〉	통과 (0.05ms, 29.9MB)
테스트 7 〉	통과 (0.06ms, 29.9MB)
테스트 8 〉	통과 (0.08ms, 30MB)
테스트 9 〉	통과 (0.05ms, 30MB)
테스트 10 〉	통과 (0.05ms, 30MB)
테스트 11 〉	통과 (0.05ms, 30.1MB)
테스트 12 〉	통과 (0.07ms, 30.1MB)
테스트 13 〉	통과 (0.05ms, 30MB)
테스트 14 〉	통과 (0.06ms, 29.9MB)
테스트 15 〉	통과 (0.12ms, 29.9MB)
테스트 16 〉	통과 (0.05ms, 29.9MB)

*/ 