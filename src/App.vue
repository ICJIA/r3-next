<template>
  <v-app id="keep">
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
        <v-icon>keyboard_arrow_up</v-icon>
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

    <v-content>
      <!-- <Corona ref="alert" /> -->
      <transition name="fade" mode="out-in">
        <router-view
          @click="closeElements()"
          :key="$route.fullPath"
        ></router-view>
      </transition>
    </v-content>
    <AppFooter :siteMeta="$myApp.siteMeta" v-if="!loading"></AppFooter>
  </v-app>
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
        lang: "en"
      },
      link: [{ rel: "canonical", href: this.canonical }],
      meta: [
        { charset: "utf-8" },
        {
          vmid: "robots",
          name: "robots",
          content: "index, follow"
        },
        {
          vmid: "description",
          name: "description",
          content: this.siteDescription
        }
      ]
    };
  },
  components: {},
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
      //console.log("Canonical: ", this.canonical);
      //console.log("computedPublicPath: ", this.$myApp.computedPublicPath);
      if (this.$refs.alert) this.$refs.alert.reset();
    }
  },
  data: () => ({
    loading: true,
    pages: [],
    canonical: "",
    siteDescription: "",
    title: "",
    siteMeta: null,
    fab: false
  }),
  methods: {
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
    }
  },
  async mounted() {
    //console.log(`computed public path: ${this.$myApp.computedPublicPath}`);
  },
  async created() {
    this.loading = true;
    this.siteTitle = `${this.$myApp.config.siteTitle}`;
    this.siteDescription = `${this.$myApp.config.siteDescription}`;
    this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
    this.loading = false;
  }
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
</style>
