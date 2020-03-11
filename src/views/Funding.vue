<template>
  <div>
    <div v-if="!loading">
      {{ html }}
    </div>
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
      html: "",
      showToc: false
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
    closeSearch() {
      EventBus.$emit("closeSearch");
    },
    async fetchContent() {
      let fundingContent = await import(
        `../../public/markdown${this.$route.path}.md`
      );
      let html = fundingContent.html;
      const $ = cheerio.load(html);
      let about = $("div#about").html();
      console.log(about);
    },
    slugify(str) {
      return slugs(str);
    },
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

    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return "12";
      } else {
        return this.showToc ? "9" : "12";
      }
    }
  },
  mounted() {}
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
