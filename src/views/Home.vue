<template>
  <div>
    <div id="learn-more" style="background: #fff">
      <v-container class="markdown-body">
        <v-row>
          <v-col>
            <HomePageContent
              class="dynamic-content py-8"
              @click.native="handleClicks"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <NewsList />
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
import _ from "lodash";
import fm from "../../public/markdown/home.md";
// import { EventBus } from "@/event-bus";
export default {
  components: {
    HomePageContent: {
      extends: fm.vue.component,
      components: {}
    }
  },
  mixins: [handleClicks, generateToc],
  metaInfo() {
    return {
      title: this.$myApp.config.siteTitle
    };
  },
  data() {
    return {
      title: fm.attributes.title,
      loading: true,
      fm,
      cards: null
    };
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
  mounted() {
    // this.$ga.page({
    //   page: this.$route.path,
    //   title: this.title,
    //   location: window.location.href
    // });
    let cards = this.$myApp.siteMeta.filter(item => {
      if (item.attributes.showAsCard) {
        return item;
      }
    });

    let sortedCards = _.orderBy(cards, "attributes.menuRank", "asc");
    this.cards = sortedCards;
    this.loading = false;
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
