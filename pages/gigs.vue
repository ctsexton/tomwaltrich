<template>
  <v-layout wrap align-start justify-start>
    <v-flex xs12 grow>
      <v-layout justify-center>
        <v-flex xs8>
          <v-img :src="imgPath"/>
          <v-list three-line class="semiTransparent">
            <v-list-group value="true">
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title class="display-1 expansive">Upcoming Events</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>        
              <v-card
                v-for="event in upcoming.items" 
                :key="event.id"
                class="transparent text-xs-center"
                flat
                >
                <v-divider />
                <v-card-text class="headline pt-4 pb-2">{{ event.summary }}</v-card-text>
                <v-card-text class="title py-1">{{ event.start.dateTime | formatDateTime }}</v-card-text>
                <v-card-text class="subheading pt-0 pb-4">{{ event.location }}</v-card-text>
              </v-card>
            </v-list-group>
            <v-list-group>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title class="display-1 expansive">Past Events</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>        
              <v-card
                v-for="event in past.items.slice().reverse()" 
                :key="event.id"
                class="transparent"
                >
                <v-divider />
                <v-card-title class="headline py-2">{{ event.summary }}</v-card-title>
                <v-card-text class="title py-1">{{ event.start.dateTime | formatDateTime }}</v-card-text>
                <v-card-text class="subheading pt-0 pb-2">{{ event.location }}</v-card-text>
              </v-card>
            </v-list-group>
          </v-list>
        </v-flex>
      </v-layout>
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
      const localPath = this.$store.state.bio.image.path
      return `${realUrl}${localPath}`
    }
  },
  async asyncData ({ $axios }) {
    const timeSplit = encodeURIComponent(moment().tz('Australia/Melbourne').startOf('day').toISOString())
    const key = 'AIzaSyAm_dRekgQvAVII_FB-iWOIbGQzu8HaD0Y'
    const calId = '18g59ravob7ga6o28hsaij5hno%40group.calendar.google.com'
    const upcomingPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMin=${timeSplit}&key=${key}`
    const pastPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMax=${timeSplit}&key=${key}`
    const upcoming = await $axios.$get(upcomingPath)
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
</style>
