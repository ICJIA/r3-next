<template>
  <div id="main">
    <transition name="fade" mode="out-in">
      <base-content
        id="baseContentTop"
        class="mb-12"
        :loading="false"
        @click.native="closeSearch()"
      >
        <template v-slot:title v-if="!hideTitleOnPage">
          <v-container>
            <v-row class="text-left">
              <v-col cols="12" sm="12" :md="dynamicFlex()">
                <h1
                  :id="slugify(title)"
                  style="
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                    font-size: 24px !important;
                  "
                >
                  {{ title }}
                </h1>
                <div
                  style="font-size: 14px; font-weight: bold; color: #777"
                  class="mt-3"
                  v-if="$route.path.includes('/news/')"
                >
                  {{ posted | dateFormat }}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template v-slot:content>
          <v-container style="margin-top: -20px">
            <v-row>
              <v-col
                cols="12"
                sm="12"
                :md="dynamicFlex()"
                order-md="1"
                order="2"
                order-sm="2"
                class="markdown-body"
              >
                <component
                  :is="markdownContent"
                  @click.native="handleClicks"
                  class="dynamic-content"
                  @hook:mounted="scrollTo"
                />
              </v-col>
              <v-col
                v-if="showToc"
                cols="12"
                sm="12"
                md="3"
                order-md="2"
                order="1"
                order-sm="1"
              >
                <Toc
                  :toc="$route.meta.toc"
                  :tocHeading="$route.meta.tocHeading"
                ></Toc>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </base-content>
    </transition>
  </div>
</template>

<script>
import { handleClicks } from "@/mixins/handleClicks";
import { EventBus } from "@/event-bus";
// eslint-disable-next-line no-unused-vars
const cheerio = require("cheerio");

const slugs = require("slugs");
export default {
  mixins: [handleClicks],
  watch: {
    $route: "fetchContent",
  },

  metaInfo() {
    return {
      title: this.title,
    };
  },

  data() {
    return {
      attributes: {},
      selectedArticle: null,
      title: "",
      posted: "",
      markdownContent: null,
      contentFetched: false,
      about: "",
      html: "",
      showToc: false,
      hideTitleOnPage: false,
    };
  },
  created() {
    this.loading = true;
    // eslint-disable-next-line no-undef
    NProgress.start();
    this.fetchContent();
    // eslint-disable-next-line no-undef
    NProgress.done();
    this.loading = false;
  },
  methods: {
    fixA11y() {
      $("i").replaceTagName("span");
      $("button.v-icon").replaceEmptyElements("This is intentionally blank");
      $('div[role="button"]').removeRedundantAttributes("aria-owns");
      $('th[role="columnheader"]').removeRedundantAttributes("role");
      $("th > span").replaceEmptyElements("This is intentionally blank");
      $("button.v-icon").addAriaLabel(
        "Click this to toggle display of the news article"
      );
    },
    closeSearch() {
      EventBus.$emit("closeSearch");
    },
    stripTrailingSlash(str) {
      return str.endsWith("/") ? str.slice(0, -1) : str;
    },
    fetchContent() {
      let path = this.stripTrailingSlash(this.$route.path);
      this.markdownContent = async () =>
        await import(`../../public/markdown${path}.md`)
          .then((fmd) => {
            this.title = fmd.attributes.title;
            this.showToc = fmd.attributes.showToc;
            this.tocSelectors = fmd.attributes.tocSelectors;
            this.tocHeaders = fmd.attributes.tocHeaders;
            this.markdown = fmd.body;
            this.posted = fmd.attributes.posted;
            this.hideTitleOnPage = fmd.attributes.hideTitleOnPage;
            this.html = fmd.html;
            // console.log(this.html);
            this.contentFetched = true;

            this.$ga.page({
              page: this.$route.path,
              title: this.title,
              location: window.location.href,
            });

            return {
              extends: fmd.vue.component,
            };
          })
          .catch(() => {});
    },
    slugify(str) {
      return slugs(str);
    },
    async scrollTo() {
      await this.$nextTick();
      console.log("markdown mounted");
      // let els = document.getElementsByTagName("i");
      // console.log(els.length);
      var el = document.getElementsByTagName(`i`);
      console.log(el);
      // var hash = location.hash.substr(1);
      // var el = document.getElementById(`${hash}`);

      // if (hash && el) {
      //   //console.log(hash);
      //   this.$vuetify.goTo(`#${hash}`, { offset: 12 }).catch(() => {
      //     this.$vuetify.goTo(0);
      //   });
      // }
    },

    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return "12";
      } else {
        return this.showToc ? "9" : "12";
      }
    },
  },
  mounted() {},
};
</script>

<style>
ol li {
  list-style-type: none;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
