function solution(price, money, count) {
  let answer = 0;
  let sum = 0;
  for(let i=1; i<=count; i++){
    sum+=(price*i);
}
  money>=sum?answer=0: answer = (money-sum)*(-1);
  return answer;
}