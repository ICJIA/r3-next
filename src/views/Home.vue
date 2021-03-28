<template>
  <div>
    <!--<home-carousel></home-carousel>-->

    <home-boxes></home-boxes>
    <!-- <video-embed></video-embed> -->
    <div style="background: #fff" id="learn-more">
      <v-container class="markdown-body" id="main">
        <v-row>
          <v-col>
            <HomePageContent
              @click.native="handleClicks"
              @hook:mounted="fixa11y()"
              class="dynamic-content py-8"
            ></HomePageContent>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="background: #fafafa; border-top: 1px solid #eee" class="pb-12">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="12" md="7">
            <h2
              style="
                font-size: 24px;
                font-weight: 900 !important;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 10px;
              "
            >
              Applicant Tools
            </h2>
            <v-container style="margin: 0; padding: 0" class="mt-5">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="6"
                  v-for="(card, index) in cards"
                  :key="index"
                >
                  <v-card
                    dark
                    color="#04456b"
                    class="hover tool-card"
                    @click="$router.push(card.path)"
                    height="220px"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class
                          :class="{
                            mobileTitle:
                              $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
                          }"
                          >{{ card.attributes.title }}</v-card-title
                        >

                        <v-card-subtitle style="font-size: 14px; color: #eee">
                          {{ card.attributes.summary }}
                        </v-card-subtitle>
                      </div>

                      <!-- <v-avatar class="ma-3" size="125" tile>
                        <v-icon class="outlined" x-large>
                          {{ card.attributes.cardIcon }}
                        </v-icon>
                      </v-avatar> -->
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="12" sm="12" md="5">
            <h2
              style="
                font-size: 24px;
                font-weight: 900 !important;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 10px;
              "
            >
              News & Updates
            </h2>
            <v-container style="margin: 0; padding: 0" class="mt-8">
              <HomeNews></HomeNews>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { handleClicks } from "@/mixins/handleClicks";
import { generateToc } from "@/mixins/generateToc";
import { EventBus } from "@/event-bus";
// eslint-disable-next-line no-unused-vars
import { fixNuxtContentHeadings, fixEmptyText } from "@/a11y";
const slugs = require("slugs");
import _ from "lodash";
import fm from "../../public/markdown/home.md";
// import { EventBus } from "@/event-bus";
export default {
  mixins: [handleClicks, generateToc],
  metaInfo() {
    return {
      title: this.$myApp.config.siteTitle,
    };
  },
  mounted() {
    this.$ga.page({
      page: this.$route.path,
      title: this.title,
      location: window.location.href,
    });
    let cards = this.$myApp.siteMeta.filter((item) => {
      if (item.attributes.showAsCard) {
        return item;
      }
    });

    let sortedCards = _.orderBy(cards, "attributes.menuRank", "asc");
    this.cards = sortedCards;

    this.loading = false;
  },
  components: {
    HomePageContent: {
      extends: fm.vue.component,
      components: {},
    },
  },
  computed: {
    showToc() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      title: fm.attributes.title,
      loading: true,
      fm,
      cards: null,
    };
  },
  methods: {
    fixa11y() {
      console.log("fix a11y here");
    },
    closeSearch() {
      EventBus.$emit("closeSearch");
    },
    gotoSurvey(url) {
      window.open(url, "_blank", "noopener");
    },
    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return "12";
      } else {
        return this.showToc ? "9" : "12";
      }
    },
    scrollTo() {
      // var hash = location.hash.substr(1);
      // var el = document.getElementById(`${hash}`);
      // if (hash && el) {
      //   //console.log(hash);
      //   this.$vuetify.goTo(`#${hash}`, { offset: 12 }).catch(() => {
      //     this.$vuetify.goTo(0);
      //   });
      // }
    },
    slugify(str) {
      return slugs(str);
    },
  },
};
</script>

<style>
.v-icon.outlined {
  border: 2px solid currentColor;
  border-radius: 50%;
  height: 85px;
  width: 85px;
}

.tool-card:hover {
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

/* .tool-card:hover * .v-icon.outlined {
  color: #bbb !important;
  border: 0px solid currentColor;
} */
</style>
