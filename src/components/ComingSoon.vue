<template>
  <div class="full-width">
    <v-card class="">
      <v-img
        src="../../public/splash-11.jpg"
        aspect-ratio="1"
        class="grey lighten-2 py-12"
        height="100vh"
      >
        <v-overlay absolute opacity=".6" :color="getBackground('blue')">
          <v-container
            class="fill-height"
            fluid
            full-width
            style="margin: 0 !important; padding: 0 !important;"
          >
            <v-row justify="center" align="center">
              <div class="text-center px-8" style="min-width: 300px;">
                <h1 class="nofo-title mt-0 mb-8" style="font-size: 40px;">
                  Restore, Reinvest, and Renew (R3)
                </h1>
                <div class="nofo-tagline">
                  R3 grants fund programs in Illinois communities that have been
                  harmed by violence, excessive incarceration, and economic
                  disinvestment.
                </div>
                <div
                  class="mt-12"
                  style="font-size: 36px;  font-weight: bold; color: #ccc"
                >
                  COMING SOON
                </div>
              </div>
            </v-row>
          </v-container>
        </v-overlay>
      </v-img>
    </v-card>

    <!-- <div style="height: 100px">&nbsp;</div> -->
  </div>
</template>

<script>
export default {
  methods: {
    getBackground(color) {
      let colorArr = this.$myApp.colors[color];
      // last element in color array is darkest
      return colorArr[colorArr.length - 1];
    }
  }
};
</script>

<style lang="scss" scoped></style>
