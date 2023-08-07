<template>
  <div class="homeView">
    <headerCom />
    <basicInfo />
    <!-- <PlantGallery @addToCart="incrementCartCount"/> -->
    <PlantGallery />
  </div>
</template>

<script>
import headerCom from "@/components/headerCom.vue";
import basicInfo from "@/components/basicInfo.vue";
import PlantGallery from "@/components/PlantGallery.vue";
export default {
  name: "HomwView",
  data() {
    return{
      Pagetitle: "الرئيسية",
      // cartCount: [],      
    }
  },
     components: {
      headerCom,
      basicInfo,
      PlantGallery,
    },
    mounted() {
      document.title = this.Pagetitle
    },
    methods: {
    //   incrementCartCount(id) {
    //   this.cartCount.push(id)
    // }
  }
}
</script>

<style>
.homeView {
  background-color: white;

}
</style>