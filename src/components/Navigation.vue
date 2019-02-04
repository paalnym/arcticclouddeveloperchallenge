<template>
  <div>
    <div class="wrapper">
      <nav class="tabs">
        <div class="selector"></div>
        <router-link class="spacing" to="/home">Home</router-link>
        <router-link class="spacing" to="/about">About</router-link>
        <router-link class="spacing" to="/categories">Categories</router-link>
        <router-link class="spacing" to="/agenda">Agenda</router-link>
        <router-link class="spacing" to="/lastYear">Last Year</router-link>
        <router-link class="spacing" to="/contact">Contact</router-link>
        <router-link class="spacing" to="/sponsors">Sponsors</router-link>        
      </nav>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Navigation' //this is the name of the component
}
</script>
<style>
</style>