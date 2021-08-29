function solution(m, musicinfos) {
  let satisfy = [];   
  for(let x of musicinfos){
      x = x.split(',');
      let time = 0;  //경과시간
      let hours = [];
      let minutes = [];
      hours.push(x[0].split(':')[0], x[1].split(':')[0]);
      minutes.push(x[0].split(':')[1], x[1].split(':')[1]);
      time = (hours[1]-hours[0])*60-Number(minutes[0])+Number(minutes[1]);
      
      let str = melody(x[3], time);  //방송된 곡
      // 주의: 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다. m: C#BCC# str:C#BCC  
      let sound='';
      let startTime=Number(x[0].split(':').join(''));
      if(mLength(m)>time) sound=melody(m, time);
      else sound=m;
      if(sound[sound.length-1]==='#'){ //m: C#BCC# str:C#BCC#BCC#BCC#CCAB 
          if(str.includes(sound)) satisfy.push([x[2], time, startTime]);
      }else{      //sound 맨끝이 #가 아닐 경우                   
          if(str.includes(sound)){  
              //m:CC#BC -> CC#BC# (x) BCC#BCC#BCC#BCC#B (o) ABC  ->  ABC#DEF (X) -> ABC#ABC (o) 
              //#이 있으면 다음 인덱스부터 다시 검사..
              for(let i=0; i<str.length; i++){
                  let idx = str.indexOf(sound,i); 
                  if(idx>=0){ 
                      if(str[idx+sound.length]!=='#'){
                          satisfy.push([x[2], time, startTime]);
                          break;                        
                      }else i+=(idx+sound.length);
                  }else break; //없다는 뜻
              }
          }
      }
  }
  if(satisfy.length===0) return '(None)';
  else if(satisfy.length===1) return satisfy[0][0];
  else{  //여러개일 경우 라디오에서 재생된 시간이 제일 긴 음악 제목
      // 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
      satisfy = satisfy.sort((a,b)=>{
          if(a[1]>b[1]) return -1;
          else if(a[1]<b[1]) return 1;
          else return a[2]-b[2];
      });
      return satisfy[0][0];
  }
} 
function melody(mel, length){ 
  let str = '';
  let i = 0;
  let k = length;
  while(str.length<k){
      if(mel[i%mel.length+1]==='#'){
          str+=(mel[i%mel.length]+mel[i%mel.length+1]);
          i++;
          k++;
      }else str+=(mel[i%mel.length]);
      i++;
  }; 
  return str;
}

function mLength(mel){
  let n=0;
  for(let x of mel){
      if(x!=='#') n++; 
  }
  return n;
}