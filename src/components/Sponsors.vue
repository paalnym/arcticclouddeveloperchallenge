<template>
  <div>
    <div class="container-fluid">
      <div class="row sponsors">
        <div class="col-md-12">
          <h2 class="title">Sponsors Arctic Cloud Developer Challenges 2019</h2>
          <div class="row">
              <div class="card">
                <div class="card-body">
                  <a href="http://conzeon.se"><img class="card-conzeon" src="../assets/sponsors/conzeon-big.png"/></a>
                 <!--  <h5 class="card-name">Conzeon</h5> -->
                  <p class="card-text">
                    Conzeon offers expert specialists for our customers.
                    The driving force is to contribute with noticeable and lasting improvements for the companies we help.
                    We offer expertise in system design, integration and system and web development within .NET.
                    Specialists are available in .NET, SharePoint, SQL Server, Windows Azure and EPiServer.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <a href="https://www.provisionpoint.com/"><img class="card-pp" src="../assets/sponsors/pp.png"/></a>
                 <!--  <h5 class="card-name">Conzeon</h5> -->
                  <p class="card-text">
                    ProvisionPoint is the Office 365 provisioning and management tool designed for everyone.  
                    It works with the different apps in Office 365 including SharePoint Sites, Office 365 Groups and Microsoft Teams.  
                    The easy to use interface helps to improve User Adoption whilst avoiding information chaos and duplication. 
                    It is simple to install and configurable to support different governance and lifecycle needs.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <a href="https://www.acando.no/"><img class="card-accando" src="../assets/sponsors/acando_logo_white.png"/></a>
                 <!--  <h5 class="card-name">Conzeon</h5> -->
                  <p class="card-text">
                    With one of Norway's largest systems development and architecture environments, in addition to specialists in digital strategy and transformation, user experiences, machine learning, data analysis, IoT and management, Accando creates the future IT solutions for customers.
                  </p>
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
  name: "Sponsors", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
</style>