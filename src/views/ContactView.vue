<template>
  <div class="contact container py-5 d-flex justify-content- flex-column">
      <h1 class="py-5">تواصل معنا</h1>
      <!-- <div>
        <ul>
          <li v-for="item in jsonData" :key="item.id">{{ item.name }}</li>
        </ul>
      </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'ContactView',
  data() {
    return {
  }
  
},
computed: {
  ...mapState({
      jsonData: state => state.jsonData
    })
},
created() {
  this.$store.dispatch('fetchJsonData')
}
}
</script>

<style scoped>
</style>
