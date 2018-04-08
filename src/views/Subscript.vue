<template>
  <div class="wrap">
    <div class="card1">
      <div class="subscript1">角标1</div>
      <div class="subscript2">
        <div class="text">角标2</div>
      </div>
    </div>
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
  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .card1 {
      position: relative;
      overflow: hidden;
      width: 400px;
      height: 200px;
      background: linear-gradient(135deg, #fef23a, #8f7a10);
      border: 4px solid #eeffe4;
      border-radius: 10px;
      .subscript1 {
        position: absolute;
        top: 10px;
        left: -25px;
        width: 100px;
        height: 30px;
        color: #646464;
        line-height: 30px;
        text-align: center;
        background: linear-gradient(225deg, #ff7b42, #ffc755 50%, #ff7b42);
        transform: rotate(-45deg);
      }
      .subscript2 {
        position: absolute;
        top: -50px;
        right: -50px;
        width: 0;
        height: 0;
        vertical-align: bottom;
        color: #646464;
        text-align: center;
        border-color: transparent transparent #d9da0e transparent;
        border-width: 50px;
        border-style: solid;
        /*background: linear-gradient(135deg, #ff7b42, #ffc755 50%, #ff7b42 );*/
        transform: rotate(45deg);
        &:after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -50px;
          width: 100px;
          height: 20px;
          background: linear-gradient(135deg, #c7be19, #bcb41e);
        }
        .text {
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }

</style>
