<template>
  <div>
    <div class="container-fluid">
      <div class="row sponsorsHome">
        <div class="col-md-12">
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <a href="http://microsoft.no">
                    <img class="card-conzeon" src="../assets/sponsors/microsoft.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <a href="http://conzeon.se">
                    <img class="card-conzeon" src="../assets/sponsors/conzeon-big.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <a href="https://www.provisionpoint.com/">
                    <img class="card-pp" src="../assets/sponsors/pp.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <a href="https://www.acando.no/">
                    <img class="card-accando" src="../assets/sponsors/acando_logo_black.png">
                  </a>
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
    track() {
      this.$ga.page("/");
    }
  }
};
</script>
<style>
</style>