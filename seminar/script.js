'use strict';

let count;
const cntDisplay = document.getElementById('cntDisplay');
function cntWord(obj, maxLen) {
  let word = obj.value,
    i,
    oneChar = "",
    len,
    word2;
  count=0;
  for(i=0; i<word.length; i++) {
    oneChar = word.charAt(i);
    if(escape(oneChar).length > 4) {
      count += 2;
    } else {
      count++;
    }

    cntDisplay.innerText = "( " + count + " / 200 )";
    if(count === maxLen) {
      len = i+1;
    }
  }

  if(count>maxLen) {
    alert(`${maxLen}자를 초과 입력할 수 없습니다.`);
    word2 = word.substr(0, len);
    cntDisplay.innerText = "( " + maxLen + " / 200 )";
    obj.value = word2;
  }
}

function emptyChk(obj) {
  if(obj.value == "") {
    cntDisplay.innerText = "( 0 / 200 )";
  }
}

function chkInput() {
  let requiredFlag = true;

  $('.required').each((index, item) => {
    const type = item.type;
    if((type == 'text' || type == 'select-one') && item.value.length < 1) {
      item.focus();
      requiredFlag = false;
      if(requiredFlag === false) {
        alert('*은 필수 입력항목입니다.');
        return false;
      }
    } else if(type == 'checkbox' || type == 'radio') {
      requiredFlag = false;
      const name = item.name;
      const buttons = document.getElementsByName(name);
      for(let button of buttons) {
        if(button.checked) {
          requiredFlag = true;
        }
      }
      if(requiredFlag === false) {
        alert('*은 필수 입력항목입니다.');
        return false;
      }
    }
  });


  if(requiredFlag === true && confirm('등록하시겠습니까?')) {
    $('.table-responsive').fadeIn('fast');
    addList();
    return true;
  }
}


let row = 1; //몇 번째 행을 추가하는가
let dataArr = new Array();
function addList() {
  let i;
  const form = document.forms.form;
  const title = form.elements.title;
  const cost = form.elements.cost;
  const region = form.elements.region;
  const position = form.elements.position;
  const file = form.elements.file;
  dataArr[0] = new Array();
  dataArr[0] =  ['세미나 주제', '직책', '지역', '참가비', '다운로드', '삭제'];
  dataArr[1] = ['SW 교육 컨퍼런스', '개발자, 팀장, 과장, 부장', '서울', '유료', '<a class="ico-down" href="#"></a>', '<a class="ico-trash" href="#" onclick="deleteRow(1)"></a>'];
  dataArr[2] = ['2020 개발자 포럼', '개발자', '경기', '유료', '', '<a class="ico-trash" href="#" onclick="deleteRow(2)"></a>'];
  dataArr[3] = ['엑스퍼트 6월 세미나', '팀장, 부장', '인천', '유료', '<a class="ico-down" href="#"></a>', '<a class="ico-trash" href="#" onclick="deleteRow(3)"></a>'];

  let temp = "";
  row = dataArr.length;

  dataArr[row] = new Array();

  dataArr[row][0] = title.value;

  for(i=0; i<position.length; i++) {
    if(position[i].checked === true)
      temp += position[i].value + ", ";
  }
  dataArr[row][1] = temp.substr(0, temp.length-2);

  dataArr[row][2] = region.value;

  for(i=0; i<cost.length; i++) {
    if(cost[i].checked === true)
    dataArr[row][3] = cost[i].value;
  }

  if(file.value != "") {
    dataArr[row][4] = '<a class="ico-down" href="#"></a>';
  } else {
    dataArr[row][4] = "";
  }

  dataArr[row][5] = '<a class="ico-trash" href="#" onclick="deleteRow(' + row + ')"></a>';

  printTable();
}

function fileUpdate() {
  const form = document.forms.form;
  const file = form.elements.file;
  $('.attached').html(`<a class="ico-trash" onclick="fileDelete()"></a>${file.files[0].name}`);
}

function fileDelete() {
  const form = document.forms.form;
  const file = form.elements.file;
  file.value = '';
  $('.attached').html('');
}


function printTable() {
  let tbody = document.getElementById('tbody'),
    i,
    j,
    str = "";


  tbody.innerHTML = "";
  for(i=1; i<dataArr.length; i++) {
    if(dataArr[i] == '')
      continue;
    str += "<tr>"
    for(j=0; j<dataArr[0].length; j++) {
      str += "<td>" + dataArr[i][j] + "</td>";      
    }
    str += "</tr>";
  }
  tbody.innerHTML += str;
}


function deleteRow(rowIndex) {
  dataArr[rowIndex] = '';
  printTable();
}
