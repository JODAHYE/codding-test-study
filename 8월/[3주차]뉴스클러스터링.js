function solution(str1, str2) {
    let answer = 0;
    let interN = 0;  
    let unionN = 0;  
    let arr1 = addArr(str1);  
    let arr2 = addArr(str2); 
    //만약에 두 집합에 원소 a가 있는데 그 개수가 작을 경우가 공집합
    let interArr1 = searchInter(arr1, arr2);
    let interArr2 = searchInter(arr2, arr1);   
    for(let [k,v] of interArr1){   
        interN+=Math.min(interArr1.get(k), interArr2.get(k)); 
    }  

    unionN = arr1.length+arr2.length-interN;
    interN===unionN?answer=65536:answer=parseInt(interN/unionN*65536);
    return answer;
}

function addArr(str){  //2글자로 잘라 넣는 함수
    let arr = [];
    for(let i=0; i<str.length-1; i++){
       let s = (str[i]+str[i+1]).toLowerCase().replace(/[^a-z]/g, 0);
       if(!s.includes('0')) arr.push(s);
    };
    return arr;
   
}
function searchInter(arr1, arr2){   //공통으로 들어있는 원소를 찾아 Map 객체에 넣는 함수
    let interArr = new Map();
    for(let x of arr1){
        if(arr2.includes(x)){  //arr1의 원소가 arr2에 존재하는 경우
            if(interArr.has(x)) interArr.set(x, interArr.get(x)+1);
            else interArr.set(x, 1);   
        }
    }
    return interArr;
}