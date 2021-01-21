<template>
  <v-img
    :src="`/${image}`"
    :lazy-src="`/${imageLazyLoad}`"
    aspect-ratio="1"
    class="grey lighten-2"
    max-height="400"
  >
    <v-overlay absolute opacity=".6" :color="getBackground()"
      ><v-container
        class="fill-height text-center"
        fluid
        full-width
        style="margin: 0 !important; padding: 0 !important; margin-left: 12px"
      >
        <v-row align="center">
          <div class="text-center px-5" style="min-width: 350px">
            <!-- <v-avatar class="ma-3" size="105" tile>
              <v-icon>{{ icon }} </v-icon>
            </v-avatar> -->

            <h1 class="nofo-title mt-3">
              {{ `${title.toUpperCase()}` }}
            </h1>
            <div class="nofo-tagline">
              {{ summary }}
            </div>
            <!-- <div
              class="mt-4"
              style="font-size: 13px;  font-weight: bold;"
              v-if="!comingSoon"
            >
              Deadline: {{ expires | format }}
            </div>
            <div
              class="mt-6"
              style="font-size: 24px;  font-weight: bold;"
              v-if="comingSoon"
            >
              COMING SOON
            </div> -->
          </div>
        </v-row>
      </v-container>
    </v-overlay>
  </v-img>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getBackground() {
      return this.colors[this.colors.length - 1];
    },
  },
  mounted() {},
  props: {
    title: {
      type: String,
      default: "NOFO TITLE HERE",
    },
    summary: {
      type: String,
      default: "Nofo summary here",
    },
    icon: {
      type: String,
      default: "",
    },
    colors: {
      type: Array,
      default: () => [],
    },
    image: {
      type: String,
      default: "splash-03.jpg",
    },
    imageLazyLoad: {
      type: String,
      default: "splash-03-tiny.jpg",
    },
    expires: {
      type: String,
      default: "",
    },
    comingSoon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.nofo-title {
  font-size: 36px;
}
</style>
