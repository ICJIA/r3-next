<template>
  <div class="flexbox-container hide-sm-and-down" id="apply-now">
    <div
      class="box box-1"
      @click="
        $router.push('/funding/test-nofo-1').catch(err => {
          $vuetify.goTo(0);
        })
      "
    >
      <div class="text-center home-font">
        <i class="far fa-compass"></i>
      </div>
      <h2 class="heavy text-center mt-3" style="color: #fff;">
        NOFO TITLE 1
      </h2>

      <p class="pt-4">
        NOFO summary here In vituli ecce fessos prolem equorum auxiliaria o
        corpora Cereris nuper. Ubi huic fallacia erat armigerumque vicem qui dum
        viderat dixit inplevi saltibus Sardibus surgere. Perque fallitque saepe
        Calydonius reddere interrita sitim caeli flumina, incunabula Dixit
        pectore artus.
      </p>
      <div class="text-center">
        <v-btn class="mt-6" outlined color="white">Apply Now</v-btn>
      </div>
    </div>

    <div
      class="box box-2"
      @click="
        $router.push('/funding/test-nofo-2').catch(err => {
          $vuetify.goTo(0);
        })
      "
    >
      <div class="text-center home-font">
        <i class="far fa-hands-heart"></i>
      </div>
      <h2 class="heavy text-center mt-3" style="color: #fff;">
        NOFO TITLE 2
      </h2>
      <p class="pt-4">
        NOFO summary here In vituli ecce fessos prolem equorum auxiliaria o
        corpora Cereris nuper. Ubi huic fallacia erat armigerumque vicem qui dum
        viderat dixit inplevi saltibus Sardibus surgere. Perque fallitque saepe
        Calydonius reddere interrita sitim caeli flumina, incunabula Dixit
        pectore artus.
      </p>
      <div class="text-center">
        <v-btn class="mt-6" outlined color="white">Apply Now</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("home-boxes");
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
}
.flexbox-container {
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  min-height: 250px;
}

/* .flexbox-container h2 {
  padding-top: 10px;
} */

.flexbox-container > div {
  width: 50%;
  padding: 60px 30px;
  color: #fff;
  font-size: 18px;
}

.flexbox-container > div:last-child {
  border-right: 0px;
}

.box-1 {
  background: #023059;
}

.box-2 {
  background: #03588c;
}

.box:hover {
  box-shadow: 0px 0px 15px #000000;
  z-index: 2;
  -webkit-transition: all 100ms ease-in;
  -webkit-transform: scale(1.01);
  -ms-transition: all 100ms ease-in;
  -ms-transform: scale(1.01);
  -moz-transition: all 100ms ease-in;
  -moz-transform: scale(1.01);
  transition: all 100ms ease-in;
  transform: scale(1.01);
  cursor: pointer;
}

.home-font {
  font-size: 66px;
}

@media only screen and (max-width: 800px) {
  .flexbox-container {
    flex-direction: column;
  }

  .flexbox-container > div {
    width: 100%;
  }
}
</style>
