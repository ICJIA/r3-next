<template>
  <div>
    <div class="text-right py-3">
      <v-btn text style="font-size: 12px;" @click="gotoTranslation('en')"
        >English</v-btn
      >
      |
      <v-btn small text style="font-size: 12px;" @click="gotoTranslation('sp')"
        >Espanol</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoTranslation(lang) {
      // eslint-disable-next-line no-unused-vars

      console.log("switch", lang);
      this.$router.push(this.$route.meta[lang]);
    }
  }
};
</script>

<style lang="scss" scoped></style>
