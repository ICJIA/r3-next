<template>
  <div class="flexbox-container hide-sm-and-down">
    <div
      class="box"
      style="background: #ccc;"
      v-for="(item, index) in $myApp.funding"
      :key="index"
    >
      <NofoCard :item="item" :hidePhoto="false"></NofoCard>
    </div>
  </div>
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
}
/* .flexbox-container h2 {
  padding-top: 10px;
} */
.flexbox-container > div {
  width: 50%;
  padding: 0px;
  color: #ccc;
  font-size: 18px;
}
.flexbox-container > div:last-child {
  border-right: 0px;
}

@media only screen and (max-width: 1024px) {
  .flexbox-container {
    flex-direction: column;
  }
  .flexbox-container > div {
    width: 100%;
  }
}
</style>
