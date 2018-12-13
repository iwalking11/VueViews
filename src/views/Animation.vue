/**
* 参考https://www.xiabingbao.com/css/2015/07/27/css3-animation-circle.html
* Created by iwalk on 2018/4/17.
*/
<template>
  <div class="circle_process">
    <!--<div class="wrapper right">-->
      <!--<div class="circle rightcircle"></div>-->
    <!--</div>-->
    <!--<div class="wrapper left">-->
      <!--<div class="circle leftcircle" id="leftcircle"></div>-->
    <!--</div>-->
    <div class="">

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  created () {
//    this.getTime();
//    setInterval(function(){
//      this.getTime.getTime();
//    }, 1000)
  },
  methods : {
//    getTime(){
//      var date = new Date();
//      var second = date.getSeconds();
//
//      var rightcircle = document.getElementById('rightcircle');
//      var leftcircle = document.getElementById('leftcircle');
//      var show = document.getElementById('show');
//
//      show.innerHTML = second;
//
//      if (second <= 30) {
//        rightcircle.style.cssText = "transform: rotate(" + (-135 + 6 * second) + "deg)";
//        leftcircle.style.cssText = "transform: rotate(-135deg)";
//      } else {
//        rightcircle.style.cssText = "transform: rotate(45deg)";
//        leftcircle.style.cssText = "transform: rotate(" + (-135 + 6 * (second - 30)) + "deg)";
//      }
//    }
  },
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .circle_process{
    position: relative;
    width: 199px;
    height : 200px;
  }
  .circle_process .wrapper{
    width: 100px;
    height: 200px;
    position: absolute;
    top:0;
    overflow: hidden;
  }
  .circle_process .right{
    right:0;
  }
  .circle_process .left{
    left:0;
  }
  .circle_process .circle{
    width: 160px;
    height: 160px;
    border:20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top:0;
    transform : rotate(-135deg);
  }
  .circle_process .rightcircle{
    border-top:20px solid green;
    border-right:20px solid green;
    right:0;
    animation: circle_right 30s linear infinite;
  }
  .circle_process .leftcircle{
    border-bottom:20px solid green;
    border-left:20px solid green;
    left:0;
    animation: circle_left 30s linear infinite;
  }
  @keyframes circle_right{
    0%{
      transform: rotate(-135deg);
    }
    50%,100%{
      transform: rotate(45deg);
    }
  }
  @keyframes circle_left{
    0%,50%{
      transform: rotate(-135deg);
    }
    100%{
      transform: rotate(45deg);
    }
  }
</style>
