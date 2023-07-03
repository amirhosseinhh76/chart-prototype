<template>
  <div class="page-content">
    <div style="width: 800px; flex:auto">
      <canvas ref="acquisitions"></canvas>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'chartComp',
  data() {
    return {
      isNavOpen: false
    };
  },
  mounted() {
    const ctx = this.$refs.acquisitions.getContext('2d');
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Manually specify labels
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
    });
    myChart;
  }
});
</script>