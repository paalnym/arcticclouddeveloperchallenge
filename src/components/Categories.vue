<template>
  <div class="acdc-wrapper">
    <div class="container">
      <div class="row categories">
        <div class="col-md-12">
          Each hackathon has it's ways of scoring. ACDC uses six categories where your solutions can earn points.
          And the categories for ACDC 2019 are:
          <br>
          <br>
          <div class="cats">
            <h3>Willy's shed</h3>
            <p>
              Power users love tools and flexibility, so why not show them some by using tools available to the average
              office and line worker out there.
            </p>
            <br/>
            <h3>Obey the hypnotoad</h3>
            <p>
              Everything is so pretty, I can't take my eyes away! Applications are not all about functionality, they have to
              look pretty as well - why else have design manuals?
            </p>
            <br/>
            <h3>The genesis tub</h3>
            <p>All the tiny things, connected and online. Bring your IoT to the science fair!</p>
            <br/>
            <h3>Automated Teller Machineyolatrolamaton</h3>
            <p>Cash is king, and nothing says cash like great business value.</p>
            <br/>
            <h3>Bite my shiny metal ass</h3>
            <p>
              Use non-Microsoft tech in meaningful ways, or just out of spite (and if you didn't catch the reference,
              Bender's quote is not from the Simpsons).
            </p>
            <br/>
            <h3>Come bowling!</h3>
            <p>
              Be a happy camper, spread the love, show your amazing team spirit! This is not about tech, this is about feeling
              the happy blues.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories", //this is the name of the component
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
};
</script>
<style>
</style>