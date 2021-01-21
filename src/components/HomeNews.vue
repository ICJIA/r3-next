<template>
  <div>
    <div v-for="(item, index) in frontPageNews" :key="index">
      <v-card
        class="py-3 px-5 hover news-card mb-5"
        elevation="1"
        style="background: #f4f4f4"
        @click="routeTo(item)"
      >
        <div style="font-size: 12px; font-weight: bold; color: #888">
          {{ item.attributes.posted | dateFormat }}
        </div>
        <h2
          style="border-bottom: 1px solid #ccc; padding-bottom: 5px"
          class="mb-3"
        >
          {{ item.attributes.title }}
        </h2>

        <p style="font-size: 14px">{{ item.attributes.summary }}</p>
        <div class="text-right" style="font-size: 12px; font-weight: 900">
          Read more &raquo;
        </div>
      </v-card>
    </div>
    <div class="text-center mt-8">
      <router-link to="/news">News archive&nbsp;&raquo;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontPageNews: null,
    };
  },
  created() {
    this.frontPageNews = this.$myApp.news.slice(
      0,
      this.$myApp.config.frontPageNewsItems
    );

    //console.log(this.frontPageNews);
  },
  methods: {
    routeTo(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style>
.news-card:hover {
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
