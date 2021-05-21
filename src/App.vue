<template>
  <div tabindex="-1">
    <v-app id="keep">
      <div id="nav" role="navigation" style="z-index: 10000">
        <router-link
          to="#main"
          aria-label="Skip Navigation"
          class="skiplink"
          @click.native="scrollFix('#main')"
          title="Skip Navigation"
          style="font-size: 12px"
        >
          Skip to content
        </router-link>
      </div>

      <AppNav :siteMeta="$myApp.siteMeta" v-if="!loading"></AppNav>

      <AppSidebar :siteMeta="$myApp.siteMeta" v-if="!loading"></AppSidebar>
      <v-fab-transition>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          fixed
          bottom
          dark
          right
          color="blue darken-4"
          transition="scale-transition"
          @click="toTop"
          v-if="!$route.meta.hideScrollToTop"
          aria-label="Click to scroll to top"
        >
          <span class="v-icon mdi mdi-arrow-up"></span>
        </v-btn>
      </v-fab-transition>
      <Outdated
        v-if="
          !loading &&
          $store.state &&
          !$store.state.warningSeen &&
          $browserDetect.isIE
        "
      ></Outdated>

      <v-main>
        <Banner ref="banner" />
        <!-- <Census :key="$route.path"></Census> -->

        <!-- <Language></Language> -->
        <!-- <Translate></Translate> -->

        <!-- <div style="height: 500px"></div> -->

        <transition name="fade" mode="out-in">
          <router-view
            @click="closeElements()"
            :key="$route.fullPath"
          ></router-view>
        </transition>
      </v-main>

      <AppFooter :siteMeta="$myApp.siteMeta" v-if="!loading"></AppFooter>
    </v-app>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  name: "App",
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: this.siteTitle,
      // all titles will be injected into this template
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "canonical", href: this.canonical }],
      meta: [
        { charset: "utf-8" },
        {
          vmid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          vmid: "description",
          name: "description",
          content: this.siteDescription,
        },
      ],
    };
  },
  components: {},
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
      // console.log("Canonical: ", this.canonical);
      //console.log("computedPublicPath: ", this.$myApp.computedPublicPath);
      // if (this.$refs.alert) this.$refs.alert.reset();
      this.$nextTick(function () {
        this.setRouteWrapperFocus();
      });
    },
  },
  data: () => ({
    loading: true,
    pages: [],
    canonical: "",
    siteDescription: "",
    title: "",
    siteMeta: null,
    fab: false,
    censusExpire: true,
  }),
  computed: {
    showCensusModal() {
      //console.log("local storage: ", localStorage.getItem("showCensusModal"));
      if (localStorage.getItem("showCensusModal")) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    setRouteWrapperFocus() {
      this.$el.focus();
    },
    // eslint-disable-next-line no-unused-vars
    scrollFix: function () {
      var hash = location.hash.substr(1);
      var el = document.getElementById(`${hash}`);

      if (hash && el) {
        //console.log(hash);
        this.$vuetify.goTo(`#${hash}`, { offset: 12 }).catch(() => {
          this.$vuetify.goTo(0);
        });
      }
    },
    closeElements() {
      EventBus.$emit("closeSearch");
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 100;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  async mounted() {
    //console.log(`computed public path: ${this.$myApp.computedPublicPath}`);

    // console.log($().jquery);
    const now = new Date();
    const censusExpire = new Date("2020-09-15");
    if (now < censusExpire) {
      this.censusExpire = false;
    }
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  async created() {
    this.loading = true;
    this.siteTitle = `${this.$myApp.config.siteTitle}`;
    this.siteDescription = `${this.$myApp.config.siteDescription}`;
    this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
    this.loading = false;
    //console.log(this.$myApp);
  },
};
</script>

<style>
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

.container.full-width {
  width: 100%;
  padding: 0px !important;
}

.skiplink {
  position: absolute;
  top: 5px;
  border: 0 none;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
}

.skiplink:focus {
  clip: auto;
  height: auto;
  position: 0px;
  z-index: 100000;
  width: auto;
}
</style>
