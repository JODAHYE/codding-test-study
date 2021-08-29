function solution(table, languages, preference) {
  let fields = {}; 
  let answer='';
  for(let i=0; i<table.length; i++){
      let tableSplit = table[i].split(' ');
      let lang = new Map();
      let k=5;
      for(let i=1; i<tableSplit.length; i++){
          lang.set(tableSplit[i], k);
          k--;
      }
      let sum=0;
      for(let i=0; i<languages.length; i++){
          if(lang.has(languages[i])) sum+=lang.get(languages[i])*preference[i];
      }
      fields[tableSplit[0]] = sum;
  }
  let arr = Object.entries(fields).sort((a,b)=>b[1]-a[1]);  //배열로 만들어 정렬한다.
  if(arr[0][1]!==arr[1][1]) return arr[0][0];  //최대 총합이 하나이면 리턴
  else {  //최대 총합이 두개 이상이면 
      let max = arr[0][1];
      let maxArr = [];
      for(let i=1; i<arr.length; i++){
          if(max===arr[i][1]) maxArr.push(arr[i][0]); 
      }
      maxArr = maxArr.sort();
      return maxArr[0];
  }
  return answer;
}