<template>
  <div>
    <div v-for="(item, index) in frontPageNews" :key="index">
      <v-card
        class="py-3 px-5 hover news-card mb-5"
        elevation="1"
        style="background: #fff"
        @click="routeTo(item)"
      >
        <div style="font-size: 12px; font-weight: bold; color: #222">
          {{ item.attributes.posted | dateFormat }}
        </div>
        <h2
          style="
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            font-size: 18px;
            line-height: 26px;
            color: #000;
          "
          class="mb-3"
        >
          <span v-if="isItNew(item)">
            <v-chip dark class="mr-1" x-small color="#2296F3">
              NEW!
            </v-chip></span
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
import moment from "moment";
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
    isItNew(item) {
      let now = moment(new Date()); //todays date
      let end = moment(item.attributes.posted); // another date
      let duration = moment.duration(now.diff(end));
      let days = duration.asDays();
      if (days <= 14) {
        return true;
      } else {
        return false;
      }
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
