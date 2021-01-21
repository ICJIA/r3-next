<template>
  <v-img
    :src="require('@/assets/img/splash-03.jpg')"
    :lazy-src="require('@/assets/img/splash-02-tiny.jpg')"
    aspect-ratio="1"
    class="grey lighten-2"
    max-height="600"
    ><v-container
      class="fill-height text-center"
      fluid
      style="margin: 0 !important; padding: 0 !important; margin-left: 12px"
    >
      <v-row align="center">
        <div class="banner">
          <v-col cols="12">
            <h1 class="default-font carousel-large heavy carousel-main-text">
              Restore, Reinvest, and Renew
            </h1>
            <div
              class="default-font carousel-medium mt-10 px-12 carousel-sub-text hidden-sm-and-down"
            >
              Funding community organizations in Illinois that support economic
              development, provide violence prevention and reentry services, and
              offer youth development and civil legal aid.
            </div>
            <v-btn class="mt-6" color="white" @click="$router.push('apply')"
              >Apply Now</v-btn
            >&nbsp;&nbsp;
            <v-btn
              class="mt-6"
              outlined
              color="white"
              @click="$vuetify.goTo('#learn-more', { offset: -20 })"
              >Learn More</v-btn
            >
          </v-col>
        </div>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      colors: ["grey darken-1", "grey darken-1", "grey darken-1"],
      slides: ["First", "Second", "Third"],
    };
  },
  mounted() {
    // a11y fix for nav buttons

    document.addEventListener("DOMContentLoaded", () => {
      let arr = [
        ...document.getElementsByClassName("v-carousel__controls__item"),
      ];
      arr.forEach((item) => {
        item.setAttribute("aria-label", "navigation button");
      });
    });
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  background: rgba(79, 80, 79, 0.7);
  padding: 30px;
  margin-top: 100px;
}

.carousel-large {
  font-size: 55px;
  color: #fff;
}

.carousel-medium {
  font-size: 22px;
  color: #fff;
}

.home .v-carousel__controls {
  bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .banner {
    height: 100% !important;
    margin-top: 2px;
    background: rgba(79, 80, 79, 0.7);
  }
}
</style>
