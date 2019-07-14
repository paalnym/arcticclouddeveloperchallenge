<template>
  <div class="container-fluid">
    <div class="row quickSummary">
      <div class="container">
        <div class="col-md-12">
          <div class="dragonHeadLeft"></div>
          <div class="dragonHeadRight"></div>  
          <div class="rectangle">
            <div>
              <img class="logo1Rect" src="../assets/logo/acdc_white_trans.png">
            </div>
            <div class="divider"></div>
            <h1 class="title">VIKINGS ARE COMING</h1>
            <h3 class="date">February 6th-9th 2020</h3>
          </div>   
        </div>
      </div>
    </div>
    <div class="row theAward">
        <div class="container">
          <div class="antlersStraight"></div>
          <div class="antlersDivider"></div>
          <div class="antlersDivider"></div>
          <div class="theAwardTitle">
            THE AWARD
          </div>
          <div class="antlersDivider"></div>
          <div class="antlersDivider"></div>
          <div class="antlersScewed"></div>
          <div class="theAwardContent">
            The winning team get to take home the ANTLERS to keep until next challenge 
            <br>
            <br>
            And all the glory they can carry
          </div>
          <div class="categoriesTitle">
            CATEGORIES
          </div>
          <div class="col-md-12">
            <div class="row">
                 <div class="col-md-6">
                   <div class="col-md-3">
                      <h3>Willy's shed</h3>
                      <p>
                        Power users love tools and flexibility, so why not show them some by using tools available to the average
                        office and line worker out there.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>Automated Teller Machineyolatrolamaton</h3>
                      <p>Cash is king, and nothing says cash like great business value.</p>
                    </div>
                  </div>
              </div>
         
            <br/>
            <h3>Obey the hypnotoad</h3>
            <p>
              Everything is so pretty, I can't take my eyes away! Applications are not all about functionality, they have to
              look pretty as well - why else have design manuals?
            </p>
            <br/>
            <h3>The genesis tub</h3>
            <p>All the tiny things, connected and online. Bring your IoT to the science fair!</p>
            <br/>
            <h3>Automated Teller Machineyolatrolamaton</h3>
            <p>Cash is king, and nothing says cash like great business value.</p>
            <br/>
            <h3>Bite my shiny metal ass</h3>
            <p>
              Use non-Microsoft tech in meaningful ways, or just out of spite (and if you didn't catch the reference,
              Bender's quote is not from the Simpsons).
            </p>
            <br/>
            <h3>Come bowling!</h3>
            <p>
              Be a happy camper, spread the love, show your amazing team spirit! This is not about tech, this is about feeling
              the happy blues.
            </p>
          </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    track () {
      this.$ga.page('/')
    }
  } //this is the name of the component
};
</script>
<style>
  .quickSummary {
    background: white;
    background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat center;
    background-size: cover;
    height: 40%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .quickSummary .event-title {
    font-size: 55px;
    font-weight: 500;
    line-height: 1.2;
  }
  .quickSummary .event-date {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }
  .rectangle {
    border: solid 10px;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-bottom: 90px;
  }
  .quickSummary h1 {
    color: white;
    padding-bottom: 15px;
  }
  .quickSummary h3 {
    color: white;
  }
  .quickSummary p {
    color: black;
    font-weight: 900;
  }
  .divider {
    border: 1px solid white;
    width: 70%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .dragonHeadLeft {
    float: left;
    width: 85px;
    height: 65px;
    background: url("../assets/images/dragenhead_white_trans.png") no-repeat center;
    margin-top: -44px;
    margin-left: -61px;
  }
  .dragonHeadRight {
    float: right;
    width: 85px;
    height: 65px;
    background: url("../assets/images/dragenhead_right_white_trans.png") no-repeat center;
    margin-top: -50px;
    margin-right: -56px;
  }
  .logo1Rect {
    height: 20%;
    width: 45%;
    padding-top: 70px;
  }
  .theAward {
    background: white;
    background: url("../assets/images/matthew-kerslake-1641860-unsplash.png") no-repeat center;
    background-size: cover;
    height: 40%;
    padding-top: 150px;
    padding-bottom: 100px;
  }
  .antlersStraight {
    height: 65px;
    background: url("../assets/images/antlers_dark_trans.png") no-repeat center;
    margin-bottom: -9px;
  }
  .antlersScewed {
    height: 65px;
    background: url("../assets/images/antlers_dark_trans.png") no-repeat center;
    transform: rotate(180deg);
    margin-left: 35px;
    margin-top: -18px;
  }
  .antlersDivider {
    border: 2px solid #27343C;
    width: 100%;
    margin-bottom: 10px;
  }
  .theAwardTitle {
    color: #27343C;
    font-size: 61px;
  }
  .theAwardContent {
    margin-top: 80px;
    color: #27343C;
    font-size: 50px;
    margin-bottom: 80px;
  }
  .categoriesTitle {
    color: #27343C;
    text-align: left;
    font-size: 61px;
  }
  .categoriesContent {
    
  }
    /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .theAward {
    padding-top: 70px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .theAwardContent {
    margin-top: 60px;
    font-size: 30px;
    font-size: 1.75rem;
  }
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .theAwardContent {
    margin-top: 60px;
    font-size: 30px;
    font-size: 1.75rem;
  }
}
/* ----------- iPhone X ----------- */
/* Portrait and Landscape */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .dragonHeadLeft {
    visibility: hidden;
  }
  .dragonHeadRight {
    visibility: hidden;
  }
  .rectangle {
    border: solid 5px;
  }
  .logo2 {
    height: 10px;
    width: 200px;
  }
  .quickSummary {
    padding-top: 0;
  }
  .theAwardTitle {
    font-size: 2.5rem;
  }
  .theAwardContent {
    margin-top: 60px;
    font-size: 30px;
    font-size: 1.75rem;
  }
}
</style>