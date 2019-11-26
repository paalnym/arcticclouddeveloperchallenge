<template>
  <div>
    <div class="container-fluid">
      <div class="row header">
        <div class="col-5">
          <div class="logo1left">
            <a href="#/home">
              <img class="logo1" src="../assets/logo/acdc_alone_white_trans.png">
            </a>
          </div>
          <div v-responsive="['hidden-all','lg','xl','md']" class="logo2right">
            <a href="#/home">
              <img class="logo2" src="../assets/logo/acdc_LONG_white_trans.png">
            </a>
          </div>
        </div>
        <div class="col-7">
          <div v-responsive="['hidden-all','xs','sm']">
            <Slide right>
              <nav class="tabs">
                <div class="selector"></div>
                <router-link class="spacing" to="/home"><i class="ms-Icon ms-Icon--Home" aria-hidden="true"></i><span>Home</span></router-link>
                <router-link class="spacing" to="/about"><i class="ms-Icon ms-Icon--Group" aria-hidden="true"></i><span>About</span></router-link>
                <router-link class="spacing" to="/anniversary"><i class="ms-Icon ms-Icon--PartyLeader" aria-hidden="true"></i><span>10th Anniversary</span></router-link>
                <router-link class="spacing" to="/galleri"><i class="ms-Icon ms-Icon--Picture" aria-hidden="true"></i><span>Galleri</span></router-link>
                <router-link class="spacing" to="/Agenda"><i class="ms-Icon ms-Icon--CalendarAgenda" aria-hidden="true"></i><span>Agenda</span></router-link>
                <router-link class="spacing" to="/Agenda"><i class="ms-Icon ms-Icon--Education" aria-hidden="true"></i><span>Code of conduct</span></router-link>
                <router-link class="spacing" to="/register"><i class="ms-Icon ms-Icon--AddFriend" aria-hidden="true"></i><span>Register</span></router-link>
                <router-link class="spacing" to="/contact"><i class="ms-Icon ms-Icon--ContactCard" aria-hidden="true"></i><span>Contact us</span></router-link>
                <!--<router-link class="spacing" to="/lastYear">Previous Hackatons</router-link>-->
              </nav>
            </Slide>
          </div>
          <div v-responsive="['hidden-all','lg','xl','md']">
            <nav class="tabs">
              <div class="selector"></div>
                <router-link class="spacing" to="/home">Home</router-link>
                <router-link class="spacing" to="/about">About</router-link>
                <router-link class="spacing" to="/anniversary">10th Anniversary</router-link>
                <router-link class="spacing" to="/galleri">Galleri</router-link>
                <router-link class="spacing" to="/Agenda">Agenda</router-link>
                <router-link class="spacing" to="/Values">Code of conduct</router-link>
                <router-link class="spacing" to="/register">Register</router-link>
                <router-link class="spacing" to="/contact">Contact us</router-link>
                <!--<router-link class="spacing" to="/lastYear">Previous Hackatons</router-link>-->
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu';
import responsive from 'vue-responsive';
import Vue from "vue";
Vue.use(responsive);
export default {
  name: "Header",//this is the name of the component
  components: {
     Slide: Slide
  }
};
</script>
<style>

  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #27343C !important; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-item-list {
    color: #b8b7ad;
    font-size: 20px;
    margin-left: 0!important;
  } 

  .bm-item-list > nav {
    display: inline-block;
  }

  .bm-burger-bars {
    background-color: white !important;
  }

  .logo1left {
    float: left;
    padding-top:35px;
  }

  .logo2right {
    padding-top: 35px;
    /* margin-left: 22px; */
    left: 170px;
    position: absolute;
  }

  .logo1 {
    height: 35px;
  }

  .logo2 {
    height: 15px;
    width: 250px;
  }

  .spacing {
    margin-right: 5px;
  }

  .NavigationBar {
    background-color: #27343C;
  }

  .header {
    background-color: #27343C; 
    padding-bottom: 15px;
  }

  .tabs {
    font-size: 18px;
    padding-top: 35px;
    list-style: none;
    background: #27343C;
    display: inline-block;
    position: relative;
  }

  .tabs a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    padding: 3px;
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

/* Screen size no matter device type*/
@media screen and (min-width: 375px) and (max-width: 812px){
  .tabs a {
    display: flex;
  }

  .tabs span{
    color: rgb(230,230,230);
    font-weight: 700;
    margin-left: 10px;
  }

  .bm-item-list > nav {
    display: inline-block;
  }
}

      /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
   .logo2right {
    padding-top: 0;
    margin-left: 5px;
    left: 0;
    position: relative;
  }
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
 .logo2right {
    padding-top: 0;
    margin-left: 5px;
    left: 0;
    position: relative;
  }
}
/* ----------- iPhone X ----------- */
/* Portrait and Landscape */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
 .logo2right {
    padding-top: 0;
    margin-left: 5px;
    left: 0;
    position: relative;
  }
}


</style>