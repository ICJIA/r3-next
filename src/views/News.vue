<template>
  <div>
    <transition name="fade" mode="out-in">
      <base-content
        id="baseContentTop"
        class="mb-12"
        :loading="false"
        @click.native="closeSearch()"
      >
        <template v-slot:title>
          <v-container fluid>
            <v-row class="text-left">
              <v-col cols="12" sm="12">
                <h1
                  id="news-and-updates"
                  style="
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  R3 News and Updates
                </h1>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template v-slot:content>
          <v-container style="margin-top: -20px" fluid>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                order-md="1"
                order="2"
                order-sm="2"
                class=""
              >
                <v-data-table
                  :headers="headers"
                  :items="$myApp.news"
                  :items-per-page="-1"
                  class="elevation-3 hover my-8"
                  show-expand
                  item-key="attributes.title"
                  :single-expand="singleExpand"
                  :expanded.sync="expanded"
                  @click:row="clicked"
                >
                  <template v-slot:item.attributes.posted="{ item }">
                    <div style="font-size: 14px !important">
                      <div v-if="isItNew(item)">
                        <v-chip dark x-small color="#2296F3"> NEW! </v-chip>
                      </div>
                      <strong>{{ item.attributes.posted | dateFormat }}</strong>
                    </div>
                  </template>
                  <template v-slot:item.attributes.title="{ item }">
                    <div class="py-2">
                      {{ item.attributes.title }}
                    </div>
                  </template>
                  <template v-slot:item.attributes.summary="{ item }">
                    <div class="py-2">
                      {{
                        item.attributes.summary | truncate(getTruncatateValue())
                      }}
                    </div>
                  </template>
                  <template v-slot:item.path="{ item }">
                    <router-link :to="item.path"
                      ><v-icon>open_in_new</v-icon></router-link
                    >
                  </template>
                  <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length + 2">
                      <v-card
                        class="my-3 py-5 px-5 markdown-body"
                        color="grey lighten-5"
                        elevation="0"
                      >
                        <h2>{{ item.attributes.title }}</h2>
                        <h3
                          style="font-size: 12px; margin-top: -5px; color: #777"
                        >
                          {{ item.attributes.posted | dateFormat }}
                        </h3>
                        <div
                          v-html="item.html"
                          class="markdown-body"
                          @click="handleClicks"
                        ></div>
                      </v-card>
                    </td>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </base-content>
    </transition>
  </div>
</template>

<script>
import { handleClicks } from "@/mixins/handleClicks";
import { EventBus } from "@/event-bus";
import moment from "moment";
export default {
  mixins: [handleClicks],

  metaInfo() {
    return {
      title: "R3 News",
    };
  },
  methods: {
    isItNew(item) {
      let now = moment(new Date()); //todays date
      let end = moment(item.attributes.posted); // another date
      let duration = moment.duration(now.diff(end));
      let days = duration.asDays();
      if (days <= 14) {
        return true;
      } else {
        return false;
      }
    },
    getTruncatateValue() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return 8;
      } else {
        return 50;
      }
    },
    closeSearch() {
      EventBus.$emit("closeSearch");
    },
    clicked(value) {
      if (value === this.expanded[0]) {
        this.expanded = [];
      } else {
        if (this.expanded.length) {
          this.expanded.shift();
          this.expanded.push(value);
        } else {
          this.expanded.push(value);
        }
      }
    },
  },
  data() {
    return {
      expanded: [],
      singleExpand: true,
      headers: [
        {
          text: "Posted",
          align: "start",
          sortable: true,
          value: "attributes.posted",
          width: "200px",
        },
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "attributes.title",
          width: "300px",
        },

        {
          text: "Summary",
          align: "start",
          sortable: true,
          value: "attributes.summary",
        },
        {
          text: "Link",
          align: "start",
          sortable: true,
          value: "path",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
