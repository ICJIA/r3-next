<template>
  <div>
    <v-card
      v-if="!hidePhoto"
      class="hoverCard"
      @click="
        $router.push(item.path).catch(err => {
          $vuetify.goTo(0);
        })
      "
    >
      <v-img
        src="/splash-03.jpg"
        lazy-src="/splash-02-tiny.jpg"
        aspect-ratio="1"
        class="grey lighten-2 py-12"
        max-height="500"
      >
        <v-overlay absolute opacity=".5" :color="getBackground()"
          ><v-container
            class="fill-height text-center"
            fluid
            full-width
            style="margin: 0 !important; padding: 0 !important;"
          >
            <v-row align="center">
              <div class="text-center px-5" style="min-width: 300px;">
                <v-avatar class="ma-3" size="105" tile>
                  <v-icon>{{ item.attributes.icon }}</v-icon>
                </v-avatar>
                <h1 class="nofo-title mt-3">
                  {{ `${item.attributes.title.toUpperCase()}` }}
                </h1>
                <div class="nofo-tagline">
                  {{ item.attributes.summary }}
                </div>
                <v-btn class="mt-6" outlined color="white">Apply Now</v-btn>
              </div>
            </v-row>
          </v-container>
        </v-overlay>
      </v-img>
    </v-card>
    <v-card
      v-else
      :color="getBackground()"
      class="hoverCard pt-8 pb-12"
      @click="
        $router.push(item.path).catch(err => {
          $vuetify.goTo(0);
        })
      "
    >
      <v-container
        class="fill-height text-center"
        fluid
        full-width
        style="margin: 0 !important; padding: 0 !important; height:500px"
      >
        <v-row align="center">
          <div class="text-center px-5" style="min-width: 300px;">
            <v-avatar class="ma-3" size="105" tile>
              <v-icon style="color: #fff !important;">{{
                item.attributes.icon
              }}</v-icon>
            </v-avatar>
            <h1 class="nofo-title mt-3" style="color: #fff !important;">
              {{ `${item.attributes.title.toUpperCase()}` }}
            </h1>
            <div class="nofo-tagline" style="color: #fff !important;">
              {{ item.attributes.summary }}
            </div>
            <v-btn class="mt-6" outlined color="white">Apply Now</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    hidePhoto: {
      type: Boolean,
      default: false
    },
    data: () => ({
      overlay: false
    })
  },
  methods: {
    getBackground() {
      let colorArr = this.$myApp.colors[this.item.attributes.accent];
      // last element in color array is darkest
      return colorArr[colorArr.length - 1];
    }
  }
};
</script>

<style>
.hoverCard {
  border-radius: 0px !important;
}
.hoverCard:hover {
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
</style>
