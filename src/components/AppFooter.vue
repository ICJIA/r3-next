<template>
  <v-footer dark padless class="noprint">
    <v-card
      flat
      tile
      dark
      class="white--text text-center"
      style="width: 100%; background: #023059"
    >
      <v-card-text>
        <span v-for="link in nav" :key="link.attributes.title" class="flexitem">
          <span>
            <v-btn
              dark
              :to="link.path === '/home' ? '/' : `${link.path}`"
              text
              class=" mr-1"
              style="font-weight: 900 !important; color: #fff"
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
    <v-card
      flat
      tile
      class="text-center"
      style="width: 100%; background: #212121"
    >
      <v-divider />

      <v-card-text class="white--text">
        <div style="font-size: 12px">
          &copy;&nbsp;{{ new Date().getFullYear() }}
          <strong>
            <a href="http://icjia.illinois.gov" class="footer-link"
              >Illinois Criminal Justice Information Authority</a
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
  color: #aaa !important;
  text-decoration: none;
}

.footer-link:hover {
  color: #ccc !important;
}
</style>
