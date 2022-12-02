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
        dataset: {
          id: 'sample',
          source: [
            [0, 0, 0, Math.random() * 100], [1, 0, 0, Math.random() * 100], [2, 0, 0, Math.random() * 100],
            [0, 1, 0, Math.random() * 100], [1, 1, 0, Math.random() * 100], [2, 1, 0, Math.random() * 100],
            [0, 2, 0, Math.random() * 100], [1, 2, 0, Math.random() * 100], [2, 2, 0, Math.random() * 100],
            [0, 0, 1, Math.random() * 100], [1, 0, 1, Math.random() * 100], [2, 0, 1, Math.random() * 100],
            [0, 1, 1, Math.random() * 100], [1, 1, 1, Math.random() * 100], [2, 1, 1, Math.random() * 100],
            [0, 2, 1, Math.random() * 100], [1, 2, 1, Math.random() * 100], [2, 2, 1, Math.random() * 100],
            [0, 0, 2, Math.random() * 100], [1, 0, 2, Math.random() * 100], [2, 0, 2, Math.random() * 100],
            [0, 1, 2, Math.random() * 100], [1, 1, 2, Math.random() * 100], [2, 1, 2, Math.random() * 100],
            [0, 2, 2, Math.random() * 100], [1, 2, 2, Math.random() * 100], [2, 2, 2, Math.random() * 100],
          ],
        },
        visualMap: [
          {
            top: 10,
            calculable: true,
            dimension: 3,
            max: 100,
            min: 0,
            inRange: {
              color: ['#1710c0', '#0b9df0', '#00fea8', '#00ff0d', '#f5f811', '#f09a09', '#fe0300'],
            },
            textStyle: {
              color: '#fff',
            },
          },
        ],
        xAxis3D: {
          name: 'x',
          type: 'value',
          minInterval: 1,
        },
        yAxis3D: {
          name: 'y',
          type: 'value',
          minInterval: 1,
        },
        zAxis3D: {
          name: 'z',
          type: 'value',
          minInterval: 1,
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
            // autoRotate: true
            // projection: 'orthographic'
          },
        },
        series: [
          {
            type: 'scatter3D',
            dimensions: [
              'x',
              'y',
              'z',
              'color',
            ],
            opacity: 50,
            symbolSize: 30,
            itemStyle: {
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.8)',
            },
            datasetId: 'sample',
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
