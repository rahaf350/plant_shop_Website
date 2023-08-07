<template>
  <div id="app">
    <navCom />
    <router-view />
  </div>
</template>

<script>
import navCom from './components/navCom.vue';
export default {
  name: "App",
  components: {
    navCom
    },
};
</script>

<style>
#app {
  font-family: 'Rubik', sans-serif;
  text-align: center;
}
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
body {
  background-color: white;
}
</style>
