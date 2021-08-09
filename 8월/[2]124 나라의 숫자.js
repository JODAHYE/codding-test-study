function solution(n) {
  let answer = '';
  
  // n/3, n%3  ->1:0, 1 / 2:0, 2 / 3:1, 0 / 4: 1, 1 / 5: 1, 2 / 6: 2, 0 /7: 2, 1/8:2, 2/9: 3, 0  
  //3: 1, 0/ 6:2, 0 / 9:3, 0  10: 3 1
  //계속 3으로 나누면서 나머지가 1, 2인경우 그대로 더하고, 0인 경우 4로 만든다.
  while(n>0){
      if(n%3===1 || n%3===2){
          answer=n%3+answer;
          n=parseInt(n/3);
      }else{
          answer=4+answer;
          n=parseInt(n/3)-1;
      }
  }
  return answer;
}