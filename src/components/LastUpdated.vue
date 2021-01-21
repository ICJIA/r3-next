<template>
  <div
    class="text-left"
    style="font-size: 12px; font-weight: bold; color: #888"
  >
    As of {{ $route.meta.updatedAt | format }}
  </div>
</template>

<script>
export default {
  props: {
    lastUpdated: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
