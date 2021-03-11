<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          About
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
        <h1 class="title">About Page</h1>
        <!-- Content goes here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
