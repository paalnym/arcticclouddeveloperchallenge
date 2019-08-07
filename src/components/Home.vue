<template>
  <div class="container-fluid">
    <div class="row quickSummary">
      <div class="container">
        <div class="col-md-12">
          <div class="dragonHeadLeft"></div>
          <div class="dragonHeadRight"></div>
          <div class="rectangle">
            <div>
              <img class="logo1Rect" src="../assets/logo/acdc_white_trans.png" />
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
        <div class="theAwardTitle">THE AWARD</div>
        <div class="antlersDivider"></div>
        <div class="antlersDivider"></div>
        <div class="antlersScewed"></div>
        <div class="theAwardContent">
          The winning team get to take home the ANTLERS to keep until next challenge
          <br />
          <br />And all the glory they can carry
        </div>
        <div class="categoriesTitle">CATEGORIES</div>
        <div class="categoriesContent">
          <div class="row">
            <div class="col-md-6">
              <div class="categoriesCatTitle">Willy's shed</div>
              <p>
                Power users love tools and flexibility, so why not show them some by using tools available to the average
                office and line worker out there.
              </p>

              <div class="categoriesCatTitle">Willy's shed</div>
              <p>Cash is king, and nothing says cash like great business value.</p>

              <div class="categoriesCatTitle">Willy's shed</div>
              <p>Cash is king, and nothing says cash like great business value.</p>
            </div>
            <div class="col-md-6">
                <div class="categoriesCatTitle">Willy's shed</div>
                <p>
                  Power users love tools and flexibility, so why not show them some by using tools available to the average
                  office and line worker out there.
                </p>
                <div class="categoriesCatTitle">Willy's shed</div>
                <p>Cash is king, and nothing says cash like great business value.</p>

                <div class="categoriesCatTitle">Willy's shed</div>
                <p>Cash is king, and nothing says cash like great business value.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row thePriceToPay">
      <div class="container-fluid">
        <div class="thePriceToPayContent">
            <div class="thePriceToPayTitle">THE PRICE TO PAY</div>
              <p>Price: NOK 7000 (ex. VAT)</p> 
              <p>Includes:</p> 
              <p>Challenge Participants Pass Three nights in single bedroom at onsite hotel</p>  
              <p>Breakfast Friday, Saturday and Sunday </p>
              <p>Lunch, coffee and small treats for the full duration</p>  
              <p>Geekfood Thursday</p>
              <p>Three course dinner Friday</p> 
              <p>Banquet dinner Saturday</p> 
              <p>Subsidized CloudPints</p>
        </div>
      </div>
    </div>
    <div class="row judges">
      <div class="container">
        <div class="judgesContent">
          <div class="judgesTitle">JUDGES</div>
          <div class="row">
            <div class="col-md-6">
              <div class="judgeTitle">Sigvat Gellirsson</div>
              <img class="judgePicture" src="../assets/judges/jonathan-farber-655111-unsplash.png" />
              <div class="judgeDescription">
                Power users love tools and flexibility, so why not show them some by using tools available to the average
                office and line worker out there.
              </div>

             <div class="judgeTitle">Arnstein Hallfridsson</div>
              <img class="judgePicture" src="../assets/judges/jonathan-farber-655111-unsplash.png" />
              <div class="judgeDescription">
                Power users love tools and flexibility, so why not show them some by using tools available to the average
                office and line worker out there.
              </div>
            </div>
            <div class="col-md-6">
              <div class="judgeTitle">Ingimund Olvirsson</div>
              <img class="judgePicture" src="../assets/judges/jonathan-farber-655111-unsplash.png" />
              <div class="judgeDescription">
                Power users love tools and flexibility, so why not show them some by using tools available to the average
                office and line worker out there.
              </div>

             <div class="judgeTitle">Toki Ketilbiornsson</div>
              <img class="judgePicture" src="../assets/judges/jonathan-farber-655111-unsplash.png" />
              <div class="judgeDescription">
                Power users love tools and flexibility, so why not show them some by using tools available to the average
                office and line worker out there.
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    track() {
      this.$ga.page("/");
    }
  } //this is the name of the component
};
</script>
<style>
.quickSummary {
  background: white;
  background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat
    center;
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
  background: url("../assets/images/dragenhead_white_trans.png") no-repeat
    center;
  margin-top: -44px;
  margin-left: -61px;
}
.dragonHeadRight {
  float: right;
  width: 85px;
  height: 65px;
  background: url("../assets/images/dragenhead_right_white_trans.png") no-repeat
    center;
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
  background: url("../assets/images/matthew-kerslake-1641860-unsplash.png")
    no-repeat center;
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
  border: 2px solid #27343c;
  width: 100%;
  margin-bottom: 10px;
}
.theAwardTitle {
  color: #27343c;
  font-size: 61px;
}
.theAwardContent {
  margin-top: 80px;
  color: #27343c;
  font-size: 50px;
  margin-bottom: 80px;
}
.categoriesTitle {
  color: white;
  text-align: left;
  font-size: 61px;
  margin-top:50px;
  text-shadow: 1px 1px #27343c;
  margin-top: 50%;
}
.categoriesContent {
  text-align: left;
  color: white;
  font-size: 25px;
  margin-bottom: 80px;
  font-family: "Roboto Condensed", Georgia, Times, serif;
  text-shadow: 1px 1px #27343c;
}
.categoriesCatTitle {
  text-align: left;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: "Roboto Condensed", Georgia, Times, serif;
}
.thePriceToPay {
  background: white;
  background: url("../assets/images/artem-maltsev-1372852-unsplash.png")
    no-repeat center;
  background-size: cover;
  padding-bottom: 40%;
}
.thePriceToPayTitle {
  color: white;
  font-size: 61px;
}
.thePriceToPayContent {
  color: white;
  font-size: 25px;
  margin-top: 25%;
  font-family: "Roboto Condensed", Georgia, Times, serif;
  text-shadow: 1px 1px #27343c;
  float: right;
  padding-right: 15%;
}
.judges {
  background: #27343C;
  background: url("../assets/images/lisa-obenauf-359856-unsplash.png")
    no-repeat center;
  background-size: cover;
  padding-bottom: 40%;
  opacity: 0.7;
  color: #27343C;
}
.judgesTitle {
  color: white;
  font-size: 70px;
  font-weight: bolder;
  text-shadow: 1px 1px #27343c;
  margin-bottom: 30px;
}
.judgesContent {
  color: white;
  font-size: 25px;
  margin-top: 25%;
}
.judgeFrame {
  background: #27343C;
  background: url("../assets/images/woodframe.png")
    no-repeat;
    padding: 10px 5px 5px 10px ;
}
.judgeTitle {
  color: white;
  font-size: 35px;
  text-shadow: 1px 1px #27343c;
  margin-bottom: 15px;
}
.judgePicture {
  margin-bottom: 15px;
}
.judgeDescription {
  color: white;
  font-size: 25px;
  text-shadow: 2px 2px #27343c;
  margin-bottom: 25px;
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