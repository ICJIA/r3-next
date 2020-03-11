<template>
  <div>
    <NofoSplash></NofoSplash>
    <!-- <v-container fluid full-width>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #057DE6" class="text-right">
          <v-container
            class="text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5  pt-12 pr-3">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    About this opportunity
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat, colligit, inplicet arbore valebam
                    declivibus dubia.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9">
          <v-container>
            <v-row>
              <v-col>
                specific nofo info injected here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #035AA6" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Getting Started
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #f1f1f1;">
          <v-container>
            <v-row>
              <v-col>
                getting started boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #023059" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Next steps
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #fff;">
          <v-container>
            <v-row>
              <v-col>
                next steps boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #023766" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Finalizing
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #f1f1f1;">
          <v-container>
            <v-row>
              <v-col>
                finalizing boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container> -->

    <div v-for="(step, index) in steps" :key="index">
      <NofoStep
        :title="step.title"
        :summary="step.summary"
        :html="step.html"
        :color="step.color"
      ></NofoStep>
    </div>
  </div>
</template>

<script>
import { handleClicks } from "@/mixins/handleClicks";

// eslint-disable-next-line no-unused-vars
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
      title: "",
      markdownContent: null,
      contentFetched: false,
      showToc: false,
      steps: null
    };
  },
  async created() {
    this.loading = true;
    // eslint-disable-next-line no-undef
    NProgress.start();
    this.steps = await this.fetchContent();
    console.log(this.steps);
    // eslint-disable-next-line no-undef
    NProgress.done();
    this.loading = false;
  },
  methods: {
    async fetchContent() {
      console.log("fetch content here");
      let fundingContent = await import(
        `../../public/markdown${this.$route.path}.md`
      );
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
        steps.push(obj);
        counter = counter + 1;
      });
      return steps;
    }
  },
  mounted() {}
};
</script>
