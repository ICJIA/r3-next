<template>
  <div :class="{ navContainer: resultAsNav }">
    <label>
      <v-text-field label="hidden" style="display:none"></v-text-field>
    </label>
    <v-text-field
      ref="textfield"
      v-model="query"
      class="searchField"
      placeholder="Search"
      @keyup="instantSearch"
      solo-inverted
      flat
      clear-icon
      clearable
      hide-details
      label="Search"
      prepend-inner-icon="search"
      aria-label="Search"
    />

    <v-card
      v-if="query && query.length"
      :min-width="getWidth()"
      style="margin-top: -12px; "
      class="mt-1"
      :class="{
        navCard: resultAsNav,
        navCardOffsetSm: resultAsNav,
        'elevation-8': resultAsNav,
        'elevation-1': !resultAsNav,
        'grey lighten-3': resultAsNav,
        'grey lighten-5': !resultAsNav
      }"
    >
      <!--- pages --->
      <div
        style="background: #0D4474; font-size: 18px; font-weight: bold; color: #fff"
        class="px-2 py-2"
      >
        Pages
      </div>
      <div v-if="!resultPages.length" class="pl-3 py-3 resultSummary">
        No matching pages found.
      </div>
      <div
        v-for="(item, index) in resultPages"
        :key="index"
        class="hover result"
      >
        <div
          class="elevation-0 results pb-1"
          :class="{ resultDivider: resultAsNav }"
          style=""
        >
          <div
            class="resultTitle px-2 py-1"
            :class="{ navFont: resultAsNav }"
            @click="
              $router.push(item.item.path).catch(err => {
                $vuetify.goTo(0);
              })
            "
          >
            {{ item.item.title }}
          </div>
          <div v-if="item.matches && item.matches.length > 0" class="pl-3">
            <div
              v-for="(context, index) in displayMatches(item)"
              :key="index + 'context'"
            >
              <div
                v-html="context.highlighted"
                class="resultSummary pb-1 px-3"
                v-if="context.key !== 'title'"
                :class="{
                  headingIndent: context.key === 'headings.heading',
                  navFont: resultAsNav
                }"
                @click="goToRoute(context)"
              ></div>
            </div>
          </div>
          <div
            v-else
            class="pl-3 pb-1 resultSummary"
            :class="{ navFont: resultAsNav }"
            @click="goToRoute(context)"
          >
            {{ item.item.summary | truncate(20) }}
          </div>
          <div v-if="index === resultPages.length - 1">
            <div class="pb-3">&nbsp;</div>
          </div>
        </div>
      </div>
      <!--- files --->
      <!-- <div v-if="resultFiles.length > 0">
        <div
          style="background: #0D4474; font-size: 18px; font-weight: bold; color: #fff"
          class="px-2 py-2"
        >
          Files
        </div>
        <div
          v-for="(item, index) in resultFiles"
          :key="index + 'files'"
          class="hover"
          @click="followPath(item)"
        >
          <div class="elevation-0 results">
            <div class="resultTitle px-2 py-1">
              {{ item.item.name }}
            </div>
          </div>
        </div>
      </div> -->
    </v-card>
  </div>
</template>

<script>
import Fuse from "fuse.js";
// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import { EventBus } from "@/event-bus";
export default {
  async created() {
    this.searchIndex = this.$myApp.searchIndex;
    this.fuse = new Fuse(this.searchIndex, this.$myApp.config.searchConfig);
  },
  watch: {},
  mounted() {
    EventBus.$on("closeSearch", () => {
      this.queryResults = null;
      this.query = "";
      //console.log("close Search");
    });
    if (this.focus) {
      this.$nextTick(() => {
        this.$refs.textfield.focus();
      });
    }
  },
  data() {
    return {
      query: "",
      queryResults: null,
      content: "",
      searchIndex: [],
      hideCard: true,
      resultPages: [],
      resultFiles: []
    };
  },
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    resultAsNav: {
      type: Boolean,
      default: true
    },
    resultLimit: {
      type: Number,
      default: 3
    }
  },
  methods: {
    displayMatches(item) {
      //console.log(item);
      let target,
        path = item.item.path;
      if (this.query.length === 0) return;
      let matchedText = item.matches.map(i => {
        let highlighted = i.value.replace(
          new RegExp(this.query, "gi"),
          match => `<span class="highlight">${match}</span>`
        );

        if (i.key === "headings.heading") {
          item.item.headings.forEach(x => {
            if (x.heading === i.value) {
              target = x.target;
            }
          });
        }

        let obj = {
          original: i.value,
          highlighted,
          key: i.key,
          target,
          path
        };
        return obj;
      });

      return matchedText;
    },
    instantSearch() {
      let queryResults = this.fuse
        .search(this.query)
        .slice(0, this.resultLimit);

      this.resultPages = queryResults.filter(item => {
        if (item.item.type === "page") {
          delete item.item.name;
          return item;
        }
      });

      this.resultFiles = queryResults.filter(item => {
        if (item.item.type === "file") {
          return item;
        }
      });

      //this.queryResults = queryResults;

      //console.log(this.queryResults);
    },
    getWidth() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return 300;
      } else {
        return 500;
      }
    },
    goToRoute(context) {
      let target = context.target ? `#${context.target}` : "";
      let url = `${context.path}${target}`;
      EventBus.$emit("closeSearch");
      this.$router.push(url).catch(() => {
        this.$vuetify.goTo(0);
      });
    },
    followPath(result) {
      if (result.item.type === "file") {
        EventBus.$emit("closeSearch");
        let publicPath =
          process.env.NODE_ENV === `production`
            ? this.$myApp.config.publicPath
            : "";
        //console.log(`${publicPath}${result.item.path}`);
        location.href = `${publicPath}${result.item.path}`;
      } else {
        return;
      }
    }
  }
};
</script>

<style>
.resultTitle {
  font-weight: bold;
  font-size: 16px;
  background: #eee;
}

.resultSummary {
  font-size: 14px;
  color: #555;
}

.resultTitle:hover {
  color: #888;
}

.resultSummary:hover {
  color: #888;
}

.resultTitle.navFont {
  font-size: 14px;
}
.resultSummary.navFont {
  font-size: 12px;
}

/* .result:hover {
  color: #888;
} */
.spacer {
  -webkit-box-flex: 3 !important;
  -ms-flex-positive: 3 !important;
  flex-grow: 3 !important;
}

.searchField.v-input .v-input__slot {
  border-radius: 0;
}

.navContainer {
  position: relative;
}

.navCard {
  position: absolute;
  width: 100%;
}

.navCardOffsetSm {
  margin-left: -250px;
}

.navCardOffsetMd {
  margin-left: 0;
}

.bottomPadding {
  padding-bottom: 5px;
}
.topMargin {
  margin-top: 15px;
}
.highlight {
  background: yellow;
}
.headingIndent {
  margin-left: 15px;
  font-weight: 900;
}

.resultDivider {
  border-bottom: 1px solid #ddd;
}
</style>
