<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h1 class="lightbrowntitle title">Agenda</h1>
          <div class="row devider">
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="lightbrowntitle card-name">Thursday 06 February</h2>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Check-in and rigging</p></li>
                        <li><p><span class="yellowtitle">0900</span> Welcome and Keynote</p></li>
                        <li><p><span class="yellowtitle">1000</span> Team presentations</p></li>
                        <li><p><span class="yellowtitle">1030</span> Challenge kick-off</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Jury Duty &#x26; Snacks</p></li>
                        <li><p><span class="yellowtitle">1800</span> Points, Helmets &#x26; Standup </p></li>
                        <li><p><span class="yellowtitle">1900</span> Dinner &#x26; Mjød</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="lightbrowntitle card-name">Friday 07 February</h2>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">0900</span> Jury Duty &#x26; Challenge session</p></li>
                        <li><p><span class="yellowtitle">1130</span> Points &#x26; Helmets</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1300</span> Challenge session</p></li>
                        <li><p><span class="yellowtitle">1500</span> SharePint &#x26; Snack </p></li>
                        <li><p><span class="yellowtitle">1600</span> Session 1 &#x26; Session 2</p></li>
                        <li><p><span class="yellowtitle">1645</span> Session 3 &#x26; Session 4</p></li>
                        <li><p><span class="yellowtitle">1730</span> Session 5 &#x26; Mjød</p></li>
                        <li><p><span class="yellowtitle">1815</span> Panel discussion</p></li>
                        <li><p><span class="yellowtitle">1900</span> Dinner &#x26; Mjød</p></li>
                        <li><p><span class="yellowtitle">2100</span> Fun and games</p></li>
                        <li><p><span class="yellowtitle">2200</span> Party</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="lightbrowntitle card-name">Saturday 08 February</h2>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">0900</span> Jury Duty &#x26; Challenge session</p></li>
                        <li><p><span class="yellowtitle">1130</span> Points &#x26; Helmets </p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Final delivery (included documentation to the jury)</p></li>
                        <li><p>Clean out the hackaton room !</p></li>                        
                        <li><p><span class="yellowtitle">1700</span> Free time</p></li>
                        <li><p><span class="yellowtitle">1830</span> Meetup @ bar</p></li>
                        <li><p><span class="yellowtitle">1900</span> Challenge fine dinner & Awards</p></li>
                        <li><p><span class="yellowtitle">2230</span> ACDC Party</p></li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h2 class="lightbrowntitle card-name">Sunday 09 February</h2>
                    <p class="card-text">
                       <ul>
                        <li><p><span class="yellowtitle">0800</span> Breakfast</p></li>
                        <li><p><span class="yellowtitle">1100</span> Latest check-out</p></li>
                      </ul>                  
                    </p>
                </div>
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
  name: 'Agenda', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
.agenda {
  padding: 20px;
  text-align: left;
  background: black;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("../assets/images/adrian-159245-unsplash.jpg") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
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
  background: transparent;
  border: 0;
  margin-bottom: 15px;
}
.agenda .lightbrowntitle .title {
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
}
</style>