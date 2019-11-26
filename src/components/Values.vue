<template>
    <div class="container-fluid values">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Values and wins</h3>
            <p><span class="yellowtitle">ACDC is </span>a community event (affordable and inclusive)</p>
            <P><span class="yellowtitle">ACDC is </span>non-profit (all money goes into the events)</p>
            <P><span class="yellowtitle">ACDC is </span>about learning, sharing and fun (be nice)</p>
            <P>To ensure that all events follow these values, the core team provides benevolent dictatorship for all events. The core team recruits from a variety of companies and does it best to ensure diversity with respect to companies and other interests involved.</p>
            <h4>Code of conduct</h4>
            <P>We have never really encountered situations that have raised for a need to include this statement, but we liked it and included it.</P>
            <p><span class="yellowtitle">ACDC is</span> dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
            <p>Be respectful, we are a group of proffesionals and we should behave in such way. Disagreement is no excuse for poor behavior and poor manners. Disrespectful and unacceptable behavior includes, but is not limited to:</p>
            <ul>
              <li><p>Violent threats or language.</p></li>
              <li><p>Discriminatory or derogatory jokes and language.</p></li>
              <li><p>Posting sexually explicit or violent material.</p></li>
              <li><p>Posting, or threatening to post, people's personally identifying information ("doxing").</p></li>
              <li><p>Insults, especially those using discriminatory terms or slurs.</p></li>
              <li><p>Behavior that could be perceived as sexual attention.</p></li>
              <li><p>Advocating for or encouraging any of the above behaviors.</p></li>
            </ul>
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
.title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
}
.values {
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
.values .title {
  margin-top: 20px;
}
.values ul {
  list-style-type:circle;
  margin-left: 40px;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>