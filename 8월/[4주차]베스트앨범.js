function solution(genres, plays) {
  var answer = [];
  let song = [];
  let hash = new Map();
  for(let i=0; i<genres.length; i++){
      song.push([genres[i], i, plays[i]]);    
      if(!hash.has(genres[i])){
          hash.set(genres[i], plays[i]);
      }else{
          hash.set(genres[i], hash.get(genres[i])+plays[i]);
      }
  };
  song = song.sort((a,b)=>{return b[2]-a[2]});
  hash = [...hash.entries()].sort((a, b)=>b[1]-a[1]);
  for(let i=0; i<hash.length; i++){
      let target = hash[i][0];
      let k=0;
      let num = 0;
      while(k<song.length && num<2){
          if(song[k][0]===target){
              answer.push(song[k][1]);
              num++;
          }
          k++;
      }
  }
  return answer;
}