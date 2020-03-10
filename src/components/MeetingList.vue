<template>
  <div
    style="background: #fafafa; border-top: 1px solid #eee; "
    @click="closeSearch()"
  >
    <v-container>
      <v-col class="markdown-body"
        ><h2 id="upcoming-irb-meetings">Upcoming IRB Meetings</h2>
        <div class="mb-10">
          IRB meeting dates are scheduled as needed and are subject to the
          <a
            href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=84&ChapterID=2"
            >Open Meetings Act.</a
          >
          Meetings require a quorum of members to vote on project applications
          and may be rescheduled if quorum is not present.
        </div>
        <div v-if="meetings.length">
          <div v-for="(meeting, index) in meetings" :key="index">
            <v-card
              class="hover px-5 py-5 mb-10 elevation-1 grey lighten-4 meeting-card"
              @click="$router.push(meeting.path)"
            >
              <small>{{ meeting.attributes.scheduledDate | format }}</small>
              <h3>{{ meeting.attributes.title }}</h3>
              <p>{{ meeting.attributes.summary }}</p>
            </v-card>
          </div>
        </div>
        <div v-else class="my-12" style="color: #777">
          <h3>There are no upcoming meetings scheduled.</h3>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      meetings: this.$myApp.meetings
    };
  }
};
</script>

<style>
.meeting-card:hover {
  box-shadow: 0px 0px 15px #000000;
  z-index: 2;
  -webkit-transition: all 100ms ease-in;
  -webkit-transform: scale(1.01);
  -ms-transition: all 100ms ease-in;
  -ms-transform: scale(1.01);
  -moz-transition: all 100ms ease-in;
  -moz-transform: scale(1.01);
  transition: all 100ms ease-in;
  transform: scale(1.01);
  cursor: pointer;
}
</style>
