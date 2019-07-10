<template>
  <div>
    <div class="container-fluid">
      <div class="row header">
        <div class="col-5">
          <div class="logo1left">
            <a href="#/home">
              <img class="logo1" src="../assets/logo/acdc_alone_white_trans.png">
            </a>
          </div>
          <div class="logo2right">
            <a href="#/home">
              <img class="logo2" src="../assets/logo/acdc_LONG_white_trans.png">
            </a>
          </div>
        </div>
        <div class="col-7">
          <nav class="tabs">
            <div class="selector"></div>
            <router-link class="spacing" to="/home">Home</router-link>
            <router-link class="spacing" to="/about">Teams</router-link>
            <router-link class="spacing" to="/categories">Agenda</router-link>
            <router-link class="spacing" to="/agenda">Venue</router-link>
            <router-link class="spacing" to="/scoring">Prices</router-link>
            <router-link class="spacing" to="/lastYear">About</router-link>
            <router-link class="spacing" to="/contact">Contact us</router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header" //this is the name of the component
};
</script>
<style>
</style>