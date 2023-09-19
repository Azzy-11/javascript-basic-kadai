class Product {
  constructor(name, price, category) {
    // インスタンスにプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // メソッド定義
  describe() {
    console.log('この商品名は' + this.name + 'です。')
  }
}

const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

console.log(shampoo);
console.log(coffee);

// メソッド呼び出す
shampoo.describe();

// 通常のオブジェクトにメソッド定義
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします！');
  }
}

user.greet();