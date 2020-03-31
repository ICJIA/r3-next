<template>
  <div>
    <v-container fluid style="margin-top: -55px;" class="mb-12">
      <div v-for="category in $myApp.categories" :key="category">
        <h2>{{ category }}</h2>

        <div
          v-for="item in $myApp.news"
          :key="item.attributes.title"
          class="px-5"
        >
          <li
            v-if="
              item.attributes.category === category && !item.attributes.file
            "
          >
            <router-link :to="item.path"
              >{{ item.attributes.posted | dateFormat }} -
              {{ item.attributes.title }}</router-link
            >
          </li>
          <li
            v-if="item.attributes.category === category && item.attributes.file"
          >
            <a
              :href="
                `${$myApp.computedPublicPath}/downloads/${item.attributes.file}`
              "
              >{{ item.attributes.posted | dateFormat }} -
              {{ item.attributes.title }}</a
            >
          </li>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
// import _ from "lodash";
export default {
  data() {
    return {
      newsItems: null,
      loading: true
    };
  },
  mounted() {
    // let newsItems = this.$myApp.siteMeta.filter(item => {
    //   if (item.root === "/news") {
    //     return item;
    //   }
    // });
    // this.newsItems = newsItems;

    this.loading = false;
  }
};
</script>

<style lang="scss" scoped></style>
