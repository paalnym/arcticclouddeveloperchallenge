<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="title">Participants</h3>
            <p>The challenge is taken on by teams. The cloud is a collaborative platform and so should the development be. Teams are a minimum of two participants. Solo participants are grouped or assigned to teams prior to the event (we will consult you!).</p>
            <p>The challenge is taking place:</p>
            <p>
              <b>Oslo, February 06th-09th 2020</b>
            </p>
            <p>Keeping up the tradition, the Arctic Cloud Developer Challenge is being held in Oslo at Voksenåsen hotel</p>
            <p>
              <b>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=-bM9M7wUjUOYLzc2t8hWPrLtWcV50kVJjBZxX570Dr5URFFGWkpUN0pSTTZVWDlYRzFVQjc2UkJNNC4u">Register your teams!</a>
              </b>
            </p>
            <h4>Pricing</h4>
            <p>Nok 8.500,- (ex.vat)</p>
            <p>The price includes:</p>
            <p>
              <span>Challenge participants pass</span>
            </p>
            <p>
              <span>Three nights in single bedroom at onsite hotel</span>
            </p>
            <p>
              <span>Breakfast friday, saturday and sunday</span>
            </p>
            <p>
              <span>Lunch, coffee and small treats for the full duration</span>
            </p>
            <p>
              <span>Geekfood thursday, dinner friday and banquet dinner saturday</span>
            </p>
            <p>
              <span>Subsidized cloudpints (beer)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "participants", //this is the name of the component
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style>
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