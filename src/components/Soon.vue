<template>
  <div class="full-width">
    <v-card class=" my-10">
      <v-img
        :src="`/${splash}`"
        :lazy-src="`/${imageLazyLoad}`"
        aspect-ratio="1"
        class="grey lighten-2 py-12"
        height="600px"
      >
        <v-overlay
          absolute
          opacity=".6"
          :color="getBackground(`${background}`)"
        >
          <v-container
            class="fill-height"
            fluid
            full-width
            style="margin: 0 !important; padding: 0 !important;"
          >
            <v-row justify="center" align="center">
              <div class="text-center px-8" style="min-width: 300px;">
                <h1 class="nofo-title mt-0 mb-8" style="font-size: 40~px;">
                  {{ title }}
                </h1>
                <div class="nofo-tagline">
                  {{ summary }}
                </div>
                <div
                  class="mt-12"
                  style="font-size: 36px;  font-weight: bold; color: #eee; display: block"
                >
                  DETAILS COMING SOON
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
  },
  props: {
    splash: {
      type: String,
      default: "splash-12.jpg"
    },
    title: {
      type: String,
      default: "untitled"
    },
    summary: {
      type: String,
      default: "untitled"
    },
    imageLazyLoad: {
      type: String,
      default: "splash-12-mini.jpg"
    },
    background: {
      type: String,
      default: "blue"
    }
  }
};
</script>

<style lang="scss" scoped></style>
