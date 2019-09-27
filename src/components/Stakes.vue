<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">The stakes</h3>
            <p>Teams battle for the great trophy - the antlers - for best in show. The winning team is the team receiving the most amount of points according to our point system.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "stakes", //this is the name of the component
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