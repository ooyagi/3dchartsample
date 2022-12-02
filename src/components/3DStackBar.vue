<template>
  <v-chart ref="chart" theme="dark" :autoresize="true" :manual-update="true" />
</template>

<script>
import 'echarts';
import 'echarts-gl';
import VChart from 'vue-echarts';

export default {
  name: 'chart',
  components: { VChart },
  computed: {
    option() {
      return {
        darkMode: true,
        dataset: [
          {
            id: 'sample',
            source: [
              [0, 0, 1, Math.random() * 100], [1, 0, 1, Math.random() * 100], [2, 0, 1, Math.random() * 100],
              [0, 1, 1, Math.random() * 100], [1, 1, 1, Math.random() * 100], [2, 1, 1, Math.random() * 100],
              [0, 2, 1, Math.random() * 100], [1, 2, 1, Math.random() * 100], [2, 2, 1, Math.random() * 100],
              [0, 0, 2, Math.random() * 100], [1, 0, 2, Math.random() * 100], [2, 0, 2, Math.random() * 100],
              [0, 1, 2, Math.random() * 100], [1, 1, 2, Math.random() * 100], [2, 1, 2, Math.random() * 100],
              [0, 2, 2, Math.random() * 100], [1, 2, 2, Math.random() * 100], [2, 2, 2, Math.random() * 100],
              [0, 0, 3, Math.random() * 100], [1, 0, 3, Math.random() * 100], [2, 0, 3, Math.random() * 100],
              [0, 1, 3, Math.random() * 100], [1, 1, 3, Math.random() * 100], [2, 1, 3, Math.random() * 100],
              [0, 2, 3, Math.random() * 100], [1, 2, 3, Math.random() * 100], [2, 2, 3, Math.random() * 100],
            ],
          },
        ],
        visualMap: [
          {
            top: 10,
            calculable: true,
            dimension: 3,
            max: 100,
            min: 0,
            inRange: {
              color: ['#00000000', '#0b9df0ff', '#00fea8ff', '#00ff0dff', '#f5f811ff', '#f09a09ff', '#fe0300ff'],
            },
            textStyle: {
              color: '#fff',
            },
          },
        ],
        xAxis3D: {
          name: 'x',
          type: 'category',
          data: [0, 1, 2],
        },
        yAxis3D: {
          name: 'y',
          type: 'category',
          data: [0, 1, 2],
        },
        zAxis3D: {
          name: 'z',
          type: 'value',
        },
        grid3D: {
          boxWidth: 150,
          axisLine: {
            lineStyle: { color: '#ffffff' },
          },
          axisPointer: {
            lineStyle: { color: '#ffbd67' },
          },
          axisLabel: {
            interval: 1,
            textStyle: { fontSize: 18 },
          },
          viewControl: {
            autoRotate: true,
            // projection: 'orthographic'
          },
        },
        series: [
          {
            type: 'bar3D',
            stack: 'stack',
            itemStyle: { opacity: 0.5 },
            barWidth: '100%',
            barCategoryGap: '0%',
            data: [
              [0, 0, 1, Math.random() * 100], [0, 1, 1, Math.random() * 100], [0, 2, 1, Math.random() * 100],
              [1, 0, 1, Math.random() * 100], [1, 1, 1, Math.random() * 100], [1, 2, 1, Math.random() * 100],
              [2, 0, 1, Math.random() * 100], [2, 1, 1, Math.random() * 100], [2, 2, 1, Math.random() * 100],
            ],
          },
          {
            type: 'bar3D',
            stack: 'stack',
            itemStyle: { opacity: 0.5 },
            barWidth: '100%',
            barCategoryGap: '0%',
            data: [
              [0, 0, 1, Math.random() * 100], [0, 1, 1, Math.random() * 100], [0, 2, 1, Math.random() * 100],
              [1, 0, 1, Math.random() * 100], [1, 1, 1, Math.random() * 100], [1, 2, 1, Math.random() * 100],
              [2, 0, 1, Math.random() * 100], [2, 1, 1, Math.random() * 100], [2, 2, 1, Math.random() * 100],
            ],
          },
          {
            type: 'bar3D',
            stack: 'stack',
            itemStyle: { opacity: 0.5 },
            barWidth: '100%',
            barCategoryGap: '0%',
            data: [
              [0, 0, 1, Math.random() * 100], [0, 1, 1, Math.random() * 100], [0, 2, 1, Math.random() * 100],
              [1, 0, 1, Math.random() * 100], [1, 1, 1, Math.random() * 100], [1, 2, 1, Math.random() * 100],
              [2, 0, 1, Math.random() * 100], [2, 1, 1, Math.random() * 100], [2, 2, 1, Math.random() * 100],
            ],
          },
        ],
      };
    },
  },
  methods: {
    refresh() {
      this.$refs.chart.setOption(this.option, true, false);
    },
  },
  watch: {
    dataSet(newOptions, oldOptions) {
      this.refresh();
    },
  },
  mounted() {
    this.refresh();
  },
};
</script>
