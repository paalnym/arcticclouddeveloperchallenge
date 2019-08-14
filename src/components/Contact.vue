<template>
    <div class="container-fluid">
      <div class="row contact">
        <div class="col-md-12">
          <h3 class="title">Contact us!</h3>
            <p>
              Follow Dexter the Lynx on Twitter
              <a href="https://twitter.com/intent/user?screen_name=SPChallenge"><span>@SPChallenge</span></a>
            </P>
            <p>Check out our facebook page for more information or to ask us any questions you may have</p>
               <p><a href="https://www.facebook.com/ArcticCloudDeveloperChallenge/"><span>https://www.facebook.com/ArcticCloudDeveloperChallenge/</span></a>
            </p>
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
.contact {
  padding: 20px;
   background: white;
  background: url("../assets/images/isai-ramos-46821-unsplash.png") no-repeat
    center;
  background-size: cover;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40%;
}

.contact h3 {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>