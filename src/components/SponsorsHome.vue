<template>
  <div>
    <div class="container-fluid">
      <div class="row sponsorsHome">
        <div class="col-md-12">
          <div class="row">
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <a href="http://conzeon.se"><img class="card-conzeon" src="../assets/sponsors/conzeon-big.png"/></a>
                 <!--  <h5 class="card-name">Conzeon</h5> -->
                  <!-- <p class="card-text">
                    Conzeon offers expert specialists for our customers.
                    The driving force is to contribute with noticeable and lasting improvements for the companies we help.
                    We offer expertise in system design, integration and system and web development within .NET.
                    Specialists are available in .NET, SharePoint, SQL Server, Windows Azure and EPiServer.
                  </p> -->
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <a href="https://www.provisionpoint.com/"><img class="card-pp" src="../assets/sponsors/pp.png"/></a>
                 <!--  <h5 class="card-name">Conzeon</h5> -->
                  <!-- <p class="card-text">
                    Conzeon offers expert specialists for our customers.
                    The driving force is to contribute with noticeable and lasting improvements for the companies we help.
                    We offer expertise in system design, integration and system and web development within .NET.
                    Specialists are available in .NET, SharePoint, SQL Server, Windows Azure and EPiServer.
                  </p> -->
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
  name: "SponsorsHome", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
</style>