<template>
  <div class="container-fluid">
    <div class="row lastyear">
      <div class="container">
        <div class="col-md-12">
          <h3>ACDC 2018</h3>
          <div class="row">
            <gallery :images="ACDC2018" :index="index" @close="index = null"></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in ACDC2018"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
            ></div>
          </div>
          <h3>ASPC 2017</h3>
          <div class="row">
            <gallery :images="ACDC2017" :index="index" @close="index = null"></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in ACDC2017"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      ACDC2018: [
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180207_230141859_iOS%20-%20Copy.jpg?alt=media&token=e09ed288-4d99-4ccd-8e8f-7278d6b08eaf",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_070141401_iOS%20-%20Copy.jpg?alt=media&token=d5f46d91-a427-4dcb-9837-bd3cf533ac65",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_070200530_iOS%20-%20Copy.jpg?alt=media&token=4c24b05d-191f-43f4-8249-41bbc9551796",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_073651499_iOS%20-%20Copy.jpg?alt=media&token=23629b2d-11ff-449d-b520-2debc7f08973",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_081339226_iOS%20-%20Copy.jpg?alt=media&token=7a0d9f4c-6588-44be-b7e2-c6ece54f116e",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_181723065_iOS.jpg?alt=media&token=9abd8c18-f08d-48b9-8404-8bc0c9c7a9d8",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_205203030_iOS.jpg?alt=media&token=1b76a410-ebfe-4a89-afd2-f2d7e1985148",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180210_135852273_iOS.jpg?alt=media&token=d14f2ec8-194c-4f88-8938-6217c16eb187",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2018%2F20180208_073532989_iOS%20-%20Copy.jpg?alt=media&token=bd00f7d7-c9f8-4d71-adef-752b38b4b51c",
     ],
      ACDC2017: [
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16387216_847344022073897_8177006631614962715_n.jpg?alt=media&token=55f46542-522b-4233-8029-653f9c4a43dc",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463589_847638175377815_4892570303971034919_o.jpg?alt=media&token=badbc80f-f5c8-45eb-bd4a-1bc1ceb864a7",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463611_847638088711157_6075231193635438987_o.jpg?alt=media&token=8f059e69-c187-4649-ab72-cf622ae566cd",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463651_847638178711148_1987070167067846323_o.jpg?alt=media&token=fd4fda24-e796-43c8-b34c-9c56ae1df725",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16601676_849813855160247_3326610619731910774_o.jpg?alt=media&token=80e1474d-c594-4033-9389-729443c98ca5",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16487437_847638462044453_4634700620952498234_o.jpg?alt=media&token=0c1c8340-51a8-45c0-a7df-7523b40183d5",
        "https://firebasestorage.googleapis.com/v0/b/acdc2019-3eff5.appspot.com/o/ACDC2017%2F16463743_847638482044451_7541406786637892165_o.jpg?alt=media&token=279c243c-74c3-44eb-aa22-ac0e84a94464"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 
 
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style> 