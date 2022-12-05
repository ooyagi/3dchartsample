<template>
  <v-chart ref="chart" :autoresize="true" :manual-update="true" />
</template>

<script>
import 'echarts';
import 'echarts-gl';
import VChart from 'vue-echarts';

export default {
  name: 'BarChart',
  components: {
    VChart,
  },
  props: [
    'dataSet',
    'series',
  ],
  data: () => {
    const sensor1 = [];
    const sensor2 = [];
    const sensor3 = [];
    const alert = [];
    const warning = [];

    const start = new Date(2022, 11, 30, 13);
    const end = new Date(2022, 11, 30, 18);

    for (let current = start.getTime(); current < end.getTime(); current = current + (15 * 60 * 1000)) {
      sensor1.push({ UpdateAt: new Date(current), Value: Math.random() * 100 });
      sensor2.push({ UpdateAt: new Date(current), Value: Math.random() * 100 });
      sensor3.push({ UpdateAt: new Date(current), Value: Math.random() * 100 });
      alert.push({ UpdateAt: new Date(current), Value: 60 });
      warning.push({ UpdateAt: new Date(current), Value: 50 });
    }
    console.log(sensor1);
    return {
      source: [
        { id: 'sensor1', source: sensor1 },
        { id: 'sensor2', source: sensor2 },
        { id: 'sensor3', source: sensor3 },
        { id: 'alert', source: alert },
        { id: 'warning', source: warning },
      ],
    };
  },
  computed: {
    option() {
      return {
        dataset: this.source,
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 'center',
          padding: [16, 4],
        },
        xAxis: {
          splitLine: {
            show: true,
          },
          axisLabel: {
            formatter: {
              day: '{d}日',
            },
          },
          type: 'time',
        },
        yAxis: {
          type: 'value',
          position: 'left',
          axisLabel: {
            sformatter: '{value}' + ' %',
          },
        },
        toolbox: {
          show: true,
          itemSize: 24,
          itemGap: 16,
          feature: {
            dataZoom: {
              title: {
                zoom: '拡大',
                back: '戻す',
              },
              yAxisIndex: 'none',
            },
            restore: {
              title: '戻す',
            },
          },
          left: 'center',
        },
        series: [
          {
            type: 'line',
            name: 'センサー1',
            datasetId: 'sensor1',
            showSymbol: false,
            lineStyle: { type: 'solid' },
            encode: { x: 'UpdateAt', y: 'Value', tooltip: ['Value'] },
          },
          {
            type: 'line',
            name: 'センサー2',
            datasetId: 'sensor2',
            showSymbol: false,
            lineStyle: { type: 'solid' },
            encode: { x: 'UpdateAt', y: 'Value', tooltip: ['Value'] },
          },
          {
            type: 'line',
            name: 'センサー3',
            datasetId: 'sensor3',
            showSymbol: false,
            lineStyle: { type: 'solid' },
            encode: { x: 'UpdateAt', y: 'Value', tooltip: ['Value'] },
          },
          {
            type: 'line',
            name: '湿度危険値',
            datasetId: 'alert',
            showSymbol: false,
            lineStyle: { type: 'dashed', color: 'rgba(255, 40, 0)' },
            areaStyle: { color: 'rgba(255, 40, 0, 0.5)', origin: 'end' },
            encode: { x: 'UpdateAt', y: 'Value', tooltip: ['Value'] },
          },
          {
            type: 'line',
            name: '湿度警戒値',
            datasetId: 'warning',
            showSymbol: false,
            lineStyle: { type: 'dashed', color: 'rgba(220, 180, 40)' },
            areaStyle: { color: 'rgba(220, 180, 40, 0.3)', origin: 'end' },
            encode: { x: 'UpdateAt', y: 'Value', tooltip: ['Value'] },
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
