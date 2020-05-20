<template>
  <div class="px-8 mt-10">
    <div v-if="!loading && articles">
      <div v-for="article in articles" :key="article.slug">
        <v-card class="mb-5 hover card" @click="routeTo(article)">
          <v-img class="white--text align-end" height="225px" :src="article.splash">
            <div class="card-banner mb-5">
              <h3
                id="icjia-test"
                class="px-5 py-3 article-title"
                style="border-bottom: 0px;"
              >{{ article.title }}</h3>
            </div>
          </v-img>

          <h3 class="px-5 pt-5">{{ article.title }}</h3>

          <div class="px-4 pt-3">
            By
            <span v-for="(author, index) in article.authors" :key="index">
              <span v-if="index === article.authors.length - 1 && index > 0">&nbsp;and&nbsp;</span>
              <span v-if="index < article.authors.length - 1 && index > 0">,</span>
              <span style="font-weight: bold; color: #065F60">{{ author.title }}</span>
            </span>
          </div>

          <v-card-subtitle class="pb-2">{{ article.date | format }}</v-card-subtitle>

          <v-card-text class="text--primary mb-2">{{ article.abstract }}</v-card-text>
        </v-card>
      </div>
    </div>
    <div v-else>
      <div class="text-center mt-5">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentR3Articles } from "@/services/Content";
export default {
  created() {
    this.fetchContent();
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      articles: null
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async fetchContent(e) {
      //console.log("Start: ", this.start);

      this.articles = await getRecentR3Articles();
    },
    routeTo(article) {
      const url =
        "https://icjia.illinois.gov/researchhub/articles/" + article.slug;
      window.open(url);
    }
  }
};
</script>

<style>
.card-banner {
  background: rgba(79, 80, 79, 0.5);
}
.card:hover {
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
.article-title {
  line-height: 1.3em;
  color: #fff;
}
</style>
