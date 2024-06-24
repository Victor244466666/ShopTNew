<template>
  <div class="card h-100 shadow-sm border-0">
    <img class="card-img-top" :src="'../../public/images/' + product.image" alt="Product Image">
    <div class="card-body">
      <h3 class="card-title">{{ product.productName }}</h3>
      <h5 class="card-title text-primary">${{ product.price }}</h5>
      <p class="card-text">{{ truncateText(product.description, 20) }}</p>
      <button class="btn btn-primary" @click="viewProduct">View Product</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  product: Object,
});

const emit = defineEmits(['view']);

function viewProduct() {
  emit('view-product', props.product);
}

const truncateText = (text, limit) => {
  const words = text.split(' ');
  return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
};
</script>

<style scoped>
.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
.card-title {
  font-size: 1.25rem;
}
.text-primary {
  color: #007bff !important;
}
</style>
