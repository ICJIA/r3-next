<template>
  <div>
    {{ $myApp.siteMeta[5]["root"] }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$myApp);
  }
};
</script>

<style lang="scss" scoped></style>
