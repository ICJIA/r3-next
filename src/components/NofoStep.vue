<template>
  <v-container fluid full-width>
    <v-row no-gutters style="min-height: 300px;" v-if="status === 'live'">
      <v-col
        cols="12"
        md="3"
        class="text-right"
        :style="`background: ${getBackground()};`"
      >
        <v-container fluid full-width>
          <v-col cols="12" style="margin-top: 12px; padding: 0;">
            <div
              class="px-5 pb-2"
              :style="`background: ${color}`"
              style="margin-top: -12px; border-right: 1px solid #aaa !important;"
            >
              <h2 style="color: #fff; font-size: 1.8em; margin-bottom: 15px;">
                {{ title }}
              </h2>
            </div>
          </v-col>
        </v-container>
      </v-col>
      <v-col md="9" :style="`background: ${background}`">
        <v-container>
          <v-row>
            <v-col>
              <div v-html="html" class="pl-1 pt-4 pb-8"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row v-else style="background: #B71C1C" class="px-5 mb-2 mt-2">
      <v-col class="text-center">
        <div
          v-html="html"
          class="pl-1 pt-4 pb-4"
          style="font-weight: 900; font-size: 22px; color: #fff"
        ></div
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    getBackground() {
      return "#fcfcfc";
    }
  },
  props: {
    title: {
      type: String,
      default: "untitled"
    },
    summary: {
      type: String,
      default: "undefined"
    },
    html: {
      type: String,
      default: "<h1>undefined</h1>"
    },
    color: {
      type: String,
      default: "#ccc"
    },
    background: {
      type: String,
      default: "#fff"
    },
    status: {
      type: String,
      default: "live"
    }
  }
};
</script>

<style lang="scss" scoped></style>
