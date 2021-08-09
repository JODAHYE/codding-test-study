function solution(s) {
  let answer = [];
//모든 0 제거 후 남은 길이 이진수 변화 -> 0제거 후 길이 이진수 변화 반복 (회차, 0갯수 push)
  let yung = 0;
  let turn = 0;
  while(s.length>1){
      let len = 0;  //변환후 길이
      for(let i=0; i<s.length; i++){
          s[i]==='1'?len++:yung++;
      }
      s = len.toString(2);
      turn++;
  }
  answer.push(turn, yung);
  return answer;
}