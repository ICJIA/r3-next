<template>
  <div class="my-10">
    <!-- <div class="iframe-container"> -->
    <div style="font-weight: 900" class="mb-2 text-right">
      * indicates high need R3 zone
    </div>
    <iframe
      width="100%"
      height="740"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://illinois.maps.arcgis.com/apps/webappviewer/index.html?id=137fa70c604e49ad976a6e3248d80068"
    ></iframe>
    <div style="font-weight: 900" class="mt-2 text-right">
      * indicates high need R3 zone
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  border: 1px solid #ccc;
}
.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
</style>
