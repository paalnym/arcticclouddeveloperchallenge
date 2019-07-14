<template>
  <div id="app">
 <!--    <a href="#/home">
      <img id="logo" src="./assets/logo-small.png">
    </a> -->
 <!--    <SponsorsHome></SponsorsHome> -->
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template> 

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import SponsorsHome from "./components/SponsorsHome";

export default {
  name: "app",
  components: {
    Header: Header,
    Footer: Footer,
    SponsorsHome: SponsorsHome
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:Light");
@import url("https://fonts.googleapis.com/css?family=Nobile");

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Condensed", Georgia, Times, serif;
}
p,
div {
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: 18px;
}
#app ul {
  padding: 0;
}

body {
  font-family: "Roboto Condensed", Georgia, Times, serif;
}

h2 {
  margin: 0px;
}

h6 {
  margin: 0px;
  color: #777;
}

.wrapper {
  text-align: center;
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

.categories {
  background: #122b7b;
  padding: 20px;
}

.categories .cats {
  text-align: left;
  columns: 2;
  vertical-align: top;
}

.categories h3 {
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
  border: 0 !important;
}
.lastyear .vue-lightbox ul {
  max-width: 100% !important;
}
.lastyear .vue-lightbox ul li {
  padding: 1px !important;
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
.sponsors .card-text {
  margin-top: 10px;
}
.sponsors .card-conzeon {
  height: auto;
  width: 400px;
}
.sponsors .card-microsoft {
  height: auto;
  width: 400px;
}
.sponsors .card-pp {
  height: auto;
  width: 400px;
}
.sponsors .card-accando {
  height: auto;
  width: 400px;
}
.sponsorsHome {
  text-align: center;
}
.sponsorsHome .card {
  border: none;
}
.sponsorsHome .card-conzeon {
  height: auto;
  width: 200px;
  padding-top: 40px;
}
.sponsorsHome .card-pp {
  height: auto;
  width: 200px;
}
.sponsorsHome .card-accando {
  height: auto;
  width: 200px;
  padding-top: 40px;
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .sponsors .card-pp {
    height: auto;
    width: 200px;
  }
  .sponsors .card-accando {
    height: auto;
    width: 200px;
  }
  .quickSummary {
    background: #05abe0;
  }
  .venue {
    background: #ff7558;
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
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .sponsors .card-pp {
    height: auto;
    width: 200px;
  }
  .sponsors .card-accando {
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
    background: #ff7558;
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
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .sponsors .card-conzeon {
    height: auto;
    width: 200px;
  }
  .sponsors .card-pp {
    height: auto;
    width: 200px;
  }
  .sponsors .card-accando {
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
    background: #ff7558;
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
