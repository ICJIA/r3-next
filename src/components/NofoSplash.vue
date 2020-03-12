<template>
  <v-img
    src="/splash-03.jpg"
    lazy-src="/splash-02-tiny.jpg"
    aspect-ratio="1"
    class="grey lighten-2"
    max-height="400"
  >
    <v-overlay absolute opacity=".8" color="blue  darken-4"
      ><v-container
        class="fill-height text-center"
        fluid
        full-width
        style="margin: 0 !important; padding: 0 !important; margin-left: 12px;"
      >
        <v-row align="center">
          <div class="text-center px-5" style="min-width: 300px;">
            <v-icon x-large>{{ icon }}</v-icon>
            <h1 class="nofo-title mt-6">
              {{ `${title.toUpperCase()}` }}
            </h1>
            <div class="nofo-tagline">
              {{ summary }}
            </div>
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
  mounted() {},
  props: {
    title: {
      type: String,
      default: "NOFO TITLE HERE"
    },
    summary: {
      type: String,
      default: "Nofo summary here"
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.nofo-title {
  font-size: 36px;
}
</style>
