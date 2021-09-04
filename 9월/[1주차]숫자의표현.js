function solution(n) {
  var answer = 0;
  let num=1;
  if(n<=2) return 1;
  else{
      while(num<=n){  
          let sum=num;
          let i=num;
          while(sum<n){
              i++; 
              sum+=i;
          }
          if(sum===n) answer++;
          num++;
      }; 
      return answer;
  };
}

