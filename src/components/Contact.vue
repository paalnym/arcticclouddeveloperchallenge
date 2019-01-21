<template>
 <div class="acdc-wrapper">
    <div class="container">
      <div class="row contact">
        <div class="col-md-12">
          <h3 class="title">Contact us!</h3>
            <p>
              Follow Dexter the Lynx on 
              <a href="https://twitter.com/intent/user?screen_name=SPChallenge"><span>@SPChallenge</span></a>
               to be notified suddenly!
            </P>
            <p>Check out our facebook page for more information and pictures from the previous Arctic SharePoint Challenge events.</p>
            <p><a href="https://www.facebook.com/ArcticCloudDeveloperChallenge/">https://www.facebook.com/ArcticCloudDeveloperChallenge/</a></p>
            <p>Feel free to contact any of the organizers for questions or comments about the event – or if you want information on how to sponsor the event:</p>
            <p><span>Mikael Svenson </span><a href="mailto:mikael.svenson@puzzlepart.com"><span>(mikael.svenson@puzzlepart.com)</span></a></p>
            <p><span>Hussain Al-Mousawi </span><a href="mailto:ha@infoworker.no"><span>(ha@infoworker.no)</span></a></p>
            <p><span>Pål Nymoen </span><a href="mailto:pal.nymoen@bouvet.no"><span>(pal.nymoen@bouvet.no)</span></a></p>
            <p><span>Ulrikke Akerbæk </span><a href="mailto:ulrikke.akerbaek@skill.no"><span>(ulrikke.akerbaek@skill.no)</span></a></p>
            <p><span>Jarle Røed-Engseth </span><a href="mailto:jarle.roed-engseth@skill.no"><span>(jarle.roed-engseth@skill.no)</span></a></p>
            <p><span>Hlynur Runarsso </span><a href="mailto:hlynur.runarsson@soprasteria.com"><span>(hlynur.runarsson@soprasteria.com)</span></a></p>
            <p><span>Carlos Briceno </span><a href="mailto:carlos.briceno@acando.no"><span>(carlos.briceno@acando.no)</span></a></p>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
export default {
  name: 'Contact', //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
<style>
</style>