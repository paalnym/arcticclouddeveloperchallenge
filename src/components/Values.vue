<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Values and wins</h3>
            <p><span>ACDC is a community event (affordable and inclusive)</span></p>
            <P><span>ACDC is </span>non-profit (all money goes into the events)</p>
            <P><span>ACDC is about learning, sharing and fun (be nice)</span></p>
            <P>To ensure that all events follow these values, the core team provides benevolent dictatorship for all events. The core team recruits from a variety of companies and does it best to ensure diversity with respect to companies and other interests involved.</p>
            <h4>Code of conduct</h4>
            <P>We have never really encountered situations that have raised for a need to include this statement, but we liked it and included it.</P>
            <p>ACDC is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "valueswins", //this is the name of the component
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