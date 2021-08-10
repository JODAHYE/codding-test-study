function solution(s) {
  let strLen = Number.MAX_SAFE_INTEGER;
  if(s.length===1) return 1;
  for(let i=1; i<=Math.floor(s.length/2); i++){
      let arr = [];
      let str='';
      let k=0;    
      let j=0;
      while(j<s.length/i){  
          arr.push(s.substr(k, i)); 
          k=k+i;  
          j++;        
      }   //문자열을 잘라서 배열로 넣음
      while(arr.length){
          let num=1;
          let tmp=arr.shift();
          while(arr[0]===tmp){
              arr.shift();
              num++;                
          }
          num>1?str+=(num+tmp):str+=tmp;  //새로운 문자열로 반환  
      }
      if(str.length<strLen) strLen = str.length;
  }
  return strLen;
}