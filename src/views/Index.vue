<template>
  <div class="items">
    <router-link class="item" to="/subscript">角标</router-link>
    <router-link class="item" to="/basic-shape">动画多边形</router-link>
    <router-link class="item" to="/background-clip">background-clip</router-link>
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
<style rel="stylesheet/less" lang="less" scoped>
  .items {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 10px;
    }
  }
</style>
