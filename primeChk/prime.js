'use strict';

while(true) {
    let num,
    i,
    j,
    result,
    string = '';
  num = prompt('양의 정수를 입력하세요. 종료: 0', 10);
  num = Number(num);

  if(num === 0) {
    alert('종료합니다.');
    break;
  } else if(num < 0) {
    alert('다시 입력하세요.');
    continue;
  }

  for(i=2; i<=num; i++) {
    for(j=2; j<i; j++) {
      if(i%j === 0)
        break;
    }
    if(j === i)
      string += j + ', '
  }
  result = string.substring(0, string.length-2);
  alert(`${num}: ${result}`);
}