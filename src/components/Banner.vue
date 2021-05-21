<template>
  <div v-if="banner">
    <v-alert
      v-model="banner"
      dark
      dismissible
      type="info"
      ref="banner"
      class="mt-2"
    >
      <router-link :to="bannerRoute" style="">
        {{ posted | dateFormat }}: {{ bannerText }}
      </router-link>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: null,
      bannerText: "",
      posted: "",
      bannerRoute: "/",
    };
  },
  created() {
    const currentNews = this.$myApp.news[0];
    console.log(currentNews);
    if (currentNews.attributes.banner) {
      this.banner = true;
      this.bannerText = currentNews.attributes.bannerText;
      this.posted = currentNews.attributes.posted;
      this.bannerRoute = currentNews.path;
    }
  },
};
</script>
