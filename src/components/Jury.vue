<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Jury and award process</h3>
            <p>The jury this year consists of 5 people, an impressive collection of MVP’s and community celebrities from the world of Office 365, CRM, and Azure. The best part is that they are not just judging, they will be there to answer questions and guide you throughout the event.</p>
            <p>The jury does not participate in teams, but are allowed to jump in on any team and aid/assist. It is up to the teams to "sell" their challenge to the jurors to get them involved. Jurors must allow fair distribution of their time across teams.</p>
            <p>The jury will award points and awards.</p>
            <h4>The jury for 2020 consists of</h4>
            <div class="row judge-devider">
              <div class="col-md-12">
                <div class="judgeTitle darktext">Ahmad Najjar</div>
                <img class="judgePicture" src="../assets/judges/ahmad.png" />
                <div class="judgeDescription darktext">
                  Ahmad is an enthusiastic developer heart and soul and a senior consultant based in Oslo at Infoworker. He’s also an active co-organizer for events and hackathons. During his 15 years of experience, He has mainly worked with Microsoft based technologies, like ASP.NET, C#, SQL and (of course) SharePoint, which is his main focus area, whereas he has worked with SharePoint since the beta version of MOSS 2007!
                </div>
              </div>
              <div class="col-md-12">
                <div class="judgeTitle darktext">Marc Anderson</div>
                  <img class="judgePicture" src="../assets/judges/marc.png" />
                  <div class="judgeDescription darktext">
                    Marc has over 35 years of experience in technology professional services and software development. Over a wide-ranging career in consulting as well as line manager positions, Marc has proven himself as a problem solver and leader who can solve difficult technology problems for organizations across a wide variety of industries and organization sizes.
                  </div>
              </div>
              <div class="col-md-12">
                <div class="judgeTitle darktext">Mikael Svenson</div>
                <img class="judgePicture" src="../assets/judges/mikael.png" />
                <div class="judgeDescription darktext">
                  Principal Program Manager at Microsoft. Mikael has good insight in many technologies and platforms as well as experience as project manager and customer communicator.
                </div>
              </div>
              <div class="col-md-12">
                <div class="judgeTitle darktext">Kim Noel</div>
                <img class="judgePicture" src="../assets/judges/kim.png" />
                <div class="judgeDescription darktext">
                  Creative engineer with excellent communication skills, team spirit, and adaptability. Her mission is to enable others to embrace uncertainty since there is no linear path to success.
                </div>
              </div>
              <div class="col-md-12">
                <div class="judgeTitle darktext">Lucy Bourne</div>
                <img class="judgePicture" src="../assets/judges/lucy.png" />
                <div class="judgeDescription darktext">
                  Microsoft Business Applications Evangelist on a mission to empower every person and organisation on the planet to achieve more.
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
  name: "jury", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
.judges {
background: #27343C;
  background: url("../assets/images/kristijan-arsov-tcw3nwoAgvs-unsplash_comp.jpg")
    no-repeat center;
  background-size: cover;
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
  margin-top: 10%;
  
}
.darkenoverlay{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.judgeFrame {  
  background: url("../assets/images/woodframe.png") no-repeat;
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
  width: 315px;
  height: 315px;
}
.judge-devider{
  margin-left: 15px !important;
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