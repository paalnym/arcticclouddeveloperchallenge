<template>
  <div>
     <div class="container-fluid">
      <div class="row agenda">
        <div class="container">
          <div class="col-md-12">
            <h3 class="title">Temporary Agenda, final agenda coming soon</h3>
          <div class="row devider">
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-name">Thursday 06 February</h5>
                    <p class="card-text">
                       <ul>
                        <li>0800 Check-in and rigging</li>
                        <li>0900 Welcome and Keynote</li>
                        <li>1000 Team presentations</li>
                        <li>1030 Challenge kick-off</li>
                        <li>1200 Lunch</li>
                        <li>1215 Secret session</li>
                        <li>1600 Jury Duty & Snacks</li>
                        <li>1900 Points & Crowns</li>
                        <li>1900 Dinner & Geekbeer</li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-name">Friday 07 February</h5>
                    <p class="card-text">
                       <ul>
                        <li>0800 Breakfast</li>
                        <li>0900 Challenge session</li>
                        <li>1200 Lunch</li>
                        <li>1245 Secret session</li>
                        <li>1430 Challenge session</li>
                        <li>1600 Jury Duty & Snacks</li>
                        <li>1900 Points & Crowns</li>
                        <li>1930 Geekfood + Geekbeer</li>
                        <li>2030 Kahoot</li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-name">Saturday 08 February</h5>
                    <p class="card-text">
                       <ul>
                        <li>There are exiting things thats going to happen here ! Stay tuned :D</li>
                        <li>0900 Challenge session</li>
                        <li>1200 Lunch</li>
                        <li>1600 Final Jury Delivery</li>
                        <li>Clean out the hackaton room !</li>
                        <li>1700 Free time + make awsome product presentations</li>
                        <li>1900 Meetup @ bar</li>
                        <li>1930 Challenge fine dinner</li>
                        <li>2100 Demos & Awards</li>
                        <li>2230 ACDC Party</li>
                      </ul>                  
                    </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-name">Sunday 09 February</h5>
                    <p class="card-text">
                       <ul>
                        <li>0800 Breakfast</li>
                        <li>1100 Latest check-out</li>
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
  background: white;
  background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat
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
  background: #27343C;
  border: 0;
  margin-bottom: 15px;
}
</style>