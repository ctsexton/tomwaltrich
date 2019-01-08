<template>
  <section class="container">
    <div>
      <h1 class="title">
        thomas waltrich
      </h1>
      <h2 class="subtitle">
        {{ bio }}
      </h2>
      <div class="links">
        <a
          href=""
          target="_blank"
          class="button--green">Blooming</a>
        <a
          href=""
          target="_blank"
          class="button--grey">Ancient Animal Orchestra</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
  },
  async asyncData({ $axios }) {
    const apiUrl = process.env.cockpit.apiUrl
    const token = process.env.cockpit.apiToken
    const bio = await $axios.$get(`${apiUrl}/singletons/get/biography/biotext?token=${token}`);
    return { bio }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

