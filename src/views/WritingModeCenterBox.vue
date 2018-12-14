/**
* https://github.com/walking11/front-end-knowledge/issues/6 【关于层叠上下文】
* Created by iwalk on 2018/12/13.
*/
<template>
  <div>

    <div class="container">
      <div class="wrap">
        <div class="content">你想要上下左右居中的内容</div>
        <div class="content">(元素,文本或其任意组合)</div>
      </div>
    </div>

    <div>实现点击按钮文字下沉效果</div>
    <a class="btn vertical-mode">领</a>

  </div>

</template>

<script>
  export default {
    data () {
      return {}
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
    .wrap {
      writing-mode: lr-tb;
      writing-mode: horizontal-tb;
      text-align: center;
      width: 100%;
      display: inline-block;
    }
    .content {
      display: inline-block;
    }
  }

  .btn {
    display: block;
    color: #a78252;
    background-color: #ddc390;
    width: 85px;
    height: 85px;
    line-height: 85px;
    border: 6px solid #ddc390;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #d6b681, 0 1px, 0 2px, 0 3px, 0 4px;
    text-align: center;
    -webkit-transition: border-color .25s, background-color .25s;
    transition: border-color .25s, background-color .25s;
    font-size: 42px;
    cursor: pointer;
  }

  .btn:active {
    text-indent: 8px;
  }

  .vertical-mode {
    writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    *writing-mode: tb-rl;
  }
</style>
