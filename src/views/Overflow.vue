/**
* https://github.com/walking11/front-end-knowledge/issues/5 【关于overflow】
* Created by iwalk on 2018/12/13.
*/
<template>
  <div>
    <div class="container">
      <div class="item auto">
        <div>auto</div>
        <div>{{auto}}</div>
      </div>
      <div class="item scroll">
        <div>scroll</div>
        <div>{{scroll}}</div>
      </div>
      <div class="item visible">
        <div>visible</div>
        <div>{{visible}}</div>
      </div>
      <div class="item hidden">
        <div>hidden</div>
        <div>{{hidden}}</div>
      </div>
    </div>

    <div class="container">
      <div class="item scroll-x">
        <div>scroll-x</div>
        <div class="inner">{{scroll}}</div>
      </div>
      <div class="item scroll-y">
        <div>scroll-y</div>
        <div>{{scroll}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        auto: '根据元素内容是否超出来自动控制，当内容超过父元素大小，则如果内容被修剪，浏览器会显示滚动条以便查看其余的内容，不超出则正常显示。',
        scroll: '当内容超过父元素大小，内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。当内容超过父元素大小，内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 ',
        visible: '默认值，它会把内容完全展现出来，即使内容超出已定义的父元素大小，它还是会超出部分按正常显示，但是也不会影响其他元素的布局。设置一个轴为visible（默认值），同时设置另一个轴为不同的值，会导致设置visible的轴的行为会变成auto',
        hidden: '当内容超过父元素大小，内容会被修剪，其余部分不可见。当内容超过父元素大小，内容会被修剪，其余部分不可见。当内容超过父元素大小，内容会被修剪，其余部分不可见。 '
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .container {
    margin: 40px 0;
    display: grid;
    grid-template-rows: 150px 150px;
    grid-template-columns: 150px 150px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  .item {
    padding: 5px;
    background-color: #ffbb33;
    &.auto {
      overflow: auto;
    }
    &.scroll {
      overflow: scroll;
    }
    &.visible {
      overflow: visible;
    }
    &.hidden {
      overflow: hidden;
    }
    &.scroll-x {
      overflow-x: scroll;
      overflow-y: hidden;
      .inner {
        width: 200px;
      }
    }
    &.scroll-y {
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>
