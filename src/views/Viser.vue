/**
* @Description: viser-vue图表框架
* @author iwalk
* @date 2018/12/18
*/
<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <v-legend dataKey="item" />
      <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
      <v-coord type="theta" />
    </v-chart>
  </div>
</template>

<script>


  const DataSet = require('@antv/data-set');

  const sourceData = [
    { item: '格列兹曼', count: 40 },
    { item: '梅西', count: 21 },
    { item: 'C罗', count: 17 },
    { item: '萨拉赫', count: 13 },
    { item: '莫德里奇', count: 49 },
    { item: '瓦拉内', count: 9 }
  ];

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;

  export default {
    data() {
      return {
        data,
        scale,
        height: 300,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1
        },
        labelConfig: ['percent', {
          offset: -40,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }],
//        labelConfig: ['percent', {
//          formatter: (val, item) => {
//            return item.point.item + ': ' + val;
//          }
//        }],
      };
    },
    components: {
      // <my-component> 将只在父模板可用
    },
    create() {

    }
  };
</script>

