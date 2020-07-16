'use strict';

while(true) {
    let num,
    i,
    temp;
  num = prompt('양의 정수를 입력하세요. 종료: 0', 37);
  num = Number(num);

  if(num === 0) {
    alert('종료합니다.');
    break;
  } else if(num < 0) {
    alert('다시 입력하세요.');
    continue;
  }

  for(i=2; i<num; i++) {
    if(num%i === 0)
      break;
  }

  if(i === num){
    alert(`${num}은 소수입니다.`);
  } else {
    alert(`${num}은 소수가 아닙니다.`);
  }
}