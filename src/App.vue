<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template> 

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:Light");
@import url("https://fonts.googleapis.com/css?family=Nobile");
@font-face { 
    font-family: "PR Viking";
    src: url("assets/fonts/PR Viking.ttf"); 
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "PR Viking", Georgia, Times, serif !important;
}

p{
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
}

@import url("https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-size: 18px;
  overflow-x: hidden;
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

h5{
  font-size: 2rem;
}

h6 {
  margin: 0px;
  color: #777;
}

.wrapper {
  text-align: center;
}

.yellowtitle{
  color:#FBB90F;
}

.browntitle{
  color:#5B4F43;
}

.lightbrowntitle {
  color:#fff0df;
}
@media only screen and (min-device-width: 800px) {
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
}

</style>
