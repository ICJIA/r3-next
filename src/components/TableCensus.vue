<template>
  <div>
    <v-card v-if="displaySimpleTable">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <!-- <th class="text-left">State</th> -->
              <th class="text-left">County</th>
              <th class="text-left">Funding Region</th>
              <th class="text-left">Census Tract Name</th>
              <th class="text-left">GeoID</th>
              <th class="text-left">Service Deliv. Min Funding</th>
              <th class="text-left">Service Deliv. Max Funding</th>
              <th class="text-left">Planning Grant Min Funding</th>
              <th class="text-left">Planning Grant Max Funding</th>
              <th class="text-left">High Need Area</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <!-- <td>{{ item.state }}</td> -->
              <td>{{ item.county }}</td>
              <td>{{ item.r3_funding_region }}</td>
              <td>{{ item.census_tract_name }}</td>
              <td>{{ item.census_tract_geoid }}</td>
              <td>{{ item.service_delivery_minimum_funding_amount }}</td>
              <td>{{ item.service_delivery_maximum_funding_amount }}</td>
              <td>{{ item.planning_grant_minimum_funding_amount }}</td>
              <td>{{ item.planning_grant_maximum_funding_amount }}</td>
              <td>{{ item.high_need_area }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card v-else>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          @keyup="watchQuery"
          v-model="search"
          id="my-input"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        v-if="!loading"
        id="test"
        style="width: 100%"
        sort-by="county"
      ></v-data-table>
    </v-card>
    <v-container>
      <v-row>
        <v-col sm="12" md="6">
          <div style="font-size: 11px;">
            Download:
            <!-- <a href="/downloads/EligibleAreasCensusTracts.pdf" class="heavy"
              >PDF</a
            >&nbsp;|&nbsp; -->
            <a class="heavy" href="/downloads/EligibleAreasCensusTracts.json"
              >JSON</a
            >&nbsp;|&nbsp;<a
              class="heavy"
              href="/downloads/EligibleAreasCensusTracts.csv"
              >CSV</a
            >
          </div>
        </v-col>
        <v-col sm="12" md="6">
          <div class="text-right" style="font-size: 11px; color: #222;">
            Last updated: {{ lastUpdated | dateFormat }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getCensusData } from "@/services/Content";
import _ from "lodash";
export default {
  async created() {
    this.fetchContent();
  },
  watch: {
    search(newValue) {
      this.searchArr.push(newValue);
    }
  },

  mounted() {},
  computed: {
    displaySimpleTable() {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.xs
        ? true
        : false;
    }
  },
  props: {
    lastUpdated: {
      type: String,
      default: "2020-03-15"
    }
  },
  data() {
    return {
      showToc: true,
      loading: true,

      items: null,
      search: "",
      timeout: null,
      searchArr: [],
      headers: [
        { text: "County", value: "county" },

        { text: "Funding region", value: "r3_funding_region" },
        { text: "Zone ID", value: "r3_zone_id" },
        { text: "Census Tract Name", value: "census_tract_name" },
        { text: "Census Tract GeoID", value: "census_tract_geoid" },
        {
          text: "Service Deliv. Min Funding",
          value: "service_delivery_minimum_funding_amount"
        },

        {
          text: "Service Deliv. Max Funding",
          value: "service_delivery_maximum_funding_amount"
        },
        {
          text: "Planning Grant Min Funding",
          value: "planning_grant_minimum_funding_amount"
        },

        {
          text: "Planning Grant Max Funding",
          value: "planning_grant_maximum_funding_amount"
        },
        {
          text: "High Need Area",
          value: "high_need_area"
        }
      ]
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    watchQuery(e) {
      clearTimeout(this.timeout);
      let input = document.getElementById("my-input");
      this.timeout = setTimeout(() => {
        console.log("Google event:", input.value);
        // this.$ga.event({
        //   eventCategory: "Search Conversion",
        //   eventAction: "Input",
        //   eventLabel: `Query: '${input.value}'`
        // });
      }, 1000);
    },
    async fetchContent() {
      this.loading = true;
      try {
        let items = await getCensusData();
        this.items = items;
        this.items = _.orderBy(
          this.items,
          ["county", "r3_funding_region", "r3_zone_id"],
          ["asc", "asc", "asc"]
        );
        this.loading = false;
      } catch (e) {
        this.loading = false;

        console.log("Error: ", e);
      }
    }
  }
};
</script>
