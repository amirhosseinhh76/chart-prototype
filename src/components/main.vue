<template>
    <div class="slidy" style="height: 100px;">
        <navSlide />
    </div>

    <div class="main-container">
        <div class="combo-cell">
            <combobox @dataset-selected="handleDatasetSelected"></combobox>
        </div>
        <div class="chart-cell">
            <apexChart :dataset="selectedDataset"></apexChart>
        </div>
    </div>
    <div>
        <loremTest />
    </div>
</template>
  
<script>
import apexChart from './apexChart.vue';
import navSlide from './navSlide.vue';
import combobox from './combobox.vue';
import loremTest from './loremTest.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'main',
    components: {
        navSlide,
        combobox,
        apexChart,
        loremTest
    },
    data() {
        return { selectedDataset: '' };
    },
    mounted() {
        // const token = localStorage.getItem('token');
        // setAuthToken(token);
    },
    methods: {
        handleDatasetSelected(dataset) {
            this.selectedDataset = dataset;
        }
    }
});
</script>
  
<style>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.combo-cell {
    display: flex;
    justify-content: center;
    width: 100%;
    top: 180px;
}

.chart-cell {
    justify-content: center;
    margin-top: 26px;
    width: 50vw;
}
</style>
  