<template>
  <div style="background: #fafafa">
    <v-container
      fluid
      style="background: #fff"
      v-if="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
      "
    >
      <h1 class="mb-10">Page Title Here</h1>
      <v-card elevation="0" style="border: 1px solid #ccc">
        <v-toolbar flat color="grey" dark>
          <v-toolbar-title>Upcoming Events</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical style="background: #eee">
          <v-tab @click="changeTab('community')"> Community Events</v-tab>
          <v-tab @click="changeTab('icjia')">ICJIA Events </v-tab>
          <v-tab @click="changeTab('event3')">Event Type 3</v-tab>

          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
    <v-container fluid style="background: #fff" v-else>
      <v-card elevation="0" style="border: 1px solid #ccc">
        <v-toolbar flat color="grey" dark>
          <v-toolbar-title>Upcoming Events</v-toolbar-title>
        </v-toolbar>
        <v-tabs style="background: #eee" center-active>
          <v-tab @click="changeTab('community')"> Community Events</v-tab>
          <v-tab @click="changeTab('icjia')">ICJIA Events </v-tab>
          <v-tab @click="changeTab('event3')">Event Type 3</v-tab>

          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
              style="background: #eee; height: 300px; overflow-y: auto"
            >
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fixA11y();
  },
  methods: {
    changeTab(e) {
      console.log(e);
    },
    fixA11y() {
      $("i").replaceTagName("span");
    },
  },
};
</script>

<style>
.v-tab {
  justify-content: left !important;
}
.v-tab--active {
  color: #000 !important;
}
</style>
