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
          <div class="text-center" style="min-width: 350px;">
            <h1 class="nofo-title">
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
    }
  }
};
</script>

<style>
.nofo-title {
  font-size: 36px;
}
</style>
