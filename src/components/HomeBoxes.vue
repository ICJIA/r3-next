<template>
  <v-container fluid full-width>
    <v-row no-gutters>
      <v-col
        style="background: #ccc;"
        v-for="(item, index) in $myApp.funding"
        :key="index"
      >
        <NofoCard :item="item" :hidePhoto="true"></NofoCard
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
