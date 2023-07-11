<template>
  <label id="select" for="datasets"
    class="block center mb-2 mr-3 text-sm font-medium text-gray-900 dark:text-gray-400">Select</label>
  <select id="datasets" v-model="selectedDataset" @change="updateChart"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected value="ds1">Random Numbers</option>
    <option value="ds2">Sin (x)</option>
    <option value="ds3">Kuramoto Synchronization</option>
    <option value="ds4">Dummy data</option>
  </select>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Combobox',
  data() {
    return {
      selectedDataset: '',
    };
  },
  methods: {
    updateChart() {
      this.$emit('dataset-selected', this.selectedDataset);
    },
  },
});
</script>

<style>
#select {
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(0, 0, 0);
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 25px;
}
</style>
