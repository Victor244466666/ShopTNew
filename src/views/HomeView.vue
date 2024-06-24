<template>
  <div class="container">

    <div class="row mt-5 mb-4">
      <div class="d-flex align-items-center alert alert-primary">
        <Header class="display-4" title="Home" description="Discover your favorite products at amazing prices" />
        <img src="/images/samsung.jpg" alt="Image">
      </div>
      <div class="d-flex justify-content-end">
        <router-link to="/products" class="btn btn-primary">Shop Now</router-link>
      </div>
    </div>
    <h1>Featured Products</h1>
    <div class="row">
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="/images/samsung.jpg" class="card-img-top" alt="Samsung">
          <div class="card-body">
            <h5 class="card-title">Samsung Galaxy</h5>
            <p class="card-text">Experience the latest Samsung Galaxy with advanced features.</p>
            <router-link to="/product/samsung-galaxy" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="../../public/images/samsung.jpg" class="card-img-top" alt="Samsung">
          <div class="card-body">
            <h5 class="card-title">Samsung Note</h5>
            <p class="card-text">The Samsung Note with powerful performance and sleek design.</p>
            <router-link to="/product/samsung-note" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="/images/bag.jpg" class="card-img-top" alt="Bag">
          <div class="card-body">
            <h5 class="card-title">Leather Bag</h5>
            <p class="card-text">Premium quality leather bag for all your needs.</p>
            <router-link to="/product/leather-bag" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style="width: 18rem;">
          <img src="/images/note-phones_260x144.png" class="card-img-top" alt="Note Phones">
          <div class="card-body">
            <h5 class="card-title">Note Phones</h5>
            <p class="card-text">RAM 37 ROM - High-performance note phones for all your needs.</p>
            <router-link to="/product/note-phones" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>

     <footer class="bg-dark text-white text-center p-3 mt-5">
    <div class="container">
      <p>&copy; 2024 My Store. All Rights Reserved.</p>
    </div>
  </footer>

  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
}

.text-white {
  color: white !important;
}

.ml-3 {
  margin-left: 1rem;
}

.mt-5 {
  margin-top: 3rem;
}

</style>
