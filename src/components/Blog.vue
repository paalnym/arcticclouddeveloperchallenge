<template>
    <div class="container-fluid">
      <div class="row blog">
        <div class="col-md-12 overview">
          <h3 class="lightbrowntitle">ACDC Blog</h3>
          </div>
        </div>
      </div>
</template>
<script>
import Butter from 'buttercms';

export default {
  name: 'Blog', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
.contact {
  padding: 20px;
   background: white;
  background: url("../assets/images/isai-ramos-46821-unsplash_comp.jpg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 100%;
}

.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
}

.contact .lightbrowntitle {
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
}
</style>