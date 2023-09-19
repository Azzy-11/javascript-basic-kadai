// 朝の挨拶関数定義
const sayGoodMorning = () => {
  console.log('おはようございます！');
  console.log('機能はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

// 夜の挨拶関数定義
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れ様でした。');
}

// 関数を呼び出す
sayGoodMorning();
sayGoodEvening();

// 引数priceに送料を加算する関数を定義
const caluculateTotal = (price) => {
  console.log(price + 500 + '円');
}

// 引数を入れて関数を呼び出す
caluculateTotal(1200);

// 引数priceに引数shippingfeeを加算する関数を定義
const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}

// 引数を入れて関数を呼び出す
addTwoArguments(1200, 500);

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
  return num * 2;
}

// 戻り値の出力
console.log(double(30));


// 関数の中で定数を使う
const useVariable = () => {
  const userName = '侍太郎'
  console.log(userName);
}

// 関数を呼び出す
useVariable();

// 関数の外で使う
console.log(userName);