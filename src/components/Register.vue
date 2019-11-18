<template>
    <div class="container-fluid">
      <div class="row contact">
        <div class="col-md-12">
          <h3 class="yellowtitle title">Register your team here, registration is binding</h3>
           <iframe width="1024px" height="2024px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=fa-Hi0eGx02N9F9pogEbtVqrSmJ1crRAtUiuR7rVkvNUMjZPUk44SDFJWllIMklLR0g3QUhJVlpNRC4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:260vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Register', //this is the name of the component
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
  background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat
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
</style>