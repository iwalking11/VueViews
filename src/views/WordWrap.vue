/**
* 参考 https://segmentfault.com/a/1190000004625635
* Created by iwalk on 2018/12/14.
*/
<template>
  <div>
    <div class="box white-space">
      <div class="content normal">white-space: normal    忽略/合并空白、换行符，自动换行</div>
      <div class="content pre">white-space: pre    保留空白，如同pre标签,不会换行 </div>
      <div class="content nowrap">white-space: nowrap    忽略/合并空白，文本不会换行，直到遇到<br/></div>
      <div class="content pre-wrap">white-space: pre-wrap    保留空白，但是会正常地进行换行</div>
      <div class="content pre-line">white-space: pre-line    忽略/合并空白，但是会正常地进行换行</div>
    </div>

    <div class="box  word-break">
      <div class="content normal">word-break: normal 依照亚洲和非亚洲语言的文本规则，允许在单词内换行。</div>
      <div class="content break-all ">word-break: break-all 所有单词碰到边界一律拆分换行</div>
      <div class="content keep-all ">word-break: keep-all 可以理解为只有空格可以触发自动换行</div>
    </div>

    <div class="box  word-wrap">
      <div class="content normal">word-wrap ( 又叫做 overflow-wrap ): normal 只在允许的断字点换行</div>
      <div class="content break-word">word-wrap: break-word 在长单词或URL地址内部进行换行</div>
      <div class="content break-word">只有当一个单词一整行都显示不下时，才会拆分换行该单词</div>
      <div class="content break-word">https://github.com/walking11/VueViews/blob/master/src/views/WritingModeCenterBox.vue</div>
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
  .box {
    background: #dfffe1;
    border: 1px solid #646464;
    color: #646452;
    text-align: left;
    margin-bottom: 30px;
    .content {
      width: 200px;
      height: 70px;
      padding: 5px;
      margin: 10px;
      background: #93c6ff;
    }
    &.white-space {
      .normal {
        white-space: normal;
      }
      .pre {
        white-space: pre;
      }
      .nowrap {
        white-space: nowrap;
      }
      .pre-wrap {
        white-space: pre-wrap;
      }
      .pre-line {
        white-space: pre-line;
      }
    }
    &.word-break {
      .normal {
        word-break: normal;
      }
      .break-all {
        word-break: break-all;
      }
      .keep-all {
        word-break: keep-all;
      }
    }
    &.word-wrap {
      .normal {
        word-wrap: normal;
      }
      .break-word {
        word-wrap: break-word;
      }
    }
  }

</style>
