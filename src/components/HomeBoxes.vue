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
.flexbox-container {
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  min-height: 250px;
}

/* .flexbox-container h2 {
  padding-top: 10px;
} */

.flexbox-container > div {
  width: 50%;
  padding: 60px 30px;
  color: #fff;
  font-size: 18px;
}

.flexbox-container > div:last-child {
  border-right: 0px;
}

.box-1 {
  background: #01579b;
}

.box-2 {
  background: #880e4f;
}

.box:hover {
  box-shadow: 0px 0px 15px #000000;
  z-index: 2;
  -webkit-transition: all 100ms ease-in;
  -webkit-transform: scale(1.01);
  -ms-transition: all 100ms ease-in;
  -ms-transform: scale(1.01);
  -moz-transition: all 100ms ease-in;
  -moz-transform: scale(1.01);
  transition: all 100ms ease-in;
  transform: scale(1.01);
  cursor: pointer;
}

.home-font {
  font-size: 66px;
}

@media only screen and (max-width: 800px) {
  .flexbox-container {
    flex-direction: column;
  }

  .flexbox-container > div {
    width: 100%;
  }
}
</style>
