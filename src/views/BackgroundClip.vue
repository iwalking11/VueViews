/**
* Created by iwalk on 2018/4/9.
*/
<template>
  <div>
    <div class="example1">{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  /*background-clip: border-box*/
  /*background-clip: padding-box*/
  /*background-clip: content-box*/
  /*background-clip: text*/
  /*background-clip: inherit*/
  .example1 {
    width: 100px;
    height: 100px;
    padding: 20px;
    margin: 20px;
    background-color: #ffbb33;
  }
</style>
