<template>
  <div class="container mt-5 mb-5">
      <div>
        <h1>{{ selectedProduct.productName }}</h1>
        <img :src="selectedProduct.image" alt="Product Image" class="img-fluid"/>
        <p>{{ selectedProduct.description }}</p>
        <h3>${{ selectedProduct.price }}</h3>
        <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch('fetchProductById', route.params.id);
  isLoading.value = true;
});

const selectedProduct = computed(() => store.state.selectedProduct);

function addToCart(product) {
  store.commit('addToCart', product);
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
