<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6 class="pt-5">
      <v-card flat class="standard-card">
        <v-img :src="imgPath"/>
      </v-card>
      <v-list two-line class="semiTransparent">
        <v-list-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title class="headline expansive">Upcoming Events</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>        
          <v-card
            v-for="event in upcoming.items" 
            :key="event.id"
            class="transparent text-xs-center"
            flat
            >
            <v-divider class="make-white" />
            <v-card-text class="headline pt-4 pb-2">{{ event.summary }}</v-card-text>
            <v-card-text class="subheading py-1">{{ event.start.dateTime | formatDateTime }}</v-card-text>
            <v-card-text class="body-2 pt-0 pb-4">{{ event.location }}</v-card-text>
          </v-card>
        </v-list-group>
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title class="headline expansive">Past Events</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>        
          <v-card
            v-for="event in past.items.slice().reverse()" 
            :key="event.id"
            class="transparent text-xs-center"
            >
            <v-divider class="make-white"/>
            <v-card-text class="headline py-2">{{ event.summary }}</v-card-text>
            <v-card-text class="subheading py-1">{{ event.start.dateTime | formatDateTime }}</v-card-text>
            <v-card-text class="body-2 pt-0 pb-2">{{ event.location }}</v-card-text>
          </v-card>
        </v-list-group>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
import moment from 'moment-timezone'
export default {
  data () {
    return {
    }
  },
  computed: {
    calPath: function () { return process.env.cockpit.cal },
    basePath: function () { return process.env.cockpit.realUrl },
    imgPath: function () {
      const realUrl = process.env.cockpit.realUrl
      const localPath = this.$store.state.gigs.image.path
      return `${realUrl}${localPath}`
    }
  },
  async asyncData ({ $axios }) {
    const timeSplit = encodeURIComponent(moment().tz('Australia/Melbourne').startOf('day').toISOString())
    const key = 'AIzaSyAm_dRekgQvAVII_FB-iWOIbGQzu8HaD0Y'
    const calId = '65gs0chifplj1sng048qvu6bpg@group.calendar.google.com'
    const upcomingPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMin=${timeSplit}&key=${key}`
    const pastPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMax=${timeSplit}&key=${key}`
    let upcoming = await $axios.$get(upcomingPath)
    if (upcoming.items.length === 0) {
      upcoming = {
        items: [{
          summary: 'No Upcoming Events',
          location: '',
          start: { dateTime: '' },
          id: 0
        }]
      }
    }
    console.log(upcoming)
    const past = await $axios.$get(pastPath)
    return { upcoming, past }
  },
  filters: {
    formatDateTime: function (value) {
      if (!value) return ''
      return moment(value).tz('Australia/Melbourne').format('dddd, MMMM D YYYY, h:mma')
    }
  }
}
</script>
<style scoped>
>>>.scroll {
  overflow-y: auto;
}
>>>.expansive {
  height: 40px;
}
>>>.semiTransparent {
  background: rgba(0,0,0,0.5);
}
>>>.make-white {
  background: rgba(255, 255, 255, 0.3);
}
</style>
