// ooutput-btnとういうidを持つHTML要素を取得し、定数に代入する
const outputBtn = document.getElementById('output-btn');

// HTML要素がクリックされた時にイベント処理を実行する
outputBtn.addEventListener('click', () => {
  console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const childList = document.createElement('li');

  // 作成したli要素に「これはリスト要素でう」というテキストを追加する
  childList.textContent = 'これはリスト要素です';

  // 作成したli要素をul要素の末尾として追加する
  parentList.appendChild(childList);
});

// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
  const text = document.forms.textForm.textBox.value;
  
  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click', () => {
  const area = document.forms.areaForm.area.value;
  console.log(area);
})


const osBtn = document.getElementById('os-btn');
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、選択さされていれば出力
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }    
  }
})