function solution(files) {
  // 알파벳(대소문자 같음)=>숫자순(앞0은 상관X)=>알파벳, 숫자 같을 경우 순서 바뀌지 않음
  let filesSort = files.sort((a, b)=>{
      if(head(a)>head(b)) return 1;
      else if(head(a)<head(b)) return -1;
      else{
          if(num(a, head(a).length)>num(b, head(b).length)) return 1;
          else if(num(a, head(a).length)<num(b, head(b).length)) return -1;
          else return 0;
      }
  });
  return filesSort;
};

function head(f){
  let str = f.toLowerCase();
  let fhead = '';
  for(let i=0; i<str.length; i++){
      if((97<=str[i].charCodeAt() && str[i].charCodeAt()<=122)||str[i]===' '||str[i]==='-'||str[i]==='.') fhead+=str[i];
      else break;
  }
  return fhead;
}

function num(f, hl){
  let num='';
  for(let i=hl; i<f.length; i++){
      if(48<=f[i].charCodeAt() && f[i].charCodeAt()<=57) num+=f[i];
      else break;
  }
  return Number(num);
}