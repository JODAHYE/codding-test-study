function solution(record) {
  var answer = [];
  let name = new Map();
  
  for(let x of record){
      x = x.split(' ');
      if(x[0] === 'Enter') name.set(x[1], x[2]);
      if(x[0] === 'Change') name.set(x[1], x[2]);
  }
  for(let x of record){
      x = x.split(' ');
      if(x[0] === 'Enter') answer.push(name.get(x[1])+'님이 들어왔습니다.');
      if(x[0] === 'Leave') answer.push(name.get(x[1])+'님이 나갔습니다.');
  }
  return answer;
}

//해시 자료구조를 이용하여 key값으로 아이디를, value값으로 닉네임을 넣는다!
