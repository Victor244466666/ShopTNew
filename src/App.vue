<template>
  <div id="app">
  <NavBar/>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>
<style>
/* styles.css or in App.vue */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

</style>