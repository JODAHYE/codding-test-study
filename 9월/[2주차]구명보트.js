function solution(people, limit) {
  var answer = 0;
  let peopleSort = people.sort((a,b) => a-b);
  let s=0;
  let e = peopleSort.length-1;
  while(s<=e){
      if((peopleSort[s]+peopleSort[e])<=limit) s++;
      e--;
      answer++;
  }
  return answer;
}

//sort는 배열 안의 요소를 string으로 변환 후 유니코드로 정렬한다. 따라서 2자리수 이상을 비교할 때 callback함수를 꼭 넣어야 한다.
