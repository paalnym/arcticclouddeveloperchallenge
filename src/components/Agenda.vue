<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h1 class="lightbrowntitle title">Temporary Agenda, final agenda coming soon</h1>
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
                        <li><p><span class="yellowtitle">1215</span> Secret session</p></li>
                        <li><p><span class="yellowtitle">1600</span> Jury Duty & Snacks</p></li>
                        <li><p><span class="yellowtitle">1900</span> Points & Crowns</p></li>
                        <li><p><span class="yellowtitle">1900</span> Dinner & Geekbeer</p></li>
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
                        <li><p><span class="yellowtitle">0900</span> Challenge session</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1245</span> Secret session</p></li>
                        <li><p><span class="yellowtitle">1430</span> Challenge session</p></li>
                        <li><p><span class="yellowtitle">1600</span> Jury Duty & Snacks</p></li>
                        <li><p><span class="yellowtitle">1900</span> Points & Crowns</p></li>
                        <li><p><span class="yellowtitle">1930</span> Geekfood + Geekbeer</p></li>
                        <li><p><span class="yellowtitle">2030</span> Kahoot</p></li>
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
                        <li>There are exiting things thats going to happen here ! Stay tuned :D</li>
                        <li><p><span class="yellowtitle">0900</span> Challenge session</p></li>
                        <li><p><span class="yellowtitle">1200</span> Lunch</p></li>
                        <li><p><span class="yellowtitle">1600</span> Final Jury Delivery</p></li>
                        <li><p>Clean out the hackaton room !</p></li>
                        <li><p><span class="yellowtitle">1700</span> Free time + make awsome product presentations</p></li>
                        <li><p><span class="yellowtitle">1900</span> Meetup @ bar</p></li>
                        <li><p><span class="yellowtitle">1930</span> Challenge fine dinner</p></li>
                        <li><p><span class="yellowtitle">2100</span> Demos & Awards</p></li>
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
</style>