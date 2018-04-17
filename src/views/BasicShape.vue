/**
* 动画多边形
* Created by iwalk on 2018/4/9.
*/
<!--clip-path和shape-outside属性值中可以使用polygon()、circle()、ellipse()和inset()函数绘制的图形，但不能使用path()函数，不过可能通过url()给其传<svg>中<path>元素绘制的图形
offset-path和clip-path以及shape-outside相反，只能使用path()函数绘制的图形，但不能使用CSS中绘制图形的图形函数
在CSS中可以显式的重置svg元素中图形元素的属性值，从而改变SVG绘制的图形
著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/css/basic-shapes-path.html © w3cplus.com-->

<template>
  <div class="wrap">
    <div class="shape1"></div>
    <div class="shape2"></div>
    <div class="shape3"></div>
    <!--svg图片使用三种方式-->
    <div class="shape4">
      <svg enable-background="new 0 0 145 145" id="Layer_1" version="1.1" viewBox="0 0 145 145" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="M95.727,56.11c-2.29-3.814-4.565-6.092-4.617-6.146c-0.48-0.48-2.289,1.668-2.791,2.309 c-0.762,0.981-2.563,2.625-6.367,4.876c-3.802,2.255-9.599,5.132-18.35,8.687c-3.747,1.524-6.766,3.085-9.192,4.666 c3.136-0.364,6.856-0.784,7.613-0.815c2.007-0.082-0.404,4.203-9.474,2.116c-1.186,0.895-2.195,1.796-3.047,2.699 c-1.388,1.474-2.355,2.959-2.971,4.422c-0.617,1.463-0.877,2.9-0.876,4.246c0.005,3.039,1.285,3.753,2.512,5.495 c1.234,1.746,3.872,2.962,3.872,2.962s-0.704-1.33-1.719-2.789c-1.022-1.463-1.976-3.455-1.971-5.668 c0.001-1.004,0.188-2.065,0.665-3.201c0.275-0.653,0.652-1.335,1.149-2.038c0.466,2.206,1.478,6.081,3.454,10.021 c1.499,2.98,3.555,4.208,6.406,6.524c2.844,2.317,6.521,5.686,11.017,5.679c0.11,0,0.221-0.001,0.332-0.003 c3.876-0.057,7.15-3.391,9.724-5.757c3.87-3.555,6.308-7.082,7.847-12.521c1.531-5.446,2.713-11.542,3.009-15.689 c0.522-7.306,0.163-10.061-0.246-11.266c0.572,0.787,1.188,1.696,1.808,2.743c2.096,3.534,4.127,8.399,4.123,13.856 c-0.002,3.122-0.653,6.447-2.35,9.907c-1.698,3.459-4.452,7.06-8.7,10.68c0,0,9.238-5.66,11.119-9.493 c1.882-3.831,2.628-7.595,2.626-11.095C100.33,65.29,98.012,59.922,95.727,56.11z M77.582,69h11.677C89.259,69,89.259,75,77.582,69 z"/> <path d="M53.943,97.604c-0.348-0.031-0.705-0.008-1.062-0.028c-0.212-0.012-0.425-0.001-0.633-0.02 c-3.854-0.352-6.887-1.923-8.909-4.354c-2.018-2.434-3.053-5.744-2.744-9.682l0.018-0.214c0.262-2.885,1.129-5.415,2.495-7.631 c1.367-2.215,3.437-3.863,5.531-5.702c7.384-6.483,14.57-10.075,21.95-13.905c4.245-2.203,8.488-4.594,12.651-7.22 c0.93-0.589,1.652-1.372,2.303-2.16c0.65-0.79,1.234-1.593,1.838-2.262c0,0-8.906,4.272-12.152,5.812 c-9.81,4.656-19.593,9.548-28.099,16.587c-3.033,2.512-5.808,5.679-7.739,9.131c-1.279,2.286-2.037,4.649-2.252,7.027 c-0.347,3.803,0.713,7.618,3.108,11.164c1.28,1.9,2.797,3.31,4.487,4.276c1.689,0.967,3.541,1.487,5.471,1.66 c1.797,0.162,3.675-0.072,5.585-0.411l7.056-1.355l-7.128-0.644C55.143,97.622,54.545,97.659,53.943,97.604z"/> <path d="M49.823,71.043c0.97,0.317,1.875,0.565,2.726,0.76c0.576-0.435,1.197-0.869,1.86-1.301 C51.934,70.79,49.823,71.043,49.823,71.043z" fill="#FFFFFF"/> </g>
      </svg>
    </div>
    <div class="shape5">
      <img src="https://www.w3cplus.com/sites/default/files/blogs/2015/1507/logo_w3cplus.png" class="avatar"/>
    </div>
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

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    .shape1 {
      width: 200px;
      height: 200px;
      background: linear-gradient(red, blue);
      -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      /*animation: 5s poly infinite alternate ease-in-out;*/
      margin: 1em auto;
      display: block;
    }

    @keyframes poly {
      from {
        -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      to {
        -webkit-clip-path: polygon(44% 26%, 58% 38%, 58% 38%, 44% 81%, 44% 81%, 25% 49%);
        clip-path: polygon(44% 26%, 58% 38%, 58% 38%, 44% 81%, 44% 81%, 25% 49%);
      }
    }
    .shape2 {
      width: 200px;
      height: 200px;
      background: linear-gradient(red, blue);
      clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
    }
    .shape3 {
      width: 200px;
      height: 200px;
      background: linear-gradient(red, blue);
      clip-path: polygon(100% 0%, 0 50%, 100% 100%);
    }
    .shape4 {
      width: 200px;
      height: 200px;
    }
    .shape5 {
      width: 300px;
      height: 300px;
      padding: 20px;
      margin: 100px auto;
      border-radius: 50%;
      background: #f5ffb7;
      @keyframes spin {
        from {
          transform:  rotate(360deg) translateY(-150px) translateY(50%) ;
        }
        to {
          transform: rotate(0turn) translateY(-150px) translateY(50%) ;
        }
      }
      .avatar {
        animation: spin 10s infinite linear;
      }
      .avatar {
        display: block;
        width: 50px;
        margin: calc(50% - 25px) auto 0;
        border-radius: 50%;
        overflow: hidden;
      }

    }

  }

</style>
