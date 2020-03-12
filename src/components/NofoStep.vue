<template>
  <v-container fluid full-width>
    <v-row no-gutters style="min-height: 300px;">
      <v-col
        cols="12"
        md="3"
        :style="`background: ${color}`"
        class="text-right"
      >
        <v-container
          class="text-right"
          fluid
          style="margin: 0 !important; padding: 0 !important; "
        >
          <v-row align="center">
            <v-col cols="12">
              <div class="pl-5  pt-5 pr-5">
                <h2
                  style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                >
                  {{ title }}
                </h2>
                <div style="color: #fff">
                  {{ summary }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col md="9" :style="`background: ${background}`">
        <v-container>
          <v-row>
            <v-col>
              <div v-html="html" class="px-10"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
