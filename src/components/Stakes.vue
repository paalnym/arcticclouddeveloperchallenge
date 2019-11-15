<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">10 years anniversary</h3>
            <p>This year is very special since we are celebrating the 10th anniversary of ACDC. We celebrate by inviting all friends of ACDC to a join us at Voksenåsen for the “ACDC 10-year Anniversary Community Event” Friday February 7th. A day of great sessions and speakers from around the world, dinner and games, and a night of seeing old fields and drinking good beer. Anyone can join in, also those not participating in the challenge.
            </p>                 
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "stakes", //this is the name of the component
  components: {
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
.overview p {
  font-size: 25px;
  padding: 0 20px;
}
.overview h3{
  font-size: 50px;
}
.center{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 20px;
}
.title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
}
.about {
  padding: 20px;
  text-align: left;
   background: white;
  background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.about .title {
  margin-top: 20px;
}
.about ul {
  list-style-type: none;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>