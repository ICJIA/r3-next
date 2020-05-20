<template>
  <div>
    test
  </div>
</template>

<script>
//import { getRecentR3Articles } from "@/services/Content";
export default {
  created() {
    this.fetchContent();
  },
  data() {
    return {
      loading: true,
      articles: []
    };
  },
  async fetchContent(e) {
    //console.log("Start: ", this.start);
    this.loading = true;
    this.articles = [];
    this.loading = false;
  }
};
</script>
