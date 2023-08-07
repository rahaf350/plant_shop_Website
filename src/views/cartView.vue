<template>
   <div class="cart d-flex flex-lg-row-reverse flex-column">
      <div class="right d-flex justify-content-end align-items-end d-flex flex-column ">
        <div class="right-header">
          <h4>عربة التسوق (<span class="m-0 p-0 align-self-center">{{ cartCount }}</span>) </h4>
        </div>

        <div class="product-info  d-flex my-3" v-for="(item, index) in cartItems" :key="index">
          <span class="ms-3 price-span">{{item.price + " RS"}}</span>
          <div class="d-flex flex-row align-items-start">
            

            <div class="me-3 d-flex flex-column justify-content-end align-items-end">
          
                <span><b>{{ item.name }}</b></span>
            

              <div class="my-2 d-flex flex-row">
                <button class="inc-dec" @click="incrementItem(item)">+</button>
                <span class="quantity"><p class="p-0 m-0">{{ item.quantity }}</p></span>
                <button class="inc-dec" @click="decrementItem(item)">-</button>
              </div>
            </div>

            <div class="image-info" v-for="(eachPlant, k) in jsonData" :key="k" >
              <div v-if="eachPlant.name === item.name">
                <img  class="img-fluid" :src="getImageUrl(eachPlant.mainImage)">
              </div>
            </div>
            
          </div>
        </div>
       
      </div>

      <div class="left">
     
          <div class=" left-div d-flex flex-row-reverse">
            <b>إجمالي المنتجات</b>
            <span class="total"> {{ total }}</span>
          </div>

          <div class=" left-div d-flex flex-row-reverse">
            <b >تكاليف الشحن</b>
            <div  v-if="total > 500">مجاني</div>
            <div  v-else-if="total == 0">0</div>
            <div  v-else>35</div>
          </div>

          <div class="left-div d-flex flex-row-reverse">
            <b>الإجمالي</b>
            <span  v-if="total > 500" class="total"> {{ total }}</span>
            <span  v-else-if="total == 0" class="total">0</span>
            <span  v-else class="total"> {{ total + 35 }}</span>
          </div>


        <button>إجراء الطلب</button>



      </div>
      </div>





  </template>
  
  <script>
    import { mapState } from 'vuex'
  export default {
    name: 'cartCom',
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
      jsonData: state => state.jsonData
    }),
    cartCount() {
      return this.$store.state.cart.count
    },
    cartItems() {
    const groupedItems = this.$store.state.cart.items.reduce((groups, item) => {
      if (!groups[item.name]) {
        groups[item.name] = {
          name: item.name,
          price: item.price,
          quantity: item.quantity,
      };
      } else {
        groups[item.name].price += item.price;
        groups[item.name].quantity += item.quantity;
      }
      return groups;
    }, {});
    return Object.values(groupedItems);
  },
    total() {
      return this.$store.state.cart.total
    },
    priceItem(){
      return this.$store.state.cart.priceItem
    },
  },
  methods: {
    getImageUrl(imageName) {
          let image = require.context('@/assets/img/');
          return image('./'+imageName);
      },
    incrementItem(item) {
      this.$store.commit("incrementCart", item);
    },
    decrementItem(item) {
      this.$store.commit("decrementCart", item);
    },
  },
    created() {
      this.$store.dispatch('fetchJsonData');
      window.scrollTo(0, 0);
  },
}

  </script>
  
  <style scoped>
  .right-header{
    border: 1px solid black;
    width: 100%;
  }

  .image-info img{
    height: 130px;
    width: 100px;
    border: 1px solid black;
  }
  .product-info{
    justify-content:space-between ;
    margin:2%;
    width: 40vw;
  }
/*.product-info-container{
    max-height: 70vh;
    overflow-y: scroll;
    width: 45vw;
  } */

  .inc-dec{
    border:none;
    background-color: white;
  }
  .quantity{
    background-color: rgb(236, 234, 234);
    width: 20px;
    height: 20;
  }

  .left-div{
    justify-content: space-between;
    margin:  2% 0;
  }

  .cart{
    margin:6%;
    display: flex;
    justify-content: center;
    align-items: center;
   }
  .cart-icon{
    cursor: pointer;
  }
  .cart-items{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .left button{
    padding: 1% 10%;
    margin-top: 5%;
  }
  @media (min-width:991px) and (max-width:1920px) {
    .left {
      border: 1px solid black;
      width: 40vw;
      padding: 2%;
      position: fixed; /* Add this line */
      left: 5%; /* Add this line */
      top: 35%;
    }
    .right {
      border: 1px solid black;
      width: 60vw;
      padding: 2%;
      margin-left: 50%; /* Add this line */
    }

  }
  @media screen and (max-width:990px) {
    .product-info{
      justify-content:space-between ;
      margin:2%;
      width: 85vw;
    }
    .cart{
      margin-top: 20%;
    }
    .right{
      border: 1px solid black;
      width: 90vw;
      margin: 2%;
      padding: 2%;
    }
    .left{
    border: 1px solid black;
      margin: 2%;
      width: 90vw;
    padding: 2%;
  }
  .left button{
    margin: 10px;
  }
  }
  </style>
  