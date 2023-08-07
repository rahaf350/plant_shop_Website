<template>
    <div class="contact  py-5 d-flex justify-content-center">
      <div class="bestSeller container py-5 d-flex flex-column justify-content-center justify-content-lg-end ">
        <h1 class="text-lg-end text-center mt-5">معرض النباتات</h1>
          <!--Each Car-->
      <!--Each Car-->
   <div class="bestSeller-content  d-flex row justify-content-center justify-content-lg-end">
    <div class="eachPlant d-flex col-4 flex-column justify-content-center align-items-center" v-for="(eachPlant, k) in bestSeller" :key="k">
          <img  class="mt-4 img-fluid" :src="getImageUrl(eachPlant.mainImage)">
        <div class="d-flex flex-row my-3">
          <span>ريال</span><span class="plantPrice me-5">{{ eachPlant.price }}</span>
          <span class="plantName ms-5 fw-bolder">{{ eachPlant.name }}</span>
        </div>
        
      <!-- <div class="options d-flex flex-row">
            <div class="m-2" v-for="(image, x) in eachPlant.images" :key="x" :src="getImageUrl(image)"
            @click=" eachPlant.mainImage = image">
            <span class="color-option" :style="{ backgroundColor: colors[x % colors.length] }"></span>
          </div> 
        </div> -->

          <p v-if="eachPlant.inventory > 10"></p>
          <p v-else-if="eachPlant.inventory <= 10 && eachPlant.inventory > 0">المتبقي: {{eachPlant.inventory}}</p>
          <p v-else>غير متوفر</p>
          <router-link :to="{name: 'PlantInfoView', params: {PlantId:eachPlant.id} }">
        <button class="btn1">مواصفات النبتة</button>
          </router-link>
        <button class="btn2" @click="addToCart(eachPlant)" :disabled="!eachPlant.inventory" :class="{disButton:!eachPlant.inventory}">اضف الى السلة</button>
    </div>
   </div> 
  </div>
      </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  // import jsonPlant from "@/json/jsonPlant.json"
  // import plantDB from '@/json/plantDB.js'

  export default {
    name: 'PlantGallery',
    data() {
      return {
        // plants: jsonPlant,
        colors: ["white", "#9e4242", "gray"],
        PlantId: this.$route.params.PlantId,
        // PlantFromData: [],
      }
    },
    methods: {
      getImageUrl(imageName) {
          let image = require.context('@/assets/img/');
          return image('./'+imageName);
      },
      addToCart(x) {
          this.$store.commit('incrementCart',
          {
            name: x.name,
             price: x.price
          })
  },
    },
      created() {
          this.$store.dispatch('fetchJsonData')
      // plantDB.getEvents()
      //     .then(response => {
      //       this.PlantFromData = response.data // For now, logs out the response
      //     })
      //     .catch(error => {
      //       console.log('There was an error:', error.response) // Logs out the error
      //     })
      },
    computed: {
      ...mapState({
      jsonData: state => state.jsonData
    }),
      bestSeller() {
        let plantData = [];
        for (let i = 0; i < this.jsonData.length; i++) {

          if (this.jsonData[i].inventory) {
            plantData.push(this.jsonData[i]);
          }
        }
        return plantData;
      },
      // trending() {
      //   let plantData = [];
      //   for (let i = 0; i < this.jsonData.length; i++) {

      //     if (this.jsonData[i].classification == "trending") {
      //       plantData.push(this.jsonData[i]);
      //     }
      //   }
      //   return plantData;
      // }
    },
  }
  </script>
  
  <style scoped>
  h1 {
    color: #1c2e0d;
    font-size: 3.2rem;
  }
  .eachPlant {
    width: 300px;
    height: auto;
    margin:15px;
    border: 2px solid #667c67;
    border-radius: 10px;
  }
  .eachPlant img {
    width:250px;
    height: 300px;
    border: 1px solid #667c67;
    border-radius: 10px;
  }
  .options img {
    width: 30px;
    height: 30px;
  }
  .eachPlant p{
    color:red;
    margin: 0;
  }
  .color-option{
    padding: 0px 10px;
    border: 1px solid #667c67;
    cursor: pointer;
    border-radius: 100%;
  }
 .btn1{
    background-color: #987965;
    width: 100%;
    margin: 10px 0 2px 0;
    width:274px
    
  }
  .btn1:hover{
    background-color: #bd9e89;
  }
  button{
    border: 1px solid #667c67;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    width: 100%;
    padding: 5px 0;
  }
  button:hover {
    background-color: #869a87;
  }
  .btn2{
    background-color: #667c67;
    margin: 2px 0 10px 0;

  }
  .disButton{
    background-color: #b0b0b0;
  }
  .disButton:hover{
    background-color: #b0b0b0;
  }
  </style>
  