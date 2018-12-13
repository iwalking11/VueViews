<template>
  <div class="items">
    <div class="item"  v-for="item in items">
      <router-link v-bind:to='item.url'>{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {url: '/subscript', name: '角标' },
        {url: '/basic-shape', name: '动画多边形' },
        {url: '/background-clip', name: 'background-clip' },
        {url: '/animation', name: '特效' },
        {url: '/overflow', name: 'overflow' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .items {
    background: #ecffe7;
    height: 200px;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 100px 100px;
    /*grid-template-rows: 50px 50px;*/
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    .item {
      padding: 10px;
      background: #f5ffb7;
      color: #646464;
    }
  }
</style>
