<template>
    <div class="container-fluid about">
      <div class="container">
        <div class="row">
          <div class="column overview">
            <h3 class="lightbrowntitle title">Previous Events</h3>
            <p>ACDC have had very nice moments and stories, we are very happy to share them with you...</p>
            <h4>Comments from previous judges:</h4>
            <div class="center">
              <Tweet id="1102039120543731712" :options="{ theme: 'dark' }"/>              
              <Tweet id="828378154741923841" :options="{ theme: 'dark' }"/>
              <Tweet id="1101061008125239301" :options="{ theme: 'dark' }"/>
              <Tweet id="962750232995024897" :options="{ theme: 'dark' }"/>              
              <Tweet id="819226186123505664" :options="{ theme: 'dark' }"/>    
              <Tweet id="963135881409425415" :options="{ theme: 'dark' }"/>
              <Tweet id="1102146784934141952" :options="{ cards: 'hidden', theme: 'dark' }"/>                        
            </div>             
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: "previous", //this is the name of the component
  components: {
     Tweet: Tweet
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  },
  data: function() {
    return {
      ACDC2018: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180207_193657178_iOS.jpg?alt=media&token=ebe70f3c-0159-49c6-a8b8-8cd4a6514e39',
          caption: 'Dinner with the judges',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180207_230141859_iOS%20-%20Copy.jpg?alt=media&token=911cf387-35b2-49cb-8462-cfedeb41a634',
          caption: 'Vesa and Chris',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_070141401_iOS.jpg?alt=media&token=b48aaaf3-d8ff-4c7d-b864-fcae458503fc',
          caption: 'Pre challenge',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_070200530_iOS.jpg?alt=media&token=6991ca60-ec6b-4375-ac80-f12c5d2118fd',
          caption: 'Awsome id cards !',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_070504379_iOS.jpg?alt=media&token=dfd254ef-44a0-4fcb-a904-d037fb6b7b52',
          caption: 'A little drone action',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_071239571_iOS.jpg?alt=media&token=ed61c160-9918-4296-a0eb-c713c073f27f',
          caption: 'Awsome breakfast',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_072746327_iOS.jpg?alt=media&token=620f27ee-66a1-4de2-b5ea-ee1f821f0acd',
          caption: 'Awsome view',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_073532989_iOS.jpg?alt=media&token=88008553-9bef-4097-ba61-8f499dde8b98',
          caption: 'Participants in action',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_081339226_iOS.jpg?alt=media&token=97001872-840e-4377-87de-9e43b4655f2d',
          caption: 'Keynote',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_123757370_iOS.jpg?alt=media&token=06da24b8-48a5-44ab-9d3b-1b1179404081',
          caption: 'Participants in action',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_123812493_iOS.jpg?alt=media&token=5b9274fc-196b-4b80-a54f-5b76c5080709',
          caption: 'Participants in action',
        }, 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_204840737_iOS.jpg?alt=media&token=3a4cc81f-2689-43c6-a851-6528380be22f',
          caption: 'Hackaton room',
        },   
     ],
      ACDC2017: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16387216_847344022073897_8177006631614962715_n.jpg?alt=media&token=b06aa4e1-fad7-4302-b890-6c7c49674ea8',
          caption: 'Image 1',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463589_847638175377815_4892570303971034919_o.jpg?alt=media&token=fd0d1fa9-6367-4a1c-a5ed-131a9288cda9',
          caption: 'Image 1',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463611_847638088711157_6075231193635438987_o.jpg?alt=media&token=513077f0-6391-45be-b2c2-09258fcb03cd',
          caption: 'Image 1',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463651_847638178711148_1987070167067846323_o.jpg?alt=media&token=d6ee5bfa-c1cb-4bbd-b2c2-e51f7581ab2b',
          caption: 'Image 1',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16487437_847638462044453_4634700620952498234_o.jpg?alt=media&token=50ff510f-d3ae-4c84-a7f9-ad2bf83503ce',
          caption: 'Image 1',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2FAttF2D3.tmp.jpg?alt=media&token=6b72ed62-a903-48d1-be02-42993bf9a237',
          caption: 'Image 1',
        },  
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2FAtt480B.tmp.jpg?alt=media&token=b8480b28-0ca7-4ecf-8b22-3068dbb2c2b1',
          caption: 'Image 1',
        },    
     ],
    };
  }
};
</script>
<style>
.vue-lightbox {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    max-width: 100%;
    text-align: center;
}

.vue-lightbox{
  width:100%
}

.twitter-tweet {
  margin-right: 20px;
}
.center{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("../assets/images/isai-ramos-46821-unsplash_comp.jpg") no-repeat
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