<template>
    <div class="navBar">
      <div class="container d-flex flex-row-reverse justify-content-between">
      <div class="logo d-flex"><h2 class="m-0 p-0 align-self-center">نبتة</h2><i class="fa-solid fa-seedling align-self-center"></i></div>

      <ul class="nav nav-underline flex-row-reverse justify-content-center ">
        <router-link :to="{name: 'HomeView'}" >
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" type="button">الرئيسية</button>
        </li>
      </router-link>
      <router-link :to="{name: 'PlantsView'}">
        <li class="nav-item">
          <button class="nav-link"  data-bs-toggle="tab" type="button">النباتات</button>
        </li>
      </router-link>
      <router-link :to="{name: 'ContactView'}">
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" type="button">تواصل معنا</button>
        </li>
      </router-link>
      </ul>  

      

      <div class="icons d-flex flex-row-reverse">
        <router-link class="router justify-content-center d-flex" :to="{name: 'cartView'}">
          <div class="cart-icon d-flex flex-row-reverse ms-2">
            <p class="m-0 p-0 align-self-center">{{ cartCount }}</p>
            <i class="fa-solid fa-cart-shopping align-self-center"></i>
          </div>
        </router-link>
        <!-- <div class="d-flex me-2"><i class="fas fa-search align-self-center"></i></div> -->
      </div>
     </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'navCom',
    data() {
      return {
      }
    },
  components: {
    },
    computed: {
    cartCount() {
      return this.$store.state.cart.count
    },
  }
}
  </script>

  
  <style scoped>
  .router{
    text-decoration: none;
    color: #1c2e0d;
  }
   

  .navBar{
    background-color: rgb(255, 255, 255);
    padding: 10px 0;
    border-bottom: 1px solid #1c2e0d;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 55555;
  }
  .navBar ul li button, .navBar ul li button:hover{
    color: #1c2e0d;
  }
  .icons {
    color: #1c2e0d;
    font-size: 20px;
  }
  .logo{
    color: #1c2e0d;
    font-size: 30px;
  } 

  @media screen and (max-width:500px) {
    .icons{
      font-size: 1rem;
    }
    li button {
      font-size: 14px;
    }


  }


  </style>
  
