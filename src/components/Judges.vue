<template>
 <div class="acdc-wrapper">
     <div class="row juryAndSpeakers">
        <div class="container">
          <div class="col-md-12">
            <h2>Jury and speakers</h2>
            <!--JURY AND SPEAKER SECTION, CHANGE THIS EACH YEAR-->
            <p>The jury this year is an impressive collection of MVP’s and community celebrities from the world of Office 365, CRM, and Azure. The best part is that they are not just judging, they will be there to answer questions and guide you throughout the event.</p>
            <p>The jury will check your blogs about your deliverables and they will give a hint on how to get more points and be category kings.</p>

            <div class="row judge-devider">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div class="card-seb"></div>
                    <h5 class="card-name">Seb Matthews</h5>
                    <p class="card-text">.
                      Consultant. Tech Leader. Investor. Speaker. Privacy. Information Management. Microsoft Fan. Seb is an all around nice guy, being a returning judge, and knowledgeable about most things Microsoft. Among his many ventures he is also employed as a technology futurist at NASA.                  
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div class="card-erwin"></div>
                    <h5 class="card-name">Erwin Van Hunen</h5>
                    <p class="card-text">
                      Product Manager at Rencore. Erwin is a Microsoft MVP in Office Apps and Services, he’s also a Microsoft Certified Master, and a core member of the Microsoft SharePoint Patterns and Practices (PnP) team. Erwin is somewhat of a PowerShell wizard, and participated once before in the event, where his team lost – now he’s back to judge them all!
                    </p>
                  </div>
                </div>
              </div>
            </div>
             <div class="row judge-devider">
               <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div class="card-chris"></div>
                    <h5 class="card-name">Chris Huntingford</h5>
                    <p class="card-text">
                      A passionate, overly enthusiastic, beer loving, drum smashing, guitar weilding Dynamics 365 & Power Platform Presales Solution architect and Business Applications MVP. Originally from South Africa, where he started working with Dynamics in the Microsoft channel 10 years ago. Chris has worked within multiple industries, multiple roles and within every module in Dynamics 365 Customer Engagement.
                      Chris also got some Azure competency! He has worked with SQL DBs, Connected field service, all that type of thing, also he has done a load with Power BI.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div class="card-laura"></div>
                    <h5 class="card-name">Laura Kokkarinen</h5>
                    <p class="card-text">
                      Laura works as a senior developer at Sulava, specializing in SharePoint, Office 365 and Azure. She started working with SharePoint in 2011, doing development, farm maintenance and later on also consulting. Since then she has moved on to work with Office 365 and Azure. These days, her specialty is implementing customized solutions for Office 365 by utilizing Azure services, SharePoint Framework, different APIs, and the Power Platform.
                      She has recently been awarded Microsoft MVP in Office Development and writes very insightful articles about Office 365. This is her first hackathon as a judge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row judge-devider">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <div class="card-marius"></div>
                    <h5 class="card-name">Marius Agur Hagelund Lind</h5>
                    <p class="card-text">
                      Owner at Marius Agur Consulting and a Microsoft MVP in Business Applications. This CRMViking has both been a participant and judge before, so he knows what’s going on – most importantly, he can explain the points system.
                    </p>
                  </div>
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
  name: 'judges', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
.juryAndSpeakers {
  border-color: #8200f4;
  padding: 40px;
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
  background: url("../assets/judges/seb.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-erwin {
  height: 300px;
  background: url("../assets/judges/erwin.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-marius {
  height: 300px;
  background: url("../assets/judges/marius.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-laura {
  height: 300px;
  background: url("../assets/judges/laura.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-chris {
  height: 300px;
  background: url("../assets/judges/chris.png") no-repeat center;
  margin-bottom: 15px;
}
.juryAndSpeakers .card-name {
  padding-top: 10px;
  font-size: 1.5rem;
  font-weight: 600;
}

</style>