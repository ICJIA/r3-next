<template>
  <div>
    <NofoSplash></NofoSplash>
    <v-container fluid full-width>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #057DE6" class="text-right">
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
    </v-container>
  </div>
</template>

<script>
import { handleClicks } from "@/mixins/handleClicks";
import { EventBus } from "@/event-bus";

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
    fetchContent() {
      this.markdownContent = async () =>
        await import(`../../public/markdown/funding/test-nofo-1.md`)
          .then(fmd => {
            console.log(fmd);
            this.title = fmd.attributes.title;
            this.showToc = fmd.attributes.showToc;
            this.tocSelectors = fmd.attributes.tocSelectors;
            this.tocHeaders = fmd.attributes.tocHeaders;
            this.markdown = fmd.body;
            this.contentFetched = true;

            // this.$ga.page({
            //   page: this.$route.path,
            //   title: this.title,
            //   location: window.location.href
            // });

            return {
              extends: fmd.vue.component
            };
          })
          .catch(() => {});
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
