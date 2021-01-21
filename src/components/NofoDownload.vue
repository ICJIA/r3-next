<template>
  <v-alert prominent type="error">
    <v-row align="center">
      <v-col class="grow">
        Nunc nonummy metus. Nunc interdum lacus sit amet orci. Nullam dictum
        felis eu pede mollis pretium. Cras id dui.
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://icjia.illinois.gov/gata",
    },
  },
};
</script>

<style lang="scss" scoped></style>
