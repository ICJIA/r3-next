<template>
  <div>
    <NofoSplash :title="nofoObj.title" :summary="nofoObj.summary"></NofoSplash>

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
      //console.log(fundingContent.attributes.title);
      this.title = fundingContent.attributes.title;
      this.summary = fundingContent.attributes.summary;
      let html = fundingContent.html;
      const $ = cheerio.load(html);
      let steps = [];
      let counter = 0;
      let stepColors = ["#057DE6", "#035AA6", "#023059", "#023766"];
      $("[data-title]").each(function() {
        let obj = {};
        obj.title = $(this).attr("data-title");
        obj.summary = $(this).attr("data-summary");
        obj.html = $(this).html();
        obj.color = stepColors[counter];
        if (counter % 2 == 0) {
          obj.background = "#fff";
        } else {
          obj.background = "#eee";
        }
        steps.push(obj);
        if (counter > stepColors.length) {
          counter = 0;
        } else {
          counter++;
        }
      });
      let nofoObj = {
        title: fundingContent.attributes.title,
        summary: fundingContent.attributes.summary,
        steps: steps
      };
      return nofoObj;
    }
  },
  mounted() {
    this.scrollTo();
  }
};
</script>
