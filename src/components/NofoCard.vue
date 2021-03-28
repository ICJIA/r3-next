<template>
  <div>
    <v-card
      class="hoverCard"
      @click="
        $router.push(item.path).catch((err) => {
          $vuetify.goTo(0);
        })
      "
    >
      <v-img
        :src="`/${item.attributes.image}`"
        :lazy-src="`/${item.attributes.imageLazyLoad}`"
        aspect-ratio="1"
        class="grey lighten-2 py-12"
        height="550"
      >
        <v-overlay absolute :color="getBackground()">
          <!-- <div
            class="text-center px-5"
            style="background: rgba(125, 125, 125, 0.7); padding: 25px"
            width="100% !important"
          > -->
          <div class="text-center">
            <h1 class="nofo-title mt-3">
              {{ `${item.attributes.title.toUpperCase()}` }}
            </h1>
            <div class="nofo-tagline">
              {{ item.attributes.summary }}
            </div>

            <v-btn class="mt-6" outlined color="white">EXPIRED</v-btn>
          </div>
        </v-overlay>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    hidePhoto: {
      type: Boolean,
      default: false,
    },
    data: () => ({
      overlay: false,
    }),
  },
  methods: {
    getBackground() {
      let colorArr = this.$myApp.colors[this.item.attributes.accent];
      // last element in color array is darkest
      return colorArr[colorArr.length - 1];
    },
  },
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
