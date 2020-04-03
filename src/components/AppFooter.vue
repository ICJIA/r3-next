<template>
  <v-footer padless class="noprint">
    <v-card
      flat
      tile
      class="white--text text-center"
      style="width: 100%; background: #ddd; border-top: 1px solid #fff"
    >
      <v-card-text>
        <span v-for="(link, index) in nav" :key="index" class="flexitem">
          <span>
            <v-btn
              :to="link.path === '/home' ? '/' : `${link.path}`"
              text
              class=" mr-1"
              style="font-weight: 900 !important;"
              :aria-label="link.attributes.title"
            >
              <span v-if="link.attributes.menuTitle" style="font-size: 12px">{{
                link.attributes.menuTitle
              }}</span>
              <span v-else style="font-size: 12px">{{
                link.attributes.title
              }}</span>
            </v-btn>
          </span>
        </span>
      </v-card-text>
    </v-card>

    <v-card flat tile class="text-center" style="width: 100%; background: #ddd">
      <v-divider />

      <v-card-text class="white--text">
        <div class="mt-1 mb-4">
          <Translate></Translate>
        </div>
        <div style="font-size: 12px; color: #333">
          &copy;&nbsp;{{ new Date().getFullYear() }}
          <strong>
            <a href="http://www.illinois.gov" class="footer-link"
              >State of Illinois</a
            > </strong
          >&nbsp;|&nbsp;
          <strong>
            <a
              href="https://www2.illinois.gov/sites/gov/Pages/default.aspx"
              target="_blank"
              class="footer-link"
              rel="noreferrer"
              >Governor JB Pritzker</a
            > </strong
          >&nbsp;|&nbsp;
          <strong>
            <a
              href="https://www2.illinois.gov/Pages/About/Privacy.aspx"
              target="_blank"
              class="footer-link"
              rel="noreferrer"
              >Privacy</a
            > </strong
          >&nbsp;|&nbsp;
          <strong>
            <a
              :href="`${$myApp.config.githubURL}`"
              target="_blank"
              class="footer-link"
              rel="noreferrer"
              >Github</a
            >
          </strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import _ from "lodash";
export default {
  data: () => ({
    icons: ["fab fa-facebook", "fab fa-twitter"],
    loading: true,
    nav: []
  }),

  created() {
    let nav = [];
    this.siteMeta.forEach(item => {
      if (item.attributes.showInFooter) nav.push(item);
    });
    let sortedNav = _.orderBy(nav, ["attributes.menuRank"], ["asc"]);
    //console.log(nav);

    this.nav = sortedNav;
  },
  methods: {
    getPath(link) {
      console.log(link.path);
      return "/";
    }
  },
  props: {
    siteMeta: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
.footer-link {
  color: #333 !important;
  text-decoration: underline;
}

.footer-link:hover {
  color: #aaa !important;
}
</style>
