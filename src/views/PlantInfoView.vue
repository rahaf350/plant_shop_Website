<template>
    <div class="contact container py-5">
        <div class="plantInfo py-5 px-lg-5 d-flex flex-column flex-lg-row justify-content-center aling-items-center">
          <div class="imageForInfoPage col-lg-3 " v-for="(eachPlant, i) in plantInfofunc" :key="i" ><img class="img-fluid" :src="getImageUrl(eachPlant.mainImage)"></div>
            <div v-for="(eachPlant, i) in plantInfofunc" :key="i" class="infoForInfoPage  px-4 col-lg-9 d-flex align-items-end flex-column">
            <h6>:الاسم</h6> <p>{{eachPlant.name}}</p>
            <h6>:السعر</h6> <span class="d-flex flex-row"><span> ريال </span><p>{{eachPlant.price}}</p></span>
            <h6>:الحجم</h6> <p>{{eachPlant.size}}</p> 
            <h6>:طريقة العناية</h6><p class=" how-to text-end">{{eachPlant.care}}</p>
            <h6>:لون الاصيص</h6>
            <!-- <div class="options d-flex flex-row">
                <div class="m-2" v-for="(image, x) in eachPlant.images" :key="x" :src="getImageUrl(image)"
                @click=" eachPlant.mainImage = image">
                <span class="color-option" :style="{ backgroundColor: colors[x % colors.length] }"></span>
              </div> 
            </div> -->
            <p class="instock" v-if="eachPlant.inventory > 10"></p>
            <p class="instock" v-else-if="eachPlant.inventory <= 10 && eachPlant.inventory > 0">المتبقي: {{eachPlant.inventory}}</p>
            <p class="instock" v-else>غير متوفر</p>
          </div>
        </div>
        <button class="btn2" @click="addToCart(eachPlant)"  v-for="(eachPlant, i) in plantInfofunc" :key="i" :disabled="!eachPlant.inventory" :class="{disButton:!eachPlant.inventory}">اضف الى السلة</button>
        
    </div>
  </template>
  
  <script>
   import { mapState } from 'vuex'
  // import plantInfo from '@/json/jsonPlant.json'
  // import plantDB from '@/json/plantDB.js'
  export default {
    name: 'PlantInfoView',
    data() {
        return{
            // plantInformation: plantInfo,
            PlantId: this.$route.params.PlantId,
            colors: ["white", "#9e4242", "gray"],
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
          // this.$store.dispatch('fetchJsonData')
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
        plantInfofunc() {
        let plantData = [];
        for (let i = 0; i < this.jsonData.length; i++) {

          if (this.jsonData[i].id == this.PlantId) {
            plantData.push(this.jsonData[i]);
          }
        }
        return plantData;
      },
    }
  }
  </script>
  
  
  <style scoped>
  .plantInfo{
    border: 1px solid black;
    margin-top: 3%;
  }

  .imageForInfoPage img{
    width:80vw;
    height: auto;
    border: 1px solid #667c67;
    border-radius: 10px;
  }
  .how-to{
    width: 50%;
  }

  button{
    border: 1px solid #667c67;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    width: 100%;
    padding: 10px 0;
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
  .options img {
    width: 30px;
    height: 30px;
  }
  
  .color-option{
    padding: 0px 10px;
    border: 1px solid #667c67;
    cursor: pointer;
    border-radius: 100%;
  }
  .instock{
    color:red;
    margin-top: 1rem;
  }


  @media screen and (max-width:990px) {
    .how-to{
      width: 90%;
    }
    .imageForInfoPage{

      margin-bottom: 7%;
    }
    .contact{
      margin-top: 7%;
    }
    @media screen and (max-width:500px) {

    }

  }
  </style>
  