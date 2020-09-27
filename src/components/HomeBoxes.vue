<template>
  <v-container fluid full-width style="margin-top: -12px;">
    <v-row no-gutters>
      <v-col
        style="background: #ccc;"
        v-for="(item, index) in $myApp.funding"
        :key="index"
        cols="12"
        md="6"
      >
        <NofoCard :item="item" :hidePhoto="false"></NofoCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$emit("home-boxes");
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
}
</style>
