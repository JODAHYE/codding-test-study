function solution(n, words) {
  var answer = [];
  // 마지막 글자가 아닌 단어를 말함
  // 앞에서 말한 단어를 말함
  let isTrue = true;
  let falseNum = 0;
  let arr = [words[0]];
  let turn = 0;
  for(let i=1; i<words.length; i++){
      if(!arr.includes(words[i])) arr.push(words[i]);
      else{
          falseNum = i+1;
          isTrue=false;
          break;
      }
      if(words[i-1][words[i-1].length-1]!==words[i][0]){
          falseNum = i+1;
          isTrue=false;
          break;
      }       
  };     
  turn=Math.ceil(falseNum/n);
  falseNum%n===0?falseNum=n:falseNum=falseNum%n;
  isTrue===true?answer.push(0, 0):answer.push(falseNum, turn);
  return answer;
}