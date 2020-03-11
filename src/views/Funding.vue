<template>
  <div>
    <v-img
      :src="require('@/assets/img/splash-04.jpg')"
      :lazy-src="require('@/assets/img/splash-04-tiny.jpg')"
      aspect-ratio="1"
      class="grey lighten-2"
      max-height="400"
    >
      <v-overlay absolute color="#023059" opacity=".8">
        <v-container
          class="fill-height text-center"
          fluid
          style="margin: 0 !important; padding: 0 !important; "
        >
          <v-row align="center">
            <v-col cols="12">
              <h1 class="default-font carousel-large heavy carousel-main-text">
                NOFO Title 1
              </h1>
              <div
                class="default-font carousel-medium mt-10 px-12 carousel-sub-text hidden-sm-and-down"
              >
                Funding community organizations in Illinois that support
                economic development, provide violence prevention and reentry
                services, and offer youth development and civil legal aid.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-img>
    <v-container fluid full-width>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #057DE6" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    About this opportunity
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat, colligit, inplicet arbore valebam
                    declivibus dubia.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9">
          <v-container>
            <v-row>
              <v-col>
                specific nofo info injected here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #035AA6" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Getting Started
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #f1f1f1;">
          <v-container>
            <v-row>
              <v-col>
                getting started boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #023059" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Next steps
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #fff;">
          <v-container>
            <v-row>
              <v-col>
                next steps boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row no-gutters style="min-height: 400px;">
        <v-col cols="12" md="3" style="background: #023766" class="text-right">
          <v-container
            class="fill-height text-right"
            fluid
            style="margin: 0 !important; padding: 0 !important; "
          >
            <v-row align="center">
              <v-col cols="12">
                <div class="pl-5">
                  <h2
                    style="color: #fff; font-size: 1.8em; border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 20px;"
                  >
                    Finalizing
                  </h2>
                  <div style="color: #fff">
                    Solio et arquato sollemnia dissimulator avem genitorem.
                    Aquoso radiantia erat.
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="9" style="background: #f1f1f1;">
          <v-container>
            <v-row>
              <v-col>
                finalizing boilerplate here
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alignments: ["end", "end", "end"]
    };
  }
};
</script>

<style lang="scss" scoped></style>
