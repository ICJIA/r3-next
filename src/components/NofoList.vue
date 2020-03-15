<template>
  <div>
    <div v-for="(item, index) in $myApp.funding" :key="index">
      <NofoCard :item="item" class="my-8"></NofoCard>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
