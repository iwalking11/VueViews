/**
* https://github.com/walking11/front-end-knowledge/issues/6 【关于层叠上下文】
* Created by iwalk on 2018/12/13.
*/
<template>
  <div class="container">
    <div class="item item1">z-index:0</div>
    <div class="item item2">z-index:auto（单纯考虑层叠顺序，z-index: auto和z-index: 0在同一层级，但这两个属性值本身是有根本区别的。）</div>
    <div class="item item3">z-index < 0</div>
    <div class="item item4">块级水平盒子</div>
    <div class="item item5">float浮动盒子</div>
    <span class="item item6" style="">inline、inline-block水平盒子</span>
    <div class="item item7">z-index > 0</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '层叠上下文是HTML元素的三维概念，这些HTML元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的z轴上延伸，HTML元素依据其自身属性按照优先级顺序占用层叠上下文的空间。',
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .container {
    position: relative;
    background: #ffbb33;
    border: 4px solid #646464;
    color: #7406ff;
    font-weight: bold;
    width: 400px;
    height: 400px;
    //z-index 值不为 "auto"（默认值）的 绝对/相对定位，形成层叠上下文;
    //如果不加,就会向上继续寻找层叠上下文，可能是根元素（HTML）,子元素中z-index为负数的就会跑到背景色后方
    z-index: -1;
    text-align: left;
  }

  .item {
    padding: 5px;
    overflow: auto;
    margin-right: -10px;
    text-align: left;
    height: 200px;
    width: 200px;
    &.item1 {
      background: #9fd0ff;
      position: relative;
      top: 120px;
      left: 80px;
      z-index: 0;
    }
    &.item2 {
      background: #42b983;
      position: relative;
      top: -60px;
      left: 100px;
      z-index: auto; //默认值 在添加定位的情况下和z-index是一样的效果
    }
    &.item3 {
      position: relative;
      background: #ff726d;
      top: -420px;
      left: 0;
      z-index: -1;
    }
    &.item4 {
      background: #b47bff;
      margin-top: -600px;
      margin-left: 20px;
    }
    &.item5{
      float: left;
      background: #ffced8;
      margin-left: 40px;
      margin-top: -180px;
    }
    &.item6{
      display: inline-block;
      background: #dfffe1;
      margin-top: -180px;
      margin-left: 60px;
    }
    &.item7 {
      position: relative;
      background: #ff726d;
      top: -60px;
      left: 120px;
      z-index: 1;
    }
  }
</style>
