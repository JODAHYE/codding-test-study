function solution(scores) {
  var answer = '';

  for(let i=0; i<scores.length; i++){
      let arr=[];
      let num=0;
      let avg=0;
      for(let j=0; j<scores.length; j++){
          arr.push(scores[j][i]);
      }
      let isMax=arr.filter(v=>v===Math.max(...arr));
      let isMin=arr.filter(v=>v===Math.min(...arr));
      if(isMax.length===1){
          if(scores[i][i]===isMax[0]) num=scores[i][i];
      }
      if(isMin.length===1){
          if(scores[i][i]===isMin[0]) num=scores[i][i];
      }
      if(num>0){
          avg = (arr.reduce((acc,cur)=>acc+cur)-num)/(scores.length-1);            
      }else avg = (arr.reduce((acc,cur)=>acc+cur)-num)/scores.length;
      if(avg<50) answer+='F';
      else if(avg<70) answer+='D';
      else if(avg<80) answer+='C';
      else if(avg<90) answer+='B';
      else answer+='A';   
  }
  return answer;
}