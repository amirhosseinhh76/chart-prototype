<template>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
    class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-3 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm w-1/3 p-12 py-2.5 text-right inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button">
    Hover Combobox Here!
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-1/3 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Test1Test1Test1Test1</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Test2</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Test3</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Test4</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "combobox",
  data() {
    return {
      isToggled: false,
    };
  }
};
</script>
<style>
/* Show the dropdown menu on hover */
#dropdownDefaultButton:hover+#dropdown,
#dropdown:hover {
  display: block;
}
</style>