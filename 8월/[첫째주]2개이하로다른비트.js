function solution(numbers) {
  var answer = [];
  // 맨 끝이 0인 경우 -> 맨 끝 0을 1로 바꿔주면 되는데, => 십진수에서 단순히 1을 더하면 됨
  // 아닐 경우, 끝에서부터 01 찾아서-> 10으로
  for(let i=0; i<numbers.length; i++){
      let egin = '0'+numbers[i].toString(2);
      if(egin[egin.length-1]==='0'){
          answer.push(numbers[i]+1);
      }else{
          for(let j=egin.length-1; j>0; j--){
              if(egin[j]==='1' && egin[j-1]==='0'){
                  egin = egin.split('');
                  [egin[j], egin[j-1]]=[egin[j-1], egin[j]];
                  egin = egin.join('');
                  break;
              }
          }
          answer.push(parseInt(egin, 2));
      }
  }
  
  // 아래는 시간초과 실패코드
  // for(let j=0; j<numbers.length; j++){
  //     let egin = numbers[j].toString(2);
  //     let i=1;
  //     let tmp = false;
  //     while(tmp === false){
  //         let k=0;
  //         let num = (numbers[j]+i).toString(2);
  //         if(egin.length<num.length){
  //             egin = '0'.repeat(num.length-egin.length)+egin;
  //         };
  //         for(let i=0; i<egin.length; i++){
  //             if(egin[i]!==num[i]) k++; 
  //         };  
  //         if(k===1 || k===2){
  //             answer.push(numbers[j]+i);
  //             tmp = true;  
  //         }; 
  //         i++;   
  //     }       
  // } 

  return answer;
}

//참고 풀이:  https://dev-note-97.tistory.com/269