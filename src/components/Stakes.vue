<template>
    <div class="container-fluid anniversary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 overview">
            <h3 class="lightbrowntitle title">10-year Anniversary Community Eve</h3>
            <p>We have the great pleasure of inviting you to the celebration of the 10-year anniversary for Arctic Cloud Developer Challenge, formerly known as Arctic SharePoint Challenge.
            </p>   
            <p>
              We celebrate by inviting all friends of ACDC to a join us at Voksenåsen for the “ACDC 10-year Anniversary Community Event” Friday February 7th. A day of great sessions and speakers from around the world, dinner and games, and a night of seeing old fields and drinking good beer. Anyone can join in, so spread the word and bring a friend.
            </p> 
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <h4 class="lightbrowntitle">Agenda</h4>
                <ul>
                  <li><p><span class="yellowtitle">15:00</span> - Show up, sign in, get badge and pour coffee</p></li>
                  <li><p><span class="yellowtitle">15:15</span> - SharePint + Snack in the challenge room. Meet the ACDC 2020 teams</p></li>
                  <li><p><span class="yellowtitle">16:30</span> - Sessions and tracks with awesome speakers and exciting topics</p></li>
                  <li><p><span class="yellowtitle">19:00</span> - Please join us for dinner at Voksenåsen Restaurant (at your own expense)</p></li>
                  <li><p><span class="yellowtitle">21:00</span> - Fun and games</p></li>
                  <li><p><span class="yellowtitle">22:00</span> - Party!</p></li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12"> 
                <router-link to="/RegisterAnniversary">
                  <div class="registernow">
                    <h3 class="lightbrowntitle">Register today</h3>
                  </div>
                </router-link>        
              </div>
            </div>
            
            <h4 class="lightbrowntitle">The best part-it’s free-ish..</h4>
            <p>
              The event is free, except for a NOK 100,-no-show-fee. You’ll need to sign up before the event and get your badge when you arrive so that we know you are attending. We will serve you free food and beer at the “SharePint and snacks” and need to know that we prepare enough for everyone.
            </p>    
            <h4 class="lightbrowntitle">Dinner and hotel not included</h4>
            <p>
              The dinner at 19:00 is not included –not free –but you are most welcome to join us at your own expense.Please let us know if you will join us for dinner when you get your badge at sign in. You are most welcome to stay the night at the hotel at your own expense. You book the room yourself and get a small discount when registering under the ACDC name
            </p>  
            <h4 class="lightbrowntitle">More Info</h4>    
            <div class="row">
              <div class="column">
                <ul>
                  <li><a href="https://www.facebook.com/ArcticCloudDeveloperChallenge"><p>https://www.facebook.com/ArcticCloudDeveloperChallenge</p></a></li>
                  <li><p>Twitter: @SPChallenge - #ACDC2020</p></li>
                </ul>
              </div>
            </div>        
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "stakes", //this is the name of the component
  components: {
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
.registernow{
  border-radius:4px;
  background-color: #FBB90F;
  padding: 10px;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;
}
.anniversary li{
  list-style: none;
}
.center{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 20px;
}
.title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
}
.anniversary {
  padding: 20px;
  text-align: left;
  background-color: #27343C;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("../assets/images/isai-ramos-46821-unsplash_comp.jpg") no-repeat
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