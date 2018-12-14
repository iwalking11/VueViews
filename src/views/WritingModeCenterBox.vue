/**
* https://github.com/walking11/front-end-knowledge/issues/6 【关于层叠上下文】
* Created by iwalk on 2018/12/13.
*/
<template>
  <div class="container">
    <div class="wrap">
      <div class="content">你想要上下左右居中的内容</div>
      <div class="content">(元素,文本或其任意组合)</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .container {
    background: #ffbb33;
    border: 1px solid #646464;
    color: #7406ff;
    font-weight: bold;
    width: 300px;
    height: 300px;
    writing-mode: tb-lr;
    writing-mode: vertical-lr;
    text-align: center;
    .wrap{
      writing-mode: lr-tb;
      writing-mode: horizontal-tb;
      text-align: center;
      width: 100%;
      display: inline-block;
    }
    .content{
      display: inline-block;
    }
  }
</style>
