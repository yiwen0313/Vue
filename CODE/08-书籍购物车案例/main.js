const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: 85.00,
        counter:1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2006-2',
        price: 59.00,
        counter:1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        data: '2008-10',
        price: 39.00,
        counter:1
      },
      {
        id: 4,
        name: '《代码大全》',
        data: '2006-3',
        price: 128.00,
        counter:1
      }
    ]
  },
  methods: {
    /*getFinalPrice(price) {
      return '￥' +  price.toFixed(2);
    }*/
    increment(index) {
      this.books[index].counter++;
    },
    decrement(index) {
      this.books[index].counter--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      // 1.普通的 for循环
     /* let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].counter;
      }
      return totalPrice;*/


      // 2. for (let i in this.books)
      /*let totalPrice = 0;
      for (let i in this.books) {
        totalPrice += this.books[i].price * this.books[i].counter;
      }
      return totalPrice;*/


      // 3. for (let i of this.books)
      /*let totalPrice = 0;
      for (item of this.books) {
        totalPrice += item.price * item.counter;
      }
      return totalPrice;*/


      // 4. reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.counter;
      }, 0);
    }
  },
  filters: {
    showPrice(price) {
      return '￥' +  price.toFixed(2);
    }
  }
});



