// [PGS] JadenCase 문자열 만들기 / leve2
// 난이도 :  level 2
// 풀이시간 : 30분
// 점수 : 11

/*
문제
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
입출력 예
s	return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week"
*/
  

/*
< 의사코드 >
1. str로 선언하여 소문자로 모두 바꿔준 후 공백 기준으로 쪼갠다
2. map안에서 화살표함수로 쪼갠 단어 하나씩 다시 요소를 확인한다.
3. map안에서 하나씩 확인하기 위해 받아오는 el을 배열로 쪼갠다음 요소의 0번째 index의 타입이
    문자인지 아닌지 확인하여 대문자로 변환한다
4. 화살표 함수 안에서 return 할 때 join해준다
5. 최종 return에서 한번 더 join(" ")을 하지 않으면 배열로 return이 되어 오답이 된다
*/

function solution(s) {
    let str = s.toLowerCase().split(" ");
    return str.map(el=>{
        let arr = [...el]  
        typeof arr[0] === "string" ? 
            arr[0] = arr[0].toUpperCase()
            : arr[0]
            return arr.join("")
    }).join(" ")
}

/*
 테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.12ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.6MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.06ms, 33.4MB)
테스트 11 〉	통과 (0.11ms, 33.5MB)
테스트 12 〉	통과 (0.12ms, 33.6MB)
테스트 13 〉	통과 (0.06ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
테스트 15 〉	통과 (0.09ms, 33.4MB)
테스트 16 〉	통과 (0.11ms, 33.5MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)
*/