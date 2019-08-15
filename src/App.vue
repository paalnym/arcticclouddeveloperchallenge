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
@import url("https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/10.0.0/css/fabric.min.css");


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

h6 {
  margin: 0px;
  color: #777;
}

.wrapper {
  text-align: center;
}
</style>
