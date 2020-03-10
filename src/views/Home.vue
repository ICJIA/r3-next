<template>
  <div>
    <home-carousel></home-carousel>
    <home-boxes></home-boxes>
    <div style="background: #fff" id="learn-more">
      <v-container class="markdown-body">
        <v-row>
          <v-col>
            <HomePageContent
              @click.native="handleClicks"
              class="dynamic-content py-8"
            ></HomePageContent>
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
const slugs = require("slugs");
import fm from "../../public/markdown/home.md";
// import { EventBus } from "@/event-bus";
export default {
  mixins: [handleClicks, generateToc],
  metaInfo() {
    return {
      title: this.$myApp.config.siteTitle
    };
  },
  mounted() {
    this.$ga.page({
      page: this.$route.path,
      title: this.title,
      location: window.location.href
    });
    this.loading = false;
  },
  components: {
    HomePageContent: {
      extends: fm.vue.component,
      components: {}
    }
  },
  computed: {
    showToc() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return false;
      } else {
        return true;
      }
    }
  },
  data() {
    return {
      title: fm.attributes.title,
      loading: true,
      fm
    };
  },
  methods: {
    closeSearch() {
      EventBus.$emit("closeSearch");
      //console.log("click");
    },
    dynamicFlex() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return "12";
      } else {
        return this.showToc ? "9" : "12";
      }
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
    slugify(str) {
      return slugs(str);
    }
  }
};
</script>
