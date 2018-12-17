/**
* 参考 https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
* Created by iwalk on 2018/12/14.
*/
<template>
  <div>
    <div class="container">
      <div class="parent">
        <div class="child">
          This is a paragraph!
        </div>
      </div>
    </div>

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
    background: beige;
    text-align: left;
    .parent {
      position: absolute;
      left: 30px;
      top: 30px;
      width: 160px;
      height: 160px;
      padding: 20px 20px;
      background: lightgray;
      .child {
        position: absolute;
        width: 50%;   /* == (160px + 20px + 20px) * .5 = 100px */
        height: 25%;  /* == (160px + 20px + 20px) * .25 = 50px */
        margin: 5%;   /* == (160px + 20px + 20px) * .05 = 10px */
        padding: 5%;  /* == (160px + 20px + 20px) * .05 = 10px */
        background: cyan;
      }
    }
  }




</style>
