<template>
  <v-container
    fluid
    full-width
    style="margin: 0 !important; padding: 0 !important; background: #eee; border-bottom: 1px solid #ccc;"
  >
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <iframe
          width="101.5%"
          height="500px"
          src="https://www.youtube.com/embed/XokTQSGNj3Q"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="px-5"
        ><h2 id="greetings">Respiciens atque ex adhuc referentem</h2>
        <p>
          Lorem markdownum et unde quidem, luridaque, Aegides nubila nympham
          tuis fecit, illa mansit furorem. Imagine porrigeret mare: inmiti pars
          curvis respiciens atque ex, adhuc referentem ruunt.
        </p>

        <p>
          Lorem markdownum et unde quidem, luridaque, Aegides nubila nympham
          tuis fecit, illa mansit furorem. Imagine porrigeret mare: inmiti pars
          curvis respiciens atque ex, adhuc referentem ruunt. Lorem markdownum
          et unde quidem, luridaque, Aegides nubila nympham tuis fecit, illa
          mansit furorem. Imagine porrigeret mare: inmiti pars curvis respiciens
          atque ex, adhuc referentem ruunt.
        </p>

        <p>
          Lorem markdownum et unde quidem, luridaque, Aegides nubila nympham
          tuis fecit, illa mansit furorem. Imagine porrigeret mare: inmiti pars
          curvis respiciens atque ex, adhuc referentem ruunt. Lorem markdownum
          et unde quidem, luridaque, Aegides nubila nympham tuis fecit, illa
          mansit furorem. Imagine porrigeret mare: inmiti pars curvis respiciens
          atque ex, adhuc referentem ruunt.
        </p>
      </v-col>
    </v-row></v-container
  >
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
