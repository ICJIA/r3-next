<template>
  <v-img
    :src="`/${image}`"
    :lazy-src="`/${imageLazyLoad}`"
    aspect-ratio="1"
    class="grey lighten-2"
    max-height="400"
  >
    <v-overlay absolute opacity=".6" :color="getBackground()">
      <div
        class="text-center px-5"
        style="background: rgba(125, 125, 125, 0.7); padding: 25px"
        width="100% !important"
      >
        <div class="text-center px-5" style="min-width: 350px">
          <h1 class="nofo-title mt-3">
            {{ `${title.toUpperCase()}` }}
          </h1>
          <div class="nofo-tagline">
            {{ summary }}
          </div>
        </div>
      </div>
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
