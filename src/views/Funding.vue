<template>
  <div>
    <NofoSplash
      :title="nofoObj.title"
      :summary="nofoObj.summary"
      :icon="nofoObj.icon"
      :colors="nofoObj.colors"
      :image="nofoObj.image"
      :imageLazyLoad="nofoObj.imageLazyLoad"
    ></NofoSplash>

    <div v-for="(step, index) in nofoObj.steps" :key="index">
      <NofoStep
        :title="step.title"
        :summary="step.summary"
        :html="step.html"
        :color="step.color"
        :background="step.background"
      ></NofoStep>
    </div>
  </div>
</template>

<script>
import { handleClicks } from "@/mixins/handleClicks";
const cheerio = require("cheerio");

export default {
  mixins: [handleClicks],
  watch: {
    $route: "fetchContent"
  },

  metaInfo() {
    return {
      title: this.title
    };
  },

  data() {
    return {
      attributes: {},
      selectedArticle: null,
      steps: [],
      markdownContent: null,
      contentFetched: false,
      showToc: false,
      nofoObj: {},
      title: "untitled",
      summary: ""
    };
  },
  async created() {
    this.loading = true;
    // eslint-disable-next-line no-undef
    NProgress.start();
    this.nofoObj = await this.fetchContent();
    //console.log(this.steps);
    // eslint-disable-next-line no-undef
    NProgress.done();
    this.loading = false;
  },
  methods: {
    scrollTo() {
      var hash = location.hash.substr(1);
      var el = document.getElementById(`${hash}`);

      if (hash && el) {
        //console.log(hash);
        this.$vuetify.goTo(`#${hash}`, { offset: 12 }).catch(() => {
          this.$vuetify.goTo(0);
        });
      }
    },
    async fetchContent() {
      //console.log("fetch content here");
      let fundingContent = await import(
        `../../public/markdown${this.$route.path}.md`
      );

      let html = fundingContent.html;

      const $ = cheerio.load(html);
      let steps = [];
      let counter = -1;
      let colors = this.$myApp.colors[fundingContent.attributes.accent];
      $("[data-title]").each(function() {
        let obj = {};
        counter >= colors.length - 1 ? (counter = 0) : counter++;
        obj.title = $(this).attr("data-title");
        obj.summary = $(this).attr("data-summary");
        obj.html = $(this).html();
        obj.color = colors[counter];
        if (counter % 2 == 0) {
          obj.background = "#F5F5F5";
        } else {
          obj.background = "#fff";
        }
        steps.push(obj);
      });
      this.title = fundingContent.attributes.title;
      let nofoObj = {
        title: fundingContent.attributes.title,
        summary: fundingContent.attributes.summary,
        steps: steps,
        icon: fundingContent.attributes.icon,
        image: fundingContent.attributes.image,
        imageLazyLoad: fundingContent.attributes.imageLazyLoad,
        colors
      };
      return nofoObj;
    }
  },
  mounted() {
    this.scrollTo();
  }
};
</script>
