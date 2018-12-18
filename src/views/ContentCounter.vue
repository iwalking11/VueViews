/**
* @Description: 伪元素content中counter计数器的使用
* @author iwalk
* @date 2018/12/17
*/
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="second">伪元素content中counter计数器的使用</div>
        <div class="second">伪元素content中counter计数器的使用</div>
      </div>

      <div class="first">
        <div class="second">伪元素content中counter计数器的使用</div>
        <div class="second">伪元素content中counter计数器的使用</div>
        <div class="second">伪元素content中counter计数器的使用</div>
      </div>

      <div class="first">
        <div class="second">伪元素content中counter计数器的使用</div>
        <div class="second">伪元素content中counter计数器的使用</div>
      </div>

    </div>

    <ul class="father">
      <li class="son">我的爱好
        <ul class="father">
          <li class="son">爬山</li>
          <li class="son">追剧</li>
          <li class="son">旅游</li>
        </ul>
      </li>
      <li class="son">我的偶像
        <ul class="father">
          <li class="son">王昱珩
            <ul class="father">
              <li class="son">最强大脑第二季选手</li>
              <li class="son">最强大脑第五季水之队队长</li>
            </ul>
          </li>
          <li class="son">胡歌</li>
          <li class="son">陈默</li>
        </ul>
      </li>
      <li class="son">web前端</li>
      <li class="son">啦啦啦啦啦</li>
    </ul>

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

  .main {
    width: 350px;
    margin: 30px auto;
    height: auto;
    overflow: hidden;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    counter-reset: main;
    color: #646452;
    text-align: left;
    .first {
      counter-reset: submain;
      &:before {
        font-size: 18px;
        font-weight: bold;
        counter-increment: main;
        display: inline-block;
        padding: 5px;
        content: "类别 " counter(main) ". ";
      }
      .second {
        &:before {
          padding: 5px 16px;
          font-family: arial black;
          display: inline-block;
          counter-increment: submain;
          content: counter(main) "." counter(submain) " ";
        }
      }
    }
  }

  li {
    list-style: none;
  }

  .father {
    text-align: left;
    padding-left: 20px;
    counter-reset: count;
    line-height: 1.6;
    color: #666;
  }

  .son:before {
    content: counters(count, '-') '. ';
    counter-increment: count;
    font-family: arial black;
  }

</style>
