<template>
  <div class="container mt-5">
    <div class="about-section">
      <h1>About Us</h1>
      <p>
        Welcome to ShopT! We are your go-to online store for a wide variety of products. Our mission is to provide our customers with high-quality products at competitive prices, coupled with an exceptional shopping experience.
      </p>
    </div>

    <div class="row mt-5">
      <div class="col-md-4">
        <div class="card">
          <img src="../../public/images/ameh.jpg" class="card-img-top" alt="Our Mission">
          <div class="card-body">
            <h5 class="card-title">Emah Ameh</h5>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img src="../../public/images/victor.jpg" class="card-img-top" alt="Our Vision">
          <div class="card-body">
            <h5 class="card-title">Ode victor</h5>
            <p class="card-text">

            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img src="../../public/images/Sunday.jpg" class="card-img-top" alt="Our Values">
          <div class="card-body">
            <h5 class="card-title">Sunday Emmanuel</h5>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1>Team 2</h1>
    <h2>Ameh Emah</h2>
    <h2>Ode Victor</h2>
    <h2>Sunday Emmanuel</h2>

    <p>
      We the student of OTUPKO TECH ACEADEMY Group 2 we have learnt a lot of thing some of which includes
       Backend Development
       Writing scripts in languages like PHP to handle server-side logic.
       Connecting to and querying databases using SQL to store and retrieve data.
       Creating and consuming APIs to enable communication between frontend and backend.
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.about-section {
  text-align: center;
  margin-bottom: 50px;
}

.about-section h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.2em;
  color: #555;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.card-text {
  font-size: 1em;
  color: #777;
}
</style>
