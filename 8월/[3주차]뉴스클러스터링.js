function solution(str1, str2) {
  let answer = 0;
  let arr1 = [];   //str1을 2단위로 잘라 넣는다
  let arr2 = [];   //str2를 2단위로 잘라 넣는다. 
  //자를때 주의사항: 영문자로 된 글자쌍만 유효
  //테스트케이스 4,9,10,11 
  // A = {1, 1, 2, 2, 3}, B = {1, 2, 2, 4, 5}
  //교집합 A ∩ B = {1, 2, 2}, 합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}
  let gongArr1 = new Map();
  let gongArr2 = new Map();
  let gong = 0;  //공집합 갯수
  let hop = 0;  //합집합 갯수(공집합 제외)
  for(let i=0; i<str1.length-1; i++){
      let str = (str1[i]+str1[i+1]).toLowerCase().replace(/[^a-z]/g, 0);
      if(!str.includes('0')){     
          arr1.push(str);
      };
  };    
  for(let i=0; i<str2.length-1; i++){
      let str = (str2[i]+str2[i+1]).toLowerCase().replace(/[^a-z]/g, 0);
      if(!str.includes('0')){
          arr2.push(str);
      };  
  };     //문자열을 2글자 단위로 잘라서 배열에 넣는다! (특수문자가 존재하는 경우는 제외)
  //만약에 두 집합에 원소 a가 있는데 그 개수가 작을 경우가 공집합
  for(let x of arr1){
      if(arr2.includes(x)){  //arr1의 원소가 arr2에 존재하는 경우
          if(gongArr1.has(x)) gongArr1.set(x, gongArr1.get(x)+1);
          else gongArr1.set(x, 1);   
      }
  }
  for(let x of arr2){
      if(arr1.includes(x)){ 
          if(gongArr2.has(x)) gongArr2.set(x, gongArr2.get(x)+1);
          else gongArr2.set(x, 1);   
      }
  }
  for(let [k,v] of gongArr1){
      gong+=Math.min(gongArr1.get(k), gongArr2.get(k)); 
  }  

  hop = arr1.length+arr2.length-gong;
  gong===hop?answer=65536:answer=parseInt(gong/hop*65536);
  return answer;
} 