function solution(n, works) {
  let answer = 0;
  // works의 원소들을 최대한 균등(평탄)하게 만든다  //[5,2,2] n=5  -> 4 2 2, 3 2 2, 2 2 2, 1 2 2, 1 1 2
  if(n===0){
      for(let x of works){
          answer+=Math.pow(x,2);
      }
      return answer;
  }else{
      let num = [...works];
      for(let i=0; i<n; i++){
          let worksSort = num.sort((a,b)=>b-a);
          num = worksSort.map((v, i)=>{
              if(i===0) v=v-1;
              return v;
          });                 
      }
      for(let x of num){
          if(x>0) answer+=Math.pow(x,2);
      }
      return answer;        
  }

}

//시간초과 걸림!!! (보류)
