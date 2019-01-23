<template>
  <div id="app">
    <a href="#/home"><img id="logo" src="./assets/logo-small.png"></a>
    <SponsorsHome></SponsorsHome>
    <Navigation></Navigation>
    <router-view/>
    <Footer></Footer>
  </div>
</template> 

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SponsorsHome from "./components/SponsorsHome";

export default {
  name: "app",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    SponsorsHome: SponsorsHome
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Corben:bold');
@import url('https://fonts.googleapis.com/css?family=Nobile');

h1, h2, h3, h4, h5, h6 {
    font-family: 'Nobile', Georgia, Times, serif;
}
p, div {
    font-family: 'Nobile', Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 10px;
  font-size: 18px;
}
#app ul{
  padding: 0;
}
#logo {
  height: auto;
  width: 300px;
  margin-bottom: 15px;
}
.spacing {
  margin-right: 10px;
}
.NavigationBar {
  background-color: lightgrey;
}

@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  font-family: "Roboto", sans-serif;
}

h2 {
  margin: 0px;
  text-transform: uppercase;
}

h6 {
  margin: 0px;
  color: #777;
}

.wrapper {
  text-align: center;
}

.tabs {
  width: 100%;
  font-size: 15px;
  padding: 0px;
  list-style: none;
  background: #122b7b;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
}

.tabs a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 10px 20px;
  display: inline-block;
  position: relative;
  z-index: 1;
  transition-duration: 0.6s;
}

.router-link-active {
  color: #05abe0 !important;
}

.tabs a i {
  margin-right: 5px;
}

.tabs .selector {
  height: 100%;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  border-radius: 50px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  background: #05abe0;
  background: -moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  background: -webkit-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  background: linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
}
.quickSummary {
  border-color: #8200f4;
  padding: 40px;
}
.quickSummary .event-title {
    font-size: 60px;
    font-weight: 800; 
}
.quickSummary .event-date {
    font-size: 35px;
    font-weight: 600; 
}
.juryAndSpeakers {
  border-color: #8200f4;
  padding: 40px;
}
.pricing {
  border-color: #8200f4;
  padding: 40px;
}
.signup {
  border-color: #8200f4;
  padding: 40px;
}
.venue {
  border-color: #8200f4;
  background: url("./assets/voksenaasen.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 40px;
}
.venue-image {
  padding-top: 200px;
  padding-bottom: 200px;
}
.signup {
  background: #122b7b;
}
.signup ul {
  list-style-type: none;
}
.pricing {
  background: #05abe0;
}
.pricing ul {
  list-style-type: none;
}
.pricing-coins {
  height: 150px;
  background: url("./assets/coins.png") no-repeat center;
}
.juryAndSpeakers {
  background: #122b7b;
}
.juryAndSpeakers .judge-devider {
  margin-bottom: 15px;
  margin-top: 15px;
}
.juryAndSpeakers .card {
  background: #122b7b;
  border: 0;
}
.juryAndSpeakers .card-text {
  width: 100%;
}
.juryAndSpeakers .card-seb {
  height: 300px;
  background: url("./assets/judges/seb.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-erwin {
  height: 300px;
  background: url("./assets/judges/erwin.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-marius {
  height: 300px;
  background: url("./assets/judges/marius.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-laura {
  height: 300px;
  background: url("./assets/judges/laura.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-chris {
  height: 300px;
  background: url("./assets/judges/chris.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-name {
  padding-top: 10px;
  font-size: 1.50rem;
  font-weight: 600;
}
.quickSummary {
  background: white;
  height: 300px;
  background: url("./assets/simpsons-monorriel.png") no-repeat center center
    fixed;
  background-size: cover;
}

.quickSummary h1 {
  color: white;
  font-weight: 900;
}
.quickSummary h3 {
  color: white;
  font-weight: 900;
}
.quickSummary p {
  color: black;
  font-weight: 900;
}
.about {
  padding: 20px;
  text-align: left;
}
.about .title {
  margin-top: 20px;
}
.about ul {
  list-style-type: none;
}

.lastyear {
  background: #122b7b;
  padding: 20px;
}
.contact {
  background: #122b7b;
  padding: 20px;
}
.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
}
.agenda {
  background: #122b7b;
  padding: 20px;
  text-align: left;
}
.agenda ul {
  list-style-type: none;
}
.agenda .title {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
}
.agenda .card {
  background: #122b7b;
  border: 0;
}
.agenda .devider {
  margin-left: 15%;
} 
.footer {
  background: black;
  padding-top: 20px;
}
.lastyear h3 {
  margin-bottom: 20px;
  margin-top: 20px;
}
.lastyear .image {
  border: 0!important;
}
.lastyear .vue-lightbox ul {
  max-width: 100%!important;
}
.lastyear .vue-lightbox ul li {
  padding: 1px!important;
}
.acdc-wrapper {
  width: 100%;
  background: #122b7b;
  overflow-wrap: break-word;
}
.sponsors {
  background: #122b7b;
  padding: 20px;
}
.sponsors .card {
  background: #122b7b;
  border: 0;
}
.sponsors .card-conzeon {
  height: auto;
  width: 400px;
}
.sponsorsHome {
  text-align: center;
}
.sponsorsHome .card {
  border: none;
}
.sponsorsHome .card-image {
  height: auto;
  width: 200px;
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
  .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .quickSummary {
    background: #05abe0;
  }
  .venue {
    background: #FF7558
  }
  .venue-image {
    padding-top: 0;
    padding-bottom: 0;
  }
  .spacing {
    margin-right: 0;
  }
  .quickSummary .event-title {
    font-size: 35px;
    font-weight: 600;
  }
  .quickSummary .event-date {
      padding-top: 15px;
      font-size: 25px; 
  }
}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */
/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
 .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .quickSummary {
    background: white;
    height: 300px;
    background: url("./assets/simpsons-monorriel.png") no-repeat center center
      fixed;
    background-size: cover;
  }
  .venue {
    background: #FF7558
  }
  .venue-image {
    padding-top: 0;
    padding-bottom: 0;
  }
  .spacing {
    margin-right: 0;
  }
  .quickSummary .event-title {
    font-size: 35px;
    font-weight: 600;
  }
  .quickSummary .event-date {
      padding-top: 15px;
      font-size: 25px; 
  }
}
/* ----------- iPhone X ----------- */
/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
  .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .quickSummary {
    background: white;
    height: 300px;
    background: url("./assets/simpsons-monorriel.png") no-repeat center center
      fixed;
    background-size: cover;
  }
  .venue {
    background: #FF7558
  }
  .venue-image {
    padding-top: 0;
    padding-bottom: 0;
  }
  .spacing {
    margin-right: 0;
  }
  .quickSummary .event-title {
    font-size: 35px;
    font-weight: 600;
  }
  .quickSummary .event-date {
      padding-top: 15px;
      font-size: 25px; 
  }
}
</style>
