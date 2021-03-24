<template>
  <div>
    <v-app-bar
      app
      clipped-left
      :flat="flat"
      color="grey lighten-5"
      height="90"
      elevate-on-scroll
    >
      <span
        class="v-icon mdi mdi-menu"
        @click="toggleDrawer"
        aria-label="Click to toggle menu"
      ></span>
      <div class="d-flex align-center">
        <div
          style="font-weight: 900 !important"
          :class="{
            smallTitle:
              this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.xs,
            largeTitle:
              this.$vuetify.breakpoint.md ||
              this.$vuetify.breakpoint.lg ||
              this.$vuetify.breakpoint.xl,
          }"
          class="ml-4 hover"
          @click="
            $router.push('/').catch((err) => {
              $vuetify.goTo(0);
            })
          "
        >
          R<span style="color: #7c641b">3</span>&nbsp;&nbsp;<span class="ml-1"
            >RESTORE. REINVEST. RENEW.</span
          >
        </div>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        text
        style="font-weight: 900"
        aria-label="Home"
        class="hidden-sm-and-down"
        to="/"
      >
        <span style="font-size: 12px">Home</span>
      </v-btn>

      <!-- <v-menu offset-y left transition="slide-y-transition" max-width="500">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            style="font-weight: 900"
            aria-label="Apply Now"
            v-on="on"
            class="hidden-sm-and-down"
          >
            <span style="font-size: 12px">Apply Now</span>
            <v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in $myApp.funding"
            :key="index"
            @click="
              $router.push(item.path).catch(err => {
                $vuetify.goTo(0);
              })
            "
          >
            <v-list-item-content class="py-5">
              <v-list-item-title
                style="font-weight: 900; padding-left: 10px; "
                >{{ item.attributes.title }}</v-list-item-title
              >
              <div
                class="ml-5 mt-1 pr-3"
                style="color: #888; font-size: 14px; "
              >
                {{ item.attributes.summary }}
              </div>
              <div
                class="mr-5 mt-1 text-right"
                style="color: #333; font-size: 12px; font-weight: bold "
                v-if="!item.attributes.expires < $myApp.now"
              >
                Deadline: {{ item.attributes.expires | format }}
              </div>
              <div
                v-else
                class="mr-5 mt-1 text-right"
                style="color: #333; font-size: 12px; font-weight: bold "
              >
                Expired
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <v-btn
        :to="link.path === '/home' ? '/' : `${link.path}`"
        text
        class="hidden-sm-and-down"
        style="font-weight: 900"
        :aria-label="link.attributes.title"
        v-for="(link, index) in nav"
        :key="index + 100"
      >
        <span v-if="link.attributes.menuTitle" style="font-size: 12px">
          {{ link.attributes.menuTitle }}
        </span>
        <span v-else style="font-size: 12px">{{ link.attributes.title }}</span>
      </v-btn>

      <v-btn
        to="/news"
        text
        class="hidden-sm-and-down"
        style="font-weight: 900"
        aria-label="News"
      >
        <span style="font-size: 12px">R3 News</span>
      </v-btn>

      <v-btn text to="/search" aria-label="Search">
        <span class="mdi mdi-magnify" style="font-size: 25px"></span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import _ from "lodash";
import { EventBus } from "@/event-bus";
export default {
  data() {
    return {
      extended: false,
      flat: false,
      dialog: false,
      nav: [],
    };
  },
  created() {
    let nav = [];
    this.siteMeta.forEach((item) => {
      if (item.attributes.showInNav) nav.push(item);
    });
    let sortedNav = _.orderBy(nav, ["attributes.menuRank"], ["asc"]);
    //console.log(nav);

    this.nav = sortedNav;
  },
  computed: {
    addAppAttr() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.xs) {
        return false;
      } else {
        return true;
      }
    },
    appTitle() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.xs) {
        return this.$myApp.config.siteTitleMobile;
      } else {
        return this.$myApp.config.siteTitle;
      }
    },
  },

  mounted() {
    EventBus.$on("unflattenNav", () => {
      this.flat = false;
    });
    document.addEventListener("DOMContentLoaded", () => {
      let arr = [
        ...document.getElementsByClassName("v-carousel__controls__item"),
      ];
      arr.forEach((item) => {
        item.setAttribute("aria-label", "navigation button");
      });
    });
  },
  props: {
    siteMeta: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggleSearch() {
      this.$router.push("/search").catch(() => {
        this.$vuetify.goTo(0);
      });
    },
    gotoTA() {
      // window.open("https://icjia.illinois.gov/ta", "_blank");
      window.open("https://icjia.illinois.gov/ta");
    },
    toggleDrawer() {
      EventBus.$emit("toggleDrawer");
    },
    logoWidth() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return 45;
      } else {
        return 50;
      }
    },
  },
};
</script>

<style>
.nav-title {
  font-weight: 900;
  font-size: 28px;
}
.nav-title.small {
  font-size: 14px;
}

.v-card.searchCard {
  background: #ccc !important;
}
.smallTitle {
  font-size: 14px !important;
}

.largeTitle {
  font-size: 26px !important;
}
</style>
