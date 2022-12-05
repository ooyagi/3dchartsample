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
  data: () => {
    const res = [];
    const area = [[0.1, 0.8], [1.1, 1.9], [2.1, 2.9]];
    for (let i = 0; i < area.length; i++) {
      for (let j = 0; j < area.length; j++) {
        for (let k = 0; k < area.length; k++) {
          var val = Math.random() * 100;
          for (let x = area[i][0]; x < area[i][1]; x = x + 0.2) {
            for (let y = area[j][0]; y < area[j][1]; y = y + 0.2) {
              for (let z = area[k][0]; z < area[k][1]; z = z + 0.2) {
                res.push([x, y, z, val]);
              }
            }
          }
        }
      }
    }
    return {
      source: res,
    };
  },
  computed: {
    option() {
      return {
        darkMode: true,
        dataset: {
          id: 'sample',
          source: this.source,
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
              colorAlpha: [0.2, 1],
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
            autoRotate: true,
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
            opacity: 0.5,
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
  mounted() {
    this.refresh();
  },
};
</script>
