function solution(progresses, speeds) {
  var answer = [];
  let queue = progresses;
  
  while(queue.length){  //queue에 남아 있을 동안 계속 돔
      while(queue[0]<100){ //맨앞의 것이 먼저 나와야 하므로 맨 첫 원소를 기준으로 100이 안넘으면
          for(let i=0; i<queue.length; i++){   //반복문을 돌면서
              if(queue[i]<100) queue[i] += speeds[i];  
              //progress의 원소들 중에 100을 안넘는 원소들만 speed만큼씩 더해준다
          } //돌았을 때 맨 첫번째께 아직도 100을 안넘으면 계속 실행됨
      }        
      let i=0;
      while(queue[0]>=100){  
          //맨 앞에게 100을 넘으면 queue에서 빼준다. 빼준 후 남은 뒤의 원소도 100 넘을 경우 계속 반복
          queue.shift();
          speeds.shift();
          i++;
      }
      answer.push(i);
  }
  return answer;
}

//큐 자료구조를 이용하여 푼다. 