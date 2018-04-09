<template>
  <div class="items">
    <h2>
      <router-link to="/subscript">角标</router-link>
      <router-link to="/basic-shape">动画多边形</router-link>
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .items {
    text-align: center;
    color: #c2d7a3;
  }
</style>
