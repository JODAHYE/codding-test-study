function solution(weights, head2head) {
  let answer = [];
  let players = [];  
  for(let i=0; i<weights.length; i++){
      let wnum = 0;   //이긴 횟수 (W의 갯수)
      let biggerWnum = 0;  //자기몸무게보다 무거운사람을 이긴 수
      let playnum = head2head.length;  //총경기수 (승률구할때)
      for(let x of head2head[i]){
          if(x==='W') wnum++;
          if(x==='N') playnum--;
      }
      wnum = wnum/playnum*100   //승률
      for(let j=0; j<weights.length; j++){  ////자기몸무게보다 무거운사람을 이긴 수
          if(weights[i]!==weights[j]) {
              if(weights[i]<weights[j] && head2head[i][j]==='W') biggerWnum++;                
          }
      }
      players.push([weights[i], wnum, biggerWnum, i+1])
  }
  players.sort((a,b)=>{
      if(a[1]<b[1]) return 1;
      else if(a[1]>b[1]) return -1;
      else{
          if(a[2]<b[2]) return 1;
          else if(a[2]>b[2]) return -1;
          else{
              if(a[0]<b[0]) return 1;
              else if(a[0]>b[0]) return -1;
              else return 0;
          }
      }
  });
  answer = players.map(v=> v[v.length-1]);
  return answer;
}