<template>
  <v-container fluid full-width style="border-top: 1px solid #ccc">
    <v-row no-gutters style="min-height: 300px;">
      <v-col
        cols="12"
        md="3"
        class="text-right"
        :style="`background: ${getBackground()};`"
      >
        <v-container
          class="text-right"
          fluid
          style="margin: 0 !important; padding: 0 !important; "
        >
          <v-row align="center">
            <v-col cols="12" style="">
              <div
                class="pl-5 pt-2 pr-8 pb-3"
                :style="`background: ${color}`"
                style="margin-top: -12px; border-right: 1px solid #aaa !important;"
              >
                <h2 style="color: #fff; font-size: 1.8em; margin-bottom: 15px;">
                  {{ title }}
                </h2>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="9" style="`background: #fff`">
        <v-container>
          <v-row>
            <v-col>
              <div v-html="html" class="pl-5 pt-0 pb-7"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    getBackground() {
      return "#fafafa";
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
