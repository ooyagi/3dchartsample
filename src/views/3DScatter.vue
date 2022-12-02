<template>
  <chart></chart>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Chart from '@/components/3DScatter.vue';

@Component({
  components: {
    Chart,
  },
})
export default class HomeView extends Vue {
}
</script>
