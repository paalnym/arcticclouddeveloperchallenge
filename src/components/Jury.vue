<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Jury and award process</h3>
            <p>The jury this year consists of 5 people.</p>
            <p>The jury does not participate in teams, but are allowed to jump in on any team and aid/assist. It is up to the teams to "sell" their challenge to the jurors to get them involved. Jurors must allow fair distribution of their time across teams.</p>
            <p>The jury will award points and awards.</p>
            <h4>The jury for 2020 consists of</h4>
            <p><span><b>Unkown</b></span></p>
            <p><span><b>Unkown</b></span></p>
            <p><span><b>Unkown</b></span></p>
            <p><span><b>Unkown</b></span></p>
            <p><span><b>Unkown</b></span></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "jury", //this is the name of the component
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
.overview h4{
  font-size: 40px;
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