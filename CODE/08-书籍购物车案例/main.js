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
  /*methods: {
    getFinalPrice(price) {
      return '￥' +  price.toFixed(2);
    }
  },*/
  filters: {
    showPrice(price) {
      return '￥' +  price.toFixed(2);
    }
  }
});