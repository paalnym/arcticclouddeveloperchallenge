<template>
    <div class="container-fluid rulesandpoints">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="lightbrowntitle">Rules and Points</h3>
            
            <h4 class="yellowtitle">Categories</h4>
            <p>Each of the judges have 10 points to give out to each team for each of these categories every day:</p>

            <p><b>Odins Power User Love</b></p>
            <p>Power users love tools and flexibility, so why not show them some by using tools available to the average office and line worker out there. More power less code!</p>
            <p>Keywords: Power Automate, Power Apps, Power BI, Power Virtual Agent</p>

            <p><b>Freyas Design Favor</b></p>
            <p>Everything is so pretty, I can't take my eyes away! Applications are not all about functionality, they have to look pretty as well - why else have design manuals?</p>
            <p>Keywords: Glossy pixels, User interactive, Responsivenes</p>

            <p><b>Thors Connected Hammer</b></p>
            <p>All the tiny things, connected and online. Bring your IoT to the science fair!</p>
            <p>Keywords: Azure, IoT, DevOps</p>

            <p><b>Viking Raider's Loot</b></p>
            <p>Cash is king, and nothing says cash like great business value.</p>
            <p>Keywords: Usable solutions, Feasable Ideas, Real world scenarios</p>

            <p><b>Bifrost's gate</b></p>
            <p>Secure your solutions, dont let Loki get past your gates!</p>
            <p>Keywords: Keyvaults, GDPR, Secured Services</p>

            <p><b>For Valhalla!</b></p>
            <p>Be a happy camper, spread the love, show your amazing team spirit!</p>
            <p>Keywords: Help others in need, decorations, possitive vibes</p>

            <h4 class="yellowtitle">Judging</h4>
            <p>Every judge can hand out a maximum of 60 points to each team at every jury duty each day (6 categories * 10 points = 60 points max).</p>
            <p>Each day the team that get the most points for each category gets a crown, at the end of the hackaton the total category winners can take the crowns home.</p>
            <p>The crowns are there so that the current category leaders can feel proud and brag to the other teams about it.</p>
            <p>The crowns can be lost to another team the next day if they get more points in the category than the current category leaders.</p>

            <p>At the end of the hackaton each team have to deliver a short written presentation of the solution they have created to the judges.</p>
            <p>Eeach judge then has 100 points each to hand out to the team they feel deserves it the most.</p>

            <p>The maximum amount of achiveable points before the 100 wildcard points the last day will then be a total of: 6 categories * 10 points * X(Amount of judges) * 3 days of hacking.</p>
            <p>Example of maximum points for a team before wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking =  1080 points</p>
            <p>Example of maximum points for a team before after wildcard points: 6 categories * 10 points * 6 judges * 3 days of hacking + 600 wildcard points =  1680 points</p> 
            
            <h4 class="yellowtitle">The Grand Finale</h4>
            <p>The last day of the hackaton each team has to deliver a short written presentation of the solution they have created to the judges.</p>
            <p>The judges now has to make the final decisions of wich teams that deserves to get the wildcard points.</p>
            <p>At the fine dinner the last day of the hackaton the judges will present the solutions of the top 3 teams with the most points.</p> 
            <p>The judges starts presenting the solution winning the 3 place, then the second and at the end they present the winning team and the solution they have created.</p> 
            <h4 class="yellowtitle">The winning team gets to take home the antlers and also gets to inscribe theire company name at the very honorable winning teams plate placed on the antlers.</h4>
            <p>The winning team then gets to keep the antlers for 1 year until the next ACDC event.</p> 
          </div>
          </div>
        </div>      
    </div>
</template>

<script>
export default {
  name: "RulesAndPoints", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>


.rulesandpoints {
  padding: 20px;
  text-align: left;
   background: white;
   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("../assets/images/isai-ramos-46821-unsplash_comp.jpg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.rulesandpoints .lightbrowntitle {
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
}
.rulesandpoints ul {
  list-style-type: none;
}
.column {  
  padding-bottom: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
}
</style>