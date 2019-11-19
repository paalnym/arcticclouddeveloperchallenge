<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Arctic cloud developer challenge</h3>
            <p>The arctic cloud developer challenge was former known as the arctic sharepoint challenge. There has been a shift in the challenge focus from solely focusing on sharepoint to embracing all microsoft's cloud tech.</p>
            <p>
              The main focus this year will be on: azure, office 365 and dynamics365 but there will
              also be other techs introduced throughout the challenge.
              So if your poison is a javascript related, good old java, oldish c#, node, powershell, bash, flow, powerapps, react native, google api's - it doesn't matter,
              anything goes as long as the end-users of your solution is happy.
            </p>
            <p>
              Acdc is a bit different from other hackathons. While there are judges, points are being awarded in multiple categories.
              The categories could be azure usage, dynamics 365 knowledge, office 365 wizardry etc. The categories tend to change a little bit
              each year, and we give our judges freedom to make sure it all works out :)
            </p>
            <p>
              The hackathon is taking place over three days, and each team can each day gain from 0 to 100 points in each category,
              depending on their achievement in said category. If you "won" a category one day, it does not mean you will the next.
              at the end of each day the judges will go around to each team and you will present what you have worked on so far. Present
              your idea and business case, and feel free to pitch what you have achieved within each category as well.
            </p>
            <p>
              In addition to points within each category there might be special challenges being announced just in time for extra points.
              During the event a public leaderboard will be available so that off-site people can follow the competition. Each team will
              also get login to a blog, where they can write short posts about point solutions, or larger epics from their solution.
              These points makes it easier for the judges to follow along on your work, and see the value - thus you might get more points :)
            </p>
            <p>
              At the end of the three days, the top teams get to present their solution to all the other teams, and the winner is awarded
              based on popular vote. This means, to win, you don't need to have the most points, and you can focus on some point categories, but
              make an effort to be in the top three to ensure your hacker peers can vote for your awesome solution.
            </p>
            <p>
              If you need help during the event our judges are there to help you out, and we also encourge teams to help each
              other if they have an expert on an area. It's all about learning - but winning does feel good :)
            </p>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "overview", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
.overview p {
  font-size: 25px;
  padding: 0 20px;
}
.overview h3{
  font-size: 50px;
}
.overview h4{
  font-size: 40px;
  padding: 0 20px;
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